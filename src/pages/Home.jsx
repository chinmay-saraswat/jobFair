import { Link } from "react-router-dom";
import ParticipatingMarquee from "../components/ParticipatingMarquee";
export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-slate-950">
      {/* --- Background Image + Overlays --- */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80" // Example: change to your own tech/jobfair image
          alt="Job Fair Hero"
          className="w-full h-full object-cover object-top opacity-50"
          draggable="false"
        />
        <div className="absolute inset-0 bg-slate-950/80" />
        {/* Animated gradient, floating blobs */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#22d3ee33,_transparent_60%),_radial-gradient(circle_at_bottom,_#a855f733,_transparent_60%)] animate-[gradient-move_12s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute -left-10 top-14 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl animate-float" />
        <div className="pointer-events-none absolute right-10 bottom-16 h-48 w-48 rounded-full bg-purple-400/20 blur-3xl animate-float-slow" />
      </div>
      <ParticipatingMarquee />
      {/* --- Main Content (z-10 ensures on top) --- */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full pt-5 pb-10 px-2">
        {/* Header/Logos/Intro */}
        <section className="mb-6 w-full max-w-5xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6 px-5  rounded-2xl bg-white/70 border border-white/80 shadow backdrop-blur-sm">
            <img
              src="src/assets/nielit_Logo.png"
              alt="NIELIT"
              className="h-24 w-auto object-contain drop-shadow"
            />
            <span className="text-sm font-semibold text-slate-400">×</span>
            <img
              src="src/assets/gurukul_logo.png"
              alt="GKV"
              className="h-15 w-auto object-contain drop-shadow"
            />
            <span className="text-sm font-semibold text-slate-400">×</span>
            <img
              src="https://imgs.search.brave.com/xtzjXcmhVhekCQREuKXh6Y3stAANiPhx1i8BkhfCL54/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cWNmaXRyYWluaW5n/LmNvbS9pbWFnZXMv/bG9nby5wbmc"
              alt="QCFI"
              className="h-15 w-auto object-contain drop-shadow"
            />
          </div>
          <p className="mb-2 text-[20px] tracking-widest uppercase text-cyan-400 font-semibold">
            {" "}
            National Institute of Electronics & Information Technology (NIELIT){" "}
            <br /> in joint association with Faculty of Engineering & Technology
            (GKV) and Quality Circle Forum of India (QCFI) announces{" "}
          </p>{" "}
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-400 to-purple-400 leading-tight mb-2 drop-shadow">
            {" "}
            Mega Job Fair 2025{" "}
          </h1>{" "}
          {/* <p className="text-base md:text-[8] text-slate-200 mb-3">
            {" "}
            NIELIT, in collaboration with the Faculty of Engineering &
            Technology, Gurukula Kangri Vishwavidyalaya, and Quality Circle
            Forum of India (QCFI), proudly announces the{" "}
            <span className="font-semibold text-emerald-400 pl-1">
              {" "}
              Mega Job Fair 2025{" "}
            </span>{" "}
            to connect aspiring graduates with leading recruiters in emerging
            technologies.{" "}
          </p> */}
          <p className="text-base md:text-lg text-slate-200 mb-3">
            Inaugural ceremony:{" "}
            <span className="text-emerald-400 font-semibold">
              21 Dec 2025, 10:00 AM
            </span>{" "}
            | Job Fair:{" "}
            <span className="text-emerald-400 font-semibold">
              21 Dec 2025, 11:00 AM
            </span>{" "}
            |
            <span className="font-semibold text-purple-400 pl-1">
              FET–GKV, Haridwar
            </span>
          </p>
        </section>

        {/* --- Main Card Section --- */}
        <div className="relative max-w-4xl w-full mx-auto">
          <div className="relative bg-white/90 rounded-2xl shadow-xl px-8 py-10 md:px-12 md:py-12 max-w-4xl w-full border border-white/60 mx-auto flex flex-col items-center">
            {/* Glow ring */}
            <div className="pointer-events-none absolute -inset-3 rounded-[2.5rem] bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 opacity-50 blur animate-[glow_5s_ease-in-out_infinite]" />
            <div className="relative z-10 w-full flex flex-col items-center">
              <h2 className="uppercase tracking-[0.25em] text-xs md:text-base text-cyan-900 mb-3 font-bold">
                Collaborative Tech Jobfair 2025
              </h2>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-1 leading-tight">
                Where Talent Meets Opportunity
              </h2>
              <p className="text-sm md:text-base text-slate-700 mb-7">
                Join students, tech leaders, and future employers in a milestone
                event for careers in Cloud, AI, Blockchain, Cybersecurity, Data
                Science, and beyond.
              </p>
              {/* Registration cards */}
              <div className="grid md:grid-cols-2 gap-8 w-full mt-2">
                {/* Student card */}
                <Link
                  to="/student"
                  className="group bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 p-[2px] rounded-2xl shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-1"
                >
                  <div className="relative rounded-2xl bg-slate-950/95 p-6">
                    <span className="text-4xl mb-3 block">🎓</span>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Student Registration
                    </h3>
                    <p className="text-sm text-slate-200 mb-3">
                      Register as a job seeker for developer, IT & future skills
                      roles.
                    </p>
                    <span className="text-cyan-300 font-semibold group-hover:text-cyan-200 transition">
                      Start your journey →
                    </span>
                  </div>
                </Link>
                {/* Company card */}
                <Link
                  to="/company"
                  className="group bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-[2px] rounded-2xl shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-1"
                >
                  <div className="relative rounded-2xl bg-slate-950/95 p-6">
                    <span className="text-4xl mb-3 block">🏢</span>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Company Registration
                    </h3>
                    <p className="text-sm text-slate-200 mb-3">
                      Hire top candidates; conduct quick, on-spot interviews.
                    </p>
                    <span className="text-emerald-300 font-semibold group-hover:text-emerald-200 transition">
                      Find Talent →
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* --- Extended Info --- */}
        <section className="w-full max-w-4xl mt-16 mb-14">
          <div className="flex flex-wrap md:flex-nowrap gap-8 items-stretch justify-center">
            <div className="flex-1 bg-slate-800/70 text-slate-100 rounded-2xl p-6 shadow-lg border border-cyan-900 flex flex-col">
              <h4 className="text-lg font-bold mb-2 text-cyan-300">
                Why Attend?
              </h4>
              <ul className="list-disc pl-5 text-sm md:text-base space-y-2">
                <li>Network with recruiters from top tech companies</li>
                <li>Explore job openings in Future Skills areas</li>
                <li>
                  Participate in live, on-spot interviews and shortlisting
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-slate-800/70 text-slate-100 rounded-2xl p-6 shadow-lg border border-purple-900 flex flex-col">
              <h4 className="text-lg font-bold mb-2 text-purple-300">
                For Employers
              </h4>
              <ul className="list-disc pl-5 text-sm md:text-base space-y-2">
                <li>Meet skilled graduates from different cities</li>
                <li>Showcase company and technology roles</li>
                <li>Directly interact with promising candidates</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- Grand Invite Banner --- */}
        <div className="max-w-2xl w-full bg-gradient-to-r from-blue-950/90 via-emerald-900/80 to-purple-900/90 text-white rounded-xl px-6 py-6 shadow-xl border border-blue-900 text-center mt-4 mb-8 animate-pulse-slow">
          <h3 className="text-xl font-bold mb-2 text-emerald-400">
            Be there for the Mega Inaugural Ceremony!
          </h3>
          <p className="mb-0">
            <span className="font-semibold">
              21 December 2025, 10:00 AM · FET–GKV, Haridwar
            </span>
            <br />
            <span className="text-blue-300 font-medium">
              Chief Guests: Hon'ble Vice-Chancellors of NIELIT & Gurukula Kangri
              Vishwavidyalaya
            </span>
          </p>
        </div>
      </div>

      {/* --- Animations --- */}
      <style>{`
        @keyframes gradient-move {
          0%,100%{background-position:0% 0%,100% 100%}
          50%{background-position:100% 100%,0% 0%}
        }
        @keyframes float {
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-18px);}
        }
        .animate-float {animation:float 4s ease-in-out infinite;}
        .animate-float-slow {animation:float 7s ease-in-out infinite;}
        .animate-pulse-slow {animation:pulse 3s cubic-bezier(.4,0,.6,1) infinite;}
        @keyframes glow {
          0%,100%{opacity:.5;}
          50%{opacity:1;}
        }
      `}</style>

      {/* --- About the Organizers / Additional Info --- */}
      <section className="relative z-10 w-full flex flex-col items-center mt-10 mb-12">
        {" "}
        <div className="max-w-4xl w-full rounded-2xl bg-gradient-to-tr from-slate-900/95 via-purple-950/90 to-blue-900/90 border border-indigo-900 shadow-2xl px-8 py-10 backdrop-blur-md">
          {" "}
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-emerald-400 drop-shadow">
            {" "}
            About the Organizers{" "}
          </h2>
          <div className="flex flex-col md:flex-row items-stretch gap-6">
            {/* NIELIT */}
            <div className="flex-1 bg-slate-800/90 rounded-xl p-5 shadow border border-cyan-800">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="src/assets/nielit_Logo.png"
                  alt="NIELIT"
                  className="h-10 w-auto object-contain rounded bg-white/80 p-1"
                />
                <span className="font-bold text-cyan-300 text-lg">NIELIT</span>
              </div>
              <p className="text-slate-200 text-sm">
                The{" "}
                <span className="font-semibold text-cyan-200">
                  National Institute of Electronics & Information Technology
                  (NIELIT)
                </span>{" "}
                is an autonomous society under the Ministry of Electronics &
                Information Technology, Government of India, with over 56
                Centres, 725 Accredited Centres, and nearly 9,000 Facilitation
                Centres nationwide.
              </p>
              <p className="mt-2 text-slate-400 text-xs">
                NIELIT is a leader in “Future Skills” training, having educated
                more than 1 crore candidates in areas like Cloud Computing,
                Blockchain, Data Science, IoT, and Cybersecurity.
              </p>
            </div>

            {/* GKV */}
            <div className="flex-1 bg-slate-800/90 rounded-xl p-5 shadow border border-purple-800">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="src/assets/gurukul_logo.png"
                  alt="GKV"
                  className="h-10 w-auto object-contain rounded bg-white/90 p-1"
                />
                <span className="font-bold text-purple-300 text-lg">GKV</span>
              </div>
              <p className="text-slate-200 text-sm">
                <span className="font-semibold text-purple-200">
                  Gurukula Kangri (Deemed to be University)
                </span>
                , founded on 4 March 1902 by Swami Shraddhanandaji, is an
                eminent institution in Haridwar that blends traditional
                knowledge with modern Engineering and Technology excellence
                through its Faculty of Engineering & Technology (FET-GKV).
              </p>
              <p className="mt-2 text-slate-400 text-xs">
                The university is committed to holistic education and nurturing
                future-ready graduates, offering 50+ UG, PG, PhD, and Diploma
                programmes.
              </p>
            </div>

            {/* QCFI */}
            <div className="flex-1 bg-slate-800/90 rounded-xl p-5 shadow border border-emerald-800">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="https://imgs.search.brave.com/xtzjXcmhVhekCQREuKXh6Y3stAANiPhx1i8BkhfCL54/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cWNmaXRyYWluaW5n/LmNvbS9pbWFnZXMv/bG9nby5wbmc"
                  alt="QCFI"
                  className="h-10 w-auto object-contain bg-white/90 p-1 rounded"
                />
                <span className="font-bold text-emerald-300 text-lg">QCFI</span>
              </div>
              <p className="text-slate-200 text-sm">
                <span className="font-semibold text-emerald-200">
                  Quality Circle Forum of India (QCFI)
                </span>{" "}
                is a pioneer in promoting Quality Concepts and people
                involvement for industry improvement, supporting training,
                workshops, and events that foster innovation and continuous
                improvement.
              </p>
              <p className="mt-2 text-slate-400 text-xs">
                QCFI helps build a culture of quality, teamwork, and leadership
                across Indian enterprises and academia.
              </p>
            </div>
          </div>
          {/* Highlight achievements */}
          <div className="mt-8 flex flex-wrap justify-around gap-6">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-cyan-300">1 Crore+</span>
              <span className="text-slate-200 text-xs">Candidates Trained</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-purple-300">56</span>
              <span className="text-slate-200 text-xs">NIELIT Centres</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-emerald-300">725+</span>
              <span className="text-slate-200 text-xs">Accredited Centres</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-blue-300">9000+</span>
              <span className="text-slate-200 text-xs">
                Facilitation Centres
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-indigo-300">
                Future Skills
              </span>
              <span className="text-slate-200 text-xs">
                Cloud, AI, IoT, Cybersecurity, Blockchain
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Map Location Section --- */}
      <section className="relative z-10 w-full flex flex-col items-center mt-8 mb-16">
        <div className="max-w-3xl w-full rounded-2xl bg-white/95 shadow-xl border border-cyan-300 px-8 py-8 flex flex-col items-center">
          <div className="flex items-center mb-4">
            <svg
              className="w-8 h-8 text-cyan-500 mr-3"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c1.104 0 2-.897 2-2s-.896-2-2-2-2 .897-2 2 .896 2 2 2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 22s8-5.334 8-10A8 8 0 0 0 4 12c0 4.666 8 10 8 10z"
              />
            </svg>
            <h2 className="text-2xl font-bold text-cyan-800">
              Find Us: Event Location
            </h2>
          </div>
          {/* Google Map Embed */}
          <div className="w-full h-64 rounded-xl overflow-hidden shadow mb-6 border-2 border-cyan-200">
            <iframe
              title="FET–GKV, Haridwar"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.5599037537762!2d78.10285177540167!3d29.935675974930916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390948895c5e59a3%3A0xf1d1fabe26b62956!2sFET%2C%20Gurukula%20Kangri%20(Deemed%20to%20be%20University)%2C%20Haridwar%2C%20Uttarakhand%20249104!5e0!3m2!1sen!2sin!4v1700898594377!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mb-4 text-slate-700 text-center">
            <span className="font-semibold text-emerald-700">Venue:</span>{" "}
            Faculty of Engineering & Technology (FET), Gurukula Kangri
            Vishwavidyalaya Bahadarabad ByPass, Haridwar, Uttarakhand 249404.
          </p>
          <a
            href="https://maps.app.goo.gl/RBBK4Ye8s8bA5p516"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white font-bold px-6 py-3 rounded-xl shadow hover:opacity-90 hover:scale-105 transition transform"
          >
            Open in Google Maps
          </a>
        </div>
      </section>
    </div>
  );
}
