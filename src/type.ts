export interface Media {
  resource_type: "video" | "image";
  resource_value: string;
}

export interface ChecklistItem {
  icon?: string;
  text: string;
}

export interface CtaText {
  value: string;
}

export interface Section {
  type: string;
  values: [];
}

export interface CourseData {
  media: Media[];
  checklist: ChecklistItem[];
  cta_text?: CtaText;
  sections: [];
  title: string;
  description: string;
}

