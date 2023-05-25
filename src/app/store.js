import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { educationApi } from '../service/educationApis'
import { authApis } from '../service/authApis'
import loginReducer from "../features/LogIn/loginSlice"
import snackbarReducer from "../features/SnackBar/SnackBar"
import educationReducer from "../features/educations/educationSlice"


export const store = configureStore({
  reducer: {
    snackBar: snackbarReducer,
    login: loginReducer,
    education: educationReducer,
    [educationApi.reducerPath]: educationApi.reducer,
    [authApis.reducerPath]: authApis.reducer,

  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(educationApi.middleware, authApis.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)