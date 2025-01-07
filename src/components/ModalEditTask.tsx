import { ButtonModal, InputRadio, InputText, ModalLayout } from "./modal"
import { useFormEditTask } from "../hooks/useFormEditTask";
import { Project } from "../../types/project";
import { Task } from "../../types/task";

interface props {
    project: Project;
    selectedTask: Task;
}

export const ModalEditTask = ({ project, selectedTask }: props) => {
    const { 
        handleSubmit, onSubmit, 
        register, 
        difficulty, setDifficulty, 
        priority, setPriority,
        onExit
    } = useFormEditTask({ currentProject: project, selectedTask: selectedTask });

    return ( <ModalLayout title="Editar Tarea" onExit={onExit}>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <InputText register={register("title")} placeholder="Título de la tarea" type="input" />

            <InputText register={register("description")} placeholder="Descripción de la tarea" type="textarea" />
        
            <InputRadio
                currentValue={priority}
                set={setPriority}
                title="Prioridad"
                inputs={[
                    { label: "Baja", value: "low" },
                    { label: "Media", value: "medium" },
                    { label: "Alta", value: "high" },
                ]}
            />
        
            <InputRadio
                currentValue={difficulty}
                set={setDifficulty}
                title="Dificultad"
                inputs={[
                    { label: "Fácil", value: "easy" },
                    { label: "Media", value: "medium" },
                    { label: "Difícil", value: "hard" },
                ]}
            />
    
            <ButtonModal
                label="Editar Tarea"
            />
        </form>
    </ModalLayout> )
}