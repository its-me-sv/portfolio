export interface Achievement {
  id: string;
  title: string;
  description: string;
  credential_link: string;
  verify_url: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "4b058240-1296-11ed-a3c3-d775c5e4f28b",
    title: "Kanitham 2021 - Math Modelling - Winner",
    description:
      "Kanitham (translates to maths in Tamil) is a National Symposium conducted every year by the Department of Mathematics from Dr.M.G.R University. It includes events like math modelling, quiz, etc. I won math modeling (Kanitham 2021) by presenting on the Sieve of Eratosthenes.",
    credential_link:
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657341718/portfolio/achievements/MGR_University_-_Math_Modelling_oj6b8l.jpg",
    verify_url: "null"
  },
  {
    id: "0333ee10-1297-11ed-a3c3-d775c5e4f28b",
    title: "AstraDB Buildathon - Month I - Winner",
    description:
      "Winner of the first month of AstraDB Buildathon conducted by DataStax.",
    credential_link:
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657341872/portfolio/achievements/round_1_kgh3fj.jpg",
    verify_url: "null"
  },
  {
    id: "69ed3b70-1297-11ed-a3c3-d775c5e4f28b",
    title: "AstraDB Buildathon - Month III - 1st runner up",
    description:
      "First runner-up of the third month of AstraDB Buildathon conducted by DataStax.",
    credential_link:
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657341872/portfolio/achievements/round_3_ukhovv.jpg",
    verify_url: "null"
  },
  {
    id: "9d98c570-1297-11ed-a3c3-d775c5e4f28b",
    title: "AstraDB Buildathon - Demo day - Winner",
    description:
      "Grand winner of the AstraDB Buildathon conducted by DataStax.",
    credential_link:
      "https://res.cloudinary.com/djeteilo6/image/upload/v1683472787/portfolio/achievements/DataStax_Hackathon_-_2022_Build-A-Thon_first-prize_rz08gf.jpg",
    verify_url: "null"
  },
  {
    id: "21432350-306d-11ed-b356-5d17a02705fd",
    title: "Code with GlobalShala 3.0 - 1st runner up",
    description:
      "First runner-up of Code with GlobalShala 3.0 conducted by GlobalShala.",
    credential_link:
      "https://res.cloudinary.com/djeteilo6/image/upload/v1662718816/portfolio/achievements/Code_with_Globalshala_-_First_Runner_Up_by03c3.png",
    verify_url: "null"
  },
  {
    id: "3b6bb400-d2d3-11ed-896c-3bdd1b6c2888",
    title: "Polkadot Hackathon - 1st runner up",
    description:
      "First runner-up in the Interfaces & Experiences category at the Polkadot Hackathon Global Series - Europe Edition.",
    credential_link:
      "https://res.cloudinary.com/djeteilo6/image/upload/v1680083224/portfolio/achievements/CERT_IE_2_Suraj_c8tmek.png",
    verify_url: "null"
  },
  {
    id: "09ec88a0-5956-11ee-a8b5-c70f896cee53",
    title: "Polkadot Hackathon - Winner",
    description:
      "Winner of the Interfaces & Experiences category at the Polkadot Hackathon Global Series - APAC Edition.",
    credential_link:
      "https://res.cloudinary.com/djeteilo6/image/upload/v1695393435/portfolio/achievements/Polkadot_-_APAC_Edition_achf0k.png",
    verify_url: "null"
  },
  {
    id: "35a29980-f4c4-11ee-af1f-75f39123a280",
    title: "Star Achiever",
    description:
      "Received the Star Achiever Award from my college, recognizing my excellence in winning multiple significant international hackathons, completing a project management internship, and obtaining certifications such as Apache Cassandra 3 Developer Associate from DataStax, alongside others from FreeCodeCamp and HackerRank.",
    credential_link:
      "https://res.cloudinary.com/djeteilo6/image/upload/v1712483240/portfolio/achievements/SVCE-Star-Achiever-Citation_qfujmv.jpg",
    verify_url: "null"
  }
].toReversed();
