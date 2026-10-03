import React, { useState } from 'react';
import {
  Zap,
  Volume2,
  Check,
  CheckCircle2,
  HelpCircle,
  Eye,
  EyeOff,
  Sparkles,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { SUPER_TEST_QUESTIONS, ESSENTIAL_PHRASES, SuperTestQuestion } from './superTestData';
import { speakSpanish } from './speech';

interface SuperTestTabProps {
  searchQuery: string;
  onOpenAnswerModal: () => void;
}

export const SuperTestTab: React.FC<SuperTestTabProps> = ({ searchQuery, onOpenAnswerModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [revealedArmenianQuestions, setRevealedArmenianQuestions] = useState<Record<string, boolean>>({});
  const [revealedArmenianAnswers, setRevealedArmenianAnswers] = useState<Record<string, boolean>>({});
  const [revealedEssentialArmenian, setRevealedEssentialArmenian] = useState<Record<string, boolean>>({});
  const [globalShowArmenian, setGlobalShowArmenian] = useState<boolean>(false);
  const [globalShowAnswers, setGlobalShowAnswers] = useState<boolean>(false);

  const toggleAnswer = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setRevealedAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleArmenianQuestion = (id: string) => {
    setRevealedArmenianQuestions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleArmenianAnswer = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setRevealedArmenianAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleEssentialArmenian = (id: string) => {
    setRevealedEssentialArmenian((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleRevealAllAnswers = () => {
    const nextState = !globalShowAnswers;
    setGlobalShowAnswers(nextState);
    const updated: Record<string, boolean> = {};
    SUPER_TEST_QUESTIONS.forEach((q) => {
      updated[q.id] = nextState;
    });
    setRevealedAnswers(updated);
  };

  const handleToggleGlobalArmenian = () => {
    const nextState = !globalShowArmenian;
    setGlobalShowArmenian(nextState);
    const updatedQ: Record<string, boolean> = {};
    const updatedA: Record<string, boolean> = {};
    const updatedE: Record<string, boolean> = {};
    SUPER_TEST_QUESTIONS.forEach((q) => {
      updatedQ[q.id] = nextState;
      updatedA[q.id] = nextState;
    });
    ESSENTIAL_PHRASES.forEach((ep) => {
      updatedE[ep.id] = nextState;
    });
    setRevealedArmenianQuestions(updatedQ);
    setRevealedArmenianAnswers(updatedA);
    setRevealedEssentialArmenian(updatedE);
  };

  const filteredQuestions = SUPER_TEST_QUESTIONS.filter((item) => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.questionEs.toLowerCase().includes(q) ||
      item.questionHy.toLowerCase().includes(q) ||
      item.answerEs.toLowerCase().includes(q) ||
      item.answerHy.toLowerCase().includes(q) ||
      (item.tag && item.tag.toLowerCase().includes(q))
    );
  });

  const categories = [
    { id: 'all', label: 'Բոլորը (Todos - 38)', icon: '⚡' },
    { id: 'funciones', label: '1. Funciones (8)', icon: '🎯' },
    { id: 'modalidades', label: '2. Modalidades (8)', icon: '💬' },
    { id: 'comunicacion', label: '3. Comunicación (8)', icon: '📡' },
    { id: 'categorias', label: '4. Categorías (8)', icon: '🧩' },
    { id: 'practicas', label: '5. Prácticas Examen (6)', icon: '📝' }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-200 max-w-full overflow-hidden">
      {/* Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-amber-600 via-orange-600 to-red-600 text-white p-6 sm:p-8 shadow-xl border border-amber-400 max-w-full break-words">
        <div className="relative z-10 max-w-3xl space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-xs text-white text-xs sm:text-sm font-black border border-white/30">
            <Zap className="w-4 h-4 text-amber-200 fill-amber-200" />
            <span>SÚPER TEST · 1º ESO (Իսպանիայի 7-րդ դասարանի մակարդակ)</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white break-words">
            Супер тест: Понятные вопросы и ответы для школы
          </h2>

          <p className="text-amber-100 text-base sm:text-lg leading-relaxed font-semibold break-words">
            Հարցեր 7-րդ դասարանի աշակերտի համար (1º ESO)։ Կարճ, հստակ և հեշտ հիշվող պատասխաններով։ Սեղմիր իսպաներենի վրա՝ հայերեն թարգմանությունը բացելու համար, իսկ «Պատասխան» կոճակով ստուգիր քեզ։
          </p>

          {/* Controls Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {/* Global Answer Toggle Button */}
            <button
              onClick={handleRevealAllAnswers}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-black flex items-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer ${
                globalShowAnswers
                  ? 'bg-stone-900 text-amber-300 border border-amber-400'
                  : 'bg-white text-stone-950 hover:bg-amber-100'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>{globalShowAnswers ? 'Թաքցնել պատասխանները' : 'Տեսնել ԲՈԼՈՐ Պատասխանները'}</span>
            </button>

            {/* Global Armenian Translation Toggle Button */}
            <button
              onClick={handleToggleGlobalArmenian}
              className="px-4 py-2.5 rounded-2xl bg-stone-900/60 hover:bg-stone-900 text-white text-xs sm:text-sm font-bold border border-white/30 flex items-center gap-2 backdrop-blur-xs transition-colors cursor-pointer"
            >
              {globalShowArmenian ? (
                <>
                  <EyeOff className="w-4 h-4 text-amber-300" />
                  <span>Թաքցնել հայերենը (Սեղմելով բացել)</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4 text-blue-300" />
                  <span>Բացել ամբողջ հայերենը</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Ambient glow */}
        <div className="absolute -right-8 -bottom-8 w-60 h-60 bg-yellow-400/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs sm:text-sm max-w-full">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCategory(c.id)}
            className={`px-4 py-2.5 rounded-xl whitespace-nowrap font-bold transition-all flex items-center gap-2 cursor-pointer ${
              selectedCategory === c.id
                ? 'bg-stone-900 text-white shadow-xs font-black ring-2 ring-amber-400'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <span>{c.icon}</span>
            <span>{c.label}</span>
          </button>
        ))}
      </div>

      {/* Questions Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-full overflow-hidden">
        {filteredQuestions.map((qItem) => {
          const isAnswerOpen = revealedAnswers[qItem.id] || globalShowAnswers;
          const isArmenianQuestionOpen = revealedArmenianQuestions[qItem.id] || globalShowArmenian;
          const isArmenianAnswerOpen = revealedArmenianAnswers[qItem.id] || globalShowArmenian;

          return (
            <div
              key={qItem.id}
              className="rounded-3xl border-2 border-stone-200 bg-white hover:border-amber-400 transition-all shadow-xs hover:shadow-md flex flex-col justify-between overflow-hidden max-w-full break-words"
            >
              {/* Question Header & Body */}
              <div className="p-5 sm:p-6 space-y-3.5 max-w-full overflow-hidden break-words">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-amber-100 text-amber-950 border border-amber-300">
                      #{qItem.number}
                    </span>
                    <span className="text-xs font-bold text-stone-600 bg-stone-100 px-2.5 py-1 rounded-lg border border-stone-200">
                      {qItem.categoryTitleEs}
                    </span>
                    {qItem.tag && (
                      <span className="text-[11px] font-extrabold text-blue-900 bg-blue-100 px-2 py-0.5 rounded-md">
                        {qItem.tag}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => speakSpanish(qItem.questionEs)}
                    title="Escuchar pregunta"
                    className="p-1.5 rounded-xl text-stone-600 hover:text-amber-900 hover:bg-amber-100 transition-colors"
                  >
                    <Volume2 className="w-5 h-5 text-amber-700" />
                  </button>
                </div>

                {/* Spanish Question (Clickable to reveal Armenian) */}
                <div
                  onClick={() => toggleArmenianQuestion(qItem.id)}
                  className="space-y-1.5 cursor-pointer group/q max-w-full overflow-hidden break-words"
                  title="Սեղմիր՝ հայերեն թարգմանությունը տեսնելու համար"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="text-amber-900 font-black text-xs bg-amber-200 px-2 py-0.5 rounded-md mt-1 shrink-0">
                      ES
                    </span>
                    <h4 className="font-extrabold text-stone-900 text-lg sm:text-xl lg:text-2xl leading-snug group-hover/q:text-amber-800 transition-colors break-words">
                      {qItem.questionEs}
                    </h4>
                  </div>

                  {/* Armenian Question reveal */}
                  {isArmenianQuestionOpen ? (
                    <div className="mt-2.5 pt-2.5 border-t border-amber-200/90 flex items-start gap-2.5 animate-in fade-in duration-150 max-w-full break-words">
                      <span className="text-blue-900 font-black text-xs bg-blue-200 px-2 py-0.5 rounded-md mt-1 shrink-0">
                        HY
                      </span>
                      <p className="text-base sm:text-lg font-bold text-blue-950 leading-relaxed break-words">
                        {qItem.questionHy}
                      </p>
                    </div>
                  ) : (
                    <p className="text-xs sm:text-sm text-stone-500 font-medium pt-1 flex items-center gap-1 group-hover/q:text-amber-800">
                      <span>🇦🇲 Clic para ver traducción al armenio</span>
                      <span className="text-amber-700 font-bold">➔</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Answer Section */}
              <div className="border-t-2 border-stone-200 bg-stone-50 p-5 space-y-3.5 max-w-full overflow-hidden break-words">
                {isAnswerOpen ? (
                  <div className="space-y-3.5 animate-in fade-in duration-150 max-w-full overflow-hidden break-words">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs sm:text-sm font-extrabold text-emerald-950 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-xl flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-700" />
                        Respuesta corta (ES)
                      </span>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => speakSpanish(qItem.answerEs)}
                          className="p-1.5 text-stone-600 hover:text-amber-900 hover:bg-stone-200 rounded-lg transition-colors"
                          title="Escuchar respuesta"
                        >
                          <Volume2 className="w-5 h-5 text-amber-700" />
                        </button>
                        <button
                          onClick={(e) => toggleAnswer(qItem.id, e)}
                          className="text-xs font-bold text-stone-500 hover:text-stone-800 underline px-1"
                        >
                          Թաքցնել
                        </button>
                      </div>
                    </div>

                    {/* Spanish Answer Box */}
                    <div
                      onClick={(e) => toggleArmenianAnswer(qItem.id, e)}
                      className="bg-white p-4 sm:p-5 rounded-2xl border-2 border-emerald-200 text-stone-900 font-extrabold text-base sm:text-lg lg:text-xl leading-relaxed cursor-pointer hover:border-amber-400 transition-colors shadow-2xs break-words"
                      title="Սեղմիր՝ հայերեն պատասխանը բացելու համար"
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-800 font-black text-xs bg-emerald-100 px-1.5 py-0.5 rounded mt-1 shrink-0">
                          ✅
                        </span>
                        <span className="break-words">{qItem.answerEs}</span>
                      </div>
                    </div>

                    {/* Breakdown list if present */}
                    {qItem.breakdown && (
                      <div className="bg-white p-3.5 rounded-xl border border-stone-300 text-sm space-y-1.5 break-words">
                        <span className="font-bold text-stone-600 block text-xs uppercase tracking-wider">
                          Վերլուծություն / Desglose:
                        </span>
                        {qItem.breakdown.map((b, bIdx) => (
                          <div key={bIdx} className="flex flex-col sm:flex-row sm:justify-between border-b border-stone-100 pb-1 gap-1">
                            <span className="font-bold text-stone-900">{b.es}</span>
                            <span className="text-stone-600 font-medium">{b.hy}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Armenian Answer Toggle Card */}
                    <div
                      onClick={(e) => toggleArmenianAnswer(qItem.id, e)}
                      className={`p-4 rounded-2xl border-2 transition-all cursor-pointer break-words ${
                        isArmenianAnswerOpen
                          ? 'bg-blue-50 border-blue-300 text-blue-950 ring-1 ring-blue-200'
                          : 'bg-white border-dashed border-stone-300 text-stone-600 hover:text-stone-950 hover:border-amber-400'
                      }`}
                    >
                      {isArmenianAnswerOpen ? (
                        <div className="space-y-1.5 max-w-full break-words">
                          <span className="text-xs font-black text-blue-900 uppercase tracking-wider block">
                            🇦🇲 Պատասխանի Հայերեն Թարգմանություն․
                          </span>
                          <p className="text-base sm:text-lg font-bold leading-relaxed break-words text-stone-900">
                            {qItem.answerHy}
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between text-sm font-bold">
                          <span>🇦🇲 Տեսնել հայերեն պատասխանը</span>
                          <span className="font-black text-amber-700">Սեղմել ➔</span>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={(e) => toggleAnswer(qItem.id, e)}
                    className="w-full py-3 sm:py-3.5 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-sm sm:text-base transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <HelpCircle className="w-5 h-5 text-stone-950" />
                    <span>Տեսնել պատասխանը (Ver respuesta)</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* 4 Essential Summary Phrases for School Exam */}
      <section className="bg-linear-to-br from-stone-900 via-stone-850 to-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 border border-stone-800 max-w-full overflow-hidden break-words">
        <div className="space-y-2 max-w-full">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs sm:text-sm font-black border border-amber-400/30">
            <Sparkles className="w-4 h-4" />
            <span>То, что ученику особенно важно выучить · Գլխավորը քննության համար</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white break-words">
            4 ключевые фразы для устного ответа
          </h3>

          <p className="text-stone-300 text-sm sm:text-base font-medium break-words leading-relaxed">
            Քննության ժամանակ ուսանողին բավական է սկզբում հիշել այս 4 հիմնարար նախադասությունները․
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-full overflow-hidden break-words">
          {ESSENTIAL_PHRASES.map((ep) => {
            const isHyOpen = revealedEssentialArmenian[ep.id] || globalShowArmenian;

            return (
              <div
                key={ep.id}
                onClick={() => toggleEssentialArmenian(ep.id)}
                className="p-5 rounded-2xl bg-stone-800/90 border border-stone-700 hover:border-amber-400 transition-all cursor-pointer space-y-3 max-w-full overflow-hidden break-words shadow-2xs"
              >
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{ep.icon}</span>
                    <span className="font-extrabold text-amber-400 text-sm sm:text-base">
                      {ep.titleEs}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speakSpanish(ep.es);
                    }}
                    className="p-1 text-stone-400 hover:text-white"
                  >
                    <Volume2 className="w-4 h-4 text-amber-400" />
                  </button>
                </div>

                <div className="space-y-1.5 max-w-full break-words">
                  <p className="text-base sm:text-lg font-bold text-white leading-snug break-words">
                    🇪🇸 {ep.es}
                  </p>

                  {isHyOpen ? (
                    <p className="text-sm sm:text-base font-medium text-amber-200 pt-1 border-t border-stone-700 break-words leading-relaxed">
                      🇦🇲 {ep.hy}
                    </p>
                  ) : (
                    <p className="text-xs text-stone-400 pt-1">
                      👆 Сեղմիր հայերենի համար
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
