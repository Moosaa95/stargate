"use client"

import React from "react";
import { motion } from "framer-motion";
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

const Program: React.FC<ProgramCardsProps> = ({ programs }) => {
  const cardVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        type: "spring",
      },
    },
    initial: {
      scale: 1
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 max-w-screen-xl">
        <h1 className="text-xl lg:text-3xl font-bold mb-8 text-center text-gray-90 uppercase">Our Programs at Stargate Academy</h1>
        <div className="grid my-16 mx-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              key={program.id}
              className="relative group bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Link href={program.url}>
                
                  <Image src={program.imageUrl} width={400} height={300} alt={program.title} className="w-full block transition-transform duration-300 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-300 ease-in-out" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-xl text-center font-bold  text-gray-100">{program.stage}</p>
                    <p className="text-lg text-center font-semibold text-gray-100 mb-2">{program.title}</p>
                  </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Program;


// "use client"

// import React from "react";
// import {motion} from "framer-motion"
// import fadeIn from "@/variants";
// import Image from "next/image";
// import Link from "next/link";

// interface Program {
//   id: number;
//   title: string;
//   icon: JSX.Element;
//   light: boolean;
//   imageUrl: string;
//   url: string;
//   stage: string;
// }

// interface ProgramCardsProps {
//   programs: Program[];
// }


// const Program: React.FC<ProgramCardsProps> = ({ programs })  => {
//   return (
//     <>
//         <div className="container mx-auto px-4  max-w-screen-xl">
//           {/* academic title */}
//           <h1 className="text-3xl font-bold mb-8 text-center text-gray-90 uppercase">Our Programs at Stargate Academy</h1>
//         <div className="grid my-16 mx-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//       {programs.map((program, i) => (
//           <motion.div
//           variants={fadeIn("up", 0.2)}
//           initial="hidden"
//           whileInView={"show"}
//           key={i}
//           viewport={{once:false, amount:0.7}}>
//           <Link href={program.url} key={program.id} className="relative group bg-white rounded-md shadow-md overflow-hidden">
//             <Image src={program.imageUrl} width={400} height={300} className="w-full rounded-md block" alt={program.title} priority />
           
//             <div className="absolute right-0 left-0 top-[70%] bg-white rounded-[20px] pt-4 flex items-center justify-center flex-col">
//                {/* {program.icon} */}
//               <div>
//               <p className="text-xl text-center font-bold bg-gray-90 text-white py-2 px-2 rounded-md cursor-pointer">{program.stage}</p>
//               <p className="text-xl text-center font-semibold">{program.title}</p>
//               </div>
//             </div>
//           </Link>
//           </motion.div>
//       ))}
//       </div>
//         </div>
//     </>

//   )
// }


// export default Program