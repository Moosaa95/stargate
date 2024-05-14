"use client"
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"
import fadeIn from '@/variants';

interface AboutProps {
  title: string;
  text_one: string;
  text_two: string;
}

const About = ({ title, text_one, text_two }: AboutProps) => {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col space-y-6">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
          >
            <h1 className="text-xl lg:text-4xl font-freeman font-bold text-gray-90">
              {title}
            </h1>
            <p className="lg:text-xl font-mono mb-4 text-sm text-gray-700">
              {text_one}
            </p>
            <p className="text-sm font-merriweather lg:text-xl  text-gray-700">
              {text_two}
            </p>
            <Link href="/apply" className="mt-4 inline-block  bg-gray-90 text-white font-medium font-freeman py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                Learn More
            </Link>
          </motion.div>
        </div>
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/assets/images/stargate4.jpg"
            alt="stargate building"
            width={700}
            height={500}
            layout="responsive"
            className="rounded-lg transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
