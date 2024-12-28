import { DifficultyTask, PriorityTask, StateTask } from './states';

export interface Task {
    title: string;
    description: string;
    id: string;
    state: StateTask;
    difficulty: DifficultyTask;
    priority: PriorityTask;
}