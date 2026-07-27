export function Cycles() {
    return (
        <div className='flex flex-col items-center justify-center gap-6'>
            <span>Ciclos:</span>

            <div className='flex gap-3'>
                <span className='h-8 w-8 rounded-full bg-(--warning)'></span>
                <span className='h-8 w-8 rounded-full bg-(--primary)'></span>
                <span className='h-8 w-8 rounded-full bg-(--warning)'></span>
                <span className='h-8 w-8 rounded-full bg-(--primary)'></span>
                <span className='h-8 w-8 rounded-full bg-(--warning)'></span>
                <span className='h-8 w-8 rounded-full bg-(--primary)'></span>
                <span className='h-8 w-8 rounded-full bg-(--warning)'></span>
                <span className='h-8 w-8 rounded-full bg-(--info)'></span>
            </div>
        </div>
    );
}
