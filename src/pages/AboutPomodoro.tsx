import { Container } from '../components/Container';
import { Heading } from '../components/Heading';
import { MainTemplate } from '../templates/MainTemplates';

export function AboutPomodoro() {
    return (
        <MainTemplate>
            <Container>
                <Heading>A Técnica Pomodoro 🍅</Heading>
                <p className='mb-6 text-2xl leading-relaxed'>
                    A Técnica Pomodoro é uma metodologia de produtividade criada por <strong>Francesco Cirillo</strong>,
                    que consiste em dividir o trabalho em blocos de tempo (os famosos "Pomodoros") intercalados com
                    pausas. O objetivo é manter o foco total por um período curto e garantir descansos para evitar o
                    cansaço mental.
                </p>

                <img className='my-6 block h-auto max-w-full rounded-xl' src='https://placehold.co/1920x1080' alt='' />

                <h2 className='mb-5 text-4xl'>Como funciona o Pomodoro tradicional?</h2>
                <ul className='pl-9'>
                    <li className='mb-3'>
                        <strong>1. Defina uma tarefa</strong> que você deseja realizar.
                    </li>
                    <li className='mb-3'>
                        <strong>2. Trabalhe nela por 25 minutos</strong> sem interrupções.
                    </li>
                    <li className='mb-3'>
                        <strong>3. Faça uma pausa curta de 5 minutos</strong>.
                    </li>
                    <li className='mb-3'>
                        <strong>4. A cada 4 ciclos, faça uma pausa longa</strong> (geralmente 15 a 30 minutos).
                    </li>
                </ul>

                <h2 className='mb-5 text-4xl'>
                    Mas no <strong>Chronos Pomodoro</strong> tem um diferencial 🚀
                </h2>

                <p className='mb-6 text-2xl leading-relaxed'>
                    Nosso app segue o conceito original, mas com algumas melhorias e personalizações pra deixar o
                    processo ainda mais eficiente:
                </p>

                <h3 className='mb-4 text-3xl'>⚙️ Personalização do tempo</h3>
                <p className='mb-6 text-2xl leading-relaxed'>
                    Você pode configurar o tempo de foco, descanso curto e descanso longo do jeito que quiser! Basta
                    acessar a{' '}
                    <a className='font-bold text-(--link-color) no-underline hover:underline' href='/settings'>
                        página de configurações
                    </a>{' '}
                    e ajustar os minutos como preferir.
                </p>

                <h3 className='mb-4 text-3xl'>🔁 Ciclos organizados em sequência</h3>
                <p className='mb-6 text-2xl leading-relaxed'>
                    A cada ciclo completado, uma nova task é adicionada automaticamente ao seu histórico, e o app já
                    sugere o próximo ciclo (foco ou descanso).
                </p>
                <p className='mb-6 text-2xl leading-relaxed'>
                    <strong>Nosso padrão:</strong>
                </p>
                <ul className='pl-9'>
                    <li className='mb-3'>
                        Ciclos <strong>ímpares</strong>: Trabalho (foco).
                    </li>
                    <li className='mb-3'>
                        Ciclos <strong>pares</strong>: Descanso curto.
                    </li>
                    <li className='mb-3'>
                        Ciclo <strong>8</strong>: Descanso longo especial, pra resetar o ciclo completo.
                    </li>
                </ul>

                <h3 className='mb-4 text-3xl'>🍅 Visualização dos ciclos</h3>
                <p className='mb-6 text-2xl leading-relaxed'>
                    Logo abaixo do cronômetro, você verá bolinhas coloridas representando os ciclos:
                </p>
                <ul className='pl-9'>
                    <li className='mb-3'>🟡 Amarelo: Ciclo de trabalho (foco).</li>
                    <li className='mb-3'>🟢 Verde: Descanso curto.</li>
                    <li className='mb-3'>🔵 Azul: Descanso longo (aparece a cada 8 ciclos).</li>
                </ul>

                <p className='mb-6 text-2xl leading-relaxed'>
                    Assim, você sempre sabe em que parte do processo está e o que vem a seguir. Não precisa mais anotar
                    no papel ou ficar calculando de cabeça!
                </p>

                <h3 className='mb-4 text-3xl'>📊 Histórico automático</h3>
                <p className='mb-6 text-2xl leading-relaxed'>
                    Todas as suas tarefas e ciclos concluídos ficam salvos no{' '}
                    <a className='font-bold text-(--link-color) no-underline hover:underline' href='/history'>
                        histórico
                    </a>
                    , com status de completas ou interrompidas. Assim, você consegue acompanhar sua evolução ao longo do
                    tempo.
                </p>

                <h2 className='mb-5 text-4xl'>Por que usar o Chronos Pomodoro?</h2>
                <ul className='pl-9'>
                    <li className='mb-3'>✅ Organize seu foco com clareza.</li>
                    <li className='mb-3'>✅ Trabalhe e descanse na medida certa.</li>
                    <li className='mb-3'>✅ Personalize seus próprios ciclos e tempos.</li>
                    <li className='mb-3'>✅ Acompanhe seu histórico automaticamente.</li>
                </ul>

                <p className='mb-6 text-2xl leading-relaxed'>
                    <strong>Pronto pra focar?</strong> Bora lá{' '}
                    <a className='font-bold text-(--link-color) no-underline hover:underline' href='/'>
                        voltar para a página inicial
                    </a>{' '}
                    e iniciar seus Pomodoros! 🍅🚀
                </p>

                <p className='mb-6 text-2xl leading-relaxed'>
                    <em>"Foco total, sem pressa, sem pausa, só vai!"</em> 💪🧘‍♂️
                </p>
            </Container>
        </MainTemplate>
    );
}
