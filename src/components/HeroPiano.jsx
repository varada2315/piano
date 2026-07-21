import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const ALL_WHITE_KEYS = [
  { name: 'C4', freq: 261.63, label: 'C', key: 'a' },
  { name: 'D4', freq: 293.66, label: 'D', key: 's' },
  { name: 'E4', freq: 329.63, label: 'E', key: 'd' },
  { name: 'F4', freq: 349.23, label: 'F', key: 'f' },
  { name: 'G4', freq: 392.00, label: 'G', key: 'g' },
  { name: 'A4', freq: 440.00, label: 'A', key: 'h' },
  { name: 'B4', freq: 493.88, label: 'B', key: 'j' },
  { name: 'C5', freq: 523.25, label: 'C', key: 'k' },
  { name: 'D5', freq: 587.33, label: 'D', key: 'l' },
  { name: 'E5', freq: 659.25, label: 'E', key: ';' },
  { name: 'F5', freq: 698.46, label: 'F', key: "'" },
  { name: 'G5', freq: 783.99, label: 'G', key: 'z' },
  { name: 'A5', freq: 880.00, label: 'A', key: 'x' },
  { name: 'B5', freq: 987.77, label: 'B', key: 'c' }
];

const ALL_BLACK_KEYS = [
  { name: 'C#4', freq: 277.18, left: 1, label: 'C#', key: 'w' },
  { name: 'D#4', freq: 311.13, left: 2, label: 'D#', key: 'e' },
  { name: 'F#4', freq: 369.99, left: 4, label: 'F#', key: 't' },
  { name: 'G#4', freq: 415.30, left: 5, label: 'G#', key: 'y' },
  { name: 'A#4', freq: 466.16, left: 6, label: 'A#', key: 'u' },
  { name: 'C#5', freq: 554.37, left: 8, label: 'C#', key: 'o' },
  { name: 'D#5', freq: 622.25, left: 9, label: 'D#', key: 'p' },
  { name: 'F#5', freq: 739.99, left: 11, label: 'F#', key: '[' },
  { name: 'G#5', freq: 830.61, left: 12, label: 'G#', key: ']' },
  { name: 'A#5', freq: 932.33, left: 13, label: 'A#', key: '`' }
];

// Ode to Joy Melody for simulation and lesson
const MELODY = [
  { name: 'E4', duration: 350, keyLabel: 'E' },
  { name: 'E4', duration: 350, keyLabel: 'E' },
  { name: 'F4', duration: 350, keyLabel: 'F' },
  { name: 'G4', duration: 350, keyLabel: 'G' },
  { name: 'G4', duration: 350, keyLabel: 'G' },
  { name: 'F4', duration: 350, keyLabel: 'F' },
  { name: 'E4', duration: 350, keyLabel: 'E' },
  { name: 'D4', duration: 350, keyLabel: 'D' },
  { name: 'C4', duration: 350, keyLabel: 'C' },
  { name: 'C4', duration: 350, keyLabel: 'C' },
  { name: 'D4', duration: 350, keyLabel: 'D' },
  { name: 'E4', duration: 350, keyLabel: 'E' },
  { name: 'E4', duration: 450, keyLabel: 'E' },
  { name: 'D4', duration: 150, keyLabel: 'D' },
  { name: 'D4', duration: 600, keyLabel: 'D' }
];

export default function HeroPiano({ setActivePage }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeKey, setActiveKey] = useState(null);
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  
  // Guided Lesson state
  const [isGuidedMode, setIsGuidedMode] = useState(false);
  const [guidedStep, setGuidedStep] = useState(0);
  const [guidedComplete, setGuidedComplete] = useState(false);
  
  const audioCtxRef = useRef(null);
  const demoTimeoutRef = useRef(null);
  const nextNoteIndexRef = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const whiteKeys = isMobile ? ALL_WHITE_KEYS.slice(0, 8) : ALL_WHITE_KEYS.slice(0, 10);
  const blackKeys = isMobile 
    ? ALL_BLACK_KEYS.filter(k => k.left < 8) 
    : ALL_BLACK_KEYS.filter(k => k.left < 10);

  const playTone = useCallback((frequency) => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      if (isMuted) return;

      const now = ctx.currentTime;
      
      const osc = ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(frequency, now);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1000, now);
      filter.frequency.exponentialRampToValueAtTime(320, now + 0.55);

      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.001, now);
      gainNode.gain.linearRampToValueAtTime(0.2, now + 0.015);
      gainNode.gain.exponentialRampToValueAtTime(0.06, now + 0.15);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

      osc.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.65);
    } catch (e) {
      console.warn("AudioContext failed:", e);
    }
  }, [isMuted]);

  const playCelebrationArpeggio = useCallback(() => {
    if (isMuted) return;
    const arpeggio = [
      { freq: 261.63, delay: 0 },
      { freq: 329.63, delay: 130 },
      { freq: 392.00, delay: 260 },
      { freq: 523.25, delay: 390 },
      { freq: 659.25, delay: 520 },
      { freq: 783.99, delay: 650 },
      { freq: 1046.50, delay: 780 }
    ];
    arpeggio.forEach((note) => {
      setTimeout(() => {
        playTone(note.freq);
      }, note.delay);
    });
  }, [isMuted, playTone]);

  const triggerNote = useCallback((note) => {
    setActiveKey(note.name);
    playTone(note.freq);
    setTimeout(() => {
      setActiveKey(current => current === note.name ? null : current);
    }, 250);

    // Guided Mode progression
    if (isGuidedMode && !guidedComplete) {
      const targetNote = MELODY[guidedStep];
      if (note.name === targetNote.name) {
        const nextStep = guidedStep + 1;
        if (nextStep >= MELODY.length) {
          setGuidedComplete(true);
          playCelebrationArpeggio();
        } else {
          setGuidedStep(nextStep);
        }
      }
    }
  }, [isGuidedMode, guidedStep, guidedComplete, playTone, playCelebrationArpeggio]);

  const playDemoMelody = useCallback(() => {
    if (isPlayingDemo) return;
    if (isGuidedMode) {
      setIsGuidedMode(false);
    }
    
    setIsPlayingDemo(true);
    nextNoteIndexRef.current = 0;
    
    const playNext = () => {
      const idx = nextNoteIndexRef.current;
      if (idx >= MELODY.length) {
        setIsPlayingDemo(false);
        return;
      }

      const noteInfo = MELODY[idx];
      const matchedNote = [...ALL_WHITE_KEYS, ...ALL_BLACK_KEYS].find(
        n => n.name === noteInfo.name
      );

      if (matchedNote) {
        const isRendered = [...whiteKeys, ...blackKeys].some(n => n.name === matchedNote.name);
        if (isRendered) {
          setActiveKey(matchedNote.name);
          playTone(matchedNote.freq);
        }
      }

      nextNoteIndexRef.current++;
      demoTimeoutRef.current = setTimeout(() => {
        setActiveKey(null);
        demoTimeoutRef.current = setTimeout(playNext, 60);
      }, noteInfo.duration - 60);
    };

    playNext();
  }, [isPlayingDemo, isGuidedMode, whiteKeys, blackKeys, playTone]);

  const startGuidedMode = () => {
    setIsGuidedMode(true);
    setGuidedStep(0);
    setGuidedComplete(false);
    setIsMuted(false); // Make sure sound is on for the lesson!
    if (isPlayingDemo) {
      setIsPlayingDemo(false);
      clearTimeout(demoTimeoutRef.current);
      setActiveKey(null);
    }
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  // Keyboard Event Listeners for computer keyboard playback
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        return;
      }
      
      const keyStr = e.key.toLowerCase();
      const matchedNote = [...whiteKeys, ...blackKeys].find(
        n => n.key === keyStr
      );
      
      if (matchedNote) {
        triggerNote(matchedNote);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [whiteKeys, blackKeys, triggerNote]);

  // Autoplay a quick hint to user on first load (only if not doing guided)
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      if (!isGuidedMode) {
        playDemoMelody();
      }
    }, 2500);

    const interval = setInterval(() => {
      if (!isPlayingDemo && !isGuidedMode) {
        playDemoMelody();
      }
    }, 26000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
      clearTimeout(demoTimeoutRef.current);
    };
  }, [isMuted, whiteKeys, isPlayingDemo, isGuidedMode, playDemoMelody]);

  const toggleMute = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    
    if (isMuted) {
      setIsMuted(false);
      setTimeout(() => {
        playTone(523.25);
      }, 50);
    } else {
      setIsMuted(true);
    }
  };

  const handleKeyPress = (e, note) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      triggerNote(note);
    }
  };

  // Find targeted key info for guide text
  const currentTargetNote = isGuidedMode && !guidedComplete ? MELODY[guidedStep] : null;
  const currentTargetKey = currentTargetNote 
    ? [...ALL_WHITE_KEYS, ...ALL_BLACK_KEYS].find(k => k.name === currentTargetNote.name)
    : null;

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Keyboard Controls Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl px-2 mb-4 gap-3">
        
        {/* Guided Lesson details / status */}
        <div className="flex items-center space-x-2">
          {isGuidedMode && !guidedComplete ? (
            <div className="flex flex-wrap items-center gap-2 bg-white/10 px-3.5 py-2 border border-white/10">
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 bg-piano-gold rounded-full animate-ping" />
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                  Lesson: Ode to Joy
                </span>
                <span className="text-[9px] text-piano-accent tracking-wider font-bold">
                  ({guidedStep + 1}/{MELODY.length})
                </span>
              </div>
              {currentTargetKey && (
                <span className="text-[9px] text-white/80 bg-white/10 px-2 py-0.5 font-sans">
                  Play "{currentTargetKey.label}" <span className="hidden sm:inline">(key: <kbd className="font-bold text-piano-gold uppercase">{currentTargetKey.key}</kbd>)</span>
                </span>
              )}
              <button 
                onClick={() => { setIsGuidedMode(false); setGuidedStep(0); }}
                className="text-[9px] text-white/50 hover:text-white underline font-bold uppercase tracking-wider"
              >
                Exit
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <button
                onClick={playDemoMelody}
                disabled={isPlayingDemo}
                className={`px-4 py-2 text-[10px] uppercase font-bold tracking-widest border transition-all duration-200 ${
                  isPlayingDemo 
                    ? 'bg-transparent text-white/40 border-white/10' 
                    : 'bg-white/10 hover:bg-white/20 text-white border-white/25'
                }`}
              >
                {isPlayingDemo ? "Playing Demo..." : "Auto Play Demo"}
              </button>

              <button
                onClick={startGuidedMode}
                className="px-4 py-2 text-[10px] uppercase font-bold tracking-widest bg-piano-gold text-piano-dark hover:bg-piano-gold/90 transition-all duration-200"
              >
                Learn to Play a Song
              </button>
            </div>
          )}
        </div>
        
        {/* Toggle Sound Mute */}
        <button
          onClick={toggleMute}
          className={`flex items-center space-x-2 px-3.5 py-2 border text-[10px] uppercase font-bold tracking-wider transition-all duration-300 ${
            isMuted 
              ? 'bg-transparent text-white/60 border-white/20 hover:border-white hover:text-white' 
              : 'bg-white/10 text-piano-accent border-white/25 hover:bg-white/20'
          }`}
          title={isMuted ? "Unmute piano sounds" : "Mute piano sounds"}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5" />
              <span>Sound Off (Click to Play)</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-piano-accent" />
              <span>Sound On</span>
            </>
          )}
        </button>
      </div>

      {/* Main Piano Container */}
      <div className="relative w-full max-w-4xl h-52 md:h-64 bg-[#111111] p-1 border border-white/10 shadow-premium overflow-hidden">
        
        {/* Guided Completion Overlay */}
        {guidedComplete && (
          <div className="absolute inset-0 bg-[#0A1624]/95 z-40 flex flex-col items-center justify-center p-6 text-center space-y-4">
            <span className="text-3xl animate-bounce">🎓</span>
            <h3 className="font-serif font-black text-2xl md:text-3xl text-piano-gold">
              Splendid! You played Ode to Joy!
            </h3>
            <p className="text-xs md:text-sm text-white/80 max-w-md font-sans font-light leading-relaxed">
              You played the melody perfectly. Imagine what you could accomplish with a live, professional concert pianist guiding you!
            </p>
            <div className="flex space-x-4 pt-2">
              <button 
                onClick={() => { setGuidedComplete(false); startGuidedMode(); }}
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-[10px] uppercase font-bold tracking-widest transition-all"
              >
                Play Again
              </button>
              <button 
                onClick={() => { setGuidedComplete(false); if (setActivePage) setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-5 py-2.5 bg-piano-gold text-piano-dark hover:bg-piano-gold/90 text-[10px] uppercase font-bold tracking-widest transition-all"
              >
                Book a Free Trial
              </button>
            </div>
            <button
              onClick={() => setGuidedComplete(false)}
              className="absolute top-2 right-4 text-white/40 hover:text-white text-xs uppercase font-bold tracking-widest"
            >
              Close
            </button>
          </div>
        )}

        <div className="relative w-full h-full flex overflow-hidden bg-[#111111]">
          
          {/* White Keys */}
          {whiteKeys.map((note) => {
            const isActive = activeKey === note.name;
            const isNextTarget = currentTargetNote && currentTargetNote.name === note.name;
            
            return (
              <button
                key={note.name}
                onClick={() => triggerNote(note)}
                onKeyDown={(e) => handleKeyPress(e, note)}
                aria-label={`Piano key ${note.label}`}
                className={`relative h-full flex-1 flex flex-col justify-end items-center pb-4 transition-all duration-100 outline-none select-none border-t-4 border-r border-neutral-200 ${
                  isActive
                    ? 'bg-neutral-100 shadow-[inset_0_10px_20px_rgba(0,0,0,0.06)] border-t-piano-slate'
                    : isNextTarget
                      ? 'bg-[#FFFDF4] border-t-piano-gold ring-2 ring-piano-gold/60 shadow-inner'
                      : 'bg-white hover:bg-neutral-50 active:bg-neutral-100 border-t-white'
                }`}
              >
                {/* Gold Highlight Dot for Next Note in Lesson */}
                {isNextTarget && (
                  <span className="absolute bottom-16 w-3 h-3 bg-piano-gold rounded-full animate-ping pointer-events-none" />
                )}
                {isNextTarget && (
                  <span className="absolute bottom-16 w-3 h-3 bg-piano-gold rounded-full pointer-events-none" />
                )}

                {/* Note and Key Labels for White Key */}
                <div className="flex flex-col items-center space-y-1 select-none pointer-events-none z-10">
                  <span className="text-[14px] md:text-[16px] font-serif font-bold text-piano-dark">
                    {note.label}
                  </span>
                  <span className="text-[8px] font-sans font-bold text-piano-dark/30 uppercase hidden sm:inline-block">
                    {note.key}
                  </span>
                </div>
              </button>
            );
          })}

          {/* Black Keys */}
          {blackKeys.map((note) => {
            const isActive = activeKey === note.name;
            const isNextTarget = currentTargetNote && currentTargetNote.name === note.name;
            const whiteKeyWidth = 100 / whiteKeys.length;
            const leftOffset = note.left * whiteKeyWidth;
            
            return (
              <button
                key={note.name}
                onClick={() => triggerNote(note)}
                onKeyDown={(e) => handleKeyPress(e, note)}
                aria-label={`Piano black key ${note.label}`}
                className={`absolute top-0 h-[60%] z-20 flex flex-col justify-end items-center pb-2.5 transition-all duration-100 outline-none select-none ${
                  isActive
                    ? 'bg-piano-slate border-b-2 border-piano-slateHover text-white'
                    : isNextTarget
                      ? 'bg-[#3A331E] border-b-2 border-piano-gold ring-2 ring-piano-gold/70 text-white'
                      : 'bg-[#1C1C1C] hover:bg-[#333] border-b-4 border-black text-white/90'
                }`}
                style={{
                  width: `${whiteKeyWidth * 0.58}%`,
                  left: `calc(${leftOffset}% - (${whiteKeyWidth * 0.58}% / 2))`,
                }}
              >
                {/* Gold Highlight Dot for Next Note in Lesson */}
                {isNextTarget && (
                  <span className="absolute bottom-10 w-2 h-2 bg-piano-gold rounded-full animate-ping pointer-events-none" />
                )}
                {isNextTarget && (
                  <span className="absolute bottom-10 w-2 h-2 bg-piano-gold rounded-full pointer-events-none" />
                )}

                {/* Note and Key Labels for Black Key */}
                <div className="flex flex-col items-center space-y-1.5 select-none pointer-events-none">
                  <span className="text-[9px] font-serif font-medium text-piano-gold leading-none">
                    {note.label}
                  </span>
                  <span className="text-[8px] font-sans font-bold text-white/40 uppercase leading-none hidden sm:inline-block">
                    {note.key}
                  </span>
                </div>
              </button>
            );
          })}

        </div>
      </div>
      
    </div>
  );
}
