"use client";
import { useState } from "react";
import { Button } from "./ui/button";

export const Nav = () => {
  const navItems = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Process",
      link: "#process",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="relative border-b px-4 sm:px-8 lg:px-16">
      <div className="absolute -bottom-1 left-0 w-full flex justify-between px-4 sm:px-6 lg:px-14">
        <span className="w-2.5 h-2.5 rounded-full bg-[#040E0E] border ml-1 z-10"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#040E0E] border mr-1 z-10"></span>
      </div>
      <div className="px-8 py-5 border-x-[0.01px] border-t-0 ">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-12 text-">
            <a
              href="#"
              className="text-2xl font-medium bg-linear-to-b from-[#41C4C6] to-white text-transparent bg-clip-text"
            >
              AuroLabs
            </a>

            <ul className="flex gap-6 mt-0.5">
              {navItems.map((item) => (
                <li key={item.name} className="text-xs">
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <Button variant={"outline"}>Book a call</Button>
        </nav>
      </div>
    </div>
  );
};
