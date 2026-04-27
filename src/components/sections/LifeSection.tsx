import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playlist, galleryImages, lifeLabels } from '../../data/life';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  ListMusic,
  ChevronLeft,
  ChevronRight,
  Music,
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { useLanguage } from '../../context/LanguageContext';
import { LazyImage } from '../ui/LazyImage';

const FrequencyVisualizer: React.FC<{ isPlaying: boolean }> = ({ isPlaying }) => {
  return (
    <div className="flex items-end gap-1 h-8 w-full max-w-[120px]">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="w-full bg-accent-purple/60 rounded-t-full"
          animate={isPlaying ? {
            height: [
              "20%", "60%", "40%", "90%", "30%", "70%", "50%", "20%"
            ]
          } : { height: "15%" }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export const LifeSection: React.FC = () => {
  const { t } = useLanguage();
  const ll = t(lifeLabels);

  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [volume, setVolume] = useState(0.8);

  const currentTrack = playlist[currentTrackIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const playTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [currentTrackIndex, isPlaying]);

  const handleTimeUpdate = () => {
    if (audioRef.current) setProgress(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  const formatTime = (time: number) => {
    if (!Number.isFinite(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    setProgress(time);
    if (audioRef.current) audioRef.current.currentTime = time;
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <section id="life" className="min-h-screen py-24 px-6 md:px-12 bg-[#FFF5F8] flex flex-col items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-pink-200/30 rounded-full blur-[60px] md:blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-purple-200/30 rounded-full blur-[50px] md:blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12 md:mb-20 text-center md:text-left"
        >
          <span className="text-accent-purple/60 font-semibold uppercase tracking-widest text-sm">{ll.tag}</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mt-4">{ll.title}</h2>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mt-4 md:mt-6">
            {ll.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="glass p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col h-full bg-white/50">
              <audio
                ref={audioRef}
                src={currentTrack.src}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => playTrack((currentTrackIndex + 1) % playlist.length)}
              />

              <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
                <div className="relative w-40 h-40 flex-shrink-0 rounded-3xl overflow-hidden shadow-2xl group bg-gradient-to-br from-accent-purple/20 to-blue-400/20 flex items-center justify-center">
                  <Music size={48} className="text-accent-purple/60" />
                  <motion.div
                    animate={isPlaying ? { rotate: 360 } : {}}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-4 border-dashed border-accent-purple/20 rounded-full m-4"
                  ></motion.div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold font-serif mb-2">{currentTrack.title}</h3>
                  <p className="text-muted text-lg mb-4">{currentTrack.artist}</p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <a href="https://music.163.com/#/artist?id=36147804" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-2xl bg-accent-purple/10 border border-accent-purple/20 text-xs font-semibold text-accent-purple hover:bg-accent-purple hover:text-white transition-all">
                      {ll.netease}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-auto space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted">
                    <span>{formatTime(progress)}</span>
                    <FrequencyVisualizer isPlaying={isPlaying} />
                    <span>{formatTime(duration)}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={duration || 100}
                    value={progress}
                    onChange={handleSeek}
                    className="w-full h-1 bg-black/5 rounded-full appearance-none cursor-pointer accent-accent-purple"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setShowPlaylist(!showPlaylist)}
                    className={cn("p-4 rounded-full transition-all", showPlaylist ? "bg-accent-purple text-white shadow-lg" : "bg-white/60 text-muted")}
                  >
                    <ListMusic size={20} />
                  </button>

                  <div className="flex items-center gap-6">
                    <button onClick={() => playTrack((currentTrackIndex - 1 + playlist.length) % playlist.length)} className="p-2 text-muted hover:text-accent-purple transition-colors">
                      <SkipBack size={24} fill="currentColor" />
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={togglePlay}
                      className="w-16 h-16 bg-accent-purple text-white rounded-full flex items-center justify-center shadow-xl shadow-accent-purple/30"
                    >
                      {isPlaying ? <Pause size={30} fill="currentColor" /> : <Play size={30} fill="currentColor" className="translate-x-1" />}
                    </motion.button>
                    <button onClick={() => playTrack((currentTrackIndex + 1) % playlist.length)} className="p-2 text-muted hover:text-accent-purple transition-colors">
                      <SkipForward size={24} fill="currentColor" />
                    </button>
                  </div>

                  <div className="flex items-center gap-3 group/volume">
                    <Volume2 size={18} className="text-muted group-hover/volume:text-accent-purple transition-colors" />
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.05}
                      value={volume}
                      onChange={(e) => setVolume(Number(e.target.value))}
                      className="w-20 h-1 bg-black/5 rounded-full appearance-none cursor-pointer accent-accent-purple"
                    />
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {showPlaylist && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-8"
                  >
                    <div className="grid gap-2 p-1">
                      {playlist.map((track, idx) => (
                        <button
                          key={idx}
                          onClick={() => playTrack(idx)}
                          className={cn(
                            "flex items-center justify-between p-4 rounded-2xl transition-all border",
                            currentTrackIndex === idx
                              ? "bg-accent-purple text-white border-accent-purple shadow-lg"
                              : "bg-white/40 text-foreground/70 border-white/40 hover:bg-white/60"
                          )}
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-xs font-mono opacity-60">{(idx + 1).toString().padStart(2, '0')}</span>
                            <span className="font-medium">{track.title}</span>
                          </div>
                          {currentTrackIndex === idx && <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-5 h-[400px] md:h-[500px] lg:h-auto"
          >
            <div className="relative h-full w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-2xl border border-white/40">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <LazyImage
                    src={galleryImages[currentImageIndex]}
                    alt={`Moment ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    wrapperClassName="w-full h-full"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

              <div className="absolute inset-y-0 left-6 flex items-center z-20">
                <button onClick={prevImage} className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-xl text-white hover:bg-white/40 transition-all">
                  <ChevronLeft size={24} />
                </button>
              </div>
              <div className="absolute inset-y-0 right-6 flex items-center z-20">
                <button onClick={nextImage} className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-xl text-white hover:bg-white/40 transition-all">
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="absolute bottom-10 right-10 flex gap-2 z-20">
                {galleryImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      idx === currentImageIndex ? "w-8 bg-white" : "w-1.5 bg-white/30 hover:bg-white/60"
                    )}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
