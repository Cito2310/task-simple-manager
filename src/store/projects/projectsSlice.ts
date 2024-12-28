import { Project } from './../../../types/project';
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../../../types/task';

interface ProjectsState {
    projects: Project[];
    status: {
        existProjects: boolean;
        isLoading: boolean;
    }
}

const initialState: ProjectsState = {
    projects: [],
    status: {
        existProjects: false,
        isLoading: false,
    }
}

export const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {




        createProject: (state, action: { payload: {
            newTitle: string;
        } }) => {
            let copyState = structuredClone(state);


            copyState.projects.push({ id: uuidv4(), name: action.payload.newTitle, tasks: [] });

            if ( state.projects.length === 1 ) state.status.existProjects = true;

            state = copyState;
        },




        deleteProject: (state, action: { payload: {
            id: string;
        } }) => {
            let copyState = structuredClone(state);

            copyState.projects = copyState.projects.filter( project => project.id !== action.payload.id );

            if ( copyState.projects.length === 0 ) copyState.status.existProjects = false;

            state = copyState;
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
    createProject,
    deleteProject,
    editTasks

} = projectsSlice.actions;