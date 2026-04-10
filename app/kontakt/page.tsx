import Link from "next/link";
import { Nav } from "../components/Nav";

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-[#1DB954] selection:text-black">
      <Nav />
      
      {/* HERO SECTION - Pełne skalowanie napisu w tle */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/10 to-zinc-950/5 dark:from-[#1DB954]/5 dark:to-zinc-900/50" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-[18vw] font-black text-zinc-200/50 dark:text-zinc-800/50 italic tracking-tighter select-none leading-none">
            CONTACT
          </div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl 2xl:max-w-6xl px-6">
          <p className="text-[#1DB954] font-mono text-xs 2xl:text-sm font-bold uppercase tracking-[0.4em] mb-6 opacity-70">
            Get In Touch
          </p>
          <h1 className="text-6xl md:text-9xl 2xl:text-[11rem] font-black tracking-tighter italic uppercase leading-none mb-8">
            Contact.
          </h1>
          <p className="text-lg md:text-xl 2xl:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl 2xl:max-w-4xl mx-auto font-medium">
            Got a feature idea? Found a bug? Want to argue about genre classifications? We’re here for all of it.
          </p>
        </div>
      </section>

      {/* MAIN CONTAINER - Responsywne szerokości */}
      <main className="w-full px-6 md:px-16 lg:px-24 2xl:px-40 py-16 mx-auto">
        
        {/* CONTACT METHODS GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 2xl:gap-12 mb-32">
          
          {/* EMAIL CARD */}
          <div className="group bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black p-10 2xl:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden transition-all duration-500 hover:-translate-y-2">
            <div className="relative z-10">
              <h3 className="text-2xl 2xl:text-3xl font-black mb-8 uppercase italic tracking-tighter">Email.</h3>
              <div className="space-y-6 2xl:space-y-8">
                <div className="group/item cursor-pointer">
                  <p className="text-[10px] 2xl:text-xs font-mono uppercase tracking-widest opacity-50 mb-1 group-hover/item:text-[#1DB954] transition-colors">General</p>
                  <p className="font-black text-xl 2xl:text-2xl tracking-tighter">kontakt@zounk.pl</p>
                </div>
                <div className="group/item cursor-pointer">
                  <p className="text-[10px] 2xl:text-xs font-mono uppercase tracking-widest opacity-50 mb-1 group-hover/item:text-[#1DB954] transition-colors">Business</p>
                  <p className="font-black text-xl 2xl:text-2xl tracking-tighter">biznes@zounk.pl</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 text-[12rem] 2xl:text-[16rem] font-black text-white/5 dark:text-black/5 pointer-events-none select-none italic tracking-tighter">
              @
            </div>
          </div>

          {/* SOCIAL MEDIA CARD */}
          <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-10 2xl:p-16 rounded-[3rem] shadow-xl transition-all duration-500 hover:-translate-y-2">
            <h3 className="text-2xl 2xl:text-3xl font-black mb-8 uppercase italic tracking-tighter">Social.</h3>
            <div className="grid grid-cols-2 gap-4 2xl:gap-6">
              {['Twitter', 'Instagram', 'Facebook', 'LinkedIn'].map((platform) => (
                <div key={platform} className="bg-zinc-50 dark:bg-zinc-800/50 p-6 2xl:p-8 rounded-2xl text-center group/social hover:bg-[#1DB954] transition-all duration-300 cursor-pointer">
                  <p className="text-[10px] 2xl:text-xs font-black uppercase tracking-widest group-hover/social:text-black">
                    {platform}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RESPONSE INFO CARD */}
          <div className="group bg-[#1DB954] text-black p-10 2xl:p-16 rounded-[3rem] shadow-xl shadow-[#1db954]/20 relative overflow-hidden transition-all duration-500 hover:-translate-y-2">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <h3 className="text-2xl 2xl:text-3xl font-black mb-6 uppercase italic tracking-tighter">Response time.</h3>
              <div className="text-center my-4">
                <div className="text-8xl 2xl:text-9xl font-black italic tracking-tighter leading-none mb-2">24h</div>
                <p className="text-[10px] 2xl:text-xs font-black uppercase tracking-[0.2em] opacity-70">Max Wait Time</p>
              </div>
              <div className="space-y-2 pt-4">
                <div className="flex items-center justify-between border-b border-black/10 pb-1 text-[10px] 2xl:text-xs font-black uppercase tracking-widest">
                  <span>Email</span>
                  <span>12-24H</span>
                </div>
                <div className="flex items-center justify-between border-b border-black/10 pb-1 text-[10px] 2xl:text-xs font-black uppercase tracking-widest">
                  <span>Support</span>
                  <span>LIVE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT FORM SECTION - Zwiększony odstęp gap na dużych ekranach */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 2xl:gap-40 mb-32 items-start">
          <div className="space-y-8 2xl:space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-[#1DB954] rounded-full animate-pulse" />
                <h2 className="text-5xl md:text-6xl 2xl:text-7xl font-black uppercase italic tracking-tighter leading-tight">Drop us<br/>a message.</h2>
              </div>
              <p className="text-lg 2xl:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                Have an idea for a new battle category? Think our algorithms are wrong about your genre? Tell us — every bit of feedback shapes what Zounk becomes.
              </p>
            </div>
            
            <div className="space-y-8 2xl:space-y-12">
              {[
                { title: "Fast reply", desc: "Usually under 12 hours", icon: "⚡" },
                { title: "Secure", desc: "SSL encrypted connection", icon: "🔒" },
                { title: "Support", desc: "Technical help 24/7", icon: "🛠️" }
              ].map((item) => (
                <div key={item.title} className="flex gap-6 group items-center">
                  <div className="text-3xl 2xl:text-4xl grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
                  <div>
                    <h4 className="font-black text-sm 2xl:text-base uppercase tracking-tighter">{item.title}</h4>
                    <p className="text-xs 2xl:text-sm text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-widest">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-12 2xl:p-20 rounded-[3.5rem] shadow-2xl relative">
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] 2xl:text-xs font-black uppercase tracking-[0.2em] text-zinc-400 ml-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 2xl:py-6 bg-zinc-100 dark:bg-zinc-800 rounded-2xl font-bold text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition-all border-none"
                    placeholder="JOHN DOE"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] 2xl:text-xs font-black uppercase tracking-[0.2em] text-zinc-400 ml-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 2xl:py-6 bg-zinc-100 dark:bg-zinc-800 rounded-2xl font-bold text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition-all border-none"
                    placeholder="HELLO@WORLD.COM"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] 2xl:text-xs font-black uppercase tracking-[0.2em] text-zinc-400 ml-2">Subject</label>
                <select className="w-full px-6 py-4 2xl:py-6 bg-zinc-100 dark:bg-zinc-800 rounded-2xl font-bold text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#1DB954] appearance-none transition-all">
                  <option>Business Collaboration</option>
                  <option>Technical Support</option>
                  <option>Feedback / Suggestions</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] 2xl:text-xs font-black uppercase tracking-[0.2em] text-zinc-400 ml-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-6 py-4 2xl:py-6 bg-zinc-100 dark:bg-zinc-800 rounded-2xl font-bold text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition-all resize-none border-none"
                  placeholder="YOUR MESSAGE..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black dark:bg-white text-white dark:text-black px-8 py-5 2xl:py-7 rounded-2xl font-black text-xs 2xl:text-sm uppercase tracking-widest hover:bg-[#1DB954] dark:hover:bg-[#1DB954] hover:text-black transition-all duration-500 shadow-xl"
              >
                Send Message →
              </button>
            </form>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-8xl 2xl:text-9xl font-black tracking-tighter italic uppercase leading-none mb-4">
              FAQ.
            </h2>
            <div className="w-24 2xl:w-40 h-1 bg-[#1DB954] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 2xl:gap-12">
            {[
              { q: "How do I connect my account?", a: "Hit the 'Connect Spotify' button on the homepage and authorize with your Spotify account. That's it." },
              { q: "Is it free?", a: "Yes. Your taste analysis and battles are and always will be free." },
              { q: "Is my data safe?", a: "We use the official Spotify API. We never store your password or any sensitive credentials." },
              { q: "How do I delete my data?", a: "You can permanently remove your account from the profile settings at any time." }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 2xl:p-12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] hover:border-[#1DB954] transition-all duration-300">
                <h3 className="text-lg 2xl:text-xl font-black mb-4 uppercase italic tracking-tighter flex items-center gap-3">
                  <span className="text-[#1DB954] font-mono text-xs 2xl:text-sm">0{idx+1}</span>
                  {item.q}
                </h3>
                <p className="text-sm 2xl:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION - MEGA BLOCK */}
        <section className="text-center py-20 2xl:py-32 bg-zinc-950 dark:bg-zinc-50 rounded-[4rem] text-white dark:text-black relative overflow-hidden group">
          <h2 className="text-4xl md:text-6xl 2xl:text-8xl font-black mb-8 uppercase italic tracking-tighter relative z-10">
            Still have questions?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10 px-6">
            <Link
              href="/bitwy"
              className="bg-[#1DB954] text-black px-10 py-5 2xl:px-14 2xl:py-7 rounded-2xl font-black text-sm 2xl:text-base uppercase tracking-widest hover:scale-105 transition-all duration-500 shadow-xl"
            >
              Start a Battle
            </Link>
            <Link
              href="/o-nas"
              className="bg-transparent border-2 border-white dark:border-black px-10 py-5 2xl:px-14 2xl:py-7 rounded-2xl font-black text-sm 2xl:text-base uppercase tracking-widest hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all duration-500"
            >
              About Zounk
            </Link>
          </div>
          <div className="absolute top-0 right-0 text-[20rem] 2xl:text-[30rem] font-black text-white/5 dark:text-black/5 pointer-events-none select-none italic tracking-tighter leading-none">
            HELP
          </div>
        </section>

      </main>
    </div>
  );
}