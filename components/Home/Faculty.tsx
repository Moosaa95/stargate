'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ItemProps {
    itemTitleOne: string;
    itemTitleTwo: string;
    Title: string;
    itemDescriptionOne: string;
    itemDescriptionTwo: string;
    imageOne: string;
    imageTwo: string;
    link: string;
}

const Faculty = ({ itemTitleOne, itemTitleTwo, itemDescriptionOne, itemDescriptionTwo, Title, imageOne, imageTwo, link }: ItemProps) => {
  return (
    <section className="container mx-auto py-24 px-6 min-h-screen">
        <h2 className="text-2xl text-center font-bold uppercase mb-10 sm:text-4xl md:text-3xl text-gray-90">{Title}</h2>
        <div className="grid sm:grid-cols-2 place-items-center gap-10">
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-90">{itemTitleOne}</h3>
                <p className="text-md text-gray-600">{itemDescriptionOne}</p>
                <Link href={link} className="inline-block bg-gray-90 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                        Learn more
                </Link>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Image src={imageOne} width={400} height={300} alt={itemTitleOne} className="rounded-lg shadow-lg" layout="responsive" />
                </motion.div>
            </div>
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-90">{itemTitleTwo}</h3>
                <p className="text-md text-gray-600">{itemDescriptionTwo}</p>
                <Link href={link} className="inline-block bg-gray-90 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                        Learn more
                </Link>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Image src={imageTwo} width={400} height={300} alt={itemTitleTwo} className="rounded-lg shadow-lg" layout="responsive" />
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Faculty;
