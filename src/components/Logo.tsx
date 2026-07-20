import { TimerIcon } from 'lucide-react';

export function Logo() {
    return (
        <div className='flex items-center justify-center gap-8 pt-12'>
            <a
                className='flex flex-col items-center justify-center gap-2 text-7xl font-bold text-(--primary)
                    transition-all delay-[0,1s] ease-in-out hover:brightness-75'
                href='#'
            >
                <TimerIcon className='h-24 w-24' />
                <span>Chronos</span>
            </a>
        </div>
    );
}
