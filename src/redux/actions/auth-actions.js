import { SET_AUTH_USER, SET_GUEST_USER } from '../action-types/auth-types';

export const setAuthUserAction = (payload) => ({
  type: SET_AUTH_USER,
  payload,
});

export const setGuestUserAction = () => ({
  type: SET_GUEST_USER,
});
