import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import './global.css';

export const metadata: Metadata = {
    title: 'Hsi Chen',
    description: 'A simple index of projects by Hsi Chen.',
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
