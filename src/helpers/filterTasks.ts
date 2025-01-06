import { Task } from "../../types/task"

export const filterTasks = (filter: "active" | "all" | "complete", tasks: Task[]) => {
    if ( filter === "all" ) return tasks;

    return tasks.filter( task => {
        if (filter === "active") return task.state !== "complete";
        if (filter === "complete") return task.state === "complete";
    })
}