'use client';

import { useState, useEffect } from 'react';
import {
  Code2, Brain, Search, Megaphone, TrendingUp, CheckCircle,
  AlertCircle, Target, Zap, Globe, DollarSign, Users,
  ArrowRight, Award, ChevronRight, BarChart2, Cpu,
  Layers, Shield, Rocket, Star, Clock, FileText
} from 'lucide-react';

// ─── DATA ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    id: 'software',
    icon: <Code2 size={28} />,
    label: 'Software Development',
    color: 'text-red-400',
    bg: 'bg-red-600/20',
    tag: 'Custom Engineering',
  },
  {
    id: 'ai',
    icon: <Brain size={28} />,
    label: 'AI Solutions',
    color: 'text-rose-300',
    bg: 'bg-rose-600/20',
    tag: 'Machine Learning & Automation',
  },
  {
    id: 'seo',
    icon: <Search size={28} />,
    label: 'SEO',
    color: 'text-red-300',
    bg: 'bg-red-700/20',
    tag: 'Organic Growth',
  },
  {
    id: 'marketing',
    icon: <Megaphone size={28} />,
    label: 'Digital Marketing',
    color: 'text-rose-400',
    bg: 'bg-rose-700/20',
    tag: 'Performance & Growth',
  },
];

const CASE = {
  client: 'NexaCore Technologies',
  logo: 'NC',
  industry: 'B2B SaaS & Enterprise Software',
  duration: '12 Months',
  tagline: 'Full-Stack Digital Transformation',
  headline: 'FROM STARTUP TO MARKET LEADER',
  subheadline: 'How we rebuilt a struggling SaaS platform, deployed AI automation, dominated organic search, and 10x\'d their pipeline — all in one year.',
  overview: 'NexaCore Technologies had a strong product vision but a fractured digital presence. Their legacy platform was losing enterprise clients to faster competitors, their marketing was burning cash with zero attribution, and their organic visibility was nonexistent. They needed a complete, coordinated digital overhaul — not four vendors, but one integrated strategy.',

  stats: [
    { v: '10x', l: 'Pipeline Growth', icon: <TrendingUp size={18} /> },
    { v: '340%', l: 'Organic Traffic', icon: <Search size={18} /> },
    { v: '$4.2M', l: 'Revenue Added', icon: <DollarSign size={18} /> },
    { v: '12mo', l: 'Timeline', icon: <Clock size={18} /> },
  ],

  problem: {
    background: 'NexaCore had been operating for 4 years with a loyal but shrinking customer base. A wave of well-funded competitors with modern platforms had disrupted their market, and their technical debt had reached a point where new features took 3x longer than competitors to ship. Marketing spend was rising while CAC was increasing and conversion rates were falling. They had tried individual vendors for each problem — a dev agency, an SEO consultant, a PPC firm — but nothing was coordinated.',
    painPoints: [
      'Legacy monolithic codebase — 6-week average release cycles vs. competitors at 1 week',
      'Platform uptime averaging 97.1% — unacceptable for enterprise SaaS (losing 3 accounts/quarter)',
      'Zero AI or automation features despite competitors shipping ML-powered tools',
      'Paid CAC had risen from $340 to $920 in 18 months — unsustainable burn',
      'Organic search generating only 800 monthly visits from a 5-year-old domain',
      'Marketing team spending 60% of time on manual reporting and campaign management',
      'No unified analytics — decisions made on gut, not data',
      'Website conversion rate of 0.8% — industry average is 3.2%',
    ],
    baseline: [
      { l: 'Monthly MRR', v: '$142K' },
      { l: 'Organic Traffic', v: '800/mo' },
      { l: 'Release Cycle', v: '6 weeks' },
      { l: 'Platform Uptime', v: '97.1%' },
      { l: 'Paid CAC', v: '$920' },
      { l: 'Demo Conversion', v: '0.8%' },
    ],
  },

  discovery: {
    scope: [
      { icon: <Cpu size={16} />, t: 'Technical Architecture Audit', d: 'Full codebase review, infrastructure analysis, CI/CD pipeline assessment, security audit, database performance profiling' },
      { icon: <Brain size={16} />, t: 'AI & Automation Opportunity Map', d: 'Workflow analysis, data availability assessment, ML readiness scoring, competitor AI feature benchmarking' },
      { icon: <Search size={16} />, t: 'SEO & Content Gap Analysis', d: 'Full crawl, competitor keyword mapping, backlink profile, topical authority gaps, SERP landscape' },
      { icon: <Megaphone size={16} />, t: 'Marketing Attribution Audit', d: 'Channel performance, funnel analysis, ICP validation, messaging resonance, CRO audit across all touchpoints' },
    ],
    findings: [
      { metric: 'Code Issues Found', value: '847', sub: 'Critical & moderate' },
      { metric: 'SEO Opportunities', value: '2,100+', sub: 'Keyword gaps' },
      { metric: 'AI Use Cases', value: '14', sub: 'Identified & prioritized' },
      { metric: 'Funnel Leaks', value: '9', sub: 'High-impact fixes' },
      { metric: 'Wasted Ad Spend', value: '$34K/mo', sub: 'Recoverable budget' },
      { metric: 'Content Gaps', value: '180+', sub: 'Missing topics' },
    ],
    insights: [
      'A single monolith service was responsible for 73% of all downtime incidents — extractable to microservice in 6 weeks',
      'Competitors were winning enterprise deals on 3 AI features NexaCore could implement with existing data in 90 days',
      'The top 3 SERP competitors had DA 40–55; NexaCore had DA 22 — closeable gap with focused link building',
      'Paid campaigns were targeting 8 ICPs — only 2 were converting. $34K/month was funding dead audiences',
      'The demo signup flow had 4 unnecessary steps — removing them could double conversion rate immediately',
      'No UTM structure existed — $180K in annual ad spend had zero attribution visibility',
    ],
  },

  services: {
    software: {
      title: 'Software Development',
      icon: <Code2 size={22} />,
      duration: 'Month 1–6',
      strategy: 'We executed a strangler fig migration — incrementally replacing the legacy monolith with a modern microservices architecture without a full rewrite, enabling continuous delivery throughout the transformation.',
      phases: [
        {
          title: 'Architecture Redesign',
          duration: 'Month 1–2',
          tasks: [
            { l: 'Microservices Extraction', d: 'Isolated and extracted 7 core services from the monolith. Started with the highest-risk uptime service, reducing critical incidents by 84% within 45 days.' },
            { l: 'CI/CD Pipeline Rebuild', d: 'Replaced manual deployments with GitHub Actions + ArgoCD. Release cycle dropped from 6 weeks to 4 days. Rollback time went from 2 hours to 8 minutes.' },
            { l: 'Database Performance', d: 'Profiled and optimized 340 slow queries. Added Redis caching layer for high-frequency reads. API response times improved by 67% average.' },
            { l: 'Infrastructure as Code', d: 'Migrated manual AWS setup to Terraform. Enabled auto-scaling and reduced infrastructure costs by 31% while improving availability to 99.97%.' },
          ],
        },
        {
          title: 'Platform Modernization',
          duration: 'Month 3–5',
          tasks: [
            { l: 'Frontend Rebuild (React + TypeScript)', d: 'Replaced jQuery-based UI with a modern React component library. Load time dropped from 6.8s to 1.4s. User satisfaction scores (NPS) jumped from 31 to 68.' },
            { l: 'API-First Architecture', d: 'Built RESTful and GraphQL API layer enabling third-party integrations. Resulted in 3 new enterprise partnership integrations within 60 days of launch.' },
            { l: 'Real-Time Features', d: 'Implemented WebSocket-based real-time notifications and collaborative editing — features competitors had that NexaCore was losing deals over.' },
            { l: 'Security Hardening', d: 'SOC 2 Type II compliance preparation. Implemented RBAC, end-to-end encryption, audit logging, and penetration testing. Cleared security reviews for 2 Fortune 500 prospects.' },
          ],
        },
        {
          title: 'DevOps & Quality',
          duration: 'Month 5–6',
          tasks: [
            { l: 'Testing Infrastructure', d: 'Built automated test suite from 12% to 84% code coverage. Implemented E2E testing with Playwright. Bug escape rate reduced by 91%.' },
            { l: 'Observability Stack', d: 'Deployed Datadog for full-stack observability — APM, log management, infrastructure monitoring. MTTR (mean time to resolution) dropped from 4.2 hours to 22 minutes.' },
            { l: 'On-Call & Incident Response', d: 'Designed and implemented incident response playbooks. SLA compliance went from 73% to 99.1% on enterprise tier agreements.' },
          ],
        },
      ],
      results: [
        { metric: 'Uptime', before: '97.1%', after: '99.97%' },
        { metric: 'Release Cycle', before: '6 weeks', after: '4 days' },
        { metric: 'API Response Time', before: '1,840ms', after: '610ms' },
        { metric: 'Infrastructure Cost', before: '$18,400/mo', after: '$12,700/mo' },
      ],
    },

    ai: {
      title: 'AI & Automation',
      icon: <Brain size={22} />,
      duration: 'Month 3–9',
      strategy: 'We identified 14 AI use cases from the discovery audit and prioritized by implementation effort vs. competitive impact. Shipped 3 flagship AI features in 90 days, transforming NexaCore from a "feature laggard" to an AI-first positioning in the market.',
      phases: [
        {
          title: 'AI Feature Development',
          duration: 'Month 3–6',
          tasks: [
            { l: 'Predictive Analytics Dashboard', d: 'Built ML pipeline on existing customer data to predict churn 45 days in advance with 81% accuracy. Sales team now intervenes before customers decide to leave — reduced churn by 34%.' },
            { l: 'AI-Powered Onboarding', d: 'Trained LLM on product documentation and user behavior data. New users now get a personalized guided setup vs. generic walkthrough. Time-to-value dropped from 18 days to 4 days.' },
            { l: 'Smart Reporting Engine', d: 'Built natural language query interface on top of existing data warehouse. Non-technical users can now ask questions in plain English and get instant charts. Feature became #1 in customer satisfaction surveys.' },
            { l: 'Automated Anomaly Detection', d: 'Deployed unsupervised ML models to detect unusual patterns in customer data, alerting users to opportunities and risks automatically. Became a flagship enterprise selling point.' },
          ],
        },
        {
          title: 'Internal Automation',
          duration: 'Month 6–9',
          tasks: [
            { l: 'Sales Intelligence Automation', d: 'Built AI pipeline that enriches CRM leads with company data, news, and fit scoring automatically. Sales team saves 2.5 hours per rep per day. Pipeline coverage increased 180%.' },
            { l: 'Support Ticket Classification & Routing', d: 'Trained classifier on 3 years of support history. Auto-routes and prioritizes tickets with 94% accuracy. First-response time dropped from 8 hours to 23 minutes.' },
            { l: 'Content Generation Pipeline', d: 'Built internal AI tool for marketing team to generate first drafts of blog posts, ad copy, and email sequences. Content output increased 4x with same headcount.' },
            { l: 'Marketing Attribution ML Model', d: 'Custom multi-touch attribution model trained on CRM + ad platform data. For the first time, team could see true ROI by channel. Reallocated $34K/month in wasted spend.' },
          ],
        },
      ],
      results: [
        { metric: 'Churn Rate', before: '4.8%/mo', after: '3.2%/mo' },
        { metric: 'Time-to-Value', before: '18 days', after: '4 days' },
        { metric: 'Support Response', before: '8 hours', after: '23 mins' },
        { metric: 'Sales Hours Saved', before: '0', after: '2.5hrs/rep/day' },
      ],
    },

    seo: {
      title: 'SEO',
      icon: <Search size={22} />,
      duration: 'Month 1–12',
      strategy: 'A technical-first SEO strategy targeting the exact keywords enterprise buyers use during evaluation. We built topical authority in 6 core subject areas, created the most comprehensive resource library in the niche, and earned links through data-driven PR.',
      phases: [
        {
          title: 'Technical Foundation',
          duration: 'Month 1–2',
          tasks: [
            { l: 'Full Technical SEO Audit & Fix', d: 'Resolved 312 critical issues including crawl errors, duplicate content, broken redirects, and Core Web Vitals failures. Page speed improved from 4.1s to 1.7s on mobile.' },
            { l: 'Enterprise Keyword Architecture', d: 'Built keyword map targeting 2,100+ terms across awareness, consideration, and decision stages. Mapped to dedicated landing pages, blog clusters, and comparison content.' },
            { l: 'Schema & Structured Data', d: 'Deployed SoftwareApplication, FAQPage, Article, and BreadcrumbList schema across 400+ pages. Rich results CTR improvement of 41% on eligible pages.' },
          ],
        },
        {
          title: 'Content Authority',
          duration: 'Month 2–8',
          tasks: [
            { l: '8 Topical Authority Clusters', d: 'Built deep content hubs on core topics: project management software, team collaboration, SaaS analytics, workflow automation, enterprise security, API integrations, digital transformation, remote work tools.' },
            { l: '60 Long-Form Comparison Pages', d: 'Created "NexaCore vs. [Competitor]" and "Best [Category] Software" pages targeting high-intent commercial queries. These pages now drive 38% of all demo signups from organic.' },
            { l: 'Original Research & Data Reports', d: 'Published 3 annual industry reports with original survey data. Each report earned 40–80 editorial backlinks from DA 50+ publications within 30 days of launch.' },
            { l: 'Developer Documentation SEO', d: 'Optimized API docs and developer guides for search. Developer-focused organic traffic grew 620% — driving a new PLG motion where developers advocate internally for NexaCore.' },
          ],
        },
        {
          title: 'Authority & Links',
          duration: 'Month 4–12',
          tasks: [
            { l: 'Digital PR & Media Outreach', d: '180 journalist relationships built. Secured coverage in TechCrunch, Forbes, G2, Capterra, and 22 niche SaaS publications. Average DA of earned links: 67.' },
            { l: 'Competitor Backlink Replication', d: 'Identified 520 high-value links pointing to competitors. Outreach campaign secured 94 new links from the same sources — at higher relevance.' },
            { l: 'Review Platform Optimization', d: 'Drove 240 new verified G2 and Capterra reviews. G2 category leader badge earned. Review platforms now drive 18% of all demo requests.' },
          ],
        },
      ],
      results: [
        { metric: 'Organic Traffic', before: '800/mo', after: '3,520/mo' },
        { metric: 'Keyword Rankings', before: '210', after: '2,840' },
        { metric: 'Domain Authority', before: '22', after: '48' },
        { metric: 'Organic Demo Signups', before: '4/mo', after: '67/mo' },
      ],
    },

    marketing: {
      title: 'Digital Marketing',
      icon: <Megaphone size={22} />,
      duration: 'Month 2–12',
      strategy: 'We rebuilt the entire marketing engine from scratch — fixing attribution first so every dollar could be tracked, then optimizing paid channels, converting rate, and building a content-led demand gen motion that compounds over time.',
      phases: [
        {
          title: 'Foundation & Attribution',
          duration: 'Month 2–3',
          tasks: [
            { l: 'Full Funnel Attribution Build', d: 'Implemented UTM governance, GA4 + HubSpot integration, and custom multi-touch attribution model. For the first time, leadership could see true ROI per channel, campaign, and content piece.' },
            { l: 'ICP Refinement', d: 'Analyzed 3 years of closed-won deals. Reduced ICP from 8 personas to 2 that accounted for 89% of LTV. Entire messaging, targeting, and content strategy rebuilt around these profiles.' },
            { l: 'Website CRO', d: 'Removed 4 unnecessary demo form fields (submissions +87%). Rebuilt pricing page (visits-to-trial +110%). Added social proof and case studies to homepage. Overall demo conversion rate: 0.8% → 3.1%.' },
          ],
        },
        {
          title: 'Paid & Performance',
          duration: 'Month 3–8',
          tasks: [
            { l: 'Google Ads Restructure', d: 'Paused 6 of 8 underperforming campaigns. Rebuilt targeting around 2 validated ICPs. Monthly ad spend reduced from $58K to $24K. Pipeline generated per dollar spent increased 3.8x.' },
            { l: 'LinkedIn ABM Program', d: 'Built Account-Based Marketing program targeting 200 named enterprise accounts. Personalized ad sequences + outbound sequence. 34 accounts entered active pipeline within 90 days.' },
            { l: 'Retargeting Architecture', d: 'Built 7-stage retargeting sequence mapped to buyer journey. Content-led retargeting (guide → case study → demo) vs. direct CTA. Retargeting conversion rate improved 4.2x.' },
          ],
        },
        {
          title: 'Demand Generation',
          duration: 'Month 6–12',
          tasks: [
            { l: 'Content-Led Demand Gen', d: 'Built editorial calendar producing 12 high-value assets/month — reports, templates, calculators, and guides — distributed via LinkedIn, email, and paid amplification. 40% of pipeline now content-attributed.' },
            { l: 'Email & Nurture Sequences', d: 'Built 8 automated nurture sequences mapped to ICP + stage. Average email open rate: 38%. MQL-to-SQL conversion improved from 12% to 31% through better nurture.' },
            { l: 'Partner & Integration Marketing', d: 'Launched co-marketing program with 6 complementary SaaS tools. Joint webinars, co-authored guides, and integration marketplace listings generated 180 net-new leads in 60 days.' },
          ],
        },
      ],
      results: [
        { metric: 'Demo Conversion Rate', before: '0.8%', after: '3.1%' },
        { metric: 'Paid CAC', before: '$920', after: '$340' },
        { metric: 'MQL→SQL Rate', before: '12%', after: '31%' },
        { metric: 'Monthly Pipeline', before: '$380K', after: '$2.1M' },
      ],
    },
  },

  finalResults: [
    { v: '10x', l: 'Pipeline Growth', sub: '$380K → $2.1M/mo', icon: <Rocket size={20} /> },
    { v: '340%', l: 'Organic Traffic', sub: '800 → 3,520/mo', icon: <TrendingUp size={20} /> },
    { v: '$4.2M', l: 'ARR Added', sub: 'Net new revenue', icon: <DollarSign size={20} /> },
    { v: '99.97%', l: 'Platform Uptime', sub: 'Up from 97.1%', icon: <Shield size={20} /> },
    { v: '4 days', l: 'Release Cycle', sub: 'Down from 6 weeks', icon: <Code2 size={20} /> },
    { v: '34%', l: 'Churn Reduction', sub: 'AI-powered retention', icon: <Brain size={20} /> },
    { v: '63%', l: 'CAC Reduction', sub: '$920 → $340', icon: <Target size={20} /> },
    { v: '3.1%', l: 'Demo CVR', sub: 'Up from 0.8%', icon: <Zap size={20} /> },
  ],

  testimonial: {
    quote: "We had tried working with individual vendors for each problem — a dev agency, an SEO firm, a marketing consultant. Nothing was coordinated and nothing compounded. Bringing everything under one integrated strategy changed everything. In 12 months we went from fighting to survive to being the category leader. The results speak for themselves.",
    name: 'Marcus Chen',
    role: 'CEO & Co-Founder',
    company: 'NexaCore Technologies',
  },
};

// ─── MINI BAR CHART ──────────────────────────────────────────────────────────

function MiniChart() {
  const data = [800, 1200, 1600, 2100, 2600, 3100, 3520];
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-1.5 h-32 pt-4">
      {data.map((v, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
          <div
            className="w-full rounded-t-sm bg-gradient-to-t from-red-800 to-red-400 group-hover:from-red-600 group-hover:to-red-200 transition-all duration-300 relative"
            style={{ height: `${(v / max) * 100}px` }}
          >
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs text-red-400 font-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {(v / 1000).toFixed(1)}k
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── RESULTS TABLE ───────────────────────────────────────────────────────────

function ResultsTable({ data }) {
  return (
    <div className="rounded-2xl border border-red-800/40 overflow-hidden">
      <div className="grid grid-cols-3 text-xs font-black text-red-300/60 uppercase tracking-widest px-6 py-3 border-b border-red-800/40 bg-gradient-primary">
        <span>Metric</span><span className="text-center">Before</span><span className="text-center">After</span>
      </div>
      {data.map((r, i) => (
        <div key={i} className="group grid grid-cols-3 px-6 py-4 border-b border-red-900/30 last:border-0 hover:bg-red-600/5 transition-all duration-300 items-center">
          <span className="text-gray-300 font-semibold text-sm group-hover:text-white transition-colors duration-300">{r.metric}</span>
          <span className="text-center text-red-500/60 font-mono text-sm">{r.before}</span>
          <span className="text-center text-green-400 font-mono font-black group-hover:text-green-300 group-hover:animate-pulse transition-all duration-300">{r.after}</span>
        </div>
      ))}
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function TechCaseStudy() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const [activeService, setActiveService] = useState('software');
  const [openPhase, setOpenPhase] = useState(null);
  const [openTask, setOpenTask] = useState(null);

  useEffect(() => {
    setLoaded(true);
    const mm = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', mm);
    return () => window.removeEventListener('mousemove', mm);
  }, []);

  const svc = CASE.services[activeService];

  return (
    <div className="min-h-screen mt-8 bg-gradient-primary text-white overflow-x-hidden font-sans">

      {/* Mouse follower */}
      <div className="fixed w-4 h-4 bg-red-500/30 rounded-full pointer-events-none z-50 transition-all duration-150" style={{ left: mouse.x - 8, top: mouse.y - 8 }} />
      <div className="fixed w-8 h-8 border border-red-500/20 rounded-full pointer-events-none z-50 transition-all duration-300" style={{ left: mouse.x - 16, top: mouse.y - 16 }} />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_45%,rgba(239,68,68,0.15),transparent_65%)] animate-pulse" />
        <div className="absolute top-14 left-14 w-20 h-20 border-2 border-red-600/20 rotate-45" style={{ animation: 'spinSlow 14s linear infinite' }} />
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-red-500/8 rounded-full animate-bounce" style={{ animationDelay: '0.8s' }} />
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-red-400/50 rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-red-300/60 rounded-full animate-ping" style={{ animationDelay: '1.2s' }} />

        <div className={`relative z-10 max-w-6xl mx-auto px-6 text-center transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>

          {/* Service pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {SERVICES.map((s) => (
              <div key={s.id} className={`flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-600/30 ${s.bg} backdrop-blur-sm`}>
                <span className={s.color}>{s.icon}</span>
                <span className="text-white text-xs font-semibold">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Client badge */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-900 rounded-2xl flex items-center justify-center text-2xl font-black shadow-xl shadow-red-600/30">
              {CASE.logo}
            </div>
            <div className="text-left">
              <div className="text-red-400/70 text-xs uppercase tracking-widest">Client</div>
              <div className="text-2xl font-black text-white">{CASE.client}</div>
              <div className="text-red-300/60 text-sm">{CASE.industry}</div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-none mb-4">
            <span className="bg-gradient-to-r from-white via-red-200 to-red-500 bg-clip-text text-transparent block">{CASE.headline.split(' ').slice(0).join(' ')}</span>

          </h1>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            {CASE.subheadline}
          </p>

          {/* Stat row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {CASE.stats.map((s, i) => (
              <div key={i} className="bg-gradient-primary border border-red-800/40 rounded-2xl p-4 hover:border-red-500/60 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center justify-center gap-2 mb-1 text-red-500 group-hover:text-red-400 transition-colors duration-300">{s.icon}</div>
                <div className="text-3xl font-black text-red-400 group-hover:text-red-300 transition-colors duration-300">{s.v}</div>
                <div className="text-gray-500 text-xs group-hover:text-gray-300 transition-colors duration-300">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/5 w-80 h-80 bg-red-600/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/5 w-72 h-72 bg-red-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <span className="text-gray-600 text-xs tracking-widest uppercase">Full Case Study Below</span>
          <ChevronRight size={14} className="text-red-700 rotate-90" />
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">

        {/* ── SECTION 01: THE PROBLEM ──────────────────────────────────────── */}
        <section className="py-20">
          <SectionHeader num="01" icon={<AlertCircle size={22} />} title="The Problem" />

          <p className="text-gray-400 text-lg max-w-3xl mb-10 leading-relaxed">{CASE.problem.background}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-gradient-primary rounded-3xl p-8 border border-red-800/40 hover:border-red-600/40 transition-all duration-500">
              <h3 className="text-red-400 text-xs font-black uppercase tracking-widest mb-5">What We Found on Day 1</h3>
              <ul className="space-y-3">
                {CASE.problem.painPoints.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <div className="w-5 h-5 bg-red-700/40 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-600/60 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full group-hover:animate-pulse" />
                    </div>
                    <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300 leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-primary rounded-3xl p-8 border border-red-800/40 hover:border-red-600/40 transition-all duration-500">
              <h3 className="text-red-400 text-xs font-black uppercase tracking-widest mb-5">Baseline — Day 1</h3>
              <div className="grid grid-cols-2 gap-4">
                {CASE.problem.baseline.map((m, i) => (
                  <div key={i} className="group cursor-default p-4 rounded-xl hover:bg-red-600/8 transition-all duration-300 text-center border border-red-900/20 hover:border-red-700/40">
                    <div className="text-2xl font-black text-red-500/70 group-hover:text-red-400 transition-colors duration-300">{m.v}</div>
                    <div className="text-gray-500 text-xs mt-1 group-hover:text-gray-300 transition-colors duration-300">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 02: DISCOVERY ────────────────────────────────────────── */}
        <section className="py-20 border-t border-red-900/40">
          <SectionHeader num="02" icon={<Search size={22} />} title="Discovery & Audit" />

          <p className="text-gray-400 text-lg max-w-3xl mb-10 leading-relaxed">
            Before writing a line of code, publishing a word, or spending a dollar on ads — we spent 3 weeks mapping the full opportunity landscape across all four service areas simultaneously.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {CASE.discovery.findings.map((d, i) => (
              <div key={i} className="group bg-gradient-primary rounded-2xl p-6 border border-red-800/40 hover:border-red-500/60 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600/15 transition-all duration-400 cursor-default text-center">
                <div className="text-3xl font-black text-red-400 group-hover:text-red-300 group-hover:animate-pulse transition-all duration-300">{d.value}</div>
                <div className="text-white font-bold text-sm mt-1">{d.metric}</div>
                <div className="text-gray-600 text-xs mt-0.5">{d.sub}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-primary rounded-2xl p-8 border border-red-800/40 hover:border-red-600/30 transition-all duration-400">
              <h3 className="text-red-400 text-xs font-black uppercase tracking-widest mb-5">Audit Scope</h3>
              {CASE.discovery.scope.map((item, i) => (
                <div key={i} className="flex items-start gap-3 mb-5 last:mb-0 group p-3 rounded-xl hover:bg-red-600/5 transition-all duration-300">
                  <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center text-red-400 flex-shrink-0 group-hover:bg-red-600/40 transition-colors duration-300">{item.icon}</div>
                  <div>
                    <div className="text-white font-bold text-sm group-hover:text-red-300 transition-colors duration-300">{item.t}</div>
                    <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-primary rounded-2xl p-8 border border-red-800/40 hover:border-red-600/30 transition-all duration-400">
              <h3 className="text-red-400 text-xs font-black uppercase tracking-widest mb-5">Critical Insights</h3>
              {CASE.discovery.insights.map((ins, i) => (
                <div key={i} className="flex items-start gap-3 mb-4 last:mb-0 group p-2 rounded-lg hover:bg-red-600/5 transition-all duration-300">
                  <CheckCircle size={14} className="text-red-500 flex-shrink-0 mt-0.5 group-hover:text-red-300 transition-colors duration-300" />
                  <span className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{ins}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 03: SERVICES (TABBED) ────────────────────────────────── */}
        <section className="py-20 border-t border-red-900/40">
          <SectionHeader num="03" icon={<Layers size={22} />} title="The Full-Stack Solution" />

          <p className="text-gray-400 text-lg max-w-3xl mb-10 leading-relaxed">
            Four integrated service tracks executed in coordination. Each team shared context — the dev team built what the AI team needed, the SEO team aligned with what marketing was targeting, and everything fed into a single revenue dashboard.
          </p>

          {/* Service Tab Nav */}
          <div className="flex flex-wrap gap-3 mb-10">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => { setActiveService(s.id); setOpenPhase(null); setOpenTask(null); }}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeService === s.id
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/40'
                    : 'bg-gradient-primary border border-red-800/40 text-gray-400 hover:border-red-500/50 hover:text-red-300'
                }`}
              >
                <span className={activeService === s.id ? 'text-white' : s.color}>{s.icon}</span>
                {s.label}
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <div className="bg-gradient-primary rounded-3xl border border-red-800/40 overflow-hidden">
            {/* Service Header */}
            <div className="p-8 border-b border-red-900/40">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-red-600/20 rounded-2xl flex items-center justify-center text-red-400 flex-shrink-0">
                  {svc.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-red-500 text-xs font-black uppercase tracking-widest">{svc.duration}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">{svc.title}</h3>
                  <p className="text-gray-400 leading-relaxed max-w-3xl">{svc.strategy}</p>
                </div>
              </div>
            </div>

            {/* Phases */}
            <div className="p-8 space-y-4">
              <h4 className="text-red-400 text-xs font-black uppercase tracking-widest mb-6">Implementation Phases</h4>
              {svc.phases.map((phase, pi) => (
                <div key={pi} className="bg-gradient-primary rounded-2xl border border-red-900/30 hover:border-red-700/50 transition-all duration-400 overflow-hidden">
                  <button
                    onClick={() => setOpenPhase(openPhase === `${activeService}-${pi}` ? null : `${activeService}-${pi}`)}
                    className="w-full flex items-center gap-4 p-6 text-left"
                  >
                    <div className="text-3xl font-black text-red-800/60 select-none w-8">0{pi + 1}</div>
                    <div className="flex-1">
                      <div className="text-gray-500 text-xs mb-0.5">{phase.duration}</div>
                      <div className="text-white font-black text-lg group-hover:text-red-300 transition-colors duration-300">{phase.title}</div>
                    </div>
                    <div className="flex items-center gap-2 text-red-500 text-sm">
                      <span className="hidden md:block text-xs">{phase.tasks.length} tactics</span>
                      <ChevronRight size={18} className={`transition-transform duration-300 ${openPhase === `${activeService}-${pi}` ? 'rotate-90' : ''}`} />
                    </div>
                  </button>

                  {openPhase !== `${activeService}-${pi}` && (
                    <div className="px-6 pb-5">
                      <div className="flex flex-wrap gap-2">
                        {phase.tasks.slice(0, 3).map((t, ti) => (
                          <span key={ti} className="px-3 py-1 bg-red-600/10 text-red-400 border border-red-700/20 rounded-full text-xs">{t.l}</span>
                        ))}
                        {phase.tasks.length > 3 && <span className="px-3 py-1 bg-red-900/20 text-gray-500 rounded-full text-xs">+{phase.tasks.length - 3} more</span>}
                      </div>
                    </div>
                  )}

                  {openPhase === `${activeService}-${pi}` && (
                    <div className="px-6 pb-6 space-y-3">
                      {phase.tasks.map((task, ti) => (
                        <div
                          key={ti}
                          onClick={() => setOpenTask(openTask === `${activeService}-${pi}-${ti}` ? null : `${activeService}-${pi}-${ti}`)}
                          className="cursor-pointer bg-gradient-primary rounded-xl p-5 border border-red-900/20 hover:border-red-700/40 transition-all duration-300 group/t"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-red-600/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/t:bg-red-600/60 transition-colors duration-300">
                              <CheckCircle size={12} className="text-red-400" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between gap-4">
                                <span className="text-white font-bold text-sm group-hover/t:text-red-300 transition-colors duration-300">{task.l}</span>
                                <ArrowRight size={13} className={`text-red-700 flex-shrink-0 transition-transform duration-300 ${openTask === `${activeService}-${pi}-${ti}` ? 'rotate-90' : ''}`} />
                              </div>
                              {openTask === `${activeService}-${pi}-${ti}` && (
                                <p className="text-gray-400 text-sm mt-2.5 leading-relaxed">{task.d}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Results Table */}
            <div className="p-8 border-t border-red-900/40">
              <h4 className="text-red-400 text-xs font-black uppercase tracking-widest mb-5">{svc.title} — Before vs. After</h4>
              <ResultsTable data={svc.results} />
            </div>
          </div>
        </section>

        {/* ── SECTION 04: FINAL RESULTS ────────────────────────────────────── */}
        <section className="py-20 border-t border-red-900/40">
          <SectionHeader num="04" icon={<TrendingUp size={22} />} title="Combined Results" />

          <p className="text-gray-400 text-lg max-w-3xl mb-12 leading-relaxed">
            After 12 months of integrated execution across software, AI, SEO, and marketing — NexaCore was unrecognizable from the company we met on day one.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {CASE.finalResults.map((r, i) => (
              <div key={i} className="group bg-gradient-primary rounded-2xl p-6 border border-red-800/40 hover:border-red-500/60 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600/20 transition-all duration-400 text-center cursor-default">
                <div className="w-10 h-10 bg-red-600/20 rounded-xl flex items-center justify-center mx-auto mb-3 text-red-500 group-hover:bg-red-600/40 group-hover:scale-110 transition-all duration-300">{r.icon}</div>
                <div className="text-3xl font-black text-red-400 group-hover:text-red-300 group-hover:animate-pulse transition-all duration-300">{r.v}</div>
                <div className="text-white font-bold text-sm mt-1">{r.l}</div>
                <div className="text-gray-600 text-xs mt-0.5">{r.sub}</div>
              </div>
            ))}
          </div>

          {/* Traffic chart + timeline */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-primary rounded-2xl p-8 border border-red-800/40 hover:border-red-600/30 transition-all duration-400">
              <h3 className="text-red-400 text-xs font-black uppercase tracking-widest mb-4">Organic Traffic Growth (12 Mo.)</h3>
              <MiniChart />
            </div>
            <div className="bg-gradient-primary rounded-2xl p-8 border border-red-800/40 hover:border-red-600/30 transition-all duration-400">
              <h3 className="text-red-400 text-xs font-black uppercase tracking-widest mb-5">Key Milestones</h3>
              <ul className="space-y-3">
                {[
                  { mo: 'Mo. 1–2', w: 'Technical audit complete. CI/CD rebuilt. Release cycle 6wk → 4 days.' },
                  { mo: 'Mo. 3', w: 'First AI features shipped. Attribution fixed. Paid CAC improving.' },
                  { mo: 'Mo. 4–5', w: 'SEO traffic doubling MoM. ABM pipeline program generating enterprise demos.' },
                  { mo: 'Mo. 6', w: 'AI churn model deployed. Uptime hits 99.97%. Demo CVR reaches 3.1%.' },
                  { mo: 'Mo. 9', w: 'G2 Category Leader badge. Organic now drives 40% of all new pipeline.' },
                  { mo: 'Mo. 12', w: '$4.2M ARR added. Pipeline at $2.1M/mo. MRR grew 3.2x from baseline.' },
                ].map((m, i) => (
                  <li key={i} className="flex items-start gap-3 group p-2 rounded-xl hover:bg-red-600/5 transition-all duration-300">
                    <span className="text-red-500 font-black text-xs w-16 flex-shrink-0 mt-0.5 group-hover:text-red-300 transition-colors duration-300">{m.mo}</span>
                    <span className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{m.w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ──────────────────────────────────────────────────── */}
        <section className="py-10 border-t border-red-900/40">
          <div className="relative bg-gradient-primary rounded-3xl p-12 border border-red-800/40 hover:border-red-600/40 transition-all duration-500 overflow-hidden">
            <div className="absolute top-6 left-8 text-9xl text-red-500/8 font-black leading-none select-none pointer-events-none">"</div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-900 via-red-500 to-red-900" />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-5">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-red-500 fill-red-500 mx-0.5" />)}
              </div>
              <p className="text-xl text-gray-100 leading-relaxed italic mb-8">"{CASE.testimonial.quote}"</p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-900 rounded-full flex items-center justify-center text-xl font-black shadow-xl shadow-red-600/30">
                  {CASE.testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-left">
                  <div className="font-black text-white">{CASE.testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{CASE.testimonial.role} — {CASE.testimonial.company}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── KEY LESSONS ──────────────────────────────────────────────────── */}
        <section className="py-20 border-t border-red-900/40">
          <SectionHeader num="05" icon={<Award size={22} />} title="Key Lessons" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: '01', t: 'Integration Beats Silos', d: 'Four separate vendors produce four separate results. One integrated team shares context, compounds learnings, and builds toward a single revenue goal. The coordination premium is enormous.' },
              { n: '02', t: 'Fix Attribution First', d: 'Every marketing optimization decision was wrong until we fixed attribution. Knowing the truth about where pipeline comes from — even when uncomfortable — is the prerequisite for every other improvement.' },
              { n: '03', t: 'AI Wins on Existing Data', d: "NexaCore had 4 years of customer data sitting unused. The AI features that drove the most impact didn't require new data — they required applying modern ML to what was already there." },
            ].map((l, i) => (
              <div key={i} className="group relative bg-gradient-primary rounded-2xl p-8 border border-red-800/40 hover:border-red-500/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600/20 cursor-default overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-600/0 to-transparent group-hover:via-red-500/60 transition-all duration-500 rounded-b-2xl" />
                <div className="text-6xl font-black text-red-900/30 group-hover:text-red-800/40 transition-colors duration-500 mb-4 leading-none select-none">{l.n}</div>
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-red-300 transition-colors duration-300">{l.t}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{l.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="py-20">
          <div className="relative bg-gradient-primary rounded-3xl p-14 border border-red-800/30 overflow-hidden text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(239,68,68,0.10),transparent_70%)] animate-pulse" />
            <div className="absolute top-6 left-6 w-12 h-12 border-2 border-red-600/20 rotate-45" style={{ animation: 'spinSlow 10s linear infinite' }} />
            <div className="absolute bottom-6 right-6 w-8 h-8 bg-red-500/10 rounded-full animate-bounce" style={{ animationDelay: '0.8s' }} />
            <div className="absolute top-1/3 right-12 w-2 h-2 bg-red-400/40 rounded-full animate-ping" style={{ animationDelay: '1.4s' }} />
            <div className="relative z-10">
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {SERVICES.map(s => (
                  <div key={s.id} className={`flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-700/30 ${s.bg}`}>
                    <span className={`${s.color} text-xs`}>{s.icon}</span>
                    <span className="text-white text-xs font-semibold">{s.label}</span>
                  </div>
                ))}
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent">
                READY TO TRANSFORM YOUR BUSINESS?
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Get a free discovery session. We'll audit your software, AI readiness, SEO, and marketing — and show you exactly where your biggest growth opportunities are.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="group relative px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full text-lg font-black transition-all duration-300 transform hover:scale-105 hover:-rotate-1 cursor-pointer overflow-hidden shadow-xl shadow-red-600/30"
                >
                  <span className="relative z-10">Book Free Discovery Call</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="absolute top-0 -left-full w-full h-full bg-white/20 transform skew-x-12 group-hover:left-full transition-all duration-700" />
                </button>
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="group relative px-10 py-4 border-2 border-red-600 hover:bg-red-600 rounded-full text-lg font-black transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden"
                >
                  <span className="relative z-10">View All Services</span>
                  <div className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

// ─── SHARED SECTION HEADER ───────────────────────────────────────────────────

function SectionHeader({ num, icon, title }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="w-12 h-12 bg-red-600/20 rounded-2xl flex items-center justify-center text-red-400 flex-shrink-0">{icon}</div>
      <div>
        <span className="text-red-600 text-xs font-black tracking-widest uppercase">Section {num}</span>
        <h2 className="text-4xl font-black text-white">{title}</h2>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-red-600/40 to-transparent" />
    </div>
  );
}