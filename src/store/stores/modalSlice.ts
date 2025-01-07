import { createSlice } from '@reduxjs/toolkit';
import { Modal } from '../../../types';

interface ModalState {
    currentModal: Modal
}

const initialState: ModalState = {
    currentModal: "none"
}

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        changeModal: (state, action: {payload: Modal}) => {
            state.currentModal = action.payload;
        },

        exitModal: (state, action) => {
            state.currentModal = "none";
        }
    }

})


export const {
    changeModal,
    exitModal
} = modalSlice.actions;