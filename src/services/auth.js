import { loginUrl, registerUrl } from './service.helpers';
import { removeValue } from '../utils/localStorage';
import { AUTH_TOKEN } from '../utils/constants';

export const login = async (credentials) => {
  try {
    const response = await fetch(loginUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return await response.json();
  } catch (error) {
    console.group('LOGIN');
    console.error('[login] error');
    console.trace(error);
    console.groupEnd('LOGIN');
  }
};

export const register = async (credentials) => {
  try {
    const response = await fetch(registerUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return await response.json();
  } catch (error) {
    console.group('Register');
    console.error('[Register] error');
    console.trace(error);
    console.groupEnd('Register');
  }
};

export const logOut = async () => {
  try {
    removeValue(AUTH_TOKEN);
  } catch (error) {}
};
