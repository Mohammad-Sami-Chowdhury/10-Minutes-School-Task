import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AboutItem {
  title: string;
  description: string;
}

interface Section {
  type: string;
  values: AboutItem[];
  name?: string;
}

interface CourseData {
  sections: Section[];
}

interface CourseDetailsProps {
  courseData: CourseData;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ courseData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const aboutSection = courseData.sections.find(
    (section) => section.type === "about"
  );

  if (!aboutSection) return <p>No course details found.</p>;

  return (
    <section>
      <div className="max-w-[1320px] mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold mb-6">
          {aboutSection.name}
        </h2>
        <div className="w-full lg:w-[800px] mt-6 rounded-lg border border-gray-300">
          {aboutSection.values.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="w-full flex justify-between items-center px-4 py-3 font-semibold text-left"
                onClick={() => toggle(index)}
              >
                <span dangerouslySetInnerHTML={{ __html: item.title }} />
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div
                  className="px-4 pb-4 text-gray-700"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
