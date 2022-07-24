export interface Achievement {
  name: string;
  description: string;
  credUrl: string;
}

export const achievements: Array<Achievement> = [
  {
    name: 'Kanitham 2021 - Math Modelling - Winner',
    description: `Kanitham (translates to maths in tamil) is an National Symposium conducted every year by the Department
of Mathematics from Dr.M.G.R University. It includes events like math modelling, quiz and etc., I won math
modeling (Kanitham 2021) by presenting on “Sieve of Eratosthenes”`,
    credUrl: 'https://res.cloudinary.com/djeteilo6/image/upload/v1657341718/portfolio/achievements/MGR_University_-_Math_Modelling_oj6b8l.jpg',
  },
  {
    name: 'AstraDB Buildathon - Month I - Winner',
    description: 'Winner of the first month of AstraDB Buildathon conducated by DataStax',
    credUrl: 'https://res.cloudinary.com/djeteilo6/image/upload/v1657341872/portfolio/achievements/round_1_kgh3fj.jpg'
  },
  {
    name: 'AstraDB Buildathon - Month III - 1st runner up',
    description: '1st runner up of the third month of AstraDB Buildathon conducated by DataStax',
    credUrl: 'https://res.cloudinary.com/djeteilo6/image/upload/v1657341872/portfolio/achievements/round_3_ukhovv.jpg'
  },
  {
    name: 'AstraDB Buildathon - Demo day - Winner',
    description: 'Grand winner of the AstraDB Buildathon conducated by DataStax',
    credUrl: 'https://res.cloudinary.com/djeteilo6/image/upload/v1657341871/portfolio/achievements/demo_day_ll1zeh.jpg'
  },
];
