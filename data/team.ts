export interface TeamMember {
  id: string
  name: string
  title: string
  department: string
  photo: string
  email: string
  phone?: string
  bio: string
  linkedin?: string
}

export const team: TeamMember[] = [
  // Placeholder data - will be populated with actual team members
]
