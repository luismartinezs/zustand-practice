import { Container } from "@chakra-ui/react";
import Header from "@/src/components/Header";

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <Container maxW="container.md" my={4}>
      <Header />
      <Container as="main">{children}</Container>
    </Container>
  );
};

export default Layout;
