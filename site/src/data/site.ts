export type NavItem = {
  href: string;
  label: string;
};

export type ResourceCard = {
  collection: "docs" | "templates" | "checklists";
  id: string;
  href: string;
  label: string;
  title: string;
  summary: string;
};

export type CaseStudyCard = {
  id: string;
  href: string;
  audience: string;
  title: string;
  summary: string;
};

export const navItems: NavItem[] = [
  { href: "/manifest", label: "Manifest" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/use-it", label: "Use It" },
];

export const homeHighlights = [
  "Decision system, not startup theater.",
  "Built for people working under real constraints.",
  "Useful with your own judgment or alongside AI tools.",
];

export const audienceBands = [
  "solo builders",
  "creators",
  "small operators",
  "professionals",
  "learners",
  "technical builders with AI",
];

export const useMoments = [
  "when idea is still vague",
  "when next steps multiply faster than evidence",
  "when overbuilding starts looking like momentum",
  "when milestone shipped but direction is still unclear",
];

export const threeLineTest = [
  "Who is this really for?",
  "What painful problem matters now?",
  "What is smallest useful version worth making?",
];

export const workflowSteps = [
  "Clarify who this is for, what problem hurts, and smallest useful version.",
  "Define a real first milestone before implementation starts pulling scope apart.",
  "Ship something usable, review what changed, then choose next sane step.",
];

export const docsLanding: ResourceCard[] = [
  {
    collection: "docs",
    href: "/manifest",
    id: "manifest",
    label: "Positioning",
    summary: "What Grounded believes, what it resists, and why it exists now.",
    title: "Manifest",
  },
  {
    collection: "docs",
    href: "/how-it-works",
    id: "workflow",
    label: "Method",
    summary: "Core loop from vague idea to validated next step.",
    title: "Workflow",
  },
  {
    collection: "docs",
    href: "/use-it",
    id: "start-here",
    label: "Entry Path",
    summary: "Shortest path for new readers who want to use the method immediately.",
    title: "Start Here",
  },
];

export const useItResources: ResourceCard[] = [
  {
    collection: "templates",
    href: "/templates",
    id: "project-brief",
    label: "Template",
    summary: "Turn vague intention into a spec-lite with clear constraints.",
    title: "Project Brief",
  },
  {
    collection: "templates",
    href: "/templates",
    id: "milestone-review",
    label: "Template",
    summary: "Capture what changed after shipping before scope drifts again.",
    title: "Milestone Review",
  },
  {
    collection: "checklists",
    href: "/checklists",
    id: "execution",
    label: "Checklist",
    summary: "Pre-flight checks before execution or release.",
    title: "Execution Checklist",
  },
  {
    collection: "checklists",
    href: "/checklists",
    id: "validation",
    label: "Checklist",
    summary: "Sanity check whether milestone helped or only created more output.",
    title: "Validation Checklist",
  },
];

export const caseStudies: CaseStudyCard[] = [
  {
    audience: "Walkthrough",
    href: "/case-studies/example-walkthrough",
    id: "example-walkthrough",
    summary: "From raw idea to first useful version without drifting into fake scale.",
    title: "Example Walkthrough",
  },
  {
    audience: "Self-Application",
    href: "/case-studies/self-use-case",
    id: "self-use-case",
    summary: "Grounded applied to Grounded so the project proves itself on real terrain.",
    title: "Grounded On Itself",
  },
  {
    audience: "Technical Open Source",
    href: "/case-studies/case-study-hermes-agent-kit",
    id: "case-study-hermes-agent-kit",
    summary: "How a technical tooling project gets narrowed toward operational bottlenecks.",
    title: "Hermes Agent Kit",
  },
  {
    audience: "Personal Brand",
    href: "/case-studies/case-study-personal-brand",
    id: "case-study-personal-brand",
    summary: "One positioning, one format, one publishing loop instead of content sprawl.",
    title: "Personal Brand",
  },
  {
    audience: "MSME",
    href: "/case-studies/case-study-msme",
    id: "case-study-msme",
    summary: "Choose one real bottleneck before trying to improve whole business at once.",
    title: "Small Business",
  },
  {
    audience: "Learning",
    href: "/case-studies/case-study-learner",
    id: "case-study-learner",
    summary: "Convert scattered learning into one deliberate capability path.",
    title: "Learner Path",
  },
];

export const siteMeta = {
  description:
    "Open-source decision and execution system for people building something real under constraints.",
  title: "Grounded",
};
