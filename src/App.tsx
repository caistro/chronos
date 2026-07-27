import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefalutInput } from './components/DefaultInput';

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
                        <DefalutInput labelText='task' id='input' type='text' placeholder='Digite algo' />
                    </div>
                    <div className='flex flex-col items-center justify-center gap-9'>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-9'>
                        <p>Ciclos</p>
                        <p>0 0 0 0 0 0 0 0 0</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-9'>
                        <button>Enviar</button>
                    </div>
                </form>
            </Container>
        </>
    );
}
