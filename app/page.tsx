import { Banner } from "@/components/banner";
import { Benefits } from "@/components/benefits";
import { Faq } from "@/components/faq";
import { NewFooter } from "@/components/new-footer";
import { NewHero } from "@/components/new-hero";
import { NewNav } from "@/components/new-nav";
import { NewPricing } from "@/components/new-pricing";
import { NewService } from "@/components/new-service";
import { Problem } from "@/components/problem";

export default function Page() {
  return (
    <>
      <NewNav />
      <Banner />
      <NewHero />
      <Problem />
      <NewService />
      <NewPricing />
      <Benefits />
      <Faq />
      <NewFooter />
    </>
  );
}
