import { useState } from "react";
import { useAppDispatch, useAppSelector, changeModal } from "../store";
import { useKeybind, useManagerData } from "./internal";

export const useApp = () => {
    useManagerData();   // customHook que gestiona el guardado y la carga de los datos
    useKeybind();       // customHook que gestiona los atajos de teclado

    const dispatch = useAppDispatch();
    const { currentModal } = useAppSelector( state => state.modal);
    const { currentProject } = useAppSelector( state => state.projects );
    const { selectedTask } = useAppSelector( state => state.general );
 
    const [filterState, setFilterState] = useState<"active" | "all" | "complete">("all");
    const onModalCreateTask = () => dispatch(changeModal("create-task"));

    return {
        currentModal, currentProject, selectedTask,
        filterState, setFilterState,
        onModalCreateTask
    }
}