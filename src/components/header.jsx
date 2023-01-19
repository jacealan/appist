import { Flex, Box, Image, Button } from "@chakra-ui/react"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"

import theme from "../theme.json"
import logo from "../assets/logo.png"

function Header() {
  return (
    <>
      <Box bg={theme.white1} p={5}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Flex alignItems={"center"}>
            <Image src={logo} w={10} borderRadius={30} mr={2} />
            <Box fontSize={20} fontWeight={800}>
              Appist
            </Box>
          </Flex>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              colorScheme="gray"
            >
              About
            </MenuButton>
            <MenuList color={theme.black2}>
              <MenuItem>Ask/Order</MenuItem>
              <MenuItem>Features</MenuItem>
              <MenuItem>Managements</MenuItem>
              <MenuItem>Examples</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    </>
  )
}

export default Header
