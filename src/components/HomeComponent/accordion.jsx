// Accordion.js
import Faq from "../accordion-components/faq";

const accordionData = [
  {
    id: 1,
    question: "What is JavaScript?",
    answer:
      "JavaScript is a programming language that enables you to create dynamically updating content, control multimedia, animate images, and much more.",
  },
  {
    id: 2,
    question: "What are the benefits of using JavaScript?",
    answer:
      "JavaScript allows for interactive web pages, enhanced user interfaces, asynchronous communication, and much more. It adds behavior to web pages.",
  },
  {
    id: 3,
    question: "How do you declare a variable in JavaScript?",
    answer:
      "You can declare a variable in JavaScript using the 'var', 'let', or 'const' keyword, followed by the variable name.",
  },
];

const Accordion = () => {
  return (
    <div className="w-[100vw] bg-slate-900 flex flex-col gap-4">
      <h2 className="text-zinc-200 text-center font-roboto uppercase text-2xl mt-20">frequently asked questions</h2>
      {accordionData.map(({ question, answer, id }) => (
        <Faq question={question} answer={answer} key={id}/>
      ))}
    </div>
  );
};

export default Accordion;
