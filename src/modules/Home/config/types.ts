import { ReactNode } from "react";

// partner types
export interface PartnerTypes {
  title: string;
  desc: string;
  icon: string;
}

// how to types
export interface HowToTypes {
  title: string;
  description: string;
  options: string[];
}

// usecase types
export interface UseCaseTypes {
  title: string;
  description: string;
}

// audio types
export interface AudioTypes {
  src: string;
  name: string;
  flag: string;
}

// why types
export interface WhyTypes {
  title: string;
  desc: string;
  icon: string;
}

// sectionHead types
export interface sectionHeadType {
  title: string;
  description: string;
}

// Record props
export interface RecordProps {
  src: string;
  nav_title: string;
}

// record button types
export interface RecordButton {
  onClick?: () => void;
  children: ReactNode;
  icon?: string;
  active?: boolean;
}
