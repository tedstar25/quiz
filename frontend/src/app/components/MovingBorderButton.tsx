"use client";
import React, {useState} from "react";
import { Button } from "./ui/moving-border";

function MovingBorderButton() {


    const [timer, setTimer] = useState(1000000000);

    const handleClick = () => {
        setTimer(4000);
      };



  return (
    <div>

      <Button
        onClick={handleClick}
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 poin"
        duration={timer}
        
      >

           d

      </Button>

    </div>
  );
}

export default MovingBorderButton
