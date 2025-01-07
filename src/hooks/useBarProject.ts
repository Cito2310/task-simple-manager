import { changeModal } from "../store/projects/modalSlice";
import { setCurrentProject } from "../store/projects/projectsSlice";
import { useAppDispatch, useAppSelector } from "../store/store";

export const useBarProject = () => {
    const dispatch = useAppDispatch();
    const { projects, currentProject } = useAppSelector( state => state.projects );

    const onModalCreateProject = () => dispatch( changeModal("create-project") );
    const onSetProject = (id: string) => dispatch( setCurrentProject(id) );

    return {
        projects, currentProject, onModalCreateProject, onSetProject
    }
}