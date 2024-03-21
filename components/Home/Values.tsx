'use client'

import React from "react";
import { motion } from "framer-motion";
import { AiFillHeart, AiOutlineTeam, AiOutlineBook, AiOutlineSafety, AiOutlineStar } from "react-icons/ai";
import fadeIn from "@/variants";

interface CoreValue {
  title: string;
  description: string;
  icon: JSX.Element;
}

const coreValues: CoreValue[] = [
  {
    title: "Discipline with Love",
    description: "We believe discipline is foundational to success, instilling it with compassion and understanding.",
    icon: <AiFillHeart size={32} color="#FF0080" />,
  },
  {
    title: "Community Beneficial",
    description: "Our students are taught to be contributors to society, understanding their role in a larger community.",
    icon: <AiOutlineTeam size={32} color="#FFA500" />,
  },
  {
    title: "Academic Excellence",
    description: "Rigorous academic standards drive us to offer a curriculum that challenges and inspires.",
    icon: <AiOutlineBook size={32} color="#0080FF" />,
  },
  {
    title: "Strength and Resilience",
    description: "We nurture not just the mind but the spirit, preparing students to face life's challenges with courage.",
    icon: <AiOutlineSafety size={32} color="#00FF00" />,
  },
  {
    title: "Islamic Culture Tenets",
    description: "Our values are grounded in the rich traditions of Islamic culture, fostering a deep spiritual connection and moral compass.",
    icon: <AiOutlineStar size={32} color="#800080" />,
  },
];

const Values: React.FC = () => {
  return (
    <div className="container mx-auto px-8 py-20 max-w-screen-xl">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-90 uppercase">Our Core Principles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {coreValues.map((coreValue, index) => (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="relative bg-white rounded-full shadow-lg overflow-hidden flex items-center justify-center m-4 p-4 transition-all duration-300 hover:bg-gray-100 cursor-pointer"
          >
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-col items-center justify-center relative z-10"
            >
              <div className="bg-white rounded-full p-4 mb-4">
                {coreValue.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center text-gray-90">{coreValue.title}</h3>
              <p className="text-sm text-gray-600 text-center">{coreValue.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Values;
