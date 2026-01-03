"use client";
import { romanFont } from "@/font";
import { Button } from "./ui/button";
import Cal from "@calcom/embed-react";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <>
      <div className="text-white px-4 sm:px-8 lg:px-24 bg-[#040E0E]">
        <div className="relative border-x border-zinc-800">
          <h1
            className={`${romanFont.className} pt-16 pb-4 tracking-tight text-5xl w-[45%] mx-auto text-center`}
          >
            Got something in mind? Let&apos;s talk it through
          </h1>
          <div className="flex items-center justify-center pb-8 pt-2">
            <Button
              data-cal-link="aurolabs/15min"
              data-cal-config='{"theme":"light"}'
              size={"lg"}
              className="bg-[#14ABBA] hover:bg-[#14ABBA]/80 transition-colors text-white"
            >
              Book a free call
            </Button>
          </div>
          <Cal
            calLink="aurolabs/chat-with-aurolabs"
            className="mt-4"
            config={{ theme: "light" }}
          />
        </div>
      </div>
      <div className="flex px-4 sm:px-8 lg:px-26 border-t py-4 items-center justify-between ">
        <a
          href="#"
          className="text-xl font-medium bg-linear-to-b from-[#41C4C6] to-white text-transparent bg-clip-text"
        >
          AuroLabs
        </a>
        <p className="text-sm">Follow us on</p>
        <div className="flex items-center justify-center text-[#849191] gap-2.5">
          <Twitter size={18} />
          <Github size={18} />
          <Linkedin size={18} />
        </div>
      </div>
    </>
  );
};
