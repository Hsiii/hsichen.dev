import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'Hsi Chen — Projects';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';
export const dynamic = 'force-static';

export default async function OpenGraphImage(): Promise<ImageResponse> {
    const portrait = await readFile(
        join(process.cwd(), 'public/profile/hsi.png'),
        'base64'
    );
    const portraitSrc = `data:image/png;base64,${portrait}`;

    return new ImageResponse(
        <div
            style={{
                alignItems: 'center',
                background: '#f7f4ee',
                color: '#1f1d1a',
                display: 'flex',
                height: '100%',
                justifyContent: 'center',
                padding: '72px',
                width: '100%',
            }}
        >
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    gap: '64px',
                }}
            >
                <img
                    alt=''
                    height={280}
                    src={portraitSrc}
                    style={{
                        borderRadius: '50%',
                        objectFit: 'cover',
                    }}
                    width={280}
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <div
                        style={{
                            fontFamily: 'serif',
                            fontSize: '96px',
                            fontWeight: 700,
                            letterSpacing: '-4px',
                            lineHeight: 1,
                        }}
                    >
                        Hsi Chen
                    </div>
                    <div
                        style={{
                            color: '#9f4b2e',
                            fontSize: '42px',
                            fontWeight: 700,
                            marginTop: '20px',
                        }}
                    >
                        My projects
                    </div>
                    <div
                        style={{
                            color: '#66605a',
                            fontSize: '28px',
                            marginTop: '16px',
                        }}
                    >
                        Useful apps, browser tools, and creative experiments.
                    </div>
                </div>
            </div>
        </div>,
        size
    );
}
