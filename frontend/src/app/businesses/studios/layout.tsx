import StudiosShell from '@/components/StudiosShell'

export default function StudiosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <StudiosShell>{children}</StudiosShell>
}
