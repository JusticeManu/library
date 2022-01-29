import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Icon,
  Button,
  Grid,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  Image,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import styles from "./resources.module.css";
import { FileResourceCard } from "../components/Cards";
import { useWindowDimensions } from "../lib/hooks";
import resource1 from "../assets/icons/pngtree-pdf-file-document-icon-png-image_4187646.jpg";
import fallbackSrc from "../assets/icons/pngtree-pdf-file-document-icon-png-image_4187646.jpg";
import { allresources } from "../lib/mock";

function HomePage(props) {
  const [resourcesList, setResourcesList] = useState([]);
  const [isFetchLoading, setFetchIsLoading] = useState(false);
  const [searchParam, setSearchParam] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const [resourceParams, setResourceParam] = useState({});
  const { width } = useWindowDimensions();
  const [filteredResource, setFilteredResources] = useState([]);
  const [filteredValuePresent, setFilteredValuePresent] = useState("All");

 

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const handleChange = (e) => {
    setSearchParam(e.target.value);
  };

  const filteredItems =
    searchParam === ""
      ? resourcesList
      : resourcesList.filter((item) =>
          item?.description.toLowerCase().includes(searchParam.toLowerCase())
        );

  useEffect(() => {
    const fetchAllResources = async () => {
      try {
        const data = allresources;
      
        setFetchIsLoading(false);

        setResourcesList(data);
      } catch (err) {
        setFetchIsLoading(false);
        console.log("err", err);
      }
    };
    fetchAllResources();
  }, []);

  console.log(resourceParams);
  return (
    <Box>
      <Box className={styles.resource}></Box>
      <Modal isOpen={isOpen} onClose={onClose} size="1000px">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Resource</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.js">
              <div style={{ height: "750px" }}>
                <Viewer
                  fileUrl={resourceParams?.resource?.url}
                  plugins={[defaultLayoutPluginInstance]}
                />
              </div>
            </Worker>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Flex justify="space-between" p="60px" align="center">
        <Text fontSize="46px" fontWeight="800">
          Library
        </Text>
        <Box
          ml="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <form>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pl="4"
                  children={<Search2Icon name="search" color="gray.300" />}
                />

                <Input
                  placeholder="Search for a book"
                  w={["90vw", "600px"]}
                  ml="2"
                  type="text"
                  onChange={handleChange}
                  value={searchParam}
                ></Input>
              </InputGroup>
            </FormControl>
          </form>
        </Box>
      </Flex>
      {filteredValuePresent === "All" ? (
        <Box px="60px" py="30px" mb="20">
          

          {resourcesList.length > 0 ? (
            <Grid
              templateColumns={[
                "repeat(auto-fit, minmax(250px, 1fr))",
                "repeat(auto-fit, minmax(250px, 270px))",
              ]}
              gap="6"
            >
              {filteredItems.map((resource) => (
                <FileResourceCard
                  key={resource.id}
                  width={["100%", "270px"]}
                  resource={resource}
                  heading={resource.description}
                  author={resource.author}
                  date={resource.date}
                  bookImage={resource.image}
                  imageSrc={resource1}
                  fallbackImg={fallbackSrc}
                  onOpen={onOpen}
                  setParams={() =>
                    setResourceParam({
                      resource: resource,
                      imageSrc: resource1,
                      fallbackImg: fallbackSrc,
                    })
                  }
                />
              ))}
            </Grid>
          ) : (
            <Box>
              <Text textAlign="center">
                There are no resoures at the moment
              </Text>
            </Box>
          )}

          {/* </Flex> */}
          {resourcesList.length > 0 && (
            <Box my="10" d="flex" justifyContent="center">
              <Button variant="link" variantColor="green">
                Load More
              </Button>
            </Box>
          )}
        </Box>
      ) : (
        <Box px="60px" py="30px" mb="20">
          {/* <Flex wrap='wrap' justify='space-between'> */}

          {filteredResource.length > 0 ? (
            <Grid
              templateColumns={[
                "repeat(auto-fit, minmax(250px, 1fr))",
                "repeat(auto-fit, minmax(250px, 270px))",
              ]}
              gap="6"
            >
              {filteredResource.map((resource) => (
                <FileResourceCard
                  key={resource.id}
                  width={["100%", "270px"]}
                  resource={resource}
                  heading={resource.description}
                  author={resource.author}
                  date={resource.date}
                  imageSrc={resource1}
                  fallbackImg={fallbackSrc}
                  onOpen={onOpen}
                  setParams={() =>
                    setResourceParam({
                      resource: resource,
                      imageSrc: resource1,
                      fallbackImg: fallbackSrc,
                    })
                  }
                />
              ))}
            </Grid>
          ) : (
            <Box>
              <Text textAlign="center">
                There are no resoures at the moment
              </Text>
            </Box>
          )}

          {/* </Flex> */}
          {filteredResource.length > 0 && (
            <Box my="10" d="flex" justifyContent="center">
              <Button variant="link" variantColor="green">
                Load More
              </Button>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}

export default HomePage;
