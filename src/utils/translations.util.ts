import {
  aboutMeEnglish, intrestAndHobbiesEnglish,
  aboutMeSpanish, intrestAndHobbiesSpanish,
  aboutMeGerman, intrestAndHobbiesGerman,
  aboutMeJapanese, intrestAndHobbiesJapanese,
  aboutMeArabic, intrestAndHobbiesArabic
} from '../data/about-me.data';

export const loaderTranslations = {
  info: [
    "Connecting to the back-end server. This may take a few moments, and yes, this site is full stack.",
    "Conexión al servidor de fondo. Esto puede tomar unos minutos, y sí, este sitio está lleno.",
    "Verbindung zum Back-End-Server herstellen. Dies kann einige Augenblicke dauern, und ja, diese Seite ist voll.",
    "バックエンド サーバーに接続しています。これには少し時間がかかる場合があります。はい、このサイトは完全なスタックです。",
    "الاتصال بالخادم الخلفي. قد يستغرق هذا بضع لحظات ، ونعم ، هذا الموقع مكدس بالكامل."
  ]
};

export const toastTranslations = {
  fstInf: [
    "Feel free to change the language and theme of the site",
    "Siéntase libre de cambiar el idioma y el tema del sitio",
    "Fühlen Sie sich frei, die Sprache und das Thema der Website zu ändern",
    "サイトの言語とテーマを自由に変更してください",
    "لا تتردد في تغيير لغة وموضوع الموقع"
  ],
  thmTgl: [
    "Theme toggled", "Tema alternado",
    "Thema umgeschaltet", "テーマの切り替え",
    "تم تبديل الموضوع"
  ],
  langChg: [
    "Site language changed to English",
    "Idioma del sitio cambiado a español",
    "Seitensprache auf Deutsch geändert",
    "サイトの言語が日本語に変更されました",
    "تغيرت لغة الموقع إلى العربية"
  ]
};

export const menuTranslations = {
  home: ["home", "hogar", "heimat", "家", "الصفحة الرئيسية"],
  aboutMe: ["about me", "sobre mí", "über mich", "私について", "عني"],
  profiles: ["profiles", "perfiles", "profile", "プロファイル", "مظهر"],
  transcript: ["transcript", "transcripción", "abschrift", "トランスクリプト", "نسخة طبق الأصل"],
  experiences: ["experiences", "experiencias", "erfahrungen", "経験", "خبرة"],
  projects: ["projects", "proyectos", "projekte", "プロジェクト", "المشاريع"],
  achievements: ["achievements", "logros", "erfolge", "実績", "الإنجازات"],
  blogs: ["blogs", "blogs", "blogs", "ブログ", "المدونات"],
  quotes: ["quotes", "cotizaciones", "zitate", "引用符", "يقتبس"],
  stats: ["stats", "estadísticas", "statistiken", "統計", "احصائيات"],
};

export const transcriptMenuTranslations = {
  certificates: ['Certificates', 'Certificados', 'Zertifikate', '証明書', 'الشهادات'],
  badges: ['Badges', 'Insignias', 'Abzeichen', 'バッジ', 'شارات'],
  skills: ['Skills', 'Habilidades', 'Fähigkeiten', 'スキル', 'مهارات']
};

export const footerTranslations = {
  madeWidth: ["made with", "hecho con", "gemacht mit", "で作った", "مصنوع من"],
  by: ["by", "por", "durch", "に", "بواسطة"]
};

export const homePageTranslations = {
  student: ['student', 'alumno', 'schüler', '学生', 'طالب علم'],
  resident: ['resident', 'residente', 'bewohner', '居住者', 'مقيم'],
  at: ['at', 'a', 'bei', 'で', 'في'],
  'of': ['of', 'de', 'von', 'の', 'من'],
  since: ['Since 2002', 'Desde 2002', 'Seit 2002', '2002 年以降', 'منذ عام 2002'],
  fsd: [
    "Full Stack Developer", "Desarrollador de pila completa", 
    "Full-Stack-Entwickler", "フルスタック開発者",
    "مطور كامل المكدس"
  ]
};

export const aboutPageTranslations = {
  brief: ['Brief', 'Breve', 'Knapp', '簡単に', 'مختصر'],
  iah: [
    'Interests and Hobbies', 'Intereses y hobbies', 
    'Interessen und Hobbys', '興味と趣味',
    'الاهتمامات والهوايات'
  ],
  edu: ['Education', 'Educación', 'Ausbildung', '教育', 'تعليم'],
  langs: ['Languages', 'Idiomas', 'Sprachen', '言語', 'اللغات'],
  briefContent: [
    aboutMeEnglish, aboutMeSpanish, aboutMeGerman, 
    aboutMeJapanese, aboutMeArabic
  ],
  iahContent: [
    intrestAndHobbiesEnglish, intrestAndHobbiesSpanish,
    intrestAndHobbiesGerman, intrestAndHobbiesJapanese,
    intrestAndHobbiesArabic
  ],
  ps: [
    'Pre School', 'Preescolar', 'Vorschule', 
    '未就学', 'ما قبل المدرسة'
  ],
  hs: [
    'High School', 'Escuela secundaria', 
    'Weiterführende Schule', '高校', 
    'المدرسة الثانوية'
  ],
  clg: ['College', 'Colega', 'Uni', 'カレッジ', 'كلية'],
  nat: ['Native', 'Nativo', 'Einheimisch', 'ネイティブ', 'محلي'],
  conv: [
    'Conversational', 'Conversational', 'Konversation', 
    '会話型', 'تحادثي'
  ],
  dob: [
    'Date of birth', 'Fecha de nacimiento', 
    'Geburtsdatum', '生年月日', 'تاريخ الولادة'
  ],
  favCol: [
    'Favourite color', 'Color favorito', 
    'Lieblingsfarbe', '好きな色', 'لونك المفضل'
  ],
  lovFud: [
    'Loved food', 'Me encantó la comida', 'Liebte Essen',
    '大好きな食べ物', 'أحب الطعام'
  ],
  moreAbtMe: [
    'More about me', 'Más sobre mí',
    'Mehr über mich', '私についてもっと',
    'المزيد عني'
  ]
};

export const profilePageTranslations = {
  viewProfile: [
    'View profile', 'Ver perfil',
    'Profil anzeigen', 'プロフィールを見る',
    'عرض الصفحة الشخصية'
  ],
  username: [
    'Username', 'Nombre de usuario',
    'Nutzername', 'ユーザー名',
    'اسم المستخدم'
  ]
};

export const transcriptPageTranslations = {
  issuedOn: ['Issued on', 'Emitido el', 'Ausgegeben am', 'の発行', 'الصادر في'],
  showCred: [
    'Show credential', 'Mostrar credencial', 'Ausweis zeigen', 
    'クレデンシャルを表示する', 'إظهار بيانات الاعتماد'
  ],
  verify: ['Verify', 'Verificar', 'Verifizieren', '確認', 'يؤكد'],
  issuedBy: ['Issued by', 'Emitido por', 'Herausgegeben von', 'が発行', 'صادر عن']
};

export const projectsPageTranslations = {
  placeholder: [
    'project name, description, tech stack',
    'nombre del proyecto, descripción, pila tecnológica',
    'projektname, beschreibung, tech-stack',
    'プロジェクト名、説明、技術スタック',
    'اسم المشروع والوصف والمكدس الفني'
  ],
  techStack: [
    'Tech stack', 'Pila de tecnología', 'Tech-Stack', 
    '技術スタック', 'كومة التقنية'
  ],
  ldPrj: [
    'Load more projects', 'Cargar más proyectos',
    'Laden Sie weitere Projekte', 
    'さらにプロジェクトを読み込む',
    'تحميل المزيد من المشاريع'
  ]
};

export const blogsPageTranslations = {
  read: [
    "Read", "Leer", "Lesen",
    "読んだ", "اقرأ"
  ]
};

export const statsPageTranslations: {[key: string]: Array<string>} = {
  'General': [
    'General', 'General', 'Allgemein',
    '全般的', 'عام'
  ],
  'User': [
    'User', 'Usuari', 'Benutzer',
    'ユーザー', 'المستعمل'
  ],
  'Interactions': [
    'Interactions', 'Interacciones', 'Interaktionen',
    '相互作用', 'التفاعلات'
  ],
  'Total views': [
    'Total views', 'Vistas totales', 'Gesamtansichten',
    '総視聴回数', 'عدد المشاهدات'
  ],
  'Average views per day': [
    'Average views per day', 'Vistas promedio por día',
    'Durchschnittliche Aufrufe pro Tag', '1日あたりの平均視聴回数',
    'متوسط ​​المشاهدات في اليوم'
  ],
  'Total session time': [
    'Total session time', 'Tiempo total de la sesión',
    'Gesamtsitzungszeit', '合計セッション時間', 'إجمالي وقت الجلسة'
  ],
  'Average session time': [
    'Average session time', 'Tiempo promedio de sesión',
    'Durchschnittliche Sitzungszeit', '平均セッション時間',
    'متوسط ​​وقت الجلسة'
  ],
  'Last view': [
    'Last view', 'última vista', 'Letzte Ansicht',
    '最後のビュー', 'آخر عرض'
  ],
  'Prime time': [
    'Prime time', 'Hora estelar', 'Hauptsendezeit',
    'プライムタイム', 'وقت الذروة'
  ],
  'Total users': [
    'Total users', 'Total de usuaris', 
    'Benutzer insgesamt', '総ユーザー数', 
    'إجمالي المستخدمين'
  ],
  'Currently active': [
    'Currently active', 'Actualmente activ', 'Zur Zeit aktiv',
    '現在アクティブ', 'نشط حاليا'
  ],
  'Average new users per day': [
    'Average new users per day', 'Promedio de nuevos usuaris por día',
    'Durchschnittliche neue Benutzer pro Tag', '1日あたりの平均新規ユーザー',
    'متوسط ​​المستخدمين الجدد في اليوم'
  ],
  'Likes': [
    'Likes', 'Gustos', 'Likes',
    'いいね', 'الإعجابات'
  ],
  'Comments': [
    'Comments', 'Comentarios', 'Kommentare',
    'コメント', 'تعليقات'
  ],
  'Shares': [
    'Shares', 'Comparte', 'Anteile',
    '株式', 'تشارك'
  ],
  'Code visits': [
    'Code visits', 'Código de visitas', 
    'Code-Besuche', 'コード訪問',
    'زيارات الكود'
  ],
  'Project launches': [
    'Project launches', 'Lanzamientos de proyectos',
    'Projekt startet', 'プロジェクトの立ち上げ', 
    'يبدأ المشروع'
  ],
  'Appreciations': [
    'Appreciations', 'Apreciación', 
    'Anerkennung', '感謝', 'تقدير'
  ]
};

export const commentsTranslations = {
  cmt: [
    'Comment', 'Comentario', 'Kommentar',
    'コメント', 'تعليق'
  ],
  pstCmt: [
    'Post comment', 'Publicar comentario', 'Kommentar hinzufügen',
    'コメントを投稿', 'أضف تعليقا'
  ],
  ldCmt: [
    'Load more comments', 'Cargar más comentarios',
    'Weitere Kommentare laden', 'コメントをさらに読み込む',
    'تحميل المزيد من التعليقات'
  ],
  delCmt: [
    'Delete comment', 
    'Eliminar comentario', 'Kommentar löschen',
    'コメントを削除', 'حذف تعليق'
  ],
  empty: [
    'No comments yet', 
    'Sin comentarios aún',
    'Noch keine Kommentare',
    'コメントはまだありません', 
    'لا توجد تعليقات حتى الآن'
  ]
};

export const error404Translations = {
  title: [
    "Error 404", "Error 404", "Fehler 404",
    "エラー404", "خطأ 404"
  ],
  caption1: [
    "It seems like this page doesn't exist.",
    "Parece que esta página no existe.",
    "Anscheinend existiert diese Seite nicht.",
    "このページは存在しないようです。",
    "يبدو أن هذه الصفحة غير موجودة."
  ],
  caption2: [
    "Taking you back to the home page in a few moments.",
    "Regresando a la página de inicio en unos momentos.",
    "Bringt Sie in wenigen Augenblicken zurück zur Startseite.",
    "しばらくするとホームページに戻ります。",
    "نعيدك إلى الصفحة الرئيسية في غضون لحظات قليلة."
  ]
};

export const miscTranslations = {
  resume: ["resume", "reanudar", "fortsetzen", "履歴書", "سيرة ذاتية"],
  skills: ["Skills", "Habilidades", "Fähigkeiten", "スキル", "مهارات"]
};
