import Router from 'react';
import { doLogout } from '../_rest-api/index';

export const logout = async () => {
  await doLogout();
  Router.push('/login');
};
