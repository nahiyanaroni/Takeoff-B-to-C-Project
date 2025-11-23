import Banner from "@/components/Home/Banner/Banner";

import Smallcard from "@/components/Home/MainSection/Smallcard";
import ScrollingImage from "@/components/Home/MainSection/ScrollingImage.jsx";
import FlightTracking from "@/components/Home/MainSection/flight-tracking";
import AirlineLogo from "@/components/Home/MainSection/AirlineLogo";
import FlightTop from "@/components/Home/MainSection/FlightTop";
export default function Home() {
  return (
    <div className="bg-white">
      <Banner />
      <div className="bg-sky-100 h-420 md:h-270 lg:h-170 xl:160">
        <Smallcard />
      </div>
      <ScrollingImage />
     <FlightTracking />
     <AirlineLogo />
     <FlightTop />
    </div>
  );
}
