import { useTaskContext } from '../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../utils/getNextCycle';
import { getNextCycleType } from '../utils/getNextCycleType';

export function Cycles() {
    const { state } = useTaskContext();

    const cycleStep = Array(state.currentCycle).fill(null);

    const cycleColorMap = {
        worktime: '--warning',
        shortBreakTime: '--primary',
        longBreakTime: '--info',
    };

    const cycleDescriptionMap = {
        worktime: 'foco',
        shortBreakTime: 'descanso curto',
        longBreakTime: 'descanso longo',
    };

    return (
        <div className='flex flex-col items-center justify-center gap-6'>
            <span>Ciclos:</span>

            <div className='flex gap-3'>
                {cycleStep.map((_, index) => {
                    const nextCycle = getNextCycle(index);
                    const nextCycleType = getNextCycleType(nextCycle);

                    return (
                        <span
                            key={`${nextCycle}`}
                            className={`h-8 w-8 rounded-full bg-(${cycleColorMap[nextCycleType]})`}
                            aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
                            title={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
                        ></span>
                    );
                })}
            </div>
        </div>
    );
}
