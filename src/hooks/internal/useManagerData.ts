import { useEffect } from "react"
import { useAppDispatch, useAppSelector, loadingInitialData } from "../../store"

export const useManagerData = () => {
    const keyDataProjects = "data-projects";
    const keyLastProject = "last-project";
    const dispatch = useAppDispatch();
    const { projects, status, currentProject } = useAppSelector(state => state.projects);

    useEffect(() => {
        // Este codigo verifica si no se cargo los datos iniciales para cargarlo
        if ( status.loadingInitialData === false ) {
            const dataRaw = localStorage.getItem(keyDataProjects);
            const dataCurrentRaw = localStorage.getItem(keyLastProject);
            if (dataRaw === null) dispatch( loadingInitialData({ currentProject: null, projects: [] }) )
            if (dataRaw !== null) dispatch( loadingInitialData({ currentProject:JSON.parse(dataCurrentRaw || "null"), projects:JSON.parse(dataRaw) }) );
        }
    }, [])

    useEffect(() => {
        // Este codigo verifica si ya se cargo los datos iniciales en projects para empezar a guardar cada vez que se modifique
        // Evita el error de que al iniciar la aplicacion se guarde en el LocalStorage el state vacio inicial
        if ( status.loadingInitialData === true ) localStorage.setItem(keyDataProjects, JSON.stringify(projects));
        if ( status.loadingInitialData === true ) localStorage.setItem(keyLastProject, JSON.stringify(currentProject));
    }, [projects || currentProject])
}