"use client";
import { FigmaHero } from "@/components/figma-hero";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      {/* <FigmaHero /> */}
    </>
  );
}
