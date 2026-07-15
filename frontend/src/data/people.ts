export type Person = {
  slug: string
  name: string
  role: string
  description: string
  initials: string
  category: 'leadership' | 'team'
  image?: string
  biography: string
}

export const people: Person[] = [
  {
    slug: 'aa-johnson',
    name: 'MR. A.A. JOHNSON',
    role: 'Director 1',
    description: 'Strategic Leadership & Management',
    initials: 'AJ',
    category: 'leadership',
    biography:
      'MR. A.A. JOHNSON serves as Director 1 at Minim Global Services, providing Strategic Leadership & Management across the group. He guides the company\'s long-term direction and strengthens organisational standards.\n\nHe ensures each division delivers quality and responsible growth for communities and clients in Sierra Leone, with a focus on integrity, innovation, and lasting impact.',
  },
  {
    slug: 'florence-johnson',
    name: 'MRS. FLORENCE JOHNSON',
    role: 'Director 2',
    description: 'Operations & Business Development',
    initials: 'FJ',
    category: 'leadership',
    biography:
      'MRS. FLORENCE JOHNSON serves as Director 2 at Minim Global Services, leading Operations & Business Development.\n\nShe focuses on operational excellence, partnership growth, and expanding Minim\'s service footprint across media, food, architecture, and clothing.',
  },
  {
    slug: 'kadiatu-koroma',
    name: 'KADIATU KOROMA',
    role: 'Head of Multimedia',
    description: 'Creative Strategy & Media Production',
    initials: 'KK',
    category: 'leadership',
    biography:
      'KADIATU KOROMA is Head of Multimedia at Minim Global Services, driving Creative Strategy & Media Production.\n\nShe leads storytelling, visual content, and multimedia campaigns that amplify brands and community stories through Minim Studios.',
  },
  {
    slug: 'nasiatu-sesay',
    name: 'NASIATU SESAY',
    role: 'Admin',
    description: 'Administration',
    initials: 'NS',
    category: 'team',
    biography:
      'NASIATU SESAY supports Minim Global Services in Administration, helping coordinate daily operations, internal processes, and client-facing coordination so teams across the group can deliver reliably.',
  },
  {
    slug: 'emmanuel-b-koroma',
    name: 'EMMANUEL B. KOROMA',
    role: 'Admin',
    description: 'Global Services',
    initials: 'EK',
    category: 'team',
    biography:
      'EMMANUEL B. KOROMA works in Administration with a focus on Global Services, supporting coordination across Minim\'s diversified divisions and helping maintain consistent service delivery for clients.',
  },
  {
    slug: 'mr-benson',
    name: 'MR. BENSON',
    role: 'Project Coordinator',
    description: 'Project Management & Planning',
    initials: 'MB',
    category: 'team',
    biography:
      'MR. BENSON is a Project Coordinator specialising in Project Management & Planning. He helps align teams, timelines, and deliverables so construction and service projects move from planning through execution with clarity and accountability.',
  },
  {
    slug: 'lilian-kamara',
    name: 'LILIAN KAMARA',
    role: 'Junior Architect',
    description: 'Design & Drafting',
    initials: 'LK',
    category: 'team',
    biography:
      'LILIAN KAMARA is a Junior Architect focused on Design & Drafting. She contributes to residential and commercial design work, supporting concept development and detailed drawings that bring client vision into build-ready plans.',
  },
  {
    slug: 'joshua-sesay',
    name: 'JOSHUA SESAY',
    role: 'Junior Engineer',
    description: 'Technical Support & Engineering',
    initials: 'JS',
    category: 'team',
    biography:
      'JOSHUA SESAY is a Junior Engineer providing Technical Support & Engineering across projects. He assists with technical problem-solving, site support, and engineering coordination that keep quality standards high.',
  },
  {
    slug: 'fatimata-kamara',
    name: 'FATIMATA KAMARA',
    role: 'Graphic Design Staff',
    description: 'Visual Content & Branding',
    initials: 'FK',
    category: 'team',
    biography:
      'FATIMATA KAMARA is Graphic Design Staff supporting Visual Content & Branding. She creates brand assets, marketing materials, and visual systems that strengthen Minim\'s identity across its divisions.',
  },
  {
    slug: 'ibrahim-sesay',
    name: 'IBRAHIM SESAY',
    role: 'Staff',
    description: 'Project Ministry',
    initials: 'IS',
    category: 'team',
    biography:
      'IBRAHIM SESAY serves on staff in Project Ministry, supporting project activities and team coordination so Minim Global Services can deliver on commitments across its portfolio of work.',
  },
]

export function getPersonBySlug(slug: string): Person | undefined {
  return people.find((person) => person.slug === slug)
}

export function getLeadership() {
  return people.filter((person) => person.category === 'leadership')
}

export function getAllPersonSlugs() {
  return people.map((person) => person.slug)
}
