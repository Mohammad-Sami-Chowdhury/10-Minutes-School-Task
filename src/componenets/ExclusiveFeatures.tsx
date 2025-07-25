import React from "react";
import { Check } from "lucide-react";

interface Feature {
  title: string;
  checklist: string[];
  file_url: string;
}

interface Section {
  type: string;
  values: Feature[];
  name?: string;
}

interface CourseData {
  sections: Section[];
}

interface ExclusiveFeaturesProps {
  courseData: CourseData;
}

const ExclusiveFeatures: React.FC<ExclusiveFeaturesProps> = ({
  courseData,
}) => {

  const featureExplanations = courseData.sections.find(
    (section) => section.type === "feature_explanations"
  );

  if (!featureExplanations) return <p>No exclusive features data</p>;

  return (
    <section>
      <div className="max-w-[1320px] mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold mb-6">{featureExplanations.name}</h2>
        <div className="p-4 border border-gray-300 rounded-lg w-full lg:w-[800px]">
          {featureExplanations.values.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col lg:flex-row justify-between gap-6">
                <div className="text-gray-500">
                  <p className="text-lg font-medium text-black">
                    {feature.title}
                  </p>
                  {feature.checklist.map((item, i) => (
                    <div key={i} className="flex gap-4 mt-4">
                      <Check className="text-blue-500" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
                <img
                  className="w-[250px] h-[250px] mx-auto lg:mx-0"
                  src={feature.file_url}
                  alt={feature.title}
                />
              </div>
              {index < featureExplanations.values.length - 1 && (
                <div className="w-full h-[1px] bg-gray-300 my-10"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveFeatures;
