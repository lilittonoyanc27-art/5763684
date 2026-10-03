import React, { useState } from 'react';
import { Volume2, ChevronDown, ChevronUp, Copy, Check } from 'lucide-react';
import { speakSpanish } from './speech';

interface BilingualCardProps {
  esText: string;
  hyText: string;
  titleEs?: string;
  titleHy?: string;
  exampleEs?: string;
  exampleHy?: string;
  tag?: string;
  tagColor?: string;
  forceShowHy?: boolean;
  className?: string;
  noteEs?: string;
  noteHy?: string;
}

export const BilingualCard: React.FC<BilingualCardProps> = ({
  esText,
  hyText,
  titleEs,
  titleHy,
  exampleEs,
  exampleHy,
  tag,
  tagColor = 'bg-amber-100 text-amber-800 border-amber-200',
  forceShowHy = false,
  className = '',
  noteEs,
  noteHy
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const showArmenian = forceShowHy || isOpen;

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    const textToRead = [titleEs, esText, exampleEs].filter(Boolean).join('. ');
    speakSpanish(textToRead);
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    const full = `${titleEs ? titleEs + '\n' : ''}${esText}\n\n🇦🇲\n${titleHy ? titleHy + '\n' : ''}${hyText}`;
    navigator.clipboard.writeText(full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`group relative rounded-2xl border transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md max-w-full overflow-hidden break-words ${
        showArmenian
          ? 'bg-amber-50/50 border-amber-300 ring-2 ring-amber-300/40'
          : 'bg-white border-stone-200 hover:border-amber-400'
      } p-5 sm:p-6 ${className}`}
    >
      {/* Top Header / Meta */}
      <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          {tag && (
            <span className={`text-xs sm:text-sm px-3 py-1 rounded-full font-bold border tracking-wide ${tagColor}`}>
              {tag}
            </span>
          )}
          <span className="text-xs sm:text-sm text-stone-600 flex items-center gap-1 font-semibold bg-stone-100 px-2.5 py-1 rounded-lg border border-stone-200">
            🇪🇸 Clic para traducir / Սեղմիր
          </span>
        </div>

        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            onClick={handleSpeak}
            title="Escuchar pronunciación en español"
            className="p-2 rounded-xl text-stone-600 hover:text-amber-800 hover:bg-amber-100 transition-colors"
          >
            <Volume2 className="w-5 h-5 text-amber-700" />
          </button>
          <button
            type="button"
            onClick={handleCopy}
            title="Copiar texto"
            className="p-2 rounded-xl text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
          >
            {copied ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
            title={showArmenian ? 'Ocultar armenio' : 'Mostrar armenio'}
          >
            {showArmenian ? <ChevronUp className="w-5 h-5 text-amber-700" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Spanish Text (Primary) */}
      <div className="space-y-2.5 max-w-full">
        {titleEs && (
          <h4 className="font-extrabold text-stone-900 text-lg sm:text-xl flex items-center gap-2.5 flex-wrap">
            <span className="text-amber-900 text-xs font-black bg-amber-200 px-2 py-0.5 rounded-md">ES</span>
            <span>{titleEs}</span>
          </h4>
        )}
        <p className="text-stone-900 text-base sm:text-lg lg:text-xl leading-relaxed font-semibold break-words">
          {esText}
        </p>

        {exampleEs && (
          <div className="mt-3 bg-stone-50 border border-stone-300 rounded-xl p-3.5 text-stone-800 font-mono break-words">
            <span className="text-xs uppercase font-bold text-stone-600 tracking-wider block font-sans mb-1">
              Ejemplo:
            </span>
            <span className="font-bold text-amber-950 text-base sm:text-lg block">{exampleEs}</span>
          </div>
        )}

        {noteEs && (
          <p className="text-sm sm:text-base text-amber-900 font-semibold pt-1 break-words">
            💡 {noteEs}
          </p>
        )}
      </div>

      {/* Armenian Text (Revealed on click or forceShow) */}
      {showArmenian ? (
        <div className="mt-4 pt-4 border-t-2 border-amber-200/90 animate-in fade-in slide-in-from-top-1 duration-200 max-w-full space-y-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-blue-800 text-xs font-black bg-blue-200 px-2 py-0.5 rounded-md">HY</span>
            <span className="text-sm font-bold text-blue-950">Հայերեն թարգմանություն և բացատրություն</span>
          </div>

          {titleHy && (
            <h5 className="font-bold text-stone-900 text-base sm:text-lg mb-1 break-words">
              {titleHy}
            </h5>
          )}

          <p className="text-stone-800 text-base sm:text-lg leading-relaxed font-medium break-words">
            {hyText}
          </p>

          {exampleHy && (
            <div className="mt-2.5 bg-blue-50/80 border border-blue-200 rounded-xl p-3.5 text-stone-800 break-words">
              <span className="text-xs uppercase font-bold text-blue-900 tracking-wider block mb-1">
                Օրինակ՝
              </span>
              <span className="font-bold text-blue-950 text-base sm:text-lg block">{exampleHy}</span>
            </div>
          )}

          {noteHy && (
            <p className="text-sm sm:text-base text-blue-900 font-semibold pt-1 break-words">
              💡 {noteHy}
            </p>
          )}
        </div>
      ) : (
        <div className="mt-3 pt-3 border-t border-dashed border-stone-300 flex items-center justify-between text-sm text-stone-600 group-hover:text-amber-800 font-medium">
          <span className="flex items-center gap-1.5">
            🇦🇲 Սեղմիր՝ հայերեն թարգմանությունը տեսնելու համար
          </span>
          <span className="text-xs sm:text-sm font-bold underline text-amber-700">Բացել ➔</span>
        </div>
      )}
    </div>
  );
};
