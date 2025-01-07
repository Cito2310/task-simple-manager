import { Task } from "../../types/task";
import { setSelectedTask } from "../store/projects/generalSlice";
import { changeModal } from "../store/projects/modalSlice";
import { editTaskWithId } from "../store/projects/projectsSlice";
import { useAppDispatch, useAppSelector } from "../store/store";

export const useCardTask = (task: Task) => {
    const dispatch = useAppDispatch();
    const { currentProject } = useAppSelector(state => state.projects)
    const onChangeState = () => {
        const nextState = {
            "not-complete": "in-progress",
            "in-progress": "complete",
            "complete": "not-complete"
        }

        dispatch( editTaskWithId({
            idProject: currentProject!.id,
            idTask: task.id,
            // @ts-ignore
            newTask: {...task, state: nextState[task.state]}
    }) )}
    const onEdit = () => {
        dispatch(setSelectedTask( task ));
        dispatch(changeModal("edit-task"));
    }

    const onDelete = () => {
        dispatch(setSelectedTask(task));
        dispatch(changeModal("delete-task"));
    }

    return {
        onEdit, onDelete,
        onChangeState,
    }
}