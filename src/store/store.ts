import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counter'

// В компонентах стейт мутировать нельзя
// Redux стейт мутировать нельзя


// принимает текущее store, возвращает обновленный
// { type: 'increase' }

// const reducer = (store: any, action: Action):any => {
//     return {
//         ...store, 
//         counter: counterReducer(store.counter, action)
//     }
// }


const reducer = combineReducers({
    counter: counterReducer,
})


export const store = createStore(
    reducer, 
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )