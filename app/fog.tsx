"use client";
import { RefObject, useEffect, useRef, useState } from "react";
import { VANTA } from "../lib/vanta-js/vanta.fog";
import * as THREE from "three";
import * as motion from "motion/react-client";
import { useMotionValueEvent, useScroll } from "motion/react";

export default function Fog({
  scrollRef,
}: {
  scrollRef: RefObject<HTMLDivElement | null>;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fogRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "start start"],
  });

  useEffect(() => {
    if (!ref.current) return;

    const fog = VANTA.FOG({
      THREE: THREE,
      el: ref.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0xdedede,
      midtoneColor: 0xd97f6a,
      lowlightColor: 0xa71938,
      baseColor: 0xd22727,
      blurFactor: 0.39,
      speed: 1,
      zoom: 2,
    });

    fogRef.current = fog;
  }, [ref]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
    if (fogRef.current) {
      console.log(fogRef.current);

      fogRef.current.setOptions({ speed: 1 + latest * 5, zoom: 2 - latest });
    }
  });

  return <motion.div ref={ref} className="h-full w-full"></motion.div>;
}
