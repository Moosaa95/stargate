"use client"
import Image from 'next/image';
import Link from 'next/link';
import {motion} from "framer-motion"
import fadeIn from '@/variants';
interface AboutProps {
  title: string;
  text_one: string;
  text_two: string;
}
const About = ({title, text_one, text_two}: AboutProps) => {
  return (
    <section className='w-full bg-white py-16 px-4'>
        <div className="max-w-[1240px] gap-10 mx-auto grid md:grid-cols-2">
            <Image src="/assets/images/stargate4.jpg" alt='stargate building' width={400} height={300} className='w-[100%] mx-auto my-4'/>
            <motion.div
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.7}}
                 className="flex flex-col justify-between">
                
                <h1 className='text-gray-90 md:text-4xl sm:text-3xl text-2xl font-bold py-2'>{title}</h1>
                <p className="text-lg lg:text-xl text-gray-700 mb-6">
                    {/* Stargate Academy is a beacon of academic excellence committed to
                    nurturing young minds and fostering a culture of lifelong learning and
                    personal growth. */}
                    {text_one}
               </p>
               <p className="text-lg lg:text-xl text-gray-700 mb-6">
                {/* Founded in 2008, Stargate Academy has a rich history of providing a
                comprehensive education that blends rigorous academic standards with
                spiritual and moral development, preparing students not just for exams
                but for life. */}
                {text_two}
                </p>
                {/* <button className='bg-gray-90 w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-0 text-white hover:font-bold'>Learn More</button> */}
            </motion.div>
        </div>

    </section>
  );
};

export default About;




// import Image from 'next/image';
// import Link from 'next/link';

// const AboutUs = () => {
//   return (
//     <section className="about-us-container my-10 mx-auto px-4 lg:px-0 flex flex-col lg:flex-row items-center justify-between">
//       {/* About Left */}
//       <div className="about-image lg:mr-8">
//         <Image
//           src="/assets/images/stargate10.jpg"
//           alt="Stargate Academy Building"
//           width={400}
//           height={300}
//           objectFit="cover"
//           className="rounded-lg"
//         />
//       </div>

//       {/* About Right */}
//       <div className="about-content lg:ml-8">
//         <h2 className="text-3xl font-bold text-gray-900 mb-4 max-w-md">
//           About Stargate Academy
//         </h2>
        // <p className="text-lg text-gray-700 mb-6">
        //   Stargate Academy is a beacon of academic excellence committed to
        //   nurturing young minds and fostering a culture of lifelong learning and
        //   personal growth.
        // </p>
        // <p className="text-lg text-gray-700 mb-6">
        //   Founded in 2008, Stargate Academy has a rich history of providing a
        //   comprehensive education that blends rigorous academic standards with
        //   spiritual and moral development, preparing students not just for exams
        //   but for life.
        // </p>
//         <Link href="/about-us">
//           <a className="text-lg text-blue-600 font-semibold hover:underline">
//             Learn More
//           </a>
//         </Link>
//       </div>
//     </section>
//   );
// };
