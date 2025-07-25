import React from "react";
import { Check } from "lucide-react";

interface PointerItem {
  text: string;
}

interface Section {
  type: string;
  values: PointerItem[];
  name?: string;
}

interface CourseData {
  sections: Section[];
}

interface CoursingLearningProps {
  courseData: CourseData;
}

const CoursingLearning: React.FC<CoursingLearningProps> = ({ courseData }) => {
  const pointersSection = courseData.sections.find(
    (section) => section.type === "pointers"
  );

  if (!pointersSection) return <p>No pointers data</p>;

  return (
    <section>
      <div className="max-w-[1320px] mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold mb-6">{pointersSection.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-300 rounded-lg p-6 w-full lg:w-[800px]">
          {pointersSection.values.map((item, index) => (
            <div key={index} className="flex gap-4">
              <Check className="text-blue-500 mt-1" />
              <p
                className="text-black w-full lg:w-[300px] text-lg"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursingLearning;
