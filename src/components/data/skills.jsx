import {
  Monitor,
  Server,
  Database,
  Code2
} from "lucide-react";

import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiVisualstudiocode,
  SiDocker,
  SiSpringboot,
  SiDjango,
  SiJavascript,
  SiTailwindcss
} from "react-icons/si";

export const technologies = [
  {
    name: "Frontend",
    icon: <Monitor size={24} />,
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ]
  },
  {
    name: "Backend",
    icon: <Server size={24} />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Spring", icon: <SiSpringboot /> },
      { name: "Django", icon: <SiDjango /> }
    ]
  },
  {
    name: "Database",
    icon: <Database size={24} />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> }
    ]
  },
  {
    name: "Tools",
    icon: <Code2 size={24} />,
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "VS Code", icon: <SiVisualstudiocode /> },
      { name: "Docker", icon: <SiDocker /> }
    ]
  }
];

export const skills = ["JavaScript", "React", "Node.js", "CSS", "HTML"];