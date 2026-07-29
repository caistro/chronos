import type { TaskModel } from './Taskmodel';

export type TaskStateModel = {
    tasks: TaskModel[];
    secondRemaing: number;
    formattedsecondRemaing: string;
    activeTask: TaskModel | null;
    currentCycle: number;
    config: {
        worktime: number;
        shortBreakTime: number;
        longBreakTime: number;
    };
};
