"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { motion } from "motion/react";
import { useState } from "react";

export const Nav = () => {
  const navItems = [
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "FAQs",
      link: "#faqs",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.4, ease: "easeIn" }}
      className="mt-3"
    >
      <Navbar className="max-w-5xl mx-auto fixed top-2 lg:top-4">
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <Button
              className="bg-[#20808D] hover:bg-[#1FB8CD] border text-[#FBFAF4] w-full md:flex-0 z-10 rounded-full"
              variant={"default"}
              data-cal-link="aurolabs/15min"
              data-cal-config='{"theme":"dark"}'
            >
              Book a Quick call
            </Button>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-[#96AAAE] dark:text-black"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <Button
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-[#20808D] border-none hover:bg-[#1FB8CD] w-full md:flex-0"
                variant={"default"}
                data-cal-link="aurolabs"
                data-cal-config='{"theme":"dark"}'
              >
                Book a Quick call
              </Button>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </motion.div>
  );
};
