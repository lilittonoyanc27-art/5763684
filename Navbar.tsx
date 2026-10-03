import React from 'react';
import { BookOpen, HelpCircle, Mic, FileText, Lightbulb, Search, CheckCircle2, Volume2, Zap } from 'lucide-react';
import { speakSpanish } from './speech';

export type ActiveTab = 'student' | 'supertest' | 'teacherQA' | 'teacherScript' | 'exercises' | 'mnemonics';
export type FontSizeScale = 'standard' | 'large' | 'xlarge';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenAnswerModal: () => void;
  fontSize: FontSizeScale;
  setFontSize: (size: FontSizeScale) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  onOpenAnswerModal,
  fontSize,
  setFontSize
}) => {
  const tabs = [
    {
      id: 'supertest' as ActiveTab,
      labelEs: '⚡ Супер тест (1º ESO)',
      labelHy: 'Սուպեր Թեստ',
      icon: Zap
    },
    {
      id: 'student' as ActiveTab,
      labelEs: '1. Respuestas Alumno',
      labelHy: 'Ուսանողի Պատասխան',
      icon: BookOpen
    },
    {
      id: 'teacherQA' as ActiveTab,
      labelEs: '2. Preguntas Profesor',
      labelHy: 'Ուսուցչի Հարցեր',
      icon: HelpCircle
    },
    {
      id: 'teacherScript' as ActiveTab,
      labelEs: '3. Script Profesor',
      labelHy: 'Միայն Հարցերը (Script)',
      icon: Mic
    },
    {
      id: 'exercises' as ActiveTab,
      labelEs: '4. Ejercicios (7)',
      labelHy: 'Վարժություններ',
      icon: FileText
    },
    {
      id: 'mnemonics' as ActiveTab,
      labelEs: '5. Trucos y Memoria',
      labelHy: 'Հիշելու Հնարքներ',
      icon: Lightbulb
    }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-2xs max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top brand bar */}
        <div className="flex items-center justify-between min-h-16 sm:min-h-18 py-2 gap-3 flex-wrap">
          {/* Logo / Title */}
          <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => setActiveTab('student')}>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-linear-to-tr from-amber-500 to-amber-400 text-stone-950 font-black flex items-center justify-center text-xl shadow-sm border border-amber-300">
              🇪🇸
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-black text-stone-900 text-base sm:text-lg lg:text-xl tracking-tight">
                  Examen Oral de Lengua Española
                </h1>
                <span className="text-[11px] font-black bg-amber-100 text-amber-950 px-2.5 py-0.5 rounded-full border border-amber-300 hidden sm:inline-block">
                  ES ↔ HY
                </span>
              </div>
              <p className="text-xs sm:text-sm text-blue-900 font-bold tracking-tight">
                Իսպաներեն Լեզվի Բանավոր Քննության Պատրաստություն · Հայերեն թարգմանությամբ
              </p>
            </div>
          </div>

          {/* Quick Actions (Font adjuster, Search, Voice, Answer Key Button) */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {/* Font Size Adjuster */}
            <div className="flex items-center rounded-xl bg-stone-100 p-1 border border-stone-200" title="Չափսը / Tamaño de letra">
              <button
                onClick={() => setFontSize('standard')}
                className={`px-2 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  fontSize === 'standard' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                  fontSize === 'large' ? 'bg-amber-500 text-stone-950 shadow-2xs' : 'text-stone-500 hover:text-stone-900'
                }`}
                title="Մեծ տառաչափ (Grande)"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-2 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                  fontSize === 'xlarge' ? 'bg-stone-900 text-white shadow-2xs' : 'text-stone-500 hover:text-stone-900'
                }`}
                title="Շատ մեծ տառաչափ (Muy grande)"
              >
                A++
              </button>
            </div>

            {/* Search Input */}
            <div className="relative hidden md:block w-48 lg:w-56">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Buscar / Փնտրել..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm rounded-xl bg-stone-100 border border-stone-200 text-stone-800 placeholder-stone-400 focus:outline-hidden focus:bg-white focus:border-amber-400 transition-all font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-stone-400 hover:text-stone-700"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Voice button */}
            <button
              onClick={() => speakSpanish('¡Hola! Mucho éxito en tu examen de lengua española.')}
              className="p-2 rounded-xl text-stone-600 hover:text-amber-800 hover:bg-amber-50 border border-stone-200 transition-colors hidden sm:flex items-center gap-1.5 text-xs font-bold"
              title="Probar audio en español"
            >
              <Volume2 className="w-4 h-4 text-amber-700" />
              <span className="text-xs hidden lg:inline">Ձայն</span>
            </button>

            {/* Dedicated RESPUESTAS / ОТВЕТЫ / ՊԱՏԱՍԽԱՆՆԵՐ Button */}
            <button
              onClick={onOpenAnswerModal}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs sm:text-sm shadow-xs hover:shadow-md flex items-center gap-2 border border-amber-600/30 transition-transform active:scale-95 cursor-pointer shrink-0"
            >
              <CheckCircle2 className="w-4 h-4 text-stone-950" />
              <span>Պատասխաններ</span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar tema, palabra o regla / Փնտրել..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm rounded-xl bg-stone-100 border border-stone-200 text-stone-800 placeholder-stone-400 focus:outline-hidden focus:bg-white focus:border-amber-400 transition-all font-medium"
            />
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <nav className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none text-xs sm:text-sm max-w-full">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2.5 rounded-xl whitespace-nowrap font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-xs font-black'
                    : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-stone-500'}`} />
                <span>{tab.labelEs}</span>
                <span className={`text-[11px] hidden sm:inline ${isActive ? 'text-stone-300' : 'text-stone-500'}`}>
                  ({tab.labelHy})
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
