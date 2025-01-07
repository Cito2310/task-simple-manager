import { ButtonModal, ModalLayout } from "./modal"
import { useFormDeleteTask } from "../hooks/useFormDeleteTask";
import { Project } from "../../types/project";
import { Task } from "../../types/task";

interface props {
    project: Project;
    selectedTask: Task;
}

export const ModalDeleteTask = ({ project, selectedTask }: props) => {
    const { 
        onSubmit, 
        onExit
    } = useFormDeleteTask({ currentProject: project, selectedTask: selectedTask });

    return ( <ModalLayout title="Eliminar Tarea" onExit={onExit}>
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <p>¿Seguro que deseas eliminar la tarea "{selectedTask.title}"?</p>

            <ButtonModal label="Eliminar Tarea" autofocus
            />
        </form>
    </ModalLayout> )
}