import React from 'react';
import { connect } from 'react-redux';

import { testAction } from '../store/actions/testAction';
import { getTestState } from '../store/selectors/test';

function App({testAction, testState}) {
  const clickHandler = () => testAction(Math.random() + ' test');

  return (
    <div className="App">
      <h1>{testState}</h1>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
}

const mapStateToProps = state => ({
  testState: getTestState(state)
});

const mapDispatchToProps = {
  testAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
