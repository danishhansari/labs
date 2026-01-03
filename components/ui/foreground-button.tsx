import { Button } from "./button";

export const ForegroundButton = ({ className }: { className?: string }) => {
  return (
    <>
      <Button
        className={`bg-[#0D2727] hover:bg-[#0D2727]/96 text-white transition-colors cursor-pointer ${className}`}
        size={"lg"}
        data-cal-link="aurolabs/15min"
        data-cal-config='{"theme":"light"}'
      >
        Book a free call
      </Button>
    </>
  );
};
