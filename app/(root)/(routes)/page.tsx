import AboutUs from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import WhyChooseStargate from "@/components/Home/Choose.";
import Faculty from "@/components/Home/Faculty";
import Faq from "@/components/Home/Faq";
import FeaturedContent from "@/components/Home/Feature";
import FeatureSection from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import NewsLetter from "@/components/Home/NewsLetter";
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
    
      const activities  = 
        {
          itemTitleOne: "Sports",
          itemTitleTwo: "Clubs and Societies",
          itemDescriptionOne: "At Stargate Academy, we believe in the importance of a well-rounded education. Our extracurricular program offers a wide range of activities, from sports to clubs, allowing students to explore their interests, develop new skills, and build lasting friendships.",
          itemDescriptionTwo: "At Stargate Academy, we believe in the importance of a well-rounded education. Our extracurricular program offers a wide range of activities, from sports to clubs, allowing students to explore their interests, develop new skills, and build lasting friendships. ",
          Title: "Extracurricular Activities"
        }
      const visions = {
        itemTitleOne: "Academic and Spiritual Excellence",
          itemTitleTwo: "Diverse Programs for Holistic Development",
          itemDescriptionOne: "Our core principles guide everything we do, from the classroom to the community. Discipline, integrity, and resilience are not just ideals but daily practices, woven into the fabric of our Academy life. We believe in the power of education to transform lives, fostering strength, character, and a commitment to excellence in our students.",
          itemDescriptionTwo: "From play-based learning in our crèche and nursery programs to interactive and personalized instruction in our primary and secondary levels, we cater to each child's unique needs. Our extracurricular offerings, including the Press Club, Jet Club, and various sports, ensure that every student finds their passion and pursues it with vigor.",
          Title: "Our Vision in Action"
      }
    return (
        <div className="w-full scroll-smooth">
            
                <Banner />
                <AboutUs />
                <Values />
                <Faculty {...visions} />
                <WhyChooseStargate />
                <Program programs={programs} />
                <FeaturedContent />
                <Faculty {...activities} />
                <Faq />
                <NewsLetter />
            
            {/* <h1>hey</h1> */}
            {/* <Hero />
            <Banner />
            <FeatureSection /> */}
        </div>
    )
}

