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
import React from "react";
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
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiFlutter,
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
  const jobSkills = useBreakpointValue({
    base: "relative",
    md: "absolute",
  });
  const defaultBoxProps = {
    borderRadius: "md",
    background: color,
    boxShadow: "md",
    padding: 5,
  };

  const resume = {
    work: [
      {
        name: "müv",
        company_url: "https://www.muvideas.com",
        position: "Lead Developer",
        startDate: "Sep 2019",
        endDate: "",
        responsibilities: [
          "Lead in the creation of the developmental process.",
          "Transfer designed websites into progressive and responsive web applications.",
          "Develop & Setup Backend services for the client.",
          "Continuously learn in order to create growth.",
          "Troubleshoot & Fix problems that occur with websites.",
        ],
      },
    ],
    education: [],
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
          <Box id='MaryvilleUniversity'>
            <Heading as='h4' size='md' marginBottom={0} color={"primary"}>
              Maryville University
            </Heading>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"sm"} opacity={0.8}>
                Bachelor of Fine Arts
              </Text>
              <Text fontSize={"sm"} opacity={0.8}>
                GPA 3.2
              </Text>
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
              <ListItem
                fontSize={"sm"}
                alignItems={"center"}
                display={"flex"}
                mb={0}
              >
                <ListIcon as={MdCheckCircle} color='primary' />
                Web Design I & II
              </ListItem>
              <ListItem
                fontSize={"sm"}
                alignItems={"center"}
                display={"flex"}
                mb={0}
              >
                <ListIcon as={MdCheckCircle} color='primary' />
                Interactive Applications I & II
              </ListItem>
              <ListItem
                fontSize={"sm"}
                alignItems={"center"}
                display={"flex"}
                mb={0}
              >
                <ListIcon as={MdCheckCircle} color='primary' />
                UI / UX Design
              </ListItem>
            </List>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"sm"} fontWeight={500} marginBottom={0}>
                Awards & Honors
              </Text>
              <Text fontSize={"sm"} marginBottom={0}>
                Cum Laude
              </Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"sm"} fontWeight={500} marginBottom={0}>
                Graduated
              </Text>
              <Text fontSize={"sm"} marginBottom={0}>
                May 2020
              </Text>
            </Flex>
          </Box>
          <Box id='WildwoodCommunityCollege' marginTop={5}>
            <Heading as='h4' size='md' marginBottom={0} color='primary'>
              Wildwood Community College
            </Heading>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"sm"} opacity={0.8}>
                General Studies
              </Text>
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
              <ListItem
                fontSize={"sm"}
                alignItems={"center"}
                display={"flex"}
                mb={0}
              >
                <ListIcon as={MdCheckCircle} color='primary' />
                Web Design
              </ListItem>
              <ListItem
                fontSize={"sm"}
                alignItems={"center"}
                display={"flex"}
                mb={0}
              >
                <ListIcon as={MdCheckCircle} color='primary' />
                Introduction to Database Management
              </ListItem>
              <ListItem
                fontSize={"sm"}
                alignItems={"center"}
                display={"flex"}
                mb={0}
              >
                <ListIcon as={MdCheckCircle} color='primary' />
                Linux
              </ListItem>
              <ListItem
                fontSize={"sm"}
                alignItems={"center"}
                display={"flex"}
                mb={0}
              >
                <ListIcon as={MdCheckCircle} color='primary' />
                Introduction to Programming (C#)
              </ListItem>
            </List>
          </Box>
          <Box id='ParkwaySouthHigh' marginTop={5}>
            <Heading as='h4' size='md' marginBottom={0} color='primary'>
              Parkway South High
            </Heading>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"sm"} opacity={0.8}>
                High School
              </Text>
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
              <ListItem
                fontSize={"sm"}
                alignItems={"center"}
                display={"flex"}
                mb={0}
              >
                <ListIcon as={MdCheckCircle} color='primary' />
                Web Design
              </ListItem>
            </List>
          </Box>
        </GridItem>
        <GridItem
          {...jobBreakpointColumn}
          {...defaultBoxProps}
          id='muv'
          position='relative'
          display={"flex"}
          flexWrap={"wrap"}
          alignContent={"flex-start"}
        >
          <Box width={"100%"}>
            <Heading as='h4' size='md' marginBottom={0} color={"primary"}>
              <a
                href='https://www.muvideas.com'
                rel='noreferrer'
                target='_blank'
              >
                müv
              </a>
            </Heading>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"sm"} opacity={0.8}>
                Lead Developer
              </Text>
              <Text
                fontSize={"sm"}
                color='primary'
                fontWeight='medium'
                opacity={1}
              >
                Sep 2019
              </Text>
            </Flex>
            <Text fontSize={"xs"} as={Link} href='/tag/muv' opacity={0.8}>
              See Projects
            </Text>
          </Box>
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
            <ListItem alignItems={"center"} display={"flex"} mb={0}>
              <ListIcon as={MdCheckCircle} color='primary' />
              Lead in the creation of the developmental process.
            </ListItem>
            <ListItem alignItems={"center"} display={"flex"} mb={0}>
              <ListIcon as={MdCheckCircle} color='primary' />
              Transfer designed websites into progressive and responsive web
              applications.
            </ListItem>
            <ListItem alignItems={"center"} display={"flex"} mb={0}>
              <ListIcon as={MdCheckCircle} color='primary' />
              Develop & Setup Backend services for the client.
            </ListItem>
            <ListItem alignItems={"center"} display={"flex"} mb={0}>
              <ListIcon as={MdCheckCircle} color='primary' />
              Continuously learn in order to create growth.
            </ListItem>
            <ListItem alignItems={"center"} display={"flex"} mb={0}>
              <ListIcon as={MdCheckCircle} color='primary' />
              Troubleshoot & Fix problems that occur with websites.
            </ListItem>
          </List>
          <Flex
            justifyContent={"space-between"}
            width='100%'
            alignSelf={"flex-end"}
            position={jobSkills}
            bottom={5}
            left={0}
            right={0}
            padding={5}
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
