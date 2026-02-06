
export interface Project {
  id: string;
  title: string;
  category: string;
  problem: string;
  strategy: string;
  execution: string;
  results: string;
  imageUrl: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  description: string;
  icon: string;
}
