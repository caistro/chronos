type ContainerProps = {
    children: React.ReactNode;
};
export function Container({ children }: ContainerProps) {
    return (
        <div className='mx-auto max-w-7xl'>
            <div className='m-12'>{children}</div>
        </div>
    );
}
