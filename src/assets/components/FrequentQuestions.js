import React, { useState } from 'react';

// function AccordionItem({ question, answer }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
//       <div className="accordion-header" onClick={toggleAccordion}>
//         {question}
//         <span className="arrow">
//           <i className={`fa fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
//         </span>
//       </div>
//       <div className="accordion-content">{answer}</div>
//     </div>
//   );
// }


// function FrequentQuestions() {
//   return (
//     <div className="faq-questions">
//       <p className="title">Frequently Asked Questions</p>
//       <div className="accordion">
//         <AccordionItem
//           question="What is Equip1000?"
//           answer="Equip1000 project Initiative is aimed at educators who want to improve their teaching experience with the right tools and education. We provide them with not just these but with a community to fall onto when they need help and to help elevate the learning experience in Africa."
//         />
//         <AccordionItem
//           question="Do I have to pay for the gadgets immediately?"
//           answer="Equip1000 project Initiative is aimed at educators who want to improve their teaching experience with the right tools and education. We provide them with not just these but with a community to fall onto when they need help and to help elevate the learning experience in Africa."
//         />
//         <AccordionItem
//           question="How long does it take to get it after applying?"
//           answer="Equip1000 project Initiative is aimed at educators who want to improve their teaching experience with the right tools and education. We provide them with not just these but with a community to fall onto when they need help and to help elevate the learning experience in Africa."
//         />
//       </div>
//     </div>
//   );
// }


function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <div className="accordion-header" onClick={onClick}>
        {question}
        <span className="arrow">
          <i className={`fa fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
        </span>
      </div>
      {isOpen && <div className="accordion-content">{answer}</div>}
    </div>
  );
}

function FrequentQuestions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is Equip1000?",
      answer:
        "Equip1000 project Initiative is aimed at educators who want to improve their teaching experience with the right tools and education. We provide them with not just these but with a community to fall onto when they need help and to help elevate the learning experience in Africa.",
    },
    {
      question: "Do I have to pay for the gadgets immediately?",
      answer:
        "Equip1000 project Initiative is aimed at educators who want to improve their teaching experience with the right tools and education. We provide them with not just these but with a community to fall onto when they need help and to help elevate the learning experience in Africa.",
    },
    {
      question: "How long does it take to get it after applying?",
      answer:
        "Equip1000 project Initiative is aimed at educators who want to improve their teaching experience with the right tools and education. We provide them with not just these but with a community to fall onto when they need help and to help elevate the learning experience in Africa.",
    },
  ];

  return (
    <div className="faq-questions">
      <p className="title">Frequently Asked Questions</p>
      <div className="accordion">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default FrequentQuestions;


