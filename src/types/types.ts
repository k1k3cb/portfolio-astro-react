export interface NavItem {
  id: string;
  title: string;
  label: string;
  href: string;
}


export interface DarkModeItem {
  id: string;
  title: string;
  icon: string;  
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github_url: string;
  live: string;
  tags: string[];
}
