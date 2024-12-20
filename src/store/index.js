import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
// import userReducer from './slices/userSlice';
// import skillsReducer from './slices/skillsSlice';
// import sessionReducer from './slices/sessionSlice';
// import messageReducer from './slices/messageSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // user: userReducer,
    // skills: skillsReducer,
    // sessions: sessionReducer,
    // messages: messageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});