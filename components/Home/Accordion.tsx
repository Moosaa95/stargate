"use client"
import { useState } from "react"
import {BsChevronDown} from "react-icons/bs"
import {motion, AnimatePresence} from "framer-motion"

interface AccordionProps {
    id: number;
    question: string;
    answer: string;
  }

const Accordion = ({id, question, answer}:AccordionProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const handleClick = (id:number) => {
        setActiveIndex(id === activeIndex ? null : id)
    }
  return (
    <div className="pb-8">
      <div onClick={() => handleClick(id)} className="cursor-pointer flex flex-row items-center gap-5">
      <div className="sm:text-xl text-base font-bold ">
        {question}
      </div>
      <BsChevronDown className={`${id === activeIndex ? "rotate-180" : "rotate-0"} cursor-pointer transition-all duration-300`} size={20} />
      </div>
      <AnimatePresence initial={false}>
        {id === activeIndex && (
            <motion.div
            key={id}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm md:text-base leading-7 text-gray-90">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Accordion
