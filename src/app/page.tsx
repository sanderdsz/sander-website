import Image from 'next/image'
import {ThemeToggle} from "@/components/themeToggle";
import {Navbar} from "@/components/navbar";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-gray-200 dark:bg-gray-500"
    >
      <Navbar />
    </main>
  )
}
