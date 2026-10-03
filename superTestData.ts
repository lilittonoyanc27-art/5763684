export interface SuperTestQuestion {
  id: string;
  category: 'funciones' | 'modalidades' | 'comunicacion' | 'categorias' | 'practicas';
  categoryTitleEs: string;
  categoryTitleHy: string;
  number: number;
  questionEs: string;
  questionHy: string;
  answerEs: string;
  answerHy: string;
  breakdown?: { es: string; hy: string }[];
  tag?: string;
}

export interface EssentialPhrase {
  id: string;
  titleEs: string;
  titleHy: string;
  es: string;
  hy: string;
  icon: string;
}

export const SUPER_TEST_QUESTIONS: SuperTestQuestion[] = [
  // 1. Funciones del lenguaje (1º ESO)
  {
    id: 'st-f-1',
    category: 'funciones',
    categoryTitleEs: '1. Funciones del lenguaje',
    categoryTitleHy: '1. Լեզվի գործառույթներ',
    number: 1,
    questionEs: '¿Qué son las funciones del lenguaje?',
    questionHy: 'Ի՞նչ են լեզվի գործառույթները։',
    answerEs: 'Son las distintas intenciones que tiene una persona cuando comunica un mensaje.',
    answerHy: 'Դրանք այն տարբեր նպատակներն են, որոնք մարդն ունի հաղորդագրություն փոխանցելիս։',
    tag: 'Definición'
  },
  {
    id: 'st-f-2',
    category: 'funciones',
    categoryTitleEs: '1. Funciones del lenguaje',
    categoryTitleHy: '1. Լեզվի գործառույթներ',
    number: 2,
    questionEs: '¿Cuáles son las principales funciones del lenguaje?',
    questionHy: 'Որո՞նք են լեզվի հիմնական գործառույթները։',
    answerEs: 'Referencial, expresiva, apelativa, fática, metalingüística y poética.',
    answerHy: 'Referencial, expresiva, apelativa, fática, metalingüística և poética։',
    tag: 'Las 6 funciones'
  },
  {
    id: 'st-f-3',
    category: 'funciones',
    categoryTitleEs: '1. Funciones del lenguaje',
    categoryTitleHy: '1. Լեզվի գործառույթներ',
    number: 3,
    questionEs: 'En “Hoy hace mucho frío”, ¿qué función predomina?',
    questionHy: '«Hoy hace mucho frío» նախադասության մեջ ո՞ր գործառույթն է։',
    answerEs: 'La función referencial, porque informa de una realidad.',
    answerHy: 'Referencial, որովհետև տեղեկություն է հաղորդում։',
    tag: 'Ejemplo Referencial'
  },
  {
    id: 'st-f-4',
    category: 'funciones',
    categoryTitleEs: '1. Funciones del lenguaje',
    categoryTitleHy: '1. Լեզվի գործառույթներ',
    number: 4,
    questionEs: 'En “¡Estoy muy contento!”, ¿qué función aparece?',
    questionHy: '«¡Estoy muy contento!» նախադասության մեջ ո՞ր գործառույթն է։',
    answerEs: 'La función expresiva, porque expresa un sentimiento.',
    answerHy: 'Expresiva, որովհետև արտահայտում է զգացմունք։',
    tag: 'Ejemplo Expresiva'
  },
  {
    id: 'st-f-5',
    category: 'funciones',
    categoryTitleEs: '1. Funciones del lenguaje',
    categoryTitleHy: '1. Լեզվի գործառույթներ',
    number: 5,
    questionEs: 'En “Abre el libro, por favor”, ¿qué función predomina?',
    questionHy: '«Բացի՛ր գիրքը, խնդրում եմ»։ Ո՞ր գործառույթն է։',
    answerEs: 'La función apelativa, porque queremos que otra persona haga algo.',
    answerHy: 'Apelativa, որովհետև ուզում ենք, որ մյուս մարդը գործողություն կատարի։',
    tag: 'Ejemplo Apelativa'
  },
  {
    id: 'st-f-6',
    category: 'funciones',
    categoryTitleEs: '1. Funciones del lenguaje',
    categoryTitleHy: '1. Լեզվի գործառույթներ',
    number: 6,
    questionEs: '¿Qué función aparece en “¿Me escuchas?”?',
    questionHy: '«Ինձ լսո՞ւմ ես»։ Ո՞ր գործառույթն է։',
    answerEs: 'La función fática, porque sirve para comprobar la comunicación.',
    answerHy: 'Fática, որովհետև ստուգում ենք հաղորդակցական կապը։',
    tag: 'Ejemplo Fática'
  },
  {
    id: 'st-f-7',
    category: 'funciones',
    categoryTitleEs: '1. Funciones del lenguaje',
    categoryTitleHy: '1. Լեզվի գործառույթներ',
    number: 7,
    questionEs: '“Casa es un sustantivo”. ¿Qué función es?',
    questionHy: '«Casa բառը գոյական է»։ Ո՞ր գործառույթն է։',
    answerEs: 'Metalingüística, porque hablamos de la lengua.',
    answerHy: 'Metalingüística, որովհետև խոսում ենք հենց լեզվի մասին։',
    tag: 'Ejemplo Metalingüística'
  },
  {
    id: 'st-f-8',
    category: 'funciones',
    categoryTitleEs: '1. Funciones del lenguaje',
    categoryTitleHy: '1. Լեզվի գործառույթներ',
    number: 8,
    questionEs: '“Tus ojos son dos estrellas”. ¿Qué función puede tener?',
    questionHy: '«Քո աչքերը երկու աստղ են»։ Ո՞ր գործառույթն է։',
    answerEs: 'La función poética, porque el mensaje es expresivo y creativo.',
    answerHy: 'Poética, որովհետև խոսքը պատկերավոր և ստեղծագործական է։',
    tag: 'Ejemplo Poética'
  },

  // 2. Modalidades oracionales (1º ESO)
  {
    id: 'st-m-1',
    category: 'modalidades',
    categoryTitleEs: '2. Modalidades oracionales',
    categoryTitleHy: '2. Նախադասությունների տեսակներ',
    number: 1,
    questionEs: '¿Qué son las modalidades oracionales?',
    questionHy: 'Ի՞նչ են modalidades oracionales-ը։',
    answerEs: 'Son las diferentes formas de una oración según la intención del hablante.',
    answerHy: 'Նախադասության տարբեր տեսակներն են՝ ըստ խոսողի նպատակի։',
    tag: 'Definición'
  },
  {
    id: 'st-m-2',
    category: 'modalidades',
    categoryTitleEs: '2. Modalidades oracionales',
    categoryTitleHy: '2. Նախադասությունների տեսակներ',
    number: 2,
    questionEs: '¿Qué modalidades principales conoces?',
    questionHy: 'Որո՞նք են հիմնական տեսակները։',
    answerEs: 'Enunciativa, interrogativa, exclamativa, exhortativa, desiderativa y dubitativa.',
    answerHy: 'Enunciativa, interrogativa, exclamativa, exhortativa, desiderativa և dubitativa։',
    tag: 'Las 6 modalidades'
  },
  {
    id: 'st-m-3',
    category: 'modalidades',
    categoryTitleEs: '2. Modalidades oracionales',
    categoryTitleHy: '2. Նախադասությունների տեսակներ',
    number: 3,
    questionEs: '“Mañana tenemos examen”. ¿Qué modalidad es?',
    questionHy: '«Վաղը քննություն ունենք»։ Ի՞նչ տեսակ է։',
    answerEs: 'Enunciativa, porque informa de algo.',
    answerHy: 'Enunciativa, որովհետև տեղեկություն է հաղորդում։',
    tag: 'Enunciativa'
  },
  {
    id: 'st-m-4',
    category: 'modalidades',
    categoryTitleEs: '2. Modalidades oracionales',
    categoryTitleHy: '2. Նախադասությունների տեսակներ',
    number: 4,
    questionEs: '“¿Has hecho los deberes?”. ¿Qué modalidad es?',
    questionHy: '«Տնային աշխատանքը կատարե՞լ ես»։',
    answerEs: 'Interrogativa, porque hace una pregunta.',
    answerHy: 'Interrogativa, որովհետև հարց է տրվում։',
    tag: 'Interrogativa'
  },
  {
    id: 'st-m-5',
    category: 'modalidades',
    categoryTitleEs: '2. Modalidades oracionales',
    categoryTitleHy: '2. Նախադասությունների տեսակներ',
    number: 5,
    questionEs: '“¡Qué bonito es este lugar!”. ¿Qué modalidad es?',
    questionHy: '«Ի՜նչ գեղեցիկ է այս վայրը»։',
    answerEs: 'Exclamativa, porque expresa una emoción.',
    answerHy: 'Exclamativa, որովհետև արտահայտում է ուժեղ զգացմունք։',
    tag: 'Exclamativa'
  },
  {
    id: 'st-m-6',
    category: 'modalidades',
    categoryTitleEs: '2. Modalidades oracionales',
    categoryTitleHy: '2. Նախադասությունների տեսակներ',
    number: 6,
    questionEs: '“Escucha al profesor”. ¿Qué modalidad es?',
    questionHy: '«Լսի՛ր ուսուցչին»։',
    answerEs: 'Exhortativa, porque expresa una orden o una petición.',
    answerHy: 'Exhortativa, որովհետև հրաման կամ խնդրանք է։',
    tag: 'Exhortativa'
  },
  {
    id: 'st-m-7',
    category: 'modalidades',
    categoryTitleEs: '2. Modalidades oracionales',
    categoryTitleHy: '2. Նախադասությունների տեսակներ',
    number: 7,
    questionEs: '“Ojalá apruebe el examen”. ¿Qué modalidad es?',
    questionHy: '«Երանի քննությունը հանձնեմ»։',
    answerEs: 'Desiderativa, porque expresa un deseo.',
    answerHy: 'Desiderativa, որովհետև ցանկություն է արտահայտում։',
    tag: 'Desiderativa'
  },
  {
    id: 'st-m-8',
    category: 'modalidades',
    categoryTitleEs: '2. Modalidades oracionales',
    categoryTitleHy: '2. Նախադասությունների տեսակներ',
    number: 8,
    questionEs: '“Quizás venga mañana”. ¿Qué modalidad es?',
    questionHy: '«Հնարավոր է՝ վաղը գա»։',
    answerEs: 'Dubitativa, porque expresa duda o posibilidad.',
    answerHy: 'Dubitativa, որովհետև կասկած կամ հավանականություն է արտահայտում։',
    tag: 'Dubitativa'
  },

  // 3. Elementos de la comunicación (1º ESO)
  {
    id: 'st-c-1',
    category: 'comunicacion',
    categoryTitleEs: '3. Elementos de la comunicación',
    categoryTitleHy: '3. Հաղորդակցության տարրեր',
    number: 1,
    questionEs: '¿Qué es la comunicación?',
    questionHy: 'Ի՞նչ է հաղորդակցությունը։',
    answerEs: 'Es el proceso por el que una persona transmite un mensaje a otra.',
    answerHy: 'Գործընթաց է, որի ընթացքում մեկ մարդ հաղորդագրություն է փոխանցում մյուսին։',
    tag: 'Definición'
  },
  {
    id: 'st-c-2',
    category: 'comunicacion',
    categoryTitleEs: '3. Elementos de la comunicación',
    categoryTitleHy: '3. Հաղորդակցության տարրեր',
    number: 2,
    questionEs: '¿Cuáles son los elementos de la comunicación?',
    questionHy: 'Որո՞նք են հաղորդակցության տարրերը։',
    answerEs: 'Emisor, receptor, mensaje, código, canal y contexto.',
    answerHy: 'Emisor, receptor, mensaje, código, canal և contexto։',
    tag: 'Los 6 elementos'
  },
  {
    id: 'st-c-3',
    category: 'comunicacion',
    categoryTitleEs: '3. Elementos de la comunicación',
    categoryTitleHy: '3. Հաղորդակցության տարրեր',
    number: 3,
    questionEs: '¿Qué es el emisor?',
    questionHy: 'Ի՞նչ է emisor-ը։',
    answerEs: 'Es la persona que envía el mensaje.',
    answerHy: 'Այն մարդն է, ով ուղարկում է հաղորդագրությունը։',
    tag: 'Emisor'
  },
  {
    id: 'st-c-4',
    category: 'comunicacion',
    categoryTitleEs: '3. Elementos de la comunicación',
    categoryTitleHy: '3. Հաղորդակցության տարրեր',
    number: 4,
    questionEs: '¿Qué es el receptor?',
    questionHy: 'Ի՞նչ է receptor-ը։',
    answerEs: 'Es la persona que recibe el mensaje.',
    answerHy: 'Այն մարդն է, ով ստանում է հաղորդագրությունը։',
    tag: 'Receptor'
  },
  {
    id: 'st-c-5',
    category: 'comunicacion',
    categoryTitleEs: '3. Elementos de la comunicación',
    categoryTitleHy: '3. Հաղորդակցության տարրեր',
    number: 5,
    questionEs: '¿Qué es el mensaje?',
    questionHy: 'Ի՞նչ է mensaje-ն։',
    answerEs: 'Es la información que se transmite.',
    answerHy: 'Այն տեղեկությունն է, որը փոխանցվում է։',
    tag: 'Mensaje'
  },
  {
    id: 'st-c-6',
    category: 'comunicacion',
    categoryTitleEs: '3. Elementos de la comunicación',
    categoryTitleHy: '3. Հաղորդակցության տարրեր',
    number: 6,
    questionEs: '¿Qué es el código?',
    questionHy: 'Ի՞նչ է código-ն։',
    answerEs: 'Es el sistema de signos que usamos para comunicarnos, por ejemplo, el español.',
    answerHy: 'Նշանների համակարգն է, որը օգտագործում ենք հաղորդակցվելու համար, օրինակ՝ իսպաներենը։',
    tag: 'Código'
  },
  {
    id: 'st-c-7',
    category: 'comunicacion',
    categoryTitleEs: '3. Elementos de la comunicación',
    categoryTitleHy: '3. Հաղորդակցության տարրեր',
    number: 7,
    questionEs: '¿Qué es el canal?',
    questionHy: 'Ի՞նչ է canal-ը։',
    answerEs: 'Es el medio por el que se transmite el mensaje: la voz, el teléfono, una carta...',
    answerHy: 'Այն միջոցն է, որով հաղորդագրությունը փոխանցվում է՝ ձայն, հեռախոս, նամակ և այլն։',
    tag: 'Canal'
  },
  {
    id: 'st-c-8',
    category: 'comunicacion',
    categoryTitleEs: '3. Elementos de la comunicación',
    categoryTitleHy: '3. Հաղորդակցության տարրեր',
    number: 8,
    questionEs: 'La profesora dice a Carlos: “Mañana hay examen”. Identifica emisor, receptor y mensaje.',
    questionHy: 'Ուսուցչուհին Կառլոսին ասում է․ «Վաղը քննություն կա»։ Ո՞վ է emisor-ը, receptor-ը և ո՞րն է mensaje-ն։',
    answerEs: 'Emisor: la profesora. Receptor: Carlos. Mensaje: “Mañana hay examen”.',
    answerHy: 'Emisor՝ ուսուցչուհին։ Receptor՝ Կառլոսը։ Mensaje՝ «Վաղը քննություն կա»։',
    tag: 'Situación Práctica'
  },

  // 4. Categorías gramaticales (1º ESO)
  {
    id: 'st-g-1',
    category: 'categorias',
    categoryTitleEs: '4. Categorías gramaticales',
    categoryTitleHy: '4. Քերականական կարգեր',
    number: 1,
    questionEs: '¿Qué son las categorías gramaticales?',
    questionHy: 'Ի՞նչ են քերականական կարգերը։',
    answerEs: 'Son grupos en los que clasificamos las palabras según sus características y su función.',
    answerHy: 'Դրանք խմբեր են, որոնցով դասակարգում ենք բառերը՝ ըստ նրանց հատկանիշների և գործառույթի։',
    tag: 'Definición'
  },
  {
    id: 'st-g-2',
    category: 'categorias',
    categoryTitleEs: '4. Categorías gramaticales',
    categoryTitleHy: '4. Քերականական կարգեր',
    number: 2,
    questionEs: '¿Qué es un sustantivo?',
    questionHy: 'Ի՞նչ է գոյականը։',
    answerEs: 'Es una palabra que nombra personas, animales, objetos, lugares o ideas.',
    answerHy: 'Բառ է, որը անվանում է մարդ, կենդանի, առարկա, վայր կամ գաղափար։',
    tag: 'Sustantivo'
  },
  {
    id: 'st-g-3',
    category: 'categorias',
    categoryTitleEs: '4. Categorías gramaticales',
    categoryTitleHy: '4. Քերականական կարգեր',
    number: 3,
    questionEs: '¿Qué es un adjetivo?',
    questionHy: 'Ի՞նչ է ածականը։',
    answerEs: 'Es una palabra que expresa una característica del sustantivo.',
    answerHy: 'Բառ է, որը ցույց է տալիս գոյականի հատկանիշը։',
    tag: 'Adjetivo'
  },
  {
    id: 'st-g-4',
    category: 'categorias',
    categoryTitleEs: '4. Categorías gramaticales',
    categoryTitleHy: '4. Քերականական կարգեր',
    number: 4,
    questionEs: '¿Qué es un verbo?',
    questionHy: 'Ի՞նչ է բայը։',
    answerEs: 'Es una palabra que expresa una acción, un estado o un proceso.',
    answerHy: 'Բառ է, որը ցույց է տալիս գործողություն, վիճակ կամ գործընթաց։',
    tag: 'Verbo'
  },
  {
    id: 'st-g-5',
    category: 'categorias',
    categoryTitleEs: '4. Categorías gramaticales',
    categoryTitleHy: '4. Քերականական կարգեր',
    number: 5,
    questionEs: '¿Qué es un adverbio?',
    questionHy: 'Ի՞նչ է մակբայը։',
    answerEs: 'Es una palabra que puede indicar cómo, cuándo, dónde o cuánto ocurre algo.',
    answerHy: 'Բառ է, որը կարող է ցույց տալ՝ ինչպես, երբ, որտեղ կամ որքան է կատարվում գործողությունը։',
    tag: 'Adverbio'
  },
  {
    id: 'st-g-6',
    category: 'categorias',
    categoryTitleEs: '4. Categorías gramaticales',
    categoryTitleHy: '4. Քերականական կարգեր',
    number: 6,
    questionEs: '¿Qué es un pronombre?',
    questionHy: 'Ի՞նչ է դերանունը։',
    answerEs: 'Es una palabra que sustituye a un sustantivo.',
    answerHy: 'Բառ է, որը փոխարինում է գոյականին։',
    tag: 'Pronombre'
  },
  {
    id: 'st-g-7',
    category: 'categorias',
    categoryTitleEs: '4. Categorías gramaticales',
    categoryTitleHy: '4. Քերականական կարգեր',
    number: 7,
    questionEs: '¿Qué es un determinante?',
    questionHy: 'Ի՞նչ է որոշիչը։',
    answerEs: 'Es una palabra que acompaña al sustantivo y lo concreta.',
    answerHy: 'Բառ է, որը ուղեկցում է գոյականին և այն որոշակիացնում։',
    tag: 'Determinante'
  },
  {
    id: 'st-g-8',
    category: 'categorias',
    categoryTitleEs: '4. Categorías gramaticales',
    categoryTitleHy: '4. Քերականական կարգեր',
    number: 8,
    questionEs: '¿Qué son los nexos?',
    questionHy: 'Ի՞նչ են կապակցիչները։',
    answerEs: 'Son palabras que unen palabras u oraciones.',
    answerHy: 'Բառեր են, որոնք կապում են բառեր կամ նախադասություններ։',
    tag: 'Nexos'
  },

  // 5. Preguntas prácticas tipo examen (1º ESO)
  {
    id: 'st-p-1',
    category: 'practicas',
    categoryTitleEs: '5. Preguntas prácticas tipo examen',
    categoryTitleHy: '5. Գործնական քննական հարցեր',
    number: 1,
    questionEs: 'Analiza esta oración: “Mi hermano pequeño estudia mucho”.',
    questionHy: 'Վերլուծի՛ր՝ «Mi hermano pequeño estudia mucho»։',
    answerEs: 'Mi → determinante | hermano → sustantivo | pequeño → adjetivo | estudia → verbo | mucho → adverbio.',
    answerHy: 'Mi → որոշիչ | hermano → գոյական | pequeño → ածական | estudia → բայ | mucho → մակբայ։',
    breakdown: [
      { es: 'Mi → determinante posesivo', hy: 'որոշիչ (ստացական)' },
      { es: 'hermano → sustantivo', hy: 'գոյական' },
      { es: 'pequeño → adjetivo', hy: 'ածական' },
      { es: 'estudia → verbo', hy: 'բայ' },
      { es: 'mucho → adverbio', hy: 'մակբայ' }
    ],
    tag: 'Análisis gramatical'
  },
  {
    id: 'st-p-2',
    category: 'practicas',
    categoryTitleEs: '5. Preguntas prácticas tipo examen',
    categoryTitleHy: '5. Գործնական քննական հարցեր',
    number: 2,
    questionEs: '“¿Me escuchas?”: indica la modalidad y la función del lenguaje.',
    questionHy: '«¿Me escuchas?»: նշի՛ր modalidad-ը և función-ը։',
    answerEs: 'Modalidad: interrogativa. Función: fática.',
    answerHy: 'Տեսակը՝ interrogativa։ Գործառույթը՝ fática։',
    tag: 'Modalidad + Función'
  },
  {
    id: 'st-p-3',
    category: 'practicas',
    categoryTitleEs: '5. Preguntas prácticas tipo examen',
    categoryTitleHy: '5. Գործնական քննական հարցեր',
    number: 3,
    questionEs: '“Cierra la puerta, por favor”: indica modalidad y función.',
    questionHy: '«Cierra la puerta, por favor»: նշի՛ր modalidad և función։',
    answerEs: 'Modalidad: exhortativa. Función: apelativa.',
    answerHy: 'Տեսակը՝ exhortativa։ Գործառույթը՝ apelativa։',
    tag: 'Modalidad + Función'
  },
  {
    id: 'st-p-4',
    category: 'practicas',
    categoryTitleEs: '5. Preguntas prácticas tipo examen',
    categoryTitleHy: '5. Գործնական քննական հարցեր',
    number: 4,
    questionEs: '“¡Estoy muy feliz!”: indica modalidad y función.',
    questionHy: '«¡Estoy muy feliz!»: նշի՛ր modalidad և función։',
    answerEs: 'Modalidad: exclamativa. Función: expresiva.',
    answerHy: 'Տեսակը՝ exclamativa։ Գործառույթը՝ expresiva։',
    tag: 'Modalidad + Función'
  },
  {
    id: 'st-p-5',
    category: 'practicas',
    categoryTitleEs: '5. Preguntas prácticas tipo examen',
    categoryTitleHy: '5. Գործնական քննական հարցեր',
    number: 5,
    questionEs: '“Perro es un sustantivo”: ¿qué función del lenguaje tiene?',
    questionHy: '«Perro es un sustantivo»: ի՞նչ función del lenguaje ունի։',
    answerEs: 'Metalingüística, porque hablamos de la lengua.',
    answerHy: 'Metalingüística, որովհետև խոսում ենք լեզվի մասին։',
    tag: 'Función Metalingüística'
  },
  {
    id: 'st-p-6',
    category: 'practicas',
    categoryTitleEs: '5. Preguntas prácticas tipo examen',
    categoryTitleHy: '5. Գործնական քննական հարցեր',
    number: 6,
    questionEs: 'La profesora escribe “Haced los ejercicios 1 y 2” en la pizarra. ¿Quién es el emisor y quiénes son los receptores?',
    questionHy: 'Ուսուցչուհին գրատախտակին գրում է․ «Կատարեք 1-ին և 2-րդ վարժությունները»։ Ո՞վ է emisor-ը և ովքե՞ր են receptores-ը։',
    answerEs: 'Emisor: la profesora. Receptores: los alumnos.',
    answerHy: 'Emisor՝ ուսուցչուհին։ Receptores՝ աշակերտները։',
    tag: 'Comunicación en clase'
  }
];

export const ESSENTIAL_PHRASES: EssentialPhrase[] = [
  {
    id: 'ep-1',
    titleEs: 'Funciones del lenguaje',
    titleHy: 'Լեզվի գործառույթներ',
    es: 'Las funciones del lenguaje indican la intención del hablante.',
    hy: 'Լեզվի գործառույթները ցույց են տալիս խոսողի նպատակը։',
    icon: '🎯'
  },
  {
    id: 'ep-2',
    titleEs: 'Modalidades oracionales',
    titleHy: 'Նախադասությունների տեսակներ',
    es: 'Las modalidades oracionales indican la actitud del hablante.',
    hy: 'Նախադասության տեսակները ցույց են տալիս խոսողի վերաբերմունքը։',
    icon: '💬'
  },
  {
    id: 'ep-3',
    titleEs: 'Elementos de la comunicación',
    titleHy: 'Հաղորդակցության տարրեր',
    es: 'Los elementos de la comunicación son emisor, receptor, mensaje, código, canal y contexto.',
    hy: 'Հաղորդակցության տարրերն են՝ emisor, receptor, mensaje, código, canal և contexto։',
    icon: '📡'
  },
  {
    id: 'ep-4',
    titleEs: 'Categorías gramaticales',
    titleHy: 'Քերականական կարգեր',
    es: 'Las categorías gramaticales sirven para clasificar las palabras.',
    hy: 'Քերականական կարգերը ծառայում են բառերը դասակարգելու համար։',
    icon: '🧩'
  }
];
