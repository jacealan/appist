import { Box } from "@chakra-ui/react"

import theme from "../theme.json"

function Footer() {
  return (
    <>
      <Box bg={theme.black2} color={theme.white2} p={5}>
        <Box>&copy; Appist {new Date().getFullYear()}</Box>
      </Box>
    </>
  )
}

export default Footer
