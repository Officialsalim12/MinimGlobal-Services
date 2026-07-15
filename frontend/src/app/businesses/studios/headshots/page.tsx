import { redirect } from 'next/navigation'

/** Headshots now live under Photography Studio. */
export default function HeadshotsRedirectPage() {
  redirect('/photography')
}
