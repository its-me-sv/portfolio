export interface Stat {
  name: string;
  url: string;
}

export const stats: Array<Stat> = [
  {
    name: 'General', 
    url: '/get/general'
  },
  {
    name: 'User',
    url: '/get/url'
  },
  {
    name: 'Interactions',
    url: '/get/interactions'
  }
];
