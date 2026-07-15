export type StudioStaff = {
  slug: string
  name: string
  role: string
  specialty: string
  initials: string
  image?: string
  bio: string
}

/** Staff listed on the Minim Studios Team page edit this list as people join. */
export const studiosTeam: StudioStaff[] = [
  {
    slug: 'kadiatu-koroma',
    name: 'KADIATU KOROMA',
    role: 'Head of Multimedia',
    specialty: 'Creative Strategy & Media Production',
    initials: 'KK',
    bio: 'Leads creative strategy and media production across Minim Studios guiding storytelling, campaigns, and studio output.',
  },
  {
    slug: 'fatimata-kamara',
    name: 'FATIMATA KAMARA',
    role: 'Graphic Design Staff',
    specialty: 'Visual Content & Branding',
    initials: 'FK',
    bio: 'Creates brand assets, marketing materials, and visual systems that strengthen identity across photography, video, and design projects.',
  },
  {
    slug: 'photo-lead',
    name: 'Photography Lead',
    role: 'Photography Studio',
    specialty: 'Photo Sessions & Direction',
    initials: 'PH',
    bio: 'Runs client photography sessions in studio and on location: brands, products, events, and people.',
  },
  {
    slug: 'video-lead',
    name: 'Videography Lead',
    role: 'Videography Studio',
    specialty: 'Film & Production',
    initials: 'VD',
    bio: 'Directs commercial and brand video from concept through shoot and delivery.',
  },
  {
    slug: 'sound-lead',
    name: 'Sound Engineer',
    role: 'Sound Studio',
    specialty: 'Recording & Mixing',
    initials: 'SD',
    bio: 'Handles recording, mixing, podcasts, and post audio for ads, music, and film.',
  },
  {
    slug: 'displays-lead',
    name: 'Displays Technician',
    role: 'Displays Studio',
    specialty: 'Lighting & LED',
    initials: 'DS',
    bio: 'Sets up event lighting, LED walls, staging, and show day visual production.',
  },
]
