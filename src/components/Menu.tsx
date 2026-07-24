import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';

const classesLinkIcon =
    'inline-flex items-center justify-center rounded-xl bg-(--primary) p-5 text-(--text-over-primary) transition-all delay-[0.1s] ease-in-out hover:brightness-75';

export function Menu() {
    return (
        <nav className='flex items-center justify-center gap-6'>
            <a className={classesLinkIcon} href='#'>
                <HouseIcon className='h-10 w-10' />
            </a>
            <a className={classesLinkIcon} href='#'>
                <HistoryIcon className='h-10 w-10' />
            </a>
            <a className={classesLinkIcon} href='#'>
                <SettingsIcon className='h-10 w-10' />
            </a>
            <a className={classesLinkIcon} href='#'>
                <SunIcon className='h-10 w-10' />
            </a>
        </nav>
    );
}
