import { Certification, Education, Experience, Involvement, Profile, Project, SkillGroup } from './models';

export const PROFILE: Profile = {
  name: 'Abin Vinod',
  headline: 'Data & Business Analyst · Melbourne',
  heroTitle: 'I turn messy data and unclear requirements into decisions.',
  intro:
    'Master of Business Analytics graduate from Deakin, Microsoft-certified Power BI analyst, and ' +
    'Business Analyst Intern at TechTitans, with 16 months as a Business Analyst/Developer at ' +
    'Tata Consultancy Services.',
  email: 'abinvinod00@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/abin-vinod',
  linkedinLabel: 'linkedin.com/in/abin-vinod',
  resumeUrl: 'assets/Abin_Vinod_Resume.pdf',
  // Update once the 485 application is lodged.
  workRights:
    'Currently on a Subclass 500 visa with full working rights, and applying for the Temporary ' +
    'Graduate visa (subclass 485) in January 2027, which would be valid for 3 years.',
};

export const EXPERIENCE: Experience[] = [
  {
    role: 'Business Analyst Intern',
    organisation: 'TechTitans Software Solutions',
    location: 'Melbourne',
    dates: 'Oct 2026 – Present',
    highlights: [
      'Market research and competitor and pricing analysis to inform product positioning in the ' +
        'Australian SME software market.',
      'Planning customer discovery, including target-segment evaluation and structured stakeholder ' +
        'interview design.',
      'Business and requirements analysis, maintaining traceability between stakeholder needs and ' +
        'business requirements.',
      'Supporting agile delivery through backlog management, decision logging and risk identification.',
    ],
    tools: ['Excel'],
  },
  {
    role: 'Freelance Web Developer',
    organisation: 'Self-employed',
    dates: '2024',
    highlights: [
      'Designed and built websites for clients from scratch in Angular.',
    ],
    tools: ['Angular', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    role: 'Business Analyst / Developer',
    organisation: 'Tata Consultancy Services',
    dates: 'Jun 2023 – Oct 2024',
    highlights: [
      'Main liaison between the client, project manager, developers and QA testers, keeping ' +
        'requirements and priorities aligned across the team.',
      'Gathered and clarified stakeholder requirements, translated them into prioritised development ' +
        'tasks, and validated delivered features against acceptance criteria before handover to testing.',
      'Developed and maintained front-end web applications in Angular and TypeScript.',
      'Took part in code reviews, debugging and sprint ceremonies, contributing to faster defect ' +
        'resolution and more predictable releases.',
    ],
    tools: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'JSON', 'Jira'],
  },
  {
    role: 'IT Support Intern',
    organisation: 'Edentu Dental App',
    dates: 'Aug 2022 – May 2023',
    highlights: [
      'Administered the app admin interface and sales app, and supported the design and rollout of ' +
        'educational software features.',
      'Ran daily scrum calls to track progress, surface blockers and align the team; scheduled daily ' +
        'tasks and tracked timelines to keep milestones on schedule.',
    ],
    tools: ['Notion', 'Slack', 'Edtech admin console'],
  },
];

export const OTHER_WORK: Project[] = [
  {
    title: 'flicke — QA services website',
    description: 'A client website built from scratch in Angular for a software testing and QA service.',
    dates: '2024 · Freelance',
    tools: ['Angular', 'TypeScript'],
    image: 'assets/flicke-website.png',
    imageAlt:
      'flicke homepage: dark theme with the headline "Test and launch your product with confidence", ' +
      'a toggle, a code editor panel with Selenium test code, and a live preview of the page.',
  },
  {
    title: 'Expense tracking app',
    description:
      'A mobile-first web app I built for my own use. It tracks expenses, gives analytical insights ' +
      'based on spending and suggests where to save money.',
    dates: 'Apr 2026 · Personal project',
    tools: ['Angular', 'TypeScript', 'Supabase'],
    image: 'assets/expense-app.png',
    imageAlt:
      'Expense app on a phone: a welcome header, current balance, current spend and upcoming payments, ' +
      'income and expense totals, and a list of April transactions.',
    links: [
      {
        label: 'Demo video',
        url: 'https://www.linkedin.com/posts/abin-vinod_vibe-analyst-developer-activity-7452676196879785984-Evh2',
      },    ],
  },
];

export const EDUCATION: Education[] = [
  {
    qualification: 'Master of Business Analytics',
    institution: 'Deakin University, Burwood',
    dates: 'Feb 2025 – Oct 2026',
  },
  {
    qualification: 'Bachelor of Engineering (Electronics & Communication), CGPA 7.8',
    institution: 'Christ College of Engineering, Irinjalakuda',
    dates: 'Aug 2018 – Jul 2022',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
    dates: 'Jun 2026 – Jun 2027',
  },
];

export const INVOLVEMENT: Involvement[] = [
  { role: 'Faculty Peer Mentor', organisation: 'Deakin University, Burwood', dates: 'Jan 2026 – Present' },
  { role: 'Student Member', organisation: 'Australian Computer Society', dates: 'Jan 2026 – Present' },
  { role: 'Department Chairperson', organisation: 'Christ College of Engineering', dates: '2021 – 2022' },
  { role: 'Placement Representative', organisation: 'Christ College of Engineering, 2018–22 batch', dates: '2018 – 2022' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Data & analytics',
    skills: ['Power BI', 'DAX', 'SQL (MySQL)', 'Python', 'Tableau', 'Excel', 'Pentaho', 'AI Studio'],
  },
  {
    label: 'Data modelling',
    skills: ['Star schema', 'SCD Type 2', 'ETL'],
  },
  {
    label: 'Business analysis',
    skills: [
      'Requirements gathering', 'Gap analysis', 'User stories', 'Acceptance criteria',
      'Requirements documentation', 'Traceability', 'Stakeholder management', 'Agile / Scrum', 'Jira',
    ],
  },
  {
    label: 'Web development',
    skills: ['Angular', 'TypeScript', 'Node.js', 'HTML5', 'CSS3'],
  },
];
