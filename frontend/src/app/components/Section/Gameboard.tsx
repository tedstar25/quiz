"use client"
import { useEffect } from "react";

import Yourfield from '@/app/components/Section/Player/Yourfield';
import Opponentfield from '@/app/components/Section/Opponent/Opponentfield';
import { useGameState } from "@/app/hooks/gamestate";







const Gameboard: React.FC = () => {




    return (
    <>
        <div className='flex-grow h-2/5 '>
            <Opponentfield />
        </div>
        <div className='flex-grow h-3/5  overflow-hidden border-white-500'>
            <Yourfield/>
        </div>
    </>


    );
  }
  
  export default Gameboard;