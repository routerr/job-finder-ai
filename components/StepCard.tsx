interface StepCardProps {
  title: string;
  description: string;
  step: string;
}

export function StepCard({ title, description, step }: StepCardProps) {
  return (
    <div className="rounded-3xl border border-surface1/70 bg-mantle/70 p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mauve/25 text-sm font-semibold text-mauve">
          {step}
        </span>
        <h3 className="text-base font-semibold text-text">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-subtext1">{description}</p>
    </div>
  );
}
