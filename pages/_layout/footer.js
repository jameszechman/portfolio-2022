import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Skeleton,
} from "@chakra-ui/react";
import { BiBook } from "react-icons/bi";
import { IoMdMusicalNotes } from "react-icons/io";
import { useLastFM } from "use-last-fm";
import { fetcher } from "../../lib";
import useSWR from "swr";

const CurrentlyPlaying = () => {
  const lastFM = useLastFM("gryovex", process.env.NEXT_PUBLIC_LASTFM_API);

  if (lastFM.status === "error") {
    return null;
  }

  if (lastFM.status !== "playing") {
    return (
      <Flex gridGap={3} alignItems={"center"}>
        <IoMdMusicalNotes />
        <Text marginBottom={0} fontSize='sm'>
          Not Listening to Anything
        </Text>
      </Flex>
    );
  }

  return (
    <Flex gridGap={3} alignItems={"center"}>
      <IoMdMusicalNotes />
      <Text marginBottom={0} fontSize='sm'>
        Listening to{" "}
        <Box as='span' color='primary'>
          {lastFM.song.name}
        </Box>{" "}
        by{" "}
        <Box as='span' color='primary'>
          {lastFM.song.artist}
        </Box>
      </Text>
    </Flex>
  );
};

export function Footer() {
  const { data: profile, error, isValidating } = useSWR("author", fetcher);

  const authorBox = useBreakpointValue({
    base: { flexFlow: "column nowrap", alignItems: "center" },
    md: { flexFlow: "row nowrap" },
  });
  const ContainerOverlap = useBreakpointValue({
    base: "translateY(-25%)",
    md: "translateY(-50%)",
  });

  return (
    <Box as='footer' marginTop={"10em"} padding={5} background={"primary"}>
      <Skeleton isLoaded={profile && !error} transform={ContainerOverlap}>
        <Container
          maxW='container.xl'
          padding={8}
          borderRadius={"md"}
          background={useColorModeValue("gray.100", "gray.800")}
        >
          <Flex {...authorBox}>
            <Image
              borderRadius='full'
              width={150}
              height={150}
              objectFit={"cover"}
              src={profile?.profile_image}
              alt={profile?.name}
              border={"3px solid"}
              borderColor={"primary"}
              loading={isValidating || !profile?.profile_image}
            />
            <Box padding={5}>
              <Heading marginBottom={0} as='h2' size='xl'>
                {profile?.name || "James Zechman"}
              </Heading>

              <Divider />
              <Text marginBottom={1}>{profile?.bio || ""}</Text>
              <Box marginBottom={1}>
                <CurrentlyPlaying />
                <Flex gridGap={3} alignItems={"center"}>
                  <BiBook />
                  <Text marginBottom={0} fontSize='sm'>
                    Reading{" "}
                    <Box as='span' color='primary'>
                      The Dark Tower Book 2{" "}
                    </Box>
                    by{" "}
                    <Box as='span' color='primary'>
                      Stephen King
                    </Box>
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Skeleton>
      <Container maxW='container.xl' color={"white"}>
        © {new Date().getFullYear()} James Zechman
      </Container>
    </Box>
  );
}
