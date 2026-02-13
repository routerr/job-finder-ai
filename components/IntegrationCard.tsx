import type { ReactNode } from 'react';

interface IntegrationCardProps {
  name: string;
  status: string;
  description: string;
  actionLabel: string;
  icon: ReactNode;
}

export function IntegrationCard({
  name,
  status,
  description,
  actionLabel,
  icon,
}: IntegrationCardProps) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-xl">
            {icon}
          </div>
          <div>
            <p className="text-lg font-semibold">{name}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-skyline">{status}</p>
          </div>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-mist">OAuth</span>
      </div>
      <p className="text-sm text-mist/80">{description}</p>
      <button className="mt-auto rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-skyline hover:text-skyline">
        {actionLabel}
      </button>
    </div>
  );
}
