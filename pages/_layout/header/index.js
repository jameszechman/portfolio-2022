import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import { LogoIcon } from "@components/brand";
import PropTypes from "prop-types";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { NavLink } from "./navlink";

export function Header({ title = "James Zechman" }) {
  const { colorMode, toggleColorMode } = useColorMode();

  function changeTheme() {
    toggleColorMode();
  }

  return (
    <>
      <Flex
        as='header'
        height={[120, null, 180]}
        background={"primary"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        marginBottom={5}
      >
        <Container maxW='container.xl'>
          <Flex alignItems='center' justifyContent='space-between'>
            <Flex alignItems={"center"} gridGap={3}>
              <LogoIcon boxSize={["24px", null, 42]} color='#fff' />
              <Heading
                as='h1'
                margin={0}
                size={["xl", null, "3xl"]}
                color='transparent'
                textTransform='uppercase'
                css={`
                  -webkit-text-stroke-color: #fff;
                  -webkit-text-stroke-width: 2px;
                  text-decoration: none;
                `}
                letterSpacing={1.5}
              >
                {title}
              </Heading>
            </Flex>
            <IconButton
              colorScheme='transparent'
              onClick={changeTheme}
              aria-label='Change Color Mode'
              icon={
                colorMode === "light" ? (
                  <BsFillSunFill color='#fff' size='22' />
                ) : (
                  <BsFillMoonFill color='#fff' size='22' />
                )
              }
            />
          </Flex>
        </Container>
      </Flex>
      <Box
        maxW={550}
        margin={"0 auto"}
        rounded={"md"}
        boxShadow={"md"}
        paddingTop={2}
        paddingBottom={2}
        paddingLeft={2}
        paddingRight={2}
        transform={["translateY(-50%)", null, "translateY(-100%)"]}
        background={useColorModeValue("white", "gray.900")}
      >
        <SimpleGrid columns={5} row={1}>
          <NavLink href='/'>Home</NavLink>
          <NavLink href='/#resume'>Resume</NavLink>
          <NavLink href='/tag/blog'>Blog</NavLink>
          <NavLink href='/tag/projects'>Projects</NavLink>
          <NavLink href='/contact'>Contact</NavLink>
        </SimpleGrid>
      </Box>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};
