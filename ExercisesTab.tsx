import React, { useState } from 'react';
import { CheckCircle2, HelpCircle, Eye, EyeOff, Volume2, Sparkles, AlertCircle, FileText } from 'lucide-react';
import { EXERCISES_DATA } from './examData';
import { speakSpanish } from './speech';

interface ExercisesTabProps {
  onOpenAnswerModal: () => void;
}

export const ExercisesTab: React.FC<ExercisesTabProps> = ({ onOpenAnswerModal }) => {
  const [selectedExerciseId, setSelectedExerciseId] = useState<string>('all');
  const [revealedPerQuestion, setRevealedPerQuestion] = useState<Record<string, boolean>>({});
  const [revealedFullExercise, setRevealedFullExercise] = useState<Record<string, boolean>>({});
  const [revealedArmenianText, setRevealedArmenianText] = useState<Record<string, boolean>>({});
  const [selectedIntruso, setSelectedIntruso] = useState<Record<string, string>>({});

  const toggleSubAnswer = (qId: string) => {
    setRevealedPerQuestion((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const toggleFullExAnswer = (exId: string) => {
    setRevealedFullExercise((prev) => ({ ...prev, [exId]: !prev[exId] }));
  };

  const toggleArmenianContent = (id: string) => {
    setRevealedArmenianText((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectIntruso = (qId: string, option: string) => {
    setSelectedIntruso((prev) => ({ ...prev, [qId]: option }));
  };

  const filteredExercises = EXERCISES_DATA.filter((ex) => {
    if (selectedExerciseId === 'all') return true;
    return ex.id === selectedExerciseId;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Banner */}
      <div className="rounded-3xl bg-linear-to-r from-amber-600 via-orange-600 to-amber-700 text-white p-6 sm:p-7 shadow-lg border border-amber-500">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-xs">
              <FileText className="w-3.5 h-3.5" />
              <span>7 Ejercicios Prácticos · 7 Քննական Վարժություններ</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Entrenamiento de Examen con Clave de Respuestas
            </h2>

            <p className="text-amber-100 text-sm sm:text-base leading-relaxed">
              Կատարիր վարժությունները ինքնուրույն, ապա ստուգիր պատասխանները։ Ցանկացած իսպաներեն տեքստի վրա սեղմելով բացվում է հայերեն թարգմանությունը։
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <button
              onClick={onOpenAnswerModal}
              className="px-5 py-3 rounded-2xl bg-stone-900 hover:bg-stone-800 text-amber-300 font-extrabold text-sm sm:text-base shadow-xl flex items-center justify-center gap-2 border border-amber-400/40 transition-transform active:scale-95 cursor-pointer"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Տեսնել ԲՈԼՈՐ Պատասխանները</span>
            </button>
          </div>
        </div>
      </div>

      {/* Exercise Selector Buttons */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
        <button
          onClick={() => setSelectedExerciseId('all')}
          className={`px-3.5 py-2.5 rounded-xl whitespace-nowrap font-medium transition-all ${
            selectedExerciseId === 'all'
              ? 'bg-stone-900 text-white font-bold shadow-xs'
              : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
          }`}
        >
          Բոլոր 7-ը (Todos)
        </button>

        {EXERCISES_DATA.map((ex) => (
          <button
            key={ex.id}
            onClick={() => setSelectedExerciseId(ex.id)}
            className={`px-3.5 py-2.5 rounded-xl whitespace-nowrap font-medium transition-all flex items-center gap-1.5 ${
              selectedExerciseId === ex.id
                ? 'bg-amber-500 text-stone-950 font-bold shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <span className="w-4 h-4 rounded-full bg-stone-200 text-stone-800 text-[10px] font-bold flex items-center justify-center">
              {ex.num}
            </span>
            <span>{ex.titleEs.split('.')[1] || ex.titleEs}</span>
          </button>
        ))}
      </div>

      {/* Exercises List */}
      <div className="space-y-8">
        {filteredExercises.map((ex) => {
          const isFullAnswerOpen = revealedFullExercise[ex.id];
          const isArmenianContentOpen = revealedArmenianText[ex.id];

          return (
            <div
              key={ex.id}
              className="bg-white rounded-3xl border border-stone-200 shadow-xs overflow-hidden"
            >
              {/* Exercise Header */}
              <div className="p-5 sm:p-6 bg-stone-50 border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-full overflow-hidden break-words">
                <div className="space-y-1.5 max-w-full">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="w-8 h-8 rounded-xl bg-amber-500 text-stone-950 font-black text-sm flex items-center justify-center shrink-0">
                      {ex.num}
                    </span>
                    <h3 className="font-black text-stone-900 text-lg sm:text-xl lg:text-2xl break-words">
                      {ex.titleEs}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base font-bold text-blue-900 pl-0 sm:pl-10 break-words">
                    {ex.titleHy}
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 pl-0 sm:pl-10 pt-1 font-medium break-words leading-relaxed">
                    {ex.promptEs}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
                  <button
                    onClick={() => toggleFullExAnswer(ex.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 transition-all shadow-xs cursor-pointer ${
                      isFullAnswerOpen
                        ? 'bg-emerald-700 text-white ring-2 ring-emerald-300'
                        : 'bg-emerald-50 text-emerald-900 border-2 border-emerald-300 hover:bg-emerald-100'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isFullAnswerOpen ? 'Թաքցնել պատասխանը' : 'Պատասխաններ (Solución)'}</span>
                  </button>
                </div>
              </div>

              {/* Text Snippet / Reading if exists */}
              {ex.contentEs && (
                <div className="p-5 sm:p-6 border-b border-stone-100 bg-amber-50/30 space-y-3.5 max-w-full overflow-hidden break-words">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs sm:text-sm uppercase font-extrabold tracking-wider text-amber-900 flex items-center gap-1.5">
                      📖 Texto de análisis · Տեքստ
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => speakSpanish(ex.contentEs || '')}
                        className="p-1.5 rounded-lg text-stone-600 hover:text-amber-900 hover:bg-amber-100 transition-colors"
                        title="Escuchar texto"
                      >
                        <Volume2 className="w-5 h-5 text-amber-700" />
                      </button>
                      <button
                        onClick={() => toggleArmenianContent(ex.id)}
                        className="text-xs sm:text-sm text-blue-900 hover:underline font-bold bg-white px-2.5 py-1 rounded-lg border border-blue-200"
                      >
                        {isArmenianContentOpen ? 'Թաքցնել հայերենը' : '🇦🇲 Կարդալ հայերեն'}
                      </button>
                    </div>
                  </div>

                  <div
                    onClick={() => toggleArmenianContent(ex.id)}
                    className="p-5 rounded-2xl bg-white border border-stone-300 text-base sm:text-lg lg:text-xl leading-relaxed text-stone-900 font-medium whitespace-pre-line cursor-pointer hover:border-amber-400 transition-colors break-words shadow-2xs"
                    title="Clic para ver traducción al armenio"
                  >
                    {ex.contentEs}
                  </div>

                  {isArmenianContentOpen && ex.contentHy && (
                    <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 text-base sm:text-lg leading-relaxed text-blue-950 font-medium whitespace-pre-line animate-in fade-in duration-150 break-words shadow-2xs">
                      <div className="text-xs uppercase font-black text-blue-800 tracking-wider mb-2">
                        🇦🇲 Հայերեն տեքստ
                      </div>
                      {ex.contentHy}
                    </div>
                  )}
                </div>
              )}

              {/* Sub-questions or Interactive items */}
              <div className="p-5 sm:p-6 space-y-4 max-w-full overflow-hidden break-words">
                {ex.subQuestions?.map((sq, sqIdx) => {
                  const isRevealed = revealedPerQuestion[sq.id] || isFullAnswerOpen;
                  const isIntruso = Boolean(sq.options);

                  return (
                    <div
                      key={sq.id}
                      className="p-4 sm:p-5 rounded-2xl border border-stone-200 bg-stone-50/60 hover:bg-stone-50 transition-colors space-y-3.5 max-w-full overflow-hidden break-words"
                    >
                      <div className="flex items-start justify-between gap-3 flex-wrap sm:flex-nowrap">
                        <div className="space-y-1.5 max-w-full overflow-hidden break-words">
                          <p className="text-base sm:text-lg font-bold text-stone-900 break-words leading-snug">
                            {sq.qEs}
                          </p>
                          <p className="text-sm sm:text-base text-stone-600 font-medium break-words leading-relaxed">
                            {sq.qHy}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 self-start">
                          <button
                            onClick={() => speakSpanish(sq.qEs)}
                            className="p-1.5 text-stone-500 hover:text-amber-800 hover:bg-amber-100 rounded-lg"
                            title="Escuchar"
                          >
                            <Volume2 className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => toggleSubAnswer(sq.id)}
                            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-black transition-colors cursor-pointer ${
                              isRevealed
                                ? 'bg-stone-900 text-white'
                                : 'bg-white border-2 border-stone-300 text-stone-800 hover:bg-amber-100 hover:border-amber-400'
                            }`}
                          >
                            {isRevealed ? 'Թաքցնել' : 'Պատասխան'}
                          </button>
                        </div>
                      </div>

                      {/* If exercise is odd-one-out (intruso), render clickable buttons */}
                      {isIntruso && sq.options && (
                        <div className="pt-1 flex flex-wrap gap-2.5">
                          {sq.options.map((opt) => {
                            const isChosen = selectedIntruso[sq.id] === opt;
                            const isCorrect = sq.correctOption === opt;
                            let btnStyle = 'bg-white border-2 border-stone-300 text-stone-900 hover:border-amber-400';

                            if (isChosen) {
                              btnStyle = isCorrect
                                ? 'bg-emerald-600 border-emerald-600 text-white font-black ring-2 ring-emerald-300'
                                : 'bg-rose-600 border-rose-600 text-white font-black ring-2 ring-rose-300';
                            } else if (isRevealed && isCorrect) {
                              btnStyle = 'bg-emerald-100 border-2 border-emerald-500 text-emerald-950 font-black';
                            }

                            return (
                              <button
                                key={opt}
                                onClick={() => handleSelectIntruso(sq.id, opt)}
                                className={`px-4 sm:px-5 py-2.5 rounded-xl text-sm sm:text-base font-bold border transition-all cursor-pointer ${btnStyle}`}
                              >
                                {opt}
                                {isChosen && (
                                  <span className="ml-1.5">
                                    {isCorrect ? '✅' : '❌'}
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Revealed answer section */}
                      {isRevealed && (
                        <div className="pt-3 border-t border-stone-200 space-y-2 animate-in fade-in duration-150 max-w-full overflow-hidden break-words">
                          <div className="flex items-start gap-2.5 bg-emerald-50 border border-emerald-300 p-3.5 rounded-xl text-emerald-950 text-sm sm:text-base break-words">
                            <span className="text-xs font-black uppercase bg-emerald-700 text-white px-2 py-0.5 rounded mt-0.5 shrink-0">
                              RESPUESTA
                            </span>
                            <span className="font-extrabold break-words">{sq.expectedAnswerEs}</span>
                          </div>

                          {sq.expectedAnswerHy && (
                            <div className="bg-blue-50 border border-blue-200 p-3.5 rounded-xl text-sm sm:text-base text-blue-950 font-medium break-words">
                              <span className="text-xs font-black text-blue-800 uppercase tracking-wider block mb-1">
                                🇦🇲 Հայերեն բացատրություն․
                              </span>
                              <span className="break-words leading-relaxed">{sq.expectedAnswerHy}</span>
                            </div>
                          )}

                          {sq.explanationEs && (
                            <p className="text-xs sm:text-sm text-stone-600 italic pl-1 break-words">
                              💡 {sq.explanationEs}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Full Exercise Solution Banner / Toggle */}
              {isFullAnswerOpen && (
                <div className="m-5 sm:m-6 p-5 sm:p-6 rounded-2xl bg-stone-900 text-stone-100 space-y-3.5 animate-in fade-in duration-200 shadow-md max-w-full overflow-hidden break-words">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-2.5 flex-wrap gap-2">
                    <span className="text-xs sm:text-sm uppercase font-mono tracking-wider text-amber-400 font-bold">
                      ✅ Solución Oficial del Ejercicio {ex.num}
                    </span>
                    <button
                      onClick={() => speakSpanish(ex.fullAnswerEs)}
                      className="text-xs sm:text-sm text-stone-300 hover:text-white flex items-center gap-1.5 font-mono px-2 py-1 rounded bg-stone-800"
                    >
                      <Volume2 className="w-4 h-4 text-amber-400" />
                      <span>Audio</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base font-mono whitespace-pre-wrap leading-relaxed max-w-full break-words">
                    <div className="bg-stone-800 p-4 rounded-xl text-amber-200 border border-stone-700 break-words">
                      {ex.fullAnswerEs}
                    </div>
                    <div className="bg-blue-950/90 p-4 rounded-xl text-blue-100 border border-blue-900 font-sans break-words">
                      {ex.fullAnswerHy}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
