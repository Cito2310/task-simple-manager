import { useState } from "react";
import { useManagerData } from "./useManagerData";
import { useAppDispatch, useAppSelector } from "../store/store";
import { changeModal } from "../store/projects/modalSlice";

export const useApp = () => {
    useManagerData();
    const { currentModal } = useAppSelector( state => state.modal);
    const { currentProject, selectedTask } = useAppSelector( state => state.projects );
    const [filterState, setFilterState] = useState<"active" | "all" | "complete">("all");
    const dispatch = useAppDispatch();

    const onModalCreateTask = () => dispatch(changeModal("create-task"));

    return {
        currentModal, currentProject, selectedTask,
        filterState, setFilterState,
        onModalCreateTask
    }
}