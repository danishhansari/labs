import { Banner } from "@/components/banner";
import Footer from "@/components/footer";
import { NewHero } from "@/components/new-hero";
import { NewNav } from "@/components/new-nav";
import { OurService } from "@/components/our-service";
import { Pricing } from "@/components/pricing";
import { Problem } from "@/components/problem";

export default function Page() {
  return (
    <>
      <NewNav />
      <Banner />
      <NewHero />
      <Problem />
    </>
  );
}
