import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../store/store";
import { Project } from "../../types/project";
import { editTasks } from "../store/projects/projectsSlice";
import { Task } from "../../types/task";
import { DifficultyTask, PriorityTask } from "../../types/states";
import { changeModal } from "../store/projects/modalSlice";
interface formValues {
    title: string;
    description: string;
    priority: PriorityTask;
    difficulty: DifficultyTask;
}

interface props {
    currentProject: Project;
    selectedTask: Task;
}

export const useFormEditTask = ({ currentProject, selectedTask }: props) => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit } = useForm<formValues>({
        defaultValues: {
            description: selectedTask.description,
            title: selectedTask.title
        }
    });
    const onExit = () => dispatch(changeModal("none"));

    const [priority, setPriority] = useState<PriorityTask>(selectedTask.priority);
    const [difficulty, setDifficulty] = useState<DifficultyTask>(selectedTask.difficulty);

    const onSubmit = (data: formValues) => {
        const { id, tasks } = currentProject;
        const editTask: Task = {
            ...selectedTask,
            description: data.description,
            difficulty,
            priority,
            title: data.title,
        }

        const indexTask = currentProject.tasks.findIndex( task => task.id === selectedTask.id );
        let copyTasks = structuredClone(currentProject.tasks);
        copyTasks[indexTask] = editTask;

        dispatch( editTasks({ idProject: id, tasks: copyTasks}) );
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