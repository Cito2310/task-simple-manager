import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { changeModal } from "../../store/projects/modalSlice";

export const useKeybind = () => {
    const dispatch = useAppDispatch();

    // INICIO DE SECCION DE CODIGO
    // Este codigo actualiza constantemente el ref de blockKeypress para mantener 
    // actualizado este dato y ser utilizados por el addEventListener
    const blockKeypress = useAppSelector(state => state.general.status.blockKeypress);
    const blockKeypressRef = useRef(blockKeypress);
  
    useEffect(() => { blockKeypressRef.current = blockKeypress }, [blockKeypress]);
    // FINAL DE SECCION DE CODIGO


    useEffect(() => {
        const onKeypress = (ev: KeyboardEvent) => {
            if (blockKeypressRef.current === false) {
                // EDITAR AQUI LOS KEYBIND
                if (ev.code === "KeyN") dispatch(changeModal("create-task"));
                // FINAL DE LA SECCION
            }
        }

        window.document.addEventListener("keypress", onKeypress)
        return () => {window.document.removeEventListener("keypress", onKeypress)}
    }, [])
}