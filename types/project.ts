import { Task } from './';

export interface Project {
    name: string;
    tasks: Task[]
    id: string;
}