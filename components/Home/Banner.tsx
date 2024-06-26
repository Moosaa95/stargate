"use client"
import { Carousel } from "flowbite-react";
import Image from "next/image";
import { motion } from 'framer-motion';
import fadeIn from "@/variants";
import Link from "next/link";

interface CarouselProps {
    src: string;
    alt: string
}

const CarouselSlide = ({ src, alt }:CarouselProps) => (
    <div className="h-full relative">
        <Image src={src} alt={alt} layout="fill" objectFit="cover" priority={src === "/assets/images/stargate1.jpg"} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
    </div>
);

const Banner = () => {
    return (
        <section className="mt-[100px] mx-auto lg:min-h-[90vh] h-[40vh] relative">
            <Carousel className="w-[95%] rounded-md h-full mx-auto relative">
                <CarouselSlide src="/assets/images/stargate1.jpg" alt="A view of Stargate Academy"/>
                <CarouselSlide src="/assets/images/stargate2.jpg" alt="Exploring the unknown at Stargate Academy"/>
                <CarouselSlide src="/assets/images/stargate-banner-one.jpeg" alt="Join us on an adventure at Stargate Academy"/>
                <CarouselSlide src="/assets/images/stargate-banner-two.jpeg" alt="Join us on an adventure at Stargate Academy"/>
            </Carousel>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="absolute top-1/4 lg:top-1/2 left-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 ">
                <h1 className="text-xl font-freeman lg:text-6xl font-bold">Welcome to Stargate Excellence Academy</h1>
                <p className="text-xl font-merriweather lg:text-xl m-4">Where Stars are Born and Gates Open to the Future.</p>
                <Link href="/programs" className="mt-4 font-merriweather hidden lg:inline-block bg-gray-90 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300">
                        Explore Our Programs
                </Link>
            </motion.div>
        </section>
    );
};

export default Banner;


