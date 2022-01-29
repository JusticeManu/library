import React from "react";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";

import { FiChevronLeft, FiHome } from "react-icons/fi";

import DashboardNavigator from "../navigator/DashboardNavigator";
import { Header } from "../components/Dashboard/Header";
import { SideNav } from "../components/Dashboard/SideNav";
import { useHistory, useRouteMatch, useLocation } from "react-router-dom";

const Dashboard = () => {
  const [show, setShow] = React.useState(false);
  const history = useHistory();
  const handleToggle = () => setShow(!show);
  const { pathname } = useLocation();

  return (
    <Flex direction="column">
      <Header title="Dashboard" icon={FiHome} toggle={handleToggle} />
      <Flex mt="55px" w="100%" h="120vh" overflow="hidden" position="fixed">
        <Box
          flex="1"
          bg="#1F2342"
          padding="31px 0px"
          h="100vh"
          display={{ base: show ? "block" : "none", md: "flex" }}
          overflowY="hidden"
          position={["fixed", "relative"]}
          zIndex="100"
          alignItems="flex-start"
        >
          <SideNav />
        </Box>
        <Box
          flex="5"
          bg="#F7F9FF"
          h="100vh"
          w="100%"
          d="flex"
          flexDirection="column"
          overflowY="scroll"
          zIndex="50"
          justifyContent="space-between"
          px="6"
          pb="40"
          mb="20"
        >
          {pathname.includes("/") && (
            <Flex mt="4">
              <IconButton
                icon={<FiChevronLeft />}
                onClick={() => history.goBack()}
              ></IconButton>
            </Flex>
          )}
          <DashboardNavigator toggle={() => setShow(false)} />
          <Box
            bg="white"
            h="50px"
            w="84%"
            display="flex"
            justifyContent="start"
            alignItems="center"
            position="fixed"
            bottom="0"
            right="0"
          >
            <Text color="#797979" fontWeight="700" textAlign="start" pl="6">
              Copyright @ 2022 | BothOfUs
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
