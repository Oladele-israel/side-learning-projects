// Faq.js
import { useState } from "react";

const Faq = ({question, answer}) => {
  const [select, setSelect] = useState(false);

  return (
    <div
      className="bg-blue-900 text-neutral-100 w-[50%] ml-auto mr-auto rounded-[5px] text-center p-[20px] flex flex-col gap-3"
      onClick={() => setSelect(!select)}
    >
      <div className="flex justify-between">
        <span className="capitalize">{question}</span>
        <span className="text-2xl">{select ? "-" : "+"}</span>
      </div>
      {select && <div>{answer}</div>}
    </div>
  );
};

export default Faq;
