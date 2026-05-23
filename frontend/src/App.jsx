const stats = [
  { label: 'Current streak', value: '12 days', detail: '+3 from last week' },
  { label: 'Commits tracked', value: '248', detail: 'Across 18 repositories' },
  { label: 'Motivation score', value: '91', detail: 'Rising steadily' },
]

const timeline = [
  { day: 'Mon', commits: 4 },
  { day: 'Tue', commits: 7 },
  { day: 'Wed', commits: 3 },
  { day: 'Thu', commits: 9 },
  { day: 'Fri', commits: 5 },
  { day: 'Sat', commits: 8 },
  { day: 'Sun', commits: 6 },
]

function App() {
  return (
    <main className="min-h-screen bg-hero-grid text-ink">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-10">
        <header className="flex items-center justify-between rounded-full border border-black/5 bg-white/70 px-5 py-3 shadow-sm backdrop-blur">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-pine">GitHub Streak App</p>
            <h1 className="text-sm font-medium text-slate-700">Code history becomes momentum</h1>
          </div>
          <button className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-ember">
            Sign in with GitHub
          </button>
        </header>

        <div className="grid flex-1 gap-10 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-ember/20 bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-ember shadow-[0_0_0_6px_rgba(255,95,49,0.12)]" />
              Track commits, streaks, and daily momentum
            </div>

            <div className="space-y-5">
              <h2 className="max-w-2xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Every commit is a signal that you are moving forward.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                GitHub のコミット状況を集計し、ストリークと可視化で毎日のモチベーションへ変える。
                OAuth ログイン、履歴の集計、将来の通知機能まで見据えた起点画面です。
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-ember px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:translate-y-[-1px] hover:bg-[#ff4c1e]">
                Start tracking
              </button>
              <button className="rounded-full border border-black/10 bg-white/80 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ember/40 hover:text-ember">
                See roadmap
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <article key={stat.label} className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-sm backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
                  <p className="mt-3 text-3xl font-black text-ink">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-500">{stat.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-[2rem] bg-ember/10 blur-3xl" />
            <section className="overflow-hidden rounded-[2rem] border border-black/5 bg-[#111827] p-6 text-white shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-emberSoft">Live preview</p>
                  <h3 className="mt-2 text-2xl font-bold">Streak dashboard</h3>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-emerald-200">Syncing</span>
              </div>

              <div className="mt-8 rounded-3xl bg-white/5 p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-slate-300">Current streak</p>
                    <p className="mt-2 text-5xl font-black">12</p>
                  </div>
                  <p className="text-sm text-slate-300">days in a row</p>
                </div>

                <div className="mt-6 grid grid-cols-7 gap-2">
                  {timeline.map((item) => (
                    <div key={item.day} className="flex flex-col items-center gap-2">
                      <div className="flex h-28 w-full items-end rounded-2xl bg-black/20 p-2">
                        <div
                          className="w-full rounded-xl bg-gradient-to-t from-ember to-[#ffb08e]"
                          style={{ height: `${Math.min(100, item.commits * 10)}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-300">{item.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/8 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">GitHub OAuth</p>
                  <p className="mt-2 text-base font-semibold">Secure sign-in flow</p>
                </div>
                <div className="rounded-2xl bg-white/8 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Deployment</p>
                  <p className="mt-2 text-base font-semibold">Vercel + Render + Neon</p>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default App
