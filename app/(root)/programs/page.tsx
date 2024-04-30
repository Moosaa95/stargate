import AcademicProgramsSection from "@/components/programs/Academic";
import EducationPhilosophyAndEnrollment from "@/components/programs/Education";
import FacultyOverview from "@/components/programs/FacultyOverview";
import FacultyAndExtracurricular from "@/components/programs/FacultySport";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Programs"
}
const facultySections = [
  {
    title: 'Our Pillars of Strength',
    text: `Our teaching staff is our greatest asset, bringing a wealth of knowledge, experience, and passion to the classroom. With qualifications ranging from master’s degrees to B.Ed.s and HNDs, our teachers are dedicated to providing a supportive and stimulating learning environment.`,
    listItems: [
      `Their diverse backgrounds in academia and industry enrich our curriculum, allowing them to bring real-world perspectives into every lesson.`,
      `Embracing the latest in educational technology and pedagogical approaches, our teachers continually seek innovative ways to engage students and enhance learning outcomes.`,
      `Believing in education as a lifelong journey, our faculty members themselves are constant learners.`,
      `Beyond the classroom, our teachers are pillars of our school community, playing pivotal roles in leading extracurricular clubs, organizing community service projects, and facilitating school events.`,
    ],
  },
  {
    title: 'Expertise and Passion',
    text: `Our faculty members are not just educators; they are mentors who inspire and guide our students to achieve their best. Through personalized attention and a commitment to understanding each student's unique needs and potentials, they foster an atmosphere where curiosity is encouraged and excellence is achieved.`,
  },
  // {
  //   title: 'Innovative Teaching Methods',
  //   text: `From interactive digital platforms to project-based learning, they implement a variety of strategies that cater to different learning styles, ensuring that each student can thrive.`,
  // },
  // {
  //   title: 'Lifelong Learning Advocates',
  //   text: `This dedication not only enriches their teaching but also models the importance of continual growth and curiosity for their students.`,
  // },
  // {
  //   title: 'Community Builders',
  //   text: `Their influence extends far beyond academic achievement, contributing to the holistic development of our students as global citizens.`,
  // },
  {
    title: "Continuous Professional Development",
    text: ": We invest in ongoing training and development, ensuring our teachers stay at the forefront of educational best practices."
  }
];

const academyArray = {
  programTitle: "Academic Programs at Stargate Academy",
  programDescriptionOne: "At Stargate Academy, we are committed to offering an enriching curriculum that prepares students for success in a dynamic world. Our academic programs integrate the rigorous standards of Nigerian and British curricula with the spiritual depth of Islamic studies, creating a holistic educational journey that nurtures the mind, body, and spirit.",
  programDescriptionTwo: "From our youngest learners in crèche and nursery to our future graduates in senior secondary, every student embarks on a transformative journey of discovery, learning, and growth.",
  programs : [
    {
        title: "Early Years: Crèche and Nursery",
        description: "Our early years program focuses on play-based learning and interactive activities, laying the foundation for a lifelong love of learning.",
        imageUrl: "/assets/images/stargate-creche.jpg"
    },
    {
        title: "Primary Academy: Building Blocks of Education",
        description: "As students progress to our primary Academy, they encounter a more structured yet flexible curriculum designed to spark curiosity and foster academic excellence.",
        imageUrl: "/assets/images/stargate2.jpg"
    },
    {
        title: "Secondary Academy: Preparing for the Future",
        description: "Our secondary Academy program is divided into junior and senior sections, each tailored to prepare students for the challenges and opportunities ahead.",
        imageUrl: "/assets/images/stargate6.jpg"
    }
]
}
const AcademicPrograms = () => {
    return (
      <section className="relative bg-cover bg-center py-16 mt-[50px]">
        <AcademicProgramsSection {...academyArray} />
        <FacultyAndExtracurricular />
        <EducationPhilosophyAndEnrollment />
        <FacultyOverview sections={facultySections} />
      </section>
    );
  };
  
  export default AcademicPrograms;
  