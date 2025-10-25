import { Phone } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <section className="pb-8 md:pb-10 overflow-x-clip w-full mx-auto relative pt-20 lg:pt-24  text-center">
      <p
        className="md:text-[15rem] text-7xl text-transparent select-none"
        style={{
          WebkitTextStroke: "1px #20808D",
        }}
      >
        AuroLabs
      </p>
      <div className="md:text-4xl text-center mx-auto">
        <p>If you scrolled this far,</p>
        <p>It's time to LEVEL UP</p>
        <Button
          className="bg-[#20808D] border-none !px-7 hover:scale-105 lg:text-md hover:bg-[#23a1b2] border text-[#FBFAF4] hover:text-white py-6 transition-transform mt-4 md:flex-0 rounded-full"
          variant={"default"}
          data-cal-link="aurolabs"
          data-cal-config='{"theme":"dark"}'
        >
          Book a Quick Call <Phone />
        </Button>
      </div>
    </section>
  );
};
