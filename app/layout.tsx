import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Platform Overview | Foundry North',
  description:
    'What Compass, Flux, Forge, and the Star Tribune Document Center do — and how they work with HubSpot and NinjaCat.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
