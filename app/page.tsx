"use client";

import { useState, useEffect, useRef } from "react";

/* ─── Scroll Progress Hook ──────────────────── */
function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress(h.scrollTop / (h.scrollHeight - h.clientHeight));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

/* ─── Fade-in on Scroll Hook ────────────────── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("fade-in-visible"); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useFadeIn();
  return <div ref={ref} className={`fade-in ${className}`}>{children}</div>;
}

const APP_LINKS = {
  compass: "https://foundrycompass.com",
  flux: "https://foundrynorthflux.com",
  forge: "https://foundrynorthforge.com",
  docs: "https://stribdoccenter.com",
  fnDocs: "https://fn-docs.vercel.app",
};

/* ─── Feature Card (expandable accordion) ──── */
function FeatureCard({
  icon,
  title,
  description,
  details,
}: {
  icon: string;
  title: string;
  description: string;
  details?: string[];
}) {
  const [expanded, setExpanded] = useState(false);
  const hasDetails = details && details.length > 0;

  return (
    <div
      className={`card-base group transition-all duration-300 ${hasDetails ? "cursor-pointer card-hover" : ""}`}
      onClick={hasDetails ? () => setExpanded(!expanded) : undefined}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="text-2xl mb-3">{icon}</div>
          <h4 className="text-sm font-semibold text-foreground mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed m-0">{description}</p>
        </div>
        {hasDetails && (
          <span
            className={`text-muted-foreground text-xs mt-1 transition-transform duration-300 flex-shrink-0 ${expanded ? "rotate-180" : ""}`}
            aria-hidden
          >
            ▾
          </span>
        )}
      </div>
      {hasDetails && (
        <div
          className={`detail-expand ${expanded ? "detail-expand-open" : ""}`}
        >
          <div className="pt-3 mt-3 border-t border-card-border space-y-2">
            {details.map((detail, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-primary mt-0.5 flex-shrink-0 text-xs">●</span>
                <span className="text-sm text-muted-foreground leading-relaxed">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Value Card ────────────────────────────── */
function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="card-base card-hover relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none rounded-xl" />
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed m-0">{description}</p>
    </div>
  );
}

/* ─── App Section ───────────────────────────── */
function AppSection({
  id,
  name,
  tagline,
  pitch,
  features,
  appUrl,
  children,
}: {
  id: string;
  name: string;
  tagline: string;
  pitch: string;
  features: { icon: string; title: string; description: string; details?: string[] }[];
  appUrl: string;
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20 border-t border-border">
      <FadeIn className="section-container">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-2">{name}</h2>
          <p className="text-xl text-primary font-medium mb-4">{tagline}</p>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">{pitch}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
        {children}
        <a
          href={appUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-shimmer inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-lg text-primary font-medium hover:bg-primary/20 hover:border-primary/50 transition-all no-underline"
        >
          Open {name} <span aria-hidden>→</span>
        </a>
      </FadeIn>
    </section>
  );
}

/* ─── Flow Step ─────────────────────────────── */
function FlowStep({ from, to, description }: { from: string; to: string; description: string }) {
  return (
    <div className="flex items-start gap-4 py-4">
      <div className="flex-shrink-0 flex items-center gap-2">
        <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded text-primary text-sm font-medium">
          {from}
        </span>
        <span className="text-primary" aria-hidden>→</span>
        <span className="px-3 py-1 bg-secondary border border-card-border rounded text-secondary-foreground text-sm font-medium">
          {to}
        </span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed m-0 pt-0.5">{description}</p>
    </div>
  );
}

/* ═══ FEATURE DETAIL DATA ═══════════════════════ */

const COMPASS_FEATURES: { icon: string; title: string; description: string; details: string[] }[] = [
  {
    icon: "🔍",
    title: "AI-Powered Discovery & Research",
    description: "Prospect research, competitive analysis, and market intelligence powered by AI.",
    details: [
      "Gemini 2.0 Flash profiles any business from just a name and city — category, services, target customer, and 5-7 hyper-local competitors within 10 miles",
      "Each competitor gets a threat score (0-100) weighing distance, reviews, digital presence, and market positioning (Budget → Luxury)",
      "Digital maturity scoring crawls the prospect's site for GA4, GTM, Meta Pixel, Google Ads, TikTok — produces a 0-100 score with specific gap analysis",
      "DataForSEO + Exa.ai layer live SERP and paid search signals on top of AI analysis",
    ],
  },
  {
    icon: "📋",
    title: "Media Plan Builder",
    description: "Build plans from the product catalog with governed rates and real-time availability.",
    details: [
      "Generates three statistically distinct plans (A/B/C) using GPT-4o — verified via Jensen-Shannon distance calculation, auto-repaired if too similar",
      "Every allocation references validated products from the live catalog (up to 80 products with KPIs and pricing injected into the prompt)",
      "Rate governance enforces margin floors automatically via a four-tier hierarchy (product → category → family → global)",
      "SLA gates block orders if flights are too close — auto-creates exception tickets with escalation levels",
    ],
  },
  {
    icon: "📊",
    title: "Proposal & Deck Generation",
    description: "Generate client-ready proposals and presentations directly from plan and order data.",
    details: [
      "Product-driven slide assembly from a template registry — required slides auto-inject, product slides group by family with dividers",
      "All content pre-populated from plan data and CRM context (client name, objectives, investment, rep contact info)",
      "RFP parsing and auto-response: upload an RFP, get a structured response mapped to specific product recommendations",
      "Final decks rendered to PDF, stored in R2, delivered via time-limited presigned URLs",
    ],
  },
  {
    icon: "📦",
    title: "Order Management & Tracking",
    description: "Full order lifecycle with defined statuses, line items, and fulfillment visibility.",
    details: [
      "Formal state machine: draft → pending_approval → approved → sent → active → completed — every transition runs validation gates",
      'On "approved": tentative inventory holds auto-confirm, locking calendar-based products',
      'On "sent": six systems fire simultaneously — HubSpot line items, fulfillment tickets, creative briefs to Forge, deal stage sync, Flux events, and Datasys campaign provisioning',
      "Optimistic concurrency prevents double-transitions; amendments create versioned history",
    ],
  },
  {
    icon: "🏷️",
    title: "Product Catalog & Rate Governance",
    description: "Centralized catalog with rate cards, exceptions, and approval workflows.",
    details: [
      "Rate exception engine evaluates every deviation against four-tier thresholds — within tolerance auto-approves, larger deviations route to L0/L1/L2 escalation",
      "Minimum margin floors reject pricing that would breach profitability before it reaches a rep",
      "Catalog syncs with HubSpot products — rates, KPIs, and targeting constraints live in one place",
    ],
  },
  {
    icon: "🔗",
    title: "HubSpot Deal & Fulfillment Sync",
    description: "Bidirectional sync with HubSpot deals, contacts, and fulfillment pipeline tickets.",
    details: [
      "Trigger.dev task runs in isolated cloud environment — pre-fetches full order payload (metadata, line items, rates, margins, targeting, Datasys IDs)",
      "Deal stage auto-progresses to mirror Compass order status (draft → appointmentscheduled, sent → presentationscheduled, completed → closedwon)",
      "Timeline events log every action to the CRM record — status changes, hold confirmations, rate exceptions",
      "Sync health monitoring tracks error rates by operation type, fires Slack alerts when thresholds exceed",
    ],
  },
];

const FLUX_FEATURES: { icon: string; title: string; description: string; details: string[] }[] = [
  {
    icon: "📊",
    title: "Fulfillment Command Center",
    description: "Kanban board with SLA tracking, health scoring, and pipeline summary.",
    details: [
      "Composite health score (0-100) across five weighted factors: SLA compliance (30 pts), timeline alignment (25 pts), creative readiness (20 pts), change request impact (15 pts), and stage velocity (10 pts)",
      "SLA tracking uses business days with per-project profile overrides — four-level resolution chain (ticket → project → org → fallback)",
      "Timeline alignment checks whether a campaign's stage matches its launch proximity — catches slow-movers before they miss launch, not after",
      'Claude AI generates actionable health summaries on at-risk tickets ("Creative pending 6 days, campaign launches Thursday — escalate now")',
    ],
  },
  {
    icon: "📈",
    title: "Sales Forecasting & Deal Confidence",
    description: "AI-scored deal confidence and pipeline views from HubSpot activity data.",
    details: [
      "Six-bucket deterministic scoring engine (0-100): HubSpot stage probability, activity recency, Compass order linkage, deal velocity, temporal pressure, and rep historical win rate",
      'Every point is auditable with a human-readable reason ("Active 3d ago (+18)", "Pending rate approvals: 2 (-4)")',
      "AE close rates computed from 12-month actuals across four deal-size tiers — with statistical fallback chain so large-deal reps aren't penalized by small-deal rates",
      "Scores write back to HubSpot as custom properties; weekly snapshots enable accuracy measurement against actual outcomes",
    ],
  },
  {
    icon: "🏗️",
    title: "Project Dashboards",
    description: "HubSpot companies as projects — tasks, deals, fulfillment, and activity in one view.",
    details: [
      "HubSpot companies map to projects via bidirectional sync — parent/child hierarchy traversed with recursive CTEs (up to 10 levels)",
      "Triage scoring surfaces prioritized action queues: critical alerts (130 pts), overdue tasks (52 pts), blocked tasks (38 pts) — sorted by urgency, not alphabet",
      "All aggregates fetched in a single parallel batch (7 concurrent queries), not N+1 — scales to hundreds of projects",
      "Data completeness badges flag gaps that could cause sync errors, with specific missing-field reasons",
    ],
  },
  {
    icon: "📡",
    title: "PR Sentinel",
    description: "Automated media monitoring with severity routing, incident management, and journalist lookup.",
    details: [
      "Trigify webhook integration monitors LinkedIn, X/Twitter, Reddit, YouTube, Instagram, TikTok, and Threads",
      "Claude Haiku classifies every mention: severity (routine → crisis), rationale, suggested action, and sentiment score",
      "Keyword role tagging (brand vs. competitor) enables Share of Voice calculation in digests",
      "Message pull-through scoring measures whether approved brand narratives appear in coverage — reported as percentage per narrative",
      "Incident lifecycle (new → investigating → responding → resolved → closed) with full activity trail, task checklists, and owner assignment",
    ],
  },
  {
    icon: "✅",
    title: "Task Boards & Morning Standups",
    description: "Project-centric Kanban task boards synced from HubSpot with standup summaries.",
    details: [
      "Personalized Slack DMs at 9 AM ET — five signal categories: launching campaigns, pending creative, active change requests, overdue tasks, and SLA breaches",
      "Subscription expansion traverses project hierarchy automatically — subscribe to a parent company, get alerts for all sub-brands",
      'Only sends if there\'s something to report — zero "all clear" spam',
      "Pending creative items include wait-time duration; change requests show type (cancel, pause, budget, date extension)",
    ],
  },
  {
    icon: "🔄",
    title: "Compass & Forge Integration",
    description: "Order events from Compass and creative outcomes from Forge flow in automatically.",
    details: [
      "Order events from Compass and creative outcomes from Forge flow in automatically via HMAC-signed event bus",
      "Fulfillment tickets created by Compass appear on the Flux board with health scoring within seconds",
      "Creative approval in Forge advances HubSpot tickets — Flux reflects the new stage instantly",
    ],
  },
];

const FORGE_FEATURES: { icon: string; title: string; description: string; details: string[] }[] = [
  {
    icon: "🤖",
    title: "AI Compliance Analysis",
    description: "3-tier, policy-based analysis — low-risk gets lighter review, high-risk gets deeper scrutiny.",
    details: [
      "Risk-scored routing to three models automatically: GPT-4.1-mini (low risk, fast screening), GPT-4.1 (standard with image support), GPT-5.1 (high risk — political, cannabis, healthcare claims — with extended reasoning)",
      "RAG-augmented policy retrieval: submission text embedded and matched against chunked publisher policies, MN statutes, FTC regulations — top 7 policy chunks injected verbatim",
      'Per-violation confidence scores with specific policy references ("FTC 16 CFR 255.5", "Minn. Stat. 325F.67")',
      "Claim extraction identifies every factual/regulated claim, categorizes it, and flags substantiation requirements",
      "Gemini 2.0 Flash performs visual QA on creative assets — CTA prominence, text density, accessibility, brand sentiment",
    ],
  },
  {
    icon: "👥",
    title: "Dual Review & Legal Escalation",
    description: "High-risk submissions require two reviewers. Legal escalation with recorded outcomes.",
    details: [
      "Political ads, MN Rising, and Obituaries automatically trigger mandatory dual review — reviewer independence enforced at the API level",
      "Conflict resolution queue for reviewer disagreements — admin issues binding decision with full audit trail",
      "Legal lock restricts decision authority to Legal Approvers only — standard reviewers get a 403",
      "Calibration mode: admins flag submissions with expected outcomes, reviewers decide blind, system scores consistency",
    ],
  },
  {
    icon: "📥",
    title: "Submission Intake",
    description: "Accept submissions via web form, email, or ad tag — all normalized into one review queue.",
    details: [
      "Three ingestion paths (web form, email, fulfillment bridge) converge to a single normalized submission — reviewers see one queue",
      "AI creative brief auto-generates on every intake: campaign goal, audience, key message, mandatories",
      "Brand profile auto-linking from HubSpot context — subsidiaries correctly attributed to parent brand",
      "Idempotent event processing prevents duplicate submissions from webhook replays",
    ],
  },
  {
    icon: "📝",
    title: "Creative Briefs from Context",
    description: "Auto-generated briefs from fulfillment context so reviewers have full background.",
    details: [
      "Auto-generated from fulfillment ticket context — campaign type, product, flight dates, special instructions",
      "AI enhances (not replaces) submitter-provided fields",
      "Slack notification fires when brief is ready — creative team has structured context before opening the submission",
    ],
  },
  {
    icon: "📜",
    title: "Affidavit Generation & Audit Trail",
    description: "Formal approval records with dated affidavits and complete activity logging.",
    details: [
      "Template-driven, publication-specific rendering: Star Tribune (ROP/display), generic newspaper, generic legal, MN Rising",
      "Automatic publication date extraction from legal notice text — no manual date entry for text-based templates",
      "Digitized signatures from R2 storage with 1-hour presigned URLs embedded in PDF",
      "12-step validation pipeline runs before any PDF is produced — no partial state on failure",
    ],
  },
  {
    icon: "🌉",
    title: "Fulfillment Bridge",
    description: "Creative needed → submission created → approved → HubSpot ticket advances automatically.",
    details: [
      'HMAC-signed event bus: Flux emits "creative needed" → Forge auto-creates submission stub — creative queue self-populates',
      "On approval, Forge advances HubSpot ticket from pending_creative → pending_fulfillment and sets creative_provided = CAMERA_READY",
      "Every status change emits structured events to Flux for activity feeds and health scoring",
      "HubSpot deal stage reflects creative status in real time — sales reps see it without Forge access",
    ],
  },
];

const DOCS_FEATURES: { icon: string; title: string; description: string; details: string[] }[] = [
  {
    icon: "🔎",
    title: "Semantic Search",
    description: "Find content by meaning, not just keywords. Ask a question, get relevant documents.",
    details: [
      "Vector embeddings turn documents into searchable meaning — \"what's our policy on political advertising?\" finds the right doc even if those exact words aren't in it",
      "Hybrid search combines semantic similarity with keyword matching for best-of-both precision",
      "Results ranked by relevance with highlighted matching passages",
    ],
  },
  {
    icon: "💬",
    title: "AI Chat Over Documents",
    description: "Ask questions in natural language and get answers with citations from your document corpus.",
    details: [
      "Ask questions in natural language — get answers with citations pointing to specific documents and passages",
      "Conversation context maintained across follow-up questions",
      "Grounded in your actual document corpus, not general AI knowledge",
    ],
  },
  {
    icon: "🔒",
    title: "Access Control & Lifecycle",
    description: "Groups, expiration, and versioning keep content current and access controlled.",
    details: [
      "Group-based access control determines who can see which documents",
      "Lifecycle management: expiration dates, version tracking, update notifications",
      "Ensures policies stay current and access stays controlled",
    ],
  },
  {
    icon: "📚",
    title: "Policy & Reference Hub",
    description: "Central home for policies, guides, and reference material — supports Forge compliance reviews.",
    details: [
      "Central home for advertising policies, legal guidelines, and reference material",
      "Feeds Forge's compliance review — policies referenced in AI analysis come from here",
      "Searchable by any team: legal, compliance, operations, sales",
    ],
  },
];

/* ═══ PAGE ═══════════════════════════════════════ */
export default function PlatformOverviewPage() {
  const scrollProgress = useScrollProgress();

  return (
    <>
      {/* ─── SuiteBar ─────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border supports-[backdrop-filter]:bg-background/80">
        {/* Scroll progress bar */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-primary to-primary/60 transition-none"
          style={{ width: `${scrollProgress * 100}%` }}
        />
        <div className="flex items-center justify-between gap-3 px-2 py-2 sm:px-4">
          {/* Left: Logo & Branding */}
          <div className="flex items-center gap-2 min-w-0 shrink-0">
            <img
              src="/foundry-north-logo.png"
              alt="Foundry North"
              className="h-6 w-auto brightness-0 invert"
            />
            <div className="hidden lg:flex flex-col leading-tight">
              <span className="text-white font-semibold text-sm tracking-wide">FOUNDRY NORTH</span>
              <span className="text-[11px] text-muted-foreground uppercase tracking-wide">Suite</span>
            </div>
            <span className="text-white font-semibold text-sm tracking-wide lg:hidden hidden sm:inline">
              FOUNDRY NORTH
            </span>
          </div>

          {/* Center: App Navigation Pills */}
          <nav aria-label="Foundry Suite apps" className="flex items-center gap-1 overflow-x-auto rounded-xl border border-white/[0.08] bg-card/40 p-1">
            <span className="hidden lg:inline-block text-[10px] uppercase tracking-wider text-muted-foreground px-1.5">Suite</span>
            <a
              href={APP_LINKS.compass}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-transparent px-2.5 py-1.5 transition-colors whitespace-nowrap text-muted-foreground hover:text-foreground hover:bg-white/[0.06] hover:border-white/[0.08] no-underline"
            >
              <span className="text-base">🧭</span>
              <span className="leading-tight">
                <span className="block text-xs sm:text-sm font-medium">Compass</span>
                <span className="hidden 2xl:block text-[10px] text-muted-foreground">Media planning</span>
              </span>
            </a>
            <a
              href={APP_LINKS.flux}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-transparent px-2.5 py-1.5 transition-colors whitespace-nowrap text-muted-foreground hover:text-foreground hover:bg-white/[0.06] hover:border-white/[0.08] no-underline"
            >
              <span className="text-base">⚡</span>
              <span className="leading-tight">
                <span className="block text-xs sm:text-sm font-medium">Flux</span>
                <span className="hidden 2xl:block text-[10px] text-muted-foreground">Orchestration</span>
              </span>
            </a>
            <a
              href={APP_LINKS.forge}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-transparent px-2.5 py-1.5 transition-colors whitespace-nowrap text-muted-foreground hover:text-foreground hover:bg-white/[0.06] hover:border-white/[0.08] no-underline"
            >
              <span className="text-base">🛡️</span>
              <span className="leading-tight">
                <span className="block text-xs sm:text-sm font-medium">Forge</span>
                <span className="hidden 2xl:block text-[10px] text-muted-foreground">Compliance</span>
              </span>
            </a>
            <a
              href={APP_LINKS.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-transparent px-2.5 py-1.5 transition-colors whitespace-nowrap text-muted-foreground hover:text-foreground hover:bg-white/[0.06] hover:border-white/[0.08] no-underline"
            >
              <span className="text-base">📄</span>
              <span className="leading-tight">
                <span className="block text-xs sm:text-sm font-medium">Doc Center</span>
                <span className="hidden 2xl:block text-[10px] text-muted-foreground">Resources</span>
              </span>
            </a>
          </nav>

          {/* Right: spacer for balance */}
          <div className="hidden sm:block w-[160px] shrink-0" />
        </div>
      </nav>

      <main>
        {/* ─── Hero ───────────────────────────────── */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />
          <div className="section-container relative">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">The Foundry Suite</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6">
                The platform behind Star Tribune&apos;s most powerful media operation
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                HubSpot handles your CRM. NinjaCat handles reporting.{" "}
                <span className="gradient-text font-semibold">
                  The Foundry Suite handles everything in between
                </span>{" "}
                — and makes them both better.
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/0 rounded-full mb-10" />

              {/* Quick stats */}
              <div className="flex flex-wrap gap-3">
                {[
                  { value: "146+", label: "DB tables" },
                  { value: "64", label: "async tasks" },
                  { value: "6", label: "AI models" },
                  { value: "4", label: "apps, one login" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-baseline gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                    <span className="text-sm font-bold text-primary">{stat.value}</span>
                    <span className="text-xs text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── The Stack ──────────────────────────── */}
        <section id="the-stack" className="py-20 border-t border-border">
          <FadeIn className="section-container">
            <h2 className="text-3xl font-bold text-foreground mb-3">The Stack</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              One login. Four apps. Complete coverage from planning to compliance.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {/* HubSpot column */}
              <div className="card-base text-center">
                <div className="text-3xl mb-3">🟠</div>
                <h3 className="text-lg font-semibold text-foreground mb-1">HubSpot</h3>
                <p className="text-sm text-muted-foreground m-0">
                  CRM — deals, contacts, companies, fulfillment pipeline
                </p>
              </div>

              {/* Foundry Suite column — 4 app cards */}
              <div className="space-y-3">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-primary">The Foundry Suite</h3>
                  <p className="text-xs text-muted-foreground m-0">4 integrated applications</p>
                </div>
                {[
                  { icon: "🧭", name: "Compass", desc: "Media planning & orders", url: APP_LINKS.compass },
                  { icon: "⚡", name: "Flux", desc: "Orchestration & visibility", url: APP_LINKS.flux },
                  { icon: "🛡️", name: "Forge", desc: "Creative compliance", url: APP_LINKS.forge },
                  { icon: "📄", name: "Document Center", desc: "Search & AI chat", url: APP_LINKS.docs },
                ].map((app) => (
                  <a
                    key={app.name}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-base card-hover flex items-center gap-3 no-underline group"
                  >
                    <span className="text-xl">{app.icon}</span>
                    <div>
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {app.name}
                      </span>
                      <span className="text-xs text-muted-foreground ml-2">{app.desc}</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* NinjaCat column */}
              <div className="card-base text-center">
                <div className="text-3xl mb-3">🐱</div>
                <h3 className="text-lg font-semibold text-foreground mb-1">NinjaCat</h3>
                <p className="text-sm text-muted-foreground m-0">
                  Reporting — campaign performance, pacing, analytics
                </p>
              </div>
            </div>

            {/* Flow arrows */}
            <div className="flex items-center justify-center gap-4 mt-8 text-muted-foreground">
              <span className="text-sm">HubSpot</span>
              <span className="text-primary">⟵ syncs ⟶</span>
              <span className="text-sm font-medium text-primary">Foundry Suite</span>
              <span className="text-primary">⟵ context ⟶</span>
              <span className="text-sm">NinjaCat</span>
            </div>
          </FadeIn>
        </section>

        {/* ─── Why It Matters (Value Pillars) ─────── */}
        <section id="why-it-matters" className="py-20 border-t border-border">
          <FadeIn className="section-container">
            <h2 className="text-3xl font-bold text-foreground mb-3">Why This Matters</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Four capabilities that compound when they work together.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ValueCard
                title="Efficiency"
                description="Automated workflows replace manual handoffs. Plans become orders become fulfillment tickets without re-keying data or switching tools."
              />
              <ValueCard
                title="Visibility"
                description="Dashboards, health scoring, SLA tracking. Every team sees the same picture — from sales forecasting to fulfillment status."
              />
              <ValueCard
                title="Intelligence"
                description="AI-powered analysis, forecasting, compliance review, media monitoring. Not just data — insights that drive faster, better decisions."
              />
              <ValueCard
                title="Compliance"
                description="Policy-based creative review, audit trails, affidavits, incident management. Built in from day one, not bolted on after the fact."
              />
            </div>
          </FadeIn>
        </section>

        {/* ─── Compass ────────────────────────────── */}
        <AppSection
          id="compass"
          name="Compass"
          tagline="Where media plans become revenue"
          pitch="The primary application for media planning and order management. From AI-powered research to proposal generation to fulfillment sync — Compass turns strategy into executed orders with full HubSpot integration."
          appUrl={APP_LINKS.compass}
          features={COMPASS_FEATURES}
        />

        {/* ─── Flux ───────────────────────────────── */}
        <AppSection
          id="flux"
          name="Flux"
          tagline="See everything. Miss nothing."
          pitch="The orchestration and visibility layer that brings HubSpot, Compass, and Forge together. Teams see one picture — projects, fulfillment, tasks, health, and forecasting — without switching between tools."
          appUrl={APP_LINKS.flux}
          features={FLUX_FEATURES}
        >
          {/* PR Sentinel Spotlight */}
          <div className="sentinel-glow card-base mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-primary/60 to-primary/0" />
            <div className="flex items-start gap-4">
              <span className="text-3xl flex-shrink-0">📡</span>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  PR Sentinel — Media monitoring that actually works
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-sm text-muted-foreground">
                  {[
                    "Automated keyword & topic monitoring across news sources",
                    "Severity-based routing (routine → crisis) with Slack alerts",
                    "Incident lifecycle management with owner, priority, and tasks",
                    "Narrative drift detection against approved brand messaging",
                    "Journalist contact lookup and enrichment",
                    "Zero-click AI pitch generation for rapid comms response",
                    "Daily/weekly digest reports with shareable links",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 py-1">
                      <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AppSection>

        {/* ─── Forge ──────────────────────────────── */}
        <AppSection
          id="forge"
          name="Forge"
          tagline="Creative compliance at the speed of business"
          pitch="Every ad, every concept, every submission — reviewed against policy, tracked through approval, and linked to fulfillment. AI handles the first pass. Humans make the call. The audit trail captures everything."
          appUrl={APP_LINKS.forge}
          features={FORGE_FEATURES}
        />

        {/* ─── Document Center ────────────────────── */}
        <AppSection
          id="docs"
          name="Document Center"
          tagline="Every policy, every document, instantly searchable"
          pitch="The internal knowledge hub for Star Tribune. Upload policies, reference docs, and guides — then find answers instantly with semantic search and AI chat, not keyword guessing."
          appUrl={APP_LINKS.docs}
          features={DOCS_FEATURES}
        />

        {/* ─── How It All Connects ────────────────── */}
        <section id="how-it-connects" className="py-20 border-t border-border">
          <FadeIn className="section-container">
            <h2 className="text-3xl font-bold text-foreground mb-3">How It All Connects</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Data flows automatically between apps so nothing falls through the cracks. HubSpot remains the system of record.
            </p>

            <div className="card-base divide-y divide-border">
              <FlowStep
                from="Compass"
                to="Flux"
                description="Orders create fulfillment tickets in HubSpot. Flux syncs them into a command center with health scoring and SLA tracking."
              />
              <FlowStep
                from="Flux"
                to="Forge"
                description="When a ticket needs creative, Flux signals Forge. A submission is created with full context from the fulfillment ticket."
              />
              <FlowStep
                from="Forge"
                to="HubSpot"
                description="Approved creative advances the HubSpot fulfillment ticket automatically. Flux reflects the new stage instantly."
              />
              <FlowStep
                from="All Apps"
                to="HubSpot"
                description="Deals, contacts, companies, and fulfillment tickets stay synchronized. HubSpot is always the source of truth for CRM."
              />
            </div>
          </FadeIn>
        </section>

        {/* ─── Footer ─────────────────────────────── */}
        <footer className="border-t border-border py-12">
          <div className="section-container">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <img
                  src="/foundry-north-logo.png"
                  alt=""
                  className="h-8 w-auto brightness-0 invert"
                />
                <div>
                  <span className="text-sm font-semibold text-foreground">The Foundry Suite</span>
                  <p className="text-xs text-muted-foreground mt-1 mb-0">
                    Built by Foundry North for Star Tribune.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                {[
                  { label: "Compass", url: APP_LINKS.compass },
                  { label: "Flux", url: APP_LINKS.flux },
                  { label: "Forge", url: APP_LINKS.forge },
                  { label: "Document Center", url: APP_LINKS.docs },
                  { label: "fn-docs", url: APP_LINKS.fnDocs },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors no-underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
