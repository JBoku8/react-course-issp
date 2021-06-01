import {
  ADD_NUMBER,
  RESET_NUMBER,
  SUBTRACT_NUMBER,
} from '../action-types/counter-types';

export const addNumberAction = (payload) => ({
  type: ADD_NUMBER,
  payload,
});

export const resetNumberAction = () => ({ type: RESET_NUMBER });
export const subtractNumberAction = (payload) => ({
  type: SUBTRACT_NUMBER,
  payload,
});
