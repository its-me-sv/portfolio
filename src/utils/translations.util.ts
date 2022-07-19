import {
  aboutMeEnglish, intrestAndHobbiesEnglish,
  aboutMeSpanish, intrestAndHobbiesSpanish,
  aboutMeGerman, intrestAndHobbiesGerman,
  aboutMeJapanese, intrestAndHobbiesJapanese,
  aboutMeArabic, intrestAndHobbiesArabic
} from './about-me-data.util';

export const menuTranslations = {
  home: ["home", "hogar", "heimat", "家", "الصفحة الرئيسية"],
  aboutMe: ["about me", "sobre mí", "über mich", "私について", "عني"],
  profiles: ["profiles", "perfiles", "profile", "プロファイル", "مظهر"],
  transcript: ["transcript", "transcripción", "abschrift", "トランスクリプト", "نسخة طبق الأصل"],
  projects: ["projects", "proyectos", "projekte", "プロジェクト", "المشاريع"],
  achievements: ["achievements", "logros", "erfolge", "実績", "الإنجازات"],
  blogs: ["blogs", "blogs", "blogs", "ブログ", "المدونات"],
  quotes: ["quotes", "cotizaciones", "zitate", "引用符", "يقتبس"],
  stats: ["stats", "estadísticas", "statistiken", "統計", "احصائيات"]
};

export const footerTranslations = {
  madeWidth: ["made with", "hecho con", "gemacht mit", "で作った", "مصنوع من"],
  by: ["by", "por", "durch", "に", "بواسطة"]
};

export const homePageTranslations = {
  student: ['student', 'alumno', 'schüler', '学生', 'طالب علم'],
  resident: ['resident', 'residente', 'bewohner', '居住者', 'مقيم'],
  at: ['at', 'a', 'bei', 'で', 'في'],
  'of': ['of', 'de', 'von', 'の', 'من']
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
  etc: [
    'Et cetera', 'Etcétera', 'Und so weiter', 
    'その他', 'إلى آخره'
  ]
};
