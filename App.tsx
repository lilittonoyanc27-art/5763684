import React, { useState } from 'react';
import { Navbar, ActiveTab, FontSizeScale } from './Navbar';
import { SuperTestTab } from './SuperTestTab';
import { StudentAnswersTab } from './StudentAnswersTab';
import { TeacherQATab } from './TeacherQATab';
import { TeacherScriptTab } from './TeacherScriptTab';
import { ExercisesTab } from './ExercisesTab';
import { MnemonicsTab } from './MnemonicsTab';
import { AnswerKeyModal } from './AnswerKeyModal';
import { CheckCircle2, Sparkles, BookOpen, Volume2, ArrowUp, Zap } from 'lucide-react';
import { speakSpanish } from './speech';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('supertest'); // Default to newly requested Super Test
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isAnswerModalOpen, setIsAnswerModalOpen] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<FontSizeScale>('large'); // default to comfortable large font

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-stone-100/80 text-stone-900 font-sans selection:bg-amber-200 selection:text-amber-950 flex flex-col font-scale-${fontSize} max-w-full overflow-x-hidden`}>
      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenAnswerModal={() => setIsAnswerModalOpen(true)}
        fontSize={fontSize}
        setFontSize={setFontSize}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 max-w-full overflow-hidden">
        {/* Quick Quick-Facts Pill Bar */}
        <div className="bg-white rounded-2xl border border-stone-300 p-4 shadow-2xs flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm max-w-full">
          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              onClick={() => setActiveTab('supertest')}
              className={`px-3 py-1 rounded-xl font-black flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'supertest'
                  ? 'bg-amber-500 text-stone-950 shadow-2xs ring-2 ring-amber-300'
                  : 'bg-stone-900 text-amber-300 hover:bg-stone-800'
              }`}
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>⚡ СУПЕР ТЕСТ (1º ESO)</span>
            </button>
            <span className="font-black text-stone-800 flex items-center gap-1.5 text-xs sm:text-sm">
              4 Temas:
            </span>
            <span className="bg-amber-100 text-amber-950 border border-amber-300 px-3 py-1 rounded-xl font-bold">
              1. Funciones (6)
            </span>
            <span className="bg-blue-100 text-blue-950 border border-blue-300 px-3 py-1 rounded-xl font-bold">
              2. Modalidades (6)
            </span>
            <span className="bg-purple-100 text-purple-950 border border-purple-300 px-3 py-1 rounded-xl font-bold">
              3. Comunicación (6)
            </span>
            <span className="bg-emerald-100 text-emerald-950 border border-emerald-300 px-3 py-1 rounded-xl font-bold">
              4. Categorías (7)
            </span>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-stone-700 font-bold text-xs sm:text-sm">
              👆 Սեղմիր իսպաներենի վրա ➔ Բացվում է հայերենը
            </span>
            <button
              onClick={() => setIsAnswerModalOpen(true)}
              className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs sm:text-sm flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
            >
              <CheckCircle2 className="w-4 h-4 text-stone-950" />
              <span>Պատասխաններ</span>
            </button>
          </div>
        </div>

        {/* Tab View */}
        {activeTab === 'supertest' && (
          <SuperTestTab
            searchQuery={searchQuery}
            onOpenAnswerModal={() => setIsAnswerModalOpen(true)}
          />
        )}
        {activeTab === 'student' && <StudentAnswersTab searchQuery={searchQuery} />}
        {activeTab === 'teacherQA' && <TeacherQATab searchQuery={searchQuery} />}
        {activeTab === 'teacherScript' && <TeacherScriptTab searchQuery={searchQuery} />}
        {activeTab === 'exercises' && <ExercisesTab onOpenAnswerModal={() => setIsAnswerModalOpen(true)} />}
        {activeTab === 'mnemonics' && <MnemonicsTab />}
      </main>

      {/* Floating Bottom Action Bar */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5">
        <button
          onClick={scrollToTop}
          title="Subir al inicio"
          className="w-11 h-11 rounded-2xl bg-white text-stone-800 border-2 border-stone-200 shadow-xl hover:bg-stone-50 flex items-center justify-center transition-transform active:scale-95 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        <button
          onClick={() => setIsAnswerModalOpen(true)}
          className="px-5 py-3 rounded-2xl bg-stone-900 hover:bg-stone-800 text-amber-300 font-black text-sm sm:text-base shadow-2xl flex items-center gap-2.5 border-2 border-amber-500/50 transition-transform active:scale-95 cursor-pointer"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span>Ответы / Պատասխաններ</span>
        </button>
      </div>

      {/* Answer Key Modal */}
      <AnswerKeyModal
        isOpen={isAnswerModalOpen}
        onClose={() => setIsAnswerModalOpen(false)}
      />

      {/* Footer */}
      <footer className="mt-auto border-t border-stone-200 bg-white py-6 text-xs sm:text-sm text-stone-600 max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-extrabold text-stone-800">Lengua Española · Իսպաներեն Բանավոր Քննություն</span>
            <span>—</span>
            <span>Español 🇪🇸 & Հայերեն 🇦🇲</span>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <span>Funciones · Modalidades · Comunicación · Categorías</span>
            <button
              onClick={() => setIsAnswerModalOpen(true)}
              className="text-amber-800 font-extrabold hover:underline"
            >
              Պատասխանների բանալի (Clave)
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
