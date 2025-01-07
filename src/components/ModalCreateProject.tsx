import { ButtonModal, InputText, ModalLayout } from "./modal"
import { useCreateProject } from "../hooks";

export const ModalCreateProject = () => {
    const { handleSubmit, onSubmit, register, onExit } = useCreateProject();

    return ( <ModalLayout title="Nuevo Proyecto" onExit={onExit}>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <InputText autofocus register={register("title")} placeholder="Título del Nuevo Proyecto" type="input" />

            <ButtonModal label="Agregar Tarea"/>
        </form>
    </ModalLayout> )
}