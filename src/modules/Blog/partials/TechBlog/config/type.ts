import { StaticImageData } from 'next/image';

export interface TechBlogProps {
  page?: number;
}

export interface BlogPost {
  id: number;
  img: string | StaticImageData;
  desc1: string;
  desc2: string;
  btn: string[];
}

export interface TechBlogData {
  title: string;
  list1: BlogPost[];
  list2: BlogPost[];
  list3: BlogPost[];
  list4: BlogPost[];
  list5: BlogPost[];
  list6: BlogPost[];
}
