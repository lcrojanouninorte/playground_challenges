import { IEnvironment } from '@environments/IEnvironment';


const apiHost = 'localhost:3000';
const apiUrl = `http://${apiHost}/api`;

export const environment: IEnvironment = {
  production: true,
  enableDebugTools: false,
  logLevel: 'info',
  apiHost,
  apiUrl,
};
