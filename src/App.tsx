import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import type { RootState } from './store';
import { COUNTER_ACTIONS } from './store/counter';


interface ReduxStateProps {
  myValue: number;
}

interface ReduxDispatchProps {
  increaseValue: () => void;
  resetValue: () => void;
  increaseValueOnValue: (oncreaseOn: number) => void;
}

class AppBase extends React.Component<ReduxStateProps & ReduxDispatchProps> {
  render() {
    return (
      <div>
        <p>Значение: {this.props.myValue}</p>
        <button onClick={this.props.increaseValue}>Увеличить меня</button>
        <button onClick={this.props.resetValue}>Сбросить счетчик</button>
        <button onClick={() => this.props.increaseValueOnValue(3)}>Увеличить меня на 3</button>
        <button onClick={() => this.props.increaseValueOnValue(10)}>Увеличить меня на 10</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxState: RootState):ReduxStateProps => {
  return {
    myValue: reduxState.counter.value,
  };
}

const mapDispatchToProps = (dispatch: any): ReduxDispatchProps => {
  return {
    increaseValue: () => dispatch({ type: COUNTER_ACTIONS.INCREASE }),
    increaseValueOnValue: (payload: number) => dispatch({ type: COUNTER_ACTIONS.INCREASE_ON_VALUE, payload }),
    resetValue: () => dispatch({ type: COUNTER_ACTIONS.RESET }),
  }
}


export const App = connect(mapStateToProps, mapDispatchToProps)(AppBase)
