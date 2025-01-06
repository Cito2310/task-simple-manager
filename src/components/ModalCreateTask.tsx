import { ButtonExit, ButtonModal, InputRadio, InputText } from "./modal"
import { useFormCreateTask } from "../hooks/useFormCreateTask";
import { Project } from "../../types/project";

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

    return (<>
        <div className="fixed w-screen h-screen z-10 top-0 left-0 bg-[#000000d0]"></div>

        <div className="
        translate-x-[-50%] left-[50%] top-[100px] z-20
        rounded-lg bg-background shadow-lg fixed 
        p-6 border gap-4 max-w-lg w-full flex flex-col
        ">
            <div className="flex justify-between">
                <h2 className="font-GeistSans text-lg font-semibold leading-none tracking-tight">
                    Agregar Nueva Tarea
                </h2>

                <ButtonExit onClick={onExit} />
            </div>

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
                    label="Agregar Tarea"
                />
            </form>

        </div>
    </>)
}