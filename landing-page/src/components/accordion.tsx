import React, { useState } from 'react';
import { motion } from 'framer-motion'; // for animation
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Font Awesome icons

const Accordion = ({title, answer}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="w-[90%] mx-auto py-2">
    <button onClick={() => setAccordionOpen(!accordionOpen)}
      className="border-b border-gray-200 w-full bg-black text-white pb-2 text-xl items-center rounded-sm flex justify-between">
      <span>{title}</span>
      <svg
        className="fill-white shrink-0 ml-8"
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="7"
          width="16"
          height="2"
          rx="1"
          className={`transform origin-center transition duration-200 ease-out ${
            accordionOpen && "!rotate-180"
          }`}
        />
        <rect
          y="7"
          width="16"
          height="2"
          rx="1"
          className={`transform origin-center rotate-90 transition duration-200 ease-out ${
            accordionOpen && "!rotate-180"
          }`}
        />
      </svg>
    </button>

    <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-gray-500 text-sm ${
        accordionOpen
          ? "grid-rows-[1fr] opacity-100"
          : "grid-rows-[0fr] opacity-0"
      }`}>
      <div className="bg-black py-2 overflow-hidden">
        <p>{answer}</p>
      </div>
      </div>
    </div>
  );
}

export default Accordion