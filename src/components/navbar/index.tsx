'use client'

import {ThemeToggle} from "@/components/themeToggle";
import {Flower} from "@phosphor-icons/react";
import { format, parseISO } from 'date-fns';
import {enUS} from "date-fns/locale";
import {Clock} from "@/components/clock";

export const Navbar = () => {
  const currentDateTime = new Date();
  const formattedDate = format(currentDateTime, 'EEE d MMM', { locale: enUS });
  const formattedTime = format(currentDateTime, "HH:mm")
  return (
    <div className='h-8 pr-2 flex justify-between items-center bg-gray-50'>
      <div className='flex items-center'>
        <button>
          <Flower width={35} weight={"duotone"} />
        </button>
        <button>About</button>
      </div>
      <div className='flex items-center justify-between'>
        <ThemeToggle />
        <div className='flex items-center'>
          <span className='pr-2'>{formattedDate}</span>
          <Clock />
        </div>
      </div>
    </div>
  )
}