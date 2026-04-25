"use client";

import { useState, useMemo } from "react";

type Genre = { genre: string; count: number };

export type BattleProfile = {
  name: string;
  avatar: string;
  avgArtistPopularity: number;
  topGenres: Genre[];
  avgTrackPopularity: number;
  avgTrackYear: number;
  topArtists: string[];
  allArtists?: string[]; // For compatibility calculation
};

const REBEL_GENRES = [
  "rock", "metal", "punk", "alternative", "grunge", "hardcore",
  "industrial", "emo", "screamo", "metalcore", "gothic", "noise",
  "black metal", "death metal", "thrash", "prog", "stoner", "post-punk",
  "doom", "sludge", "psych",
];

const SOFT_GENRES = [
  "pop", "folk", "acoustic", "indie pop", "singer-songwriter",
  "ambient", "classical", "r&b", "soul", "easy listening",
  "chillout", "new age", "lo-fi", "bedroom pop", "dream pop",
  "soft rock", "balada", "ballad", "jazz",
];

function calcNiche(p: BattleProfile) {
  const popularity = p.avgArtistPopularity ?? 50;
  return Math.max(0, Math.min(100, 100 - popularity));
}

function calcRebel(p: BattleProfile) {
  const total = p.topGenres.reduce((s, g) => s + g.count, 0);
  if (!total) return 0;
  const n = p.topGenres
    .filter((g) => {
      const genreLower = g.genre.toLowerCase();
      return REBEL_GENRES.some((r) => {
        const rLower = r.toLowerCase();
        // Match if genre contains the rebel keyword OR if rebel keyword contains the genre
        return genreLower.includes(rLower) || rLower.includes(genreLower);
      });
    })
    .reduce((s, g) => s + g.count, 0);
  return Math.round((n / total) * 100);
}

function calcSoft(p: BattleProfile) {
  const total = p.topGenres.reduce((s, g) => s + g.count, 0);
  if (!total) return 0;
  const n = p.topGenres
    .filter((g) => {
      const genreLower = g.genre.toLowerCase();
      return SOFT_GENRES.some((r) => {
        const rLower = r.toLowerCase();
        // Match if genre contains the soft keyword OR if soft keyword contains the genre
        return genreLower.includes(rLower) || rLower.includes(genreLower);
      });
    })
    .reduce((s, g) => s + g.count, 0);
  return Math.round((n / total) * 100);
}

function calcOldSchool(p: BattleProfile) {
  const year = p.avgTrackYear ?? 2020;
  const yearsFromNow = 2026 - year;
  return Math.max(0, Math.min(100, Math.round((yearsFromNow / 66) * 100)));
}

function calcMainstream(p: BattleProfile) {
  const popularity = p.avgTrackPopularity ?? 50;
  return Math.max(0, Math.min(100, popularity));
}

function calcCompatibility(p1: BattleProfile, p2: BattleProfile): number {
  if (!p1.allArtists || !p2.allArtists) return 0;
  
  const set1 = new Set(p1.allArtists);
  const set2 = new Set(p2.allArtists);
  
  const intersection = new Set([...set1].filter(x => set2.has(x)));
  const union = new Set([...set1, ...set2]);
  
  if (union.size === 0) return 0;
  return Math.round((intersection.size / union.size) * 100);
}

function calcCommonArtists(p1: BattleProfile, p2: BattleProfile): number {
  if (!p1.allArtists || !p2.allArtists) return 0;
  
  const set1 = new Set(p1.allArtists);
  const set2 = new Set(p2.allArtists);
  
  const intersection = new Set([...set1].filter(x => set2.has(x)));
  return intersection.size;
}

function calcDiscoveryRate(p: BattleProfile): number {
  // Calculate based on how recent the average track year is
  // Higher avg year (closer to current year) = higher discovery rate
  const currentYear = 2026;
  const yearsFromNow = currentYear - p.avgTrackYear;
  
  // If tracks are from current year, discovery rate is 100%
  // If tracks are 6+ years old, discovery rate is 0%
  if (yearsFromNow <= 0) return 100;
  if (yearsFromNow >= 6) return 0;
  
  return Math.round(((6 - yearsFromNow) / 6) * 100);
}

function encodeProfile(p: BattleProfile): string {
  return btoa(encodeURIComponent(JSON.stringify(p)));
}

function decodeProfile(code: string): BattleProfile {
  return JSON.parse(decodeURIComponent(atob(code.trim())));
}

function isValidProfile(obj: unknown): obj is BattleProfile {
  if (!obj || typeof obj !== "object") return false;
  const o = obj as Record<string, unknown>;
  return (
    typeof o.name === "string" &&
    typeof o.avgArtistPopularity === "number" &&
    typeof o.avgTrackPopularity === "number" &&
    typeof o.avgTrackYear === "number" &&
    Array.isArray(o.topGenres) &&
    Array.isArray(o.topArtists)
  );
}

const CATEGORIES = [
  {
    id: "niche",
    name: "Underground",
    label: "INDIE",
    emoji: "🎭",
    desc: "Whose artists fly furthest under the radar?",
    calc: calcNiche,
    winText: "is more underground",
    color: "bg-violet-500",
  },
  {
    id: "rebel",
    name: "Rebel Soul",
    label: "REBEL",
    emoji: "🤘",
    desc: "Whose playlist bleeds rock, metal & punk?",
    calc: calcRebel,
    winText: "is the bigger rebel",
    color: "bg-red-500",
  },
  {
    id: "soft",
    name: "Soft Heart",
    label: "SOFT",
    emoji: "💕",
    desc: "Who's secretly a softie? (pop / folk / acoustic)",
    calc: calcSoft,
    winText: "has the softer heart",
    color: "bg-pink-400",
  },
  {
    id: "oldschool",
    name: "Time Traveler",
    label: "OLD",
    emoji: "📻",
    desc: "Who lives furthest in the past?",
    calc: calcOldSchool,
    winText: "is more old school",
    color: "bg-amber-500",
  },
  {
    id: "mainstream",
    name: "Chart Chaser",
    label: "MAIN",
    emoji: "🌊",
    desc: "Who's riding the algorithm wave the hardest?",
    calc: calcMainstream,
    winText: "is more mainstream",
    color: "bg-sky-500",
  },
  {
    id: "discovery",
    name: "Trendsetter",
    label: "NEW",
    emoji: "🔥",
    desc: "Who discovers more new music?",
    calc: calcDiscoveryRate,
    winText: "discovers more new music",
    color: "bg-orange-500",
  },
];

export default function BattleClient({ profile }: { profile: BattleProfile }) {
  const [opponentCode, setOpponentCode] = useState("");
  const [opponent, setOpponent] = useState<BattleProfile | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [guessPhase, setGuessPhase] = useState(false);
  const [guesses, setGuesses] = useState<Record<string, "me" | "opponent">>({});
  const [showResults, setShowResults] = useState(false);
  const [revealIndex, setRevealIndex] = useState(0);
  const [sharing, setSharing] = useState(false);

  const myCode = useMemo(() => encodeProfile(profile), [profile]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(myCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const handleBattle = () => {
    if (!opponentCode.trim()) return;
    try {
      const decoded = decodeProfile(opponentCode);
      if (!isValidProfile(decoded)) throw new Error("invalid");
      setOpponent(decoded);
      setError("");
      setGuessPhase(true); // Start guess phase instead of showing results directly
    } catch {
      setError("Invalid code. Make sure you're pasting your friend's exact battle code.");
    }
  };

  const handleGuess = (categoryId: string, guess: "me" | "opponent") => {
    setGuesses(prev => ({ ...prev, [categoryId]: guess }));
  };

  const handleShowResults = () => {
    setShowResults(true);
    setRevealIndex(0);
    // Animate reveal of results
    const interval = setInterval(() => {
      setRevealIndex(prev => {
        if (prev >= CATEGORIES.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 800); // Reveal each category every 800ms
  };

  const handleShare = async () => {
    setSharing(true);
    try {
      // Create a canvas to draw the battle results
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = 1200;
      canvas.height = 1600;

      // Background
      ctx.fillStyle = '#18181b';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Title
      ctx.fillStyle = '#1DB954';
      ctx.font = 'bold 60px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('ZOUNK BATTLE', canvas.width / 2, 100);

      // VS
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 120px Arial';
      ctx.fillText('VS', canvas.width / 2, 250);

      // Player names
      ctx.font = 'bold 48px Arial';
      ctx.fillText(profile.name, canvas.width / 2 - 250, 350);
      ctx.fillText(opponent!.name, canvas.width / 2 + 250, 350);

      // Score
      ctx.fillStyle = '#1DB954';
      ctx.font = 'bold 80px Arial';
      ctx.fillText(`${battle!.myWins} - ${battle!.opWins}`, canvas.width / 2, 500);

      // Compatibility
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 40px Arial';
      ctx.fillText(`Taste Compatibility: ${battle!.compatibility}%`, canvas.width / 2, 600);
      ctx.fillText(`Common Artists: ${battle!.commonArtists}`, canvas.width / 2, 660);

      // Categories
      let y = 800;
      battle!.categories.forEach((cat, index) => {
        ctx.fillStyle = '#27272a';
        ctx.fillRect(100, y - 40, 1000, 120);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 36px Arial';
        ctx.fillText(`${cat.emoji} ${cat.name}`, canvas.width / 2, y);

        ctx.fillStyle = cat.myWins ? '#1DB954' : '#ffffff';
        ctx.fillText(`${profile.name.split(' ')[0]}: ${cat.myScore}`, canvas.width / 2 - 300, y + 50);

        ctx.fillStyle = !cat.myWins && !cat.tie ? '#1DB954' : '#ffffff';
        ctx.fillText(`${opponent!.name.split(' ')[0]}: ${cat.opponentScore}`, canvas.width / 2 + 300, y + 50);

        y += 160;
      });

      // Footer
      ctx.fillStyle = '#52525b';
      ctx.font = '30px Arial';
      ctx.fillText('Share your taste at zounk.app', canvas.width / 2, canvas.height - 50);

      // Convert to blob and download
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `zounk-battle-${profile.name}-vs-${opponent!.name}.png`;
        a.click();
        URL.revokeObjectURL(url);
        setSharing(false);
      });
    } catch (error) {
      console.error('Error sharing:', error);
      setSharing(false);
    }
  };

  const battle = useMemo(() => {
    if (!opponent) return null;
    const categories = CATEGORIES.map((cat) => {
      const myScore = cat.calc(profile);
      const opponentScore = cat.calc(opponent);
      const myWins = myScore > opponentScore;
      const tie = myScore === opponentScore;
      return { ...cat, myScore, opponentScore, myWins, tie };
    });
    const myWins = categories.filter((c) => c.myWins).length;
    const opWins = categories.filter((c) => !c.myWins && !c.tie).length;
    const compatibility = calcCompatibility(profile, opponent);
    const commonArtists = calcCommonArtists(profile, opponent);
    return { categories, myWins, opWins, compatibility, commonArtists };
  }, [opponent, profile]);

  return (
    <main className="w-full px-6 md:px-16 lg:px-24 2xl:px-40 py-12 mx-auto">

      {/* HEADER */}
      <header className="relative mb-20 pt-10">
        <div className="absolute top-0 left-0 text-[15vw] font-black text-zinc-200 dark:text-zinc-900 italic tracking-tighter opacity-40 select-none leading-none -z-10">
          BATTLES.
        </div>
        <div className="relative z-10">
          <p className="text-[#1DB954] font-mono text-[10px] 2xl:text-xs font-bold uppercase tracking-[0.5em] mb-4">
            Musical Showdown
          </p>
          <h1 className="text-7xl md:text-9xl 2xl:text-[11rem] font-black tracking-tighter italic uppercase leading-none">
            Battles.
          </h1>
          <p className="mt-6 text-zinc-500 dark:text-zinc-400 text-base font-medium max-w-lg">
            Your taste isn't just a playlist — it's a personality. Generate your battle card and find out who's more underground, who's the rebel, and who's secretly a softie.
          </p>
        </div>
      </header>

      {!battle ? (
        /* ── PRE-BATTLE ── */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">

          {/* YOUR PROFILE CARD */}
          <div className="bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-900 p-10 2xl:p-14 rounded-[3rem] relative overflow-hidden shadow-2xl">
            <div className="absolute -bottom-8 -right-8 text-[10rem] font-black text-white/5 dark:text-zinc-900/5 italic select-none pointer-events-none leading-none">
              YOU
            </div>
            <div className="relative z-10">
              <p className="text-[#1DB954] font-mono text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
                Your Battle Card
              </p>

              <div className="flex items-center gap-5 mb-8">
                {profile.avatar && (
                  <img
                    src={profile.avatar}
                    alt=""
                    className="h-18 w-18 rounded-2xl object-cover border-2 border-[#1DB954] shrink-0"
                  />
                )}
                <div>
                  <h2 className="text-3xl font-black uppercase italic tracking-tighter leading-none">
                    {profile.name}
                  </h2>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1">
                    avg year: {profile.avgTrackYear} &bull; artist pop: {profile.avgArtistPopularity}
                  </p>
                </div>
              </div>

              {/* Top artists */}
              <div className="space-y-2 mb-8">
                {profile.topArtists.slice(0, 4).map((a, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-[10px] font-black text-zinc-600 w-5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-black uppercase italic tracking-tighter truncate">{a}</span>
                  </div>
                ))}
              </div>

              {/* Battle scores preview */}
              <div className="grid grid-cols-5 gap-2 mb-8">
                {CATEGORIES.map((cat) => (
                  <div key={cat.id} className="text-center">
                    <div className="text-lg mb-1">{cat.emoji}</div>
                    <div className="text-base font-black italic text-[#1DB954]">
                      {String(cat.calc(profile) ?? 0)}
                    </div>
                    <div className="text-[8px] font-mono text-zinc-600 uppercase tracking-wide">
                      {cat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Code section */}
              <div className="border-t border-white/10 dark:border-zinc-900/10 pt-6">
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3">
                  Your battle code — send it to a friend
                </p>
                <div className="flex items-center gap-3">
                  <code className="flex-1 text-[9px] font-mono bg-white/10 dark:bg-zinc-900/10 px-3 py-2 rounded-xl truncate select-all">
                    {myCode.slice(0, 48)}…
                  </code>
                  <button
                    onClick={handleCopy}
                    className="flex-shrink-0 px-4 py-2 bg-[#1DB954] text-black text-[10px] font-black uppercase tracking-widest rounded-xl hover:scale-105 active:scale-95 transition-transform"
                  >
                    {copied ? "✓ Copied" : "Copy"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* OPPONENT INPUT CARD */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-10 2xl:p-14 rounded-[3rem] flex flex-col shadow-xl">
            <div className="flex-1">
              <p className="text-[#1DB954] font-mono text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
                Opponent Profile
              </p>
              <h2 className="text-4xl 2xl:text-5xl font-black uppercase italic tracking-tighter leading-none mb-4">
                Challenge<br />a Friend.
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium mb-8 leading-relaxed">
                Tell your friend to open this page and copy their battle code. Paste it below and let the music do the talking.
              </p>

              <div className="space-y-3 mb-6">
                {CATEGORIES.map((cat) => (
                  <div key={cat.id} className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                    <span>{cat.emoji}</span>
                    <span className="font-black uppercase text-zinc-700 dark:text-zinc-300">{cat.name}</span>
                    <span className="flex-1 border-b border-dashed border-zinc-200 dark:border-zinc-800" />
                    <span className="text-[10px]">{cat.desc.split("?")[0]}?</span>
                  </div>
                ))}
              </div>

              <textarea
                value={opponentCode}
                onChange={(e) => setOpponentCode(e.target.value)}
                placeholder="Paste your opponent's battle code here…"
                className="w-full h-28 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-4 text-xs font-mono resize-none focus:outline-none focus:border-[#1DB954] transition-colors placeholder:text-zinc-400"
              />
              {error && (
                <p className="mt-2 text-red-500 text-xs font-mono">{error}</p>
              )}
            </div>

            <button
              onClick={handleBattle}
              disabled={!opponentCode.trim()}
              className="mt-6 w-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#1DB954] hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            >
              🥊 Let's Battle!
            </button>
          </div>
        </div>
      ) : guessPhase && !showResults ? (
        /* ── GUESS PHASE ── */
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-900 p-12 2xl:p-20 rounded-[3rem] relative overflow-hidden shadow-2xl">
            <div className="absolute -bottom-10 -right-10 text-[15rem] font-black text-white/5 dark:text-zinc-900/5 italic select-none pointer-events-none leading-none">
              GUESS
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-10">
                {profile.avatar && (
                  <img src={profile.avatar} alt="" className="h-16 w-16 rounded-2xl object-cover border-2 border-[#1DB954]" />
                )}
                <div className="text-5xl font-black italic text-[#1DB954]">VS</div>
                {opponent!.avatar && (
                  <img src={opponent!.avatar} alt="" className="h-16 w-16 rounded-2xl object-cover border-2 border-zinc-700" />
                )}
              </div>

              <h2 className="text-4xl 2xl:text-5xl font-black uppercase italic tracking-tighter leading-none mb-4">
                Try to Guess.
              </h2>
              <p className="text-zinc-400 dark:text-zinc-600 text-base font-medium mb-12 leading-relaxed">
                Before we reveal the results, make your predictions. Who do you think will win each category?
              </p>

              <div className="space-y-6 mb-10">
                {CATEGORIES.map((cat) => (
                  <div key={cat.id} className="bg-zinc-900 dark:bg-zinc-200 p-6 rounded-2xl">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl">{cat.emoji}</span>
                      <div>
                        <h3 className="text-xl font-black uppercase italic tracking-tighter">{cat.name}</h3>
                        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{cat.desc}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleGuess(cat.id, "me")}
                        className={`flex-1 py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${
                          guesses[cat.id] === "me"
                            ? "bg-[#1DB954] text-black"
                            : "bg-zinc-800 dark:bg-zinc-300 text-zinc-400 dark:text-zinc-700 hover:bg-zinc-700 dark:hover:bg-zinc-400"
                        }`}
                      >
                        {profile.name.split(" ")[0]}
                      </button>
                      <button
                        onClick={() => handleGuess(cat.id, "opponent")}
                        className={`flex-1 py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${
                          guesses[cat.id] === "opponent"
                            ? "bg-[#1DB954] text-black"
                            : "bg-zinc-800 dark:bg-zinc-300 text-zinc-400 dark:text-zinc-700 hover:bg-zinc-700 dark:hover:bg-zinc-400"
                        }`}
                      >
                        {opponent!.name.split(" ")[0]}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleShowResults}
                disabled={Object.keys(guesses).length < CATEGORIES.length}
                className="w-full bg-[#1DB954] text-black py-6 rounded-2xl font-black text-lg uppercase tracking-widest hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              >
                🎬 Reveal Results
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* ── BATTLE RESULTS ── */
        <>
          {/* VS HEADER */}
          <div className="mb-16 bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-[3rem] p-10 2xl:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <div className="text-[18vw] font-black italic text-white/5 dark:text-zinc-900/5 leading-none tracking-tighter">
                VS
              </div>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-10">
              {/* Player 1 */}
              <div className="text-center">
                {profile.avatar && (
                  <img
                    src={profile.avatar}
                    alt=""
                    className={`h-24 w-24 rounded-3xl object-cover mx-auto mb-4 border-4 transition-all ${battle.myWins > battle.opWins ? "border-[#1DB954] shadow-lg shadow-[#1db954]/40" : "border-zinc-700"}`}
                  />
                )}
                <p className="text-2xl font-black uppercase italic tracking-tighter leading-none">{profile.name}</p>
                <p className={`font-mono text-xs mt-1 ${battle.myWins > battle.opWins ? "text-[#1DB954]" : "text-zinc-500"}`}>
                  {battle.myWins} {battle.myWins === 1 ? "win" : "wins"}
                </p>
              </div>

              {/* Overall result */}
              <div className="text-center space-y-2">
                {battle.myWins !== battle.opWins ? (
                  <>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Winner</p>
                    <p className="text-3xl font-black italic uppercase tracking-tighter text-[#1DB954]">
                      {battle.myWins > battle.opWins ? profile.name.split(" ")[0] : opponent!.name.split(" ")[0]}!
                    </p>
                  </>
                ) : (
                  <p className="text-2xl font-black italic uppercase tracking-tighter text-zinc-400">
                    It's a Tie!
                  </p>
                )}
                <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                  {battle.myWins} – {battle.opWins}
                </p>
              </div>

              {/* Player 2 */}
              <div className="text-center">
                {opponent!.avatar && (
                  <img
                    src={opponent!.avatar}
                    alt=""
                    className={`h-24 w-24 rounded-3xl object-cover mx-auto mb-4 border-4 transition-all ${battle.opWins > battle.myWins ? "border-[#1DB954] shadow-lg shadow-[#1db954]/40" : "border-zinc-700"}`}
                  />
                )}
                <p className="text-2xl font-black uppercase italic tracking-tighter leading-none">{opponent!.name}</p>
                <p className={`font-mono text-xs mt-1 ${battle.opWins > battle.myWins ? "text-[#1DB954]" : "text-zinc-500"}`}>
                  {battle.opWins} {battle.opWins === 1 ? "win" : "wins"}
                </p>
              </div>
            </div>
          </div>

          {/* COMPATIBILITY & COMMON ARTISTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#1DB954] text-black p-8 2xl:p-12 rounded-[3rem] shadow-2xl shadow-[#1db954]/20 relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-[10px] font-mono font-black uppercase tracking-[0.4em] mb-4 opacity-70">Taste Compatibility</p>
                <div className="text-7xl 2xl:text-8xl font-black italic tracking-tighter mb-2">{battle.compatibility}%</div>
                <p className="text-sm font-black uppercase tracking-wider opacity-80">Musical Soulmates</p>
              </div>
              <div className="absolute -bottom-6 -right-6 text-[8rem] 2xl:text-[12rem] font-black text-black/5 italic select-none pointer-events-none">
                MATCH
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 2xl:p-12 rounded-[3rem] shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-[10px] font-mono font-black uppercase tracking-[0.4em] mb-4 opacity-50">Common Artists</p>
                <div className="text-7xl 2xl:text-8xl font-black italic tracking-tighter mb-2 text-[#1DB954]">{battle.commonArtists}</div>
                <p className="text-sm font-black uppercase tracking-wider opacity-50">Shared Favorites</p>
              </div>
              <div className="absolute -bottom-6 -right-6 text-[8rem] 2xl:text-[12rem] font-black text-zinc-100 dark:text-zinc-800 italic select-none pointer-events-none">
                SHARED
              </div>
            </div>
          </div>

          {/* CATEGORY CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {battle.categories.map((cat, index) => {
              const total = cat.myScore + cat.opponentScore || 1;
              const myPct = Math.round((cat.myScore / total) * 100);
              const winner = cat.tie ? null : cat.myWins ? profile.name.split(" ")[0] : opponent!.name.split(" ")[0];

              return (
                <div
                  key={cat.id}
                  className={`bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-900 p-8 2xl:p-10 rounded-[2.5rem] overflow-hidden relative shadow-2xl group hover:-translate-y-2 transition-all duration-500 ${
                    index <= revealIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="absolute -bottom-4 -right-4 text-[8rem] font-black opacity-5 select-none italic leading-none pointer-events-none">
                    {cat.label}
                  </div>

                  <div className="relative z-10">
                    <div className="text-4xl mb-3">{cat.emoji}</div>
                    <h3 className="text-3xl font-black uppercase italic tracking-tighter leading-none mb-1">
                      {cat.name}
                    </h3>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-8">
                      {cat.desc}
                    </p>

                    {/* Scores */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-center min-w-[60px]">
                        <div className={`text-5xl font-black italic leading-none ${cat.myWins ? "text-[#1DB954]" : "text-zinc-600"}`}>
                          {cat.myScore}
                        </div>
                        <div className="text-[10px] font-mono text-zinc-600 uppercase mt-1 truncate max-w-[80px]">
                          {profile.name.split(" ")[0]}
                        </div>
                      </div>

                      <div className="text-zinc-700 dark:text-zinc-300 font-black text-sm italic px-2">VS</div>

                      <div className="text-center min-w-[60px]">
                        <div className={`text-5xl font-black italic leading-none ${!cat.myWins && !cat.tie ? "text-[#1DB954]" : "text-zinc-600"}`}>
                          {cat.opponentScore}
                        </div>
                        <div className="text-[10px] font-mono text-zinc-600 uppercase mt-1 truncate max-w-[80px]">
                          {opponent!.name.split(" ")[0]}
                        </div>
                      </div>
                    </div>

                    {/* Tug-of-war bar */}
                    <div className="h-2 bg-zinc-800 dark:bg-zinc-200 rounded-full overflow-hidden mb-5">
                      <div
                        className="h-full rounded-full bg-[#1DB954] transition-all duration-1000"
                        style={{ width: `${myPct}%` }}
                      />
                    </div>

                    {/* Winner badge */}
                    {winner ? (
                      <div className="inline-flex items-center gap-2 bg-[#1DB954]/20 text-[#1DB954] px-4 py-1.5 rounded-full">
                        <span className="text-[10px] font-black uppercase tracking-widest">
                          {winner} {cat.winText}
                        </span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-2 bg-zinc-800/40 dark:bg-zinc-200/60 text-zinc-400 px-4 py-1.5 rounded-full">
                        <span className="text-[10px] font-black uppercase tracking-widest">Dead Tie</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* REMATCH & SHARE */}
          <div className="text-center pb-20 space-y-4">
            <button
              onClick={handleShare}
              disabled={sharing}
              className="px-10 py-5 bg-[#1DB954] text-black rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            >
              {sharing ? "Generating Image..." : "📸 Share Results"}
            </button>
            <button
              onClick={() => {
                setOpponent(null);
                setOpponentCode("");
                setError("");
                setGuessPhase(false);
                setGuesses({});
                setShowResults(false);
                setRevealIndex(0);
              }}
              className="px-10 py-5 border-2 border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-black transition-all duration-300"
            >
              ↩ New Battle
            </button>
          </div>
        </>
      )}
    </main>
  );
}
