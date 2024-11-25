/* eslint-disable */

'use client'
import { useAppSelector } from "@/store/hooks";

export default function Home() {
  const exampleData = useAppSelector((state:any) => state.example)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {exampleData}
    </div>
  );
}
