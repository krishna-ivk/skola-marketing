export interface HeroMetric {
  label: string
  statusLabel: string
  value: number
  max: number
  statusVariant: 'active' | 'pending' | 'attention' | 'completed'
  color: string
}

export const cbseHeroMetrics: HeroMetric[] = [
  { label: 'CBSE Readiness', statusLabel: 'Improving', value: 72, max: 100, statusVariant: 'active', color: 'bg-emerald-600' },
  { label: 'Pariksha Sangam', statusLabel: '4 tasks due this week', value: 4, max: 8, statusVariant: 'attention', color: 'bg-amber-500' },
  { label: 'Composite Skill Lab', statusLabel: 'Setup in progress', value: 61, max: 100, statusVariant: 'pending', color: 'bg-skola-600' },
  { label: 'Teacher CBP', statusLabel: '18/24 teachers trained', value: 18, max: 24, statusVariant: 'active', color: 'bg-indigo-500' },
  { label: 'Parent Notices', statusLabel: '3 sent today', value: 3, max: 6, statusVariant: 'completed', color: 'bg-teal-500' },
]

export const cbseTickerItems: string[] = [
  'Exam calendar updated',
  'Skill lab safety checklist due',
  '6 teacher CBP certificates uploaded',
  'Parent notice sent',
  'OASIS profile review pending',
  'LOC validation requires attention',
  'Composite Skill Lab equipment mapped',
  'SARAS inspection evidence added',
]

export interface FeatureCard {
  key: string
  label: string
  shortLabel: string
  icon: string
  progress: number
  maxProgress: number
  statusVariant: 'active' | 'pending' | 'attention' | 'completed'
  statusLabel: string
}

export const cbseFeatureCards: FeatureCard[] = [
  { key: 'parikshaSangam', label: 'Pariksha Sangam Ready', shortLabel: 'Exam Cell', icon: 'P', progress: 18, maxProgress: 25, statusVariant: 'active', statusLabel: 'Active' },
  { key: 'saras', label: 'SARAS & Affiliation Readiness', shortLabel: 'Compliance', icon: 'S', progress: 18, maxProgress: 25, statusVariant: 'active', statusLabel: 'Evidence mapped' },
  { key: 'oasis', label: 'OASIS Data Discipline', shortLabel: 'School Data', icon: 'O', progress: 22, maxProgress: 30, statusVariant: 'active', statusLabel: 'In sync' },
  { key: 'compositeSkillLab', label: 'Composite Skill Lab Operations', shortLabel: 'Skill Lab', icon: 'L', progress: 12, maxProgress: 30, statusVariant: 'pending', statusLabel: 'Setup in progress' },
  { key: 'ncrfCredits', label: 'NCrF & Skill Portfolios', shortLabel: 'Credits', icon: 'N', progress: 8, maxProgress: 20, statusVariant: 'pending', statusLabel: 'Building' },
  { key: 'prashikshanTriveni', label: 'Prashikshan Triveni / CBP', shortLabel: 'Teacher Training', icon: 'T', progress: 18, maxProgress: 24, statusVariant: 'active', statusLabel: '18/24 trained' },
]

export interface StakeholderStep {
  role: string
  icon: string
  action: string
  color: string
}

export const cbseStakeholderSteps: StakeholderStep[] = [
  { role: 'Principal', icon: '🏛️', action: 'Approves exam calendar', color: 'bg-indigo-500' },
  { role: 'Teacher', icon: '📚', action: 'Receives class plan', color: 'bg-skola-600' },
  { role: 'Parent', icon: '📱', action: 'Receives exam notice', color: 'bg-amber-500' },
  { role: 'Student', icon: '🎒', action: 'Sees preparation checklist', color: 'bg-teal-500' },
  { role: 'Admin', icon: '📋', action: 'Gets compliance record', color: 'bg-rose-500' },
]

export const cbseWorkflowExamples: string[] = [
  'Exam calendar updated → Teacher receives class plan',
  'Skill project submitted → Parent notified',
  'Governance approval logged → Admin records audit',
]

export interface ExamStep {
  label: string
  status: 'active' | 'pending' | 'attention' | 'completed'
  detail: string
}

export const cbseExamSteps: ExamStep[] = [
  { label: 'Academic Calendar', status: 'active', detail: 'Session planned' },
  { label: 'Candidate Data', status: 'active', detail: 'Student records verified' },
  { label: 'LOC Validation', status: 'attention', detail: 'Pending review' },
  { label: 'Admit Card Readiness', status: 'pending', detail: 'Not started' },
  { label: 'Exam Day', status: 'pending', detail: 'Scheduled' },
  { label: 'Result Communication', status: 'pending', detail: 'Post-exam' },
]

export interface SkillLabMetric {
  label: string
  value: number
  max: number
  color: string
}

export const cbseSkillLabMetrics: SkillLabMetric[] = [
  { label: 'Equipment mapped', value: 42, max: 60, color: 'bg-skola-600' },
  { label: 'Safety SOPs', value: 8, max: 12, color: 'bg-emerald-500' },
  { label: 'Student projects', value: 126, max: 200, color: 'bg-indigo-500' },
  { label: 'Lab utilization', value: 68, max: 100, color: 'bg-amber-500' },
]

export const cbseSkillSectors: string[] = [
  'AI', 'IT-ITeS', 'AVGC', 'Electronics',
  'Agriculture', 'Healthcare', 'Retail', 'Automotive',
]

export const cbseSkillLabStatuses: { label: string; statusVariant: 'active' | 'pending'; detail: string }[] = [
  { label: 'Safety SOP status', statusVariant: 'active', detail: '8 active' },
  { label: 'Equipment readiness', statusVariant: 'pending', detail: '70%' },
]

export interface GovernanceStep {
  role: string
  action: string
  icon: string
  color: string
  statusLabel: string
  statusVariant: 'active' | 'pending' | 'attention' | 'completed'
}

export const cbseGovernanceSteps: GovernanceStep[] = [
  { role: 'Teacher', action: 'raises request', icon: '📚', color: 'bg-skola-100 text-skola-700', statusLabel: 'Pending', statusVariant: 'attention' },
  { role: 'Coordinator', action: 'reviews', icon: '📋', color: 'bg-amber-100 text-amber-700', statusLabel: 'Reviewed', statusVariant: 'pending' },
  { role: 'Principal', action: 'approves', icon: '🏛️', color: 'bg-indigo-100 text-indigo-700', statusLabel: 'Approved', statusVariant: 'active' },
  { role: 'System', action: 'audit trail recorded', icon: '🔒', color: 'bg-teal-100 text-teal-700', statusLabel: 'Logged', statusVariant: 'completed' },
  { role: 'Parent', action: 'notified', icon: '📱', color: 'bg-rose-100 text-rose-700', statusLabel: 'Notified', statusVariant: 'active' },
]

export const cbseFeatureGridDisclaimer =
  'Skola uses CBSE-aligned terminology to help schools organize their internal workflows. Skola is not an official CBSE portal and does not replace official CBSE systems.'
