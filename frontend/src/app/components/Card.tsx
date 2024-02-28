"use client"
import { useState } from "react";
import MovingBorderButton from "./MovingBorderButton";

const Card: React.FC = () => {

    const [timer, setTimer] = useState(1000000000);

    const handleClick = () => {
      setTimer(prevTimer => prevTimer === 4000 ? 1000000000 : 4000);
        console.log("ji")
      };
  

  return (
    <div className="bg-white inline-block min-w-min p-1 rounded-full">
      <MovingBorderButton timer={timer} onClick={handleClick}>Clissck me</MovingBorderButton>
    </div>
  );
}

export default Card;