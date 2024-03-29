// import Image from "next/image";

// const ProgramSection = () => {
//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {programData.map((program, index) => (
//             <ProgramCard key={index} program={program} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const ProgramCard = ({ program }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden">
//       <div className="relative h-64">
//         <Image src="" alt={program.title} layout="fill" objectFit="cover" />
//       </div>
//       <div className="p-6">
//         <h3 className="text-xl font-semibold text-gray-800">{program.title}</h3>
//         <div className="text-sm text-gray-600 mt-2">{program.description}</div>
//         <div className="mt-4">
//           <a href="#" className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
//             See Details
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// const programData = [
//   {
//     title: "Toddler",
//     image: "https://rishidemos.com/pre-school/wp-content/uploads/sites/45/2022/02/Mask-Group2.jpg",
//     ageRange: "1-2 Years",
//     description: "The toddler years are a time of great cognitive and emotional development.",
//   },
//   {
//     title: "Kindergarten",
//     image: "https://rishidemos.com/pre-school/wp-content/uploads/sites/45/2022/02/Mask-Group1.jpg",
//     ageRange: "2-3 Years",
//     description: "The kindergarten program provides a nurturing environment for children to learn and grow.",
//   },
//   {
//     title: "Preschool",
//     image: "https://rishidemos.com/pre-school/wp-content/uploads/sites/45/2022/02/Mask-Group3.jpg",
//     ageRange: "3-4 Years",
//     description: "Our preschool curriculum focuses on developing social and academic skills in young children.",
//   },
// ];

// export default ProgramSection;
// import Image from "next/image";
// import React from "react";

// interface Program {
//   id: number;
//   title: string;
//   description: string;
//   backgroundUrl: string;
//   iconUrl: string;
//   light: boolean;
//   imageUrl: string;
// }

// interface ProgramCardsProps {
//   programs: Program[];
// }

// const Program: React.FC<ProgramCardsProps> = ({ programs }) => {
//   return (
//     <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
//         <div className="mx-auto my-[80px] w-[90%] flex items-center justify-between">
//         {programs.map((program) => (
//             <div className="relative basis-[31%]">
//                 <Image src={program.imageUrl} alt={program.title} width={100} height={100} className="w-[100%] rounded-md block" />
//                 {/* caption */}
//                 <div className="rounded-md absolute top-0 left-0 bottom-0 right-0">
//                     <img src="/assets/images/icon.jpg" alt="" />
//                     <p>{program.title}</p>
//                 </div>
//             </div>
//         ))}
//         </div>
//     </div>
//   );
// };

// export default Program;
"use client"

import React from "react";
import {motion} from "framer-motion"
import fadeIn from "@/variants";
import Image from "next/image";
import Link from "next/link";

interface Program {
  id: number;
  title: string;
  icon: JSX.Element;
  light: boolean;
  imageUrl: string;
  url: string;
  stage: string;
}

interface ProgramCardsProps {
  programs: Program[];
}

// const Program: React.FC<ProgramCardsProps> = ({ programs }) => {
//   return (
//     <div className="container mx-auto px-4 py-16 max-w-screen-xl">
//         <h2 className="text-3xl font-bold mb-8 text-center">Our Programs</h2>
//       <div  className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {programs.map((program) => (
          // <motion.div
          // variants={fadeIn("up", 0.2)}
          // initial="hidden"
          // whileInView={"show"}
          // viewport={{once:false, amount:0.7}}

//             key={program.id}
//             className="relative bg-white rounded-md shadow-lg overflow-hidden"
//           >
//             <img
//               src={program.imageUrl}
//               alt={program.title}
//               className="w-full h-48 object-cover object-center"
//             />
//             <motion.div 
//                 variants={fadeIn("right", 0.3)}
//                 initial="hidden"
//                 whileInView={"show"}
//                 viewport={{once:false, amount:0.7}}
//                 className="p-4">
//               <h3 className="text-lg font-semibold mb-2">{program.title}</h3>
//               <p className="text-sm text-gray-600">{program.description}</p>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Program;

const Program: React.FC<ProgramCardsProps> = ({ programs })  => {
  return (
    <>
        <div className="container mx-auto px-4  max-w-screen-xl">
          {/* academic title */}
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-90 uppercase">Our Programs at Stargate Academy</h1>
        <div className="grid my-16 mx-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {programs.map((program, i) => (
          <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          key={i}
          viewport={{once:false, amount:0.7}}>
          <Link href={program.url} key={program.id} className="relative group bg-white rounded-md shadow-md overflow-hidden">
            <Image src={program.imageUrl} width={400} height={300} className="w-full rounded-md block" alt={program.title} />
            {/* ca[tiom] */}
            {/* <div className="absolute pt-[70%] flex items-center justify-center flex-col inset-0 bg-gray-90 bg-opacity-50 rounded-md opacity-0  group-hover:opacity-100 group-hover:pt-0 transition-all duration-500"> */}
              {/* <Image src={program.imageUrl} width={60} height={60} alt="" className="w-16 h-16 mb-2 object-cover rounded-full" />
              
               */}
            <div className="absolute right-0 left-0 top-[70%] bg-white rounded-[20px] pt-4 flex items-center justify-center flex-col">
               {/* {program.icon} */}
              <div>
              <p className="text-xl text-center font-bold bg-gray-90 text-white py-2 px-2 rounded-md cursor-pointer">{program.stage}</p>
              <p className="text-xl text-center font-semibold">{program.title}</p>
              </div>
            </div>
          </Link>
          </motion.div>
      ))}
      </div>
        </div>
    </>

  )
}


export default Program