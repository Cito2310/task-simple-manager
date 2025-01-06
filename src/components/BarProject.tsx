import { changeModal } from "../store/projects/modalSlice";
import { setCurrentProject } from "../store/projects/projectsSlice";
import { useAppDispatch, useAppSelector } from "../store/store"
import { ButtonProject } from "./barProject/ButtonProject"

export const BarProject = () => {
    const dispatch = useAppDispatch();
    const { projects, currentProject } = useAppSelector( state => state.projects );

    const onModalCreateProject = () => dispatch( changeModal("create-project") );
    const onSetProject = (id: string) => dispatch( setCurrentProject(id) );
    return (
        <div className="flex items-center space-x-2 mb-4">
            <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
                { projects.map( project => <ButtonProject
                    label={project.name} 
                    onClick={()=>onSetProject(project.id)} 
                    active={ currentProject?.id === project.id }
                    key={project.id}
                /> )}
            </div>

            <button onClick={onModalCreateProject} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-background hover:bg-primary/90 h-10 w-10">
                <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
            </button>
        </div>
    )
}