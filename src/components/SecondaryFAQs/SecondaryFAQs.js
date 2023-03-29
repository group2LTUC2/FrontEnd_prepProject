import { useState } from 'react';
import './SecondaryFAQs.css'; // import the CSS file

const fakeQuestions = [
  {
    question: 'What is the Ramadan donation food programme?',
    answer:
      'The Ramadan donation food program is an initiative to provide food to those in need during the month of Ramadan. It is typically organized by local charities and community organizations.',
  },
  {
    question: 'Who can benefit from the Ramadan donation food program?',
    answer:
      'The Ramadan donation food program is intended to help those who are struggling to provide for themselves and their families, particularly during the month of Ramadan when fasting is observed. This can include low-income families, the homeless, and others in need.',
  },
  {
    question: 'How can I get involved in the Ramadan donation food programme?',
    answer: 'There are several ways to get involved in the Ramadan donation food programme. You can donate money or food items to local charities and organizations, volunteer your time to help distribute food to those in need, or simply spread the word about the program to others in your community.',
  },
];

function SecondaryFAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div style={{display:'flex',justifyContent:'center'}}>

    <div className="secondary-faqs-container">
      {fakeQuestions.map((faq, index) => (
        <div key={index} className="secondary-faqs-item">
          <div className="secondary-faqs-question" onClick={() => handleClick(index)}>
            {faq.question}
          </div>
          <div className={`secondary-faqs-answer ${index === activeIndex ? 'active' : ''}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
    </div>

  );
}

export default SecondaryFAQs;
