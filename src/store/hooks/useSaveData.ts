import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../store"
import { loadingInitialData } from "../projects/projectsSlice";

export const useManagerData = () => {
    const keyLocalStorage = "data-projects";
    const dispatch = useAppDispatch();
    const { projects, status } = useAppSelector(state => state.projects);

    useEffect(() => {
        // Este codigo verifica si no se cargo los datos iniciales para cargarlo
        if ( status.loadingInitialData === false ) {
            const dataRaw = localStorage.getItem(keyLocalStorage);
            if (dataRaw !== null) dispatch( loadingInitialData( JSON.parse(dataRaw) ) );
        }
    }, [])

    useEffect(() => {
        // Este codigo verifica si ya se cargo los datos iniciales en projects para empezar a guardar cada vez que se modifique
        // Evita el error de que al iniciar la aplicacion se guarde en el LocalStorage el state vacio inicial
        if ( status.loadingInitialData === true ) localStorage.setItem(keyLocalStorage, JSON.stringify(projects));
    }, [projects])
}