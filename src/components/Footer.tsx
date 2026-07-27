export function Footer() {
    return (
        <footer className='flex flex-col items-center justify-center gap-6 text-xl text-(--text-muted)'>
            <a className='hover:underline' href='#'>
                Entenda como funciona a técnica pomodoro
            </a>
            <a className='hover:underline' href='#'>
                Chronos Pomodoro &copy; {new Date().getFullYear()}
            </a>
        </footer>
    );
}
