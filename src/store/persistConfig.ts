// src/store/persistConfig.ts
import storage from 'redux-persist/lib/storage';
import { PersistConfig } from 'redux-persist/es/types'; // Import PersistConfig from redux-persist

import { RootState } from './'; // Import RootState from your reducer

const persistConfig: PersistConfig<RootState> = {
    key: 'root',
    storage,
};

export default persistConfig;
