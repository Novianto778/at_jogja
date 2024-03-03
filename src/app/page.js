import PopularTrips from "@/components/PopularTrips";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import TrendingDestination from "@/components/TrendingDestination";
import Guide from "@/components/Guide";
import Stories from "@/components/Stories";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <PopularTrips />
      <Video />
      <TrendingDestination />
      <Guide />
      <Stories />
      <Stats />
    </main>
  );
}
