import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FRANCE ABSOLUE · La Grande Puissance',
  description: 'La Grande République Impériale de France — G.R.I.F. De la Gaule à l\'espace.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
