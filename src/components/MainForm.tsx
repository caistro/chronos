import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from './Cycles';
import { Defaultbutton } from './DefaultButton';
import { DefaultInput } from './DefaultInput';
import { useRef, type SubmitEvent } from 'react';
import type { TaskModel } from '../models/Taskmodel';
import { useTaskContext } from '../contexts/TaskContext/useTaskContext';

export function MainForm() {
    const { setState } = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null);

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
            duration: 1,
            starDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            type: 'worktime',
        };

        const secondsRemaining = newTask.duration * 60;

        setState(prevState => {
            return {
                ...prevState,
                config: { ...prevState.config },
                activeTask: newTask,
                currentCycle: 1,
                secondsRemaining,
                formattedSecondsRemaining: '00:00',
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
            <div className='flex flex-col items-center justify-center gap-9'>
                <Cycles />
            </div>
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
