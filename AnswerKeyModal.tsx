import React, { useState } from 'react';
import { X, CheckCircle2, Copy, Check, BookOpen, Volume2, Zap } from 'lucide-react';
import { EXERCISES_DATA } from './examData';
import { SUPER_TEST_QUESTIONS } from './superTestData';
import { speakSpanish } from './speech';

interface AnswerKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AnswerKeyModal: React.FC<AnswerKeyModalProps> = ({ isOpen, onClose }) => {
  const [modalMode, setModalMode] = useState<'supertest' | 'exercises'>('supertest');
  const [activeTab, setActiveTab] = useState<number>(0);
  const [superCategory, setSuperCategory] = useState<string>('all');
  const [copied, setCopied] = useState(false);
  const [showArmenian, setShowArmenian] = useState(true);

  if (!isOpen) return null;

  const currentEx = EXERCISES_DATA[activeTab];

  const handleCopy = () => {
    let text = '';
    if (modalMode === 'exercises') {
      text = `EJERCICIO ${currentEx.num}: ${currentEx.titleEs}\n\nESP:\n${currentEx.fullAnswerEs}\n\nARM:\n${currentEx.fullAnswerHy}`;
    } else {
      text = SUPER_TEST_QUESTIONS.map(
        (q) => `Q: ${q.questionEs}\nA: ${q.answerEs}\nHY: ${q.answerHy}\n`
      ).join('\n---\n');
    }
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredSuperQuestions = SUPER_TEST_QUESTIONS.filter(
    (q) => superCategory === 'all' || q.category === superCategory
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="bg-white w-full max-w-4xl max-h-[92vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-stone-200 bg-amber-500/10 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold shadow-xs">
              <CheckCircle2 className="w-6 h-6 text-stone-950" />
            </div>
            <div>
              <h3 className="font-black text-stone-900 text-lg sm:text-xl flex items-center gap-2">
                <span>Clave de Respuestas Oficial</span>
                <span className="text-xs bg-amber-200 text-amber-950 px-2.5 py-0.5 rounded-full font-bold">
                  Պատասխաններ
                </span>
              </h3>
              <p className="text-xs text-stone-600 font-semibold">
                {modalMode === 'supertest' ? '⚡ Պատասխաններ Սուպեր Թեստի համար (1º ESO)' : '📝 7 Քննական վարժությունների լուծումներ'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Mode Switcher */}
            <div className="flex items-center rounded-xl bg-stone-100 p-1 border border-stone-200 text-xs font-bold">
              <button
                onClick={() => setModalMode('supertest')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                  modalMode === 'supertest' ? 'bg-amber-500 text-stone-950 font-black shadow-2xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>Супер тест</span>
              </button>
              <button
                onClick={() => setModalMode('exercises')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                  modalMode === 'exercises' ? 'bg-stone-900 text-white font-black shadow-2xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>7 Ejercicios</span>
              </button>
            </div>

            <button
              onClick={() => setShowArmenian(!showArmenian)}
              className={`text-xs px-2.5 py-1.5 rounded-lg border font-bold transition-colors cursor-pointer ${
                showArmenian
                  ? 'bg-blue-50 text-blue-900 border-blue-200'
                  : 'bg-stone-100 text-stone-600 border-stone-200'
              }`}
            >
              {showArmenian ? '🇦🇲 Հայերեն' : '🇪🇸 Español'}
            </button>

            <button
              onClick={handleCopy}
              className="p-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
              title="Copiar respuesta actual"
            >
              {copied ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sub-header Navigation */}
        {modalMode === 'exercises' ? (
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-stone-200 bg-stone-50 overflow-x-auto text-xs font-bold">
            {EXERCISES_DATA.map((ex, idx) => (
              <button
                key={ex.id}
                onClick={() => setActiveTab(idx)}
                className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === idx
                    ? 'bg-stone-900 text-white shadow-xs font-black'
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-amber-400 text-stone-900 text-[10px] font-bold inline-flex items-center justify-center">
                  {ex.num}
                </span>
                <span>{ex.titleEs.split('.')[1] || ex.titleEs}</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-stone-200 bg-stone-50 overflow-x-auto text-xs font-bold">
            {[
              { id: 'all', label: 'Բոլոր 38-ը' },
              { id: 'funciones', label: '1. Funciones' },
              { id: 'modalidades', label: '2. Modalidades' },
              { id: 'comunicacion', label: '3. Comunicación' },
              { id: 'categorias', label: '4. Categorías' },
              { id: 'practicas', label: '5. Prácticas' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSuperCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  superCategory === cat.id
                    ? 'bg-amber-500 text-stone-950 font-black shadow-xs'
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 max-w-full overflow-hidden break-words">
          {modalMode === 'exercises' ? (
            /* Exercises View */
            <>
              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 flex items-start justify-between gap-4 flex-wrap sm:flex-nowrap">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-black bg-amber-200 text-amber-900 px-2.5 py-0.5 rounded-md">
                      Ejercicio {currentEx.num}
                    </span>
                    <h4 className="font-extrabold text-stone-900 text-lg sm:text-xl">
                      {currentEx.titleEs}
                    </h4>
                  </div>
                  <p className="text-sm font-bold text-blue-900">{currentEx.titleHy}</p>
                </div>

                <button
                  onClick={() => speakSpanish(currentEx.fullAnswerEs)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-stone-300 text-xs sm:text-sm font-bold text-stone-800 hover:bg-amber-100 hover:text-amber-900 transition-colors shadow-2xs shrink-0 cursor-pointer"
                >
                  <Volume2 className="w-4 h-4 text-amber-700" />
                  <span>Escuchar</span>
                </button>
              </div>

              {/* Detailed Sub-questions list */}
              <div className="space-y-3.5 max-w-full overflow-hidden break-words">
                <h5 className="text-xs sm:text-sm font-extrabold tracking-wider text-stone-500 uppercase flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-600" />
                  Soluciones detalladas paso a paso · Լուծումներ
                </h5>

                {currentEx.subQuestions?.map((sq) => (
                  <div
                    key={sq.id}
                    className="p-4 sm:p-5 rounded-2xl border border-emerald-200 bg-emerald-50/40 hover:bg-emerald-50/70 transition-colors max-w-full overflow-hidden break-words"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1 max-w-full overflow-hidden break-words">
                        <p className="text-sm sm:text-base font-extrabold text-stone-900 break-words">
                          {sq.qEs}
                        </p>
                        {showArmenian && (
                          <p className="text-xs sm:text-sm text-stone-600 font-medium break-words">
                            {sq.qHy}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-emerald-200 flex flex-col gap-1.5 max-w-full overflow-hidden break-words">
                      <div className="flex items-start gap-2.5 flex-wrap sm:flex-nowrap">
                        <span className="text-xs font-black text-emerald-900 bg-emerald-200 px-2 py-0.5 rounded mt-0.5 shrink-0">
                          RESPUESTA
                        </span>
                        <p className="text-base sm:text-lg font-bold text-emerald-950 break-words">
                          {sq.expectedAnswerEs}
                        </p>
                      </div>

                      {showArmenian && sq.expectedAnswerHy && (
                        <div className="flex items-start gap-2 mt-1 text-sm sm:text-base text-blue-950 bg-blue-50/90 p-3 rounded-xl border border-blue-200 break-words font-medium">
                          <span className="font-black text-xs text-blue-800 uppercase shrink-0">Հայերեն՝</span>
                          <span className="break-words leading-relaxed">{sq.expectedAnswerHy}</span>
                        </div>
                      )}

                      {sq.explanationEs && (
                        <p className="text-xs sm:text-sm text-stone-600 mt-1 italic pl-1 break-words">
                          💡 {sq.explanationEs}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Full block summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 max-w-full overflow-hidden break-words">
                <div className="bg-stone-900 text-stone-100 p-5 rounded-2xl text-sm sm:text-base font-mono whitespace-pre-wrap leading-relaxed shadow-xs max-w-full overflow-hidden break-words">
                  <div className="text-xs uppercase font-sans tracking-wider text-amber-400 font-bold mb-2 flex items-center justify-between">
                    <span>🇪🇸 Resumen en Español</span>
                    <span className="text-xs text-stone-400">Texto continuo</span>
                  </div>
                  <div className="break-words text-amber-200">
                    {currentEx.fullAnswerEs}
                  </div>
                </div>

                {showArmenian && (
                  <div className="bg-blue-950 text-blue-100 p-5 rounded-2xl text-sm sm:text-base whitespace-pre-wrap leading-relaxed shadow-xs max-w-full overflow-hidden break-words">
                    <div className="text-xs uppercase tracking-wider text-blue-300 font-bold mb-2 flex items-center justify-between">
                      <span>🇦🇲 Հայերեն ամփոփում</span>
                      <span className="text-xs text-blue-300/70">Լրիվ պատասխան</span>
                    </div>
                    <div className="break-words text-blue-100 font-sans">
                      {currentEx.fullAnswerHy}
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Super Test View */
            <div className="space-y-4 max-w-full overflow-hidden break-words">
              <div className="flex items-center justify-between bg-amber-50 p-4 rounded-2xl border border-amber-300 flex-wrap gap-2">
                <div>
                  <span className="text-xs font-black text-amber-900 uppercase">⚡ Súper Test 1º ESO</span>
                  <h4 className="font-extrabold text-stone-900 text-base sm:text-lg">
                    Պատասխաններ բոլոր հարցերին ({filteredSuperQuestions.length})
                  </h4>
                </div>
                <span className="text-xs text-stone-600 font-medium">
                  Սեղմիր բարձրախոսի վրա իսպաներեն արտասանությունը լսելու համար
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredSuperQuestions.map((q) => (
                  <div
                    key={q.id}
                    className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200 hover:border-amber-300 transition-colors space-y-3 max-w-full overflow-hidden break-words"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-bold text-stone-500 bg-white px-2 py-0.5 rounded border border-stone-200">
                        {q.categoryTitleEs} #{q.number}
                      </span>
                      <button
                        onClick={() => speakSpanish(`${q.questionEs}. ${q.answerEs}`)}
                        className="p-1 rounded-lg text-stone-500 hover:text-amber-800"
                      >
                        <Volume2 className="w-4 h-4 text-amber-700" />
                      </button>
                    </div>

                    <div className="space-y-1">
                      <p className="font-extrabold text-stone-900 text-sm sm:text-base break-words">
                        {q.questionEs}
                      </p>
                      {showArmenian && (
                        <p className="text-xs sm:text-sm text-stone-600 font-medium break-words">
                          {q.questionHy}
                        </p>
                      )}
                    </div>

                    <div className="pt-2 border-t border-stone-200/80 space-y-1.5">
                      <div className="p-3 bg-white rounded-xl border border-emerald-300 text-emerald-950 font-bold text-sm sm:text-base break-words">
                        ✅ {q.answerEs}
                      </div>
                      {showArmenian && (
                        <div className="p-2.5 bg-blue-50 rounded-xl border border-blue-200 text-blue-950 font-medium text-xs sm:text-sm break-words">
                          🇦🇲 {q.answerHy}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3.5 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
          <span className="text-xs font-medium text-stone-600">
            {modalMode === 'exercises' ? `Ejercicio ${activeTab + 1} de ${EXERCISES_DATA.length}` : `Mostrando ${filteredSuperQuestions.length} respuestas`}
          </span>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-stone-900 text-white text-xs sm:text-sm font-bold hover:bg-stone-800 cursor-pointer"
          >
            Cerrar (Փակել)
          </button>
        </div>
      </div>
    </div>
  );
};
