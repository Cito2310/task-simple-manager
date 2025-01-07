import { createSlice } from '@reduxjs/toolkit';
import { Task } from '../../../types';

interface GeneralState {
    selectedTask: Task | null;
    status: {
        blockKeypress: boolean;
    }
}

const initialState: GeneralState = {
    selectedTask: null,
    status: {
        blockKeypress: false,
    }
}

export const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {
        turnBlockKeypress: (state) => {
            state.status.blockKeypress = !state.status.blockKeypress
        },

        setSelectedTask: (state, action: {payload: Task}) => {
            state.selectedTask = action.payload;
        },
    }

})


export const {
    setSelectedTask,
    turnBlockKeypress,

} = generalSlice.actions;