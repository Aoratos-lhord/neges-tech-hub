export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readingTime: number;
  featured: boolean;
  image: string;
  category: 'TECH_HUB' | 'CAMPUS_PULSE' | 'THE_JOURNAL';
  tags: Tag[];
  likes: number;
}

export interface Tag {
  id: string;
  name: string;
  category: 'TECH_HUB' | 'CAMPUS_PULSE' | 'THE_JOURNAL';
  slug: string;
  color: 'blue' | 'amber' | 'green' | 'purple' | 'red';
}

export interface EventImage {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
  date: string;
  height: number;
  width: number;
  caption: string;
}

export interface GalleryFilter {
  category?: string;
  dateRange?: { start: string; end: string };
}