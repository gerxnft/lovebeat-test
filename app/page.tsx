"use client";

import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";

const screenshots = [1, 2, 3, 4, 5];

function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(55);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume / 100;
  }, [volume]);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      await audio.play();
      setPlaying(true);
    }
  };

  return (
    <aside
      className="fixed right-3 bottom-3 z-50 flex h-[74px] w-[calc(100%-24px)] max-w-[420px] items-center gap-2.5 border border-[#352553] border-b-[9px] border-b-[#19102d] bg-[#0a031b]/98 py-2.5 pr-3 pl-[82px] shadow-[0_22px_55px_#000a,inset_0_1px_#ffffff0a] sm:right-5 sm:bottom-5 sm:h-[82px] sm:gap-3.5 sm:py-3 sm:pr-5 sm:pl-[116px] lg:right-7 lg:bottom-7"
      aria-label="Now playing Love Ya! by Arie"
    >
      <audio ref={audioRef} src="/love-ya-lovebeat.mp3" loop preload="metadata" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
      <div className="pointer-events-none absolute bottom-[-9px] left-[-48px] z-10 h-[175px] w-[150px] overflow-hidden drop-shadow-[0_8px_8px_#0009] sm:bottom-[-10px] sm:left-[-55px] sm:h-[205px] sm:w-[190px]" aria-hidden="true">
        <img className="absolute bottom-[-5px] left-[-107px] w-[335px] max-w-none sm:left-[-120px] sm:w-[390px]" src="/images/render2.png" alt="" />
      </div>
      <button
        className="relative z-20 grid size-[42px] shrink-0 cursor-pointer place-items-center border-0 bg-linear-to-br from-[#8e3dff] to-[#6320ed] text-white shadow-[0_0_25px_#7b2cff28] transition hover:-translate-y-px hover:from-[#a35cff] hover:to-[#762cff] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#52e7ff] sm:size-12"
        onClick={toggle}
        aria-label={playing ? "Pause Love Ya" : "Play Love Ya"}
      >
        <span className={playing ? "h-[13px] w-[10px] border-x-[3px] border-white" : "ml-[3px] h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-white"} aria-hidden="true" />
      </button>
      <div className="relative z-20 flex min-w-[90px] flex-1 flex-col sm:min-w-[105px]">
        <span className="text-[7px] font-black tracking-[.2em] text-[#52e7ff]">NOW PLAYING</span>
        <strong className="my-[3px] text-[12px] leading-none sm:mt-1 sm:mb-[3px] sm:text-[13px]">Love Ya!</strong>
        <span className="truncate text-[8px] text-[#716881]">Arie · LoveBeat Song</span>
      </div>
      <div className="relative z-20 hidden h-4 items-center gap-0.5 sm:flex" aria-hidden="true">
        {[0, 150, 300, 75].map((delay) => <i key={delay} className={`h-2 w-0.5 bg-[#52e7ff] ${playing ? "animate-pulse" : ""}`} style={{ animationDelay: `${delay}ms` }} />)}
      </div>
      <div className="relative z-20 ml-auto hidden items-center gap-2 md:flex">
        <span className="h-0 w-0 border-y-[5px] border-r-[7px] border-y-transparent border-r-[#52e7ff]" aria-hidden="true" />
        <input className="h-4 w-14 cursor-pointer accent-[#7b2cff]" type="range" min="0" max="100" value={volume}
          onChange={(event) => setVolume(Number(event.target.value))} aria-label="Volume" />
      </div>
    </aside>
  );
}

export default function Home() {
  const [activeShot, setActiveShot] = useState(1);
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="LoveBeat Nexus home">
          <img src="/images/logo.png" alt="LoveBeat" />
        </a>
        <div className="nav-links">
          <a href="#game">THE GAME</a>
          <a href="#world">WORLD</a>
          <a href="#gallery">GALLERY</a>
        </div>
        <button className="nav-download" onClick={() => setShowComingSoon(true)}>DOWNLOAD <span>↘</span></button>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><i /> THE NEXT BEAT AWAITS</div>
          <h1>FEEL THE<br /><em>BEAT.</em></h1>
          <p>Where every beat connects us. Step into a high-energy world of rhythm, style, and endless competition.</p>
          <div className="hero-actions">
            <button className="download-button" onClick={() => setShowComingSoon(true)}><span>DOWNLOAD GAME</span><b>↘</b></button>
            <a className="watch-link" href="#gallery"><i>▶</i> WATCH TRAILER</a>
          </div>
          <div className="platforms"><span>AVAILABLE ON</span><b>⊞ WINDOWS</b><b>◆ PC CLIENT</b></div>
        </div>
        <div className="hero-art" aria-label="LoveBeat characters">
          <div className="portal">
            <img className="portal-logo" src="/images/logo.png" alt="LoveBeat Nexus" />
          </div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <img className="hero-characters" src="/images/render1.png" alt="Stylish LoveBeat dancers" />
          <div className="floating-card card-top"><span>STATUS</span><b>ALPHA TEST PHASE</b></div>
          <div className="floating-card card-bottom"><span>PLAYERS ONLINE</span><b>COMING SOON</b></div>
        </div>
        <a className="scroll-cue" href="#game"><span>SCROLL TO EXPLORE</span><i>↓</i></a>
      </section>

      <section className="marquee" aria-label="Game features">
        <div>STYLE YOUR BEAT <i>✦</i> COMPETE TOGETHER <i>✦</i> OWN THE DANCE FLOOR <i>✦</i> STYLE YOUR BEAT <i>✦</i></div>
      </section>

      <section className="intro shell" id="game">
        <div>
          <span className="section-number">01 / THE GAME</span>
          <h2>YOUR RHYTHM.<br /><em>YOUR IDENTITY.</em></h2>
        </div>
        <p>Master the music, customize your look, and find your crew. LoveBeat: Nexus is where skill meets self-expression—one perfect combo at a time.</p>
      </section>

      <section className="features shell" id="world">
        <article><span>01</span><b>MASTER THE BEAT</b><p>Tap, move, and chain flawless combos across an evolving music catalog.</p></article>
        <article><span>02</span><b>CREATE YOUR ICON</b><p>Build a look that is unmistakably yours with limitless style combinations.</p></article>
        <article><span>03</span><b>FIND YOUR CREW</b><p>Meet dancers worldwide, team up, and rise through the Nexus together.</p></article>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="gallery-copy shell">
          <span className="section-number">02 / INSIDE THE NEXUS</span>
          <h2>ENTER THE<br /><em>SPOTLIGHT.</em></h2>
          <div className="gallery-nav" aria-label="Screenshot selection">
            {screenshots.map((shot) => (
              <button key={shot} className={activeShot === shot ? "active" : ""} onClick={() => setActiveShot(shot)} aria-label={`View screenshot ${shot}`}>0{shot}</button>
            ))}
          </div>
        </div>
        <div className="gallery-stage">
          <img className="back-shot" src={`/images/game-preview/${activeShot === 5 ? 1 : activeShot + 1}.png`} alt="" />
          <img className="main-shot" src={`/images/game-preview/${activeShot}.png`} alt={`LoveBeat Nexus gameplay screenshot ${activeShot}`} />
          <div className="shot-label">IN-GAME FOOTAGE <span>● LIVE</span></div>
        </div>
      </section>

      <section className="download shell" id="download">
        <img src="/images/render3.png" alt="LoveBeat dancer" />
        <div>
          <span className="section-number">READY WHEN YOU ARE</span>
          <h2>YOUR NEXT<br />BEAT STARTS <em>NOW.</em></h2>
          <p>Launching soon. Infinite ways to play.</p>
          <button className="download-button light" onClick={() => setShowComingSoon(true)}><span>DOWNLOAD FOR WINDOWS</span><b>↓</b></button>
          <small>WINDOWS 10/11 · 8 GB STORAGE · INTERNET REQUIRED</small>
        </div>
      </section>

      <Footer />

      <MusicPlayer />
      {showComingSoon && (
        <div className="coming-soon-backdrop" role="presentation" onClick={() => setShowComingSoon(false)}>
          <div className="coming-soon-modal" role="dialog" aria-modal="true" aria-labelledby="coming-soon-title" onClick={(event) => event.stopPropagation()}>
            <h2 id="coming-soon-title">COMING<br /><em>SOON.</em></h2>
            <p>We’re putting the final touches on the beat. Stay tuned.</p>
            <button onClick={() => setShowComingSoon(false)}>GOT IT</button>
          </div>
        </div>
      )}
    </main>
  );
}
