import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { dashNavLInks } from "../../lib/mock";
import { NavItem } from "./NavItem";
import { FiHome } from "react-icons/fi";
import { NavLink, useRouteMatch } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import styles from "./NavItem.module.css";

export const SideNav = () => {
  const match = useRouteMatch();

  return (
    <Flex direction='column' w='100%'>
      <Box mb='4'>
        <Box d='flex'>
          <NavLink to={match.url} activeClassName={styles.Active} exact>
            <Flex align='center'>
              <IconContext.Provider value={{ color: "white", size: "24px" }}>
                <Box as={FiHome} d='flex' ml='6' mb='7px'></Box>
              </IconContext.Provider>
              <Text fontSize={["14px", "16px"]} color='white' my='4' px='20px'>
                Library
              </Text>
            </Flex>
          </NavLink>
        </Box>

        {dashNavLInks.map(({ name, path, icon }) => {
          return (
            <Box my='4' key={name}>
              <NavItem name={name} path={path} icon={icon} match={match} />
            </Box>
          );
        })}
      </Box>
    </Flex>
  );
};
