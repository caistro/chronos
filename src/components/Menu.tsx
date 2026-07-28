import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

const classesLinkIcon =
    'inline-flex items-center justify-center rounded-xl bg-(--primary) p-5 text-(--text-over-primary) transition-all delay-100 ease-in-out hover:brightness-75';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<'dark' | 'light'>(() => {
        const storageTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark';
        return storageTheme;
    });

    const nextThemeIcon = {
        dark: <SunIcon className='h-10 w-10' />,
        light: <MoonIcon className='h-10 w-10' />,
    };

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <nav className='flex items-center justify-center gap-6'>
            <a className={classesLinkIcon} href='#' aria-label='Ir para a Home' title='Ir para a Home'>
                <HouseIcon className='h-10 w-10' />
            </a>
            <a className={classesLinkIcon} href='#' aria-label='Ver Histórico' title='Ver Histórico'>
                <HistoryIcon className='h-10 w-10' />
            </a>
            <a className={classesLinkIcon} href='#' aria-label='Configurações' title='Configurações'>
                <SettingsIcon className='h-10 w-10' />
            </a>
            <a
                className={classesLinkIcon}
                href='#'
                aria-label='Mudar tema'
                title='Mudar tema'
                onClick={handleThemeChange}
            >
                {nextThemeIcon[theme]}
            </a>
        </nav>
    );
}
