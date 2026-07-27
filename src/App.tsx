import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { Defaultbutton } from './components/DefaultButton';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

import './styles/theme.css';
import './styles/global.css';

export function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>
            <Container>
                <Menu />
            </Container>
            <Container>
                <CountDown />
            </Container>
            <Container>
                <form className='flex flex-col items-center justify-center gap-9'>
                    <div className='flex flex-col items-center justify-center gap-9'>
                        <DefaultInput labelText='task' id='input' type='text' placeholder='Digite algo' />
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
            </Container>
        </>
    );
}
