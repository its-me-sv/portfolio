import { API_URL } from "../utils/constants.util";

export interface Stat {
  name: string;
  url: string;
}

export interface StatObject {
  [key: string]: string;
}

export const stats: Array<Stat> = [
  {
    name: 'General', 
    url: `${API_URL}/api/stats/general`
  },
  {
    name: 'User',
    url: `${API_URL}/api/stats/users`
  },
  {
    name: 'Interactions',
    url: `${API_URL}/api/stats/interactions`
  }
];
