// Web Speech API utility for Spanish pronunciation
export function speakSpanish(text: string): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return false;
  }

  // Cancel any ongoing utterance
  window.speechSynthesis.cancel();

  // Clean markdown or bracket artifacts
  const cleanText = text
    .replace(/[«»*_[\]()]/g, ' ')
    .replace(/—/g, '')
    .trim();

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'es-ES';
  utterance.rate = 0.95; // comfortable study pace

  // Try to find native Spanish voice if available
  const voices = window.speechSynthesis.getVoices();
  const esVoice = voices.find(v => v.lang.startsWith('es-') || v.lang === 'es');
  if (esVoice) {
    utterance.voice = esVoice;
  }

  window.speechSynthesis.speak(utterance);
  return true;
}
