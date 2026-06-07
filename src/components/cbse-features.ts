export type CbseFeatureKey =
  | 'parikshaSangam'
  | 'saras'
  | 'oasis'
  | 'loc'
  | 'curriculum'
  | 'prashikshanTriveni'
  | 'compositeSkillLab'
  | 'skillEducation'
  | 'ncrfCredits'
  | 'competencyAssessment'
  | 'portfolio'
  | 'baglessDays'
  | 'skillExpo'
  | 'safetyNorms'
  | 'governance'
  | 'parentCommunication'

export interface CbseFeatureDescriptor {
  key: CbseFeatureKey
  label: string
  shortLabel: string
  description: string
  icon: string
  stakeholderVisibility: Array<'principal' | 'admin' | 'teacher' | 'student' | 'parent'>
  appRoute?: string
  marketingAnchor?: string
}

export const cbseFeatureIcons: Record<CbseFeatureKey, string> = {
  parikshaSangam: 'ClipboardCheck',
  saras: 'BadgeCheck',
  oasis: 'Database',
  loc: 'ListChecks',
  curriculum: 'BookOpen',
  prashikshanTriveni: 'GraduationCap',
  compositeSkillLab: 'Microscope',
  skillEducation: 'Wrench',
  ncrfCredits: 'Layers',
  competencyAssessment: 'Target',
  portfolio: 'FolderOpen',
  baglessDays: 'Backpack',
  skillExpo: 'Trophy',
  safetyNorms: 'ShieldCheck',
  governance: 'Scale',
  parentCommunication: 'BellRing',
}

export const cbseFeatures: CbseFeatureDescriptor[] = [
  {
    key: 'parikshaSangam',
    label: 'Pariksha Sangam Ready',
    shortLabel: 'Exam Readiness',
    description: 'Exam calendar, LOC readiness, admit-card workflow, result communication.',
    icon: 'ClipboardCheck',
    stakeholderVisibility: ['principal', 'admin', 'teacher'],
    appRoute: '/exam-cell',
    marketingAnchor: 'pariksha-sangam',
  },
  {
    key: 'saras',
    label: 'SARAS & Affiliation Readiness',
    shortLabel: 'Affiliation',
    description: 'Infrastructure evidence, compliance checklists, governance records.',
    icon: 'BadgeCheck',
    stakeholderVisibility: ['principal', 'admin'],
    appRoute: '/affiliation',
    marketingAnchor: 'saras-affiliation',
  },
  {
    key: 'oasis',
    label: 'OASIS Data Discipline',
    shortLabel: 'School Data',
    description: 'Clean school, staff, student, section, subject, and infrastructure records.',
    icon: 'Database',
    stakeholderVisibility: ['principal', 'admin'],
    appRoute: '/school-data',
    marketingAnchor: 'oasis-data',
  },
  {
    key: 'compositeSkillLab',
    label: 'Composite Skill Lab Operations',
    shortLabel: 'Skill Lab',
    description: 'Equipment mapping, safety SOPs, project logs, lab utilization. CBSE mandates CSL setup by August 2027.',
    icon: 'Microscope',
    stakeholderVisibility: ['principal', 'admin', 'teacher'],
    appRoute: '/skill-lab',
    marketingAnchor: 'composite-skill-lab',
  },
  {
    key: 'ncrfCredits',
    label: 'NCrF & Skill Portfolios',
    shortLabel: 'Credits',
    description: 'Credit-aware student skill evidence, projects, competency records.',
    icon: 'Layers',
    stakeholderVisibility: ['principal', 'student', 'parent'],
    appRoute: '/credits',
    marketingAnchor: 'ncrf-credits',
  },
  {
    key: 'prashikshanTriveni',
    label: 'Prashikshan Triveni / CBP Tracking',
    shortLabel: 'Teacher CBP',
    description: 'Teacher training, certificates, capacity-building calendar.',
    icon: 'GraduationCap',
    stakeholderVisibility: ['principal', 'admin', 'teacher'],
    appRoute: '/cbp',
    marketingAnchor: 'teacher-cbp',
  },
]

export interface StakeholderPromise {
  role: string
  title: string
  detail: string
}

export const stakeholderPromises: StakeholderPromise[] = [
  {
    role: 'Principal',
    title: 'Govern school readiness across CBSE calendars, compliance, academics, exams, and skill labs',
    detail: 'From Pariksha Sangam readiness to Composite Skill Lab operations — one trusted view.',
  },
  {
    role: 'Admin / Exam Cell',
    title: 'Maintain clean OASIS/LOC-style records and operational checklists',
    detail: 'Candidate lists, infrastructure declarations, inspection evidence, all in one place.',
  },
  {
    role: 'Teacher',
    title: 'Plan curriculum, assess competencies, manage projects and portfolios',
    detail: 'Competency rubrics, skill-lab projects, CBP tracking, and bagless day planning.',
  },
  {
    role: 'Student',
    title: 'Track learning, skill projects, exam readiness, and evidence',
    detail: 'My learning plan, NCrF credits, skill portfolio, and exam readiness dashboard.',
  },
  {
    role: 'Parent',
    title: 'Receive trusted notices, progress, exam updates, and school actions',
    detail: 'Exam alerts, skill portfolio, progress summaries, and important documents.',
  },
]
