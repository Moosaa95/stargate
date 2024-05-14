"use client"
import Image from "next/image";
import { useState } from "react";

interface AcademicProps {
    title: string;
    description: string;
    imageUrl: string;
}
interface ProgramsProp {
    programs: AcademicProps[];
    programTitle: string;
    programDescriptionOne: string;
    programDescriptionTwo: string;


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
                        <p className="text-white text-lg font-merriweather font-bold text-center">{title}</p>
                    </div>
                )}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-merriweather font-bold mb-4 text-gray-90">{title}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
            </div>
        </div>
    );
};

const AcademicProgramsSection = ({programTitle, programDescriptionOne, programDescriptionTwo, programs}:ProgramsProp) => {

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="lg:text-4xl sm:text-xl font-bold mb-8 text-gray-90 font-freeman">{programTitle}</h2>
                    <p className="text-lg text-gray-700 mb-8 font-merriweather">
                        {programDescriptionOne}
                    </p>
                    <p className="text-lg text-gray-700 mb-8 font-merriweather">
                        {programDescriptionTwo}
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