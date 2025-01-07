import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import { changeModal, useAppDispatch, editTasks } from "../store";
import { Project, Task, DifficultyTask, PriorityTask } from "../../types";


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
    const { register, handleSubmit } = useForm<formValues>();
    const onExit = () => dispatch(changeModal("none"));

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

        dispatch( editTasks({ idProject: id, tasks: [...tasks, formatTask] }) );
        onExit();
    }

    return {
        register,
        handleSubmit,

        priority, setPriority,
        difficulty, setDifficulty,

        onSubmit,
        onExit,
    }
}