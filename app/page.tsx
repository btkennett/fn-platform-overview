const NAV_LINKS = [
  { href: "#the-stack", label: "The Stack" },
  { href: "#compass", label: "Compass" },
  { href: "#flux", label: "Flux" },
  { href: "#forge", label: "Forge" },
  { href: "#docs", label: "Docs" },
  { href: "#why-it-matters", label: "Why It Matters" },
];

const APP_LINKS = {
  compass: "https://foundrycompass.com",
  flux: "https://foundrynorthflux.com",
  forge: "https://foundrynorthforge.com",
  docs: "https://stribdoccenter.com",
  fnDocs: "https://fn-docs.vercel.app",
};

/* ─── Feature Card ──────────────────────────────── */
function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="card-base card-hover group">
      <div className="text-2xl mb-3">{icon}</div>
      <h4 className="text-sm font-semibold text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed m-0">{description}</p>
    </div>
  );
}

/* ─── Value Card ────────────────────────────────── */
function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="card-base card-hover relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/80 to-primary/0" />
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed m-0">{description}</p>
    </div>
  );
}

/* ─── App Section ───────────────────────────────── */
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
  features: { icon: string; title: string; description: string }[];
  appUrl: string;
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20 border-t border-border">
      <div className="section-container">
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
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-lg text-primary font-medium hover:bg-primary/20 hover:border-primary/50 transition-all no-underline"
        >
          Open {name} <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}

/* ─── Flow Step ─────────────────────────────────── */
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

/* ═══ PAGE ═══════════════════════════════════════ */
export default function PlatformOverviewPage() {
  return (
    <>
      {/* ─── Sticky Nav ─────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="section-container flex items-center justify-between h-14">
          <span className="text-sm font-semibold tracking-tight text-foreground">
            Foundry North
          </span>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors no-underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main>
        {/* ─── Hero ───────────────────────────────── */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />
          <div className="section-container relative">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6">
                The platform behind Star Tribune&apos;s most powerful media operation
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                HubSpot handles your CRM. NinjaCat handles reporting.{" "}
                <span className="text-foreground font-medium">
                  Foundry North handles everything in between
                </span>{" "}
                — and makes them both better.
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/0 rounded-full" />
            </div>
          </div>
        </section>

        {/* ─── The Stack ──────────────────────────── */}
        <section id="the-stack" className="py-20 border-t border-border">
          <div className="section-container">
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

              {/* Foundry North column — 4 app cards */}
              <div className="space-y-3">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-primary">Foundry North</h3>
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
              <span className="text-sm font-medium text-primary">Foundry North</span>
              <span className="text-primary">⟵ context ⟶</span>
              <span className="text-sm">NinjaCat</span>
            </div>
          </div>
        </section>

        {/* ─── Why It Matters (Value Pillars) ─────── */}
        <section id="why-it-matters" className="py-20 border-t border-border">
          <div className="section-container">
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
          </div>
        </section>

        {/* ─── Compass ────────────────────────────── */}
        <AppSection
          id="compass"
          name="Compass"
          tagline="Where media plans become revenue"
          pitch="The primary application for media planning and order management. From AI-powered research to proposal generation to fulfillment sync — Compass turns strategy into executed orders with full HubSpot integration."
          appUrl={APP_LINKS.compass}
          features={[
            { icon: "🔍", title: "AI-Powered Discovery & Research", description: "Prospect research, competitive analysis, and market intelligence powered by AI." },
            { icon: "📋", title: "Media Plan Builder", description: "Build plans from the product catalog with governed rates and real-time availability." },
            { icon: "📊", title: "Proposal & Deck Generation", description: "Generate client-ready proposals and presentations directly from plan and order data." },
            { icon: "📦", title: "Order Management & Tracking", description: "Full order lifecycle with defined statuses, line items, and fulfillment visibility." },
            { icon: "🏷️", title: "Product Catalog & Rate Governance", description: "Centralized catalog with rate cards, exceptions, and approval workflows." },
            { icon: "🔗", title: "HubSpot Deal & Fulfillment Sync", description: "Bidirectional sync with HubSpot deals, contacts, and fulfillment pipeline tickets." },
          ]}
        />

        {/* ─── Flux ───────────────────────────────── */}
        <AppSection
          id="flux"
          name="Flux"
          tagline="See everything. Miss nothing."
          pitch="The orchestration and visibility layer that brings HubSpot, Compass, and Forge together. Teams see one picture — projects, fulfillment, tasks, health, and forecasting — without switching between tools."
          appUrl={APP_LINKS.flux}
          features={[
            { icon: "📊", title: "Fulfillment Command Center", description: "Kanban board with SLA tracking, health scoring, and pipeline summary." },
            { icon: "📈", title: "Sales Forecasting & Deal Confidence", description: "AI-scored deal confidence and pipeline views from HubSpot activity data." },
            { icon: "🏗️", title: "Project Dashboards", description: "HubSpot companies as projects — tasks, deals, fulfillment, and activity in one view." },
            { icon: "📡", title: "PR Sentinel", description: "Automated media monitoring with severity routing, incident management, and journalist lookup." },
            { icon: "✅", title: "Task Boards & Morning Standups", description: "Project-centric Kanban task boards synced from HubSpot with standup summaries." },
            { icon: "🔄", title: "Compass & Forge Integration", description: "Order events from Compass and creative outcomes from Forge flow in automatically." },
          ]}
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
          features={[
            { icon: "🤖", title: "AI Compliance Analysis", description: "3-tier, policy-based analysis — low-risk gets lighter review, high-risk gets deeper scrutiny." },
            { icon: "👥", title: "Dual Review & Legal Escalation", description: "High-risk submissions require two reviewers. Legal escalation with recorded outcomes." },
            { icon: "📥", title: "Submission Intake", description: "Accept submissions via web form, email, or ad tag — all normalized into one review queue." },
            { icon: "📝", title: "Creative Briefs from Context", description: "Auto-generated briefs from fulfillment context so reviewers have full background." },
            { icon: "📜", title: "Affidavit Generation & Audit Trail", description: "Formal approval records with dated affidavits and complete activity logging." },
            { icon: "🌉", title: "Fulfillment Bridge", description: "Creative needed → submission created → approved → HubSpot ticket advances automatically." },
          ]}
        />

        {/* ─── Document Center ────────────────────── */}
        <AppSection
          id="docs"
          name="Document Center"
          tagline="Every policy, every document, instantly searchable"
          pitch="The internal knowledge hub for Star Tribune. Upload policies, reference docs, and guides — then find answers instantly with semantic search and AI chat, not keyword guessing."
          appUrl={APP_LINKS.docs}
          features={[
            { icon: "🔎", title: "Semantic Search", description: "Find content by meaning, not just keywords. Ask a question, get relevant documents." },
            { icon: "💬", title: "AI Chat Over Documents", description: "Ask questions in natural language and get answers with citations from your document corpus." },
            { icon: "🔒", title: "Access Control & Lifecycle", description: "Groups, expiration, and versioning keep content current and access controlled." },
            { icon: "📚", title: "Policy & Reference Hub", description: "Central home for policies, guides, and reference material — supports Forge compliance reviews." },
          ]}
        />

        {/* ─── How It All Connects ────────────────── */}
        <section id="how-it-connects" className="py-20 border-t border-border">
          <div className="section-container">
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
          </div>
        </section>

        {/* ─── Footer ─────────────────────────────── */}
        <footer className="border-t border-border py-12">
          <div className="section-container">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-sm font-semibold text-foreground">Built by Foundry North</span>
                <p className="text-xs text-muted-foreground mt-1 mb-0">
                  The platform behind Star Tribune&apos;s media operation.
                </p>
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
