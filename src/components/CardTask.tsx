import { Task } from "../../types/task"
import { changeModal } from "../store/projects/modalSlice";
import { editTaskWithId, setSelectedTask } from "../store/projects/projectsSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { BadgeTask } from "./cardTask/BadgeTask";
import { ButtonCheck } from "./cardTask/ButtonCheck"
import { ButtonEditTrash } from "./cardTask/ButtonEditTrash";

interface props {
    task: Task
}

export const CardTask = ({ task }: props) => {
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

    const { description, state, title } = task;

    return (
        <li className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                    <ButtonCheck state={state} onClick={onChangeState} />
                    <span className="font-semibold ">{title}</span>
                </div>
                <div>
                    <ButtonEditTrash type="edit" onClick={onDelete}/>
                    <ButtonEditTrash type="delete" onClick={onEdit}/>
                </div>
            </div>


            <p className="ml-6 ">{ description }</p>


            <div className="ml-6 mt-2 flex space-x-2">
                <BadgeTask task={task} type="difficulty"/>
                <BadgeTask task={task} type="priority"/>
            </div>
        </li>
    )
}
