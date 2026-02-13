# JobFinder AI

JobFinder AI is a React 19 + Next.js 15 experience that orchestrates OAuth connections
(Google, LinkedIn, 104 人力銀行), captures structured profile data through an AI-guided
chat, generates multilingual resumes, and launches job-matching outreach.

## Stack snapshot

- **Frontend**: Next.js App Router (React 19) + Tailwind CSS
- **Hosting**: Firebase Hosting with GCP serverless functions
- **Auth**: Firebase Auth (Google, LinkedIn via custom OIDC)
- **Data**: Firestore for structured profile storage
- **AI**: OpenAI API for chat, resume generation, and match scoring

## Development

```bash
npm install
npm run dev
```

## Planned modules

- OAuth connection orchestration and profile import
- AI-driven interactive chat for structured intake
- Multilingual resume builder with export-ready templates
- Job matching + outreach automation with scoring
