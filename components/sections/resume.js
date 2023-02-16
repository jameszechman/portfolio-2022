import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
  Tooltip,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { AiFillCustomerService, AiFillHtml5 } from "react-icons/ai";
import { BsWordpress } from "react-icons/bs";
import { DiCss3, DiGitBranch } from "react-icons/di";
import { GrGatsbyjs, GrReactjs } from "react-icons/gr";
import {
  MdCheckCircle,
  MdManageAccounts,
  MdOutlineAttachMoney,
} from "react-icons/md";
import {
  SiFlutter,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
} from "react-icons/si";

export function Resume(props) {
  // const breakpoint = useBreakpointValue({ base: 1, md: 4, sm: 2 })
  const color = useColorModeValue("gray.100", "gray.800");
  // Setup Grid Responsiveness
  const breakPointColumns = useBreakpointValue({
    base: {
      gridAutoRows: "1fr",
      templateColumns: "repeat(1, 1fr)",
    },
    sm: {
      templateRows: "repeat(3, 1fr)",
      templateColumns: "repeat(2, 1fr)",
    },
    md: {
      templateRows: "repeat(3, 1fr)",
      templateColumns: "repeat(4, 1fr)",
    },
  });
  const jobBreakpointColumn = useBreakpointValue({
    base: {
      colSpan: 2,
      rowSpan: 2,
    },
    md: {
      colSpan: 2,
      rowSpan: 2,
    },
  });
  const defaultBoxProps = {
    borderRadius: "md",
    background: color,
    boxShadow: "md",
    padding: 5,
  };

  return (
    <Box as='section' aria-label="James Zechman's Resume" {...props}>
      <Heading as='h2' id='#blog'>
        Resume
      </Heading>
      <Divider />
      <Grid {...breakPointColumns} gridGap={5} marginBottom={5} marginTop={5}>
        <GridItem colSpan={2} rowSpan={3} {...defaultBoxProps}>
          <Heading as='h3'>Education</Heading>
          <Divider mb={5} />
          {props.education.map((school) => (
            <Box
              key={school.id}
              id={school.fields["Name"].replaceAll(" ", "")}
              mb={5}
            >
              <Heading as='h4' size='md' marginBottom={0} color={"primary"}>
                {school.fields["Name"]}
              </Heading>
              <Flex justifyContent={"space-between"}>
                <Text fontSize={"sm"} opacity={0.8}>
                  {school.fields["Field of Study"]}
                </Text>
                {school.fields["GPA"] && (
                  <Text fontSize={"sm"} opacity={0.8}>
                    GPA {school.fields["GPA"]}
                  </Text>
                )}
              </Flex>
              <Text fontSize={"sm"} fontWeight={500} marginBottom={0}>
                Notable Courses
              </Text>
              <List
                spacing={1}
                size='sm'
                marginLeft={0}
                marginTop={2}
                marginBottom={2}
              >
                {school.fields["Notable Courses"].map((course) => (
                  <ListItem
                    key={course}
                    fontSize={"sm"}
                    alignItems={"center"}
                    display={"flex"}
                    mb={0}
                  >
                    <ListIcon as={MdCheckCircle} color='primary' />
                    {course}
                  </ListItem>
                ))}
              </List>
              {school.fields["Awards"] && (
                <Flex justifyContent={"space-between"}>
                  <Text fontSize={"sm"} fontWeight={500} marginBottom={0}>
                    Awards & Honors
                  </Text>
                  <Text fontSize={"sm"} marginBottom={0}>
                    {school.fields["Awards"]}
                  </Text>
                </Flex>
              )}
              {school.fields["Graduated Date"] && (
                <Flex justifyContent={"space-between"}>
                  <Text fontSize={"sm"} fontWeight={500} marginBottom={0}>
                    Graduated
                  </Text>
                  <Text fontSize={"sm"} marginBottom={0}>
                    {new Date(
                      school.fields["Graduated Date"]
                    ).toLocaleDateString("en-us", {
                      year: "numeric",
                      month: "short",
                    })}
                  </Text>
                </Flex>
              )}
            </Box>
          ))}
        </GridItem>
        {props.employers.map((employer) => (
          <GridItem
            {...jobBreakpointColumn}
            {...defaultBoxProps}
            id={employer.fields["Name"]}
            position='relative'
            display={"flex"}
            flexWrap={"wrap"}
            alignContent={"flex-start"}
            key={employer.id}
          >
            <Box width={"100%"} aria-label='Company Information'>
              <Heading as='h4' size='md' marginBottom={0} color={"primary"}>
                <a
                  href={employer.fields["Website"]}
                  rel='noreferrer'
                  target='_blank'
                >
                  {employer.fields["Name"]}
                </a>
              </Heading>
              <Flex justifyContent={"space-between"}>
                <Text fontSize={"sm"} opacity={0.8}>
                  {employer.fields["Position"]}
                </Text>
                <Text
                  fontSize={"sm"}
                  color='primary'
                  fontWeight='medium'
                  opacity={1}
                >
                  {new Date(employer.fields["Start Date"]).toLocaleDateString(
                    "en-us",
                    {
                      year: "numeric",
                      month: "short",
                    }
                  )}
                </Text>
              </Flex>
              <Text
                fontSize={"xs"}
                as={Link}
                href={`/tag/${employer.fields["Name"]
                  .replaceAll(" ", "-")
                  .replaceAll("ü", "u")}`}
                opacity={0.8}
              >
                See Projects
              </Text>
            </Box>
            <Box aria-label='Company Responsibilities'>
              <Text fontSize={"sm"} fontWeight={500} marginBottom={0}>
                Responsibilities
              </Text>
              <List
                spacing={0}
                size='md'
                marginLeft={0}
                marginTop={2}
                marginBottom={2}
              >
                {employer.fields["Responsibilities & Achievements"].map(
                  (item) => (
                    <ListItem
                      key={item}
                      alignItems={"start"}
                      display={"flex"}
                      mb={0}
                    >
                      <ListIcon as={MdCheckCircle} color='primary' />
                      {item}
                    </ListItem>
                  )
                )}
              </List>
            </Box>
            <Flex
              justifyContent={"space-between"}
              width='100%'
              alignSelf={"flex-end"}
              justfiySelf='flex-end'
              position='relative'
              py={5}
            >
              <Text fontSize={"sm"} fontWeight={500} marginBottom={0}>
                Skills
              </Text>
              <SimpleGrid
                marginBottom={0}
                gridGap={3}
                columns={6}
                rows={2}
                justifyContent={"flex-end"}
              >
                <Tooltip label='Wordpress' hasArrow fontSize='md'>
                  <span>
                    <BsWordpress />
                  </span>
                </Tooltip>
                <Tooltip label='Gatsby JS' hasArrow fontSize='md'>
                  <span>
                    <GrGatsbyjs />
                  </span>
                </Tooltip>
                <Tooltip label='React JS' hasArrow fontSize='md'>
                  <span>
                    <GrReactjs />
                  </span>
                </Tooltip>
                <Tooltip label='HTML5' hasArrow fontSize='md'>
                  <span>
                    <AiFillHtml5 />
                  </span>
                </Tooltip>
                <Tooltip label='CSS3' hasArrow fontSize='md'>
                  <span>
                    <DiCss3 />
                  </span>
                </Tooltip>
                <Tooltip label='PHP' hasArrow fontSize='md'>
                  <span>
                    <SiPhp />
                  </span>
                </Tooltip>
                <Tooltip label='Next JS' hasArrow fontSize='md'>
                  <span>
                    <SiNextdotjs />
                  </span>
                </Tooltip>
                <Tooltip label='Node JS' hasArrow fontSize='md'>
                  <span>
                    <SiNodedotjs />
                  </span>
                </Tooltip>
                <Tooltip label='Javascript' hasArrow fontSize='md'>
                  <span>
                    <SiJavascript />
                  </span>
                </Tooltip>
                <Tooltip label='Git' hasArrow fontSize='md'>
                  <span>
                    <DiGitBranch />
                  </span>
                </Tooltip>
                <Tooltip label='Flutter' hasArrow fontSize='md'>
                  <span>
                    <SiFlutter />
                  </span>
                </Tooltip>
              </SimpleGrid>
            </Flex>
          </GridItem>
        ))}
        <GridItem {...defaultBoxProps} colSpan={2} rowSpan={1}>
          <Heading as='h4' size='sm' marginBottom={0} color={"primary"}>
            Skills
          </Heading>
          <SimpleGrid
            marginBottom={0}
            gridGap={3}
            columns={6}
            rows={2}
            justifyContent={"flex-end"}
            marginTop={5}
          >
            <Tooltip label='Wordpress' hasArrow fontSize='md'>
              <Center as='span'>
                <BsWordpress size='2em' />
              </Center>
            </Tooltip>
            <Tooltip label='Gatsby JS' hasArrow fontSize='md'>
              <Center as='span'>
                <GrGatsbyjs size='2em' />
              </Center>
            </Tooltip>
            <Tooltip label='React JS' hasArrow fontSize='md'>
              <Center as='span'>
                <GrReactjs size='2em' />
              </Center>
            </Tooltip>
            <Tooltip label='HTML5' hasArrow fontSize='md'>
              <Center as='span'>
                <AiFillHtml5 size='2em' />
              </Center>
            </Tooltip>
            <Tooltip label='CSS3' hasArrow fontSize='md'>
              <Center as='span'>
                <DiCss3 size='2em' />
              </Center>
            </Tooltip>
            <Tooltip label='PHP' hasArrow fontSize='md'>
              <Center as='span'>
                <SiPhp size='2em' />
              </Center>
            </Tooltip>
            <Tooltip label='Next JS' hasArrow fontSize='md'>
              <Center as='span'>
                <SiNextdotjs size='2em' />
              </Center>
            </Tooltip>
            <Tooltip label='Node JS' hasArrow fontSize='md'>
              <Center as='span'>
                <SiNodedotjs size='2em' />
              </Center>
            </Tooltip>
            <Tooltip label='Javascript' hasArrow fontSize='md'>
              <Center as='span'>
                <SiJavascript size='2em' />
              </Center>
            </Tooltip>
            <Tooltip label='Git' hasArrow fontSize='md'>
              <Center as='span'>
                <DiGitBranch size='2em' />
              </Center>
            </Tooltip>
            <Tooltip label='Customer Service' hasArrow fontSize='md'>
              <Center as='span'>
                <AiFillCustomerService size='2em' />
              </Center>
            </Tooltip>
            <Tooltip label='Management' hasArrow fontSize='md'>
              <Center as='span'>
                <MdManageAccounts size='2em' />
              </Center>
            </Tooltip>
            <Tooltip label='Sales' hasArrow fontSize='md'>
              <Center as='span'>
                <MdOutlineAttachMoney size='2em' />
              </Center>
            </Tooltip>
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Box>
  );
}
