import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const rootReducer = combineReducers({})

const store = configureStore({ reducer: rootReducer })

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export type RootState = ReturnType<typeof rootReducer>
export default store
