import Head from "next/head";
import { Heading, Text, Button, VStack, HStack } from "@chakra-ui/react";
import { useCounterStore } from "@/store/counter";

export default function Counter() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <>
      <Head>
        <title>Zustand practice</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <VStack>
          <Heading as="h1">Counter</Heading>
          <Text>Current value: {count}</Text>
          <HStack>
            <Button onClick={decrement}>Decrement</Button>
            <Button onClick={increment}>Increment</Button>
          </HStack>
        </VStack>
      </main>
    </>
  );
}
