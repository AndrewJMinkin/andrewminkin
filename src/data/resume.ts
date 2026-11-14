// All site content lives here. Edit this file to update the resume.

export const profile = {
  name: 'Andrew J. Minkin',
  tagline: '17, m · Chicago, IL · 🇺🇸 🇫🇷',
  email: 'anminkin38@gmail.com',
  linkedin: 'https://www.linkedin.com/in/andrew-minkin/',
}

export type Entry = {
  role: string
  org: string
  url?: string
  logo?: string
  blurb: string
  dates: string
}

export const experience: Entry[] = [
  {
    role: 'Founder & President',
    org: 'Brillare Scholars',
    url: 'https://brillarescholars.com',
    logo: '/logos/brillare.jpg',
    blurb:
      'Youth real estate initiative. 200+ students taught alongside 10+ student educators, with an 8-module self-paced curriculum.',
    dates: 'May 2025 – Present',
  },
  {
    role: 'Architectural Intern',
    org: 'Skidmore, Owings & Merrill (SOM)',
    url: 'https://www.som.com/',
    logo: '/logos/som.png',
    blurb:
      'Modeled site plans, exteriors, interiors, and floor plans in Rhino 3D. Produced 50+ renderings and animations in Enscape.',
    dates: 'Summer 2025',
  },
  {
    role: 'President',
    org: 'LFC Business Club',
    logo: '/logos/lfc.png',
    blurb:
      'Lead 80+ members across 4 initiatives and 8 competitions. Grew membership by 31%. Previously VP of Operations & Competitions.',
    dates: '2023 – Present',
  },
  {
    role: 'Teen Fellow',
    org: 'Chicago Architecture Center',
    url: 'https://www.architecture.org/events-programs/teen-fellows',
    logo: '/logos/cac.png',
    blurb:
      'Architecture & design fellowship earning 8 college credits (ARCH 110, 170, 171). Capstone: a community center in Brighton Park.',
    dates: '2024 – 2025',
  },
  {
    role: 'Global Director of Volunteering',
    org: 'SupportDRC',
    url: 'https://supportdrc.org',
    logo: '/logos/supportdrc.png',
    blurb:
      'Paired 80+ French-speaking students across Chicago, D.C., San Francisco, Toronto, and Goma (DRC) to expand access to English education.',
    dates: 'Oct 2025 – Present',
  },
]

export const education = [
  {
    role: 'IB Bilingual Diploma Candidate',
    school: 'Lycée Français de Chicago',
    logo: '/logos/lfc.png',
    detail:
      'IB Bilingual Diploma, Class of 2027. HL: Business Management, English Language & Literature, History.',
    extra:
      'LFC & IB Student Representative · Soccer · Cultural Exchange in Paris',
    dates: '2013 – 2027',
  },
]

export const languages = [
  { name: 'English', level: 'Native / Bilingual', score: 4 },
  { name: 'Français', level: 'Native / Bilingual', score: 4 },
  { name: 'Español', level: 'Limited Working', score: 2 },
  { name: 'Latin', level: 'Elementary', score: 1 },
]

export const cubing = {
  blurb: 'Speedcubing since grade 7. Personal bests:',
  pbs: [
    { event: '2x2', time: '1.47s' },
    { event: 'Pyraminx', time: '4.93s' },
    { event: '3x3', time: '9.43s' },
    { event: 'Skewb', time: '10.48s' },
    { event: '3x3 One-Handed', time: '32.57s' },
    { event: '4x4', time: '1:26.50' },
  ],
}

export const sections = [
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'languages', label: 'Languages' },
  { id: 'cubing', label: 'Speedcubing' },
  { id: 'contact', label: 'Contact' },
] as const
