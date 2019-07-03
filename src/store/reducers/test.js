import { TEST_CONSTANT } from '../constants';

const initialState = 'click to test';

export default function test(state = initialState, action = {}) {
  if (action.type === TEST_CONSTANT) {
    return action.value;
  }

  return state;
}