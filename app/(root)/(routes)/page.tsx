import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import WhyChooseStargate from "@/components/Home/Choose.";
import Faculty from "@/components/Home/Faculty";
import Faq from "@/components/Home/Faq";
import Gallery from "@/components/Home/Gallery";
import NewsLetter from "@/components/Home/NewsLetter";
import Program from "@/components/Home/Programs";
// import Values from "@/components/Home/Values";
import { FaBabyCarriage, FaSchool, FaUniversity, FaPrayingHands } from 'react-icons/fa';


export default function Home() {
    const programs = [
        {
          id: 1,
          title: "Crèche and Nursery",
          icon: <FaBabyCarriage size={50} className="rounded-full text-white w-16 h-16 mb-2" />,
          light: true,
          imageUrl: "/assets/images/stargate10.jpg",
          url: "/programs",
          stage: "Early Years"
        },
        {
          id: 2,
          title: "Building Blocks of Education",
          icon: <FaSchool size={50} className="rounded-full text-white w-16 h-16 mb-2" />,
          light: false,
          imageUrl: "/assets/images/stargate2.jpg",
          url: "/programs",
          stage: "Primary Academy"
        },
        {
          id: 3,
          title: "Preparing for the Future",
          icon: <FaUniversity size={50} className="rounded-full text-white w-16 h-16 mb-2" />,
          light: false,
          imageUrl: "/assets/images/stargate6.jpg",
          url: "/programs",
          stage: "Secondary Academy"
        },
        {
          id: 3,
          title: "Nurturing Spiritual Growth",
          icon: <FaPrayingHands size={50} className="rounded-full text-white w-16 h-16 mb-2" />,
          light: false,
          imageUrl: "/assets/images/stargate3.jpg",
          url: "/programs",
          stage: "Tahfeez Program"
        },
         
      ];

      const Galleries = [
        {
          id: 1,
          title: "Early Years: Crèche and Nursery",
          image: "/assets/images/stargate10.jpg",
          url: "/programs"
        },
        {
          id: 2,
          title: "Primary Academy: Building Blocks of Education",
          image: "/assets/images/stargate2.jpg",
          url: "/programs"
        },
        {
          id: 3,
          title: "Secondary Academy: Preparing for the Future",
          image: "/assets/images/stargate6.jpg",
          url: "/programs"
        },
        {
          id: 3,
          title: "Tahfeez Program: Nurturing Spiritual Growth",
          image: "/assets/images/stargate-tahfeez-students.jpg",
          url: "/programs"
        },
         
      ];
    
      const activities  = 
        {
          itemTitleOne: "Sports",
          itemTitleTwo: "Clubs and Societies",
          itemDescriptionOne: "At Stargate Academy, we believe in the importance of a well-rounded education. Our extracurricular program offers a wide range of activities, from sports to clubs, allowing students to explore their interests, develop new skills, and build lasting friendships.",
          itemDescriptionTwo: "Including the Press Club, Jet Club, Farmers Club, and Home Makers, our clubs encourage students to pursue their passions outside the academic curriculum. ",
          Title: "Extracurricular Activities",
          imageOne: "/assets/images/stargate-sports.jpg",
          imageTwo: "/assets/images/stargate-academy-activities.jpg",
          link: "/programs"
        }
      const visions = {
        itemTitleOne: "Academic and Spiritual Excellence",
          itemTitleTwo: "Diverse Programs for Holistic Development",
          itemDescriptionOne: "Our core principles guide everything we do, from the classroom to the community. Discipline, integrity, and resilience are not just ideals but daily practices, woven into the fabric of our Academy life. We believe in the power of education to transform lives, fostering strength, character, and a commitment to excellence in our students.",
          itemDescriptionTwo: "From play-based learning in our crèche and nursery programs to interactive and personalized instruction in our primary and secondary levels, we cater to each child's unique needs. Our extracurricular offerings, including the Press Club, Jet Club, and various sports, ensure that every student finds their passion and pursues it with vigor.",
          Title: "Our Vision in Action",
          imageOne: "/assets/images/stargate-academy-spiritual.jpg",
          imageTwo: "/assets/images/stargate-academy-diverse.jpg",
          link: "/programs"
      }

      const about = {
        title: "About Stargate Excellence Academy",
        text_one: " Stargate Academy is a beacon of academic excellence committed to nurturing young minds and fostering a culture of lifelong learning and personal growth.",
        text_two: "Founded in 2008, Stargate Academy has a rich history of providing a comprehensive education that blends rigorous academic standards with spiritual and moral development, preparing students not just for exams but for life."
      }
    return (
        <div className="w-full  scroll-smooth">
            
                <Banner />
                <About {...about}/>
                {/* <Values /> */}
                <Faculty {...visions} />
                <WhyChooseStargate />
                <Program programs={programs} />
                <Faculty {...activities} />
                <Gallery galleries={Galleries} />
                <Faq />
                <NewsLetter />
            
            {/* <h1>hey</h1> */}
            {/* <Hero />
            <Banner />
            <FeatureSection /> */}
        </div>
    )
}

