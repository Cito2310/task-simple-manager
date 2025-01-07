import { DifficultyTask, PriorityTask, StateTask } from './';

export interface Task {
    title: string;
    description: string;
    id: string;
    state: StateTask;
    difficulty: DifficultyTask;
    priority: PriorityTask;
}