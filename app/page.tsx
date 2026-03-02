export default function PlatformOverviewPage() {
  return (
    <main style={{ maxWidth: '48rem', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <header style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Platform Overview</h1>
        <p className="accent" style={{ fontSize: '1.125rem', margin: 0 }}>
          Foundry North — what we built and how it fits together
        </p>
      </header>

      <section id="quick-links" className="card">
        <h2 style={{ marginTop: 0 }}>Quick links</h2>
        <p style={{ marginBottom: '1rem', color: 'hsl(var(--muted-foreground))' }}>
          Open any application or documentation:
        </p>
        <div className="quick-links">
          <a href="https://foundrycompass.com" target="_blank" rel="noopener noreferrer">
            Compass — Media planning &amp; orders
          </a>
          <a href="https://foundrynorthflux.com" target="_blank" rel="noopener noreferrer">
            Flux — Orchestration &amp; visibility
          </a>
          <a href="https://foundrynorthforge.com" target="_blank" rel="noopener noreferrer">
            Forge — Creative compliance
          </a>
          <a href="https://stribdoccenter.com" target="_blank" rel="noopener noreferrer">
            Star Tribune Document Center
          </a>
          <a href="https://fn-docs.vercel.app" target="_blank" rel="noopener noreferrer">
            fn-docs — Technical documentation
          </a>
        </div>
      </section>

      <p style={{ marginBottom: '1.5rem' }}>
        This page describes the four main applications in plain language: what each does,
        what problems it addresses, and how they connect. Use the table of contents below
        to jump to the sections that matter to you.
      </p>

      <nav className="toc" aria-label="Table of contents">
        <h3 style={{ marginTop: 0, marginBottom: '0.75rem', border: 0, padding: 0 }}>
          Table of contents
        </h3>
        <ul>
          <li><a href="#how-to-use">How to use this document</a></li>
          <li><a href="#topic-index">Topic index</a></li>
          <li><a href="#hubspot-ninjacat">How this relates to HubSpot and NinjaCat</a></li>
          <li><a href="#at-a-glance">At a glance</a></li>
          <li><a href="#compass">Compass: Media planning and orders</a></li>
          <li><a href="#flux">Flux: Orchestration and visibility</a></li>
          <li className="toc-nested"><a href="#pr-sentinel">PR Sentinel and media monitoring</a></li>
          <li><a href="#forge">Forge: Creative compliance</a></li>
          <li className="toc-nested"><a href="#forge-compliance">Compliance and policy</a></li>
          <li><a href="#st-docs">Star Tribune Document Center</a></li>
          <li><a href="#how-together">How the applications work together</a></li>
          <li><a href="#quick-reference">Quick reference</a></li>
        </ul>
      </nav>

      <section id="how-to-use">
        <h2>How to use this document</h2>
        <ul>
          <li><strong>Sales / business development</strong> — <a href="#at-a-glance">At a glance</a> → <a href="#compass">Compass</a> → <a href="#how-together">How they work together</a> → <a href="#quick-reference">Quick reference</a>.</li>
          <li><strong>Marketing / communications</strong> — <a href="#compass">Compass</a> → <a href="#forge">Forge</a> → <a href="#pr-sentinel">PR Sentinel</a> → <a href="#quick-reference">Quick reference</a>.</li>
          <li><strong>Operations / fulfillment</strong> — <a href="#flux">Flux</a> → <a href="#forge">Forge</a> → <a href="#how-together">How they work together</a>.</li>
          <li><strong>Legal / compliance / policy</strong> — <a href="#forge-compliance">Forge: compliance and policy</a> → <a href="#pr-sentinel">PR Sentinel</a> → <a href="#st-docs">Document Center</a> → <a href="#quick-reference">Quick reference (legal &amp; compliance)</a>.</li>
          <li><strong>Leadership</strong> — <a href="#at-a-glance">At a glance</a> → <a href="#hubspot-ninjacat">HubSpot and NinjaCat</a> → skim each app → <a href="#quick-reference">Quick reference</a>.</li>
        </ul>
      </section>

      <section id="topic-index" className="topic-index">
        <h2>Topic index</h2>
        <p style={{ marginBottom: '1rem' }}>Where to read about…</p>
        <table>
          <tbody>
            <tr><td>Compliance, policy, legal review</td><td><a href="#forge-compliance">Forge: compliance and policy</a>, <a href="#forge">Forge features</a></td></tr>
            <tr><td>PR Sentinel, media monitoring, crisis</td><td><a href="#pr-sentinel">PR Sentinel and media monitoring</a> (Flux)</td></tr>
            <tr><td>Creative submission and approval</td><td><a href="#forge">Forge</a>, <a href="#forge">Forge features</a></td></tr>
            <tr><td>Fulfillment pipeline, SLAs, command center</td><td><a href="#flux">Flux</a>, <a href="#flux">Flux features</a></td></tr>
            <tr><td>Media planning, orders, proposals</td><td><a href="#compass">Compass</a>, <a href="#compass">Compass features</a></td></tr>
            <tr><td>Documents, policies, internal knowledge</td><td><a href="#st-docs">Star Tribune Document Center</a></td></tr>
            <tr><td>HubSpot and NinjaCat</td><td><a href="#hubspot-ninjacat">How this relates to HubSpot and NinjaCat</a></td></tr>
            <tr><td>How the apps connect</td><td><a href="#how-together">How the applications work together</a></td></tr>
          </tbody>
        </table>
      </section>

      <section id="hubspot-ninjacat">
        <h2>How this platform relates to HubSpot and NinjaCat</h2>
        <p>
          Leadership has invested in <strong>HubSpot</strong> as the CRM and system of record
          and in <strong>NinjaCat</strong> for campaign reporting and analytics. Those investments
          remain central.
        </p>
        <ul>
          <li><strong>HubSpot</strong> is where deals, contacts, companies, and the fulfillment pipeline live. It is the system of record for CRM and for ticket stages, ownership, and deal progression. Nothing in the Foundry North platform replaces HubSpot for that.</li>
          <li><strong>NinjaCat</strong> is where deep campaign reporting and pacing analytics live. It is the source for detailed performance and campaign-level reporting. The platform does not duplicate NinjaCat’s reporting depth.</li>
        </ul>
        <p>
          <strong>The Foundry North platform is the layer that brings it all together.</strong> It
          sits on top of (and connects to) HubSpot and NinjaCat. It adds: planning and orders (Compass),
          orchestration and visibility (Flux), legal and creative compliance (Forge), and documents
          (Star Tribune Document Center). As this platform evolves, it could take on more orchestration
          and unified views, creating even more savings and efficiency without replacing HubSpot or NinjaCat.
        </p>
      </section>

      <section id="at-a-glance">
        <h2>At a glance</h2>
        <table>
          <thead>
            <tr><th>Application</th><th>In short</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Compass</strong></td><td>Media planning and buying: plans, proposals, orders, product catalog, and fulfillment linkage.</td></tr>
            <tr><td><strong>Flux</strong></td><td>Orchestration and visibility: projects, fulfillment board, tasks, SLA and health, PR Sentinel (media monitoring), and deal forecasting.</td></tr>
            <tr><td><strong>Forge</strong></td><td>Creative compliance: submission intake, policy and compliance review, human approval, escalation, affidavits, and fulfillment creative handoff.</td></tr>
            <tr><td><strong>Star Tribune Document Center</strong></td><td>Internal document portal: upload, semantic search, and AI chat — including policy and reference documents.</td></tr>
          </tbody>
        </table>
        <p>All four use single sign-on: one login for Compass, Flux, Forge, and the Document Center.</p>
      </section>

      <section id="compass">
        <h2>Compass: Media planning and orders</h2>
        <h3 id="compass-what">What Compass is</h3>
        <p>
          Compass is the primary application for media planning and order management for Star Tribune
          advertising: prospect and competitive research, data-backed media plans, client proposals,
          insertion orders, and tracking through fulfillment. Product and rate information lives in
          Compass so plans and orders stay aligned with catalog and pricing.
        </p>
        <h3>Problems Compass solves</h3>
        <ul>
          <li><strong>Scattered planning</strong> — Compass keeps product catalog, rates, and plan logic in one place so plans are consistent and auditable.</li>
          <li><strong>Manual proposal creation</strong> — Proposals and decks are generated from plan and order data so numbers stay aligned.</li>
          <li><strong>Order and fulfillment disconnect</strong> — Compass connects orders to the HubSpot fulfillment pipeline and deal/company records so status stays in sync.</li>
          <li><strong>Rate and exception complexity</strong> — Rate governance, exceptions, and approval workflows keep pricing controlled and visible.</li>
        </ul>
        <h3 id="compass-features">Compass features and benefits</h3>
        <p>
          Prospect and competitive research; media plan creation from catalog and rates; proposals and
          presentations from order data; order management with defined statuses and line items; product
          catalog and rates; HubSpot integration and fulfillment ticket creation; fulfillment visibility
          in context. Compass sends heavy analysis jobs to background services and displays results for
          plans and orders.
        </p>
      </section>

      <section id="flux">
        <h2>Flux: Orchestration and visibility</h2>
        <h3 id="flux-what">What Flux is</h3>
        <p>
          Flux is the orchestration and visibility layer between planning (Compass) and execution
          (Forge, HubSpot). It syncs data from HubSpot (companies, contacts, deals, tasks, fulfillment
          tickets), surfaces it as projects and boards, and adds health scoring, alerts, PR Sentinel
          (media monitoring), and deal forecasting. Where NinjaCat is used, Flux can embed or reference
          that reporting. Teams use Flux to see status and act on tasks, tickets, and media/PR alerts.
        </p>
        <h3>Problems Flux solves</h3>
        <ul>
          <li><strong>Visibility gap</strong> — Flux aggregates planning, creative, and fulfillment so teams see one picture.</li>
          <li><strong>Fulfillment pipeline opacity</strong> — Flux syncs the HubSpot fulfillment pipeline into a board with health and SLA.</li>
          <li><strong>Scattered tasks</strong> — HubSpot tasks become project-centric Kanban boards.</li>
          <li><strong>Reactive PR and media</strong> — PR Sentinel automates monitoring and routes alerts so teams can respond in a structured way.</li>
          <li><strong>Forecast uncertainty</strong> — Deal confidence and pipeline views use deal and activity data.</li>
        </ul>
        <h3 id="flux-features">Flux features and benefits</h3>
        <p>
          Project-centric view (HubSpot companies as projects); fulfillment board (Kanban with SLA and
          health); command center (pipeline summary, timeline, action items); SLA and health scoring;
          Kanban task boards; PR Sentinel (see below); campaign/NinjaCat context; sales forecasting and
          deal confidence; morning standup and notifications; Compass and Forge integration. Flux does
          not replace HubSpot (CRM) or NinjaCat (deep reporting); it brings their data together for
          daily workflow.
        </p>

        <h3 id="pr-sentinel">PR Sentinel and media monitoring</h3>
        <p>
          <strong>PR Sentinel</strong> is Flux’s media monitoring and crisis-awareness capability. It
          supports legal, communications, and compliance teams by:
        </p>
        <ul>
          <li><strong>Automated monitoring</strong> — Configurable keywords and topics are monitored across news and (where configured) social sources. New mentions are ingested, classified by severity, and routed (e.g., by team or channel).</li>
          <li><strong>Severity and routing</strong> — Mentions can be tagged as routine, notable, urgent, or crisis so high-risk items get immediate attention. Alerts can go to Slack with actions (e.g., view article, find journalist, create incident).</li>
          <li><strong>Incident management</strong> — Notable or higher alerts can be escalated into tracked incidents with owner, priority, tasks, and activity log. Incidents have a lifecycle (e.g., investigating → responding → resolved) so PR and legal can manage response in one place.</li>
          <li><strong>Narrative drift</strong> — Active brand narratives can be defined and compared to new coverage; drift from approved messaging can be flagged for compliance and comms.</li>
          <li><strong>Journalist contact</strong> — Where configured, journalist lookup enriches mentions so teams can follow up with the right contacts.</li>
          <li><strong>Digests and shareable reports</strong> — Daily or weekly digests and shareable report links support follow-up and audit.</li>
          <li><strong>Zero-click pitches</strong> — AI-generated pitch material (headline, bullets, quote) can be created for mentions to speed comms response.</li>
        </ul>
        <p>
          PR Sentinel does not replace legal or comms judgment; it surfaces what to look at and gives
          structure (incidents, tasks, audit trail) so legal and compliance can respond consistently.
        </p>
      </section>

      <section id="forge">
        <h2>Forge: Creative compliance</h2>
        <h3 id="forge-what">What Forge is</h3>
        <p>
          Forge is the creative compliance platform for Star Tribune advertising. Creative submissions
          (ads, copy, concepts) are received, reviewed against policy and brand standards, and
          approved, rejected, or sent back for revision. It supports AI-assisted compliance analysis,
          human review, dual review and escalation to legal for higher-risk content, and affidavit
          generation for approved advertising.
        </p>
        <h3>Problems Forge solves</h3>
        <ul>
          <li><strong>Inconsistent review</strong> — Forge provides a defined path: intake → analysis → review → decision, with policy and precedent in one place.</li>
          <li><strong>Bottlenecks</strong> — Queues, assignments, and fulfillment context help reviewers see the right work with the right information.</li>
          <li><strong>Policy at scale</strong> — AI compares submissions against policy and surfaces similar past decisions so reviews are consistent and faster.</li>
          <li><strong>Audit and proof</strong> — Affidavits and activity logs provide a clear audit trail for what was approved and under what terms.</li>
          <li><strong>Fulfillment handoff</strong> — Forge receives “creative needed” from Flux, creates submissions, and updates HubSpot tickets when creative is approved.</li>
        </ul>
        <h3 id="forge-compliance">Forge: Compliance and policy</h3>
        <p>
          Forge is where advertising compliance and policy are applied to creative:
        </p>
        <ul>
          <li><strong>Policy-based analysis</strong> — Submissions are evaluated against federal, state, and publisher policies. Analysis is tiered by risk (e.g., low-risk gets lighter review, high-risk gets deeper analysis and optional dual review).</li>
          <li><strong>Dual review and escalation</strong> — High-risk or flagged submissions can require two reviewers to agree. Content that needs legal or policy review can be escalated so the right people decide; the escalation path and outcome are recorded.</li>
          <li><strong>Precedent and consistency</strong> — Past decisions and policy language can be referenced so reviewers apply policy consistently over time.</li>
          <li><strong>Affidavits</strong> — Approved work can generate affidavits (e.g., for insertion or legal record) so there is a formal, dated record of approval.</li>
          <li><strong>Activity and audit</strong> — Who approved, rejected, or escalated what (and when) is logged for compliance and audit purposes.</li>
        </ul>
        <p>
          Forge does not replace legal or policy ownership; it gives a structured workflow and record
          so that creative compliance is consistent and auditable.
        </p>
        <h3 id="forge-features">Forge features and benefits</h3>
        <p>
          Submission intake (web, email, ad tag); AI-assisted compliance analysis (tiered by risk);
          review center and queues; dual review and escalation; creative briefs from fulfillment context;
          affidavits; HubSpot linkage; fulfillment bridge (creative needed → submission → approval →
          ticket advance).
        </p>
      </section>

      <section id="st-docs">
        <h2>Star Tribune Document Center</h2>
        <h3 id="st-docs-what">What the Document Center is</h3>
        <p>
          The Star Tribune Document Center is an internal document management portal: upload documents
          (PDF, Word, Excel, PowerPoint), search by meaning (semantic search), and use AI chat to answer
          questions using the organization’s content. It is separate from Compass, Flux, and Forge and
          is the place for internal knowledge and policy documents.
        </p>
        <h3>Problems it solves</h3>
        <ul>
          <li><strong>Documents scattered</strong> — A single place to upload, tag, and search so policies and guides are findable.</li>
          <li><strong>Keyword-only search</strong> — Semantic search finds content by meaning, not just exact words.</li>
          <li><strong>Answers buried in long docs</strong> — Chat over the corpus returns answers with citations.</li>
          <li><strong>Access and lifecycle</strong> — Access groups and lifecycle support expiration and updates so content stays current and access is controlled.</li>
        </ul>
        <h3 id="st-docs-features">Document Center features and benefits</h3>
        <p>
          Upload and processing; semantic and hybrid search; AI chat over documents; access control;
          forms and submissions; admin and lifecycle. Policy and reference documents can be stored and
          searched here so legal, compliance, and operations can find them quickly; the Document Center
          complements Forge (which applies policy to creative) and Flux (which uses PR Sentinel for
          media/crisis).
        </p>
      </section>

      <section id="how-together">
        <h2>How the applications work together</h2>
        <ul>
          <li><strong>Compass → Flux</strong> — Order events keep activity and fulfillment ticket context in sync with what was sold. Compass creates fulfillment tickets in HubSpot; Flux syncs and displays them with health and SLA.</li>
          <li><strong>Flux → Forge</strong> — When a ticket needs creative, Flux notifies Forge; Forge creates a submission and, on approval, advances the ticket in HubSpot so Flux reflects the new stage.</li>
          <li><strong>Forge → Flux</strong> — Submission outcomes (approve/reject/escalate) can be sent to Flux for activity feeds and project views.</li>
          <li><strong>Single sign-on</strong> — One login for Compass, Flux, Forge, and the Document Center.</li>
        </ul>
        <p>
          HubSpot remains the system of record for deals, contacts, and fulfillment tickets; NinjaCat
          for deep reporting. The Document Center holds internal documents (including policies) that
          support compliance and operations.
        </p>
      </section>

      <section id="quick-reference">
        <h2>Quick reference</h2>
        <table>
          <thead>
            <tr><th>Application</th><th>One-line summary</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Compass</strong></td><td>Media planning and orders: plans, proposals, orders, catalog, fulfillment linkage.</td></tr>
            <tr><td><strong>Flux</strong></td><td>Orchestration and visibility: projects, fulfillment board, tasks, SLA/health, PR Sentinel, deal forecasting.</td></tr>
            <tr><td><strong>Forge</strong></td><td>Creative compliance: intake, policy/compliance review, dual review, escalation, affidavits, fulfillment handoff.</td></tr>
            <tr><td><strong>Star Tribune Document Center</strong></td><td>Internal documents: upload, semantic search, AI chat — policy and reference docs.</td></tr>
            <tr><td><strong>HubSpot</strong></td><td>CRM and system of record (deals, contacts, fulfillment pipeline).</td></tr>
            <tr><td><strong>NinjaCat</strong></td><td>Deep campaign reporting and analytics.</td></tr>
          </tbody>
        </table>
        <h3 id="quick-reference-legal">Quick reference — Legal &amp; compliance</h3>
        <ul>
          <li><strong>Advertising creative compliance and policy</strong> → Forge: <a href="#forge-compliance">Compliance and policy</a>, <a href="#forge-features">Forge features</a>.</li>
          <li><strong>Media monitoring, crisis, PR incidents</strong> → Flux <a href="#pr-sentinel">PR Sentinel</a>.</li>
          <li><strong>Policy documents and internal knowledge</strong> → <a href="#st-docs">Star Tribune Document Center</a>.</li>
        </ul>
      </section>

      <footer style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid hsl(var(--border))', fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>
        <p style={{ margin: 0 }}>
          Foundry North platform overview. For technical architecture and APIs, see{' '}
          <a href="https://fn-docs.vercel.app" target="_blank" rel="noopener noreferrer">fn-docs</a>.
        </p>
      </footer>
    </main>
  );
}
