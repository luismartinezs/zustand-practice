import { useTasksStore } from "@/store/tasks";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  Heading,
  ListItem,
  UnorderedList,
  Text,
  HStack,
  VStack,
  Checkbox,
  Button,
  FormControl,
  FormLabel,
  Input,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Tasks() {
  const tasks = useTasksStore((state) => state.tasks);
  const add = useTasksStore((state) => state.add);
  const remove = useTasksStore((state) => state.remove);
  const toggle = useTasksStore((state) => state.toggle);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    add({
      title,
      description,
    });
  }

  return (
    <>
      <Heading as="h1">Tasks</Heading>
      <UnorderedList listStyleType="none" ml={0} my={4}>
        {tasks.map((task) => (
          <ListItem key={task.id} my={2}>
            <Card>
              <CardBody py={3} px={6}>
                <HStack gap={4} justifyContent="space-between">
                  <HStack gap={4}>
                    <Checkbox
                      isChecked={task.completed}
                      onChange={() => toggle(task.id)}
                      size="lg"
                      colorScheme="orange"
                    />
                    <VStack alignItems="flex-start">
                      <Heading as="h2" fontSize={20}>
                        {task.title}
                      </Heading>
                      <Text color="gray.400" mt={1}>
                        {task.description}
                      </Text>
                    </VStack>
                  </HStack>
                  <Box flexBasis={1} textAlign="right" ml="auto">
                    <IconButton
                      aria-label="remove"
                      icon={<CloseIcon />}
                      variant="ghost"
                      size="xs"
                      onClick={() => remove(task.id)}
                    />
                  </Box>
                </HStack>
              </CardBody>
            </Card>
          </ListItem>
        ))}
      </UnorderedList>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="task">Title</FormLabel>
          <Input id="task" onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Input
            id="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
        <Button type="submit" mt={2} colorScheme="orange">
          Add task
        </Button>
      </form>
    </>
  );
}
