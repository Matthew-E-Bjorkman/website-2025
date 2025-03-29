export interface Project {
  name: string;
  description: string;
  year: string;
  img_name: string;
  source_links: SourceLink[];
  live_link: string;
  technologies: string[];
}

export interface SourceLink {
  name: string;
  url: string;
}
