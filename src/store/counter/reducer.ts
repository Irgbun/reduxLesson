import { Action } from 'redux';

// В компонентах стейт мутировать нельзя
// Redux стейт мутировать нельзя




const INITIAL_STATE = { value: 0 }

export type Store = typeof INITIAL_STATE

// принимает текущее store, возвращает обновленный
// { type: 'increase' }

export const counterReducer = (store = INITIAL_STATE, action: Action): Store => {
    if(action.type === 'increase') {
        return { ...store, value: (store?.value ?? 0) + 1 }
    }
    return store;
}