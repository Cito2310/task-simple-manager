import { Project } from "../../types/project"
import { filterTasks } from "../helpers/filterTasks";
import { CardTask } from "./CardTask";

interface props {
    currentProject: null | Project;
    filterState: "active" | "all" | "complete";
    onCreateTask: ()=>void;
}

export const SectionTask = ({ currentProject, filterState, onCreateTask }: props) => {
    return (<>{
        currentProject ? <>
            <ul className="space-y-4">{
                filterTasks(filterState, currentProject.tasks).map( task => <CardTask key={task.id} task={task} /> )
            }</ul>

            <button onClick={onCreateTask} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 fixed bottom-8 right-8 rounded-full w-16 h-16 shadow-lg">
                <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
            </button>
        </> : null
    }</>)
}