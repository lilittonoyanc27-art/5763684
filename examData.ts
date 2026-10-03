export interface ExamTopic {
  id: string;
  number: number;
  titleEs: string;
  titleHy: string;
  questionKeyEs: string;
  questionKeyHy: string;
  introEs: string;
  introHy: string;
  items: {
    nameEs: string;
    nameHy: string;
    descEs: string;
    descHy: string;
    exampleEs: string;
    exampleHy: string;
    extraNoteEs?: string;
    extraNoteHy?: string;
  }[];
  conclusionEs?: string;
  conclusionHy?: string;
}

export interface TeacherQA {
  id: string;
  topicId: 'funciones' | 'modalidades' | 'comunicacion' | 'categorias' | 'mezcladas';
  topicNameEs: string;
  topicNameHy: string;
  qEs: string;
  qHy: string;
  aEs: string;
  aHy: string;
  breakdown?: { es: string; hy: string }[];
}

export interface TeacherScriptSection {
  titleEs: string;
  titleHy: string;
  phrases: {
    id: string;
    textEs: string;
    textHy: string;
    tipEs?: string;
    tipHy?: string;
  }[];
}

export interface ExerciseItem {
  id: string;
  num: number;
  titleEs: string;
  titleHy: string;
  promptEs: string;
  promptHy: string;
  contentEs?: string;
  contentHy?: string;
  subQuestions?: {
    id: string;
    qEs: string;
    qHy: string;
    expectedAnswerEs: string;
    expectedAnswerHy?: string;
    options?: string[]; // for intruso or multi-choice
    correctOption?: string;
    explanationEs?: string;
    explanationHy?: string;
  }[];
  fullAnswerEs: string;
  fullAnswerHy: string;
}

export const TOPICS_DATA: ExamTopic[] = [
  {
    id: 'funciones',
    number: 1,
    titleEs: 'Funciones del lenguaje',
    titleHy: 'Լեզվի գործառույթները',
    questionKeyEs: '¿Para qué habla? (La intención del emisor)',
    questionKeyHy: 'Ինչի՞ համար է խոսում (Խոսողի նպատակը)',
    introEs: 'Las funciones del lenguaje indican la intención que tiene una persona cuando comunica un mensaje. Dependiendo de lo que quiere conseguir el hablante, utilizamos diferentes funciones. Hay seis funciones principales:',
    introHy: 'Լեզվի գործառույթները ցույց են տալիս, թե ինչ նպատակ ունի մարդը որևէ հաղորդագրություն փոխանցելիս։ Ըստ խոսողի նպատակի՝ լեզուն կարող է կատարել տարբեր գործառույթներ։ Գոյություն ունեն վեց հիմնական գործառույթներ։',
    items: [
      {
        nameEs: '1. Función referencial o representativa',
        nameHy: '1. Función referencial o representativa — տեղեկատվական / ներկայացուցչական գործառույթ',
        descEs: 'Se utiliza para transmitir información objetiva sobre la realidad.',
        descHy: 'Օգտագործվում է իրականության մասին օբյեկտիվ տեղեկություն հաղորդելու համար։',
        exampleEs: 'Madrid es la capital de España.',
        exampleHy: 'Մադրիդը Իսպանիայի մայրաքաղաքն է։',
        extraNoteEs: 'Pista: Hecho objetivo = referencial',
        extraNoteHy: 'Հուշում՝ Օբյեկտիվ փաստ = referencial'
      },
      {
        nameEs: '2. Función expresiva o emotiva',
        nameHy: '2. Función expresiva o emotiva — արտահայտչական / հուզական գործառույթ',
        descEs: 'Se utiliza para expresar sentimientos, emociones u opiniones del emisor.',
        descHy: 'Օգտագործվում է խոսողի զգացմունքները, հույզերը կամ կարծիքը արտահայտելու համար։',
        exampleEs: '¡Estoy muy contento!',
        exampleHy: 'Ես շատ ուրախ եմ։',
        extraNoteEs: 'Pista: Emoción, opinión o sentimiento = expresiva',
        extraNoteHy: 'Հուշում՝ Զգացմունք, կարծիք կամ հույզ = expresiva'
      },
      {
        nameEs: '3. Función apelativa o conativa',
        nameHy: '3. Función apelativa o conativa — կոչական / ներգործական գործառույթ',
        descEs: 'Se utiliza cuando el emisor quiere provocar una reacción en el receptor, por ejemplo, dar una orden, hacer una petición o dar un consejo.',
        descHy: 'Օգտագործվում է, երբ խոսողը ցանկանում է ազդել լսողի վրա՝ հրաման տալ, խնդրել կամ խորհուրդ տալ։',
        exampleEs: 'Cierra la puerta, por favor.',
        exampleHy: 'Փակի՛ր դուռը, խնդրում եմ։',
        extraNoteEs: 'Pista: Quiero que el otro haga algo = apelativa',
        extraNoteHy: 'Հուշում՝ Ցանկանում եմ, որ դիմացինը գործողություն կատարի = apelativa'
      },
      {
        nameEs: '4. Función fática',
        nameHy: '4. Función fática — հաղորդակցական կապը պահպանող / ֆատիկ գործառույթ',
        descEs: 'Se utiliza para iniciar, mantener, comprobar o finalizar la comunicación.',
        descHy: 'Օգտագործվում է հաղորդակցությունը սկսելու, շարունակելու, ստուգելու կամ ավարտելու համար։',
        exampleEs: '¿Me oyes? · Hola, ¿estás ahí?',
        exampleHy: 'Ինձ լսո՞ւմ ես։ · Բարև, այնտե՞ղ ես։',
        extraNoteEs: 'Pista: Comprobar el canal o saludo = fática',
        extraNoteHy: 'Հուշում՝ Կապի ստուգում կամ ողջույն = fática'
      },
      {
        nameEs: '5. Función metalingüística',
        nameHy: '5. Función metalingüística — մետալեզվական գործառույթ',
        descEs: 'Se utiliza cuando hablamos sobre la propia lengua o explicamos el significado de una palabra.',
        descHy: 'Օգտագործվում է, երբ խոսում ենք հենց լեզվի մասին կամ բացատրում ենք բառի նշանակությունը։',
        exampleEs: '“Casa” es un sustantivo.',
        exampleHy: '«Casa» բառը գոյական է։',
        extraNoteEs: 'Pista: Hablamos de una palabra, regla o gramática = metalingüística',
        extraNoteHy: 'Հուշում՝ Խոսում ենք բառի, կանոնի կամ քերականության մասին = metalingüística'
      },
      {
        nameEs: '6. Función poética',
        nameHy: '6. Función poética — բանաստեղծական գործառույթ',
        descEs: 'Se centra en la forma del mensaje y busca producir un efecto estético. Aparece especialmente en poemas, canciones, publicidad y literatura.',
        descHy: 'Ուշադրությունը կենտրոնանում է հաղորդագրության գեղեցիկ և արտահայտիչ ձևի վրա։ Հաճախ հանդիպում է բանաստեղծություններում, երգերում, գովազդում և գրականության մեջ։',
        exampleEs: 'Tus ojos brillan como estrellas.',
        exampleHy: 'Քո աչքերը փայլում են աստղերի պես։',
        extraNoteEs: 'Pista: Belleza, metáfora, mensaje artístico = poética',
        extraNoteHy: 'Հուշում՝ Գեղեցիկ, պատկերավոր, գեղարվեստական խոսք = poética'
      }
    ],
    conclusionEs: 'Una misma oración puede tener más de una función, pero normalmente hay una función que predomina.',
    conclusionHy: 'Միևնույն նախադասությունը կարող է ունենալ մեկից ավելի գործառույթներ, սակայն սովորաբար դրանցից մեկը գերակշռում է։'
  },
  {
    id: 'modalidades',
    number: 2,
    titleEs: 'Modalidades oracionales',
    titleHy: 'Նախադասությունների տեսակներն ըստ խոսողի նպատակի',
    questionKeyEs: '¿Cómo dice la oración? (La actitud ante el mensaje)',
    questionKeyHy: 'Ինչպե՞ս է ասում նախադասությունը (Վերաբերմունքը)',
    introEs: 'Las modalidades oracionales indican la actitud o la intención del hablante cuando dice una oración. Las principales modalidades son:',
    introHy: 'Modalidades oracionales-ը ցույց են տալիս խոսողի վերաբերմունքը կամ նպատակը նախադասություն արտասանելիս։ Հիմնական տեսակներն են՝',
    items: [
      {
        nameEs: '1. Enunciativa',
        nameHy: '1. Enunciativa — պատմողական',
        descEs: 'Sirve para informar o afirmar algo. Puede ser afirmativa o negativa.',
        descHy: 'Տեղեկություն է հաղորդում կամ որևէ փաստ է հաստատում։ Կարող է լինել հաստատական կամ ժխտական։',
        exampleEs: 'María estudia español. / María no estudia francés.',
        exampleHy: 'Մարիան իսպաներեն է սովորում։ / Մարիան ֆրանսերեն չի սովորում։',
        extraNoteEs: 'Pista: Informa de un hecho con serenidad',
        extraNoteHy: 'Հուշում՝ Փաստի հաղորդում առանց հատուկ երանգի'
      },
      {
        nameEs: '2. Interrogativa',
        nameHy: '2. Interrogativa — հարցական',
        descEs: 'Sirve para hacer una pregunta. Puede ser directa (con signos ¿?) o indirecta.',
        descHy: 'Օգտագործվում է հարց տալու համար։ Կարող է լինել ուղղակի (¿? նշաններով) կամ անուղղակի։',
        exampleEs: '¿Dónde vives? / No sé qué hora es.',
        exampleHy: 'Որտե՞ղ ես ապրում։ / Չգիտեմ՝ ժամը քանիսն է։',
        extraNoteEs: 'Pista: Busca respuesta o información',
        extraNoteHy: 'Հուշում՝ Փնտրում է պատասխան կամ տեղեկություն'
      },
      {
        nameEs: '3. Exclamativa',
        nameHy: '3. Exclamativa — բացականչական',
        descEs: 'Expresa emociones intensas como sorpresa, alegría, miedo o admiración (¡!).',
        descHy: 'Արտահայտում է ուժեղ զգացմունք՝ զարմանք, ուրախություն, վախ կամ հիացմունք (¡!)։',
        exampleEs: '¡Qué bonito es!',
        exampleHy: 'Ինչքա՜ն գեղեցիկ է։',
        extraNoteEs: 'Pista: Signos ¡! con entonación de fuerza emocional',
        extraNoteHy: 'Հուշում՝ Բացականչական նշաններ և զգացմունքային հնչերանգ'
      },
      {
        nameEs: '4. Exhortativa o imperativa',
        nameHy: '4. Exhortativa o imperativa — հրամայական / դրդողական',
        descEs: 'Se utiliza para dar órdenes, instrucciones, consejos o peticiones.',
        descHy: 'Օգտագործվում է հրաման, խորհուրդ, խնդրանք կամ ցուցում տալու համար։',
        exampleEs: 'Abre el libro. / Por favor, escucha.',
        exampleHy: 'Բացի՛ր գիրքը։ / Խնդրում եմ, լսի՛ր։',
        extraNoteEs: 'Pista: No solo orden militar, también ruego o consejo amigable',
        extraNoteHy: 'Հուշում՝ Ոչ միայն խիստ հրաման, այլև բարեհամբույր խնդրանք կամ խորհուրդ'
      },
      {
        nameEs: '5. Desiderativa',
        nameHy: '5. Desiderativa — ցանկական',
        descEs: 'Expresa un deseo del hablante.',
        descHy: 'Արտահայտում է խոսողի ցանկությունը։',
        exampleEs: '¡Ojalá apruebe el examen!',
        exampleHy: 'Երանի քննությունը հանձնեմ։',
        extraNoteEs: 'Pista clave: La palabra mágica suele ser “ojalá” o “deseo que...”',
        extraNoteHy: 'Գլխավոր հուշում՝ Հաճախ օգտագործվում է «ojalá» (երանի)'
      },
      {
        nameEs: '6. Dubitativa',
        nameHy: '6. Dubitativa — կասկածական',
        descEs: 'Expresa duda, incertidumbre o posibilidad.',
        descHy: 'Արտահայտում է կասկած, անորոշություն կամ հավանականություն։',
        exampleEs: 'Quizás venga mañana. / Tal vez esté en casa.',
        exampleHy: 'Հնարավոր է՝ վաղը գա։ / Թերևս տանը լինի։',
        extraNoteEs: 'Pista clave: “quizás”, “tal vez”, “acaso”, “a lo mejor”',
        extraNoteHy: 'Գլխավոր հուշում՝ «quizás», «tal vez» (գուցե, թերևս)'
      }
    ]
  },
  {
    id: 'comunicacion',
    number: 3,
    titleEs: 'Elementos de la comunicación',
    titleHy: 'Հաղորդակցության տարրերը',
    questionKeyEs: '¿Quién comunica qué y cómo? (El proceso comunicativo)',
    questionKeyHy: 'Ո՞վ, ի՞նչ և ինչպե՞ս է հաղորդում (Հաղորդակցական գործընթացը)',
    introEs: 'La comunicación es el proceso mediante el cual una persona transmite un mensaje a otra. Los principales elementos de la comunicación son:',
    introHy: 'Հաղորդակցությունը գործընթաց է, որի ընթացքում մեկ անձ հաղորդագրություն է փոխանցում մյուսին։ Հաղորդակցության հիմնական տարրերն են՝',
    items: [
      {
        nameEs: '1. Emisor',
        nameHy: '1. Emisor — ուղարկող / խոսող',
        descEs: 'Es la persona que produce y envía el mensaje.',
        descHy: 'Այն անձն է, ով ստեղծում և փոխանցում է հաղորդագրությունը։',
        exampleEs: 'Pedro en «Pedro llama a María»',
        exampleHy: 'Պեդրոն՝ «Պեդրոն զանգում է Մարիային» իրավիճակում'
      },
      {
        nameEs: '2. Receptor',
        nameHy: '2. Receptor — ստացող / լսող',
        descEs: 'Es la persona que recibe e interpreta el mensaje.',
        descHy: 'Այն անձն է, ով ստանում և հասկանում է հաղորդագրությունը։',
        exampleEs: 'María que escucha la llamada',
        exampleHy: 'Մարիան, ով լսում է զանգը'
      },
      {
        nameEs: '3. Mensaje',
        nameHy: '3. Mensaje — հաղորդագրություն',
        descEs: 'Es la información que se transmite.',
        descHy: 'Այն տեղեկությունն է, որը փոխանցվում է։',
        exampleEs: '«Llegaré a las ocho»',
        exampleHy: '«Ժամը ութին կհասնեմ»'
      },
      {
        nameEs: '4. Código',
        nameHy: '4. Código — կոդ / լեզվական համակարգ',
        descEs: 'Es el sistema de signos utilizado para comunicarse, por ejemplo, el idioma español.',
        descHy: 'Հաղորդակցման համար օգտագործվող նշանների համակարգն է, օրինակ՝ իսպաներեն լեզուն։',
        exampleEs: 'El idioma español',
        exampleHy: 'Իսպաներեն լեզուն'
      },
      {
        nameEs: '5. Canal',
        nameHy: '5. Canal — հաղորդման միջոց / ուղի',
        descEs: 'Es el medio físico por el que se transmite el mensaje (la voz, el teléfono, una carta, la pizarra, Internet).',
        descHy: 'Այն միջոցն է, որով հաղորդագրությունը փոխանցվում է՝ ձայն, հեռախոս, նամակ, գրատախտակ, ինտերնետ։',
        exampleEs: 'El teléfono / las ondas sonoras',
        exampleHy: 'Հեռախոսը / ձայնային ալիքները'
      },
      {
        nameEs: '6. Contexto o situación',
        nameHy: '6. Contexto — համատեքստ / իրավիճակ',
        descEs: 'Es la situación o circunstancias en las que tiene lugar la comunicación.',
        descHy: 'Այն իրավիճակն է, որտեղ տեղի է ունենում հաղորդակցությունը։',
        exampleEs: 'Una conversación telefónica entre dos amigos',
        exampleHy: 'Երկու ընկերների հեռախոսային խոսակցություն'
      }
    ],
    conclusionEs: 'Ejemplo completo: Pedro llama a María y le dice: “Llegaré a las ocho”. Emisor: Pedro | Receptor: María | Mensaje: «Llegaré a las ocho» | Código: español | Canal: teléfono | Contexto: llamada telefónica.',
    conclusionHy: 'Ամբողջական օրինակ՝ Պեդրոն զանգում է Մարիային և ասում․ «Ժամը ութին կհասնեմ»։ Emisor՝ Pedro | Receptor՝ María | Mensaje՝ «Llegaré a las ocho» | Código՝ իսպաներեն | Canal՝ հեռախոս | Contexto՝ հեռախոսային զրույց։'
  },
  {
    id: 'categorias',
    number: 4,
    titleEs: 'Categorías gramaticales',
    titleHy: 'Քերականական կարգեր / Խոսքի մասեր',
    questionKeyEs: '¿Qué tipo de palabra es? (Clasificación de palabras)',
    questionKeyHy: 'Ի՞նչ խոսքի մաս է (Բառերի դասակարգումը)',
    introEs: 'Las categorías gramaticales son grupos en los que clasificamos las palabras según sus características formales y la función que cumplen en la oración:',
    introHy: 'Քերականական կարգերը / խոսքի մասերը բառերի խմբեր են, որոնց մեջ բառերը դասակարգվում են ըստ իրենց հատկանիշների և նախադասության մեջ կատարած գործառույթի։',
    items: [
      {
        nameEs: 'Sustantivo (Գոյական)',
        nameHy: 'Sustantivo — Գոյական',
        descEs: 'Sirve para nombrar personas, animales, objetos, lugares, sentimientos o ideas. ¿Quién? / ¿Qué?',
        descHy: 'Անվանում է անձ, կենդանի, առարկա, վայր, զգացում կամ գաղափար։ Ո՞վ / Ի՞նչ։',
        exampleEs: 'casa, niño, perro, Madrid, amor · Ej: El perro corre.',
        exampleHy: 'casa, niño, perro, Madrid, amor · Օր․՝ El perro corre.'
      },
      {
        nameEs: 'Adjetivo (Ածական)',
        nameHy: 'Adjetivo — Ածական',
        descEs: 'Describe o expresa una característica o cualidad del sustantivo. ¿Cómo es?',
        descHy: 'Նկարագրում է գոյականը կամ ցույց տալիս նրա հատկանիշը։ Ինչպիսի՞։',
        exampleEs: 'grande, bonito, rápido, inteligente · Ej: El perro pequeño corre.',
        exampleHy: 'grande, bonito, rápido, inteligente · Օր․՝ El perro pequeño corre.'
      },
      {
        nameEs: 'Verbo (Բայ)',
        nameHy: 'Verbo — Բայ',
        descEs: 'Expresa una acción, un estado o un proceso. ¿Qué hace?',
        descHy: 'Ցույց է տալիս գործողություն, վիճակ կամ գործընթաց։ Ի՞նչ է անում։',
        exampleEs: 'comer, correr, estudiar, ser, estar · Ej: María estudia.',
        exampleHy: 'comer, correr, estudiar, ser, estar · Օր․՝ María estudia.'
      },
      {
        nameEs: 'Adverbio (Մակբայ)',
        nameHy: 'Adverbio — Մակբայ',
        descEs: 'Modifica a un verbo, a un adjetivo o a otro adverbio. Puede indicar tiempo, lugar, modo, cantidad o duda.',
        descHy: 'Լրացնում է բային, ածականին կամ մեկ այլ մակբայի։ Ցույց է տալիս ժամանակ, տեղ, ձև կամ քանակ։',
        exampleEs: 'hoy, aquí, bien, mucho, rápidamente · Ej: María habla muy bien.',
        exampleHy: 'hoy, aquí, bien, mucho, rápidamente · Օր․՝ María habla muy bien.'
      },
      {
        nameEs: 'Pronombre (Դերանուն)',
        nameHy: 'Pronombre — Դերանուն',
        descEs: 'Sustituye a un sustantivo para no repetirlo. Va SOLO (no acompaña a un sustantivo).',
        descHy: 'Փոխարինում է գոյականին։ Հանդես է գալիս ՄԵՆԱԿ (առանց գոյականի)։',
        exampleEs: 'María estudia. Ella tiene un examen. (Ella sustituye a María)',
        exampleHy: 'María estudia. Ella tiene un examen. («Ella»-ն փոխարինում է Մարիային)'
      },
      {
        nameEs: 'Determinante (Որոշիչ)',
        nameHy: 'Determinante — Որոշիչ',
        descEs: 'Acompaña siempre al sustantivo y ayuda a identificarlo o concretarlo (artículos, posesivos, demostrativos, numerales).',
        descHy: 'Միշտ գործածվում է գոյականի հետ և օգնում է այն որոշել (հոդեր, ստացական, ցուցական, թվական)։',
        exampleEs: 'el, una, mi, este, dos · Ej: Mi hermano tiene dos libros.',
        exampleHy: 'el, una, mi, este, dos · Օր․՝ Mi hermano tiene dos libros.'
      },
      {
        nameEs: 'Nexos (Կապակցիչներ)',
        nameHy: 'Nexos — Կապակցիչներ',
        descEs: 'Unen palabras, grupos de palabras u oraciones (conjunciones).',
        descHy: 'Կապում են բառեր կամ նախադասություններ (շաղկապներ)։',
        exampleEs: 'y, o, pero, porque, aunque · Ej: Estudio porque tengo un examen.',
        exampleHy: 'y, o, pero, porque, aunque · Օր․՝ Estudio porque tengo un examen.'
      }
    ],
    conclusionEs: 'Diferencia clave: El determinante va CON el sustantivo (mi casa), mientras que el pronombre lo SUSTITUYE y va solo (ella estudia).',
    conclusionHy: 'Հիմնական տարբերությունը՝ Որոշիչը գալիս է գոյականի ՀԵՏ (mi casa), իսկ դերանունը ՓՈԽԱՐԻՆՈՒՄ Է գոյականին և լինում է մենակ (ella estudia)։'
  }
];

export const TEACHER_QA_DATA: TeacherQA[] = [
  // Funciones
  {
    id: 'f1',
    topicId: 'funciones',
    topicNameEs: 'Funciones del lenguaje',
    topicNameHy: 'Լեզվի գործառույթները',
    qEs: '¿Qué son las funciones del lenguaje?',
    qHy: 'Ի՞նչ են լեզվի գործառույթները։',
    aEs: 'Son las distintas finalidades o intenciones que puede tener un mensaje según el propósito del hablante.',
    aHy: 'Դրանք հաղորդագրության տարբեր նպատակներն են՝ կախված խոսողի մտադրությունից։'
  },
  {
    id: 'f2',
    topicId: 'funciones',
    topicNameEs: 'Funciones del lenguaje',
    topicNameHy: 'Լեզվի գործառույթները',
    qEs: '¿Cuántas funciones principales hay?',
    qHy: 'Քանի՞ հիմնական գործառույթ կա։',
    aEs: 'Hay seis: referencial, expresiva, apelativa, fática, metalingüística y poética.',
    aHy: 'Վեց՝ տեղեկատվական, արտահայտչական, կոչական, ֆատիկ, մետալեզվական և բանաստեղծական։'
  },
  {
    id: 'f3',
    topicId: 'funciones',
    topicNameEs: 'Funciones del lenguaje',
    topicNameHy: 'Լեզվի գործառույթները',
    qEs: '¿Qué función aparece en “Estoy muy triste”?',
    qHy: 'Ո՞ր գործառույթն է «Estoy muy triste» նախադասության մեջ։',
    aEs: 'La función expresiva, porque el emisor expresa un sentimiento o estado de ánimo.',
    aHy: 'Արտահայտչական գործառույթը, որովհետև խոսողը արտահայտում է զգացմունք։'
  },
  {
    id: 'f4',
    topicId: 'funciones',
    topicNameEs: 'Funciones del lenguaje',
    topicNameHy: 'Լեզվի գործառույթները',
    qEs: '¿Qué función aparece en “Abre la ventana”?',
    qHy: 'Ո՞ր գործառույթն է «Abre la ventana» նախադասության մեջ։',
    aEs: 'La función apelativa, porque el hablante quiere provocar una acción en el receptor.',
    aHy: 'Կոչական գործառույթն է, որովհետև խոսողը ցանկանում է, որ լսողը գործողություն կատարի։'
  },
  {
    id: 'f5',
    topicId: 'funciones',
    topicNameEs: 'Funciones del lenguaje',
    topicNameHy: 'Լեզվի գործառույթները',
    qEs: '¿Qué función tiene “¿Me escuchas?”?',
    qHy: 'Ի՞նչ գործառույթ ունի «¿Me escuchas?» արտահայտությունը։',
    aEs: 'La función fática, porque sirve para comprobar si el canal de comunicación funciona.',
    aHy: 'Ֆատիկ գործառույթն է, որովհետև ստուգվում է՝ հաղորդակցությունը գործում է, թե ոչ։'
  },
  {
    id: 'f6',
    topicId: 'funciones',
    topicNameEs: 'Funciones del lenguaje',
    topicNameHy: 'Լեզվի գործառույթները',
    qEs: '¿Qué función tiene “Perro es un sustantivo”?',
    qHy: 'Ի՞նչ գործառույթ ունի «Perro es un sustantivo» նախադասությունը։',
    aEs: 'La función metalingüística, porque estamos hablando sobre la propia lengua y su gramática.',
    aHy: 'Մետալեզվական գործառույթն է, որովհետև խոսում ենք հենց լեզվի մասին։'
  },
  {
    id: 'f7',
    topicId: 'funciones',
    topicNameEs: 'Funciones del lenguaje',
    topicNameHy: 'Լեզվի գործառույթները',
    qEs: 'Dame un ejemplo de función referencial.',
    qHy: 'Բեր տեղեկատվական գործառույթի օրինակ։',
    aEs: '“España está en Europa” o “El examen es el viernes”.',
    aHy: '«Իսպանիան գտնվում է Եվրոպայում» կամ «Քննությունը ուրբաթ օրն է»։'
  },
  {
    id: 'f8',
    topicId: 'funciones',
    topicNameEs: 'Funciones del lenguaje',
    topicNameHy: 'Լեզվի գործառույթները',
    qEs: '¿Dónde aparece frecuentemente la función poética?',
    qHy: 'Որտե՞ղ է հաճախ հանդիպում բանաստեղծական գործառույթը։',
    aEs: 'En poemas, canciones, literatura y publicidad.',
    aHy: 'Բանաստեղծություններում, երգերում, գրականության և գովազդի մեջ։'
  },

  // Modalidades
  {
    id: 'm1',
    topicId: 'modalidades',
    topicNameEs: 'Modalidades oracionales',
    topicNameHy: 'Նախադասությունների տեսակներ',
    qEs: '¿Qué indican las modalidades oracionales?',
    qHy: 'Ի՞նչ են ցույց տալիս modalidades oracionales-ը։',
    aEs: 'Indican la actitud o intención del hablante respecto a lo que dice.',
    aHy: 'Ցույց են տալիս խոսողի վերաբերմունքը կամ նպատակը ասվածի նկատմամբ։'
  },
  {
    id: 'm2',
    topicId: 'modalidades',
    topicNameEs: 'Modalidades oracionales',
    topicNameHy: 'Նախադասությունների տեսակներ',
    qEs: '¿Qué modalidad es “Hoy tenemos examen”?',
    qHy: 'Ի՞նչ տեսակ է «Hoy tenemos examen»-ը։',
    aEs: 'Es una oración enunciativa afirmativa.',
    aHy: 'Պատմողական (հաստատական) նախադասություն է։'
  },
  {
    id: 'm3',
    topicId: 'modalidades',
    topicNameEs: 'Modalidades oracionales',
    topicNameHy: 'Նախադասությունների տեսակներ',
    qEs: '¿Qué modalidad es “¿Has estudiado?”?',
    qHy: 'Ի՞նչ տեսակ է «¿Has estudiado?»-ը։',
    aEs: 'Es interrogativa directa.',
    aHy: 'Ուղղակի հարցական է։'
  },
  {
    id: 'm4',
    topicId: 'modalidades',
    topicNameEs: 'Modalidades oracionales',
    topicNameHy: 'Նախադասությունների տեսակներ',
    qEs: '¿Qué modalidad es “¡Qué alegría!”?',
    qHy: 'Ի՞նչ տեսակ է «¡Qué alegría!»-ն։',
    aEs: 'Es exclamativa.',
    aHy: 'Բացականչական է։'
  },
  {
    id: 'm5',
    topicId: 'modalidades',
    topicNameEs: 'Modalidades oracionales',
    topicNameHy: 'Նախադասությունների տեսակներ',
    qEs: '¿Qué modalidad es “Cierra el libro”?',
    qHy: 'Ի՞նչ տեսակ է «Cierra el libro»-ն։',
    aEs: 'Es exhortativa o imperativa.',
    aHy: 'Հրամայական / դրդողական է։'
  },
  {
    id: 'm6',
    topicId: 'modalidades',
    topicNameEs: 'Modalidades oracionales',
    topicNameHy: 'Նախադասությունների տեսակներ',
    qEs: '¿Qué modalidad es “Ojalá venga mañana”?',
    qHy: 'Ի՞նչ տեսակ է «Ojalá venga mañana»-ն։',
    aEs: 'Es desiderativa, porque expresa un deseo.',
    aHy: 'Ցանկական է, քանի որ արտահայտում է ցանկություն։'
  },
  {
    id: 'm7',
    topicId: 'modalidades',
    topicNameEs: 'Modalidades oracionales',
    topicNameHy: 'Նախադասությունների տեսակներ',
    qEs: '¿Qué modalidad es “Quizás esté enfermo”?',
    qHy: 'Ի՞նչ տեսակ է «Quizás esté enfermo»-ն։',
    aEs: 'Es dubitativa, porque expresa duda o probabilidad.',
    aHy: 'Կասկածական է, քանի որ արտահայտում է կասկած։'
  },
  {
    id: 'm8',
    topicId: 'modalidades',
    topicNameEs: 'Modalidades oracionales',
    topicNameHy: 'Նախադասությունների տեսակներ',
    qEs: '¿Una oración exhortativa siempre tiene que ser una orden fuerte?',
    qHy: 'Հրամայական նախադասությունը մի՞շտ խիստ հրաման է։',
    aEs: 'No. También puede expresar una petición educada, un consejo o una instrucción.',
    aHy: 'Ոչ։ Այն կարող է արտահայտել նաև խնդրանք, խորհուրդ կամ ցուցում։'
  },

  // Elementos de la comunicación
  {
    id: 'c1',
    topicId: 'comunicacion',
    topicNameEs: 'Elementos de la comunicación',
    topicNameHy: 'Հաղորդակցության տարրերը',
    qEs: '¿Qué es el emisor?',
    qHy: 'Ի՞նչ է emisor-ը։',
    aEs: 'Es quien produce y envía el mensaje.',
    aHy: 'Նա է, ով ստեղծում և ուղարկում է հաղորդագրությունը։'
  },
  {
    id: 'c2',
    topicId: 'comunicacion',
    topicNameEs: 'Elementos de la comunicación',
    topicNameHy: 'Հաղորդակցության տարրերը',
    qEs: '¿Qué es el receptor?',
    qHy: 'Ի՞նչ է receptor-ը։',
    aEs: 'Es quien recibe e interpreta el mensaje.',
    aHy: 'Նա է, ով ստանում և հասկանում է հաղորդագրությունը։'
  },
  {
    id: 'c3',
    topicId: 'comunicacion',
    topicNameEs: 'Elementos de la comunicación',
    topicNameHy: 'Հաղորդակցության տարրերը',
    qEs: '¿Qué es el mensaje?',
    qHy: 'Ի՞նչ է mensaje-ը։',
    aEs: 'Es la información que se transmite.',
    aHy: 'Այն տեղեկությունն է, որը փոխանցվում է։'
  },
  {
    id: 'c4',
    topicId: 'comunicacion',
    topicNameEs: 'Elementos de la comunicación',
    topicNameHy: 'Հաղորդակցության տարրերը',
    qEs: '¿Qué es el código?',
    qHy: 'Ի՞նչ է código-ն։',
    aEs: 'Es el sistema de signos y reglas que utilizamos para comunicarnos (ej. el español).',
    aHy: 'Նշանների և կանոնների համակարգն է, որն օգտագործում ենք հաղորդակցվելու համար (օր․՝ իսպաներենը)։'
  },
  {
    id: 'c5',
    topicId: 'comunicacion',
    topicNameEs: 'Elementos de la comunicación',
    topicNameHy: 'Հաղորդակցության տարրերը',
    qEs: '¿Qué es el canal?',
    qHy: 'Ի՞նչ է canal-ը։',
    aEs: 'Es el medio físico por el que se transmite el mensaje.',
    aHy: 'Այն ֆիզիկական միջոցն է, որով հաղորդագրությունը փոխանցվում է։'
  },
  {
    id: 'c6',
    topicId: 'comunicacion',
    topicNameEs: 'Elementos de la comunicación',
    topicNameHy: 'Հաղորդակցության տարրերը',
    qEs: '¿Qué es el contexto?',
    qHy: 'Ի՞նչ է contexto-ն։',
    aEs: 'Es la situación o entorno en el que ocurre la comunicación.',
    aHy: 'Այն իրավիճակն է, որտեղ տեղի է ունենում հաղորդակցությունը։'
  },
  {
    id: 'c7',
    topicId: 'comunicacion',
    topicNameEs: 'Elementos de la comunicación',
    topicNameHy: 'Հաղորդակցության տարրերը',
    qEs: 'Si una profesora explica una lección a sus alumnos, ¿quién es el emisor?',
    qHy: 'Եթե ուսուցչուհին դաս է բացատրում աշակերտներին, ո՞վ է emisor-ը։',
    aEs: 'La profesora.',
    aHy: 'Ուսուցչուհին։'
  },
  {
    id: 'c8',
    topicId: 'comunicacion',
    topicNameEs: 'Elementos de la comunicación',
    topicNameHy: 'Հաղորդակցության տարրերը',
    qEs: '¿Quiénes son los receptores en esa clase?',
    qHy: 'Ովքե՞ր են ընդունողները այդ դասարանում։',
    aEs: 'Los alumnos.',
    aHy: 'Աշակերտները։'
  },

  // Categorías
  {
    id: 'g1',
    topicId: 'categorias',
    topicNameEs: 'Categorías gramaticales',
    topicNameHy: 'Խոսքի մասեր',
    qEs: '¿Qué es un sustantivo?',
    qHy: 'Ի՞նչ է գոյականը (sustantivo)։',
    aEs: 'Es una palabra que sirve para nombrar personas, animales, objetos, lugares, sentimientos o ideas.',
    aHy: 'Գոյականը բառ է, որը անվանում է մարդ, կենդանի, առարկա, վայր, զգացում կամ գաղափար։'
  },
  {
    id: 'g2',
    topicId: 'categorias',
    topicNameEs: 'Categorías gramaticales',
    topicNameHy: 'Խոսքի մասեր',
    qEs: '¿Qué es un adjetivo?',
    qHy: 'Ի՞նչ է ածականը (adjetivo)։',
    aEs: 'Es una palabra que describe o expresa una característica del sustantivo.',
    aHy: 'Ածականը նկարագրում է գոյականը կամ ցույց տալիս նրա հատկանիշը։'
  },
  {
    id: 'g3',
    topicId: 'categorias',
    topicNameEs: 'Categorías gramaticales',
    topicNameHy: 'Խոսքի մասեր',
    qEs: '¿Qué es un verbo?',
    qHy: 'Ի՞նչ է բայը (verbo)։',
    aEs: 'Es una palabra que expresa una acción, un estado o un proceso.',
    aHy: 'Բայը ցույց է տալիս գործողություն, վիճակ կամ գործընթաց։'
  },
  {
    id: 'g4',
    topicId: 'categorias',
    topicNameEs: 'Categorías gramaticales',
    topicNameHy: 'Խոսքի մասեր',
    qEs: '¿Qué es un adverbio?',
    qHy: 'Ի՞նչ է մակբայը (adverbio)։',
    aEs: 'Es una palabra invariable que puede modificar a un verbo, un adjetivo u otro adverbio.',
    aHy: 'Մակբայը կարող է լրացնել բային, ածականին կամ մեկ այլ մակբայի։'
  },
  {
    id: 'g5',
    topicId: 'categorias',
    topicNameEs: 'Categorías gramaticales',
    topicNameHy: 'Խոսքի մասեր',
    qEs: '¿Qué hace un pronombre?',
    qHy: 'Ի՞նչ է անում դերանունը (pronombre)։',
    aEs: 'Sustituye al sustantivo y va solo en la oración.',
    aHy: 'Փոխարինում է գոյականին և նախադասության մեջ լինում է մենակ։'
  },
  {
    id: 'g6',
    topicId: 'categorias',
    topicNameEs: 'Categorías gramaticales',
    topicNameHy: 'Խոսքի մասեր',
    qEs: '¿Qué hace un determinante?',
    qHy: 'Ի՞նչ է անում որոշիչը (determinante)։',
    aEs: 'Acompaña siempre al sustantivo para concretarlo o determinarlo.',
    aHy: 'Միշտ ուղեկցում է գոյականին և այն որոշակիացնում։'
  },
  {
    id: 'g7',
    topicId: 'categorias',
    topicNameEs: 'Categorías gramaticales',
    topicNameHy: 'Խոսքի մասեր',
    qEs: '¿Qué son los nexos?',
    qHy: 'Ի՞նչ են կապակցիչները (nexos)։',
    aEs: 'Son palabras que sirven para unir palabras u oraciones (ej. y, pero, porque).',
    aHy: 'Կապակցիչները բառեր են, որոնք կապում են բառեր կամ նախադասություններ (օր․՝ y, pero, porque)։'
  },
  {
    id: 'g8',
    topicId: 'categorias',
    topicNameEs: 'Categorías gramaticales',
    topicNameHy: 'Խոսքի մասեր',
    qEs: 'Analiza: “Mi hermana pequeña estudia mucho”.',
    qHy: 'Վերլուծի՛ր՝ «Mi hermana pequeña estudia mucho»։',
    aEs: 'Mi (determinante) · hermana (sustantivo) · pequeña (adjetivo) · estudia (verbo) · mucho (adverbio).',
    aHy: 'Mi → որոշիչ · hermana → գոյական · pequeña → ածական · estudia → բայ · mucho → մակբայ։',
    breakdown: [
      { es: 'Mi → determinante posesivo', hy: 'Mi → ստացական որոշիչ' },
      { es: 'hermana → sustantivo común', hy: 'hermana → հասարակ գոյական' },
      { es: 'pequeña → adjetivo calificativo', hy: 'pequeña → որակական ածական' },
      { es: 'estudia → verbo (estudiar)', hy: 'estudia → բայ (estudiar)' },
      { es: 'mucho → adverbio de cantidad', hy: 'mucho → քանակական մակբայ' }
    ]
  },

  // Preguntas Mezcladas
  {
    id: 'mz1',
    topicId: 'mezcladas',
    topicNameEs: 'Preguntas Mezcladas',
    topicNameHy: 'Խառը Քննական Հարցեր',
    qEs: '“¡Qué frío hace!”: ¿función del lenguaje y modalidad?',
    qHy: '«¡Qué frío hace!»՝ լեզվի ո՞ր գործառույթը և ո՞ր նախադասության տեսակն է։',
    aEs: 'Función expresiva (expresa una sensación/sentimiento) y modalidad exclamativa (por la entonación y signos ¡!).',
    aHy: 'Արտահայտչական գործառույթ (արտահայտում է զգացողություն) և բացականչական նախադասություն (¡!)։'
  },
  {
    id: 'mz2',
    topicId: 'mezcladas',
    topicNameEs: 'Preguntas Mezcladas',
    topicNameHy: 'Խառը Քննական Հարցեր',
    qEs: '“Cierra la puerta”: ¿función y modalidad?',
    qHy: '«Cierra la puerta»՝ գործառույթ և տեսա՞կ։',
    aEs: 'Función apelativa (busca reacción en el receptor) y modalidad exhortativa (orden o instrucción).',
    aHy: 'Կոչական գործառույթ (ազդեցություն լսողի վրա) և հրամայական ձև (հրաման)։'
  },
  {
    id: 'mz3',
    topicId: 'mezcladas',
    topicNameEs: 'Preguntas Mezcladas',
    topicNameHy: 'Խառը Քննական Հարցեր',
    qEs: '“¿Me oyes?”: ¿qué función tiene?',
    qHy: '«¿Me oyes?»՝ ի՞նչ գործառույթ ունի։',
    aEs: 'Función fática (comprueba si el canal auditivo/telefónico funciona).',
    aHy: 'Ֆատիկ (ստուգում է կապի ուղին)։'
  },
  {
    id: 'mz4',
    topicId: 'mezcladas',
    topicNameEs: 'Preguntas Mezcladas',
    topicNameHy: 'Խառը Քննական Հարցեր',
    qEs: '“Quizás María venga mañana”: ¿qué modalidad es?',
    qHy: '«Quizás María venga mañana»՝ ի՞նչ տեսակ է։',
    aEs: 'Modalidad dubitativa (la palabra "quizás" indica duda o posibilidad).',
    aHy: 'Կասկածական (նշված «quizás» բառը արտահայտում է կասկած)։'
  },
  {
    id: 'mz5',
    topicId: 'mezcladas',
    topicNameEs: 'Preguntas Mezcladas',
    topicNameHy: 'Խառը Քննական Հարցեր',
    qEs: 'En “Mi perro pequeño corre rápidamente”, identifica las categorías.',
    qHy: '«Mi perro pequeño corre rápidamente» նախադասության մեջ որոշի՛ր խոսքի մասերը։',
    aEs: 'Mi (determinante) · perro (sustantivo) · pequeño (adjetivo) · corre (verbo) · rápidamente (adverbio).',
    aHy: 'Mi → որոշիչ · perro → գոյական · pequeño → ածական · corre → բայ · rápidamente → մակբայ։'
  },
  {
    id: 'mz6',
    topicId: 'mezcladas',
    topicNameEs: 'Preguntas Mezcladas',
    topicNameHy: 'Խառը Քննական Հարցեր',
    qEs: 'En una llamada telefónica, ¿cuál puede ser el canal?',
    qHy: 'Հեռախոսային զանգի ժամանակ ո՞րն է canal-ը։',
    aEs: 'El teléfono y la red telefónica.',
    aHy: 'Հեռախոսը և հեռախոսային ցանցը։'
  },
  {
    id: 'mz7',
    topicId: 'mezcladas',
    topicNameEs: 'Preguntas Mezcladas',
    topicNameHy: 'Խառը Քննական Հարցեր',
    qEs: '¿Puede una oración tener una función del lenguaje y una modalidad al mismo tiempo?',
    qHy: 'Կարո՞ղ է նույն նախադասությունն ունենալ և՛ գործառույթ, և՛ նախադասության տեսակ միաժամանակ։',
    aEs: '¡Sí! Son dos planos distintos: la función analiza el objetivo comunicativo, y la modalidad analiza la forma y actitud. Ejemplo: “¡Cierra la puerta!” → Función apelativa + Modalidad exhortativa.',
    aHy: 'Այո՛։ Դրանք տարբեր հարթություններ են․ գործառույթը վերլուծում է նպատակը, իսկ տեսակը՝ ձևն ու վերաբերմունքը։ Օր․՝ «¡Cierra la puerta!» → Función apelativa + Modalidad exhortativa։'
  }
];

export const TEACHER_SCRIPT_DATA: TeacherScriptSection[] = [
  {
    titleEs: 'Inicio del examen',
    titleHy: 'Քննության սկիզբ',
    phrases: [
      {
        id: 's-start-1',
        textEs: 'Buenos días. Vamos a empezar el examen.',
        textHy: 'Բարի լույս։ Եկեք սկսենք քննությունը։',
        tipEs: 'Responde: "Buenos días, profesor/a."',
        tipHy: 'Պատասխանիր՝ «Buenos días, profesor/a»'
      },
      {
        id: 's-start-2',
        textEs: 'Primero voy a hacerte algunas preguntas generales. Intenta responder con frases completas.',
        textHy: 'Սկզբում կտամ մի քանի ընդհանուր հարցեր։ Փորձիր պատասխանել ամբողջական նախադասություններով։',
        tipEs: 'Responde siempre con oraciones estructuradas, no monosílabos.',
        tipHy: 'Մի՛ պատասխանիր մեկ բառով, կառուցիր ամբողջ նախադասություն։'
      },
      {
        id: 's-start-3',
        textEs: 'No pasa nada si necesitas unos segundos para pensar.',
        textHy: 'Ոչինչ, եթե մի քանի վայրկյան մտածելու կարիք ունենաս։',
        tipEs: 'Puedes decir: "Un momento, por favor."',
        tipHy: 'Կարող ես ասել՝ «Un momento, por favor»'
      }
    ]
  },
  {
    titleEs: 'Funciones del lenguaje',
    titleHy: 'Լեզվի գործառույթները',
    phrases: [
      {
        id: 's-f-1',
        textEs: '¿Qué son las funciones del lenguaje?',
        textHy: 'Ի՞նչ են լեզվի գործառույթները։',
        tipEs: 'Definición: Son las intenciones que tiene el hablante al emitir un mensaje.',
        tipHy: 'Սահմանում՝ Խոսողի նպատակներն են հաղորդագրություն փոխանցելիս։'
      },
      {
        id: 's-f-2',
        textEs: '¿Cuántas funciones principales conoces?',
        textHy: 'Քանի՞ հիմնական գործառույթ գիտես։',
        tipEs: 'Seis: referencial, expresiva, apelativa, fática, metalingüística y poética.',
        tipHy: 'Վեց հատ'
      },
      {
        id: 's-f-3',
        textEs: 'Explícame la función referencial.',
        textHy: 'Բացատրիր տեղեկատվական գործառույթը (referencial)։',
        tipEs: 'Sirve para transmitir información objetiva de la realidad.',
        tipHy: 'Իրականության մասին օբյեկտիվ տեղեկություն է հաղորդում։'
      },
      {
        id: 's-f-4',
        textEs: 'Ponme un ejemplo.',
        textHy: 'Բեր մի օրինակ։',
        tipEs: 'Ejemplo: "Madrid es la capital de España."',
        tipHy: 'Օրինակ՝ «Madrid es la capital de España»'
      },
      {
        id: 's-f-5',
        textEs: '¿Qué diferencia hay entre la función referencial y la expresiva?',
        textHy: 'Ի՞նչ տարբերություն կա referencial-ի և expresiva-ի միջև։',
        tipEs: 'Referencial es objetiva (hechos); expresiva es subjetiva (sentimientos).',
        tipHy: 'Referencial-ը օբյեկտիվ է, expresiva-ն՝ սուբյեկտիվ զգացմունք։'
      },
      {
        id: 's-f-6',
        textEs: '¿Qué función encontramos en la oración “Estoy muy feliz”? ¿Por qué?',
        textHy: 'Ո՞ր գործառույթն է «Estoy muy feliz» նախադասության մեջ։ Ինչո՞ւ։',
        tipEs: 'Función expresiva, porque el emisor manifiesta una emoción personal.',
        tipHy: 'Expresiva, քանի որ խոսողը հույզ է արտահայտում։'
      },
      {
        id: 's-f-7',
        textEs: '¿Qué función encontramos en “Cierra la puerta, por favor”?',
        textHy: 'Ո՞ր գործառույթն է «Cierra la puerta, por favor»-ում։',
        tipEs: 'Función apelativa, busca una acción del oyente.',
        tipHy: 'Apelativa՝ դիմացինից գործողություն է ակնկալում։'
      },
      {
        id: 's-f-8',
        textEs: '¿Para qué sirve la función fática?',
        textHy: 'Ինչի՞ համար է fática գործառույթը։',
        tipEs: 'Para iniciar, mantener o verificar el canal de comunicación.',
        tipHy: 'Հաղորդակցման կապը սկսելու, պահելու կամ ստուգելու համար։'
      },
      {
        id: 's-f-9',
        textEs: 'Dame un ejemplo de función fática.',
        textHy: 'Բեր fática գործառույթի օրինակ։',
        tipEs: 'Ej: "¿Me escuchas bien?" o "Diga..."',
        tipHy: 'Օր․՝ «¿Me escuchas bien?»'
      },
      {
        id: 's-f-10',
        textEs: '¿Qué es la función metalingüística?',
        textHy: 'Ի՞նչ է metalingüística գործառույթը։',
        tipEs: 'Cuando usamos el lenguaje para hablar del propio lenguaje.',
        tipHy: 'Երբ լեզվով խոսում ենք հենց լեզվի մասին։'
      },
      {
        id: 's-f-11',
        textEs: 'Si digo “casa es un sustantivo”, ¿qué función utilizo?',
        textHy: 'Եթե ասեմ «casa es un sustantivo», ո՞ր գործառույթն եմ օգտագործում։',
        tipEs: 'Metalingüística.',
        tipHy: 'Metalingüística'
      },
      {
        id: 's-f-12',
        textEs: '¿Dónde podemos encontrar la función poética?',
        textHy: 'Որտե՞ղ կարող ենք հանդիպել poética գործառույթին։',
        tipEs: 'En poemas, canciones, literatura y lemas publicitarios.',
        tipHy: 'Բանաստեղծություններում, երգերում, գրականությունում, գովազդում։'
      }
    ]
  },
  {
    titleEs: 'Modalidades oracionales',
    titleHy: 'Նախադասությունների տեսակներ',
    phrases: [
      {
        id: 's-m-1',
        textEs: 'Ahora vamos a hablar de las modalidades oracionales.',
        textHy: 'Հիմա խոսենք նախադասությունների տեսակների մասին։',
        tipEs: 'Prepárate para clasificar según la intención.',
        tipHy: 'Պատրաստվիր դասակարգելուն։'
      },
      {
        id: 's-m-2',
        textEs: '¿Qué son las modalidades oracionales?',
        textHy: 'Ի՞նչ են modalidades oracionales-ը։',
        tipEs: 'La actitud o postura del hablante ante lo que dice.',
        tipHy: 'Խոսողի դիրքորոշումը կամ վերաբերմունքը ասվածի նկատմամբ։'
      },
      {
        id: 's-m-3',
        textEs: '¿Cuáles son las principales modalidades?',
        textHy: 'Որո՞նք են հիմնական modalidades-ները։',
        tipEs: 'Enunciativa, interrogativa, exclamativa, exhortativa, desiderativa y dubitativa.',
        tipHy: 'Վեց հիմնական տեսակները'
      },
      {
        id: 's-m-4',
        textEs: 'Explícame la modalidad enunciativa.',
        textHy: 'Բացատրիր enunciativa տեսակը։',
        tipEs: 'Comunica un hecho o información. Puede ser afirmativa o negativa.',
        tipHy: 'Փաստ կամ տեղեկություն է հաղորդում (հաստատական կամ ժխտական)։'
      },
      {
        id: 's-m-5',
        textEs: 'Dame un ejemplo de oración interrogativa.',
        textHy: 'Բեր interrogativa նախադասության օրինակ։',
        tipEs: '¿A qué hora empieza la clase?',
        tipHy: '¿A qué hora empieza la clase?'
      },
      {
        id: 's-m-6',
        textEs: '¿Qué expresa una oración exclamativa?',
        textHy: 'Ի՞նչ է արտահայտում exclamativa նախադասությունը։',
        tipEs: 'Emociones intensas: sorpresa, alegría, pena, admiración.',
        tipHy: 'Ուժեղ հույզեր՝ զարմանք, ուրախություն, հիացմունք։'
      },
      {
        id: 's-m-7',
        textEs: '¿Para qué utilizamos una oración exhortativa?',
        textHy: 'Ինչի՞ համար ենք օգտագործում exhortativa նախադասությունը։',
        tipEs: 'Para mandar, pedir, aconsejar o prohibir algo.',
        tipHy: 'Հրաման, խնդրանք, խորհուրդ տալու կամ արգելելու համար։'
      },
      {
        id: 's-m-8',
        textEs: '¿Una oración exhortativa siempre es una orden fuerte?',
        textHy: 'Exhortativa նախադասությունը մի՞շտ է խիստ հրաման։',
        tipEs: 'No, puede ser una petición amable o una sugerencia.',
        tipHy: 'Ոչ, կարող է լինել քաղաքավարի խնդրանք կամ խորհուրդ։'
      },
      {
        id: 's-m-9',
        textEs: '¿Qué modalidad expresa un deseo?',
        textHy: 'Ո՞ր տեսակն է արտահայտում ցանկություն։',
        tipEs: 'La modalidad desiderativa.',
        tipHy: 'Desiderativa'
      },
      {
        id: 's-m-10',
        textEs: 'Ponme un ejemplo con “ojalá”.',
        textHy: 'Բեր օրինակ «ojalá»-ով։',
        tipEs: '¡Ojalá tengamos buen tiempo mañana!',
        tipHy: '¡Ojalá tengamos buen tiempo mañana!'
      },
      {
        id: 's-m-11',
        textEs: '¿Qué modalidad expresa duda o posibilidad?',
        textHy: 'Ո՞ր տեսակն է արտահայտում կասկած կամ հավանականություն։',
        tipEs: 'La modalidad dubitativa.',
        tipHy: 'Dubitativa'
      },
      {
        id: 's-m-12',
        textEs: '¿Qué tipo de oración es “Quizás venga mañana”?',
        textHy: 'Ի՞նչ տեսակի նախադասություն է «Quizás venga mañana»-ն։',
        tipEs: 'Es una oración dubitativa.',
        tipHy: 'Dubitativa'
      }
    ]
  },
  {
    titleEs: 'Elementos de la comunicación',
    titleHy: 'Հաղորդակցության տարրերը',
    phrases: [
      {
        id: 's-c-1',
        textEs: 'Pasamos ahora a los elementos de la comunicación.',
        textHy: 'Անցնենք հաղորդակցության տարրերին։',
        tipEs: 'Recuerda: emisor, receptor, mensaje, código, canal y contexto.',
        tipHy: 'Հիշիր բոլոր 6 տարրերը։'
      },
      {
        id: 's-c-2',
        textEs: '¿Qué es la comunicación?',
        textHy: 'Ի՞նչ է հաղորդակցությունը։',
        tipEs: 'El proceso mediante el cual se transmite información.',
        tipHy: 'Տեղեկատվության փոխանցման գործընթացը։'
      },
      {
        id: 's-c-3',
        textEs: '¿Cuáles son sus elementos principales?',
        textHy: 'Որո՞նք են նրա գլխավոր տարրերը։',
        tipEs: 'Emisor, receptor, mensaje, código, canal y contexto.',
        tipHy: 'Emisor, receptor, mensaje, código, canal, contexto.'
      },
      {
        id: 's-c-4',
        textEs: '¿Qué es el emisor? ¿Y el receptor?',
        textHy: 'Ի՞նչ է emisor-ը, և ի՞նչ է receptor-ը։',
        tipEs: 'Emisor envía; receptor recibe e interpreta.',
        tipHy: 'Emisor-ը ուղարկում է, receptor-ը՝ ստանում։'
      },
      {
        id: 's-c-5',
        textEs: '¿Qué es el mensaje? ¿Qué entendemos por código?',
        textHy: 'Ի՞նչ է mensaje-ը, և ի՞նչ է código-ն։',
        tipEs: 'Mensaje es el contenido; código es el sistema lingüístico (lengua).',
        tipHy: 'Mensaje՝ բովանդակություն, código՝ լեզվական նշանների համակարգ։'
      },
      {
        id: 's-c-6',
        textEs: '¿Qué es el canal? ¿Y el contexto?',
        textHy: 'Ի՞նչ է canal-ը, և ի՞նչ է contexto-ն։',
        tipEs: 'Canal es el soporte físico; contexto es la situación o lugar.',
        tipHy: 'Canal՝ ֆիզիկական միջոց, contexto՝ իրավիճակ կամ միջավայր։'
      },
      {
        id: 's-c-7',
        textEs: 'Voy a darte una situación: Pedro llama a Ana por teléfono y le dice: “Llegaré a las ocho”. ¿Quién es el emisor y el receptor?',
        textHy: 'Իրավիճակ՝ Պեդրոն զանգում է Անային և ասում՝ «Ժամը 8-ին կգամ»։ Ո՞վ է emisor-ը և receptor-ը։',
        tipEs: 'Emisor: Pedro. Receptor: Ana.',
        tipHy: 'Emisor՝ Pedro, Receptor՝ Ana'
      },
      {
        id: 's-c-8',
        textEs: '¿Cuál es el canal y el código en esa llamada?',
        textHy: 'Ո՞րն է canal-ը և código-ն այդ զանգի մեջ։',
        tipEs: 'Canal: el teléfono. Código: el idioma español.',
        tipHy: 'Canal՝ հեռախոս, Código՝ իսպաներեն։'
      }
    ]
  },
  {
    titleEs: 'Categorías gramaticales',
    titleHy: 'Խոսքի մասեր',
    phrases: [
      {
        id: 's-g-1',
        textEs: 'Ahora vamos con las categorías gramaticales.',
        textHy: 'Այժմ անցնենք քերականական կարգերին (խոսքի մասեր)։',
        tipEs: 'Clasificación de palabras según forma y función.',
        tipHy: 'Բառերի դասակարգում'
      },
      {
        id: 's-g-2',
        textEs: '¿Qué es un sustantivo? Dame dos ejemplos.',
        textHy: 'Ի՞նչ է գոյականը։ Բեր երկու օրինակ։',
        tipEs: 'Nombra personas, cosas, animales o ideas. Ej: libro, perro.',
        tipHy: 'Օր․՝ libro, perro'
      },
      {
        id: 's-g-3',
        textEs: '¿Qué es un adjetivo y qué relación tiene con el sustantivo?',
        textHy: 'Ի՞նչ է ածականը և ի՞նչ կապ ունի գոյականի հետ։',
        tipEs: 'Modifica al sustantivo indicando sus cualidades o características.',
        tipHy: 'Բնութագրում է գոյականին'
      },
      {
        id: 's-g-4',
        textEs: '¿Qué expresa un verbo? Dime tres verbos.',
        textHy: 'Ի՞նչ է արտահայտում բայը։ Ասա երեք բայ։',
        tipEs: 'Acciones, estados o procesos. Ej: cantar, vivir, ser.',
        tipHy: 'Օր․՝ cantar, vivir, ser'
      },
      {
        id: 's-g-5',
        textEs: '¿Qué es un adverbio y qué información puede expresar?',
        textHy: 'Ի՞նչ է մակբայը և ի՞նչ տեղեկություն կարող է արտահայտել։',
        tipEs: 'Modifica verbo, adjetivo u otro adverbio (tiempo, lugar, modo, cantidad).',
        tipHy: 'Ժամանակ, տեղ, ձև, քանակ'
      },
      {
        id: 's-g-6',
        textEs: '¿Qué es un pronombre y para qué lo utilizamos?',
        textHy: 'Ի՞նչ է դերանունը և ինչի՞ համար ենք օգտագործում։',
        tipEs: 'Sustituye al sustantivo para evitar repeticiones.',
        tipHy: 'Փոխարինում է գոյականին'
      },
      {
        id: 's-g-7',
        textEs: '¿Qué es un determinante? Dame un ejemplo de posesivo.',
        textHy: 'Ի՞նչ է որոշիչը։ Բեր ստացական որոշիչի օրինակ։',
        tipEs: 'Acompaña al nombre. Ej: "mi", "tu", "su".',
        tipHy: 'Օր․՝ mi, tu, su'
      },
      {
        id: 's-g-8',
        textEs: '¿Qué son los nexos? Dime algunos nexos.',
        textHy: 'Ի՞նչ են կապակցիչները։ Ասա մի քանի կապակցիչ։',
        tipEs: 'Unen palabras u oraciones: y, pero, porque, aunque.',
        tipHy: 'y, pero, porque, aunque'
      },
      {
        id: 's-g-9',
        textEs: 'Analiza palabra por palabra: “Mi hermana pequeña estudia mucho”.',
        textHy: 'Վերլուծիր բառ առ բառ՝ «Mi hermana pequeña estudia mucho»։',
        tipEs: 'Mi (det), hermana (sust), pequeña (adj), estudia (verbo), mucho (adv).',
        tipHy: 'Ամբողջական վերլուծություն'
      }
    ]
  },
  {
    titleEs: 'Preguntas sorpresa y cierre',
    titleHy: 'Անսպասելի հարցեր և ավարտ',
    phrases: [
      {
        id: 's-mix-1',
        textEs: '“¡Qué día tan bonito!”: dime la modalidad y la función del lenguaje.',
        textHy: '«¡Qué día tan bonito!»՝ ասա modalidad-ը և función-ը։',
        tipEs: 'Modalidad: exclamativa. Función: expresiva.',
        tipHy: 'Exclamativa + expresiva'
      },
      {
        id: 's-mix-2',
        textEs: '“Abre el libro”: ¿qué modalidad tiene y qué función predomina?',
        textHy: '«Abre el libro»՝ ի՞նչ modalidad ունի և ո՞ր función-ն է գերակշռում։',
        tipEs: 'Modalidad: exhortativa. Función: apelativa.',
        tipHy: 'Exhortativa + apelativa'
      },
      {
        id: 's-mix-3',
        textEs: '¿Cuál es la diferencia entre un pronombre y un determinante?',
        textHy: 'Ի՞նչ տարբերություն կա դերանվան (pronombre) և որոշիչի (determinante) միջև։',
        tipEs: 'Determinante acompaña al nombre (mi libro); pronombre lo sustituye (este es mío).',
        tipHy: 'Որոշիչը ուղեկցում է գոյականին, դերանունը՝ փոխարինում։'
      },
      {
        id: 's-mix-4',
        textEs: 'Muy bien. Hemos terminado el examen. ¡Buen trabajo!',
        textHy: 'Շատ լավ։ Մենք ավարտեցինք քննությունը։ Գերազանց աշխատանք։',
        tipEs: 'Responde: "Muchas gracias, profesor/a."',
        tipHy: 'Պատասխանիր՝ «Muchas gracias»'
      }
    ]
  }
];

export const EXERCISES_DATA: ExerciseItem[] = [
  {
    id: 'ex-1',
    num: 1,
    titleEs: '1. Lee el texto y encuentra los tipos',
    titleHy: '1. Կարդա տեքստը և գտիր տեսակները',
    promptEs: 'Lee atentamente el texto en clase y localiza las oraciones que corresponden a cada función del lenguaje y modalidad oracional.',
    promptHy: 'Ուշադիր կարդա դասարանական տեքստը և գտիր լեզվի գործառույթներին և նախադասության տեսակներին համապատասխանող արտահայտությունները։',
    contentEs: `La profesora entra en clase y dice:
—Buenos días. ¿Me escucháis bien?
—Hoy vamos a estudiar las categorías gramaticales.
—¡Es un tema muy interesante!
—Carlos, abre el libro en la página veinte, por favor.
—Un sustantivo es una palabra que sirve para nombrar personas, animales, cosas, lugares o ideas.
—Por ejemplo, casa es un sustantivo.
—Ana pregunta: «¿También “Madrid” es un sustantivo?»
—La profesora responde: «Sí, Madrid es un nombre propio».
—Ojalá todos entendáis bien esta lección.
—Quizás mañana hagamos un ejercicio parecido.`,
    contentHy: `Ուսուցչուհին մտնում է դասարան և ասում․
—Բարի լույս։ Ինձ լա՞վ եք լսում։
—Այսօր ուսումնասիրելու ենք քերականական կարգերը։
—Ի՜նչ հետաքրքիր թեմա է։
—Կառլոս, բացի՛ր գիրքը քսաներորդ էջում, խնդրում եմ։
—Գոյականը բառ է, որը ծառայում է մարդկանց, կենդանիների, առարկաների, վայրերի կամ գաղափարների անվանմանը։
—Օրինակ՝ casa բառը գոյական է։
—Անան հարցնում է․ «Madrid-ը նույնպես գոյակա՞ն է»։
—Ուսուցչուհին պատասխանում է․ «Այո, Madrid-ը հատուկ անուն է»։
—Երանի բոլորդ լավ հասկանաք այս դասը։
—Հնարավոր է՝ վաղը նման վարժություն անենք։`,
    subQuestions: [
      {
        id: 'q1-1',
        qEs: '1. Encuentra una frase con función fática.',
        qHy: '1. Գտի՛ր ֆատիկ գործառույթով (fática) նախադասություն։',
        expectedAnswerEs: '«¿Me escucháis bien?»',
        expectedAnswerHy: '«¿Me escucháis bien?» (Ինձ լա՞վ եք լսում)՝ ստուգում է լսելիության կապը։',
        explanationEs: 'Comprueba si el canal de comunicación funciona correctamente.',
        explanationHy: 'Ստուգում է կապի ուղու աշխատանքը։'
      },
      {
        id: 'q1-2',
        qEs: '2. Encuentra una frase con función expresiva.',
        qHy: '2. Գտի՛ր արտահայտչական գործառույթով (expresiva) նախադասություն։',
        expectedAnswerEs: '«¡Es un tema muy interesante!»',
        expectedAnswerHy: '«¡Es un tema muy interesante!» (Ի՜նչ հետաքրքիր թեմա է)՝ հուզական կարծիք։',
        explanationEs: 'Expresa entusiasmo y opinión positiva.',
        explanationHy: 'Արտահայտում է խոսողի ոգևորությունը։'
      },
      {
        id: 'q1-3',
        qEs: '3. Encuentra una frase con función apelativa.',
        qHy: '3. Գտի՛ր կոչական / ներգործական (apelativa) նախադասություն։',
        expectedAnswerEs: '«Carlos, abre el libro en la página veinte, por favor.»',
        expectedAnswerHy: '«Carlos, abre el libro...» (Կառլոս, բացի՛ր գիրքը...)՝ դրդում է գործողության։',
        explanationEs: 'Busca que Carlos realice una acción (abrir el libro).',
        explanationHy: 'Կառլոսին դրդում է գիրքը բացելու։'
      },
      {
        id: 'q1-4',
        qEs: '4. Encuentra una frase con función metalingüística.',
        qHy: '4. Գտի՛ր մետալեզվական գործառույթով (metalingüística) նախադասություն։',
        expectedAnswerEs: '«Un sustantivo es una palabra que sirve para nombrar personas, animales, cosas, lugares o ideas.» (o «Madrid es un nombre propio»)',
        expectedAnswerHy: '«Un sustantivo es una palabra...» կամ «Madrid es un nombre propio»՝ խոսում է լեզվական կանոնի մասին։',
        explanationEs: 'Explica la definición y clasificación gramatical.',
        explanationHy: 'Բացատրում է քերականական սահմանումը։'
      },
      {
        id: 'q1-5',
        qEs: '5. ¿Qué oración es interrogativa?',
        qHy: '5. Ո՞ր նախադասությունն է հարցական (interrogativa)։',
        expectedAnswerEs: '«¿Me escucháis bien?» o «¿También “Madrid” es un sustantivo?»',
        expectedAnswerHy: '«¿Me escucháis bien?» կամ «¿También “Madrid” es un sustantivo?»'
      },
      {
        id: 'q1-6',
        qEs: '6. ¿Qué oración es exclamativa?',
        qHy: '6. Ո՞ր նախադասությունն է բացականչական (exclamativa)։',
        expectedAnswerEs: '«¡Es un tema muy interesante!»',
        expectedAnswerHy: '«¡Es un tema muy interesante!» (¡!)'
      },
      {
        id: 'q1-7',
        qEs: '7. Encuentra una oración exhortativa.',
        qHy: '7. Գտի՛ր հրամայական / դրդողական (exhortativa) նախադասություն։',
        expectedAnswerEs: '«Carlos, abre el libro en la página veinte, por favor.»',
        expectedAnswerHy: '«Abre el libro...»'
      },
      {
        id: 'q1-8',
        qEs: '8. Encuentra una oración desiderativa.',
        qHy: '8. Գտի՛ր ցանկական (desiderativa) նախադասություն։',
        expectedAnswerEs: '«Ojalá todos entendáis bien esta lección.»',
        expectedAnswerHy: '«Ojalá todos entendáis bien esta lección.» (Երանի բոլորդ լավ հասկանաք...)'
      },
      {
        id: 'q1-9',
        qEs: '9. Encuentra una oración dubitativa.',
        qHy: '9. Գտի՛ր կասկածական (dubitativa) նախադասություն։',
        expectedAnswerEs: '«Quizás mañana hagamos un ejercicio parecido.»',
        expectedAnswerHy: '«Quizás mañana hagamos un ejercicio parecido.» (Հնարավոր է՝ վաղը նման վարժություն անենք)'
      }
    ],
    fullAnswerEs: `Respuestas Ejercicio 1:
1. Función fática: «¿Me escucháis bien?»
2. Función expresiva: «¡Es un tema muy interesante!»
3. Función apelativa: «Carlos, abre el libro en la página veinte, por favor.»
4. Función metalingüística: «Un sustantivo es una palabra que sirve para nombrar...»
5. Interrogativa: «¿También “Madrid” es un sustantivo?» / «¿Me escucháis bien?»
6. Exclamativa: «¡Es un tema muy interesante!»
7. Exhortativa: «Carlos, abre el libro en la página veinte, por favor.»
8. Desiderativa: «Ojalá todos entendáis bien esta lección.»
9. Dubitativa: «Quizás mañana hagamos un ejercicio parecido.»`,
    fullAnswerHy: `Վարժություն 1-ի ամբողջական պատասխանները․
1. Función fática → «¿Me escucháis bien?»
2. Función expresiva → «¡Es un tema muy interesante!»
3. Función apelativa → «Abre el libro...»
4. Función metalingüística → «Un sustantivo es una palabra...»
5. Interrogativa → «¿También “Madrid” es un sustantivo?»
6. Exclamativa → «¡Es un tema muy interesante!»
7. Exhortativa → «Abre el libro en la página veinte...»
8. Desiderativa → «Ojalá todos entendáis...»
9. Dubitativa → «Quizás mañana hagamos...»`
  },
  {
    id: 'ex-2',
    num: 2,
    titleEs: '2. Función + modalidad',
    titleHy: '2. Գործառույթ + նախադասության տեսակ',
    promptEs: 'Para cada oración, indica: a) función del lenguaje predominante, b) modalidad oracional.',
    promptHy: 'Յուրաքանչյուր նախադասության համար նշի՛ր՝ ա) լեզվի գործառույթը, բ) նախադասության տեսակը։',
    subQuestions: [
      {
        id: 'q2-1',
        qEs: '1. «¡Estoy muy contenta con mi nota!»',
        qHy: '1. «¡Estoy muy contenta con mi nota!» (Ես շատ ուրախ եմ իմ գնահատականի համար)',
        expectedAnswerEs: 'Función: expresiva | Modalidad: exclamativa',
        expectedAnswerHy: 'Función: expresiva (արտահայտչական) | Modalidad: exclamativa (բացականչական)'
      },
      {
        id: 'q2-2',
        qEs: '2. «Cierra la ventana, por favor.»',
        qHy: '2. «Cierra la ventana, por favor.» (Փակի՛ր պատուհանը, խնդրում եմ)',
        expectedAnswerEs: 'Función: apelativa | Modalidad: exhortativa',
        expectedAnswerHy: 'Función: apelativa (կոչական) | Modalidad: exhortativa (հրամայական)'
      },
      {
        id: 'q2-3',
        qEs: '3. «¿Me oyes bien?»',
        qHy: '3. «¿Me oyes bien?» (Ինձ լա՞վ ես լսում)',
        expectedAnswerEs: 'Función: fática | Modalidad: interrogativa',
        expectedAnswerHy: 'Función: fática (ֆատիկ) | Modalidad: interrogativa (հարցական)'
      },
      {
        id: 'q2-4',
        qEs: '4. «La Tierra gira alrededor del Sol.»',
        qHy: '4. «La Tierra gira alrededor del Sol.» (Երկիրը պտտվում է Արեգակի շուրջ)',
        expectedAnswerEs: 'Función: referencial o representativa | Modalidad: enunciativa (afirmativa)',
        expectedAnswerHy: 'Función: referencial (տեղեկատվական) | Modalidad: enunciativa (պատմողական)'
      },
      {
        id: 'q2-5',
        qEs: '5. «Ojalá mañana no llueva.»',
        qHy: '5. «Ojalá mañana no llueva.» (Երանի վաղը անձրև չգա)',
        expectedAnswerEs: 'Función: expresiva (deseo) | Modalidad: desiderativa',
        expectedAnswerHy: 'Función: expresiva (զգացմունք/ցանկություն) | Modalidad: desiderativa (ցանկական)'
      },
      {
        id: 'q2-6',
        qEs: '6. «Quizás Pedro esté en casa.»',
        qHy: '6. «Quizás Pedro esté en casa.» (Հնարավոր է՝ Պեդրոն տանն է)',
        expectedAnswerEs: 'Modalidad: dubitativa (Función: referencial/expresiva)',
        expectedAnswerHy: 'Modalidad: dubitativa (կասկածական)'
      },
      {
        id: 'q2-7',
        qEs: '7. «“Rápidamente” es un adverbio.»',
        qHy: '7. «“Rápidamente” es un adverbio.» («Rápidamente» բառը մակբայ է)',
        expectedAnswerEs: 'Función: metalingüística | Modalidad: enunciativa',
        expectedAnswerHy: 'Función: metalingüística (մետալեզվական) | Modalidad: enunciativa (պատմողական)'
      }
    ],
    fullAnswerEs: `1. expresiva + exclamativa
2. apelativa + exhortativa
3. fática + interrogativa
4. referencial + enunciativa
5. desiderativa (función expresiva)
6. dubitativa
7. metalingüística + enunciativa`,
    fullAnswerHy: `1. expresiva + exclamativa
2. apelativa + exhortativa
3. fática + interrogativa
4. referencial + enunciativa
5. desiderativa
6. dubitativa
7. metalingüística + enunciativa`
  },
  {
    id: 'ex-3',
    num: 3,
    titleEs: '3. Detective de la comunicación',
    titleHy: '3. Հաղորդակցության հետախույզ',
    promptEs: 'Analiza los elementos de la comunicación en las dos situaciones cotidianas.',
    promptHy: 'Վերլուծիր հաղորդակցության տարրերը երկու առօրյա իրավիճակներում։',
    subQuestions: [
      {
        id: 'q3-sit1',
        qEs: 'Situación 1: La profesora escribe en la pizarra: «El examen será el viernes a las diez». Los alumnos leen el mensaje.',
        qHy: 'Իրավիճակ 1․ Ուսուցչուհին գրատախտակին գրում է․ «Քննությունը կլինի ուրբաթ օրը՝ ժամը տասին»։ Աշակերտները կարդում են հաղորդագրությունը։',
        expectedAnswerEs: 'Emisor: La profesora | Receptor: Los alumnos | Mensaje: «El examen será el viernes a las diez» | Código: Español escrito | Canal: La pizarra / la escritura (visual) | Contexto: Una clase / aula escolar',
        expectedAnswerHy: 'Emisor՝ la profesora (ուսուցչուհի) | Receptor՝ los alumnos (աշակերտներ) | Mensaje՝ «El examen será...» | Código՝ español (իսպաներեն) | Canal՝ la pizarra / escritura (գրատախտակ, գրավոր) | Contexto՝ una clase (դասարան)'
      },
      {
        id: 'q3-sit2',
        qEs: 'Situación 2: María llama por teléfono a su hermano y le dice: «Voy a llegar tarde. Empieza a cenar sin mí».',
        qHy: 'Իրավիճակ 2․ Մարիան զանգում է եղբորը և ասում․ «Ես ուշ եմ հասնելու։ Սկսիր ընթրել առանց ինձ»։',
        expectedAnswerEs: 'Emisor: María | Receptor: Su hermano | Mensaje: «Voy a llegar tarde. Empieza a cenar sin mí» | Código: Español | Canal: El teléfono (vía auditiva)',
        expectedAnswerHy: 'Emisor՝ María | Receptor՝ su hermano | Mensaje՝ «Voy a llegar tarde...» | Código՝ español | Canal՝ teléfono (հեռախոս)'
      },
      {
        id: 'q3-extra',
        qEs: 'Pregunta extra: ¿Qué función del lenguaje predomina en «Empieza a cenar sin mí»?',
        qHy: 'Լրացուցիչ հարց․ Լեզվի ո՞ր գործառույթն է գերակշռում «Սկսիր ընթրել առանց ինձ» նախադասության մեջ։',
        expectedAnswerEs: 'Función apelativa (o conativa), porque da una instrucción / orden al receptor.',
        expectedAnswerHy: 'Función apelativa (կոչական/ներգործական), քանի որ հրահանգ է տալիս լսողին։'
      }
    ],
    fullAnswerEs: `Situación 1:
- Emisor: la profesora
- Receptor: los alumnos
- Mensaje: «El examen será el viernes a las diez»
- Código: español
- Canal: la escritura / la pizarra
- Contexto: una clase

Situación 2:
- Emisor: María
- Receptor: su hermano
- Mensaje: «Voy a llegar tarde. Empieza a cenar sin mí»
- Código: español
- Canal: teléfono
Extra: «Empieza a cenar sin mí» → función apelativa.`,
    fullAnswerHy: `Իրավիճակ 1․
- Emisor: la profesora
- Receptor: los alumnos
- Mensaje: «El examen será el viernes a las diez»
- Código: español
- Canal: la escritura / la pizarra
- Contexto: una clase

Իրավիճակ 2․
- Emisor: María
- Receptor: su hermano
- Mensaje: «Voy a llegar tarde. Empieza a cenar sin mí»
- Código: español
- Canal: teléfono
Լրացուցիչ՝ «Empieza a cenar sin mí» → función apelativa.`
  },
  {
    id: 'ex-4',
    num: 4,
    titleEs: '4. Encuentra las categorías gramaticales',
    titleHy: '4. Գտի՛ր խոսքի մասերը',
    promptEs: 'Descompón las siguientes tres oraciones según sus categorías gramaticales.',
    promptHy: 'Վերլուծիր հետևյալ երեք նախադասությունները ըստ խոսքի մասերի։',
    subQuestions: [
      {
        id: 'q4-1',
        qEs: 'Oración 1: «Mi hermana pequeña estudia mucho hoy.» (Իմ փոքր քույրն այսօր շատ է սովորում)',
        qHy: 'Նախադասություն 1․ «Mi hermana pequeña estudia mucho hoy.»',
        expectedAnswerEs: 'Mi (determinante posesivo) · hermana (sustantivo común) · pequeña (adjetivo) · estudia (verbo) · mucho (adverbio de cantidad) · hoy (adverbio de tiempo)',
        expectedAnswerHy: 'Mi → որոշիչ · hermana → գոյական · pequeña → ածական · estudia → բայ · mucho → քանակի մակբայ · hoy → ժամանակի մակբայ'
      },
      {
        id: 'q4-2',
        qEs: 'Oración 2: «Ella compra dos libros interesantes.» (Նա երկու հետաքրքիր գիրք է գնում)',
        qHy: 'Նախադասություն 2․ «Ella compra dos libros interesantes.»',
        expectedAnswerEs: 'Ella (pronombre personal) · compra (verbo) · dos (determinante numeral) · libros (sustantivo) · interesantes (adjetivo calificativo)',
        expectedAnswerHy: 'Ella → դերանուն · compra → բայ · dos → թվային որոշիչ · libros → գոյական · interesantes → ածական'
      },
      {
        id: 'q4-3',
        qEs: 'Oración 3: «Pedro estudia, pero su hermano descansa.» (Պեդրոն սովորում է, բայց նրա եղբայրը հանգստանում է)',
        qHy: 'Նախադասություն 3․ «Pedro estudia, pero su hermano descansa.»',
        expectedAnswerEs: 'Pedro (sustantivo propio) · estudia (verbo) · pero (nexo / conjunción) · su (determinante posesivo) · hermano (sustantivo común) · descansa (verbo)',
        expectedAnswerHy: 'Pedro → հատուկ գոյական · estudia → բայ · pero → կապակցիչ (շաղկապ) · su → ստացական որոշիչ · hermano → գոյական · descansa → բայ'
      }
    ],
    fullAnswerEs: `Oración 1:
Mi → determinante
hermana → sustantivo
pequeña → adjetivo
estudia → verbo
mucho → adverbio
hoy → adverbio

Oración 2:
Ella → pronombre
compra → verbo
dos → determinante numeral
libros → sustantivo
interesantes → adjetivo

Oración 3:
Pedro → sustantivo propio
estudia / descansa → verbos
pero → nexo
su → determinante posesivo
hermano → sustantivo común`,
    fullAnswerHy: `Նախադասություն 1․
Mi → որոշիչ
hermana → գոյական
pequeña → ածական
estudia → բայ
mucho → մակբայ
hoy → մակբայ

Նախադասություն 2․
Ella → դերանուն
compra → բայ
dos → թվային որոշիչ
libros → գոյական
interesantes → ածական

Նախադասություն 3․
Pedro → հատուկ գոյական
estudia / descansa → բայեր
pero → կապակցիչ
su → որոշիչ
hermano → գոյական`
  },
  {
    id: 'ex-5',
    num: 5,
    titleEs: '5. Encuentra el intruso',
    titleHy: '5. Գտի՛ր ավելորդ բառը',
    promptEs: 'En cada grupo hay una palabra que pertenece a otra categoría gramatical. ¡Descúbrela y explica por qué!',
    promptHy: 'Յուրաքանչյուր շարքում կա մեկ բառ, որը պատկանում է այլ խոսքի մասի։ Գտի՛ր այն և բացատրի՛ր։',
    subQuestions: [
      {
        id: 'q5-1',
        qEs: '1. casa – perro – felicidad – bonito',
        qHy: '1. casa – perro – felicidad – bonito (Ո՞րն է ավելորդը)',
        options: ['casa', 'perro', 'felicidad', 'bonito'],
        correctOption: 'bonito',
        expectedAnswerEs: '«bonito» es un adjetivo; los demás (casa, perro, felicidad) son sustantivos.',
        expectedAnswerHy: '«bonito»-ն ածական է, իսկ մնացածը գոյականներ են (տուն, շուն, երջանկություն)։'
      },
      {
        id: 'q5-2',
        qEs: '2. grande – pequeño – interesante – lentamente',
        qHy: '2. grande – pequeño – interesante – lentamente (Ո՞րն է ավելորդը)',
        options: ['grande', 'pequeño', 'interesante', 'lentamente'],
        correctOption: 'lentamente',
        expectedAnswerEs: '«lentamente» es un adverbio (terminado en -mente); los demás son adjetivos.',
        expectedAnswerHy: '«lentamente»-ն մակբայ է (-mente), իսկ մյուսները ածականներ են։'
      },
      {
        id: 'q5-3',
        qEs: '3. comer – estudiar – trabajar – mañana',
        qHy: '3. comer – estudiar – trabajar – mañana (Ո՞րն է ավելորդը)',
        options: ['comer', 'estudiar', 'trabajar', 'mañana'],
        correctOption: 'mañana',
        expectedAnswerEs: '«mañana» es un adverbio de tiempo (o sustantivo); los demás son verbos en infinitivo.',
        expectedAnswerHy: '«mañana»-ն ժամանակի մակբայ է, իսկ մյուսները անորոշ բայեր են (ինֆինիտիվ)։'
      },
      {
        id: 'q5-4',
        qEs: '4. yo – ella – nosotros – mi',
        qHy: '4. yo – ella – nosotros – mi (Ո՞րն է ավելորդը)',
        options: ['yo', 'ella', 'nosotros', 'mi'],
        correctOption: 'mi',
        expectedAnswerEs: '«mi» es un determinante posesivo (va con sustantivo, ej: mi libro); los demás son pronombres personales (van solos).',
        expectedAnswerHy: '«mi»-ն որոշիչ է (գալիս է գոյականի հետ), իսկ մյուսները անձնական դերանուններ են։'
      },
      {
        id: 'q5-5',
        qEs: '5. pero – y – porque – rápido',
        qHy: '5. pero – y – porque – rápido (Ո՞րն է ավելորդը)',
        options: ['pero', 'y', 'porque', 'rápido'],
        correctOption: 'rápido',
        expectedAnswerEs: '«rápido» es un adjetivo (o adverbio); los demás (pero, y, porque) son nexos (conjunciones).',
        expectedAnswerHy: '«rápido»-ն ածական է, իսկ մնացածը կապակցիչներ / շաղկապներ են։'
      }
    ],
    fullAnswerEs: `1. bonito → adjetivo; los demás son sustantivos.
2. lentamente → adverbio; los demás son adjetivos.
3. mañana → adverbio; los demás son verbos.
4. mi → determinante; los demás son pronombres personales.
5. rápido → adjetivo; los demás son nexos.`,
    fullAnswerHy: `1. bonito → ածական է, մյուսները գոյական են։
2. lentamente → մակբայ է, մյուսները ածական են։
3. mañana → մակբայ է, մյուսները բայ են։
4. mi → որոշիչ է, մյուսները անձնական դերանուններ են։
5. rápido → ածական է, մյուսները կապակցիչներ են։`
  },
  {
    id: 'ex-6',
    num: 6,
    titleEs: '6. Cambia la modalidad',
    titleHy: '6. Փոխի՛ր նախադասության տեսակը',
    promptEs: 'Transforma la oración original a la modalidad requerida según el modelo: «Tú estudias español» (enunciativa) → «¿Estudias español?» (interrogativa).',
    promptHy: 'Փոխակերպիր նախադասությունը պահանջվող տեսակի համաձայն։',
    subQuestions: [
      {
        id: 'q6-1',
        qEs: '1. «Pedro viene mañana.» ➡ conviértela en interrogativa.',
        qHy: '1. «Pedro viene mañana» նախադասությունը դարձրու հարցական։',
        expectedAnswerEs: '¿Pedro viene mañana? (o ¿Viene Pedro mañana?)',
        expectedAnswerHy: '«¿Pedro viene mañana?» (կամ «¿Viene Pedro mañana?») — Պեդրոն վաղը գալի՞ս է։'
      },
      {
        id: 'q6-2',
        qEs: '2. «Tú abres el libro.» ➡ conviértela en exhortativa (imperativa).',
        qHy: '2. «Tú abres el libro» նախադասությունը դարձրու հրամայական։',
        expectedAnswerEs: 'Abre el libro. (o ¡Abre el libro!)',
        expectedAnswerHy: '«Abre el libro.» (Բացի՛ր գիրքը)'
      },
      {
        id: 'q6-3',
        qEs: '3. «María viene mañana.» ➡ conviértela en dubitativa usando quizás.',
        qHy: '3. «María viene mañana» նախադասությունը դարձրու կասկածական՝ օգտագործելով quizás։',
        expectedAnswerEs: 'Quizás María venga mañana. (o Quizás venga María mañana)',
        expectedAnswerHy: '«Quizás María venga mañana.» (Հնարավոր է՝ Մարիան վաղը գա)'
      },
      {
        id: 'q6-4',
        qEs: '4. «Pedro aprueba el examen.» ➡ conviértela en desiderativa usando ojalá.',
        qHy: '4. «Pedro aprueba el examen» նախադասությունը դարձրու ցանկական՝ օգտագործելով ojalá։',
        expectedAnswerEs: '¡Ojalá Pedro apruebe el examen! (o ¡Ojalá apruebe Pedro el examen!)',
        expectedAnswerHy: '«¡Ojalá Pedro apruebe el examen!» (Երանի Պեդրոն քննությունը հանձնի)'
      }
    ],
    fullAnswerEs: `1. ¿Pedro viene mañana? (o ¿Viene Pedro mañana?)
2. Abre el libro.
3. Quizás María venga mañana.
4. ¡Ojalá Pedro apruebe el examen!`,
    fullAnswerHy: `1. ¿Pedro viene mañana?
2. Abre el libro.
3. Quizás María venga mañana.
4. Ojalá Pedro apruebe el examen.`
  },
  {
    id: 'ex-7',
    num: 7,
    titleEs: '7. Texto sorpresa de examen: Sofía en la tienda',
    titleHy: '7. Անակնկալ քննական տեքստ՝ Սոֆիան խանութում',
    promptEs: 'Lee este diálogo auténtico de examen y responde a las 10 preguntas analizando las 4 áreas lingüísticas.',
    promptHy: 'Կարդա այս քննական երկխոսությունը և պատասխանիր 10 հարցերին՝ վերլուծելով 4 լեզվական թեմաները։',
    contentEs: `Sofía entra en una tienda y dice:
—Hola, buenos días.
—¿Me puede ayudar?
—Busco una chaqueta azul.
El vendedor responde:
—Claro. Mire esta. Es nueva y cuesta cincuenta euros.
Sofía exclama:
—¡Qué bonita!
Después pregunta:
—¿Tiene una talla más pequeña?
El vendedor dice:
—Espere aquí, por favor. Voy a buscarla.`,
    contentHy: `Սոֆիան մտնում է խանութ և ասում․
—Բարև, բարի լույս։
—Կարո՞ղ եք ինձ օգնել։
—Կապույտ բաճկոն եմ փնտրում։
Վաճառողը պատասխանում է․
—Իհարկե։ Նայեք այս մեկին։ Այն նոր է և արժե հիսուն եվրո։
Սոֆիան բացականչում է․
—Ի՜նչ գեղեցիկ է։
Հետո հարցնում է․
—Ավելի փոքր չափ ունե՞ք։
Վաճառողն ասում է․
—Սպասեք այստեղ, խնդրում եմ։ Գնամ այն բերեմ։`,
    subQuestions: [
      {
        id: 'q7-1',
        qEs: '1. ¿Quién es el emisor al principio del diálogo?',
        qHy: '1. Ո՞վ է սկզբում հաղորդագրության ուղարկողը (emisor)։',
        expectedAnswerEs: 'Sofía.',
        expectedAnswerHy: 'Sofía (Սոֆիան)։'
      },
      {
        id: 'q7-2',
        qEs: '2. ¿Quién es el receptor al principio?',
        qHy: '2. Ո՞վ է ստացողը (receptor)։',
        expectedAnswerEs: 'El vendedor.',
        expectedAnswerHy: 'El vendedor (վաճառողը)։'
      },
      {
        id: 'q7-3',
        qEs: '3. ¿Cuál es el canal?',
        qHy: '3. Ո՞րն է հաղորդակցության միջոցը (canal)։',
        expectedAnswerEs: 'La voz / el aire / la comunicación oral presencial.',
        expectedAnswerHy: 'La voz / օդը / բանավոր խոսքը։'
      },
      {
        id: 'q7-4',
        qEs: '4. ¿Cuál es el código?',
        qHy: '4. Ո՞րն է կոդը (código)։',
        expectedAnswerEs: 'El idioma español.',
        expectedAnswerHy: 'El español (իսպաներեն լեզուն)։'
      },
      {
        id: 'q7-5',
        qEs: '5. Encuentra una oración interrogativa en el texto.',
        qHy: '5. Գտի՛ր հարցական նախադասություն (interrogativa)։',
        expectedAnswerEs: '«¿Me puede ayudar?» o «¿Tiene una talla más pequeña?»',
        expectedAnswerHy: '«¿Me puede ayudar?» կամ «¿Tiene una talla más pequeña?»'
      },
      {
        id: 'q7-6',
        qEs: '6. Encuentra una oración exclamativa.',
        qHy: '6. Գտի՛ր բացականչական նախադասություն (exclamativa)։',
        expectedAnswerEs: '«¡Qué bonita!»',
        expectedAnswerHy: '«¡Qué bonita!» (Ի՜նչ գեղեցիկ է)'
      },
      {
        id: 'q7-7',
        qEs: '7. Encuentra una oración exhortativa.',
        qHy: '7. Գտի՛ր հրամայական / դրդողական նախադասություն (exhortativa)։',
        expectedAnswerEs: '«Espere aquí, por favor.» (o «Mire esta»)',
        expectedAnswerHy: '«Espere aquí, por favor.» կամ «Mire esta»'
      },
      {
        id: 'q7-8',
        qEs: '8. ¿Qué función predomina en «¡Qué bonita!»?',
        qHy: '8. Ո՞ր գործառույթն է գերակշռում «¡Qué bonita!» նախադասության մեջ։',
        expectedAnswerEs: 'Función expresiva (manifiesta la admiración y agrado de Sofía).',
        expectedAnswerHy: 'Función expresiva (արտահայտչական)՝ արտահայտում է հիացմունք։'
      },
      {
        id: 'q7-9',
        qEs: '9. ¿Qué función predomina en «Espere aquí, por favor»?',
        qHy: '9. Ո՞ր գործառույթն է գերակշռում «Espere aquí, por favor» նախադասության մեջ։',
        expectedAnswerEs: 'Función apelativa (el vendedor pide una acción al cliente: esperar).',
        expectedAnswerHy: 'Función apelativa (կոչական/ներգործական)՝ վաճառողը խնդրում է սպասել։'
      },
      {
        id: 'q7-10',
        qEs: '10. En «Busco una chaqueta azul», identifica las categorías gramaticales.',
        qHy: '10. «Busco una chaqueta azul» նախադասության մեջ որոշի՛ր՝ busco / una / chaqueta / azul բառերի խոսքի մասերը։',
        expectedAnswerEs: 'busco → verbo | una → determinante indefinido | chaqueta → sustantivo común | azul → adjetivo calificativo',
        expectedAnswerHy: 'busco → բայ | una → անորոշ որոշիչ | chaqueta → գոյական | azul → ածական'
      }
    ],
    fullAnswerEs: `1. Sofía.
2. El vendedor.
3. La voz / comunicación oral.
4. El español.
5. ¿Me puede ayudar? / ¿Tiene una talla más pequeña?
6. ¡Qué bonita!
7. Espere aquí, por favor.
8. Función expresiva.
9. Función apelativa.
10. busco → verbo; una → determinante; chaqueta → sustantivo; azul → adjetivo.`,
    fullAnswerHy: `1. Sofía (Սոֆիա)
2. El vendedor (վաճառող)
3. La voz / oral (ձայն / բանավոր)
4. El español (իսպաներեն)
5. ¿Me puede ayudar? կամ ¿Tiene una talla más pequeña?
6. ¡Qué bonita!
7. Espere aquí, por favor.
8. Función expresiva
9. Función apelativa
10. busco → բայ, una → որոշիչ, chaqueta → գոյական, azul → ածական`
  }
];

export const MNEMONICS_QUESTIONS = [
  {
    temaEs: 'Funciones del lenguaje',
    temaHy: 'Լեզվի գործառույթներ',
    preguntaEs: '¿Para qué habla?',
    preguntaHy: 'Ինչի՞ համար է խոսում։',
    icon: '🎯',
    color: 'emerald'
  },
  {
    temaEs: 'Modalidades oracionales',
    temaHy: 'Նախադասությունների տեսակներ',
    preguntaEs: '¿Cómo dice la oración?',
    preguntaHy: 'Ինչպե՞ս է ասում նախադասությունը։',
    icon: '💬',
    color: 'blue'
  },
  {
    temaEs: 'Elementos de la comunicación',
    temaHy: 'Հաղորդակցության տարրեր',
    preguntaEs: '¿Quién comunica qué y cómo?',
    preguntaHy: 'Ո՞վ, ի՞նչ և ինչպե՞ս է հաղորդում։',
    icon: '📡',
    color: 'amber'
  },
  {
    temaEs: 'Categorías gramaticales',
    temaHy: 'Խոսքի մասեր',
    preguntaEs: '¿Qué tipo de palabra es?',
    preguntaHy: 'Ի՞նչ խոսքի մաս է։',
    icon: '🧩',
    color: 'purple'
  }
];

export const TRICKY_QUESTIONS = [
  {
    id: 't1',
    qEs: '“¿Me oyes?” es interrogativa. ¿También es fática?',
    qHy: '«¿Me oyes?» հարցական է։ Արդյո՞ք նաև fática է։',
    ansEs: '✅ Sí. Es interrogativa por su modalidad (pregunta directa con signos ¿?) y fática por su función (comprueba que el canal auditivo funciona).',
    ansHy: '✅ Այո։ Այն հարցական է ըստ modalida-ի և ֆատիկ՝ ըստ լեզվական función-ի։'
  },
  {
    id: 't2',
    qEs: '“Cierra la puerta” es apelativa o exhortativa?',
    qHy: '«Cierra la puerta» apelativa է, թե՞ exhortativa։',
    ansEs: '✅ Las dos cosas a la vez: Apelativa es su FUNCIÓN (pretende que el receptor actúe). Exhortativa es su MODALIDAD (es una orden o mandato).',
    ansHy: '✅ Երկուսն էլ միաժամանակ․ Apelativa-ն նրա función-ն է (նպատակը), իսկ Exhortativa-ն՝ նրա modalidad-ը (հրաման)։'
  },
  {
    id: 't3',
    qEs: '¿“Ella” es sustantivo?',
    qHy: '«Ella» բառը գոյակա՞ն է։',
    ansEs: '❌ No. Es un PRONOMBRE personal. Sustituye al sustantivo (ej. "María estudia" → "Ella estudia").',
    ansHy: '❌ Ոչ։ Դա անձնական ԴԵՐԱՆՈՒՆ է (pronombre), որը փոխարինում է գոյականին։'
  },
  {
    id: 't4',
    qEs: '¿“Mi” en “mi casa” es pronombre?',
    qHy: '«Mi» բառը «mi casa»-ում դերանո՞ւն է։',
    ansEs: '❌ No. Es un DETERMINANTE posesivo porque acompaña directamente al sustantivo "casa". Si fuera pronombre diría "la mía".',
    ansHy: '❌ Ոչ։ Դա ստացական ՈՐՈՇԻՉ է (determinante), քանի որ անմիջապես ուղեկցում է «casa» գոյականին։'
  },
  {
    id: 't5',
    qEs: '¿“Muy” es adjetivo?',
    qHy: '«Muy» բառը ածակա՞ն է։',
    ansEs: '❌ No. Es un ADVERBIO de cantidad (invariable). Modifica a adjetivos ("muy bonito") o a otros adverbios ("muy bien").',
    ansHy: '❌ Ոչ։ Դա քանակական ՄԱԿԲԱՅ է (adverbio)։ Լրացնում է ածականին կամ այլ մակբայի։'
  }
];

export const TRAFFIC_LIGHT_LEVELS = [
  {
    level: '🟢 Nivel 1 (Terminología / Տերմիններ)',
    descEs: 'Nombrar el término exacto directamente al escuchar el ejemplo.',
    descHy: 'Լսելով օրինակը՝ անմիջապես ճիշտ տերմինն ասել։',
    exampleEs: '“¿Me escuchas?” ➡ fática.',
    exampleHy: '«¿Me escuchas?» ➡ fática:'
  },
  {
    level: '🟡 Nivel 2 (Término + Justificación / Տերմին + Բացատրություն)',
    descEs: 'Nombrar el término y argumentar el motivo gramatical.',
    descHy: 'Ասել տերմինը և հիմնավորել պատճառը։',
    exampleEs: '“¿Me escuchas?” ➡ Es fática porque comprueba si el canal de contacto funciona.',
    exampleHy: '«¿Me escuchas?» ➡ Ֆատիկ է, որովհետև ստուգում է կապի առկայությունը։'
  },
  {
    level: '🔴 Nivel 3 (Maestría de Examen: Término + Explicación + Ejemplo Propio)',
    descEs: 'Nombrar, explicar la teoría y crear espontáneamente un ejemplo nuevo inventado por ti.',
    descHy: 'Ասել տերմինը, բացատրել տեսությունը և ինքնուրույն նոր օրինակ հորինել։',
    exampleEs: '“Es fática porque sirve para iniciar o verificar el canal comunicativo. Por ejemplo: «Hola, ¿sigues ahí?»”.',
    exampleHy: '«Ֆատիկ է, քանի որ ստուգում է կապի ուղին։ Օրինակ՝ «Hola, ¿sigues ahí?»»։'
  }
];
