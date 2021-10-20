import { Action,  } from 'redux';
import { COUNTER_ACTIONS } from './constants';

// В компонентах стейт мутировать нельзя
// Redux стейт мутировать нельзя

interface CounterStore {
    value: number;
}

const INITIAL_STATE: CounterStore = { value: 0 };

// reducer принимает текущйе store и action, возвращает обновленный стора в зависимости от того что за action произошел
export const counterReducer = (
    store = INITIAL_STATE,
    // Omit принимает тип объект / enum и возвращает новый тип без указанных свойств
    // т.е. в данном случаем мы удаляем свойство INCREASE_ON_VALUE, и типизируем отдельно, т.к. у него есть Payload
    action: Action<Omit<COUNTER_ACTIONS, 'INCREASE_ON_VALUE'>> & { type: COUNTER_ACTIONS.INCREASE_ON_VALUE; payload: number },
): CounterStore => {
    switch (action.type) {
        case COUNTER_ACTIONS.INCREASE: {
            return { ...store, value: store.value + 1 };
        }

        case COUNTER_ACTIONS.INCREASE_ON_VALUE: {
            const { payload } = action;
            return { ...store, value: store.value + payload };
        }

        case COUNTER_ACTIONS.RESET: {
            return { ...store, value: 0 };
        }

        default:
            return store;
    }
}
