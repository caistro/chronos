type DefaultButtonProps = {
    children: React.ReactNode;
    color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

const colors = {
    green: 'bg-(--primary) text-(--text-over-primary)',
    red: 'bg-(--error) text-(--text-over-error)',
};

export function Defaultbutton({ children, color = 'green', ...props }: DefaultButtonProps) {
    return (
        <>
            <button
                className={`${colors[color]} my-10 flex min-w-96 cursor-pointer items-center justify-center rounded-xl
                    border-none p-3 transition-all delay-100 ease-in-out hover:brightness-75`}
                {...props}
            >
                {children}
            </button>
        </>
    );
}
