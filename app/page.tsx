import { ChatPanel } from '@/components/ChatPanel';
import { IntegrationCard } from '@/components/IntegrationCard';
import { StepCard } from '@/components/StepCard';

const integrations = [
  {
    name: 'Google',
    status: 'Ready',
    description:
      'Sync education history, certifications, and sign-in with Google OAuth.',
    actionLabel: 'Connect Google',
    icon: '🔐',
  },
  {
    name: 'LinkedIn',
    status: 'Queued',
    description:
      'Import experience highlights, endorsements, and apply with saved profiles.',
    actionLabel: 'Connect LinkedIn',
    icon: '🔗',
  },
  {
    name: '104 人力銀行',
    status: 'Queued',
    description:
      'Keep local profiles aligned and push ATS-ready resume updates.',
    actionLabel: 'Connect 104',
    icon: '🧭',
  },
];

const steps = [
  {
    step: '01',
    title: 'Profile discovery chat',
    description:
      'AI asks structured questions with multiple-choice options to capture your full story.',
  },
  {
    step: '02',
    title: 'Resume generation',
    description:
      'Compose concise, elegant resumes in multiple languages with clean typography.',
  },
  {
    step: '03',
    title: 'Auto update services',
    description:
      'Keep every integrated job board profile in sync with one approval flow.',
  },
  {
    step: '04',
    title: 'Launch smart search',
    description:
      'One-click outreach with AI-ranked job matches, fit scores, and email drafts.',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#1f2a44_0%,_#0b1220_45%)] px-6 py-16 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
        <header className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-mist">
              AI-powered job concierge
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Build once, apply everywhere with an AI agent that never sleeps.
            </h1>
            <p className="text-base text-mist/80">
              JobFinder AI connects Google, LinkedIn, 104 人力銀行, and more to craft
              beautiful resumes, update profiles, and launch personalized outreach at
              scale.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-aurora px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-aurora/90">
                Start onboarding
              </button>
              <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-skyline hover:text-skyline">
                View architecture
              </button>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Platform readiness</h2>
            <p className="mt-2 text-sm text-mist/70">
              Firebase hosting with serverless GCP functions, React 19 UI, and an AI
              core powered by OpenAI APIs.
            </p>
            <div className="mt-5 space-y-4">
              {[
                'Realtime OAuth orchestration',
                'Structured profile storage',
                'AI resume variants',
                'Edge-safe job matching',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-midnight/60 px-4 py-3"
                >
                  <span className="text-sm text-white/80">{item}</span>
                  <span className="text-xs text-skyline">Active</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold">Connected services</h2>
            <p className="mt-2 text-sm text-mist/70">
              Choose which networks to sync. Every connection feeds a unified AI profile.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {integrations.map((integration) => (
                <IntegrationCard key={integration.name} {...integration} />
              ))}
            </div>
          </div>
          <ChatPanel />
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.6fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">Launch control</h2>
            <p className="mt-2 text-sm text-mist/70">
              Review AI suggestions, adjust fit scoring, and launch a batch of tailored
              applications.
            </p>
            <div className="mt-6 space-y-3">
              {[
                { label: 'Match score threshold', value: '82%+' },
                { label: 'Preferred location', value: 'Taipei · Hybrid' },
                { label: 'Availability', value: 'Immediate' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span className="text-sm text-mist/80">{item.label}</span>
                  <span className="text-sm font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full rounded-2xl bg-white text-midnight py-3 text-sm font-semibold transition hover:bg-mist">
              One-click launch
            </button>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">How it works</h2>
            <p className="mt-2 text-sm text-mist/70">
              A guided flow to collect information, generate resumes, and dispatch
              applications automatically.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {steps.map((step) => (
                <StepCard key={step.step} {...step} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
