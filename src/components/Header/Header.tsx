import { Box, Flex, Heading, HStack, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const links = {
  easy: [
    {
      name: "Counter",
      href: "/counter",
    },
    {
      name: "Modal",
      href: "/modal",
    },
    {
      name: "Array",
      href: "/array",
    },
  ],
  medium: [
    {
      name: "Tasks",
      href: "/tasks",
    },
  ],
};

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Header = (): JSX.Element => {
  return (
    <HStack as="header" gap={2} justifyContent="space-between">
      <Heading as="h1">Zustand Practice</Heading>
      <Flex as="nav" flexDir="column" gap={2}>
        {Object.entries(links).map(([level, items]) => (
          <Flex key={level} gap={4}>
            <Text as="span">{capitalize(level)}: </Text>
            {items.map((item) => (
              <Link
                as={NextLink}
                key={item.href}
                href={`/${level}${item.href}`}
                color="blue.100"
              >
                {item.name}
              </Link>
            ))}
          </Flex>
        ))}
      </Flex>
    </HStack>
  );
};

export default Header;
