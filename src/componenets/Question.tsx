import React from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  id: string | number;
  question: string;
  answer: string;
}

interface Section {
  type: string;
  name?: string;
  values: FAQ[];
}

interface CourseData {
  sections: Section[];
}

interface QuestionProps {
  courseData: CourseData;
  openIndex: number | null;
  toggle: (index: number) => void;
}

const Question: React.FC<QuestionProps> = ({
  courseData,
  openIndex,
  toggle,
}) => {
  const faqSection = courseData.sections.find(
    (section) => section.type === "faq"
  );

  if (!faqSection || faqSection.values.length === 0) {
    return <p>কোনো FAQ পাওয়া যায়নি</p>;
  }

  return (
    <section>
      <div className="max-w-[1320px] mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold mb-6">{faqSection.name}</h2>
        <div className="w-full lg:w-[800px] mt-6 rounded-lg border border-gray-300">
          {faqSection.values.map((faq, index) => (
            <div key={faq.id} className="border-b border-gray-300 py-5">
              <button
                className="w-full flex justify-between items-center px-4 py-3 font-semibold text-left"
                onClick={() => toggle(index + 100)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openIndex === index + 100 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index + 100 && (
                <div
                  className="px-4 pb-4 text-gray-700"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Question;
