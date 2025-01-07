import { useEffect, useRef, useState } from "react";
import { useManagerData } from "./useManagerData";
import { useAppDispatch, useAppSelector } from "../store/store";
import { changeModal } from "../store/projects/modalSlice";

export const useApp = () => {
    useManagerData();
    const { currentModal } = useAppSelector( state => state.modal);
    const { currentProject } = useAppSelector( state => state.projects );
    const { selectedTask } = useAppSelector( state => state.general );
    const [filterState, setFilterState] = useState<"active" | "all" | "complete">("all");
    const dispatch = useAppDispatch();

    const onModalCreateTask = () => dispatch(changeModal("create-task"));



    // A HACER: Crear un hook a parte para toda esta seccion
    const blockKeypress = useAppSelector(state => state.general.status.blockKeypress);
    const blockKeypressRef = useRef(blockKeypress);
  
    useEffect(() => {
        blockKeypressRef.current = blockKeypress; // Actualiza la referencia al estado más reciente
    }, [blockKeypress]);

    useEffect(() => {
        const onKeypress = (ev: KeyboardEvent) => {
            if ( ev.code === "KeyN" && blockKeypressRef.current === false ) onModalCreateTask();
        }

        window.document.addEventListener("keypress", onKeypress)
        return () => {window.document.removeEventListener("keypress", onKeypress)}
    }, [])
    

    return {
        currentModal, currentProject, selectedTask,
        filterState, setFilterState,
        onModalCreateTask
    }
}