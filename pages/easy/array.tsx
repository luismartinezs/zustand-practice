import { useArrayStore } from "@/store/array";
import {
  Badge,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";

export default function Array() {
  const array = useArrayStore((state) => state.array);
  const add = useArrayStore((state) => state.add);
  const remove = useArrayStore((state) => state.remove);

  const [input, setInput] = useState<string>("");

  return (
    <Flex flexDir="column" gap={2}>
      <Heading as="h1">Array</Heading>
      <HStack>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button
          onClick={() => {
            add(input);
            setInput("");
          }}
          minW={100}
          colorScheme="purple"
        >
          Add
        </Button>
      </HStack>
      <Flex gap={2}>
        {array.map((item) => (
          <Badge key={item} fontSize="1rem" colorScheme="purple" px={2} py={1}>
            {item}
            <IconButton
              aria-label={`Remove ${item}`}
              icon={<CloseIcon />}
              onClick={() => remove(item)}
              variant="ghost"
              size="xs"
            />
          </Badge>
        ))}
      </Flex>
    </Flex>
  );
}
