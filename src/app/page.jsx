import Banner from "@/components/Home/Banner/Banner";
import Smallcard from "@/components/Home/MainSection/Smallcard";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner />
      <div className="bg-sky-100 h-420 md:h-270 lg:h-170 xl:160">
        <Smallcard />
      </div>
    </div>
  );
}
