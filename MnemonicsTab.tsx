import React, { useState } from 'react';
import { Lightbulb, AlertTriangle, ShieldAlert, Sparkles, CheckCircle2, Volume2, HelpCircle } from 'lucide-react';
import { MNEMONICS_QUESTIONS, TRICKY_QUESTIONS, TRAFFIC_LIGHT_LEVELS } from './examData';
import { speakSpanish } from './speech';

export const MnemonicsTab: React.FC = () => {
  const [revealedTraps, setRevealedTraps] = useState<Record<string, boolean>>({});
  const [showArmenianAll, setShowArmenianAll] = useState<boolean>(true);

  const toggleTrap = (id: string) => {
    setRevealedTraps((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Top Banner */}
      <div className="rounded-3xl bg-linear-to-r from-purple-900 via-indigo-900 to-stone-900 text-white p-6 sm:p-8 shadow-xl border border-purple-800">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-400/20 text-purple-200 text-xs font-semibold border border-purple-400/30">
            <Lightbulb className="w-3.5 h-3.5 text-amber-300" />
            <span>Técnicas Mnemotécnicas · Հիշելու Հնարքներ և Շպարգալկա</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Cómo recordar las 4 temas sin confundirse jamás
          </h2>

          <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
            Չորս հարցերի մեթոդ, հիմնական ազդանշաններ, քննական թակարդներ, «լուսացույցի» մեթոդ և փրկարար բանաձև, եթե աշակերտը քննությանը հանկարծ հուզվի։
          </p>
        </div>
      </div>

      {/* 1. The 4 Golden Questions */}
      <section className="bg-white rounded-3xl border border-stone-200 p-5 sm:p-7 shadow-xs space-y-5">
        <div className="border-b border-stone-100 pb-3">
          <span className="text-xs uppercase font-bold text-amber-700 tracking-wider bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
            Clave Fundamental
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
            Самое главное — 4 вопроса (Las 4 Preguntas Clave)
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 font-medium">
            Եթե աշակերտը հիշի այս 4 հարցերը, նա երբեք չի շփոթի թեմաները։
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-full overflow-hidden break-words">
          {MNEMONICS_QUESTIONS.map((mq, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl border border-stone-200 bg-stone-50/70 hover:bg-white hover:border-amber-400 transition-all shadow-2xs space-y-3.5 flex flex-col justify-between max-w-full overflow-hidden break-words"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{mq.icon}</span>
                  <span className="text-xs font-black text-stone-400">0{idx + 1}</span>
                </div>
                <h4 className="font-extrabold text-stone-900 text-lg sm:text-xl break-words">
                  {mq.temaEs}
                </h4>
                <p className="text-sm font-bold text-blue-900 break-words">
                  {mq.temaHy}
                </p>
              </div>

              <div className="pt-2.5 border-t border-stone-200 space-y-1.5 max-w-full overflow-hidden break-words">
                <div className="text-sm sm:text-base font-extrabold text-amber-950 bg-amber-100/90 p-2.5 rounded-xl border border-amber-300 break-words">
                  🇪🇸 {mq.preguntaEs}
                </div>
                <div className="text-sm sm:text-base text-stone-800 bg-white p-2.5 rounded-xl border border-stone-300 font-semibold break-words">
                  🇦🇲 {mq.preguntaHy}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. All-In-One Master Phrase Drill */}
      <section className="bg-linear-to-br from-stone-900 to-stone-850 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 border border-stone-800 max-w-full overflow-hidden break-words">
        <div className="space-y-2.5 max-w-full">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs sm:text-sm font-bold">
            <Sparkles className="w-4 h-4" />
            <span>Fórmula Todo-en-Uno · Բոլոր 4 Թեմաները Մեկ Նախադասության Մեջ</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black break-words leading-tight text-white">
            «¡María, abre tu libro porque vamos a estudiar!»
          </h3>

          <p className="text-stone-200 text-sm sm:text-base font-medium break-words leading-relaxed">
            Մարիա՛, բացի՛ր գիրքդ, որովհետև սովորելու ենք։ Ստուգենք բոլոր 4 թեմաները մեկ նախադասության վրա․
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 text-sm sm:text-base max-w-full overflow-hidden break-words">
          <div className="p-4 rounded-xl bg-stone-800/90 border border-stone-700 space-y-1.5 break-words">
            <span className="font-extrabold text-amber-400 text-xs uppercase tracking-wider block">1. Función predominante</span>
            <span className="font-extrabold text-white text-base sm:text-lg block">Apelativa</span>
            <span className="text-stone-300 text-xs sm:text-sm block">(Quiere que María abra el libro)</span>
          </div>

          <div className="p-4 rounded-xl bg-stone-800/90 border border-stone-700 space-y-1.5 break-words">
            <span className="font-extrabold text-blue-400 text-xs uppercase tracking-wider block">2. Modalidad de “abre tu libro”</span>
            <span className="font-extrabold text-white text-base sm:text-lg block">Exhortativa</span>
            <span className="text-stone-300 text-xs sm:text-sm block">(Orden / petición directa)</span>
          </div>

          <div className="p-4 rounded-xl bg-stone-800/90 border border-stone-700 space-y-1.5 break-words">
            <span className="font-extrabold text-emerald-400 text-xs uppercase tracking-wider block">3. Emisor y Receptor</span>
            <span className="font-extrabold text-white text-base sm:text-lg block">El profesor ➔ María</span>
            <span className="text-stone-300 text-xs sm:text-sm block">(Canal: voz / aire)</span>
          </div>

          <div className="p-4 rounded-xl bg-stone-800/90 border border-stone-700 space-y-1.5 break-words">
            <span className="font-extrabold text-purple-400 text-xs uppercase tracking-wider block">4. “María”</span>
            <span className="font-extrabold text-white text-base sm:text-lg block">Sustantivo propio</span>
            <span className="text-stone-300 text-xs sm:text-sm block">Հատուկ գոյական</span>
          </div>

          <div className="p-4 rounded-xl bg-stone-800/90 border border-stone-700 space-y-1.5 break-words">
            <span className="font-extrabold text-purple-400 text-xs uppercase tracking-wider block">5. “abre”</span>
            <span className="font-extrabold text-white text-base sm:text-lg block">Verbo</span>
            <span className="text-stone-300 text-xs sm:text-sm block">Բայ (abrir)</span>
          </div>

          <div className="p-4 rounded-xl bg-stone-800/90 border border-stone-700 space-y-1.5 break-words">
            <span className="font-extrabold text-purple-400 text-xs uppercase tracking-wider block">6. “tu”</span>
            <span className="font-extrabold text-white text-base sm:text-lg block">Determinante posesivo</span>
            <span className="text-stone-300 text-xs sm:text-sm block">Ստացական որոշիչ (acompaña a libro)</span>
          </div>

          <div className="p-4 rounded-xl bg-stone-800/90 border border-stone-700 space-y-1.5 break-words">
            <span className="font-extrabold text-purple-400 text-xs uppercase tracking-wider block">7. “libro”</span>
            <span className="font-extrabold text-white text-base sm:text-lg block">Sustantivo común</span>
            <span className="text-stone-300 text-xs sm:text-sm block">Հասարակ գոյական</span>
          </div>

          <div className="p-4 rounded-xl bg-stone-800/90 border border-stone-700 space-y-1.5 break-words">
            <span className="font-extrabold text-purple-400 text-xs uppercase tracking-wider block">8. “porque”</span>
            <span className="font-extrabold text-white text-base sm:text-lg block">Nexo / conjunción</span>
            <span className="text-stone-300 text-xs sm:text-sm block">Կապակցիչ (շաղկապ)</span>
          </div>

          <div className="p-4 rounded-xl bg-stone-800/90 border border-stone-700 space-y-1.5 break-words">
            <span className="font-extrabold text-purple-400 text-xs uppercase tracking-wider block">9. “vamos a estudiar”</span>
            <span className="font-extrabold text-white text-base sm:text-lg block">Perífrasis verbal</span>
            <span className="text-stone-300 text-xs sm:text-sm block">Բայական կառույց</span>
          </div>
        </div>
      </section>

      {/* 3. Tricky Questions (Preguntas con trampa) */}
      <section className="bg-white rounded-3xl border border-stone-200 p-5 sm:p-7 shadow-xs space-y-5 max-w-full overflow-hidden break-words">
        <div className="flex items-center justify-between border-b border-stone-100 pb-3 flex-wrap gap-2">
          <div>
            <span className="text-xs uppercase font-bold text-rose-700 tracking-wider bg-rose-50 px-2.5 py-0.5 rounded-md border border-rose-200">
              Cuidado en el examen
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1 flex items-center gap-2 flex-wrap">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span>Preguntas con Trampa · Հարցեր «Թակարդով»</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 font-medium">
              Ամենահաճախակի սխալները, որոնք անում են աշակերտները քննությանը։
            </p>
          </div>
        </div>

        <div className="space-y-3.5 max-w-full overflow-hidden break-words">
          {TRICKY_QUESTIONS.map((t) => {
            const isOpen = revealedTraps[t.id];

            return (
              <div
                key={t.id}
                onClick={() => toggleTrap(t.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer max-w-full overflow-hidden break-words ${
                  isOpen
                    ? 'bg-amber-50/50 border-amber-300 ring-1 ring-amber-300'
                    : 'bg-stone-50/70 border-stone-200 hover:border-amber-300'
                }`}
              >
                <div className="flex items-start justify-between gap-3 flex-wrap sm:flex-nowrap">
                  <div className="space-y-1.5 max-w-full overflow-hidden break-words">
                    <h4 className="font-extrabold text-stone-900 text-base sm:text-lg break-words">
                      {t.qEs}
                    </h4>
                    <p className="text-sm font-semibold text-stone-600 break-words">
                      {t.qHy}
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleTrap(t.id);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-colors shrink-0 cursor-pointer ${
                      isOpen
                        ? 'bg-stone-900 text-white'
                        : 'bg-white border-2 border-stone-300 text-stone-800 hover:bg-stone-100'
                    }`}
                  >
                    {isOpen ? 'Թաքցնել' : 'Տեսնել բացատրությունը'}
                  </button>
                </div>

                {isOpen && (
                  <div className="mt-3.5 pt-3.5 border-t-2 border-amber-200/90 space-y-2.5 animate-in fade-in duration-150 max-w-full overflow-hidden break-words">
                    <div className="p-4 bg-white rounded-xl border border-stone-300 text-sm sm:text-base text-stone-950 font-bold leading-relaxed break-words shadow-2xs">
                      {t.ansEs}
                    </div>
                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 text-sm sm:text-base text-blue-950 font-semibold leading-relaxed break-words shadow-2xs">
                      {t.ansHy}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Traffic Light Method */}
      <section className="bg-white rounded-3xl border border-stone-200 p-5 sm:p-7 shadow-xs space-y-5 max-w-full overflow-hidden break-words">
        <div className="border-b border-stone-100 pb-3">
          <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
            Estrategia de Dominio
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
            🚦 Método del Semáforo para el Examen Oral · «Լուսացույցի» մեթոդ
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 font-medium">
            Ինչպես հասնել բարձր գնահատականի քննությանը՝ անցնելով 3 մակարդակներով։
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-full overflow-hidden break-words">
          {TRAFFIC_LIGHT_LEVELS.map((lvl, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl border border-stone-200 bg-stone-50/60 hover:bg-white transition-all space-y-3.5 flex flex-col justify-between max-w-full overflow-hidden break-words"
            >
              <div className="space-y-2">
                <h4 className="font-extrabold text-stone-900 text-base sm:text-lg break-words">
                  {lvl.level}
                </h4>
                <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-semibold break-words">
                  {lvl.descEs}
                </p>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium break-words">
                  {lvl.descHy}
                </p>
              </div>

              <div className="pt-2.5 border-t border-stone-200 text-xs sm:text-sm bg-white p-3.5 rounded-xl border border-stone-200 space-y-1.5 break-words">
                <span className="font-black text-amber-900 block text-xs uppercase">Օրինակ / Ejemplo:</span>
                <p className="font-bold text-stone-950 text-sm sm:text-base break-words">{lvl.exampleEs}</p>
                <p className="text-stone-600 font-medium break-words">{lvl.exampleHy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Emergency Formula */}
      <section className="bg-amber-500/10 border-2 border-amber-300 rounded-3xl p-6 sm:p-8 space-y-4 max-w-full overflow-hidden break-words">
        <div className="flex items-center gap-2.5 text-amber-950">
          <ShieldAlert className="w-6 h-6 text-amber-800 shrink-0" />
          <h3 className="font-black text-lg sm:text-xl lg:text-2xl break-words">
            🧠 Fórmula de Emergencia · «Փրկարար» բանաձև քննության ժամանակ
          </h3>
        </div>

        <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-semibold break-words">
          Եթե հուզվես կամ մոռանաս երկար բացատրությունը, մի՛ լռիր։ Սկսիր այս 4 հիմնական նախադասություններից․
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm sm:text-base max-w-full overflow-hidden break-words">
          <div className="bg-white p-5 rounded-2xl border border-amber-300 space-y-1.5 break-words shadow-2xs">
            <span className="font-black text-amber-900 text-base">Funciones:</span>
            <p className="font-bold text-stone-900 text-base sm:text-lg leading-snug break-words">
              «Las funciones del lenguaje indican la intención del hablante.»
            </p>
            <p className="text-stone-600 text-xs sm:text-sm font-medium break-words">
              Լեզվի գործառույթները ցույց են տալիս խոսողի նպատակը։
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-amber-300 space-y-1.5 break-words shadow-2xs">
            <span className="font-black text-blue-900 text-base">Modalidades:</span>
            <p className="font-bold text-stone-900 text-base sm:text-lg leading-snug break-words">
              «Las modalidades oracionales indican la actitud del hablante.»
            </p>
            <p className="text-stone-600 text-xs sm:text-sm font-medium break-words">
              Նախադասության տեսակները ցույց են տալիս խոսողի վերաբերմունքը։
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-amber-300 space-y-1.5 break-words shadow-2xs">
            <span className="font-black text-emerald-900 text-base">Elementos:</span>
            <p className="font-bold text-stone-900 text-base sm:text-lg leading-snug break-words">
              «Los elementos forman parte del proceso comunicativo: emisor, receptor, mensaje, código, canal y contexto.»
            </p>
            <p className="text-stone-600 text-xs sm:text-sm font-medium break-words">
              Հաղորդակցության գործընթացի մասն են կազմում։
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-amber-300 space-y-1.5 break-words shadow-2xs">
            <span className="font-black text-purple-900 text-base">Categorías:</span>
            <p className="font-bold text-stone-900 text-base sm:text-lg leading-snug break-words">
              «Las categorías gramaticales sirven para clasificar las palabras según su función.»
            </p>
            <p className="text-stone-600 text-xs sm:text-sm font-medium break-words">
              Բառերը դասակարգելու համար են ըստ իրենց դերի։
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
