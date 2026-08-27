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

    function handleInterrupetTask() {
        setState(prevState => {
            return {
                ...prevState,
                activeTask: null,
                secondsRemaining: 0,
                formattedSecondsRemaining: '00:00',
                tasks: prevState.tasks.map(task => {
                    if (prevState.activeTask && prevState.activeTask.id === task.id) {
                        return { ...task, interruptDate: Date.now() };
                    }
                    return task;
                }),
            };
        });
    }

    return (
        <form onSubmit={handleCreateNewTask} className='flex flex-col items-center justify-center gap-9'>
            <div className='flex flex-col items-center justify-center gap-9'>
                <DefaultInput
                    labelText='task'
                    id='input'
                    type='text'
                    placeholder='Digite algo'
                    ref={taskNameInput}
                    disabled={!!state.activeTask}
                />
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
                {!state.activeTask ? (
                    <Defaultbutton
                        color='green'
                        type='submit'
                        aria-label='Iniciar nova tarefa'
                        title='Iniciar nova tarefa'
                        key='botao_submit'
                    >
                        <PlayCircleIcon className='h-12 w-12' />
                    </Defaultbutton>
                ) : (
                    <Defaultbutton
                        color='red'
                        type='button'
                        aria-label='Interromper tarefa atual'
                        title='Interromper tarefa atual'
                        onClick={handleInterrupetTask}
                        key='botao_button'
                    >
                        <StopCircleIcon className='h-12 w-12' />
                    </Defaultbutton>
                )}
            </div>
        </form>
    );
}
