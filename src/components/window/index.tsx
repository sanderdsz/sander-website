"use client"

import Link from "next/link";

type WindowProps = {
  height: number,
  width: number,
  onClose: () => {}
}

export const Window = ({height, width, onClose} : WindowProps) => {
  return (
    <div
      style={{width: `${width}rem`, height: `${height}rem`}}
      className="bg-slate-200 border-2 rounded-md
    dark:text-gray-200 dark:border-gray-500
    transition ease-in duration-200"
    >
      <div
        className="h-8 border-b-2 border-gray-300
      dark:bg-gray-600 dark:border-gray-800"
      >
        <div className="h-full ml-3 flex gap-2.5 items-center">
          <Link href={"/"} className="w-3.5 h-3.5 bg-red-500 rounded-full"/>
          <button className="w-3.5 h-3.5 bg-yellow-400 rounded-full" />
          <button className="w-3.5 h-3.5 bg-green-500 rounded-full" />
        </div>
      </div>
      <div className="h-[calc(100%-2rem)] dark:bg-slate-800">
        <span>sander</span>
      </div>
    </div>
  )
}