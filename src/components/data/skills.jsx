import {
  Server,
  Database,
  Monitor,
  Code2,
  Cloud
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
  SiTailwindcss,
  SiPostgresql,
  SiAmazonaws,
  SiMicrosoftazure,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiPython
} from "react-icons/si";

export const technologies = [
  {
    name: "Backend",
    icon: <Server size={28} />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Spring", icon: <SiSpringboot /> },
      { name: "Python", icon: <SiPython /> }
    ]
  },
  {
    name: "DevOps & Cloud",
    icon: <Cloud size={28} />,
    skills: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "AWS", icon: <SiAmazonaws /> },
      { name: "Azure", icon: <SiMicrosoftazure /> },
      { name: "Terraform", icon: <SiTerraform /> },
      { name: "GitHub Actions", icon: <SiGithubactions /> }
    ]
  },
  {
    name: "Bases de Datos",
    icon: <Database size={28} />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> }
    ]
  },
  {
    name: "Frontend",
    icon: <Monitor size={28} />,
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> }
    ]
  },
  {
    name: "Herramientas",
    icon: <Code2 size={28} />,
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "VS Code", icon: <SiVisualstudiocode /> }
    ]
  }
];

export const skills = ["Backend Development", "Cloud Architecture", "DevOps", "Database Design", "API Development"];