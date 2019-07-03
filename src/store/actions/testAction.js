import { TEST_CONSTANT } from '../constants';

export function testAction(value) {
  return {
    type: TEST_CONSTANT,
    value
  };
}