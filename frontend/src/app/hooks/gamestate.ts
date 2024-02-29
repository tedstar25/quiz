import  { create } from 'zustand';


export type gameState = {
  numberOfQuestion:number,
  category:{id:number,name:string},
  level:string,
  type:string,
  status:string,
  score:number,
  config?:any
}

const getDefaultConfig = (): gameState => ({
  numberOfQuestion: 2,
  category: { id: 0, name: '' },
  level: '',
  type: '',
  status: '',
  score: 0,
});

export const useGameState  = create((set:any) => ({
  gameRound: getDefaultConfig(),

  
  addLevel: (level:string) => set((state:gameState) =>                     ({gameRound:{...state.config,level:level}})),
  addCategory: (id:number,name:string) => set((state:gameState) =>         ({gameRound:{...state.config,category:{id:id,name:name}}})),
  addType: (type:string) => set((state:gameState) =>                       ({gameRound:{...state.config,type:type}})),
  addQuestionNumber: (numberOfQuestion:string) => set((state:gameState) => ({gameRound:{...state.config,numberOfQuestion:numberOfQuestion}})),
  changeStatus: (status:string) => set((state:gameState) =>                ({gameRound:{...state.config,status:status}})),
  setScore: () => set((state:gameState) =>                                 ({gameRound:{...state.config,score:state.config.score+1}})),
  removeConfig: () => set({ gameRound:getDefaultConfig()}),
}))



