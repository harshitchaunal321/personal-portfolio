import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaAws, FaDocker, FaGitAlt, FaCode, FaJava } from "react-icons/fa";
import { SiTypescript, SiRedux, SiBootstrap, SiExpress, SiSpringboot, SiMongodb, SiMysql, SiAmazondynamodb } from "react-icons/si";

export const skills = {
    frontend: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React", icon: <FaReact /> },
        { name: "React Native", icon: <FaReact /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
    backend: [
        { name: "Java", icon: <FaJava /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "Node.js", icon: <FaNode /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "RESTful APIs", icon: <FaCode /> },
    ],
    database: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "DynamoDB", icon: <SiAmazondynamodb /> }
    ],
    devops: [
        { name: "Docker", icon: <FaDocker /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "Git", icon: <FaGitAlt /> },
    ],
};