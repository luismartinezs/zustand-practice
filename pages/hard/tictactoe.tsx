import { useTictactoeStore, useIsBoardFull } from "@/store/tictactoe";
import { Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

export default function Tictactoe() {
  const board = useTictactoeStore((state) => state.board);
  const turn = useTictactoeStore((state) => state.turn);
  const winner = useTictactoeStore((state) => state.winner);
  const reset = useTictactoeStore((state) => state.reset);
  const move = useTictactoeStore((state) => state.move);
  const isBoardFull = useIsBoardFull();

  return (
    <>
      <Heading as="h1">Tic Tac Toe</Heading>
      <Grid
        w="150px"
        h="150px"
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(3, 1fr)"
        gap={0}
      >
        {board.map((row, i) => {
          return row.map((cell, j) => {
            return (
              <GridItem
                key={i + j}
                w="50px"
                h="50px"
                bg="transparent"
                borderWidth={1}
                borderColor="gray.600"
                as="button"
                onClick={() => move(i, j)}
              >
                {cell}
              </GridItem>
            );
          });
        })}
      </Grid>
      <Text>
        {winner
          ? `Winner: ${winner}`
          : isBoardFull
          ? "Game ended it a tie"
          : `Turn: ${turn}`}
      </Text>
      <Button onClick={reset} mt={2}>
        Reset
      </Button>
    </>
  );
}
