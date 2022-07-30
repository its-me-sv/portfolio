import { StatObject } from "../../data/stats.data";

const general: StatObject = {
  'Total views': '32.6k',
  'Average views per day': '2.6k',
  'Total session time': '4d 12h',
  'Average session time': '12m',
  'Last view': '1m ago',
  'Prime time': '4pm'
};

const user: StatObject = {
  'Total users': '32.6k',
  'Currently active': '2.6k',
  'Average new users per day': '20'
};

const interactions: StatObject = {
  'Likes': '32.6k',
  'Comments': '2.6k',
  'Shares': '20',
  'Code visits': '12m',
  'Project launches': '12m',
  'Appreciations': '12m'
};

export const statsTempData: {[key: string]: StatObject} = {
  '/get/general': general,
  '/get/url': user,
  '/get/interactions': interactions
};
