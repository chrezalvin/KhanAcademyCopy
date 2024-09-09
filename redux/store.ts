import { configureStore } from "@reduxjs/toolkit";

import isDarkConnector from "./states/isDark";

export const store = configureStore({
    reducer: {
        isDark: isDarkConnector
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppStore = typeof store;