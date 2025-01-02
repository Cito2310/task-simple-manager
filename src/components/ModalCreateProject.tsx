import { ButtonExit, ButtonModal, InputText } from "./modal"
import { useCreateProject } from "../hooks/useCreateProject";

export const ModalCreateProject = () => {
    const { handleSubmit, onSubmit, register } = useCreateProject();

    return (<>
        <div className="w-screen h-screen absolute z-10 top-0 left-0 bg-[#000000d0]"></div>

        <div className="
        translate-x-[-50%] left-[50%] top-[100px] z-20
        rounded-lg bg-background shadow-lg fixed 
        p-6 border gap-4 max-w-lg w-full flex flex-col
        ">
            <div className="flex justify-between">
                <h2 className="font-GeistSans text-lg font-semibold leading-none tracking-tight">
                    Nuevo Proyecto
                </h2>

                <ButtonExit />
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                <InputText register={register("title")} placeholder="Título del Nuevo Proyecto" type="input" />
        
                <ButtonModal
                    label="Agregar Tarea"
                />
            </form>

        </div>
    </>)
}