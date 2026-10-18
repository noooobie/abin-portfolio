/** One project, shown as a card on the homepage and as a full page at /work/:slug. */
export interface CaseStudy {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  dates: string;
  tools: string[];
  problem: string;
  /** Heading for the problem column; defaults to "The problem". */
  problemLabel?: string;
  role: string;
  data: string;
  approach: string[];
  /** Optional so in-progress projects can omit it; the section hides when empty. */
  insight?: string;
  /** Optional paragraph that backs up the pull-quote insight. */
  insightDetail?: string;
  /** Optional headline numbers shown with the insight, e.g. { value: '97.4%', label: '...' }. */
  stats?: Stat[];
  recommendations?: string[];
  nextSteps?: string;
  heroImage?: string;
  images?: string[];
  /** Heading for the approach list; defaults to "Approach". */
  approachLabel?: string;
  /** True when there is no image to show, so the placeholder is hidden too. */
  noImage?: boolean;
  /** Alt text describing the first image, for screen readers. */
  imageAlt?: string;
  /** Optional caption shown under the image, e.g. an NDA note. */
  imageCaption?: string;
  /** What happened at the end of the project (shown as "Outcome"). */
  outcome?: string;
}

/** A headline number in a case study. */
export interface Stat {
  value: string;
  label: string;
}

/** A job or internship in the Experience list. */
export interface Experience {
  role: string;
  organisation: string;
  location?: string;
  dates: string;
  highlights: string[];
  /** Tools used in this role specifically (shown as small tags). */
  tools?: string[];
}

/** A smaller piece of work shown in "Other work" (no case-study page). */
export interface Project {
  title: string;
  description: string;
  dates: string;
  tools: string[];
  /** Optional screenshot; a placeholder shows when missing. */
  image?: string;
  imageAlt?: string;
  /** Optional external links, e.g. live site, demo video, GitHub repo. */
  links?: { label: string; url: string }[];
}

/** Leadership, volunteering and memberships. */
export interface Involvement {
  role: string;
  organisation: string;
  dates: string;
}

/** A certification with its validity period. */
export interface Certification {
  name: string;
  dates: string;
}

/** A qualification in the Education list. */
export interface Education {
  qualification: string;
  institution: string;
  dates: string;
}

/** A labelled group of tools/skills in the Toolkit section. */
export interface SkillGroup {
  label: string;
  skills: string[];
}

/** Site-wide personal details. */
export interface Profile {
  name: string;
  headline: string;
  heroTitle: string;
  intro: string;
  email: string;
  linkedinUrl: string;
  linkedinLabel: string;
  resumeUrl: string;
  /** Visa / work-rights line shown under the hero intro. */
  workRights: string;
}
