import { doGet } from './_helpers';

//export const sendMagicLink = email => doGet(`api/magic-link/${email}`);
export const verifyToken = token => doGet(`src/lamda/verify/${token}`);
export const authenticate = () => doGet(`src/lamda/authenticate`);
export const doLogout = () => doGet(`src/lamda/logout`);
