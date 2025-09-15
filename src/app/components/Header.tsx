export default function Header() {
  return (
    <header className="text-center py-12 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="w-32 h-32 mx-auto mb-8 border-4 border-yellow-400 rounded-full flex items-center justify-center bg-yellow-400/10 relative">
          <div className="text-6xl text-yellow-400 animate-rotate-slow">✧</div>
        </div>

        <h1 className="text-5xl md:text-6xl text-yellow-400 mb-4 text-shadow-lg tracking-wide font-serif">
          Divine Astro Sumit
        </h1>

        <p className="text-xl text-mystical-100 tracking-widest uppercase mb-10 font-light">
          Divine Guidance for a Brighter Tomorrow
        </p>

        <p className="text-lg max-w-3xl mx-auto leading-relaxed text-mystical-50 font-light">
          Transform uncertainty into clarity with ancient wisdom and modern
          accessibility. Our expert practitioners combine thousands of years of
          astrological knowledge to reveal your unique path forward and empower
          confident life decisions.
        </p>
      </div>
    </header>
  );
}
