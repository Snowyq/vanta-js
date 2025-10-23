"use client";
import { useRef } from "react";
import Fog from "./fog";
import { useScroll, useTransform, motion } from "motion/react";

export default function Home() {
  const ref = useRef<HTMLDivElement | null>(null);
  // Mapa scrolla → przesuń h1 do góry o 300px
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const top = useTransform(scrollYProgress, [0.33, 1], ["50vh", "1vh"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  return (
    <>
      <div>
        <div
          ref={ref}
          className={
            "relative w-full h-[200vh] flex justify-center items-center -z-10 overflow-hidden "
          }
        >
          <motion.h1
            style={{ top }}
            className="fixed text-white font-bold text-8xl  top-[50vh]"
          >
            AMOK STUDIO
          </motion.h1>
          <motion.div className="absolute inset-0 -z-10" style={{ scale }}>
            <Fog scrollRef={ref} />
          </motion.div>
        </div>
        <div className="h-screen bg-white"></div>
        <div className="h-[300vh] bg-white z-10"></div>
      </div>
    </>
  );
}
