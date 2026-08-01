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
    <aside className="player" aria-label="Music player">
      <audio ref={audioRef} src="/love-ya-lovebeat.mp3" loop preload="metadata" />
      <button className="play-button" onClick={toggle} aria-label={playing ? "Pause Love Ya" : "Play Love Ya"}>
        {playing ? "Ⅱ" : "▶"}
      </button>
      <div className="track-info">
        <span className="now-playing">NOW PLAYING</span>
        <strong>Love Ya!</strong>
        <span>Arie · LoveBeat Song</span>
      </div>
      <div className={`equalizer ${playing ? "is-playing" : ""}`} aria-hidden="true">
        <i /><i /><i /><i />
      </div>
      <input
        className="volume"
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(event) => setVolume(Number(event.target.value))}
        aria-label="Volume"
      />
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
        <img src="/images/render2.png" alt="LoveBeat dancer" />
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
