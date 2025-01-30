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
  tincx,
  lightsCanada,
  legoart,
  blackacre,
  bbweb,
  connect,
  workbot,
  scheduling,
  tatoo,
  linkedin,
  whatsapp,
  github,
  githubBlack
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

export const socialLinks = [
  {
    id: 'github',
    title: 'Github',
    url: "https://github.com/ehsanulhaq19",
    img: githubBlack
  },
  {
    id: 'linkedin',
    title: 'Linkedin',
    url: "https://www.linkedin.com/in/ehsan-ul-haq-60412b193/",
    img: linkedin
  },
  {
    id: 'whatsapp',
    title: 'Whatsapp',
    contact: "+923244971258",
    img: whatsapp
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
    iconBg: '#ffffff',
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
    name: 'Lights Canada',
    description: 'An electronic e-commerce web application.',
    tags: [
      {
        name: 'vue',
        color: 'blue-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'laravel',
        color: 'pink-text-gradient',
      },
      {
        name: 'aws',
        color: 'yellow-text-gradient',
      },
    ],
    image: lightsCanada,
    repo: '',
    demo: 'https://drive.google.com/file/d/1l8DptqZzPcAU-Z0ulEDa3xvfN9wU5qL5/view?usp=sharing',
  },
  {
    id: 'project-2',
    name: 'Black Acre',
    description:
      'A Human Resource Management app',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'laravel',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'pink-text-gradient',
      },
      {
        name: 'aws',
        color: 'yellow-text-gradient',
      },
    ],
    image: blackacre,
    repo: '',
    demo: 'https://drive.google.com/file/d/1Gv6IqDajY4gawgaVLhV9lWt0Xn355tVx/view?usp=sharing',
  },
  {
    id: 'project-3',
    name: 'Lego Art',
    description: 'A lego art drawing board app.',
    tags: [
      {
        name: 'vue',
        color: 'blue-text-gradient',
      },
      {
        name: 'node',
        color: 'green-text-gradient',
      },
      {
        name: 'mongo',
        color: 'pink-text-gradient',
      },
    ],
    image: legoart,
    repo: '',
    demo: 'https://drive.google.com/file/d/18zDzc3bzDFEmBFE7VOHY0JkD5ZN2O_16/view?usp=sharing',
  },
  {
    id: 'project-4',
    name: 'Connect',
    description: `A communication app used for audio/video calls and messages`,
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'symfony',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'pink-text-gradient',
      },
      {
        name: 'aws',
        color: 'yellow-text-gradient',
      },
    ],
    image: connect,
    repo: '',
    demo: 'https://drive.google.com/file/d/1d1-J7BRBgYavu8rKiyWRmACHs8sGffJc/view?usp=sharing',
  },
  {
    id: 'project-5',
    name: 'Scheduling',
    description:
      'Appointment booking and scheduling app',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'symfony',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'pink-text-gradient',
      },
      {
        name: 'aws',
        color: 'yellow-text-gradient',
      },
    ],
    image: scheduling,
    repo: '',
    demo: 'https://drive.google.com/file/d/1uJebbohDscM4LSSd0PAAWWPX8lR55c5A/view?usp=sharing',
  },
  {
    id: 'project-6',
    name: 'Workbot',
    description:
      'AI chat and assistant app',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'fastApi',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'pink-text-gradient',
      },
      {
        name: 'aws',
        color: 'yellow-text-gradient',
      },
    ],
    image: workbot,
    repo: '',
    demo: 'https://drive.google.com/file/d/1hFPAFfhW74o2njSkFMyNHEgjHklgcudc/view?usp=drive_link',
  },
  {
    id: 'project-7',
    name: 'Tattoo App',
    description:
      'E-commerce app for tattoo lovers',
    tags: [
      {
        name: 'vue',
        color: 'blue-text-gradient',
      },
      {
        name: 'node',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'pink-text-gradient',
      },
      {
        name: 'aws',
        color: 'yellow-text-gradient',
      },
    ],
    image: tatoo,
    repo: '',
    demo: 'https://drive.google.com/file/d/1SLA0QPtfjOPQBB3XnV6OgvPm5DcTYro1/view?usp=sharing',
  },
  {
    id: 'project-8',
    name: 'BBweB',
    description:
      'Online saloon booking and beauty outlets app',
    tags: [
      {
        name: 'jquery',
        color: 'blue-text-gradient',
      },
      {
        name: 'laravel',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'pink-text-gradient',
      },
      {
        name: 'aws',
        color: 'yellow-text-gradient',
      },
    ],
    image: bbweb,
    repo: '',
    demo: 'https://drive.google.com/file/d/1_j4AlwUqpCeiuFfa_QYpPvqwNBO-NGtq/view?usp=sharing',
  },
];

const githubUrl = "https://github.com/ehsanulhaq19"

export { services, technologies, experiences, resumeLink, projects, githubUrl };
