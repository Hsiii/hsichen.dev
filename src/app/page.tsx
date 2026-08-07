import Image from 'next/image';

const projects = [
    {
        description: 'Check train status with zero taps.',
        icon: '/projects/ontrack.png',
        name: 'OnTrack',
        url: 'https://ontrack.hsichen.dev',
    },
    {
        description: 'Color your invoice barcode to match your wallpaper.',
        icon: '/projects/colorinvo.png',
        name: 'ColorInvo',
        url: 'https://colorinvo.hsichen.dev',
    },
    {
        description: 'Bring your README badges to life.',
        icon: '/projects/badgical.svg',
        name: 'Badgical',
        url: 'https://badgical.hsichen.dev',
    },
    {
        description: 'Cross-browser, keyboard-first bookmark launcher.',
        icon: '/projects/homepage.ico',
        name: 'Homepage',
        url: 'https://homepage.hsichen.dev',
    },
    {
        description:
            'Outsmart your opponents in nerdy prime factorization battles.',
        icon: '/projects/atomize.svg',
        name: 'Atomize',
        url: 'https://atomize.hsichen.dev',
    },
    {
        description:
            'A faster, cleaner NTHU Academic Information System (150+ users).',
        icon: '/projects/ccxplite.png',
        name: 'ccxpLite',
        url: 'https://chromewebstore.google.com/detail/glcnfmnbmknbphfgjgbokbbchahmiakk',
    },
    {
        description: 'One-click access from NYCU Portal to E3.',
        icon: '/projects/eze3.png',
        name: 'EZE3',
        url: 'https://chromewebstore.google.com/detail/ekijjgdmninecmfmlkaclcdfgbobaenc',
    },
    {
        description: 'Track Codex usage across accounts and workspaces.',
        icon: '/projects/comux.png',
        name: 'Comux',
        url: 'https://github.com/Hsiii/comux',
    },
    {
        description: 'Open your most-used browser tabs instantly.',
        icon: '/projects/handytab.png',
        name: 'HandyTab',
        url: 'https://github.com/Hsiii/handy-tab',
    },
    {
        description: 'Japanese pitch-accent & furigana auto-marking tool.',
        icon: '/projects/akuma.png',
        name: 'AkuMa',
        url: 'https://akuma.sessatakuma.dev',
    },
] as const;

export default function HomePage() {
    return (
        <main>
            <div className='content'>
                <section className='hero'>
                    <h1>Hsi Chen</h1>
                    <p>
                        I plan to build a portfolio here. For now, I&apos;m
                        keeping it simple.
                    </p>
                </section>

                <section
                    aria-labelledby='projects-heading'
                    className='projects'
                >
                    <h2 id='projects-heading'>My projects</h2>
                    <ul>
                        {projects.map((project) => (
                            <li key={project.url}>
                                <a className='project' href={project.url}>
                                    <Image
                                        alt=''
                                        className='project__icon'
                                        height={40}
                                        src={project.icon}
                                        width={40}
                                    />
                                    <span className='project__copy'>
                                        <strong>{project.name}</strong>
                                        <span className='project__description'>
                                            {project.description}
                                        </span>
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    );
}
