import { Project } from './../../../types/project';
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../../../types/task';

interface ProjectsState {
    projects: Project[];
    status: {
        existProjects: boolean;
        isLoading: boolean;
        loadingInitialData: boolean;
    }
}

const initialState: ProjectsState = {
    projects: [],
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




        loadingInitialData: (state, action: {payload: Project[]}) => {
            state.projects = action.payload;
            state.status.loadingInitialData = true;
            if ( action.payload.length > 0 ) state.status.existProjects = true;
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

            state.projects[projectSelectedIndex].tasks = action.payload.tasks;
        }

    }

})


export const {
    loadingInitialData,
    createProject,
    deleteProject,
    editTasks

} = projectsSlice.actions;