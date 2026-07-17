import { Heading } from './components/Heading';
import { Container } from './components/Container';
import './styles/theme.css';
import './styles/global.css';


export function App() {
  return (
    <>
      <Container>
        <Heading>Logo</Heading>
      </Container>
      <Container>
        <Heading>Menu</Heading>
      </Container>
      
    </>
  );
}
