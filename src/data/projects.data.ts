export interface Project {
  id: string;
  title: string;
  src_code_link: string;
  demo_link: string;
  gallery: Array<string>;
  description: string;
  tech_stack: Array<string>;
}

export const PROJECTS_1: Project[] = [
  {
    id: "900c92c0-d2da-11ed-b0a5-3183f48e9d68",
    title: "Subdot",
    src_code_link: "https://github.com/its-me-sv/subdot-frontend",
    demo_link: "https://subdot.netlify.app/",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1680605760/portfolio/projects/subdot/2_eccsqq.jpg",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1680605760/portfolio/projects/subdot/3_yixwzk.jpg",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1680605760/portfolio/projects/subdot/4_uwqhun.jpg",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1680605761/portfolio/projects/subdot/5_wstyqt.jpg",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1680605761/portfolio/projects/subdot/6_qkrk3i.jpg"
    ],
    description:
      "Subdot is a decentralized social media platform powered by Substrate and Subsocial that provides users with complete control over their data and content. By removing a central authority, the platform allows users to participate in decision-making, governance, and rewards for their contributions. Subdot is a safe and transparent environment where users can connect, share their views, and collaborate with one another. Its commitment to web3 technology ensures a more equitable and democratic social media platform that prioritizes the needs of its users.",
    tech_stack: [
      "AstraDB",
      "ExpressJS",
      "GraphQl",
      "JavaScript",
      "MongoDB",
      "NodeJS",
      "PolkadotJS",
      "ReactJS",
      "Subsocial",
      "TypeScript",
      "Vite"
    ]
  },
  {
    id: "138c1b90-133f-11ed-8623-c5fec4062501",
    title: "AstraDB Navigator",
    src_code_link: "https://github.com/its-me-sv/astra-db-navigator",
    demo_link: "https://astra-db-navigator.netlify.app/",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659537410/portfolio/projects/astra-db-navigator/1_vnmis1.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659537410/portfolio/projects/astra-db-navigator/2_zglhgw.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659537410/portfolio/projects/astra-db-navigator/3_e7m5ba.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659537410/portfolio/projects/astra-db-navigator/4_gdjiua.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659537410/portfolio/projects/astra-db-navigator/5_xzgyle.png"
    ],
    description:
      "DataStax Astra DB Navigator is a lightweight no-code environment that lets Astra DB users manage their databases and is available in four different languages (English, Italian, Spanish, and French). With just simple clicks, anyone new to Astra DB or databases can manage keyspaces, tables, types, indices, and rows without prior coding experience.",
    tech_stack: [
      "Astra DB",
      "Astra DevOPS API",
      "Axios",
      "GitHub Pages",
      "JavaScript",
      "Netlify",
      "Netlify functions",
      "React Context API",
      "ReactJS",
      "Stargate REST API reference",
      "Styled Components",
      "TypeScript"
    ]
  },
  {
    id: "50c8ca30-1349-11ed-8623-c5fec4062501",
    title: "Pirate Land",
    src_code_link: "https://github.com/its-me-sv/pirate-land",
    demo_link: "https://its-me-sv.github.io/pirate-land/",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659537184/portfolio/projects/pirate-land/1_g7wqnc.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659537184/portfolio/projects/pirate-land/2_bdlrr9.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659537185/portfolio/projects/pirate-land/3_ffxemv.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659537184/portfolio/projects/pirate-land/4_hejxl0.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659537184/portfolio/projects/pirate-land/5_pfqcn0.png"
    ],
    description:
      "Pirate Land is a real-time online multiplayer family game suitable for all ages — from kids to grandparents. The game features 2–8 players divided into two teams. Each team hides three versions of themselves on an island and tries to find the opposing team’s locations before being found. The game ends when one team discovers all opposing members’ positions.",
    tech_stack: [
      "Astra DB",
      "Axios",
      "ExpressJs",
      "GitHub Pages",
      "Heroku",
      "JSON Web Tokens",
      "JavaScript",
      "NodeJS",
      "React Context API",
      "ReactJS",
      "Socket.io",
      "Styled Components",
      "TypeScript"
    ]
  },
  {
    id: "58421a90-6ed5-11ed-a643-f150f197dd10",
    title: "Locatory",
    src_code_link: "https://github.com/jarusYajiv67/locatory",
    demo_link: "https://bit.ly/locatory-apk",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1669609620/portfolio/projects/locatory/1_la9tuv.jpg",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1669609620/portfolio/projects/locatory/2_wpaa2d.jpg",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1669609620/portfolio/projects/locatory/3_epvgiu.jpg"
    ],
    description:
      "Locatory was inspired by Google Maps and serves as a directory for exploring and favoriting nearby places. It’s especially useful for people relocating to new areas for work or study, allowing them to find, review, and contact local spots with directions and information.",
    tech_stack: [
      "Cassandra",
      "Expo",
      "Express.js",
      "GitHub",
      "Google Places Api",
      "JavaScript",
      "Node.js",
      "React Native",
      "Render Cloud",
      "TypeScript"
    ]
  },
  {
    id: "3eb91350-133e-11ed-8623-c5fec4062501",
    title: "Aneta",
    src_code_link: "https://github.com/its-me-sv/aneta",
    demo_link: "https://its-me-sv.github.io/aneta/",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659537270/portfolio/projects/aneta/1_o4hb2f.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659537270/portfolio/projects/aneta/2_hdyrct.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659537271/portfolio/projects/aneta/3_gtgnn8.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659537271/portfolio/projects/aneta/4_konl0i.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659537271/portfolio/projects/aneta/5_mrawuk.png"
    ],
    description:
      "Aneta (meaning ‘easy’ in Greek) is an online resources and project management tool for organisations transitioning to WFH. Managers can create organisations, manage employees, handle projects, remit salaries, and chat in real time. Employees can manage skills and request leave. Aneta streamlines remote team collaboration with all-in-one functionality.",
    tech_stack: [
      "Astra DB",
      "Axios",
      "ExpressJs",
      "GitHub Pages",
      "Heroku",
      "JSON Web Tokens",
      "JavaScript",
      "NodeJS",
      "React Context API",
      "ReactJS",
      "Socket.io",
      "Styled Components",
      "TypeScript"
    ]
  },
  {
    id: "d18fa1b0-1386-11ed-a8c8-6539cc663353",
    title: "Robo friends",
    src_code_link: "https://github.com/its-me-sv/profile-finder",
    demo_link: "https://its-me-sv.github.io/profile-finder/",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657425893/portfolio/projects/robofriends/Capture1_u2xfnx.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657425893/portfolio/projects/robofriends/Capture_htolww.png"
    ],
    description: "Online profile finding app mock.",
    tech_stack: ["ReactJS", "Redux", "Tachyons"]
  },
  {
    id: "adadaeb0-140b-11ed-a8c8-6539cc663353",
    title: "Sorting Visualizer",
    src_code_link: "https://github.com/its-me-sv/Sorting-Visualiser",
    demo_link: "https://its-me-sv.github.io/Sorting-Visualiser",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659573347/portfolio/projects/sorting_visualizer/1_mk1o0t.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659573347/portfolio/projects/sorting_visualizer/2_dw6ej9.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659573347/portfolio/projects/sorting_visualizer/3_dnsmo6.png"
    ],
    description:
      "This project helps you visualise various sorting algorithms including Selection Sort, Merge Sort, Bubble Sort, Quick Sort, Insertion Sort, and Shell Sort.",
    tech_stack: ["ReactJS"]
  },
  {
    id: "18352dd0-164b-11ed-8623-c5fec4062501",
    title: "Crypt Arithmetic Code Generator",
    src_code_link:
      "https://github.com/its-me-sv/crypt-arithmetic-code-generator",
    demo_link:
      "https://its-me-sv.github.io/crypt-arithmetic-code-generator/",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659874087/portfolio/projects/crypt-arithmetic/1_gegcbw.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659874088/portfolio/projects/crypt-arithmetic/2_rd2axt.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659874088/portfolio/projects/crypt-arithmetic/3_i0jvhy.png"
    ],
    description:
      "Crypt Arithmetic Code Generator can generate code (in 5 different languages) to solve any crypt arithmetic problem automatically.",
    tech_stack: [
      "ExpressJs",
      "Netlify",
      "NodeJs",
      "ReactJs",
      "TypeScript"
    ]
  },
  {
    id: "1f8e8480-164d-11ed-8623-c5fec4062501",
    title: "Meet Up",
    src_code_link: "https://github.com/its-me-sv/Meet-Up",
    demo_link: "https://bit.ly/meetUpApk",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659875320/portfolio/projects/meet-up/1_zypzm8.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659875320/portfolio/projects/meet-up/2_ldya5p.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659875320/portfolio/projects/meet-up/3_w6jidh.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659875320/portfolio/projects/meet-up/4_qyz39g.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659875320/portfolio/projects/meet-up/5_audgy3.png"
    ],
    description:
      "Meet Up is a mobile app built around shared interests, helping users discover and connect with like-minded people nearby.",
    tech_stack: [
      "Expo",
      "Express",
      "JavaScript",
      "MongoDB",
      "NodeJs",
      "React Native",
      "Redux",
      "Styled Components"
    ]
  }
];

export const PROJECTS_2: Project[] = [];

export const PROJECTS_3: Project[] = [];

export const PROJECTS_4: Project[] = [];

export const PROJECTS: Project[] = [...PROJECTS_1, ...PROJECTS_2, ...PROJECTS_3, ...PROJECTS_4];

export const projectsIds2: Array<string> = [
  '6d0eb580-1662-11ed-a3c3-d775c5e4f28b',
  '05b4bb50-1662-11ed-a3c3-d775c5e4f28b',
  'e6686c90-1663-11ed-a3c3-d775c5e4f28b',
  '20299f20-1665-11ed-a3c3-d775c5e4f28b',
  'a8821540-138c-11ed-a8c8-6539cc663353',
  '69f55b70-138c-11ed-a8c8-6539cc663353',
  '67dfe450-140d-11ed-a8c8-6539cc663353',
  '3c165e80-134a-11ed-8623-c5fec4062501',
  'd529a510-1349-11ed-8623-c5fec4062501',
];

export const projectsIds3: Array<string> = [
  '8b74d1f0-134a-11ed-8623-c5fec4062501',
  'eec0bc20-1385-11ed-a8c8-6539cc663353',
  '0fa7ed70-1348-11ed-8623-c5fec4062501',
  'efd42690-1346-11ed-8623-c5fec4062501',
  'a61b28f0-1661-11ed-a3c3-d775c5e4f28b',
  'c61c4d30-1348-11ed-8623-c5fec4062501',
  '7299c800-1347-11ed-8623-c5fec4062501',
  '4bf7ebb0-140e-11ed-a8c8-6539cc663353',
  '5a633570-1386-11ed-a8c8-6539cc663353',
];

export const projectsIds4: Array<string> = [
  '7985be40-1346-11ed-8623-c5fec4062501',
  'c24ecf00-138b-11ed-a8c8-6539cc663353',
  'afd68330-133c-11ed-8623-c5fec4062501',
  'a9e97140-133b-11ed-8623-c5fec4062501',
  '5d951d90-140c-11ed-a8c8-6539cc663353',
  '1d16def0-1346-11ed-8623-c5fec4062501',
  '903f1020-138a-11ed-a8c8-6539cc663353',
  '2de4e1b0-138b-11ed-a8c8-6539cc663353',
  '23666060-1340-11ed-8623-c5fec4062501'
];
