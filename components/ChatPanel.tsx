interface ChatPrompt {
  role: string;
  speaker: 'assistant' | 'user';
  message: string;
}

interface ChatPanelProps {
  kicker: string;
  title: string;
  liveLabel: string;
  prompts: ChatPrompt[];
  options: string[];
  continueLabel: string;
}

export function ChatPanel({
  kicker,
  title,
  liveLabel,
  prompts,
  options,
  continueLabel,
}: ChatPanelProps) {
  return (
    <div className="rounded-3xl border border-surface1/70 bg-mantle/70 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-subtext0">{kicker}</p>
          <h3 className="text-xl font-semibold text-text">{title}</h3>
        </div>
        <span className="rounded-full bg-mauve/20 px-3 py-1 text-xs text-mauve">
          {liveLabel}
        </span>
      </div>
      <div className="mt-5 space-y-4">
        {prompts.map((prompt) => (
          <div
            key={`${prompt.role}-${prompt.message}`}
            className={`rounded-2xl px-4 py-3 text-sm ${
              prompt.speaker === 'assistant'
                ? 'bg-surface0/70 text-subtext1'
                : 'bg-mauve/25 text-text'
            }`}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-overlay1">
              {prompt.role}
            </p>
            <p className="mt-2 text-sm text-text">{prompt.message}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            className="rounded-full border border-surface1 px-4 py-2 text-xs font-semibold text-subtext1 transition hover:border-blue hover:text-blue"
          >
            {option}
          </button>
        ))}
      </div>
      <button className="mt-6 w-full rounded-2xl bg-blue py-3 text-sm font-semibold text-base transition hover:bg-blue/90">
        {continueLabel}
      </button>
    </div>
  );
}
