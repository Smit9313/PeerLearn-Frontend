import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default: localStorage for web
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
// import skillsReducer from './slices/skillsSlice';
// import sessionReducer from './slices/sessionSlice';
// import messageReducer from './slices/messageSlice';

// Persist configuration for the auth slice
const authPersistConfig = {
  key: 'auth',
  storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    user: userReducer,
    // skills: skillsReducer,
    // sessions: sessionReducer,
    // messages: messageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Persistor for the store
export const persistor = persistStore(store);
