import { faqs } from "@/constants"
import Image from "next/image"
import Accordion from "./Accordion"
import Link from "next/link";

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

const Faculty = ({itemTitleOne, itemTitleTwo, itemDescriptionOne, itemDescriptionTwo, Title, imageOne, imageTwo, link}:ItemProps) => {
  return (
    <section className="container mx-auto py-24 px-6 min-h-screen">
        <h2 className="text-2xl text-center font-bold uppercase mb-5 sm:text-4xl md:text-3xl text-gray-90">{Title}</h2>
        <div className="grid sm:grid-cols-2 place-items-center gap-8">
            <div className="pl-5">
                <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
                 <span className="text-gray-90">{itemTitleOne}</span>
                </div>
                <p className="text-lg leading-7 text-gray mb-5">
                    {itemDescriptionOne}
                </p>
                {/* <button className="py-3 px-4 bg-gray-90 rounded-lg text-white text-sm font-bold">Learn more</button> */}
                <Link href={link} className="py-3 px-4 bg-gray-90 rounded-lg text-white text-sm font-bold">Learn more</Link>
            </div>
            <div className="p-4 md:w-3/4 sm:row-start-1">
                <Image src={imageOne} width={400} height={200} alt="sport" />
            </div>
            <div className="pl-5">
                <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
                <span className="text-gray-90">{itemTitleTwo}</span>
                </div>
                <p className="text-lg leading-7 text-gray mb-5">
                    {itemDescriptionTwo}
                </p>
                <Link href={link} className="py-3 px-4 bg-gray-90 rounded-lg text-white text-sm font-bold">Learn more</Link>
            </div>
            <div className="p-4 md:w-3/4">
                <Image src={imageTwo} width={400} height={200} alt="sport" />
            </div>
        </div>
      
    </section>
  )
}

export default Faculty
