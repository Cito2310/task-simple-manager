import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { Project, Task } from '../../../types';

interface ProjectsState {
    projects: Project[];
    currentProject: Project | null;
    status: {
        existProjects: boolean;
        isLoading: boolean;
        loadingInitialData: boolean;
    }
}

const initialState: ProjectsState = {
    projects: [],
    currentProject: null,
    status: {
        existProjects: false,
        isLoading: false,
        loadingInitialData: false,
    }
}

export const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        setCurrentProject: (state, action: {payload: string}) => {
            const findProject = state.projects.find( project => project.id === action.payload );
            state.currentProject = findProject || null;
        },


        loadingInitialData: (state, action: {payload: {projects: Project[], currentProject: Project | null}}) => {
            state.projects = action.payload.projects;
            state.currentProject = action.payload.currentProject;
            state.status.loadingInitialData = true;
            if ( action.payload.projects.length > 0 ) state.status.existProjects = true;
        },


        createProject: (state, action: { payload: {
            newTitle: string;
        } }) => {
            state.projects.push({ id: uuidv4(), name: action.payload.newTitle, tasks: [] });

            if ( state.projects.length === 1 ) state.status.existProjects = true;
        },


        deleteProject: (state, action: { payload: {
            id: string;
        } }) => {
            state.projects = state.projects.filter( project => project.id !== action.payload.id );

            if ( state.projects.length === 0 ) state.status.existProjects = false;
        },


        editTasks: (state, action: { payload: {
            idProject: string;
            tasks: Task[];
        } }) => {
            const projectSelectedIndex = state.projects.findIndex( 
                project => project.id === action.payload.idProject
            );

            state.currentProject!.tasks = action.payload.tasks;
            state.projects[projectSelectedIndex].tasks = action.payload.tasks;
        },


        editTaskWithId: (state, action: { payload: {
            idProject: string;
            idTask: string;
            newTask: Task;
        } }) => {
            let projectSelect = state.projects.find( project => project.id === action.payload.idProject );

            if (projectSelect) {
                const indexTask = projectSelect.tasks.findIndex( task => task.id === action.payload.idTask );
                projectSelect.tasks[indexTask] = action.payload.newTask;
            }

            state.currentProject = projectSelect || null;
        }
    }

})


export const {
    loadingInitialData,
    createProject,
    deleteProject,
    editTasks,
    setCurrentProject,
    editTaskWithId,

} = projectsSlice.actions;