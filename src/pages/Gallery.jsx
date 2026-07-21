import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight, Image as ImageIcon, Video as VideoIcon, Calendar, Clock } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    type: 'photo',
    title: 'Grand Concert Recital',
    category: 'Student Recitals',
    src: '/hands-on-piano.png',
    desc: 'Senior student performing Chopin Etudes on our Steinway Grand Piano during the Annual Concert.',
    date: 'Dec 2025'
  },
  {
    id: 2,
    type: 'photo',
    title: 'Trinity Grade Prep',
    category: 'Literature & Scores',
    src: '/sheet-music.png',
    desc: 'Analysis of Bach’s Well-Tempered Clavier classical sheets during a theory workshop.',
    date: 'Jan 2026'
  },
  {
    id: 3,
    type: 'photo',
    title: '1-on-1 Virtual Session',
    category: 'Classroom Life',
    src: '/child-learning.png',
    desc: 'A young learner mastering finger articulation and wrist postures in a live online classroom.',
    date: 'Feb 2026'
  },
  {
    id: 4,
    type: 'photo',
    title: 'Early Beginners Recital',
    category: 'Student Recitals',
    src: '/chick-piano.png',
    desc: 'Junior piano recital showcase featuring introductory scales and short classic melodies.',
    date: 'Mar 2026'
  },
  {
    id: 5,
    type: 'photo',
    title: 'Creative Composition Workshop',
    category: 'Classroom Life',
    src: '/bunny-headphones.png',
    desc: 'Students experimenting with thematic motifs, melodic variations, and digital orchestration.',
    date: 'May 2026'
  },
  {
    id: 6,
    type: 'video',
    title: 'Chopin - Nocturne in E-Flat Major',
    category: 'Performances',
    videoUrl: 'https://www.youtube.com/embed/YGRO05WcNDk',
    thumbnail: 'https://img.youtube.com/vi/YGRO05WcNDk/0.jpg',
    desc: 'A demonstration performance of Chopin Nocturne Op. 9 No. 2, showcasing expressive dynamics.',
    duration: '4:30',
    date: 'Jun 2026'
  },
  {
    id: 7,
    type: 'video',
    title: 'Beethoven - Moonlight Sonata',
    category: 'Performances',
    videoUrl: 'https://www.youtube.com/embed/4Tr0otuiQuU',
    thumbnail: 'https://img.youtube.com/vi/4Tr0otuiQuU/0.jpg',
    desc: 'Performance of the somber, lyrical Adagio Sostenuto movement of Moonlight Sonata Op. 27 No. 2.',
    duration: '6:12',
    date: 'Jul 2026'
  },
  {
    id: 8,
    type: 'video',
    title: 'Mozart - Rondo Alla Turca',
    category: 'Performances',
    videoUrl: 'https://www.youtube.com/embed/mDuOyzG9z2E',
    thumbnail: 'https://img.youtube.com/vi/mDuOyzG9z2E/0.jpg',
    desc: 'A lively rendition of Turkish March, highlighting finger agility and classical articulation.',
    duration: '3:45',
    date: 'Aug 2026'
  },
  {
    id: 9,
    type: 'video',
    title: 'Debussy - Clair de Lune',
    category: 'Performances',
    videoUrl: 'https://www.youtube.com/embed/WNcsUNKlAKw',
    thumbnail: 'https://img.youtube.com/vi/WNcsUNKlAKw/0.jpg',
    desc: 'An evocative impressionist interpretation of Clair de Lune, focusing on touch sensitivity and pedaling.',
    duration: '5:24',
    date: 'Sep 2026'
  }
];

const photosOnly = galleryItems.filter(item => item.type === 'photo');

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [activePhoto, setActivePhoto] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  // Filter logic
  const filteredItems = useMemo(() => {
    return galleryItems.filter(item => filter === 'all' || item.type === filter);
  }, [filter]);

  // Index of currently active photo in lightbox list
  const currentPhotoIndex = useMemo(() => {
    if (!activePhoto) return -1;
    return photosOnly.findIndex(p => p.id === activePhoto.id);
  }, [activePhoto]);

  // Lightbox Navigation
  const handlePrevPhoto = useCallback((e) => {
    if (e) e.stopPropagation();
    if (currentPhotoIndex === -1) return;
    const prevIdx = (currentPhotoIndex - 1 + photosOnly.length) % photosOnly.length;
    setActivePhoto(photosOnly[prevIdx]);
  }, [currentPhotoIndex]);

  const handleNextPhoto = useCallback((e) => {
    if (e) e.stopPropagation();
    if (currentPhotoIndex === -1) return;
    const nextIdx = (currentPhotoIndex + 1) % photosOnly.length;
    setActivePhoto(photosOnly[nextIdx]);
  }, [currentPhotoIndex]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!activePhoto) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActivePhoto(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrevPhoto();
      } else if (e.key === 'ArrowRight') {
        handleNextPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhoto, handlePrevPhoto, handleNextPhoto]);

  // Prevent scroll when modals are open
  useEffect(() => {
    if (activePhoto || activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activePhoto, activeVideo]);

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen">
      
      {/* 1. Page Header */}
      <section className="pt-20 pb-16 px-6 border-b border-neutral-200 text-center bg-white">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[11px] uppercase font-bold tracking-widest text-piano-slate block">Visual Showcase</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-piano-dark m-0 leading-tight">
            Conservatory Gallery
          </h1>
          <p className="text-base md:text-lg text-piano-dark/65 max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            Take a look inside our classroom moments, study materials, and listen to classical performances recorded by our faculty and students.
          </p>
        </div>
      </section>

      {/* 2. Interactive Navigation Filters */}
      <section className="py-8 px-6 bg-white border-b border-neutral-200 sticky top-[73px] z-40 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="flex space-x-1 bg-neutral-100 p-1 border border-neutral-200">
            {['all', 'photo', 'video'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`relative px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-200 focus:outline-none ${
                  filter === tab
                    ? 'bg-piano-dark text-white shadow-sm'
                    : 'text-piano-dark/60 hover:text-piano-dark hover:bg-neutral-200/50'
                }`}
              >
                {tab === 'all' && 'All Media'}
                {tab === 'photo' && 'Photos'}
                {tab === 'video' && 'Videos'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Media Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 bg-white border border-neutral-200">
              <p className="text-xs text-piano-dark/50 font-light">No media files found in this category.</p>
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => {
                      if (item.type === 'photo') {
                        setActivePhoto(item);
                      } else {
                        setActiveVideo(item);
                      }
                    }}
                    className="group bg-white p-3 border border-neutral-200 shadow-premium flex flex-col justify-between cursor-pointer hover:border-piano-slate/50 transition-all duration-300"
                  >
                    {/* Media Thumbnail Container */}
                    <div className="w-full aspect-[4/3] overflow-hidden border border-neutral-100 relative bg-neutral-900">
                      <img 
                        src={item.type === 'photo' ? item.src : item.thumbnail} 
                        alt={item.title} 
                        className={`w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105 ${
                          item.type === 'photo' 
                            ? 'grayscale group-hover:grayscale-0' 
                            : 'opacity-85 group-hover:opacity-100'
                        }`}
                        loading="lazy"
                      />

                      {/* Icon Indicator Badge */}
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm p-1.5 shadow-sm text-piano-dark">
                        {item.type === 'photo' ? (
                          <ImageIcon className="w-3.5 h-3.5 text-piano-slate" />
                        ) : (
                          <VideoIcon className="w-3.5 h-3.5 text-piano-gold" />
                        )}
                      </div>

                      {/* Photo/Video Overlays */}
                      {item.type === 'photo' ? (
                        <div className="absolute inset-0 bg-piano-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="bg-white/95 text-piano-dark text-[9px] uppercase tracking-widest font-semibold px-3 py-1.5 shadow-md">
                            View Photo
                          </span>
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors duration-300">
                          <div className="relative">
                            {/* Pulse waves */}
                            <div className="absolute inset-0 rounded-full bg-white/20 scale-125 animate-ping opacity-75"></div>
                            <div className="w-12 h-12 bg-white text-piano-dark rounded-full flex items-center justify-center shadow-lg group-hover:bg-piano-gold group-hover:text-white transition-all duration-300 transform group-hover:scale-110 relative z-10">
                              <Play className="w-5 h-5 fill-current ml-0.5" />
                            </div>
                          </div>
                          <span className="absolute bottom-3 right-3 bg-black/80 px-2 py-0.5 text-[9px] text-white font-mono tracking-wider">
                            {item.duration}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content Details */}
                    <div className="pt-4 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[9px] font-bold text-piano-slate uppercase tracking-widest">
                            {item.category}
                          </span>
                          <span className="text-[9px] text-piano-dark/40 uppercase font-sans font-semibold">
                            {item.date}
                          </span>
                        </div>
                        <h3 className="font-serif font-bold text-base text-piano-dark group-hover:text-piano-slate transition-colors mt-0.5">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-piano-dark/60 font-light mt-2 line-clamp-2 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                      
                      <div className="pt-3 mt-3 border-t border-neutral-100 flex items-center text-[9px] uppercase font-bold tracking-widest text-piano-slate group-hover:text-piano-dark transition-colors">
                        {item.type === 'photo' ? 'Open Gallery Image' : 'Play Video Performance'}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* 4. Photo Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 p-2.5 transition-colors focus:outline-none z-10"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left navigation */}
            <button
              onClick={handlePrevPhoto}
              className="absolute left-4 sm:left-8 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 p-3 transition-colors focus:outline-none"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Photo content container */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full flex flex-col items-center space-y-4"
            >
              <div className="w-full bg-neutral-900 border border-white/10 p-2">
                <img
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  className="w-full max-h-[70vh] object-contain mx-auto"
                />
              </div>
              <div className="w-full text-left space-y-1 px-2">
                <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-piano-accent">
                  <span>{activePhoto.category}</span>
                  <span>{activePhoto.date}</span>
                </div>
                <h2 className="text-xl font-serif text-white font-normal mt-1 m-0">
                  {activePhoto.title}
                </h2>
                <p className="text-xs text-white/60 font-sans font-light mt-1 max-w-2xl leading-relaxed">
                  {activePhoto.desc}
                </p>
              </div>
            </motion.div>

            {/* Right navigation */}
            <button
              onClick={handleNextPhoto}
              className="absolute right-4 sm:right-8 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 p-3 transition-colors focus:outline-none"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. Video Playback Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 p-2.5 transition-colors focus:outline-none z-10"
              aria-label="Close Video Player"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video content container */}
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl flex flex-col space-y-4"
            >
              <div className="w-full bg-black border border-white/10 overflow-hidden shadow-2xl relative aspect-video">
                <iframe
                  src={`${activeVideo.videoUrl}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                ></iframe>
              </div>
              <div className="w-full text-left space-y-1.5 px-1 text-white">
                <div className="flex items-center space-x-3 text-[10px] uppercase font-bold tracking-widest text-piano-accent">
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {activeVideo.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {activeVideo.duration} mins
                  </span>
                  <span>•</span>
                  <span>{activeVideo.category}</span>
                </div>
                <h2 className="text-xl font-serif text-white font-normal mt-1 m-0">
                  {activeVideo.title}
                </h2>
                <p className="text-xs text-white/60 font-sans font-light mt-1 max-w-2xl leading-relaxed">
                  {activeVideo.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
