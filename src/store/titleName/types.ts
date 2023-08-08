// src/store/titleName/types.ts
export const ADD_TITLE = 'ADD_TITLE';
export const REMOVE_TITLE = 'REMOVE_TITLE';

export interface AddTitleAction {
    type: typeof ADD_TITLE;
    payload: string;
}

export interface RemoveTitleAction {
    type: typeof REMOVE_TITLE;
    payload: string; // Payload will be the title to remove
}

export type TitleNameActionTypes = AddTitleAction | RemoveTitleAction;
