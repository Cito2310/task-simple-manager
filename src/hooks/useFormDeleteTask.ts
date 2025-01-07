import { useAppDispatch, editTasks, changeModal } from "../store";
import { Project, Task } from "../../types";

interface props {
    currentProject: Project;
    selectedTask: Task;
}

export const useFormDeleteTask = ({ currentProject, selectedTask }: props) => {
    const dispatch = useAppDispatch();
    const onExit = () => dispatch(changeModal("none"));

    const onSubmit = () => {
        const { id, tasks } = currentProject;
        const indexTask = tasks.findIndex( task => task.id === selectedTask.id );
        let copyTasks = structuredClone(currentProject.tasks);
        copyTasks.splice(indexTask, 1);

        dispatch( editTasks({ idProject: id, tasks: copyTasks}) );
        onExit();
    }

    return {
        onSubmit,
        onExit,
    }
}