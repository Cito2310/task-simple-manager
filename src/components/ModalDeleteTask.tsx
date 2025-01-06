import { ButtonModal } from "./modal"
import { Project } from "../../types/project";
import { ModalLayout } from "./modal/ModalLayout";
import { Task } from "../../types/task";
import { useFormDeleteTask } from "../hooks/useFormDeleteTask";

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