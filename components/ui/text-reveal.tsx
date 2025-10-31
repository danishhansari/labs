"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export function TextReveal({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [letterRef, setLetterRef] = useArrayRef<HTMLSpanElement>();
  function useArrayRef<T extends HTMLElement>() {
    const letterRef = useRef<T[]>([]);
    letterRef.current = [];
    const setRef = (el: T | null): void => {
      if (el) letterRef.current.push(el);
    };
    return [letterRef, setRef] as const;
  }
  useEffect(() => {
    const reveal = gsap.to(letterRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top 75%",
        end: "bottom 50%",
      },
      color: "#BADEDD",
      duration: 1,
      stagger: 0.08,
    });
    return () => {
      reveal.kill();
    };
  }, []);
  return (
    <>
      <div ref={triggerRef} className={className}>
        {text.split("").map((letter, ind) => (
          <p
            style={{ WebkitTextStroke: "0.1px #BADEDD" }}
            key={ind}
            className="inline-block font-extrabold text-4xl md:text-5xl tracking-tight text-transparent select-none "
            ref={setLetterRef}
          >
            {letter === " " ? "\u00A0" : letter}
          </p>
        ))}
      </div>
    </>
  );
}
