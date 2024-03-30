"use client"
import Image from "next/image";
import { useState } from "react";

interface AcademicProps {
    title: string;
    description: string;
    imageUrl: string;
}

const AcademicProgramCard = ({ title, description, imageUrl }: AcademicProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative overflow-hidden">
                <Image src={imageUrl} alt={title} width={400} height={200} className="object-cover transition duration-300 transform-gpu scale-100 hover:scale-105" />
                {isHovered && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
                        <p className="text-white text-lg font-bold text-center">{title}</p>
                    </div>
                )}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-90">{title}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
            </div>
        </div>
    );
};

const AcademicProgramsSection = () => {
    const programs = [
        {
            title: "Early Years: Crèche and Nursery",
            description: "Our early years program focuses on play-based learning and interactive activities, laying the foundation for a lifelong love of learning.",
            imageUrl: "/assets/images/stargate8.jpg"
        },
        {
            title: "Primary Academy: Building Blocks of Education",
            description: "As students progress to our primary Academy, they encounter a more structured yet flexible curriculum designed to spark curiosity and foster academic excellence.",
            imageUrl: "/assets/images/stargate4.jpg"
        },
        {
            title: "Secondary Academy: Preparing for the Future",
            description: "Our secondary Academy program is divided into junior and senior sections, each tailored to prepare students for the challenges and opportunities ahead.",
            imageUrl: "/assets/images/stargate5.jpg"
        }
    ];

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 text-gray-90">Academic Programs at Stargate Academy</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        At Stargate Academy, we are committed to offering an enriching curriculum that prepares students for success in a dynamic world. Our academic programs integrate the rigorous standards of Nigerian and British curricula with the spiritual depth of Islamic studies, creating a holistic educational journey that nurtures the mind, body, and spirit.
                    </p>
                    <p className="text-lg text-gray-700 mb-8">
                        From our youngest learners in crèche and nursery to our future graduates in senior secondary, every student embarks on a transformative journey of discovery, learning, and growth.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {programs.map(program => (
                            <AcademicProgramCard key={program.title} title={program.title} description={program.description} imageUrl={program.imageUrl} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AcademicProgramsSection;