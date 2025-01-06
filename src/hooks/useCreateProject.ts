import { useForm } from "react-hook-form";
import { useAppDispatch } from "../store/store";
import { createProject } from "../store/projects/projectsSlice";
import { changeModal } from "../store/projects/modalSlice";

export const useCreateProject = () => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit } = useForm();
    const onExit = () => dispatch(changeModal("none"));

    const onSubmit = ( data: any ) => {
        dispatch( createProject({ newTitle: data.title }) );
        onExit();
    }

    return { register, handleSubmit, onSubmit, onExit }
}