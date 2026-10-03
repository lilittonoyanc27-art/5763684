import React, { useState } from 'react';
import { Volume2, BookOpen, Sparkles, Eye, EyeOff } from 'lucide-react';
import { TOPICS_DATA } from './examData';
import { BilingualCard } from './BilingualCard';
import { speakSpanish } from './speech';

interface StudentAnswersTabProps {
  searchQuery: string;
}

export const StudentAnswersTab: React.FC<StudentAnswersTabProps> = ({ searchQuery }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>('all');
  const [globalShowArmenian, setGlobalShowArmenian] = useState<boolean>(false);

  const filteredTopics = TOPICS_DATA.filter((topic) => {
    if (selectedTopicId !== 'all' && topic.id !== selectedTopicId) return false;
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      topic.titleEs.toLowerCase().includes(q) ||
      topic.titleHy.toLowerCase().includes(q) ||
      topic.items.some(
        (it) =>
          it.nameEs.toLowerCase().includes(q) ||
          it.nameHy.toLowerCase().includes(q) ||
          it.descEs.toLowerCase().includes(q) ||
          it.descHy.toLowerCase().includes(q) ||
          it.exampleEs.toLowerCase().includes(q)
      )
    );
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Hero Header for Student Oral Speech */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-stone-900 via-stone-850 to-stone-900 text-white p-6 sm:p-8 border border-stone-800 shadow-xl max-w-full break-words">
        <div className="relative z-10 max-w-3xl space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-bold">
            <Sparkles className="w-4 h-4" />
            <span>Respuesta Modelo del Alumno · Ուսանողի Պատասխանը Քննությանը</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white break-words">
            Las 4 Grandes Respuestas para el Examen Oral
          </h2>

          <p className="text-stone-200 text-base sm:text-lg leading-relaxed break-words font-medium">
            Preparación completa con estructura oral formal en español 🇪🇸. Haz clic en cualquier recuadro en español para revelar de inmediato la traducción y explicación en armenio 🇦🇲.
          </p>

          {/* Quick controls */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setGlobalShowArmenian(!globalShowArmenian)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-bold backdrop-blur-xs transition-colors border border-white/20 cursor-pointer"
            >
              {globalShowArmenian ? (
                <>
                  <EyeOff className="w-4 h-4 text-amber-300" />
                  <span>Թաքցնել հայերենը (Սեղմելով բացելու ռեժիմ)</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4 text-blue-300" />
                  <span>Բացել ամբողջ հայերենը միանգամից</span>
                </>
              )}
            </button>
            <span className="text-xs sm:text-sm text-stone-300 font-medium">
              💡 Սեղմիր ցանկացած տեքստի վրա հայերենը բացելու համար
            </span>
          </div>
        </div>

        {/* Ambient background glow */}
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Topic Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs sm:text-sm">
        <button
          onClick={() => setSelectedTopicId('all')}
          className={`px-4 py-2.5 rounded-xl whitespace-nowrap font-bold transition-all cursor-pointer ${
            selectedTopicId === 'all'
              ? 'bg-amber-500 text-stone-950 font-black shadow-xs'
              : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
          }`}
        >
          Բոլոր 4 Թեմաները (Todos)
        </button>

        {TOPICS_DATA.map((t) => (
          <button
            key={t.id}
            onClick={() => setSelectedTopicId(t.id)}
            className={`px-4 py-2.5 rounded-xl whitespace-nowrap font-bold transition-all flex items-center gap-2 cursor-pointer ${
              selectedTopicId === t.id
                ? 'bg-stone-900 text-white font-black shadow-xs'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 text-xs font-black flex items-center justify-center">
              {t.number}
            </span>
            <span>{t.titleEs}</span>
          </button>
        ))}
      </div>

      {/* Topics Content */}
      <div className="space-y-12">
        {filteredTopics.map((topic) => (
          <section
            key={topic.id}
            id={topic.id}
            className="rounded-3xl bg-white border border-stone-200 p-5 sm:p-8 shadow-xs space-y-6 max-w-full overflow-hidden break-words"
          >
            {/* Topic Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100 max-w-full overflow-hidden break-words">
              <div className="space-y-1 max-w-full">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="w-8 h-8 rounded-xl bg-amber-500 text-stone-950 font-black text-sm flex items-center justify-center">
                    {topic.number}
                  </span>
                  <span className="text-xs uppercase font-extrabold tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-md">
                    Tema {topic.number}
                  </span>
                  <span className="text-xs sm:text-sm text-stone-600 font-bold">
                    {topic.questionKeyEs}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-stone-900 break-words">
                  {topic.titleEs}
                </h3>
                <p className="text-base sm:text-lg font-bold text-blue-900 break-words mt-0.5">
                  {topic.titleHy}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => speakSpanish(`${topic.titleEs}. ${topic.introEs}`)}
                  className="px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-amber-100 text-stone-800 hover:text-amber-950 text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer"
                  title="Escuchar introducción"
                >
                  <Volume2 className="w-4 h-4 text-amber-700" />
                  <span>Լսել իսպաներեն</span>
                </button>
              </div>
            </div>

            {/* Intro speech card */}
            <BilingualCard
              tag="Introducción Oral"
              tagColor="bg-blue-50 text-blue-800 border-blue-200"
              titleEs="Respuesta introductoria para el examen"
              titleHy="Ներածական պատասխան քննության համար"
              esText={topic.introEs}
              hyText={topic.introHy}
              forceShowHy={globalShowArmenian}
            />

            {/* Topic Items Grid */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-wider text-stone-500 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                Elementos y Definiciones clave · Սահմանումներ և Օրինակներ
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topic.items.map((item, idx) => (
                  <BilingualCard
                    key={idx}
                    tag={`Punto ${idx + 1}`}
                    titleEs={item.nameEs}
                    titleHy={item.nameHy}
                    esText={item.descEs}
                    hyText={item.descHy}
                    exampleEs={item.exampleEs}
                    exampleHy={item.exampleHy}
                    noteEs={item.extraNoteEs}
                    noteHy={item.extraNoteHy}
                    forceShowHy={globalShowArmenian}
                  />
                ))}
              </div>
            </div>

            {/* Topic Conclusion if present */}
            {topic.conclusionEs && (
              <BilingualCard
                tag="Regla de Oro / Ոսկե Կանոն"
                tagColor="bg-emerald-50 text-emerald-800 border-emerald-200"
                esText={topic.conclusionEs}
                hyText={topic.conclusionHy || ''}
                forceShowHy={globalShowArmenian}
                className="border-emerald-200 bg-emerald-50/20"
              />
            )}
          </section>
        ))}
      </div>
    </div>
  );
};
