import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from './Cycles';
import { Defaultbutton } from './DefaultButton';
import { DefaultInput } from './DefaultInput';
import { useRef, type SubmitEvent } from 'react';

export function MainForm() {
    const taskNameInput = useRef<HTMLInputElement>(null);

    function handleCreateNewTask(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
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
