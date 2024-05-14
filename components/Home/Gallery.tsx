import Image from "next/image";
import Link from "next/link";

interface GalleryProps {
    image: string;
    title: string;
}

interface GalleryCardsProps {
    galleries: GalleryProps[];
  }

const Gallery = ({galleries}:GalleryCardsProps) => {
  return (
    <section className="flex flex-col items-center justify-center px-10">
        <h3 className="text-gray-90 text-2xl uppercase font-bold mt-32 text-center font-freeman">Gallery</h3>
        <div className="mt-12 overflow-x-hidden w-full relative">
            <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[40%]">
                {galleries.map((gallery) => (
                    <div className="p-2 shadow-lg min-w-[15rem] bg-white rounded-md">
                        <Link href="/gallery">
                        <Image src={gallery.image} alt={gallery.title} width={400} height={300}/>
                        </Link>
                        {/* <div>{gallery.title}</div> */}
                    </div>
                ))}
            </div>
        </div>
        {/* <div className="p-2 shadow-lg min-w-[15rem] bg-white rounded-md">
        <Image src={image} alt={title} width={400} height={300}/>
        <div>{title}</div>
        </div> */}

      
    </section>
  )
}

export default Gallery



// "use client"
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { useRef, useEffect, useState } from 'react';

// interface GalleryProps {
//     image: string;
//     title: string;
// }

// interface GalleryCardsProps {
//     galleries: GalleryProps[];
// }

// const Gallery = ({ galleries }: GalleryCardsProps) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [dragConstraints, setDragConstraints] = useState({ right: 0, left: 0 });

//   useEffect(() => {
//     const calculateConstraints = () => {
//       const width = containerRef.current?.scrollWidth || 0;
//       const screenWidth = window.innerWidth || 0;
//       setDragConstraints({ left: Math.min(screenWidth - width, 0), right: 0 });
//     };

//     calculateConstraints();
//     window.addEventListener('resize', calculateConstraints);

//     return () => {
//       window.removeEventListener('resize', calculateConstraints);
//     };
//   }, [galleries]);

//   const imageHoverVariants = {
//     hover: {
//       scale: 1.05
//     }
//   };

//   return (
//     <section className="flex flex-col items-center justify-center px-10 py-12">
//         <h3 className="text-gray-90 text-3xl uppercase font-bold mb-8 text-center">Gallery</h3>
//         <div className="overflow-hidden w-full relative">
//             <motion.div
//               ref={containerRef}
//               drag="x"
//               dragConstraints={dragConstraints}
//               className="flex gap-6 snap-x snap-mandatory overflow-hidden scroll-smooth scrollbar-hide"
//               style={{ cursor: 'grab' }}>
//                 {galleries.map((gallery, index) => (
//                     <motion.div key={index} className="snap-center shrink-0 p-2 shadow-lg min-w-[300px] bg-white rounded-lg"
//                         variants={imageHoverVariants}
//                         whileHover="hover"
//                         initial={{ scale: 1 }}
//                         transition={{ duration: 0.3 }}>
//                         <Link href="/gallery">
//                                 <Image src={gallery.image} alt={gallery.title} width={400} height={300} className="rounded-lg"/>
//                         </Link>
//                         {/* <p className="text-center mt-2">{gallery.title}</p> */}
//                     </motion.div>
//                 ))}
//             </motion.div>
//         </div>
//     </section>
//   );
// }

// export default Gallery;
