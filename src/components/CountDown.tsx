import { useTaskContext } from '../contexts/TaskContext/useTaskContext';

export function CountDown() {
    const { state } = useTaskContext();
    return (
        <div className='text-center text-[clamp(8rem,30vw,16rem)] leading-tight font-bold'>
            {state.formattedsecondRemaing}
        </div>
    );
}
