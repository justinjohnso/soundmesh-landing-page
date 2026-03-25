import React from "react";
import { Activity, Volume2, Monitor, Wifi, ShieldAlert, GitMerge } from "lucide-react";

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
        <button className="bg-black text-white font-bold py-2 px-6 rounded-full hover:bg-pink-500 hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all border-2 border-transparent hover:border-black">
          Apply for Alpha
        </button>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6">
        <section className="py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl font-black leading-[1.1] tracking-tight">
              Drop the cables. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                Keep the sync.
              </span>
            </h1>
            <p className="text-xl text-gray-800 font-medium max-w-lg leading-relaxed">
              SoundMesh is a plug-and-play Wi-Fi audio network. Route one source to infinite speakers with sub-50ms latency. No brand lock-in. No proprietary tax. Just audio that works.
            </p>
            <div className="flex gap-4">
              <button className="bg-yellow-400 border-2 border-black text-black font-black py-4 px-8 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-lg">
                Join the Alpha
              </button>
            </div>
          </div>

          <div className="relative h-96 flex items-center justify-center">
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

        <section className="py-20 border-t-2 border-black/10">
          <div className="bg-black text-white rounded-3xl p-12 md:p-16 shadow-[8px_8px_0px_0px_#ff007f] relative overflow-hidden">
            <div className="absolute -right-10 -top-10 opacity-10">
              <GitMerge size={300} />
            </div>
            <div className="max-w-3xl relative z-10">
              <h2 className="text-4xl font-black mb-6 text-yellow-400">Audio routing is broken.</h2>
              <p className="text-xl text-gray-300 leading-relaxed font-medium">
                You want to run sound to four corners of a warehouse, or sync an art car to a ground stack. Your current options? Pull 300 feet of copper, pray to the Bluetooth gods, or drop $5k on a proprietary Dante rig.
                <br />
                <br />
                We got tired of cable hell and flaky consumer gear. So we built a better way.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-4xl font-black mb-16 text-center">Three Steps. Zero Latency.</h2>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-black/20 -z-10 border-t-2 border-dashed border-black"></div>

            <Card className="bg-pink-100 flex flex-col items-center text-center translate-y-0 md:-translate-y-4">
              <div className="w-16 h-16 bg-pink-500 border-2 border-black rounded-full flex items-center justify-center mb-6 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-2xl font-black">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Plug the Source</h3>
              <p className="font-medium text-gray-700">Hook your mixer, CDJ, or synth into a SoundMesh Transmitter node.</p>
            </Card>

            <Card className="bg-yellow-100 flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 bg-yellow-400 border-2 border-black rounded-full flex items-center justify-center mb-6 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-2xl font-black">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Drop Receivers</h3>
              <p className="font-medium text-gray-700">Place Receiver nodes near any speaker or headphones. Any brand, any size.</p>
            </Card>

            <Card className="bg-blue-100 flex flex-col items-center text-center translate-y-0 md:translate-y-4">
              <div className="w-16 h-16 bg-blue-500 border-2 border-black rounded-full flex items-center justify-center mb-6 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-2xl font-black">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Mesh Auto-Syncs</h3>
              <p className="font-medium text-gray-700">Nodes immediately connect. Sub-50ms latency over a dedicated 5GHz network.</p>
            </Card>
          </div>
        </section>

        <section className="py-20 border-t-2 border-black/10">
          <h2 className="text-4xl font-black mb-12">Built for the gig.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="flex items-start gap-6 border-l-8 border-l-pink-500">
              <div className="p-3 bg-pink-100 border-2 border-black rounded-lg shrink-0">
                <Activity size={28} className="text-pink-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">24-bit/48kHz Baseline</h4>
                <p className="text-gray-700 font-medium">Studio-grade audio over the air. No compression artifacts, no signal degradation across the venue.</p>
              </div>
            </Card>

            <Card className="flex items-start gap-6 border-l-8 border-l-yellow-400">
              <div className="p-3 bg-yellow-100 border-2 border-black rounded-lg shrink-0">
                <Volume2 size={28} className="text-yellow-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Agnostic Audio</h4>
                <p className="text-gray-700 font-medium">Mix PA tops, thrift store stereos, and in-ears on the same network. If it takes an audio jack, it works.</p>
              </div>
            </Card>

            <Card className="flex items-start gap-6 border-l-8 border-l-blue-400">
              <div className="p-3 bg-blue-100 border-2 border-black rounded-lg shrink-0">
                <Monitor size={28} className="text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">The Web Portal</h4>
                <p className="text-gray-700 font-medium">Open your browser to see the network topology. Monitor signal, mute nodes, and adjust mix routing without touching the hardware.</p>
              </div>
            </Card>

            <Card className="flex items-start gap-6 border-l-8 border-l-orange-400">
              <div className="p-3 bg-orange-100 border-2 border-black rounded-lg shrink-0">
                <ShieldAlert size={28} className="text-orange-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Self-Healing Mesh</h4>
                <p className="text-gray-700 font-medium">Someone trips over a power cable and kills a node? The network dynamically routes around it. The track keeps playing.</p>
              </div>
            </Card>
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-4xl font-black mb-12">Where it shines.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["DIY Warehouse Parties", "Immersive Theatre", "Silent Discos", "Pop-up Rigs"].map((useCase, i) => (
              <div key={i} className="aspect-square bg-white border-2 border-black rounded-xl p-4 flex flex-col justify-end shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group hover:bg-black hover:text-white transition-colors cursor-crosshair">
                <h4 className="font-bold text-lg md:text-xl leading-tight">{useCase}</h4>
                <div className="w-8 h-1 bg-current mt-4 group-hover:bg-yellow-400 transition-colors"></div>
              </div>
            ))}
          </div>
        </section>

        <footer className="py-24 text-center">
          <div className="bg-orange-500 border-4 border-black rounded-3xl p-12 md:p-20 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black mb-8 text-black tracking-tight uppercase">Stop pulling cable.</h2>
              <p className="text-2xl font-bold mb-10 text-black/80 max-w-2xl mx-auto">
                Hardware development is actively underway. Drop your email to get on the list for our upcoming Alpha test.
              </p>
              <button className="bg-black text-white font-black py-5 px-10 rounded-xl shadow-[6px_6px_0px_0px_#fff] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_#fff] transition-all text-2xl border-2 border-white">
                Sign Up for Alpha
              </button>
            </div>
          </div>

          <div className="mt-16 text-gray-600 font-mono text-sm font-bold flex flex-col md:flex-row justify-between items-center px-6">
            <p>© 2026 SoundMesh Hardware.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-black">Github</a>
              <a href="#" className="hover:text-black">Discord</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
