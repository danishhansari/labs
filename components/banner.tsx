import { ibmPlexMono } from "@/font";
import { Energy } from "@/svg/energy";

export const Banner = () => {
  return (
    <div className="relative px-5 sm:px-8 lg:px-18">
      <div className="px-8 py-5 border-x-[0.01px] border-t-0 border-b flex items-center justify-center gap-1.5 md:gap-4">
        <Energy />
        <span
          className={`uppercase ${ibmPlexMono.className} text-[11px] md:text-sm bg-clip-text text-transparent gradient-text text-center`}
        >
          Design & build sprints for startups
        </span>
      </div>
    </div>
  );
};
