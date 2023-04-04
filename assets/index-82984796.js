import{s as n,F as a,u as p,j as i,b as t,o as u,a as h,r as g}from"./index-8adbf271.js";const f=n.div`
  display: grid;
  grid-template-rows: 8fr;
  overflow: auto;
`,y=n.div`
  padding: 1.4% 0%;
  padding-left: auto;
  padding-right: auto;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 3rem;
  place-items: center;
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 2.1rem;
    padding: 7% 0%;
  }
`,b=n.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 42vw;
  height: 21rem;
  gap: 0.42rem;
  padding: 0.42% 1.6%;
  border-radius: 0.14rem;
  animation: ${a} 1s;
  ${e=>e.theme.boxShadowNoHover}
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    width: 84vw;
    height: 100%;
    gap: 1rem;
    padding: 2%;
  }
`,v=n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,w=n.span`
  font-family: ${e=>e.theme.fontFamily};
  font-size: 1.4rem;
  opacity: 0.9;
  animation: ${a} 1s;
  color: ${e=>e.theme.fontColor};
`,k=n.span`
  font-family: ${e=>e.theme.fontFamily};
  font-size: 1.2rem;
  opacity: 0.9;
  animation: ${a} 1s;
  color: ${e=>e.theme.fontColor};
`,x=n.span`
  font-family: ${e=>e.theme.fontFamily};
  font-size: 1.2rem;
  opacity: 0.9;
  animation: ${a} 1s;
  color: ${e=>e.theme.fontColor};
`,S=n.div`
  font-family: ${e=>e.theme.fontFamily};
  font-size: 1.2rem;
  max-height: 11rem;
  overflow: auto;
  color: ${e=>e.theme.fontColor};
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    /* max-height: unset; */
  }
`,D=n.span`
  font-family: ${e=>e.theme.fontFamily};
  font-size: 1rem;
  opacity: 0.9;
  max-height: 2.8rem;
  overflow: auto;
  animation: ${a} 1s;
  color: ${e=>e.theme.fontColor};
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    max-height: unset;
  }
`,M=[{title:"Project Manager",company:"GlobalShala",type:["Internship","Internado","Praktikum","インターンシップ","Интернатура"],time:"Oct 2022 - Nov 2022 (2 mos)",description:["I was in charge of holding the group accountable for meeting deadlines and ensuring project deliverables were met. I worked on creating the Project Charter and the Gantt Chart. Analyzed the project's risk and created a risk matrix. We were a six-person team tasked with creating a comprehensive project plan for Saint Louis University's SuperheroU competition","Estaba a cargo de responsabilizar al grupo por cumplir con los plazos y garantizar que se cumplieran los entregables del proyecto. Trabajé en la creación de la Carta del Proyecto y el Diagrama de Gantt. Analicé el riesgo del proyecto y elaboré una matriz de riesgo. Éramos un equipo de seis personas encargado de crear un plan de proyecto integral para la competencia SuperheroU de la Universidad de Saint Louis.","Ich war dafür verantwortlich, die Gruppe für die Einhaltung von Fristen verantwortlich zu machen und sicherzustellen, dass die Projektergebnisse eingehalten wurden. Ich arbeitete an der Erstellung des Projektauftrags und des Gantt-Diagramms. Analysierte das Risiko des Projekts und erstellte eine Risikomatrix. Wir waren ein sechsköpfiges Team, das die Aufgabe hatte, einen umfassenden Projektplan für den SuperheroU-Wettbewerb der Saint Louis University zu erstellen","私は、締め切りを守り、プロジェクトの成果物を確実に達成する責任をグループに負わせることを担当していました。プロジェクト憲章とガントチャートの作成に取り組みました。プロジェクトのリスクを分析し、リスク マトリックスを作成しました。私たちは、セントルイス大学の SuperheroU コンペティションの包括的なプロジェクト計画を作成する任務を負った 6 人のチームでした。","Я отвечал за то, чтобы группа отвечала за соблюдение сроков и обеспечение результатов проекта. Я работал над созданием Устава проекта и диаграммы Ганта. Проанализированы риски проекта и создана матрица рисков. Мы были командой из шести человек, которой было поручено разработать комплексный план проекта для конкурса SuperheroU Университета Сент-Луиса."],skills:["Project Management","Microsoft Excel","Leadership","Risk Analysis","Time Management"]},{title:"Full Stack Developer",company:"Exposys Data Labs",type:["Internship","Internado","Praktikum","インターンシップ","Интернатура"],time:"Nov 2021 - Dec 2021 (2 mos)",description:[`During the course of this internship, I built a full-stack cross-platform mobile app called Meet Up, an app based on common interests that allows people with similar interests to send a friend notification and chat with them. The app was built from scratch and has three custom servers. One is an image server (acts as a CDN), and the remaining two are for handling socket connections and CRUD operations.

The frontend was built using React Native and the servers were built using Node.JS along with ExpressJS and Socket.IO. MongoDB is the primary database and operations were carried out on it using the Mongoose library. The source code and the apk can be found in https://github.com/its-me-sv/Meet-Up`,`Durante el transcurso de esta pasantía, creé una aplicación móvil multiplataforma de pila completa llamada Meet Up, una aplicación basada en intereses comunes que permite a las personas con intereses similares enviar una notificación a un amigo y chatear con ellos. La aplicación se creó desde cero y tiene tres servidores personalizados. Uno es un servidor de imágenes (actúa como un CDN) y los dos restantes son para manejar conexiones de socket y operaciones CRUD.

La interfaz se creó con React Native y los servidores se crearon con Node.JS junto con ExpressJS y Socket.IO. MongoDB es la base de datos principal y las operaciones se llevaron a cabo utilizando la biblioteca Mongoose. El código fuente y la aplicación se pueden encontrar en https://github.com/its-me-sv/Meet-Up`,`Im Laufe dieses Praktikums habe ich eine plattformübergreifende mobile Full-Stack-App namens Meet Up entwickelt, eine App, die auf gemeinsamen Interessen basiert und es Menschen mit ähnlichen Interessen ermöglicht, eine Freundschaftsbenachrichtigung zu senden und mit ihnen zu chatten. Die App wurde von Grund auf neu erstellt und verfügt über drei benutzerdefinierte Server. Einer ist ein Image-Server (agiert als CDN), und die verbleibenden zwei dienen der Handhabung von Socket-Verbindungen und CRUD-Vorgängen.

Das Frontend wurde mit React Native erstellt und die Server wurden mit Node.JS zusammen mit ExpressJS und Socket.IO erstellt. MongoDB ist die primäre Datenbank und Operationen wurden mit der Mongoose-Bibliothek ausgeführt. Den Quellcode und die apk finden Sie unter https://github.com/its-me-sv/Meet-Up`,`このインターンシップの過程で、Meet Up と呼ばれるフルスタックのクロスプラットフォーム モバイル アプリを作成しました。これは、共通の興味に基づくアプリで、同じような興味を持つ人々が友達通知を送信してチャットできるようにします。アプリはゼロから構築され、3 つのカスタム サーバーがあります。 1 つはイメージ サーバー (CDN として機能) で、残りの 2 つはソケット接続と CRUD 操作を処理するためのものです。

フロントエンドは React Native を使用して構築され、サーバーは Node.JS と ExpressJS および Socket.IO を使用して構築されました。 MongoDB はプライマリ データベースであり、操作は Mongoose ライブラリを使用して実行されました。ソースコードと apk は https://github.com/its-me-sv/Meet-Up にあります。`,`В ходе этой стажировки я создал полнофункциональное кроссплатформенное мобильное приложение под названием Meet Up, приложение, основанное на общих интересах, которое позволяет людям со схожими интересами отправлять уведомления друзьям и общаться с ними. Приложение было создано с нуля и имеет три пользовательских сервера. Один из них является сервером изображений (действует как CDN), а остальные два предназначены для обработки соединений через сокеты и операций CRUD.

Интерфейс был создан с использованием React Native, а серверы — с использованием Node.JS, ExpressJS и Socket.IO. MongoDB является основной базой данных, и операции с ней проводились с использованием библиотеки Mongoose. Исходный код и apk можно найти на https://github.com/its-me-sv/Meet-Up.`],skills:["MongoDB","Node.js","Express.js","Socket.io","React Native"]}],C=({title:e,time:r,company:s,type:l,description:d,skills:c})=>{const{language:o,isDark:m}=p();return i(b,{children:[i(v,{dark:m,children:[t(w,{children:e}),t(k,{children:r})]}),i(x,{children:[s," | ",l[+o]]}),t(S,{children:d[+o]}),i(D,{children:[u.skills[+o],": ",c.join(", ")]})]})},U=()=>t(y,{children:M.map(e=>t(C,{...e},e.time))}),z=()=>{const{setMenu:e}=h();return g.useEffect(()=>e(4),[]),t(f,{children:t(U,{})})};export{z as default};
