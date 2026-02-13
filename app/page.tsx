'use client';

import { useEffect, useState } from 'react';
import { ChatPanel } from '@/components/ChatPanel';
import { IntegrationCard } from '@/components/IntegrationCard';
import { StepCard } from '@/components/StepCard';

type Locale = 'zh-TW' | 'en';

interface IntegrationItem {
  name: string;
  status: string;
  description: string;
  actionLabel: string;
  oauthLabel: string;
  icon: string;
}

interface StepItem {
  step: string;
  title: string;
  description: string;
}

interface LaunchItem {
  label: string;
  value: string;
}

interface ChatPrompt {
  role: string;
  speaker: 'assistant' | 'user';
  message: string;
}

interface LocaleContent {
  languageLabel: string;
  badge: string;
  heading: string;
  intro: string;
  startButton: string;
  architectureButton: string;
  readinessTitle: string;
  readinessDescription: string;
  readinessItems: string[];
  activeLabel: string;
  connectedServicesTitle: string;
  connectedServicesDescription: string;
  launchControlTitle: string;
  launchControlDescription: string;
  oneClickLaunch: string;
  howItWorksTitle: string;
  howItWorksDescription: string;
  integrations: IntegrationItem[];
  steps: StepItem[];
  launchItems: LaunchItem[];
  chat: {
    kicker: string;
    title: string;
    liveLabel: string;
    prompts: ChatPrompt[];
    options: string[];
    continueLabel: string;
  };
}

const contentByLocale: Record<Locale, LocaleContent> = {
  'zh-TW': {
    languageLabel: '語言',
    badge: 'AI 驅動求職管家',
    heading: '建立一次職涯檔案，AI 幫你同步投遞到所有平台。',
    intro:
      'JobFinder AI 串接 Google、LinkedIn、104 人力銀行等服務，自動產生高質感履歷、更新個人檔案，並大規模啟動個人化職缺投遞。',
    startButton: '開始建立履歷',
    architectureButton: '查看系統架構',
    readinessTitle: '平台就緒狀態',
    readinessDescription:
      'Firebase Hosting、GCP 無伺服器函式、React 19 介面，以及 OpenAI API 驅動的 AI 核心已完成整合。',
    readinessItems: [
      '即時 OAuth 流程編排',
      '結構化個人資料儲存',
      'AI 履歷多版本生成',
      '邊緣可部署職缺匹配',
    ],
    activeLabel: '啟用中',
    connectedServicesTitle: '已連接服務',
    connectedServicesDescription:
      '選擇要同步的平台，每一筆連線都會匯入同一份 AI 求職檔案。',
    launchControlTitle: '投遞控制台',
    launchControlDescription:
      '檢視 AI 建議、調整匹配分數門檻，並一鍵送出客製化求職申請。',
    oneClickLaunch: '一鍵啟動投遞',
    howItWorksTitle: '運作流程',
    howItWorksDescription:
      '以引導式流程收集資料、產出履歷，並自動分發至多個求職平台。',
    integrations: [
      {
        name: 'Google',
        status: '已就緒',
        description: '同步學經歷、證照資訊，並透過 Google OAuth 登入。',
        actionLabel: '連接 Google',
        oauthLabel: 'OAuth',
        icon: '🔐',
      },
      {
        name: 'LinkedIn',
        status: '準備中',
        description: '匯入關鍵經歷與技能背書，並使用已儲存檔案快速投遞。',
        actionLabel: '連接 LinkedIn',
        oauthLabel: 'OAuth',
        icon: '🔗',
      },
      {
        name: '104 人力銀行',
        status: '準備中',
        description: '同步在地求職檔案，持續推送 ATS 友善履歷更新。',
        actionLabel: '連接 104',
        oauthLabel: 'OAuth',
        icon: '🧭',
      },
    ],
    steps: [
      {
        step: '01',
        title: '職涯探索對談',
        description: 'AI 以結構化題目與選項提問，完整捕捉你的求職故事。',
      },
      {
        step: '02',
        title: '履歷智能生成',
        description: '快速產生多語系、排版乾淨且重點明確的專業履歷。',
      },
      {
        step: '03',
        title: '服務自動更新',
        description: '一次審核，所有連接平台的個人檔案同步更新。',
      },
      {
        step: '04',
        title: '智能搜尋啟動',
        description: '一鍵觸發 AI 排序職缺、匹配分數與推薦聯絡內容。',
      },
    ],
    launchItems: [
      { label: '匹配分數門檻', value: '82%+' },
      { label: '偏好地點', value: '台北 · 混合辦公' },
      { label: '到職時間', value: '可立即到職' },
    ],
    chat: {
      kicker: 'AI 面談助理',
      title: '個人檔案探索',
      liveLabel: '即時',
      prompts: [
        {
          role: '助理',
          speaker: 'assistant',
          message: '歡迎！你目前鎖定哪些職位呢？',
        },
        {
          role: '你',
          speaker: 'user',
          message: '產品經理、AI 分析與成長策略。',
        },
        {
          role: '助理',
          speaker: 'assistant',
          message: '了解，請選擇你最有把握的產業。',
        },
      ],
      options: ['SaaS', '金融科技', '教育科技', '醫療健康', 'AI 工具'],
      continueLabel: '繼續 AI 對談',
    },
  },
  en: {
    languageLabel: 'Language',
    badge: 'AI-powered job concierge',
    heading: 'Build your profile once and let AI apply everywhere for you.',
    intro:
      'JobFinder AI connects Google, LinkedIn, 104 Job Bank, and more to craft polished resumes, sync profiles, and launch personalized outreach at scale.',
    startButton: 'Start onboarding',
    architectureButton: 'View architecture',
    readinessTitle: 'Platform readiness',
    readinessDescription:
      'Firebase hosting, serverless GCP functions, a React 19 UI, and an OpenAI-powered AI core are already integrated.',
    readinessItems: [
      'Realtime OAuth orchestration',
      'Structured profile storage',
      'AI resume variants',
      'Edge-safe job matching',
    ],
    activeLabel: 'Active',
    connectedServicesTitle: 'Connected services',
    connectedServicesDescription:
      'Choose the networks you want to sync. Every connection feeds one unified AI profile.',
    launchControlTitle: 'Launch control',
    launchControlDescription:
      'Review AI suggestions, tune fit scoring thresholds, and launch tailored applications in one batch.',
    oneClickLaunch: 'One-click launch',
    howItWorksTitle: 'How it works',
    howItWorksDescription:
      'A guided flow to collect your information, generate resumes, and dispatch applications automatically.',
    integrations: [
      {
        name: 'Google',
        status: 'Ready',
        description:
          'Sync education history, certifications, and sign-in with Google OAuth.',
        actionLabel: 'Connect Google',
        oauthLabel: 'OAuth',
        icon: '🔐',
      },
      {
        name: 'LinkedIn',
        status: 'Queued',
        description:
          'Import experience highlights, endorsements, and apply with saved profiles.',
        actionLabel: 'Connect LinkedIn',
        oauthLabel: 'OAuth',
        icon: '🔗',
      },
      {
        name: '104 Job Bank',
        status: 'Queued',
        description:
          'Keep local profiles aligned and push ATS-ready resume updates.',
        actionLabel: 'Connect 104',
        oauthLabel: 'OAuth',
        icon: '🧭',
      },
    ],
    steps: [
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
    ],
    launchItems: [
      { label: 'Match score threshold', value: '82%+' },
      { label: 'Preferred location', value: 'Taipei · Hybrid' },
      { label: 'Availability', value: 'Immediate' },
    ],
    chat: {
      kicker: 'AI Interviewer',
      title: 'Profile discovery',
      liveLabel: 'Live',
      prompts: [
        {
          role: 'Assistant',
          speaker: 'assistant',
          message: 'Welcome! Which roles are you targeting right now?',
        },
        {
          role: 'You',
          speaker: 'user',
          message: 'Product manager, AI analyst, and growth strategy.',
        },
        {
          role: 'Assistant',
          speaker: 'assistant',
          message: 'Got it. Select the industries you feel strongest in.',
        },
      ],
      options: ['SaaS', 'FinTech', 'EdTech', 'Healthcare', 'AI Tools'],
      continueLabel: 'Continue with AI chat',
    },
  },
};

function detectPreferredLocale(): Locale {
  if (typeof navigator === 'undefined') {
    return 'zh-TW';
  }

  const browserLocales = [navigator.language, ...(navigator.languages ?? [])]
    .filter(Boolean)
    .map((locale) => locale.toLowerCase());

  if (browserLocales.some((locale) => locale.startsWith('zh'))) {
    return 'zh-TW';
  }

  if (browserLocales.some((locale) => locale.startsWith('en'))) {
    return 'en';
  }

  return 'zh-TW';
}

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>('zh-TW');

  useEffect(() => {
    setLocale(detectPreferredLocale());
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === 'zh-TW' ? 'zh-Hant' : 'en';
  }, [locale]);

  const content = contentByLocale[locale];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#313244_0%,_#1e1e2e_45%,_#11111b_100%)] px-6 py-16 text-text">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
        <div className="flex justify-end">
          <div className="inline-flex items-center gap-2 rounded-full border border-surface1/70 bg-mantle/70 p-1">
            <span className="px-2 text-xs uppercase tracking-[0.2em] text-subtext0">
              {content.languageLabel}
            </span>
            <button
              type="button"
              onClick={() => setLocale('zh-TW')}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                locale === 'zh-TW'
                  ? 'bg-mauve text-base'
                  : 'text-subtext1 hover:text-text'
              }`}
            >
              繁中
            </button>
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                locale === 'en' ? 'bg-mauve text-base' : 'text-subtext1 hover:text-text'
              }`}
            >
              English
            </button>
          </div>
        </div>

        <header className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-surface1/70 bg-mantle/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-subtext1">
              {content.badge}
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-text sm:text-5xl">
              {content.heading}
            </h1>
            <p className="text-base text-subtext1">{content.intro}</p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-mauve px-6 py-3 text-sm font-semibold text-base shadow-glow transition hover:bg-mauve/90">
                {content.startButton}
              </button>
              <button className="rounded-full border border-surface1 px-6 py-3 text-sm font-semibold text-subtext1 transition hover:border-blue hover:text-blue">
                {content.architectureButton}
              </button>
            </div>
          </div>
          <div className="rounded-3xl border border-surface1/70 bg-mantle/70 p-6">
            <h2 className="text-lg font-semibold text-text">{content.readinessTitle}</h2>
            <p className="mt-2 text-sm text-subtext1">{content.readinessDescription}</p>
            <div className="mt-5 space-y-4">
              {content.readinessItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-surface1/70 bg-base/70 px-4 py-3"
                >
                  <span className="text-sm text-subtext1">{item}</span>
                  <span className="text-xs text-blue">{content.activeLabel}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-text">
              {content.connectedServicesTitle}
            </h2>
            <p className="mt-2 text-sm text-subtext1">
              {content.connectedServicesDescription}
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {content.integrations.map((integration) => (
                <IntegrationCard key={integration.name} {...integration} />
              ))}
            </div>
          </div>
          <ChatPanel {...content.chat} />
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.6fr_1fr]">
          <div className="rounded-3xl border border-surface1/70 bg-mantle/70 p-6">
            <h2 className="text-2xl font-semibold text-text">{content.launchControlTitle}</h2>
            <p className="mt-2 text-sm text-subtext1">{content.launchControlDescription}</p>
            <div className="mt-6 space-y-3">
              {content.launchItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-surface1/70 bg-base/70 px-4 py-3"
                >
                  <span className="text-sm text-subtext1">{item.label}</span>
                  <span className="text-sm font-semibold text-text">{item.value}</span>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full rounded-2xl bg-text py-3 text-sm font-semibold text-base transition hover:bg-subtext1">
              {content.oneClickLaunch}
            </button>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-text">{content.howItWorksTitle}</h2>
            <p className="mt-2 text-sm text-subtext1">{content.howItWorksDescription}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {content.steps.map((step) => (
                <StepCard key={step.step} {...step} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
