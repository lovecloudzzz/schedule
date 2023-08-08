// src/store/titleName/actions.ts
import { ADD_TITLE, REMOVE_TITLE } from './types';

export const addTitle = (titleName: string) => ({
    type: ADD_TITLE,
    payload: titleName,
});

export const removeTitle = (titleName: string) => ({
    type: REMOVE_TITLE,
    payload: titleName,
});
