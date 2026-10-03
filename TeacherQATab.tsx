import React, { useState } from 'react';
import { Volume2, MessageSquare, HelpCircle, Check, Eye, EyeOff } from 'lucide-react';
import { TEACHER_QA_DATA } from './examData';
import { speakSpanish } from './speech';

interface TeacherQATabProps {
  searchQuery: string;
}

export const TeacherQATab: React.FC<TeacherQATabProps> = ({ searchQuery }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [revealedArmenian, setRevealedArmenian] = useState<Record<string, boolean>>({});

  const toggleAnswer = (id: string) => {
    setRevealedAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleArmenian = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setRevealedArmenian((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const revealAllAnswers = () => {
    const allIds: Record<string, boolean> = {};
    TEACHER_QA_DATA.forEach((q) => {
      allIds[q.id] = true;
    });
    setRevealedAnswers(allIds);
  };

  const hideAllAnswers = () => {
    setRevealedAnswers({});
  };

  const filteredQAs = TEACHER_QA_DATA.filter((item) => {
    if (activeCategory !== 'all' && item.topicId !== activeCategory) return false;
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.qEs.toLowerCase().includes(q) ||
      item.qHy.toLowerCase().includes(q) ||
      item.aEs.toLowerCase().includes(q) ||
      item.aHy.toLowerCase().includes(q)
    );
  });

  const categories = [
    { id: 'all', label: 'Բոլոր Հարցերը (Todas)' },
    { id: 'funciones', label: '1. Funciones del lenguaje' },
    { id: 'modalidades', label: '2. Modalidades oracionales' },
    { id: 'comunicacion', label: '3. Elementos comunicación' },
    { id: 'categorias', label: '4. Categorías gramaticales' },
    { id: 'mezcladas', label: '🎓 Preguntas Mezcladas (Խառը)' }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="rounded-3xl bg-linear-to-r from-blue-900 to-indigo-900 text-white p-6 sm:p-7 shadow-lg border border-blue-800">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-400/20 text-blue-200 text-xs font-semibold border border-blue-400/30">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Simulador de Preguntas y Respuestas · Ուսուցչի Հարցերը</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Banco de Preguntas del Profesor con Respuestas
          </h2>

          <p className="text-blue-100 text-sm sm:text-base">
            Practica responder oralmente a cada pregunta del examinador. Haz clic en una tarjeta para ver la respuesta en español, y vuelve a hacer clic para ver la traducción en armenio.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2">
            <button
              onClick={revealAllAnswers}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-medium transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-amber-300" />
              <span>Բացել բոլոր պատասխանները</span>
            </button>
            <button
              onClick={hideAllAnswers}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
            >
              <EyeOff className="w-3.5 h-3.5 text-stone-300" />
              <span>Թաքցնել պատասխանները (Քննական ռեժիմ)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCategory(c.id)}
            className={`px-3.5 py-2 rounded-xl whitespace-nowrap font-medium transition-all ${
              activeCategory === c.id
                ? 'bg-amber-500 text-stone-950 font-bold shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Q&A Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredQAs.map((item, idx) => {
          const isAnswerOpen = revealedAnswers[item.id];
          const isArmenianOpen = revealedArmenian[item.id];

          return (
            <div
              key={item.id}
              className="rounded-2xl border border-stone-200 bg-white hover:border-amber-300 transition-all shadow-xs hover:shadow-md flex flex-col justify-between overflow-hidden"
            >
              {/* Question Section */}
              <div className="p-5 sm:p-6 space-y-3 max-w-full overflow-hidden break-words">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-xs sm:text-sm font-bold px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 border border-stone-200">
                    {item.topicNameEs} · #{idx + 1}
                  </span>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => speakSpanish(item.qEs)}
                      title="Escuchar pregunta en español"
                      className="p-1.5 rounded-lg text-stone-600 hover:text-amber-800 hover:bg-amber-100 transition-colors"
                    >
                      <Volume2 className="w-5 h-5 text-amber-700" />
                    </button>
                  </div>
                </div>

                {/* Question Texts */}
                <div className="space-y-2 max-w-full">
                  <div className="flex items-start gap-2.5">
                    <span className="text-amber-900 font-black text-xs bg-amber-200 px-2 py-0.5 rounded-md mt-1 shrink-0">
                      ES
                    </span>
                    <h4 className="font-extrabold text-stone-900 text-lg sm:text-xl leading-snug break-words">
                      {item.qEs}
                    </h4>
                  </div>

                  <div className="flex items-start gap-2.5 pt-1">
                    <span className="text-blue-800 font-black text-xs bg-blue-200 px-2 py-0.5 rounded-md mt-1 shrink-0">
                      HY
                    </span>
                    <p className="text-sm sm:text-base text-stone-700 font-semibold break-words leading-relaxed">
                      {item.qHy}
                    </p>
                  </div>
                </div>
              </div>

              {/* Answer Box */}
              <div className="border-t border-stone-200 bg-stone-50/90 p-5 space-y-3.5 max-w-full overflow-hidden break-words">
                {isAnswerOpen ? (
                  <div className="space-y-3.5 animate-in fade-in duration-150 max-w-full">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs sm:text-sm font-extrabold text-emerald-900 bg-emerald-100 border border-emerald-300 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-700" />
                        Respuesta del alumno (ES)
                      </span>
                      <button
                        onClick={() => speakSpanish(item.aEs)}
                        className="text-stone-600 hover:text-amber-900 p-1.5 rounded-lg hover:bg-stone-200"
                        title="Escuchar respuesta"
                      >
                        <Volume2 className="w-5 h-5 text-amber-700" />
                      </button>
                    </div>

                    <p
                      onClick={() => toggleArmenian(item.id)}
                      className="text-stone-900 text-base sm:text-lg lg:text-xl font-bold bg-white p-4 rounded-xl border border-stone-300 cursor-pointer hover:border-amber-400 transition-colors break-words leading-relaxed shadow-2xs"
                      title="Clic para alternar traducción en armenio"
                    >
                      {item.aEs}
                    </p>

                    {/* Breakdown if present */}
                    {item.breakdown && (
                      <div className="bg-white p-3.5 rounded-xl border border-stone-300 text-sm space-y-1.5 break-words">
                        <span className="font-bold text-stone-700 block text-xs uppercase tracking-wider">
                          Desglose / Քերականական Վերլուծություն:
                        </span>
                        {item.breakdown.map((b, bIdx) => (
                          <div key={bIdx} className="flex flex-col sm:flex-row sm:justify-between border-b border-stone-100 pb-1 gap-1">
                            <span className="font-bold text-stone-900">{b.es}</span>
                            <span className="text-stone-600 font-medium">{b.hy}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Armenian Translation Toggle Card */}
                    <div
                      onClick={() => toggleArmenian(item.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer break-words ${
                        isArmenianOpen
                          ? 'bg-blue-50 border-blue-300 text-blue-950 ring-1 ring-blue-200'
                          : 'bg-white border-dashed border-stone-300 text-stone-600 hover:text-stone-900 hover:border-amber-400'
                      }`}
                    >
                      {isArmenianOpen ? (
                        <div className="space-y-1.5">
                          <span className="text-xs font-black text-blue-800 uppercase tracking-wider block">
                            🇦🇲 Պատասխանի Հայերեն Թարգմանություն․
                          </span>
                          <p className="text-base sm:text-lg font-medium leading-relaxed break-words text-stone-900">
                            {item.aHy}
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between text-sm font-semibold">
                          <span>🇦🇲 Տեսնել հայերեն թարգմանությունը</span>
                          <span className="font-bold text-amber-700">Սեղմել ➔</span>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => toggleAnswer(item.id)}
                    className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-sm sm:text-base transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <HelpCircle className="w-5 h-5" />
                    <span>Տեսնել պատասխանը (Ver respuesta)</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
