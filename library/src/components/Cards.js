import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { DownloadIcon } from "@chakra-ui/icons";

import { formatDate } from "../lib/utils";

export const FileResourceCard = ({
  resource,
  imageSrc,
  width,
  fallbackImg,
  bookImage,
  onOpen,
  setParams,
}) => {
  const truncate = (str, maxLength) =>
    str.length > maxLength ? `${str.substring(0, maxLength)} ...` : str;

  const onOpenModal = () => {
    setParams();
    onOpen();
  };

  console.log(resource.date)

  const splitDate = (date) => {
    const dateStr = date.split("/");
    console.log(dateStr)
    const month = dateStr[0];
    const year = dateStr[1];

    console.log(month, year);

    return {
      month,
      year,
    };
  };

  return (
    <Box
      w={[width[0], width[1]]}
      bg="white"
      shadow="sm"
      pb="6"
      mx={["auto", "0"]}
      mb={["8", "20"]}
    >
      <Flex direction="column" h="100%" w="100%">
        <Box width="100%" borderBottom="3px solid gold" flex="2" h="100%">
          <Image
            src={resource.type === "docs" ? bookImage:fallbackImg}
            objectFit={resource.type === "docs" ? "full" : "cover"}
            w={resource.type === "docs" ? "150px" : "150px"}
            h="100%"
            mx="auto"
          ></Image>
        </Box>
        <Box flex="1" h="100%" w="100%">
          <Text
            flex="1"
            width="100%"
            fontSize="16px"
            fontWeight="600"
            px="4"
            pt="4"
            mt="auto"
          >
            {truncate(resource.description, 10)}
          </Text>
          <Flex align="center" justify="space-between" px="4" py="0" w="100%">
            <Text
              flex="1"
              width="100%"
              fontSize="14px"
              fontWeight="600"
              color="#837d85"
            >
              Author: {resource.author ? resource.author : "N/A"}
            </Text>
            <Text
              flex="1"
              fontSize="14px"
              fontWeight="500"
              color="#837d85"
              mr="0"
              textAlign="right"
            >
              {resource.date
                ? `${splitDate(resource.date).month}/${splitDate(resource.date).year
                  }`
                : "Date: N/A"}
            </Text>
          </Flex>
          <Flex align="center" mt="4">
            <Button
              rightIcon={<DownloadIcon />}
              variant="outline"
              alignSelf="start"
              variantColor="green"
              m="4"
            >
              <a href={resource.url} download="My_File.pdf" target="blank">
                Download
              </a>
            </Button>

            <Button
              variant="link"
              alignSelf="start"
              padding="10px"
              variantColor="#1f285a"
              fontSize="14px"
              alignSelf="center"
              onClick={onOpenModal}
            >
              View
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

// export const ImageHolder = ({ eventImage }) => {
//   return (
//     <Box
//       display="flex"
//       overflowX="hidden"
//       width="450px"
//       height="200px"
//       justifyContent="center"
//       alignContent="center"
//       margin="5px"
//       objectFit="contain"
//     >
//       <Image src={eventImage} width="100%" height="100%" rounded="md"></Image>
//     </Box>
//   );
// };
