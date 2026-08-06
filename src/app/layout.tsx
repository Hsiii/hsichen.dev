import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import './global.css';

export const metadata: Metadata = {
    title: 'My projects | Hsi Chen',
    description: 'A simple index of projects by Hsi Chen.',
};

interface RootLayoutProps {
    readonly children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}
