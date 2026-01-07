import { Banner } from "@/components/banner";
import { Benefits } from "@/components/benefits";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Pricing } from "@/components/pricing";
import { Service } from "@/components/service";
import { Problem } from "@/components/problem";
import NewNav from "@/components/nav-new";

export default function Page() {
  return (
    <>
      <Nav />
      <Banner />
      <Hero />
      <Problem />
      <Service />
      <Pricing />
      <Benefits />
      <Faq />
      <Footer />
    </>
  );
}
