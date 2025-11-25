import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden flex items-center justify-center p-6 bg-slate-950">
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#22d3ee33,_transparent_60%),_radial-gradient(circle_at_bottom,_#a855f733,_transparent_60%)] animate-[gradient-move_12s_ease-in-out_infinite]" />

      {/* Floating tech shapes */}
      <div className="pointer-events-none absolute -left-10 top-10 h-32 w-32 rounded-full bg-cyan-400/30 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-40 w-40 rounded-full bg-purple-500/25 blur-3xl animate-float" />
      <div className="pointer-events-none absolute left-1/2 -top-10 h-24 w-24 rounded-3xl bg-emerald-400/30 blur-2xl animate-float-slower" />

      {/* Main card */}
      <div className="relative bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.6)] rounded-3xl px-8 py-10 md:px-12 md:py-12 max-w-4xl w-full text-center border border-white/60">
        {/* Glow ring */}
        <div className="pointer-events-none absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 opacity-40 blur animate-[glow_5s_ease-in-out_infinite]" />

        <div className="relative">
          {/* Logos row */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <img
              src="https://imgs.search.brave.com/bZBQP0ROdp2I3HcV04eQJgbtKIjRhfpgIiEoBokmI-w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jcmFj/a3UuaW4vbGF0ZXN0/LWdvdnQtam9icy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOS8x/MS9OSUVMSVQtTG9n/by5qcGc"
              alt="NIELIT Haridwar"
              className="h-14 w-auto object-contain drop-shadow-md"
            />
            <span className="text-sm font-semibold text-slate-500">×</span>
            <img
              src="https://imgs.search.brave.com/eGtdR6uvjYO8ucyww_HEk0XgUUJLsdKdMDZXm-_lOB4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/Y29sbGVnZXByYXZl/c2guY29tLzIwMTYv/MTEvR0tWLUhhcmlk/d2FyLUxvZ28uanBn"
              alt="Gurukul Kangri Vishwavidyalaya"
              className="h-14 w-auto object-contain drop-shadow-md"
            />
            <span className="text-sm font-semibold text-slate-500">×</span>
            <img
              src="https://imgs.search.brave.com/xtzjXcmhVhekCQREuKXh6Y3stAANiPhx1i8BkhfCL54/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cWNmaXRyYWluaW5n/LmNvbS9pbWFnZXMv/bG9nby5wbmc"
              alt="QCFI"
              className="h-14 w-auto object-contain drop-shadow-md"
            />
          </div>

          {/* Heading */}
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-cyan-600 mb-3">
            Collaborative Tech Jobfair 2025
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 leading-tight">
            NIELIT Haridwar × GKV × QCFI
          </h1>
          <p className="text-base md:text-lg text-slate-600 mb-1">
            Connecting talented students with leading tech companies
          </p>
          <p className="text-sm md:text-base text-purple-600 font-semibold mb-6">
            Expected Date: 21 December 2025 • Haridwar
          </p>

          {/* Highlight strip */}
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-xs md:text-sm shadow-lg">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            <span>On-spot interviews • Tech roles only • Limited seats</span>
          </div>

          {/* Action cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Student card */}
            <Link
              to="/student"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 p-[1px] shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-full rounded-2xl bg-slate-950/90 px-6 py-6 text-left">
                <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-blue-500/40 blur-2xl group-hover:scale-125 transition-transform" />
                <div className="text-4xl mb-3 drop-shadow-sm">🎓</div>
                <h2 className="text-xl font-bold text-white mb-1">
                  Student Registration
                </h2>
                <p className="text-sm text-slate-200 mb-3">
                  Register as a tech job seeker for developer, IT, and related roles.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 group-hover:text-cyan-200">
                  Start application
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>

            {/* Company card */}
            <Link
              to="/company"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-[1px] shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-full rounded-2xl bg-slate-950/90 px-6 py-6 text-left">
                <div className="absolute -left-6 -top-6 h-16 w-16 rounded-full bg-emerald-400/40 blur-2xl group-hover:scale-125 transition-transform" />
                <div className="text-4xl mb-3 drop-shadow-sm">🏢</div>
                <h2 className="text-xl font-bold text-white mb-1">
                  Company Registration
                </h2>
                <p className="text-sm text-slate-200 mb-3">
                  Showcase tech openings, shortlist candidates, and conduct interviews.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 group-hover:text-emerald-200">
                  Post job profiles
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </div>


        </div>
      </div>
    </div>
  );
}
