import Banner from "@/components/Home/Banner";
import WhyChooseStargate from "@/components/Home/Choose.";
import FeaturedContent from "@/components/Home/Feature";
import FeatureSection from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Program from "@/components/Home/Programs";
import AcademicProgramsSnippet from "@/components/Home/Programs";
import Values from "@/components/Home/Values";

export default function Home() {
    const programs = [
        {
          id: 1,
          title: "Early Years: Crèche and Nursery",
          iconUrl: "https://example.com/icon-1.png",
          light: true,
          imageUrl: "/assets/images/stargate10.jpg",
          url: "/program"
        },
        {
          id: 2,
          title: "Primary Academy: Building Blocks of Education",
          iconUrl: "https://example.com/icon-2.png",
          light: false,
          imageUrl: "/assets/images/stargate2.jpg",
          url: "/program"
        },
        {
          id: 3,
          title: "Secondary Academy: Preparing for the Future",
          iconUrl: "https://example.com/icon-2.png",
          light: false,
          imageUrl: "/assets/images/stargate6.jpg",
          url: "/program"
        },
        {
          id: 3,
          title: "Tahfeez Program: Nurturing Spiritual Growth",
          iconUrl: "https://example.com/icon-2.png",
          light: false,
          imageUrl: "/assets/images/stargate3.jpg",
          url: "/program"
        },
         
      ];
    return (
        <div className="w-full scroll-smooth">
            
                <Banner />
                <Values />
                <WhyChooseStargate />
                <Program programs={programs} />
                <FeaturedContent />
            
            {/* <h1>hey</h1> */}
            {/* <Hero />
            <Banner />
            <FeatureSection /> */}
        </div>
    )
}

