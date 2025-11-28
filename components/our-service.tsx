import { primaryFont, secondaryFont } from "@/font";
import { Button } from "./ui/button";

export const OurService = () => {
  return (
    <section className="min-h-screen">
      <div className="title flex items-center justify-center flex-col">
        <p className="text-md py-4 px-6 underline text-lg decoration-wavy decoration-[#20808D] underline-offset-3">Our Services</p>
        <h1 className={`text-2xl lg:text-5xl  `}>Anything you need. Done for you</h1>
      </div>
    </section>
  );
};
