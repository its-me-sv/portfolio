export interface Stat {
  name: string;
  url: string;
}

export interface StatObject {
  [key: string]: string;
  // 'Likes'?: string;
  // 'Comments'?: string;
  // 'Shares'?: string;
  // 'Appreciations'?: string;
  // 'Total views'?: string;
  // 'Last view'?: string;
  // 'Prime time'?: string;
  // 'Total users'?: string;
  // 'Currently active'?: string;
  // 'Code visits'?: string;
  // 'Project launches'?: string;
  // 'Total session time'?: string;
  // 'Average session time'?: string;
  // 'Average views per day'?: string;
  // 'Average new users per day'?: string;
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
