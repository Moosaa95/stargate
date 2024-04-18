// components/TahfeezProgram.tsx

import AcademicProgramsSection from "@/components/programs/Academic";
import FacultyOverview from "@/components/programs/FacultyOverview";
import FacultyAndExtracurricular from "@/components/programs/FacultySport";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Tahfeez Program"
}


const TahfeezProgram = () => {
  const tahfeezArray = {
    programTitle: "Tahfeez Program: Nurturing Spiritual Growth",
    programDescriptionOne: "In addition to our robust academic curriculum, Stargate Academy proudly offers a comprehensive Tahfeez program designed to deepen our students&#39; understanding and practice of Islam. This program is a testament to our commitment to nurturing not just the intellectual but also the spiritual well-being of our students. Through the Tahfeez classes, children have the opportunity to connect with the Quran, mastering its recitation and delving into the basics of Islamic teachings.",
    programDescriptionTwo: "From our youngest learners in crèche and nursery to our future graduates in senior secondary, every student embarks on a transformative journey of discovery, learning, and growth.",
    programs : [
      {
          title: "After-Academy Hours",
          description: "The program runs from the end of the normal Academy day, Mondays to Thursdays, providing a convenient schedule for our students to participate without conflict with their regular studies.",
          imageUrl: "/assets/images/stargate-afterclass.jpg"
      },
      {
          title: "Saturday Classes",
          description: "Recognizing the importance of dedicated time for more intensive study, the Tahfeez program also includes full-day classes on Saturdays from 9 am to 4 pm. This extended session allows for deeper engagement and more personalized instruction in Quranic recitation and Islamic studies.",
          imageUrl: "/assets/images/quran_class.jpg"
      },
      {
          title: "Quranic Recitation",
          description: "Students learn to recite the Quran with proper Tajweed, emphasizing pronunciation and articulation, to foster a profound connection with the words of Allah.",
          imageUrl: "/assets/images/stargate-quran-recitation.jpg"
      },
      {
        title: "Islamic Foundations",
        description: "Alongside recitation, the program covers essential aspects of Islamic teachings, including the basics of Aqidah, Fiqh, and Seerah, providing students with a well-rounded understanding of their faith.",
        imageUrl: "/assets/images/stargate-islamic-foundation.jpg"
    }
  ]
  }

  const facultySections = [
    {
      title: 'Our Educators',
      text: `Our Tahfeez instructors are not just teachers; they are mentors who bring a wealth of knowledge 
      and a deep personal commitment to Islamic education. With expertise in Quranic studies and a
      passion for teaching, they guide our students on their spiritual journey, fostering an environment of
      respect, understanding, and devotion.`,
    },
    {
      title: 'Beyond Academics: Building Character and Community',
      text: `The Tahfeez program is more than just an educational offering; it&#39;s a cornerstone of our community
      at Stargate Academy. By integrating Islamic education into our curriculum, we help our students
      develop a strong moral compass and a sense of identity rooted in their faith. This program also
      reinforces the values of discipline, perseverance, and community, as students learn alongside their
      peers and form bonds that extend beyond the classroom.`,
    },
    // {
    //   title: 'Lifelong Learning Advocates',
    //   text: `This dedication not only enriches their teaching but also models the importance of continual growth and curiosity for their students.`,
    // },
    // {
    //   title: 'Community Builders',
    //   text: `Their influence extends far beyond academic achievement, contributing to the holistic development of our students as global citizens.`,
    // },
    {
      title: "Join Our Tahfeez Program",
      text: "We invite you to enrich your child's educational journey with the gift of Quranic knowledge and the timeless teachings of Islam. The Tahfeez program at Stargate Academy is open to all students who seek to embrace their faith, learn the beautiful art of Quranic recitation, and live the principles of Islam in their daily lives. Join us, and watch your child grow not only academically but also spiritually,ready to lead with faith, integrity, and compassion."
    }
  ];
    return (
      <section className="relative bg-cover bg-center py-16 mt-[50px]">
        <AcademicProgramsSection {...tahfeezArray} />
        {/* <FacultyAndExtracurricular /> */}
        {/* <EducationPhilosophyAndEnrollment />
        <FacultyOverview sections={facultySections} /> */}
        <FacultyOverview sections={facultySections} />

      </section>
    );
  };
  
  export default TahfeezProgram;
  