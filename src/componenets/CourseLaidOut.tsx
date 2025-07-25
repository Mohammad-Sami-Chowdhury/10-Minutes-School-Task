import React from "react";
import { CirclePlay } from "lucide-react";

interface Feature {
  title: string;
  subtitle: string;
}

interface Section {
  type: string;
  values: Feature[];
  name?: string;
}

interface CourseData {
  sections: Section[];
}

interface CourseLaidOutProps {
  courseData: CourseData;
}

const CourseLaidOut: React.FC<CourseLaidOutProps> = ({ courseData }) => {
  const featuresSection = courseData.sections.find(
    (section) => section.type === "features"
  );

  if (!featuresSection || !featuresSection.values?.length)
    return <p>No features data</p>;

  return (
    <section>
      <div className="max-w-[1320px] mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold mb-6">{featuresSection.name}</h2>
        <div className="px-4 lg:px-8 bg-[#111827] py-6 rounded-lg w-full lg:w-[800px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuresSection.values.map((feature, index) => (
              <div key={index} className="flex gap-5">
                <CirclePlay size={35} className="text-green-500 mt-1" />
                <div>
                  <p className="text-xl lg:text-2xl font-bold text-white">
                    {feature.title}
                  </p>
                  <p className="w-full lg:w-[300px] mt-3 text-gray-400">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseLaidOut;
