import React, { useState, useRef, useEffect } from 'react';
import { playlist, galleryImages, musicNotes } from '../../data/life';
import { FadeIn } from '../ui/FadeIn';
import { Play, Pause, SkipBack, SkipForward, Volume2, ListMusic, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

export const LifeSection: React.FC = () => {
  // --- Audio Player State ---
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [showVolume, setShowVolume] = useState(false);

  const currentTrack = playlist[currentTrackIndex];

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

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = Number(e.target.value);
    setVolume(vol);
    if (audioRef.current) audioRef.current.volume = vol;
  };

  // --- Gallery State ---
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <FadeIn>
      <div className="flex items-center justify-between gap-4 mb-6">
        <h3 className="text-xl font-bold font-sans tracking-tight">生活切片</h3>
      </div>

      <div className="grid gap-5">
        {/* Row 1: Music Player & Notes */}
        <div className="grid lg:grid-cols-[minmax(400px,1.1fr)_minmax(260px,1fr)] gap-5 items-stretch">
          <div className="rounded-[24px] border border-border bg-gradient-to-br from-white/90 to-[#dce8f7]/50 p-5 lg:p-6 shadow-[0_16px_42px_rgba(40,68,102,0.08)]">
            <audio
              ref={audioRef}
              src={currentTrack.src}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => playTrack((currentTrackIndex + 1) % playlist.length)}
            />
            
            <div className="flex items-center gap-4 mb-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-gradient-to-br from-accent via-[#84a8d8] to-[#dce8f7] text-2xl text-white shadow-[0_12px_24px_rgba(47,111,179,0.22)]">
                ♪
              </div>
              <div className="flex-1">
                <div className="font-sans text-[1.14rem] font-medium text-foreground">{currentTrack.title}</div>
                <div className="text-[0.92rem] text-muted">{currentTrack.artist}</div>
                <a href="https://music.163.com/#/artist?id=36147804" target="_blank" rel="noreferrer" className="mt-2 inline-block rounded-full border border-black/5 bg-white/70 px-3 py-1 text-[0.85rem] text-accent-deep transition-colors hover:border-black/10">
                  网易云歌手主页
                </a>
              </div>
            </div>

            <div className="mb-4">
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 text-[0.85rem] text-muted">
                <span>{formatTime(progress)}</span>
                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  value={progress}
                  onChange={handleSeek}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-accent/20 accent-accent"
                />
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 relative">
              <button title="播放列表" onClick={() => setShowPlaylist(!showPlaylist)} className={cn("flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent-deep transition-transform hover:-translate-y-0.5", showPlaylist && "bg-accent/20")}>
                <ListMusic size={18} />
              </button>
              
              <div className="flex items-center gap-3">
                <button title="上一首" onClick={() => playTrack((currentTrackIndex - 1 + playlist.length) % playlist.length)} className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent-deep transition-transform hover:-translate-y-0.5">
                  <SkipBack size={18} fill="currentColor" />
                </button>
                <button title="播放/暂停" onClick={togglePlay} className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-[0_12px_22px_rgba(47,111,179,0.24)] transition-transform hover:-translate-y-0.5">
                  {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
                </button>
                <button title="下一首" onClick={() => playTrack((currentTrackIndex + 1) % playlist.length)} className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent-deep transition-transform hover:-translate-y-0.5">
                  <SkipForward size={18} fill="currentColor" />
                </button>
              </div>

              <div className="relative">
                <button title="音量调节" onClick={() => setShowVolume(!showVolume)} className={cn("flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent-deep transition-transform hover:-translate-y-0.5", showVolume && "bg-accent/20")}>
                  <Volume2 size={18} />
                </button>
                {showVolume && (
                  <div className="absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 flex h-[120px] w-10 items-center justify-center rounded-full border border-border bg-white/95 shadow-lg backdrop-blur-md z-20">
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.05}
                      value={volume}
                      onChange={handleVolumeChange}
                      className="h-1.5 w-24 -rotate-90 cursor-pointer appearance-none rounded-full bg-accent/20 accent-accent"
                    />
                  </div>
                )}
              </div>
            </div>

            {showPlaylist && (
              <div className="mt-5 grid gap-2">
                {playlist.map((track, idx) => (
                  <button
                    key={idx}
                    onClick={() => playTrack(idx)}
                    className={cn(
                      "flex items-center justify-between rounded-2xl border px-4 py-3 transition-colors",
                      currentTrackIndex === idx 
                        ? "border-accent/20 bg-[#dce8f7]/90 text-foreground" 
                        : "border-border bg-white/70 text-foreground/80 hover:bg-white"
                    )}
                  >
                    <span className="font-sans font-medium">{track.title}</span>
                    <span className="text-[0.85rem] text-muted">Track {(idx + 1).toString().padStart(2, '0')}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <aside className="rounded-[24px] border border-dashed border-border bg-white/60 p-6 text-muted h-full">
            <strong className="mb-4 block font-sans text-[1.05rem] text-foreground">关于音乐</strong>
            <div className="grid gap-3">
              <div className="rounded-[14px] border border-border bg-white/70 px-4 py-3">
                <span className="mb-1.5 block font-sans text-[0.88rem] text-accent-deep">我所擅长的</span>
                <span className="text-[0.95rem] leading-[1.7] text-foreground/80">{musicNotes.skills}</span>
              </div>
              <div className="rounded-[14px] border border-border bg-white/70 px-4 py-3">
                <span className="mb-1.5 block font-sans text-[0.88rem] text-accent-deep">喜欢的作曲家</span>
                <span className="text-[0.95rem] leading-[1.7] text-foreground/80">{musicNotes.composers}</span>
              </div>
              <div className="rounded-[14px] border border-border bg-white/70 px-4 py-3">
                <span className="mb-1.5 block font-sans text-[0.88rem] text-accent-deep">喜欢的歌手</span>
                <span className="text-[0.95rem] leading-[1.7] text-foreground/80">{musicNotes.singers}</span>
              </div>
            </div>
          </aside>
        </div>

        {/* Row 2: Photo Gallery & Notes */}
        <div className="grid lg:grid-cols-[minmax(400px,1.1fr)_minmax(260px,1fr)] gap-5 items-stretch mt-3">
          <div className="relative min-h-[480px] overflow-hidden rounded-[24px] border border-border bg-gradient-to-br from-white/90 to-[#e4edf8]/70 p-4 shadow-[0_18px_48px_rgba(40,68,102,0.1)]">
            <div className="relative h-full w-full overflow-hidden rounded-[18px] shadow-[0_20px_40px_rgba(24,36,51,0.16)] bg-black/5">
              {galleryImages.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out",
                    idx === currentImageIndex ? "scale-100 opacity-100 z-10" : "scale-[1.03] opacity-0 z-0"
                  )}
                />
              ))}

              <div className="absolute right-4 top-4 z-20 flex items-center gap-3 rounded-full bg-black/20 p-1.5 backdrop-blur-md">
                <button title="上一张" onClick={prevImage} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30">
                  <ChevronLeft size={16} />
                </button>
                <div className="flex items-center gap-1.5 px-1">
                  {galleryImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={cn(
                        "h-1.5 rounded-full transition-all",
                        idx === currentImageIndex ? "w-4 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                      )}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <button title="下一张" onClick={nextImage} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
          
          <aside className="rounded-[24px] border border-dashed border-border bg-white/60 p-6 text-muted">
            <strong className="mb-3 block font-sans text-[1.05rem] text-foreground">关于照片</strong>
            <div className="mt-4 text-[0.95rem] leading-[1.7]">
              这里记录了一些我珍贵的瞬间。<br/>但总的来说，我并不是一个爱拍照片的人。
            </div>
          </aside>
        </div>
      </div>
    </FadeIn>
  );
};
