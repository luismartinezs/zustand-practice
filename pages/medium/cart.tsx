import { useCartStore, useFullPrice } from "@/store/cart";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  IconButton,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const mockItems = [
  {
    id: "1",
    name: "Item 1",
    price: 10.99,
  },
  {
    id: "2",
    name: "Item 2",
    price: 7.99,
  },
  {
    id: "3",
    name: "Item 3",
    price: 19.99,
  },
  {
    id: "4",
    name: "Item 4",
    price: 5.99,
  },
  {
    id: "5",
    name: "Item 5",
    price: 14.99,
  },
];

export default function Cart() {
  const cartItems = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const totalPrice = useFullPrice();

  return (
    <Box>
      <Text>Buy stuff:</Text>
      <Flex gap={2} flexWrap="wrap" mt={2}>
        {mockItems.map((item) => (
          <Card key={item.id} p={3}>
            <CardBody>
              <Heading as="h3" fontSize={16}>
                {item.name}
              </Heading>
              <Text whiteSpace="nowrap">Price: $ {item.price}</Text>
            </CardBody>
            <Button colorScheme="red" onClick={() => addItem(item)}>
              Add to cart
            </Button>
          </Card>
        ))}
      </Flex>
      <Text mt={4}>Your cart:</Text>
      <UnorderedList listStyleType="none" m={0}>
        {cartItems.map((item) => (
          <ListItem
            key={item.id}
            bg="gray.700"
            borderRadius={5}
            my={2}
            px={2}
            py={1}
          >
            <HStack justifyContent="space-between">
              <Text as="span">
                {item.name} - Qty: {item.amount} - $ {item.price * item.amount}
              </Text>
              <IconButton
                onClick={() => removeItem(item.id)}
                aria-label={`Remove item ${item.name}`}
                icon={<DeleteIcon />}
                variant="ghost"
                size="xs"
              />
            </HStack>
          </ListItem>
        ))}
      </UnorderedList>
      <Text>Total price (excluding VAT): $ {totalPrice}</Text>
    </Box>
  );
}
