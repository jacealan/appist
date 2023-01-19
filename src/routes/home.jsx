import { VStack, Center, Box, Button, Flex, Image } from "@chakra-ui/react"

import theme from "../theme.json"
import divider from "../assets/divider.png"

function Home() {
  return (
    <>
      <VStack textAlign={"center"} pt={100} pb={100}>
        <Box pb={50}>
          <Box fontSize={{ base: 20, md: 30, lg: 40 }} fontWeight={900}>
            필요한 <span style={{ color: `${theme.blue3}` }}>App</span>을 만들어
            드립니다.
            <br />
            아이디어를 <span style={{ color: `${theme.blue3}` }}>App</span>으로
            만들어 드립니다.
            <br />
          </Box>
          <Box
            fontSize={{ base: 13, md: 20, lg: 20 }}
            fontWeight={500}
            pt={5}
            pb={5}
          >
            Appist는 <span style={{ color: `${theme.blue3}` }}>App</span>을
            만들어 드립니다.
            <br />
            <span style={{ color: `${theme.blue2}` }}>Web</span>으로도
            가능합니다.
            <br />
            생각과 아이디어가 있다면, 지금 문의하세요.
          </Box>
          <Button
            fontSize={{ base: 15, md: 22, lg: 30 }}
            variant="solid"
            // colorScheme="facebook"
            color={theme.white0}
            bg={theme.blue3}
            _hover={{ bg: theme.blue2 }}
            padding={8}
          >
            질문/요청
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
            >
              <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" />
            </svg>
          </Button>
        </Box>
        {/* <Center color={theme.white2}>· · ·</Center> */}
        <Image src={divider} w={5} borderRadius={20} />
        <Box
          id="Features"
          fontSize={{ base: 20, md: 22, lg: 30 }}
          fontWeight={599}
          pt={50}
          pb={50}
        >
          <Flex justifyContent={"center"}>
            <Flex
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              w={180}
              h={180}
              m={{ base: 1, md: 3, lg: 5 }}
              border="solid 1px #ccc"
              borderRadius={20}
            >
              <Box>쉽고 편한</Box>
              <Box style={{ color: `${theme.blue3}`, fontWeight: 700 }}>
                UI/UX
              </Box>
            </Flex>
            <Flex
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              w={180}
              h={180}
              m={{ base: 1, md: 3, lg: 5 }}
              border="solid 1px #ccc"
              borderRadius={20}
            >
              <Box>
                Simple
                <br /> & Sexy
              </Box>
              <Box style={{ color: `${theme.blue3}`, fontWeight: 700 }}>
                Design
              </Box>
            </Flex>
          </Flex>
          <Flex justifyContent={"center"}>
            <Flex
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              w={180}
              h={180}
              m={{ base: 1, md: 3, lg: 5 }}
              border="solid 1px #ccc"
              borderRadius={20}
            >
              애플
              <br />
              <span style={{ color: `${theme.blue3}`, fontWeight: 700 }}>
                AppStore
              </span>
            </Flex>
            <Flex
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              w={180}
              h={180}
              m={{ base: 1, md: 3, lg: 5 }}
              border="solid 1px #ccc"
              borderRadius={20}
            >
              구글
              <br />
              <span style={{ color: `${theme.blue3}`, fontWeight: 700 }}>
                PlayStore
              </span>
            </Flex>
          </Flex>
        </Box>
        <Image src={divider} w={5} borderRadius={20} />
        <Box id="Managements"></Box>
      </VStack>
    </>
  )
}

export default Home
