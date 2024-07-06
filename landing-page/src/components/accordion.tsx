import React, { useState } from 'react';
import { motion } from 'framer-motion'; // for animation
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Font Awesome icons

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const renderItem = (item: AccordionItem, index: number) => {
    const isActive = index === activeIndex;

    const Icon = isActive ? FaChevronUp : FaChevronDown;

    return (
      <div key={item.title} className="accordion-item">
        <button
          className={`accordion-title w-full flex items-center justify-between px-5 py-3 border border-gray-200 rounded-sm ${
            isActive ? 'bg-gray-200' : ''
          }`}
          onClick={() => handleToggle(index)}
        >
          <span className="text-lg font-medium">{item.title}</span>
          <Icon className="arrow h-4 w-4 text-black" />
        </button>
        <motion.div
          animate={{ height: isActive ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="accordion-content p-5 border border-t-0 border-gray-200 rounded-lg overflow:hidden"
        >
          <p className="item.content">{item.content}</p>
        </motion.div>
      </div>
    );
  };

  return (
    <div className="accordion">
      {items.map(renderItem)}
    </div>
  );
};

export default Accordion;
