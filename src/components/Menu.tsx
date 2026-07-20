import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';

export function Menu() {
    return (
        <nav className='flex items-center justify-center gap-6'>
            <a
                className='inline-flex p-5 rounded-xl items-center justify-center bg-(--primary)
                    text-(--text-over-primary) transition-all delay-[0,1s] ease-in-out hover:brightness-75'
                href='#'
            >
                <HouseIcon className='h-10 w-10' />
            </a>
            <a
                className='inline-flex p-5 rounded-xl items-center justify-center bg-(--primary)
                    text-(--text-over-primary) transition-all delay-[0,1s] ease-in-out hover:brightness-75'
                href='#'
            >
                <HistoryIcon className='h-10 w-10' />
            </a>
            <a
                className='inline-flex p-5 rounded-xl items-center justify-center bg-(--primary)
                    text-(--text-over-primary) transition-all delay-[0,1s] ease-in-out hover:brightness-75'
                href='#'
            >
                <SettingsIcon className='h-10 w-10' />
            </a>
            <a
                className='inline-flex p-5 rounded-xl items-center justify-center bg-(--primary)
                    text-(--text-over-primary) transition-all delay-[0,1s] ease-in-out hover:brightness-75'
                href='#'
            >
                <SunIcon className='h-10 w-10' />
            </a>
        </nav>
    );
}
