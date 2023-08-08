// src/store/titleName/reducer.ts
import { ADD_TITLE, REMOVE_TITLE, TitleNameActionTypes } from './types';

interface TitleNameState {
    titleNames: string[]; // Use an array of titles
}

const initialState: TitleNameState = {
    titleNames: [],
};

const titleNameReducer = (state = initialState, action: TitleNameActionTypes): TitleNameState => {
    switch (action.type) {
        case ADD_TITLE:
            console.log(action.payload,state    )
            return {
                ...state,
                titleNames: [...state.titleNames, action.payload],
            };
        case REMOVE_TITLE:
            return {
                ...state,
                titleNames: state.titleNames.filter(title => title !== action.payload),
            };
        default:
            return state;
    }
};

export default titleNameReducer;
