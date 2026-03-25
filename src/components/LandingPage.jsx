import React from "react";
import { Activity, Volume2, Monitor, Wifi, ShieldAlert, GitMerge, Zap, Users, Headphones } from "lucide-react";

const Card = ({ children, className = "" }) => (
  <div className={`bg-white border-2 border-black rounded-xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${className}`}>
    {children}
  </div>
);

const CassetteNode = ({ color = "bg-pink-500", label = "TX-01" }) => (
  <div className={`relative w-48 h-32 border-4 border-black rounded-md shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between p-2 overflow-hidden ${color}`}>
    <div className="flex justify-between items-center border-b-2 border-black/20 pb-1">
      <span className="font-mono text-xs font-bold text-black uppercase">{label}</span>
      <div className="flex gap-1">
        <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>
        <div className="w-2 h-2 rounded-full bg-white"></div>
      </div>
    </div>
    <div className="flex justify-center items-center gap-6 py-2">
      <div className="w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-black rounded-full"></div>
      </div>
      <div className="w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-black rounded-full"></div>
      </div>
    </div>
    <div className="flex justify-between items-end">
      <div className="w-16 h-3 bg-black/20 rounded-full"></div>
      <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center bg-white">
        <Wifi size={14} className="text-black" />
      </div>
    </div>
  </div>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-black font-sans relative overflow-x-hidden selection:bg-yellow-300">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <nav className="relative z-10 flex justify-between items-center p-6 max-w-6xl mx-auto border-b-2 border-black/10">
        <div className="font-mono font-black text-2xl tracking-tighter flex items-center gap-2">
          <div className="w-6 h-6 bg-yellow-400 border-2 border-black rounded-sm"></div>
          SOUNDMESH
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6">
        <section className="py-24 grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="space-y-8 md:col-span-3">
            <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
              SoundMesh <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                Untangle your audio
              </span>
            </h1>
            <p className="text-2xl font-bold text-gray-900 leading-tight">
              Turn any number of speakers (or headphones) into one perfectly-synced sound system.
            </p>
            <p className="text-xl text-gray-800 font-medium max-w-lg leading-relaxed">
              SoundMesh is a plug-and-play wireless audio system that lets you route one or more audio source(s) to as many speakers or headphones as you want. <br />
              No proprietary apps, no Wi-Fi routers, and no brand lock-in. Just plug in, and let the mesh do the rest.
            </p>
          </div>

          <div className="relative h-96 flex items-center justify-center md:col-span-2">
            <div className="absolute top-10 left-10 rotate-[-12deg]">
              <CassetteNode color="bg-yellow-400" label="TX-01 (Master)" />
            </div>
            <div className="absolute top-48 left-48 z-20">
              <CassetteNode color="bg-pink-500" label="RX-01 (L)" />
            </div>
            <div className="absolute top-20 right-0 rotate-[8deg] opacity-90 z-10">
              <CassetteNode color="bg-blue-400" label="RX-02 (R)" />
            </div>
            <svg className="absolute inset-0 w-full h-full -z-10" style={{ strokeDasharray: "8, 8" }}>
              <path d="M 120 120 Q 200 200 240 240" fill="transparent" stroke="black" strokeWidth="3" />
              <path d="M 160 100 Q 300 100 360 140" fill="transparent" stroke="black" strokeWidth="3" />
            </svg>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-12">
          <div className="border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-black">
            <video className="w-full aspect-video" controls>
              <source src="/videos/soundmesh-brief.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className="py-12">
          <div className="bg-black text-white rounded-3xl p-12 md:p-16 shadow-[8px_8px_0px_0px_#ff007f] relative overflow-hidden">
            <div className="absolute -right-10 -top-10 opacity-10">
              <GitMerge size={300} />
            </div>
            <div className="max-w-4xl mx-auto relative z-10 text-center">
              <h2 className="text-4xl font-black mb-6 text-yellow-400">Take the frustration out of audio setup</h2>
              <p className="text-xl text-gray-300 leading-relaxed font-medium mb-12 max-w-2xl mx-auto">
                If you’ve ever tried to set up distributed audio for a pop-up party, a DIY show, or a theater rehearsal, you already know the headache.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-white text-left">
                <div className="bg-white/10 p-6 rounded-xl border-2 border-white/20 backdrop-blur-sm">
                   <h3 className="font-bold text-lg mb-2 text-pink-400">Cable hell</h3>
                   <p className="text-sm font-medium text-gray-300">Stringing together 100 feet of tripping hazards just to get sound across a room.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl border-2 border-white/20 backdrop-blur-sm">
                   <h3 className="font-bold text-lg mb-2 text-yellow-400">Flaky Bluetooth</h3>
                   <p className="text-sm font-medium text-gray-300">Consumer systems that drop out constantly and limit you to linking just two or three speakers of the exact same brand.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl border-2 border-white/20 backdrop-blur-sm">
                   <h3 className="font-bold text-lg mb-2 text-blue-400">Pro systems</h3>
                   <p className="text-sm font-medium text-gray-300">Dropping thousands of dollars on expensive, infrastructure-heavy Audio-over-IP setups.</p>
                </div>
              </div>

              <p className="text-xl text-white leading-relaxed font-bold mt-12 border-t border-white/20 pt-8 max-w-2xl mx-auto">
                We needed something fast, portable, and reliable. So we built it.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
            <h2 className="text-4xl font-black mb-6">How it works</h2>
            <p className="text-xl font-medium text-gray-700 mb-12 max-w-4xl">SoundMesh simplifies professional audio setups using wireless Wi-Fi mesh technology. The audio stays locked in tight sync with under 50ms of latency, no matter what speaker brands you happen to be mixing and matching.</p>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-black/20 -z-10 border-t-2 border-dashed border-black"></div>

            <Card className="bg-white flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-pink-500 border-2 border-black rounded-full flex items-center justify-center mb-6 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-2xl font-black">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Plug in your source</h3>
              <p className="font-medium text-gray-700">Connect your phone, laptop, or DJ mixer into a SoundMesh <span className="font-bold">SRC</span> node.</p>
            </Card>

            <Card className="bg-white flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-yellow-400 border-2 border-black rounded-full flex items-center justify-center mb-6 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-2xl font-black">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Plug in your outputs</h3>
              <p className="font-medium text-gray-700">Plug your speakers or headphones into our <span className="font-bold">OUT</span> nodes anywhere in the space.</p>
            </Card>

            <Card className="bg-white flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-500 border-2 border-black rounded-full flex items-center justify-center mb-6 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-2xl font-black">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Sit back and listen</h3>
              <p className="font-medium text-gray-700">The devices automatically form their own high-bandwidth network.</p>
            </Card>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-4xl font-black mb-12">High quality, reliable tech</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="flex items-start gap-6 border-l-8 border-l-pink-500">
              <div className="p-3 bg-pink-100 border-2 border-black rounded-lg shrink-0">
                <Volume2 size={28} className="text-pink-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Mix and match everything</h4>
                <p className="text-gray-700 font-medium">We don't care what speakers you use. Connect a pair of studio monitors, a massive PA system, and a random Bluetooth speaker via aux cable. If it has an input, it joins the mesh.</p>
              </div>
            </Card>

            <Card className="flex items-start gap-6 border-l-8 border-l-yellow-400">
              <div className="p-3 bg-yellow-100 border-2 border-black rounded-lg shrink-0">
                <Activity size={28} className="text-yellow-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Studio-quality sound</h4>
                <p className="text-gray-700 font-medium">We aren't compressing your music into garbage. SoundMesh transmits at a professional baseline of 24-bit/48kHz audio.</p>
              </div>
            </Card>

            <Card className="flex items-start gap-6 border-l-8 border-l-blue-400">
              <div className="p-3 bg-blue-100 border-2 border-black rounded-lg shrink-0">
                <ShieldAlert size={28} className="text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">A self-healing network</h4>
                <p className="text-gray-700 font-medium">Because the nodes form a true mesh, there is no single point of failure. If someone trips over a receiver or walks out of range, the rest of the network survives and re-routes the audio automatically.</p>
              </div>
            </Card>

            <Card className="flex items-start gap-6 border-l-8 border-l-orange-400">
              <div className="p-3 bg-orange-100 border-2 border-black rounded-lg shrink-0">
                <Monitor size={28} className="text-orange-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Look under the hood</h4>
                <p className="text-gray-700 font-medium">Users don't trust what they can't see. So we built the Portal. Plug in via USB to view network topology, monitor batteries, and check levels instantly in your browser. No app required.</p>
              </div>
            </Card>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-4xl font-black mb-6">Built for temporary spaces and shared moments</h2>
          <p className="text-xl font-medium text-gray-700 mb-12 max-w-2xl">SoundMesh is the ultimate tool for artists, performers, and DIY event hosts who need distributed sound without the infrastructure.</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { 
                label: "Pop-up parties & DJ sets", 
                desc: "Sync up a massive rig of borrowed speakers in the middle of a park.",
                icon: Zap 
              },
              { 
                label: "Immersive theatre", 
                desc: "Send directed audio to specific headset groups or trigger localized sounds in different rooms of an installation.",
                icon: Users 
              },
              { 
                label: "Quick rehearsals", 
                desc: "Get the sound up and running in 5 minutes so you can actually focus on the art.",
                icon: Headphones 
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border-2 border-black rounded-xl p-6 flex flex-col shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group hover:bg-black hover:text-white transition-colors cursor-crosshair">
                <div className="self-end p-2 bg-gray-100 border-2 border-black rounded-full group-hover:bg-yellow-400 group-hover:text-black transition-colors mb-4">
                  <item.icon size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-2xl leading-tight mb-2">{item.label}</h4>
                  <p className="text-sm font-medium opacity-80">{item.desc}</p>
                  <div className="w-8 h-1 bg-current mt-4 group-hover:bg-yellow-400 transition-colors"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 text-center">
          <div className="bg-orange-500 border-4 border-black rounded-3xl p-12 md:p-20 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight uppercase leading-none">
                What would you build if distributed audio was this easy?
              </h2>
            </div>
          </div>
        </section>

        <footer className="py-12 text-center border-t-2 border-black/10">
          <div className="text-gray-600 font-mono text-sm font-bold flex flex-col md:flex-row px-6">
            <p>© 2026 SoundMesh Systems</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
