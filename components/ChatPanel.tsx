const prompts = [
  {
    role: 'Assistant',
    message: 'Welcome! Which roles are you targeting right now?',
  },
  {
    role: 'You',
    message: 'Product manager, AI analyst, and growth strategy.',
  },
  {
    role: 'Assistant',
    message: 'Got it. Select the industries you feel strongest in.',
  },
];

const options = ['SaaS', 'FinTech', 'EdTech', 'Healthcare', 'AI Tools'];

export function ChatPanel() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-mist/70">AI Interviewer</p>
          <h3 className="text-xl font-semibold">Profile discovery</h3>
        </div>
        <span className="rounded-full bg-aurora/20 px-3 py-1 text-xs text-aurora">
          Live
        </span>
      </div>
      <div className="mt-5 space-y-4">
        {prompts.map((prompt) => (
          <div
            key={`${prompt.role}-${prompt.message}`}
            className={`rounded-2xl px-4 py-3 text-sm ${
              prompt.role === 'Assistant'
                ? 'bg-white/10 text-mist'
                : 'bg-aurora/20 text-white'
            }`}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-mist/60">
              {prompt.role}
            </p>
            <p className="mt-2 text-sm text-white/90">{prompt.message}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-skyline hover:text-skyline"
          >
            {option}
          </button>
        ))}
      </div>
      <button className="mt-6 w-full rounded-2xl bg-skyline/90 py-3 text-sm font-semibold text-midnight transition hover:bg-skyline">
        Continue with AI chat
      </button>
    </div>
  );
}
