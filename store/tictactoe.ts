import { create } from 'zustand'
import produce, { type Immutable } from 'immer'

type Turn = 'X' | 'O'

type TictactoeState = Immutable<{
  board: string[][]
  turn: Turn
  winner: string
  reset: () => void
  move: (row: number, col: number) => void
}>

function checkWinner(board: string[][]): string {
  const lines = [
    [board[0][0], board[0][1], board[0][2]],
    [board[1][0], board[1][1], board[1][2]],
    [board[2][0], board[2][1], board[2][2]],
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]],
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]]
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (a && a === b && a === c) {
      return a
    }
  }

  return ''
}

function isBoardFull(board: TictactoeState['board']): boolean {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '') {
        return false
      }
    }
  }

  return true
}

export const useTictactoeStore = create<TictactoeState>((set) => ({
  board: [['', '', ''], ['', '', ''], ['', '', '']],
  turn: 'X',
  winner: '',
  reset: () => set(
    produce(
      state => {
        state.board = [['', '', ''], ['', '', ''], ['', '', '']]
        state.turn = 'X'
        state.winner = ''
      }
    )
  ),
  move: (row, col) => set(
    produce(
      state => {
        if (state.board[row][col] === '' && state.winner === '') {
          state.board[row][col] = state.turn
          state.turn = state.turn === 'X' ? 'O' : 'X'
          state.winner = checkWinner(state.board)
        }
      }
    )
  )
}))

export const useIsBoardFull = () => {
  return useTictactoeStore(state => isBoardFull(state.board))
}