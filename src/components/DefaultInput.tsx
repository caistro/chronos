type DefaultInputProps = {
    id: string;
    labelText: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, type, labelText, ...rest }: DefaultInputProps) {
    return (
        <>
            {labelText && <label htmlFor={id}>{labelText}</label>}
            <input
                className='border-2 border-transparent border-b-(--primary) bg-transparent p-3 text-center
                    text-(--text-default) transition-all delay-100 ease-in-out outline-none placeholder:text-2xl
                    placeholder:text-(--gray-500) placeholder:italic focus:rounded-xl focus:border-(--primary)
                    disabled:border-b-(--disabled) disabled:text-(--text-muted)'
                id={id}
                type={type}
                {...rest}
            />
        </>
    );
}
