import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { MetaData } from "@components/meta";
import { url } from "lib";

export default function Page({ settings }) {
  const color = useColorModeValue("gray.100", "gray.800");
  return (
    <>
      <MetaData settings={settings} title='Contact' />
      <Box marginBottom={8}>
        <Heading as='h1' size='2xl' color='primary' textAlign={"center"}>
          Contact
        </Heading>
      </Box>
      <Box
        borderRadius='md'
        background={color}
        boxShadow='md'
        padding={5}
        position='relative'
        display={"flex"}
        flexWrap={"wrap"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <form
          method='POST'
          action='https://getform.io/f/2d5ec6d7-5fde-4a41-a71b-68f85739b182'
        >
          <SimpleGrid columns={2} row={1} gap={8}>
            <FormControl mb={1} isRequired>
              <FormLabel htmlFor='name'>Your Name.</FormLabel>
              <Input id='name' type='name' />
            </FormControl>
            <FormControl mb={1} isRequired>
              <FormLabel htmlFor='email'>Email address.</FormLabel>
              <Input id='email' type='email' />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
          </SimpleGrid>
          <FormControl mb={5} isRequired>
            <FormLabel htmlFor='website'>Message.</FormLabel>
            <Textarea id='message' type='message' />
          </FormControl>
          <Center>
            <Button type='submit' colorScheme={"brand"}>
              Submit
            </Button>
          </Center>
        </form>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const retrieveSettings = await fetch(url + "/api/settings");
  const settings = await retrieveSettings.json();
  return {
    props: { settings }, // will be passed to the page component as props
  };
}
