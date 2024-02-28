"use client";
import React, {useState} from "react";
import { Button } from "./ui/moving-border";


interface MovingBorderButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  timer: number;
}

function MovingBorderButton({ children, onClick, timer  }: MovingBorderButtonProps) {



  return (
    <div>

      <Button
        onClick={onClick}
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 "
        duration={timer}
      >
           {children}
      </Button>

    </div>
  );
}

export default MovingBorderButton
