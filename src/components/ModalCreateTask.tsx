import { ButtonModal, InputRadio, InputText, ModalLayout } from "./modal"
import { useFormCreateTask } from "../hooks";
import { Project } from "../../types";

interface props {
    project: Project;
}

export const ModalCreateTask = ({ project }: props) => {
    const { 
        handleSubmit, onSubmit, 
        register, 
        difficulty, setDifficulty, 
        priority, setPriority,
        onExit
    } = useFormCreateTask({ currentProject: project });

    return ( <ModalLayout title="Agregar Nueva Tarea" onExit={onExit}>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <InputText autofocus register={register("title")} placeholder="Título de la tarea" type="input" />

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
                label="Agregar Tarea"
            />
        </form>
    </ModalLayout> )
}