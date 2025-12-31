import { Banner } from "@/components/banner";
import Footer from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { NewNav } from "@/components/new-nav";
import { OurService } from "@/components/our-service";
import { Pricing } from "@/components/pricing";
import { Work } from "@/components/work";

export default function Page() {
  return (
    <>
      {/* <Nav /> */}
      <NewNav />
      <Banner />
      <Hero />
      <Work />
      <OurService />
      <Pricing />
      <Footer />
    </>
  );
}
