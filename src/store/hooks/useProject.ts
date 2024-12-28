import { Task } from "../../../types/task";
import { createProject, deleteProject, editTasks } from "../projects/projectsSlice";
import { useAppDispatch } from "../store";

export const useProject = () => {
    const dispatch = useAppDispatch();

    const onCreateProject = ( newTitle: string ) => {
        dispatch( createProject({ newTitle }) )
    }

    const onDeleteProject = ( id: string ) => {
        dispatch( deleteProject({ id }) )
    }

    const onEditTasks = (id: string, tasks: Task[]) => {
        dispatch( editTasks({ idProject: id, tasks }) )
    }

    return ({
        onCreateProject,
        onDeleteProject,
        onEditTasks,
    })
}