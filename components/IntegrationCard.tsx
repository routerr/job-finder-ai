import type { ReactNode } from 'react';

interface IntegrationCardProps {
  name: string;
  status: string;
  description: string;
  actionLabel: string;
  oauthLabel: string;
  icon: ReactNode;
}

export function IntegrationCard({
  name,
  status,
  description,
  actionLabel,
  oauthLabel,
  icon,
}: IntegrationCardProps) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-3xl border border-surface1/70 bg-mantle/70 p-6 shadow-glow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-surface0/70 text-xl">
            {icon}
          </div>
          <div>
            <p className="text-lg font-semibold text-text">{name}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-blue">{status}</p>
          </div>
        </div>
        <span className="rounded-full bg-surface0/70 px-3 py-1 text-xs text-subtext1">
          {oauthLabel}
        </span>
      </div>
      <p className="text-sm text-subtext1">{description}</p>
      <button className="mt-auto rounded-full border border-surface1 px-4 py-2 text-sm font-semibold text-text transition hover:border-blue hover:text-blue">
        {actionLabel}
      </button>
    </div>
  );
}
