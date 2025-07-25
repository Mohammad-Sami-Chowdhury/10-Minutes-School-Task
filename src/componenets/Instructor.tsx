import React from "react";

interface InstructorType {
  name: string;
  image: string;
  short_description: string;
  description: string;
}

interface Section {
  type: string;
  name?: string;
  values: InstructorType[];
}

interface CourseData {
  sections: Section[];
}

interface InstructorProps {
  courseData: CourseData;
}

const Instructor: React.FC<InstructorProps> = ({ courseData }) => {
  const instructorsSection = courseData.sections.find(
    (section) => section.type === "instructors"
  );

  if (!instructorsSection || instructorsSection.values.length === 0) {
    return <p>কোনো ইন্সট্রাক্টর তথ্য পাওয়া যায়নি</p>;
  }

  return (
    <section>
      <div className="max-w-[1320px] mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold mb-6">{instructorsSection.name}</h2>
        {instructorsSection.values.map((instructor) => (
          <div
            key={instructor.name}
            className="w-full lg:w-[500px] flex items-center gap-4 mb-6 border border-gray-300 rounded-lg p-4"
          >
            <img
              className="w-[100px] h-[100px] rounded-full object-cover"
              src={instructor.image}
              alt={instructor.name}
            />
            <div>
              <h3 className="text-xl font-semibold">{instructor.name}</h3>
              <p className="text-black">{instructor.short_description}</p>
              <div
                className="mt-2 text-black"
                dangerouslySetInnerHTML={{ __html: instructor.description }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructor;
