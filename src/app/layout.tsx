import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import './global.css';

const siteUrl = new URL('https://hsichen.dev');
const siteDescription =
    'Projects by Hsi Chen, a design-focused software developer building useful apps, browser tools, and creative experiments.';

export const metadata: Metadata = {
    metadataBase: siteUrl,
    title: 'Hsi Chen',
    description: siteDescription,
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Hsi Chen — Projects',
        description: siteDescription,
        url: '/',
        siteName: 'Hsi Chen',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Hsi Chen — Projects',
        description: siteDescription,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            'index': true,
            'follow': true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}
