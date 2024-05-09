import { Briefcase, Contact, Home, Lightbulb } from 'lucide-react';
import { FaNodeJs } from 'react-icons/fa';
import {
  RiBootstrapLine,
  RiCss3Line,
  RiDatabase2Line,
  RiGitBranchLine,
  RiGithubLine,
  RiHtml5Line,
  RiJavascriptLine,
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from 'react-icons/ri';
import { SiExpress } from 'react-icons/si';

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    icon: Home,
    href: '/',
  },
  {
    id: 2,
    name: 'Skills',
    icon: Lightbulb,
    href: '/skills',
  },
  {
    id: 3,
    name: 'Projects',
    icon: Briefcase,
    href: '/projects',
  },
  {
    id: 4,
    name: 'Contact',
    icon: Contact,
    href: '/contact',
  },
];

export const skillSet = [
  {
    id: 1,
    name: 'React',
    icon: RiReactjsLine,
  },
  {
    id: 2,
    name: 'Node.js',
    icon: FaNodeJs,
  },
  {
    id: 3,
    name: 'MongoDB',
    icon: RiDatabase2Line,
  },
  {
    id: 4,
    name: 'Express',
    icon: SiExpress,
  },
  {
    id: 5,
    name: 'HTML',
    icon: RiHtml5Line,
  },
  {
    id: 6,
    name: 'CSS',
    icon: RiCss3Line,
  },
  {
    id: 7,
    name: 'JavaScript',
    icon: RiJavascriptLine,
  },
  {
    id: 8,
    name: 'Git',
    icon: RiGitBranchLine,
  },
  {
    id: 9,
    name: 'Github',
    icon: RiGithubLine,
  },
  {
    id: 12,
    name: 'Nextjs',
    icon: RiNextjsLine,
  },
  {
    id: 13,
    name: 'Tailwindcss',
    icon: RiTailwindCssFill,
  },
  {
    id: 14,
    name: 'Bootstrap',
    icon: RiBootstrapLine,
  },
];

export const projectList = [{}];
