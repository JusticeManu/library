import React from "react";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  MenuItemOption,
  Flex,
  Button,
} from "@chakra-ui/react";
import { IconContext } from "react-icons/lib";
import { BiChevronDown, BiSearch } from "react-icons/bi";

const FilterSearch = (props) => {
  return (
    <Flex
      bg='#fff'
      justify='space-between'
      align={["start", "center"]}
      direction={["column", "row"]}
      w='100%'
      p='2'
      my='4'
    >
      <Menu w='100%' closeOnSelect={false} bg='#fff' mr='auto'>
        <MenuButton
          as={Button}
          variantColor='transparent'
          color='black'
          _focus='none'
          rightIcon={<BiChevronDown />}
          fontWeight='500'
          fontSize='14px'
          mb={["2", "0"]}
          bg='#fff'
          rounded='none'
          _hover={{ bg: "#fff" }}
          _focus={{ bg: "#fff" }}
          _active={{ bg: "#fff" }}
        >
          Filter By
        </MenuButton>
        <MenuList minWidth='240px'>
          <MenuOptionGroup title='' bg='#fff'>
            {props.filterTerms.map((term, idx) => (
              <MenuItemOption key={idx} value={term} bg='#fff'>
                {term}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
      <Box>
        <FormControl w='100%' ml='auto' alignSelf='flex-end'>
          <InputGroup>
            <InputLeftElement
              children={
                <IconContext.Provider value={{ color: "#bac5d4" }}>
                  <BiSearch />
                </IconContext.Provider>
              }
            />
            <Input
              type='text'
              placeholder={props.placeholder ? props.placeholder : "Search"}
              name='search'
              _focus='none'
              variant='flushed'
              width={["100%", "400px"]}
              isFullWidth
              borderBottom='none'
              bg='#F9F9F9'
              //   onChange={(e) => props.onSearch(e.target.value)}

              // py="6"
            ></Input>
          </InputGroup>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default FilterSearch;
