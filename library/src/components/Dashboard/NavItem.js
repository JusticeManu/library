import React from "react";

import { Box, Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styles from "./NavItem.module.css";
import { IconContext } from "react-icons";

export const NavItem = ({ name, path, icon, match }) => {
  return (
    <Box d='flex'>
      <NavLink
        to={`${match.url}/${path}`}
        activeClassName={styles.Active}
        exact
      >
        <Flex align='center'>
          <IconContext.Provider value={{ color: "white", size: "24px" }}>
            <Box as={icon} d='flex' ml='6' mb='7px'></Box>
          </IconContext.Provider>
          <Text fontSize={["14px", "16px"]} color='white' my='4' px='20px'>
            {name}
          </Text>
        </Flex>
      </NavLink>
    </Box>
  );
};
