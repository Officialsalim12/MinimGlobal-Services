import ArchitectShell from '@/components/ArchitectShell'

export default function ArchitectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ArchitectShell>{children}</ArchitectShell>
}
