import React from "react";

interface CourseData {
  title: string;
  description: string;
}

interface HeroSectionProps {
  courseData: CourseData;
}

const HeroSection: React.FC<HeroSectionProps> = ({ courseData }) => {
  return (
    <section className="bg-[#040112]">
      <div className="py-[76px] max-w-[1320px] mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-5">
          {courseData.title}
        </h1>
        <p className="text-white mb-5">
          ⭐⭐⭐⭐⭐(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
        </p>
        <p
          className="text-[#807F86] lg:w-[700px] text-lg"
          dangerouslySetInnerHTML={{ __html: courseData.description }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
