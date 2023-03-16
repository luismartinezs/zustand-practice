import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

import { useUserStore } from "@/store/user";

export default function User() {
  const user = useUserStore((state) => ({
    email: state.email,
    password: state.password,
    isLoggedIn: state.isLoggedIn,
  }));
  const login = useUserStore((state) => state.login);
  const logout = useUserStore((state) => state.logout);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login({ email, password });
  }

  if (user.isLoggedIn) {
    return (
      <>
        <Heading as="h2">Welcome, {user.email}</Heading>
        <Button onClick={logout} mt={2} colorScheme="pink">
          Logout
        </Button>
      </>
    );
  }

  return (
    <>
      <Heading as="h2" id="formTitle">
        Login
      </Heading>
      <Box mt={2}>
        <form onSubmit={handleSubmit} aria-labelledby="formTitle">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" mt={2} colorScheme="pink">
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
}
