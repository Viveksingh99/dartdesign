import About from "@/components/About";
import CaseStudles from "@/components/Case-studles";
import Getintouch from "@/components/Get-in-touch";
import Hero from "@/components/Hero";
import Keymetrics from "@/components/Key-metrics";
import Ourclients from "@/components/Our-clients";
import Ourthinking from "@/components/Our-thinking";
import Strategy from "@/components/Strategy";
import WeDo from "@/components/WeDo";

export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <WeDo/>
    {/* <Strategy/> */}
    <CaseStudles/>
    <Ourclients/>
    <Keymetrics/>
    <Ourthinking/>
    <Getintouch/>
    </>
  );
}
