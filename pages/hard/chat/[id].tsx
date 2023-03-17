import { useRouter } from "next/router";
import { useChatStore, useGetChatById } from "@/store/chat";
import {
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Text,
  Textarea,
  Input,
  VStack,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { useState } from "react";

function getFirstIfArray<T>(arrayOrItem: T | T[]): T {
  if (Array.isArray(arrayOrItem)) {
    return arrayOrItem[0];
  }

  return arrayOrItem;
}

function ChatMessage({
  message,
  sender,
  timestamp,
}: {
  message: string;
  sender: string;
  timestamp: number;
}) {
  return (
    <Card my={2}>
      <CardBody>
        <Text as="span" color="gray.300">
          {sender}{" "}
        </Text>
        <Text as="span" color="gray.500">
          ({format(new Date(timestamp), "Pp")}):{" "}
        </Text>
        <Text as="span">{message}</Text>
      </CardBody>
    </Card>
  );
}

export default function Chat() {
  const router = useRouter();
  const chatId = getFirstIfArray(router.query.id);
  const chat = useGetChatById(chatId);
  const addMessageToChat = useChatStore((state) => state.addMessageToChat);

  const [message, setMessage] = useState<string>("");
  const [sender, setSender] = useState<string>("");

  function handleSend(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!chatId) {
      return;
    }
    addMessageToChat({
      chatId,
      message: {
        message,
        sender,
      },
    });
    setMessage("");
  }

  return (
    <>
      {chat ? (
        <>
          {chat.messages.map((msg) => {
            return (
              <ChatMessage
                key={msg.id}
                message={msg.message}
                sender={msg.sender}
                timestamp={msg.timestamp}
              />
            );
          })}
          <form onSubmit={handleSend}>
            <VStack>
              <FormControl>
                <FormLabel htmlFor="sender">Your email</FormLabel>
                <Input
                  value={sender}
                  onChange={(e) => setSender(e.target.value)}
                  type="email"
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormControl>
              <Button
                colorScheme="orange"
                type="submit"
                mt={2}
                alignSelf="flex-end"
              >
                Send
              </Button>
            </VStack>
          </form>
        </>
      ) : (
        <>No chat</>
      )}
    </>
  );
}
