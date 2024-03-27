"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function Story() {
    return (
        <motion.section
            className="container mx-auto px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="flex flex-col md:flex-row items-center md:gap-8"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <div className="md:w-1/2 relative mb-4 md:mb-8">
                    <div className="w-full h-64 md:h-auto rounded-lg overflow-hidden">
                        <Image src="/assets/images/stargate5.jpg" width={600} height={200} alt="star" />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-90 mb-5 leading-tight">Our Foundation: A Beacon of Learning and Integrity</h2>
                    <p className="text-gray-700 text-lg mb-7">
                        <span className="font-bold text-gray-90">A Humble Beginning:</span> Stargate Academy was founded with a clear mission—to offer a nurturing space where students could achieve both academic and spiritual excellence. Starting with two children aged 4 to 8, our family has expanded, embracing diversity and fostering a sense of unity and respect among students from various backgrounds.
                    </p>
                    <p className="text-gray-700 text-lg mb-7">
                    <span className="font-bold text-gray-90">Mission and Vision:</span> At the heart of Stargate Academy is our unwavering commitment to creating
                    leaders of tomorrow. Our mission is to blend academic rigor with spiritual depth, ensuring our
                    students excel not only in their studies but also as individuals of strong character, discipline, and integrity. We strive to be a community beneficial to all, rooted in the core tenets of Islamic culture
                    while promoting strength, resilience, and a commitment to excellence.
                    </p>
                </div>
            </motion.div>
            <motion.div
                className="flex flex-col md:flex-row items-center md:gap-8"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-90 mb-5 leading-tight">Our Growth: A Story of Achievement and Community</h2>
                    <p className="text-gray-700 text-lg mb-7">
                        <span className="font-bold text-gray-90">Expanding Horizons:</span> From our initial two students, Stargate Academy has grown significantly, now
                        offering a comprehensive educational journey from crèche to senior secondary. Our curriculum, a
                        blend of Nigerian, British, and Islamic studies, is designed to prepare students for global challenges
                        while staying connected to their cultural and spiritual roots. </p>
                    <p className="text-gray-700 text-lg mb-7">
                        <span className="font-bold text-gray-90">A Community of Learners and Leaders:</span> 
                        Our students and alumni are our proudest achievements,
                        embodying the values and principles Stargate stands for. They are not just academically proficient
                        but are also empathetic leaders, ready to make a positive impact in the world.
                        
                    </p>
                </div>
                <div className="md:w-1/2 relative mb-4 md:mb-0">
                    <div className="w-full h-64 md:h-auto rounded-lg overflow-hidden">
                        <Image src="/assets/images/stargate-vision6.jpg" width={600} height={200} alt="star" />
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
}
