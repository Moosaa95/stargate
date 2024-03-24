'use client'

import { Carousel } from "flowbite-react";
import Image from "next/image";
import {motion} from 'framer-motion'
import fadeIn from "@/variants";
const Banner = () => {
    return (
        <section className="mt-[100px]   mx-auto min-h-[90vh] h-[70vh] relative">
            <Carousel className="w-full h-full mx-auto relative">
                <div className="h-full relative ">
                    <Image src="/assets/images/stargate1.jpg" alt="" layout="fill" objectFit="cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
                    {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold">Welcome to Stargate Academy</h1>
                        <p className="text-lg lg:text-xl mt-4">Explore the depths of the universe with our expert team.</p>
                    </div> */}
                </div>
                <div className="flex h-full items-center justify-center relative">
                    <Image src="/assets/images/stargate2.jpg" alt="" layout="fill" objectFit="cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
                    {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold">Explore the Unknown</h1>
                        <p className="text-lg lg:text-xl mt-4">Embark on a journey to discover new worlds.</p>
                    </div> */}
                </div>
                <div className="flex h-full items-center justify-center relative">
                    <Image src="/assets/images/stargate3.jpg" alt="" layout="fill" objectFit="cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
                    {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold">Join Us in the Adventure</h1>
                        <p className="text-lg lg:text-xl mt-4">Enroll now and unlock the secrets of the cosmos.</p>
                    </div> */}
                </div>
            </Carousel>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial= "hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.7}}
                className="absolute top-1/2 left-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
                <h1 className="text-4xl lg:text-6xl font-bold">Welcome Stargate International Academy</h1>
                <p className="text-lg lg:text-xl mt-4">Where Stars are Born and Gates Open to the Future.</p>
            </motion.div>
        </section>
    );
};


export default Banner;
