import { ibmPlexMono } from "@/font";
import { Energy } from "@/svg/energy";

export const Banner = () => {
  return (
    <div className="relative px-4 sm:px-8 lg:px-24">
      <div className="px-8 py-5 border-x-[0.01px] border-t-0 border-b flex items-center justify-center gap-4">
        <Energy />
        <span
          className={`uppercase ${ibmPlexMono.className}  text-sm bg-clip-text text-transparent gradient-text text-center`}
        >
          Design & build sprints for startups
        </span>
      </div>
    </div>
  );
};
