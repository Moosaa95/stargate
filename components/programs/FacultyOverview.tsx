'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface ListItemProps {
  item: string;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => (
  <li className='flex m-4 font-merriweather'>
    <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M19 5a1 1 0 00-1-1h-4.586A2.998 2.998 0 0012 0c-.265 0-.52.027-.767.078a3.002 3.002 0 00-2.468 2.468A3.002 3.002 0 006.586 0H2a1 1 0 00-1 1v14a1 1 0 001 1h3a1 1 0 110 2H2a3 3 0 01-3-3V2a2.99 2.99 0 012-2.828V6a1 1 0 102 0V2h10v2a1 1 0 102 0V2h1a1 1 0 011 1zm-1 5a1 1 0 00-1 1v6a1 1 0 11-2 0v-4H8a1 1 0 100 2h7a1 1 0 011 1v4a1 1 0 11-2 0v-3H9a1 1 0 100 2h4a1 1 0 010 2H8a3 3 0 01-3-3v-6a3 3 0 013-3h10z"
                clipRule="evenodd"
              />
            </svg>
    {item}
    </li>
);

interface SectionProps {
  title: string;
  text: string;
  listItems?: string[];
}

const Section: React.FC<SectionProps> = ({ title, text, listItems }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-8"
  >
    <h2 className="text-3xl font-bold mb-4 text-gray-90 font-freeman">{title}</h2>
    <p className="text-lg text-gray-700 font-merriweather">{text}</p>
    {listItems && (
      <ul className="list-disc list-inside text-left text-gray-700">
        {listItems.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    )}
  </motion.div>
);

interface FacultyOverviewProps {
  sections: SectionProps[];
}

const FacultyOverview: React.FC<FacultyOverviewProps> = ({ sections }) => (
  <section className="py-12 bg-gray-100">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
    </div>
  </section>
);

export default FacultyOverview;
