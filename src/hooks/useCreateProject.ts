import { useForm } from "react-hook-form";
import { useAppDispatch } from "../store/store";
import { createProject } from "../store/projects/projectsSlice";

export const useCreateProject = () => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = ( data: any ) => {
        dispatch( createProject({ newTitle: data.title }) );
    }

    return { register, handleSubmit, onSubmit }
}