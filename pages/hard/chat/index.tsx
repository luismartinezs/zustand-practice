import { useRouter } from "next/router";
import NextLink from "next/link";
import {
  Box,
  Button,
  Link,
  ListItem,
  UnorderedList,
  Text,
} from "@chakra-ui/react";
import { v4 as uuid } from "uuid";

import { useChatStore } from "@/store/chat";

export default function Chat() {
  const chats = useChatStore((state) => state.chats);
  const initNewChat = useChatStore((state) => state.initNewChat);
  const router = useRouter();

  const handleInitNewChat = () => {
    const chatId = encodeURIComponent(uuid());
    initNewChat(chatId);
    router.push(`/hard/chat/${chatId}`);
  };

  return (
    <>
      <Text>Available chats:</Text>
      {chats.length === 0 ? (
        <Box>There are no chats</Box>
      ) : (
        <UnorderedList listStyleType="none" m={0}>
          {chats.map((chat) => {
            return (
              <ListItem key={chat.id}>
                <Link
                  as={NextLink}
                  color="blue.400"
                  href={`/hard/chat/${chat.id}`}
                >
                  {chat.id}
                </Link>
              </ListItem>
            );
          })}
        </UnorderedList>
      )}
      <Button mt={4} onClick={handleInitNewChat} colorScheme="orange">
        New chat
      </Button>
    </>
  );
}
