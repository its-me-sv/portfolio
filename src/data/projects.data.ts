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

export const PROJECTS_2: Project[] = [
  {
    id: "d529a510-1349-11ed-8623-c5fec4062501",
    title: "Random Quote Generator",
    src_code_link: "https://github.com/its-me-sv/random-quote-generator",
    demo_link: "https://its-me-sv.github.io/random-quote-generator",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657351180/portfolio/projects/random_quote_generator/1_twrw8t.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657351180/portfolio/projects/random_quote_generator/2_rraqfl.png"
    ],
    description: "A simple web app that generates random and colorful quotes.",
    tech_stack: ["ReactJS"]
  },
  {
    id: "3c165e80-134a-11ed-8623-c5fec4062501",
    title: "Smart Tic Tac Toe",
    src_code_link: "https://github.com/its-me-sv/React-AI-Enabled-Tic-Tac-Toe",
    demo_link: "https://its-me-sv.github.io/React-AI-Enabled-Tic-Tac-Toe",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657351293/portfolio/projects/react_ai_enabled_tic_tac_toe/1_dzy6ek.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657351293/portfolio/projects/react_ai_enabled_tic_tac_toe/2_rodz2r.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657351293/portfolio/projects/react_ai_enabled_tic_tac_toe/3_pnhukz.png"
    ],
    description: "A one-player online Tic Tac Toe game with an intelligent computer opponent.",
    tech_stack: ["ReactJS"]
  },
  {
    id: "69f55b70-138c-11ed-a8c8-6539cc663353",
    title: "Survey Form",
    src_code_link: "https://github.com/its-me-sv/Survey_Form",
    demo_link: "https://its-me-sv.github.io/Survey_Form/",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657426055/portfolio/projects/survey_form/Capture_nnnqfy.png"
    ],
    description: "Responsive survey form to capture and analyze users’ interests.",
    tech_stack: ["CSS", "HTML", "JavaScript"]
  },
  {
    id: "a8821540-138c-11ed-a8c8-6539cc663353",
    title: "Technical Documentation Page",
    src_code_link: "https://github.com/its-me-sv/Technical_Documentation_Page",
    demo_link: "https://its-me-sv.github.io/Technical_Documentation_Page/",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657426137/portfolio/projects/technical_documentation_page/Capture_csrgbj.png"
    ],
    description: "A responsive documentation page designed for JavaScript reference and learning.",
    tech_stack: ["CSS", "HTML", "JavaScript"]
  },
  {
    id: "67dfe450-140d-11ed-a8c8-6539cc663353",
    title: "Todo Page",
    src_code_link: "https://github.com/its-me-sv/Todo_Page",
    demo_link: "https://its-me-sv.github.io/Todo_Page/",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657425991/portfolio/projects/todo_app/Capture_wo3krf.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657425992/portfolio/projects/todo_app/Capture1_pjwyeg.png"
    ],
    description: "A simple and responsive todo app to help manage daily tasks efficiently.",
    tech_stack: ["CSS", "HTML", "JavaScript"]
  },
  {
    id: "05b4bb50-1662-11ed-a3c3-d775c5e4f28b",
    title: "The Simon Game",
    src_code_link: "https://github.com/its-me-sv/The-Simon-Game",
    demo_link: "https://its-me-sv.github.io/The-Simon-Game/",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659883344/portfolio/projects/simon_game/1_jkdh2p.png"
    ],
    description: "A modern web version of the classic Simon memory game built to cure boredom.",
    tech_stack: ["React", "Redux", "Redux Thunk", "Styled Components"]
  },
  {
    id: "6d0eb580-1662-11ed-a3c3-d775c5e4f28b",
    title: "Tic Tac Toe v2",
    src_code_link: "https://github.com/its-me-sv/Tic-Tac-Toe-v2",
    demo_link: "https://its-me-sv.github.io/Tic-Tac-Toe-v2/",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659883472/portfolio/projects/tic-tac-toe-v2/1_cpkqsa.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659883473/portfolio/projects/tic-tac-toe-v2/2_nwyxkt.png"
    ],
    description: "An online Tic Tac Toe game featuring both multiplayer (P2P) and single-player modes.",
    tech_stack: ["React", "React Router", "Redux", "Redux Thunk", "Socket.IO", "Styled Components"]
  },
  {
    id: "e6686c90-1663-11ed-a3c3-d775c5e4f28b",
    title: "Wiki Viewer",
    src_code_link: "https://github.com/its-me-sv/wiki-viewer",
    demo_link: "https://its-me-sv.github.io/wiki-viewer/",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659885159/portfolio/projects/wiki-viewer/1_dyi90l.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659885159/portfolio/projects/wiki-viewer/2_jpxaju.png"
    ],
    description: "A simple app that fetches and displays Wikipedia articles for any given search text.",
    tech_stack: ["React", "Redux", "Redux Thunk", "Styled Components"]
  },
  {
    id: "20299f20-1665-11ed-a3c3-d775c5e4f28b",
    title: "Pomodoro Clock",
    src_code_link: "https://github.com/its-me-sv/React-Pomodoro-Clock",
    demo_link: "https://its-me-sv.github.io/React-Pomodoro-Clock/",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659885732/portfolio/projects/pomodoro-clock/1_ccytws.png"
    ],
    description: "An online Pomodoro timer with adjustable session and break durations to boost productivity.",
    tech_stack: ["React"]
  }
];

export const PROJECTS_3: Project[] = [
  {
    id: "efd42690-1346-11ed-8623-c5fec4062501",
    title: "Face And Eyes Detection",
    src_code_link: "https://github.com/its-me-sv/Face_And_Eyes_Detection",
    demo_link: "https://bit.ly/2K5MLi9",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657350699/portfolio/projects/face_eyes_detector/2_mb3tcy.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657350700/portfolio/projects/face_eyes_detector/1_legoq3.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657350701/portfolio/projects/face_eyes_detector/3_pnrbyy.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657350701/portfolio/projects/face_eyes_detector/4_iwumcc.png"
    ],
    description:
      "A standalone face and eyes detection desktop application built with OpenCV and Python.",
    tech_stack: ["OpenCV", "PyQT", "Python"]
  },
  {
    id: "7299c800-1347-11ed-8623-c5fec4062501",
    title: "Face Mask Detector",
    src_code_link: "https://github.com/its-me-sv/Face_Mask_Detector",
    demo_link:
      "https://github.com/its-me-sv/Face_Mask_Detector/blob/main/Mask_Detector.py",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657350424/portfolio/projects/face_mask_detector/Capture1_amzf9k.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657350424/portfolio/projects/face_mask_detector/Capture_ay2p3w.png"
    ],
    description:
      "Standalone face mask detector application for Windows. Input can be captured from webcam or file uploads.",
    tech_stack: [
      "Kaggle",
      "Matplotlib",
      "Numpy",
      "OpenCV",
      "PyQT",
      "Python",
      "Tensorflow"
    ]
  },
  {
    id: "0fa7ed70-1348-11ed-8623-c5fec4062501",
    title: "Face Recognition App",
    src_code_link:
      "https://github.com/its-me-sv/frontend-for-face-recognition-app",
    demo_link: "https://fullstack-face-reco-app.herokuapp.com",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657350886/portfolio/projects/face_recognition_web_app/1_t2tz4v.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657350888/portfolio/projects/face_recognition_web_app/2_youulz.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657350888/portfolio/projects/face_recognition_web_app/3_ixu7jo.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657350888/portfolio/projects/face_recognition_web_app/4_ilsjwb.png"
    ],
    description:
      "A face detection web app with authentication, image uploads, and face counting features.",
    tech_stack: [
      "ExpressJS",
      "JavaScript",
      "Knex",
      "NodeJS",
      "PostgreSQL",
      "ReactJS",
      "Tachyons",
      "bCrypt"
    ]
  },
  {
    id: "c61c4d30-1348-11ed-8623-c5fec4062501",
    title: "Gradient Generator",
    src_code_link: "https://github.com/its-me-sv/Gradient_Generator",
    demo_link: "https://its-me-sv.github.io/Gradient_Generator/",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657350525/portfolio/projects/gradient_generator/Capture_mps48p.png"
    ],
    description:
      "An online tool that lets you create custom gradients and copy their CSS code instantly.",
    tech_stack: ["CSS", "HTML", "JavaScript"]
  },
  {
    id: "8b74d1f0-134a-11ed-8623-c5fec4062501",
    title: "Online Calculator",
    src_code_link: "https://github.com/its-me-sv/React-Calculator",
    demo_link: "https://its-me-sv.github.io/React-Calculator/",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657351058/portfolio/projects/react_calculator/2_cjykrg.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657351058/portfolio/projects/react_calculator/Capture_efjkcz.png"
    ],
    description:
      "A sleek online calculator for performing basic arithmetic operations.",
    tech_stack: ["ReactJS"]
  },
  {
    id: "eec0bc20-1385-11ed-a8c8-6539cc663353",
    title: "Drum Machine",
    src_code_link: "https://github.com/its-me-sv/React-Drum-Machine",
    demo_link: "https://its-me-sv.github.io/React-Drum-Machine/",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657350979/portfolio/projects/react_drum_machine/1_tpqj4i.png"
    ],
    description:
      "A free online drum and piano soundboard built using React, perfect for quick jam sessions.",
    tech_stack: ["ReactJS"]
  },
  {
    id: "5a633570-1386-11ed-a8c8-6539cc663353",
    title: "Sudoku Solver",
    src_code_link: "https://github.com/its-me-sv/React-Sudoku-Solver",
    demo_link: "https://its-me-sv.github.io/React-Sudoku-Solver/",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657351396/portfolio/projects/react_sudoku_solver/1_laxic6.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657351396/portfolio/projects/react_sudoku_solver/2_dx4hna.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657351396/portfolio/projects/react_sudoku_solver/3_clgnoe.png"
    ],
    description:
      "An interactive Sudoku solver that visualizes the solving process step by step.",
    tech_stack: ["ReactJS"]
  },
  {
    id: "4bf7ebb0-140e-11ed-a8c8-6539cc663353",
    title: "Tribute Page",
    src_code_link: "https://github.com/its-me-sv/Tribute-Page",
    demo_link: "https://its-me-sv.github.io/Tribute-Page/",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657350222/portfolio/projects/tribute_page/Capture3_eksnu0.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657350222/portfolio/projects/tribute_page/Capture_q0yynq.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657350224/portfolio/projects/tribute_page/Capture2_ah4n92.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657350226/portfolio/projects/tribute_page/Capture1_fnokcl.png"
    ],
    description:
      "A responsive tribute webpage dedicated to Dr. A.P.J. Abdul Kalam.",
    tech_stack: ["CSS", "HTML"]
  },
  {
    id: "a61b28f0-1661-11ed-a3c3-d775c5e4f28b",
    title: "Local Weather App",
    src_code_link: "https://github.com/its-me-sv/ReactJS-Local-Weather-App",
    demo_link: "https://its-me-sv.github.io/ReactJS-Local-Weather-App/",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1659883233/portfolio/projects/local-weather-app/1_zsjuih.png"
    ],
    description:
      "A React-based web app that fetches and displays local weather details dynamically.",
    tech_stack: ["React", "Redux", "Redux Thunk"]
  }
];

export const PROJECTS_4: Project[] = [
  {
    id: "a9e97140-133b-11ed-8623-c5fec4062501",
    title: "Stone Paper Scissors",
    src_code_link: "https://github.com/its-me-sv/Stone_Paper_Scissors",
    demo_link: "https://github.com/its-me-sv/Stone_Paper_Scissors/blob/master/rps.exe",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657349877/portfolio/projects/%20Stone_Paper_Scissors/p1_kcjmc5.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657349877/portfolio/projects/%20Stone_Paper_Scissors/p2_m09p2l.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657349877/portfolio/projects/%20Stone_Paper_Scissors/p3_ewimbe.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657349877/portfolio/projects/%20Stone_Paper_Scissors/p4_nq1qo8.png"
    ],
    description:
      "A Python-based Stone, Paper, Scissors game where the player competes against the computer any number of times. Features a frameless GUI application built with PyQt.",
    tech_stack: ["PyQt", "Python"]
  },
  {
    id: "afd68330-133c-11ed-8623-c5fec4062501",
    title: "Youtube Video Downloader",
    src_code_link: "https://github.com/its-me-sv/Youtube_Video_Downloader",
    demo_link: "https://github.com/its-me-sv/Youtube_Video_Downloader/blob/main/YT_Downloader.exe",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657350075/portfolio/projects/%20Youtube_Video_Downloader/Capture1_rdsrnl.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657350075/portfolio/projects/%20Youtube_Video_Downloader/Capture2_txo15j.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657350075/portfolio/projects/%20Youtube_Video_Downloader/Capture3_z5real.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657350075/portfolio/projects/%20Youtube_Video_Downloader/Capture_j1e06k.png"
    ],
    description:
      "A standalone YouTube video downloader with both light and dark themes, built with Python and PyQt.",
    tech_stack: ["PyQt", "Python", "pytube"]
  },
  {
    id: "23666060-1340-11ed-8623-c5fec4062501",
    title: "Bank x64 x86",
    src_code_link: "https://github.com/its-me-sv/Bank_x64_x86",
    demo_link: "https://github.com/its-me-sv/Bank_x64_x86/blob/master/Bank_x86_x64.exe",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657349420/portfolio/projects/bank_x64_x86/1_ko2zv7.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657349420/portfolio/projects/bank_x64_x86/2_shwchr.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657349420/portfolio/projects/bank_x64_x86/3_t0fsps.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657349420/portfolio/projects/bank_x64_x86/4_xlse0e.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657349422/portfolio/projects/bank_x64_x86/13_hmuicp.png"
    ],
    description:
      "An advanced banking management project built with Python and PyQt, featuring SMS notifications for every transaction using the Fast2SMS API.",
    tech_stack: ["PyQT", "Python", "fast2sms", "hashlib"]
  },
  {
    id: "1d16def0-1346-11ed-8623-c5fec4062501",
    title: "Bank x86 x64",
    src_code_link: "https://github.com/its-me-sv/Bank_x86_x64",
    demo_link: "https://github.com/its-me-sv/Bank_x86_x64/blob/master/bank_x86_x64.exe",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657349749/portfolio/projects/bank_x86_x64/1_umqflq.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657349749/portfolio/projects/bank_x86_x64/2_knycvr.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657349749/portfolio/projects/bank_x86_x64/3_smiiwl.png"
    ],
    description:
      "A desktop banking project built with Python and PyQt, sending email notifications for each action performed by users.",
    tech_stack: ["PyQT", "Python", "smtplib", "socket"]
  },
  {
    id: "7985be40-1346-11ed-8623-c5fec4062501",
    title: "Calculator x86 x64",
    src_code_link: "https://github.com/its-me-sv/Calculator_x86_x64",
    demo_link: "https://github.com/its-me-sv/Calculator_x86_x64/blob/main/Calculator.exe",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657350018/portfolio/projects/Calculator_x86_x64/0_xwefor.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657350018/portfolio/projects/Calculator_x86_x64/1_ms8a3s.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657350018/portfolio/projects/Calculator_x86_x64/2_vyepd4.png"
    ],
    description:
      "A simple Python calculator built using PyQt, designed as a desktop GUI application.",
    tech_stack: ["PyQT", "Python"]
  },
  {
    id: "903f1020-138a-11ed-a8c8-6539cc663353",
    title: "Shop x86 x64",
    src_code_link: "https://github.com/its-me-sv/Shop_x86_x64",
    demo_link: "https://github.com/its-me-sv/Shop_x86_x64/blob/master/shop_x86_x64.py",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657349634/portfolio/projects/shop_x86_x64/1_jybax2.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657349634/portfolio/projects/shop_x86_x64/10_kttgrm.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657349635/portfolio/projects/shop_x86_x64/18_ch33pk.png"
    ],
    description:
      "A GUI-based shopping management application built with Python and PyQt. It features email notifications for all major user actions.",
    tech_stack: ["PyQt", "Python", "smtplib", "socket"]
  },
  {
    id: "2de4e1b0-138b-11ed-a8c8-6539cc663353",
    title: "Agent Simon",
    src_code_link: "https://github.com/its-me-sv/Simon_x86_x64",
    demo_link: "https://github.com/its-me-sv/Simon_x86_x64/blob/master/Simon_x86_x64.py",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657349481/portfolio/projects/simon_x86_x64/1_kp5vbm.png"
    ],
    description:
      "A command-line personal assistant for Windows that listens and responds to voice commands using speech recognition and text-to-speech.",
    tech_stack: [
      "Python",
      "email",
      "pyjokes",
      "pyttsx3",
      "smtplib",
      "socket",
      "speech_recogintion",
      "wikipedia"
    ]
  },
  {
    id: "c24ecf00-138b-11ed-a8c8-6539cc663353",
    title: "Sudoku Solver x86 x64",
    src_code_link: "https://github.com/its-me-sv/Sudoku_Solver_x86_x64",
    demo_link: "https://github.com/its-me-sv/Sudoku_Solver_x86_x64/blob/master/sudoku_solver.py",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657349959/portfolio/projects/Sudoku_Solver_x86_x64/1_zirvta.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657349960/portfolio/projects/Sudoku_Solver_x86_x64/4_iejht6.png"
    ],
    description:
      "A Windows desktop Sudoku solver that can instantly solve 9x9 puzzles with a clean PyQt interface.",
    tech_stack: ["PyQt", "Python"]
  },
  {
    id: "5d951d90-140c-11ed-a8c8-6539cc663353",
    title: "Tic Tac Toe x86 x64",
    src_code_link: "https://github.com/its-me-sv/Tic_Tac_Toe",
    demo_link: "https://github.com/its-me-sv/Tic_Tac_Toe/blob/master/Standalone_Executable.exe",
    gallery: [
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657349816/portfolio/projects/Tic_Tac_Toe/1_zddmak.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657349816/portfolio/projects/Tic_Tac_Toe/2_znohx7.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657349816/portfolio/projects/Tic_Tac_Toe/3_omwvyz.png",
      "https://res.cloudinary.com/djeteilo6/image/upload/v1657349816/portfolio/projects/Tic_Tac_Toe/4_bkkb6k.png"
    ],
    description:
      "A standalone Windows Tic Tac Toe game with a graphical user interface built using Python and PyQt.",
    tech_stack: ["PyQt", "Python"]
  }
];

export const PROJECTS: Project[] = [
  ...PROJECTS_1, 
  ...PROJECTS_2, 
  ...PROJECTS_3, 
  ...PROJECTS_4
];
