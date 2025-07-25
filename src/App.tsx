import React, { useEffect, useState } from "react";
import HeroSection from "./componenets/HeroSection";
import Instructor from "./componenets/Instructor";
import CourseLaidOut from "./componenets/CourseLaidOut";
import CoursingLearning from "./componenets/CoursingLearning";
import ExclusiveFeatures from "./componenets/ExclusiveFeatures";
import CourseDetails from "./componenets/CourseDetails";
import Question from "./componenets/Question";
import Sidebar from "./componenets/Sidebar";
import Navbar from "./componenets/Navbar";

function App() {
  const [courseData, setCourseData] = useState(null);
  const [currentMedia, setCurrentMedia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [language, setLanguage] = useState<"en" | "bn">("en");

  const toggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${language}&=`,
          {
            method: "GET",
            headers: {
              "X-TENMS-SOURCE-PLATFORM": "web",
              accept: "application/json",
            },
          }
        );
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setCourseData(data.data);
        if (data.data.media && data.data.media.length > 0) {
          setCurrentMedia(data.data.media[0]);
        }
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [language]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!courseData) return <div>No data found</div>;

  return (
    <div className="relative">
      <Navbar language={language} setLanguage={setLanguage} />
      <HeroSection courseData={courseData} />
      <Instructor courseData={courseData} />
      <CourseLaidOut courseData={courseData} />
      <CoursingLearning courseData={courseData} />
      <ExclusiveFeatures courseData={courseData} />
      <CourseDetails courseData={courseData} />
      <Question courseData={courseData} openIndex={openIndex} toggle={toggle} />
      <Sidebar
        mediaSection={{ media: courseData.media || [] }}
        checklistSection={{ checklist: courseData.checklist || [] }}
        ctaText={courseData.cta_text?.value || "Enroll Now"}
        currentMedia={currentMedia}
        setCurrentMedia={setCurrentMedia}
      />
    </div>
  );
}

export default App;
