import { useAppDispatch } from "../store/store";
import { Project } from "../../types/project";
import { editTasks } from "../store/projects/projectsSlice";
import { Task } from "../../types/task";
import { changeModal } from "../store/projects/modalSlice";

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