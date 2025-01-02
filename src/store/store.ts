import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import { projectsSlice } from './projects/projectsSlice';
import { modalSlice } from './projects/modalSlice';

export const store = configureStore({
    reducer: {
        projects: projectsSlice.reducer,
        modal: modalSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;