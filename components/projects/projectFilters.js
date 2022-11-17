import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { BsWordpress } from "react-icons/bs";
import { GrGatsbyjs, GrReactjs } from "react-icons/gr";
import { LogoIcon, MuvIcon } from "@components/brand";
import { ProjectsContext } from "./projectContext";

export function ProjectFilters() {
  const { setFilter, filter } = useContext(ProjectsContext);
  const color = useColorModeValue("gray.800", "white");
  const clients = [
    {
      name: "Personal",
      icon: LogoIcon,
      filter: "zechman design",
    },
    {
      name: "müv",
      icon: MuvIcon,
      filter: "muv",
      boxSize: "36px",
    },
  ];

  const platforms = [
    {
      name: "Gatsby",
      icon: GrGatsbyjs,
      filter: "gatsby",
    },
    {
      name: "React",
      icon: GrReactjs,
      filter: "react",
    },
    {
      name: "Wordpress",
      icon: BsWordpress,
      filter: "wordpress",
    },
    {
      name: "HTML5",
      icon: AiFillHtml5,
      filter: "html",
    },
  ];

  return (
    <Flex alignSelf={"flex-end"}>
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Filter
        </MenuButton>
        <MenuList>
          <MenuOptionGroup
            value={filter}
            defaultValue={"all"}
            type='radio'
            onChange={(value) => setFilter(value)}
          >
            <MenuItemOption value={"all"}>All</MenuItemOption>
          </MenuOptionGroup>
          <MenuOptionGroup
            value={filter}
            defaultValue={"all"}
            title='Clients'
            type='radio'
            onChange={(value) => setFilter(value)}
          >
            {clients.map((client) => (
              <MenuItemOption key={client.filter} value={client.filter}>
                <Icon
                  as={client.icon}
                  mr='12px'
                  color={color}
                  boxSize={client.boxSize ? client.boxSize : null}
                />
                {client.name}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
          <MenuDivider />
          <MenuOptionGroup
            title='Platforms'
            defaultValue={"all"}
            type='radio'
            value={filter}
            onChange={(value) => setFilter(value)}
          >
            {platforms.map((client) => (
              <MenuItemOption key={client.filter} value={client.filter}>
                <Icon
                  as={client.icon}
                  mr='12px'
                  color={color}
                  boxSize={client.boxSize ? client.boxSize : null}
                />
                {client.name}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Flex>
  );
}
