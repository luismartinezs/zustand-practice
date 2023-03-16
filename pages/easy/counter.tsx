import { Heading, Button, VStack, HStack, Badge } from "@chakra-ui/react";
import { useCounterStore } from "@/store/counter";

export default function Counter() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <VStack gap={2} alignItems="flex-start">
      <Heading as="h1">Counter</Heading>
      <Badge fontSize={32} px={4}>
        {count}
      </Badge>
      <HStack>
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={increment}>Increment</Button>
      </HStack>
    </VStack>
  );
}
