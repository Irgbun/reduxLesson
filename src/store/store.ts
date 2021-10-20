import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counter'

// В компонентах стейт мутировать нельзя
// Redux стейт мутировать нельзя

// const reducer = (store: any, action: Action):any => {
//     return {
//         ...store,
//         counter: counterReducer(store.counter, action)
//     }
// }

const reducer = combineReducers({
    counter: counterReducer,
});

export const store = createStore(
    reducer,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__?.(),
)

// ReturnType - принимает тип функции и возвращает тип, который возвращает эта функция
// store.getState - делали ее console.log на лекции, эта функция которая возвроащает redux store
export type RootState = ReturnType<typeof store.getState>;
