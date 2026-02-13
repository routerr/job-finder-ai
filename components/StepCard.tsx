interface StepCardProps {
  title: string;
  description: string;
  step: string;
}

export function StepCard({ title, description, step }: StepCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-aurora/30 text-sm font-semibold text-aurora">
          {step}
        </span>
        <h3 className="text-base font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-mist/80">{description}</p>
    </div>
  );
}
