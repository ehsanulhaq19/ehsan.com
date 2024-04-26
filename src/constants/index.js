import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  database,
  php,
  python,
  mysql,
  symfony,
  laravel,
  aws,
  vue,
  django,
  digilynx,
  emerssive,
  workhub,
  tincx
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Database Management',
    icon: database,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'vue',
    icon: vue,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'php',
    icon: php,
  },
  {
    name: 'laravel',
    icon: laravel,
  },
  {
    name: 'symfony',
    icon: symfony,
  },
  {
    name: 'django',
    icon: django,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'mysql',
    icon: mysql,
  },
  {
    name: 'aws',
    icon: aws,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Mobile and Web Developer',
    company_name: 'Emerssive Solutions',
    icon: emerssive,
    iconBg: '#333333',
    date: 'July 2019 - July 2020',
  },
  {
    title: 'Full Stack Web App Developer - Mid Level',
    company_name: 'Digilynx',
    icon: digilynx,
    iconBg: '#333333',
    date: 'July 2020 - Feb 2022',
  },
  {
    title: 'Full Stack Web App Developer - Senior Level',
    company_name: 'Workhub',
    icon: workhub,
    iconBg: '#333333',
    date: 'Feb 2022 - March 2024',
  },
  {
    title: 'Full Stack Web App Developer - Senior Level',
    company_name: 'Tincx',
    icon: tincx,
    iconBg: '#333333',
    date: 'March 2024 - Present',
  },
];

const resumeLink = "https://docs.google.com/document/d/1qEa8Cdg4gajkY3nQw_xxtye4jFz5ANhL/edit?usp=sharing&ouid=117366656523103312365&rtpof=true&sd=true";

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

const githubUrl = "https://github.com/ehsanulhaq19"

export { services, technologies, experiences, resumeLink, projects, githubUrl };
