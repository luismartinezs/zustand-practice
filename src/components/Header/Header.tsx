import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Counter",
    href: "/easy/counter",
  },
  {
    name: "Modal",
    href: "/easy/modal",
  },
  {
    name: "Array",
    href: "/easy/array",
  },
];

const Header = (): JSX.Element => {
  return (
    <header>
      <Flex as="nav" gap={4}>
        {links.map((item) => (
          <Link as={NextLink} key={item.href} href={item.href} color="blue.100">
            {item.name}
          </Link>
        ))}
      </Flex>
    </header>
  );
};

export default Header;
