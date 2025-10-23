"use client";
import { useRef } from "react";
import Fog from "./fog";
import { useScroll, useTransform, motion } from "motion/react";

export default function Home() {
  const ref = useRef<HTMLDivElement | null>(null);
  // Mapa scrolla → przesuń h1 do góry o 300px
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"], // efekt od wejścia ref na dół ekranu do góry
  });
  const y = useTransform(scrollYProgress, [0.3, 1], ["0vh", "-70vh"]);

  return (
    <>
      <div
        className={
          "sticky top-0 w-full h-screen flex justify-center items-center -z-10"
        }
      >
        <motion.h1 style={{ y }} className="text-white font-bold text-8xl  ">
          AMOK STUDIO
        </motion.h1>
        <div className="absolute inset-0 -z-10 ">
          <Fog scrollRef={ref} />
        </div>
      </div>
      <div ref={ref} className="h-screen bg-white"></div>
      <div className="h-[300vh] bg-white z-10"></div>
    </>
  );
}
