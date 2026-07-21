import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const TRACKS = [
  {
    id: 'bach-prelude',
    title: 'Prelude in C Major',
    composer: 'J.S. Bach',
    student: 'Tara Sen',
    age: '9 Years Old',
    duration: '8 Months of Classes',
    notes: [
      261.63, 329.63, 392.00, 523.25, 659.25, 392.00, 523.25, 659.25,
      261.63, 329.63, 392.00, 523.25, 659.25, 392.00, 523.25, 659.25,
      261.63, 293.66, 440.00, 587.33, 698.46, 440.00, 587.33, 698.46,
      261.63, 293.66, 440.00, 587.33, 698.46, 440.00, 587.33, 698.46
    ],
    tempo: 180
  },
  {
    id: 'elise',
    title: 'Für Elise',
    composer: 'L. van Beethoven',
    student: 'Arjun Goel',
    age: '12 Years Old',
    duration: '1 Year of Classes',
    notes: [
      659.25, 622.25, 659.25, 622.25, 659.25, 493.88, 587.33, 523.25, 440.00, 0,
      261.63, 329.63, 440.00, 493.88, 0, 329.63, 415.30, 493.88, 523.25, 0
    ],
    tempo: 260
  },
  {
    id: 'minuet-g',
    title: 'Minuet in G Major',
    composer: 'J.S. Bach',
    student: 'Aditi Rao',
    age: '15 Years Old',
    duration: 'Trinity Grade 3 Prep',
    notes: [
      587.33, 392.00, 440.00, 493.88, 523.25, 587.33, 392.00, 392.00,
      659.25, 523.25, 587.33, 659.25, 739.99, 783.99, 392.00, 392.00
    ],
    tempo: 320
  }
];

export default function RecitalHall() {
  const [activeTrackIdx, setActiveTrackIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentNoteIdx, setCurrentNoteIdx] = useState(0);
  
  const audioCtxRef = useRef(null);
  const playIntervalRef = useRef(null);
  const activeTrack = TRACKS[activeTrackIdx];

  useEffect(() => {
    return () => {
      clearInterval(playIntervalRef.current);
    };
  }, [activeTrackIdx]);

  const playSynthesizerNote = (frequency) => {
    if (isMuted || frequency === 0) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(frequency, now);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(950, now);
      filter.frequency.exponentialRampToValueAtTime(300, now + 0.5);

      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.001, now);
      gainNode.gain.linearRampToValueAtTime(0.15, now + 0.015);
      gainNode.gain.exponentialRampToValueAtTime(0.04, now + 0.15);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

      osc.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.6);
    } catch (e) {
      console.warn("AudioContext failed:", e);
    }
  };

  const startPlayback = (track) => {
    clearInterval(playIntervalRef.current);
    setIsPlaying(true);

    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    let noteIdx = currentNoteIdx;
    
    playIntervalRef.current = setInterval(() => {
      if (noteIdx >= track.notes.length) {
        noteIdx = 0;
      }
      const freq = track.notes[noteIdx];
      playSynthesizerNote(freq);
      setCurrentNoteIdx(noteIdx);
      noteIdx++;
    }, track.tempo);
  };

  const togglePlay = () => {
    if (isPlaying) {
      clearInterval(playIntervalRef.current);
      setIsPlaying(false);
    } else {
      startPlayback(activeTrack);
    }
  };

  const selectTrack = (idx) => {
    clearInterval(playIntervalRef.current);
    setIsPlaying(false);
    setCurrentNoteIdx(0);
    setActiveTrackIdx(idx);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-none p-6 md:p-10 border border-neutral-200 shadow-premium grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      
      {/* Vinyl Record Visualizer (Left) - Inspired by Image 1 */}
      <div className="md:col-span-6 flex flex-col items-center justify-center space-y-6 md:border-r border-neutral-100 md:pr-10">
        
        {/* Record Plate */}
        <div className="relative flex items-center justify-center w-52 h-52 md:w-60 md:h-60 rounded-full bg-[#1A1A1A] border-8 border-neutral-200 shadow-md">
          {/* Groove tracks inside vinyl */}
          <div className="absolute w-44 h-44 rounded-full border border-white/5" />
          <div className="absolute w-36 h-36 rounded-full border border-white/5" />
          <div className="absolute w-28 h-28 rounded-full border border-white/5" />
          
          {/* Animated Vinyl Body */}
          <div 
            className={`w-full h-full rounded-full flex items-center justify-center transition-all ${
              isPlaying ? 'animate-spin-slow' : ''
            }`}
          >
            {/* Center Label */}
            <div className="w-16 h-16 rounded-full bg-piano-slateLight border border-piano-slate/20 flex flex-col items-center justify-center relative shadow-inner">
              <span className="text-[7px] uppercase font-bold tracking-wider text-piano-slate text-center select-none leading-none">
                Piano<br />Profs
              </span>
              <div className="absolute w-2.5 h-2.5 bg-white rounded-full border border-neutral-300" />
            </div>
          </div>

          {/* Floating note particles when playing */}
          {isPlaying && (
            <div className="absolute inset-0 pointer-events-none select-none z-30">
              <span className="absolute text-piano-gold text-lg animate-float-note-1 font-serif" style={{ left: '25%', bottom: '25%' }}>♪</span>
              <span className="absolute text-[#8AA2AD] text-base animate-float-note-2 font-serif" style={{ right: '25%', top: '25%' }}>♫</span>
              <span className="absolute text-piano-gold text-sm animate-float-note-3 font-serif" style={{ left: '50%', top: '20%' }}>♪</span>
            </div>
          )}
          
          {/* Floating visual indicator for needle */}
          <div 
            className={`absolute top-2 right-12 w-1.5 h-16 bg-neutral-400 origin-top transition-transform duration-500 rounded-sm z-30 ${
              isPlaying ? 'rotate-[26deg]' : 'rotate-6'
            }`} 
          />
        </div>

        {/* Console info & status */}
        <div className="text-center space-y-1">
          <h4 className="font-serif font-bold text-base text-piano-dark">{activeTrack.title}</h4>
          <p className="text-[10px] uppercase font-bold tracking-widest text-piano-slate">{activeTrack.composer}</p>
        </div>

        {/* Mini Controls */}
        <div className="flex items-center space-x-6 pt-2">
          {/* Mute button */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 border border-neutral-200 text-piano-dark hover:border-piano-dark transition-colors"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-piano-dark/30" />
            ) : (
              <Volume2 className="w-4 h-4 text-piano-slate" />
            )}
          </button>

          {/* Main Play/Pause */}
          <button
            onClick={togglePlay}
            className="w-12 h-12 bg-piano-dark hover:bg-piano-slate text-white flex items-center justify-center transition-all"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-white text-white" />
            ) : (
              <Play className="w-4 h-4 fill-white text-white translate-x-0.5" />
            )}
          </button>

          {/* Reset progress */}
          <button
            onClick={() => {
              clearInterval(playIntervalRef.current);
              setIsPlaying(false);
              setCurrentNoteIdx(0);
            }}
            className="text-[9px] uppercase font-bold tracking-widest text-piano-dark/40 hover:text-piano-dark hover:underline transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Playlist and details (Right) - Inspired by Image 1 */}
      <div className="md:col-span-6 flex flex-col justify-between h-full space-y-8">
        
        <div className="space-y-3">
          <h3 className="font-serif font-bold text-lg text-piano-dark tracking-wide">Recital Playlist</h3>
          <div className="w-10 h-0.5 bg-piano-slate" />
        </div>

        {/* Tracks List */}
        <div className="space-y-2">
          {TRACKS.map((t, idx) => {
            const isSelected = activeTrackIdx === idx;
            return (
              <button
                key={t.id}
                onClick={() => selectTrack(idx)}
                className={`w-full p-4 border text-left transition-all duration-150 flex items-center justify-between ${
                  isSelected
                    ? 'bg-[#FAFAFA] border-piano-dark text-piano-dark shadow-sm'
                    : 'bg-white border-neutral-100 hover:bg-neutral-50 text-piano-dark/70'
                }`}
              >
                <div>
                  <h4 className="font-sans font-semibold text-xs md:text-sm">{t.title}</h4>
                  <p className="text-[10px] text-piano-dark/45 font-light tracking-wide mt-0.5">
                    Performed by: {t.student} ({t.age}) · Class study: {t.duration}
                  </p>
                </div>
                {isSelected && isPlaying && (
                  <div className="flex space-x-0.5 items-end h-3">
                    <div className="w-0.5 h-2.5 bg-piano-slate animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-0.5 h-1.5 bg-piano-slate animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-0.5 h-3 bg-piano-slate animate-bounce" style={{ animationDelay: '0.3s' }} />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Reassurance/Details */}
        <p className="text-[10px] text-piano-dark/45 font-light leading-relaxed font-sans mt-4">
          * Track performances are generated and synthesized live in-browser using standard harmonic frequencies. They demonstrate the progression of students enrolled at Piano Profs.
        </p>

      </div>
    </div>
  );
}
