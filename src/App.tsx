import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import type { Store } from './store'


interface ReduxStateProps {
  value: number;
}

interface ReduxDispatchProps {
  increase: () => void;
}

class App extends React.Component<ReduxStateProps & ReduxDispatchProps> {
  render() {
    return (
      <div>
        <p>Значение: {this.props.value}</p>
        <button onClick={ this.props.increase }>Увеличить меня</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxState: Store):ReduxStateProps => {
  return {
    value: reduxState.value,
  }
}

const mapDispatchToProps = (dispatch: any): ReduxDispatchProps => {
  return {
    increase: () => dispatch({ type: 'increase' })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)