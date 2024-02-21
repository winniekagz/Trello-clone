import { getTodosGroupedByColumns } from '@/lib/getTodosGroupedByColumns'
import { create } from 'zustand'

interface BoardState{
board:Board,
getBoard:()=>void
removeAllBoard:()=>void
}
const initialState={
    board:{
        Board:new Map<TypedColumn,Column>()
    }
}


export const useBoardStore = create<BoardState>((set) => ({
  board :initialState.board,
  getBoard: async() => { 
    const board= await getTodosGroupedByColumns()
    set({board})
 },
  removeAllBoard: () => set({ board: initialState.board }),
}))