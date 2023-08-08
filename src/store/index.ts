// src/store/index.ts
import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { Persistor } from 'redux-persist/es/types'; // Import Persistor from redux-persist
import titleNameReducer from './titleName/reducer';
import persistConfig from './persistConfig';

export type RootState = ReturnType<typeof rootReducer>; // Define RootState type

export const rootReducer = combineReducers({
    titleName: titleNameReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor: Persistor = persistStore(store);
