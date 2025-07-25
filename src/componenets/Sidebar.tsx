import React from "react";
import { CheckCircle2, CirclePlay } from "lucide-react";

interface Media {
  resource_type: "video" | "image";
  resource_value: string;
}

interface ChecklistItem {
  icon?: string;
  text: string;
}

interface SectionMedia {
  media: Media[];
}

interface SectionChecklist {
  checklist: ChecklistItem[];
}

interface SidebarProps {
  mediaSection: SectionMedia;
  checklistSection: SectionChecklist;
  ctaText?: string;
  currentMedia: Media | null;
  setCurrentMedia: React.Dispatch<React.SetStateAction<Media | null>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  mediaSection,
  checklistSection,
  ctaText,
  currentMedia,
  setCurrentMedia,
}) => {
  return (
    <section className="absolute top-[5%] right-[8%]">
      <div className="bg-gray-100 min-h-screen w-[500px]">
        <div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-4">
              {currentMedia?.resource_type === "video" ? (
                <iframe
                  title="Video Player"
                  width="100%"
                  height="250"
                  src={`https://www.youtube.com/embed/${currentMedia.resource_value}`}
                  allowFullScreen
                  className="rounded-lg"
                />
              ) : (
                <img
                  src={currentMedia?.resource_value}
                  alt="Selected Media"
                  className="w-full h-[250px] max-h-80 object-contain rounded-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/500x300";
                  }}
                />
              )}
            </div>

            {mediaSection.media.filter((m) => m.resource_type === "video")
              .length > 0 && (
              <div className="p-4 bg-gray-50">
                <div className="grid grid-cols-3 gap-2">
                  {mediaSection.media
                    .filter((m) => m.resource_type === "video")
                    .map((video, i) => (
                      <div
                        key={`video-${i}`}
                        className="relative cursor-pointer group"
                        onClick={() => setCurrentMedia(video)}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${video.resource_value}/mqdefault.jpg`}
                          alt={`Video thumbnail ${i + 1}`}
                          className="w-full h-20 object-cover rounded-md"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <CirclePlay className="text-white opacity-70 group-hover:opacity-100" />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {mediaSection.media.filter((m) => m.resource_type === "image")
              .length > 0 && (
              <div className="p-4 bg-gray-50 border-t">
                <div className="grid grid-cols-3 gap-2">
                  {mediaSection.media
                    .filter((m) => m.resource_type === "image")
                    .map((image, i) => (
                      <div
                        key={`image-${i}`}
                        className="relative cursor-pointer"
                        onClick={() => setCurrentMedia(image)}
                      >
                        <img
                          src={image.resource_value}
                          alt={`Image thumbnail ${i + 1}`}
                          className="w-full h-20 object-cover rounded-md"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://via.placeholder.com/300x200";
                          }}
                        />
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          <div className="p-4 flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-800">
              <span className="line-through text-gray-500 mr-2">৳5000</span>
              ৳1000
            </div>
            <div className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
              ৳4000 ছাড়
            </div>
          </div>

          <div>
            <button className="px-10 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg w-full">
              {ctaText || "Enroll Now"}
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              এই কোর্সে যা থাকছে
            </h2>
            <ul className="space-y-3">
              {checklistSection.checklist.map((item, i) => (
                <li key={i} className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-3 mt-1">
                    {item.icon ? (
                      <img src={item.icon} alt="icon" className="w-5 h-5" />
                    ) : (
                      <CheckCircle2 size={18} />
                    )}
                  </span>
                  <span className="text-black font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
