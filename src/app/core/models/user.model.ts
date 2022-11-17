import { Credentials } from './credentials.model';

export interface User {
  name: String;
  credentials: Credentials;
  token?: String;
  role: String;
}
