import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from './Cycles';
import { Defaultbutton } from './DefaultButton';
import { DefaultInput } from './DefaultInput';
import { useRef, type SubmitEvent } from 'react';
import type { TaskModel } from '../models/Taskmodel';
import { useTaskContext } from '../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../utils/getNextCycle';
import { getNextCycleType } from '../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../utils/formatSecondsToMinutes';

export function MainForm() {
    const { state, setState } = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null);

    //ciclos
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    function handleCreateNewTask(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        if (taskNameInput.current === null) return;

        const taskName = taskNameInput.current.value.trim();

        if (!taskName) {
            alert('Digite o nome da tarefa');
            return;
        }

        const newTask: TaskModel = {
            id: Date.now.toString(),
            name: taskName,
            duration: state.config[nextCycleType],
            starDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            type: nextCycleType,
        };

        const secondsRemaining = newTask.duration * 60;

        setState(prevState => {
            return {
                ...prevState,
                config: { ...prevState.config },
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
                tasks: [...prevState.tasks, newTask],
            };
        });
    }
    return (
        <form onSubmit={handleCreateNewTask} className='flex flex-col items-center justify-center gap-9'>
            <div className='flex flex-col items-center justify-center gap-9'>
                <DefaultInput labelText='task' id='input' type='text' placeholder='Digite algo' ref={taskNameInput} />
            </div>
            <div className='flex flex-col items-center justify-center gap-9'>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            {state.currentCycle > 0 && (
                <div className='flex flex-col items-center justify-center gap-9'>
                    <Cycles />
                </div>
            )}

            <div className='flex flex-col items-center justify-center gap-9'>
                <Defaultbutton color='green'>
                    <PlayCircleIcon className='h-12 w-12' />
                </Defaultbutton>
                <Defaultbutton color='red'>
                    <StopCircleIcon className='h-12 w-12' />
                </Defaultbutton>
            </div>
        </form>
    );
}
