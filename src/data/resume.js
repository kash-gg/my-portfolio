import { Home, User, Briefcase, Code, Award, Mail, Github, Linkedin, Twitter, FileText } from "lucide-react";

export const DATA = {
    name: "Kashyup Gaud",
    initials: "KG",
    url: "https://kashyup.dev", // Placeholder
    description: "Portfolio of Kashyup Gaud, a Computer Science Student & Tech Enthusiast.",
    navbar: [
        { href: "#home", icon: Home, label: "Home" },
        { href: "#about", icon: User, label: "About" },
        { href: "#projects", icon: Code, label: "Projects" },
        { href: "#skills", icon: Briefcase, label: "Skills" },
        { href: "#certifications", icon: Award, label: "Certifications" },
        { href: "/resume.pdf", icon: FileText, label: "Resume" },
        { href: "#contact", icon: Mail, label: "Contact" },
    ],
    contact: {
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/kash-gg",
                icon: Github,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/kashyup-gaud-865a50186/",
                icon: Linkedin,
                navbar: true,
            },
            Email: {
                name: "Email",
                url: "mailto:gaudkashyup@gmail.com",
                icon: Mail,
                navbar: true,
            },
        },
    },
};
