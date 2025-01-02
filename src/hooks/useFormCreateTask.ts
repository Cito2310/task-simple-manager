import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../store/store";
import { Project } from "../../types/project";
import { editTasks } from "../store/projects/projectsSlice";
import { Task } from "../../types/task";
import { DifficultyTask, PriorityTask } from "../../types/states";
import { v4 as uuidv4 } from 'uuid';
interface formValues {
    title: string;
    description: string;
    priority: PriorityTask;
    difficulty: DifficultyTask;
}

interface props {
    currentProject: Project;
}

export const useFormCreateTask = ({ currentProject }: props) => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit } = useForm<formValues>()

    const [priority, setPriority] = useState<PriorityTask>("low");
    const [difficulty, setDifficulty] = useState<DifficultyTask>("easy");

    const onSubmit = (data: formValues) => {
        const { id, tasks } = currentProject;
        const formatTask: Task = {
            description: data.description,
            difficulty,
            priority,
            state: "not-complete",
            title: data.title,
            id: uuidv4()
        }

        dispatch( editTasks({ idProject: id, tasks: [...tasks, formatTask] }) )
    }

    return {
        register,
        handleSubmit,

        priority, setPriority,
        difficulty, setDifficulty,

        onSubmit,
    }
}