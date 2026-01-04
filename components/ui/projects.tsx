"use client";
import { FourSquare } from "@/svg/square";
import {
  ChevronLeft,
  ChevronRight,
  Monitor,
  Search,
  Smartphone,
} from "lucide-react";
import { Button } from "./button";

export const Projects = () => {
  return (
    <div className="border-x pb-16">
      <div className="bg-white/10 px-4 py-4">
        <div className="bg-white pb-8 rounded-sm">
          <div>
            <div className="flex items-center justify-between px-4 rounded-b-2xl py-2 mb-4 shadow-lg">
              <div className="flex items-center gap-1.5">
                <FourSquare />
                <Monitor color="#72797F" size={17} />
                <Smartphone color="#72797F" size={17} />
              </div>
              <div className="md:flex items-center gap-5 hidden">
                <Search color="#72797F" size={15} />
                <div className="flex items-center gap-1">
                  <Button className="bg-gray-100" size={"sm"}>
                    Fintech
                  </Button>
                  <Button className="bg-gray-100" size={"sm"}>
                    B2B
                  </Button>
                  <Button className="bg-gray-100" size={"sm"}>
                    SaaS
                  </Button>
                </div>
                <div className="flex items-center">
                  <ChevronLeft color="#72797F" size={15} />
                  <ChevronRight color="#72797F" size={15} />
                </div>
              </div>
              <div className="flex items-center">
                <Button className="bg-gray-50 border border-gray-100 hover:bg-gray-50 rounded-sm">
                  Share
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
              <div className="h-60 w-full">
                <img
                  src={"/banner-1.png"}
                  className="object-cover h-full w-full rounded-lg object-top"
                />
              </div>
              <div className="h-60 w-full">
                <img
                  src={"/banner-2.png"}
                  className="object-cover h-full w-full rounded-lg object-top"
                />
              </div>
              <div className="h-60 w-full">
                <img
                  src={"/banner-3.png"}
                  className="object-cover h-full w-full rounded-lg object-top"
                />
              </div>
              <div className="h-60 w-full">
                <img
                  src={"/banner-4.png"}
                  className="object-cover h-full w-full rounded-lg object-top"
                />
              </div>
              <div className="h-60 w-full hidden md:block">
                <img
                  src={"/banner-5.png"}
                  className="object-cover h-full w-full rounded-lg object-top"
                />
              </div>
              <div className="h-60 w-full hidden md:block">
                <img
                  src={"/banner-6.png"}
                  className="object-cover h-full w-full rounded-lg object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
