import React, { useState } from 'react';
import { Volume2, Mic, Play, Pause, ChevronRight, Sparkles, BookOpen } from 'lucide-react';
import { TEACHER_SCRIPT_DATA } from './examData';
import { speakSpanish } from './speech';

interface TeacherScriptTabProps {
  searchQuery: string;
}

export const TeacherScriptTab: React.FC<TeacherScriptTabProps> = ({ searchQuery }) => {
  const [revealedTranslations, setRevealedTranslations] = useState<Record<string, boolean>>({});
  const [revealedTips, setRevealedTips] = useState<Record<string, boolean>>({});
  const [activeSectionIdx, setActiveSectionIdx] = useState<number>(0);
  const [isPlayingAuto, setIsPlayingAuto] = useState<boolean>(false);
  const [currentAutoPhraseIdx, setCurrentAutoPhraseIdx] = useState<number>(0);

  const toggleTrans = (id: string) => {
    setRevealedTranslations((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleTip = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setRevealedTips((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const currentSection = TEACHER_SCRIPT_DATA[activeSectionIdx];

  const handlePlayPhrase = (text: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    speakSpanish(text);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="rounded-3xl bg-linear-to-r from-emerald-950 via-teal-900 to-stone-900 text-white p-6 sm:p-7 shadow-lg border border-teal-800">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-400/20 text-teal-200 text-xs font-semibold border border-teal-400/30">
            <Mic className="w-3.5 h-3.5" />
            <span>Simulador Oral · Սցենար Միայն Ուսուցչի Խոսքով</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Script del Profesor (Solo preguntas y réplicas)
          </h2>

          <p className="text-teal-100 text-sm sm:text-base leading-relaxed">
            Իսկական բանավոր քննության նմանակում։ Ուսուցիչը տալիս է միայն հարցերը և արտահայտությունները իսպաներենով։ Լսիր ձայնը (🔊), մտածիր պատասխանդ, իսկ անհրաժեշտության դեպքում սեղմիր հայերեն թարգմանությունը կամ հուշումը տեսնելու համար։
          </p>

          <div className="pt-2 flex items-center gap-3">
            <span className="text-xs text-teal-300 font-medium bg-teal-900/50 px-3 py-1.5 rounded-xl border border-teal-700/50">
              🎙️ Խորհուրդ․ Բարձրաձայն արտասանիր քո պատասխանը իսպաներենով
            </span>
          </div>
        </div>
      </div>

      {/* Section Navigation Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
        {TEACHER_SCRIPT_DATA.map((sec, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSectionIdx(idx)}
            className={`px-3.5 py-2.5 rounded-xl whitespace-nowrap font-medium transition-all flex items-center gap-1.5 ${
              activeSectionIdx === idx
                ? 'bg-amber-500 text-stone-950 font-bold shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <span className="w-4 h-4 rounded-full bg-stone-900 text-white text-[10px] font-bold flex items-center justify-center">
              {idx + 1}
            </span>
            <span>{sec.titleEs}</span>
          </button>
        ))}
      </div>

      {/* Active Section Card */}
      <div className="bg-white rounded-3xl border border-stone-200 shadow-xs p-5 sm:p-7 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-100">
          <div>
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
              Parte {activeSectionIdx + 1}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
              {currentSection.titleEs}
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 font-medium">
              {currentSection.titleHy}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const allSectionText = currentSection.phrases.map((p) => p.textEs).join('. ... ');
                speakSpanish(allSectionText);
              }}
              className="px-3.5 py-1.5 rounded-xl bg-stone-100 hover:bg-amber-100/70 text-stone-700 hover:text-amber-900 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Volume2 className="w-4 h-4 text-amber-700" />
              <span>Լսել բոլոր արտահայտությունները</span>
            </button>
          </div>
        </div>

        {/* Phrases List */}
        <div className="space-y-3">
          {currentSection.phrases.map((phrase, pIdx) => {
            const isArmenianOpen = revealedTranslations[phrase.id];
            const isTipOpen = revealedTips[phrase.id];

            return (
              <div
                key={phrase.id}
                onClick={() => toggleTrans(phrase.id)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                  isArmenianOpen
                    ? 'bg-amber-50/50 border-amber-300'
                    : 'bg-stone-50/60 border-stone-200 hover:border-amber-300 hover:bg-stone-50'
                }`}
              >
                <div className="flex items-start justify-between gap-3 flex-wrap sm:flex-nowrap max-w-full overflow-hidden">
                  <div className="flex items-start gap-3.5 max-w-full overflow-hidden">
                    <span className="w-8 h-8 rounded-xl bg-stone-200 text-stone-800 text-sm font-black flex items-center justify-center shrink-0 mt-0.5">
                      {pIdx + 1}
                    </span>
                    <div className="space-y-1.5 max-w-full overflow-hidden break-words">
                      <p className="text-stone-900 font-extrabold text-lg sm:text-xl lg:text-2xl leading-snug break-words">
                        “{phrase.textEs}”
                      </p>
                      <p className="text-xs sm:text-sm text-stone-500 font-medium">
                        👆 Clic para ver traducción · Սեղմիր թարգմանության համար
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-start">
                    <button
                      onClick={(e) => handlePlayPhrase(phrase.textEs, e)}
                      title="Escuchar al profesor"
                      className="p-2 rounded-xl text-stone-600 hover:text-amber-900 hover:bg-amber-100 transition-colors"
                    >
                      <Volume2 className="w-5 h-5 text-amber-700" />
                    </button>
                    {phrase.tipEs && (
                      <button
                        onClick={(e) => toggleTip(phrase.id, e)}
                        title="Ver sugerencia de respuesta"
                        className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                          isTipOpen
                            ? 'bg-emerald-700 text-white'
                            : 'bg-emerald-100 text-emerald-900 border border-emerald-300 hover:bg-emerald-200'
                        }`}
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Հուշում</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Armenian translation dropdown */}
                {isArmenianOpen && (
                  <div className="mt-3.5 pt-3.5 border-t-2 border-amber-200/90 animate-in fade-in duration-150 max-w-full overflow-hidden break-words">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-900 font-bold mb-1.5">
                      <span className="bg-blue-200 text-blue-900 px-2 py-0.5 rounded text-xs font-black">HY</span>
                      <span>Հայերեն թարգմանություն․</span>
                    </div>
                    <p className="text-stone-800 text-base sm:text-lg font-medium pl-2 sm:pl-7 break-words leading-relaxed">
                      «{phrase.textHy}»
                    </p>
                  </div>
                )}

                {/* Response Tip dropdown */}
                {isTipOpen && phrase.tipEs && (
                  <div className="mt-3.5 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-sm sm:text-base text-emerald-950 space-y-1.5 animate-in fade-in duration-150 max-w-full overflow-hidden break-words">
                    <div className="font-bold flex items-center gap-1.5 text-emerald-900 text-sm">
                      <Sparkles className="w-4 h-4 text-emerald-700" />
                      <span>Sugerencia / Ինչպես պատասխանել քննությանը:</span>
                    </div>
                    <p className="font-semibold text-stone-900 break-words leading-relaxed">
                      🇪🇸 {phrase.tipEs}
                    </p>
                    {phrase.tipHy && (
                      <p className="text-stone-700 pt-1 font-medium break-words leading-relaxed border-t border-emerald-200/70">
                        🇦🇲 {phrase.tipHy}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation bottom buttons */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
          <button
            disabled={activeSectionIdx === 0}
            onClick={() => setActiveSectionIdx((prev) => Math.max(0, prev - 1))}
            className="px-4 py-2 rounded-xl border border-stone-200 text-xs font-semibold text-stone-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-50"
          >
            ← Նախորդ բաժինը
          </button>
          <span className="text-xs text-stone-400 font-medium">
            Բաժին {activeSectionIdx + 1} / {TEACHER_SCRIPT_DATA.length}
          </span>
          <button
            disabled={activeSectionIdx === TEACHER_SCRIPT_DATA.length - 1}
            onClick={() => setActiveSectionIdx((prev) => Math.min(TEACHER_SCRIPT_DATA.length - 1, prev + 1))}
            className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-800 flex items-center gap-1"
          >
            <span>Հաջորդ բաժինը</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
