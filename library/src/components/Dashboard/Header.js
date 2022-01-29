import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiBell, FiMenu } from "react-icons/fi";
import { IconContext } from "react-icons";


import { useWindowDimensions } from "../../lib/service";
import { Link } from "react-router-dom";

export const Header = ({ title, icon, toggle }) => {
  const { width } = useWindowDimensions();

  const isMobile = width <= 600;

  return (
    <Flex
      justifyContent='space-between'
      align='center'
      shadow='sm'
      h={["80px", "55px"]}
      padding={["20px 30px", "10px 50px"]}
      bg='white'
      shadow='sm'
      borderBottom='2px solid #eee'
      py='2'
      position='fixed'
      w={["100vw", "100%"]}
      zIndex='320'
      top='0'
      left='0'
    >
      <Box display='flex' justifyContent='start' alignContent='center'>
        <Stack isInline spacing='4' align='center'>
          <IconContext.Provider value={{ size: "24px", color: "gray" }}>
            <Box as={FiMenu} d={["flex", "none"]} onClick={toggle}></Box>
          </IconContext.Provider>
        </Stack>
        <Link to='/'>
          <Text fontWeight='800' ml='6'>
            BothOfUs 
          </Text>
        </Link>
      </Box>

      <Box d='flex' align='center'>
        <IconContext.Provider value={{ size: "24px", color: "gray" }}>
          <Box as={FiBell} alignSelf='center'></Box>
        </IconContext.Provider>
        <Box height='40px' width='40px' m='3'>
          <Image
            src='https://pickaface.net/gallery/avatar/halladam558939a64b26e.png'
            size='40px'
            rounded='full'
            objectFit='cover'
            height='100%'
            width='100%'
            ml='4'
          ></Image>
        </Box>

        <Menu>
          <MenuButton
            as={Text}
            variantColor='pink'
            alignSelf='center'
            mx='4'
            fontWeight='700'
            rightIcon='chevron-down'
          >
            User
          </MenuButton>
          <MenuList>
            <MenuGroup title='Profile'>
              <MenuItem>My Account</MenuItem>
              <MenuItem onClick={""}>Log out </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};
