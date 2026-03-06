'use client';

import { useState, useEffect } from 'react';
import {
  Code2, Brain, Search, Megaphone, TrendingUp, CheckCircle,
  AlertCircle, Target, Zap, Globe, DollarSign, Users,
  ArrowRight, Award, ChevronRight, BarChart2, Cpu,
  Layers, Shield, Rocket, Star, Clock, FileText, MapPin,
  Home, ThumbsUp, Phone, StarHalf, MessageCircle, Map,
  Navigation, Briefcase, Calendar, Camera, Users2, Award as AwardIcon
} from 'lucide-react';

// ─── DATA ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    id: 'local',
    icon: <MapPin size={28} />,
    label: 'Local SEO',
    color: 'text-red-400',
    bg: 'bg-red-600/20',
    tag: 'Maps & Pack',
  },
  {
    id: 'content',
    icon: <FileText size={28} />,
    label: 'Local Content',
    color: 'text-rose-300',
    bg: 'bg-rose-600/20',
    tag: 'City Pages',
  },
  {
    id: 'citations',
    icon: <Layers size={28} />,
    label: 'Citations',
    color: 'text-red-300',
    bg: 'bg-red-700/20',
    tag: 'NAP Consistency',
  },
  {
    id: 'reputation',
    icon: <Star size={28} />,
    label: 'Reputation',
    color: 'text-rose-400',
    bg: 'bg-rose-700/20',
    tag: 'Reviews & Ratings',
  },
];

const CASE = {
  client: 'Summit Roofing & Exteriors',
  logo: 'SR',
  industry: 'Home Services · Roofing, Siding, Gutters',
  duration: '10 Months',
  tagline: 'Dominating Local Pack + 4x Service Calls',
  headline: 'FROM PAGE 7 TO LOCAL PODIUM',
  subheadline: 'How we took a family-owned roofing company from zero visibility to #1 in the local map pack, doubled review volume, and added $2.8M in booked revenue.',
  overview: 'Summit Roofing had been in business for 18 years with outstanding craftsmanship but zero digital footprint. They relied on word‑of‑mouth and yard signs. When storms hit, leads went to competitors who showed up on Google Maps. They needed end‑to‑end local SEO: GMB optimization, hyper‑local content, citation cleanup, and a review generation engine.',

  stats: [
    { v: '4x', l: 'Phone Calls', icon: <TrendingUp size={18} /> },
    { v: '284%', l: 'Local Pack Impressions', icon: <Globe size={18} /> },
    { v: '$2.8M', l: 'Revenue Attributed', icon: <DollarSign size={18} /> },
    { v: '10mo', l: 'Execution', icon: <Clock size={18} /> },
  ],

  problem: {
    background: 'Summit Roofing served three counties in Ohio but their website was built in 2012 and hadn’t been updated since 2016. No Google Business Profile optimization, no consistent NAP across directories, 47% of online reviews were 1‑star from misdirected complaints (wrong company). They were losing an estimated $400k/year to competitors ranking in the local 3‑pack.',
    painPoints: [
      'Google Business Profile unclaimed — duplicate listings with wrong phone number',
      'Ranked on page 7 for “roofers near me” (100+ competitors ahead)',
      'NAP (name/address/phone) inconsistent across 34 directories',
      'Average rating 2.8 stars due to misdirected reviews (they were responding to wrong company)',
      'Website had zero local content — just a generic “roofing” page',
      'Mobile page speed 34/100 — leads bounced immediately',
      'No call tracking — couldn’t attribute any organic call',
      'Competitors were running Local Service Ads and capturing storm season demand',
    ],
    baseline: [
      { l: 'Local Pack Rank', v: 'Not in top 20' },
      { l: 'Monthly Calls', v: '18' },
      { l: 'Google Reviews', v: '2.8★ (23)' },
      { l: 'Domain Authority', v: '14' },
    ],
  },

  discovery: {
    scope: [
      { icon: <Search size={16} />, t: 'Local Audit & GMB Health', d: 'Duplicate listings, NAP audit, category optimization, Q&A spam cleanup' },
      { icon: <FileText size={16} />, t: 'Service Area Content Gap', d: 'City‑specific landing pages, service schema, roof type guides' },
      { icon: <Users size={16} />, t: 'Review & Reputation Analysis', d: 'Review source audit, competitor sentiment, response template' },
      { icon: <Cpu size={16} />, t: 'Technical Local SEO', d: 'Schema implementation (LocalBusiness, roof types), site speed, mobile UX' },
    ],
    findings: [
      { metric: 'Directory Errors', value: '147', sub: 'Inconsistent NAP' },
      { metric: 'GMB Q&A Spam', value: '22', sub: 'Fake negative Q&A' },
      { metric: 'City Pages Missing', value: '12', sub: 'High‑value suburbs' },
      { metric: 'Review Response Rate', value: '4%', sub: 'vs 68% competitors' },
      { metric: 'Calls from Organic', value: '0', sub: 'No tracking' },
      { metric: 'Local Keywords in Top100', value: '7', sub: 'Out of 380' },
    ],
    insights: [
      'Three duplicate GMB listings confused Google — merged them, NAP consistency jumped from 58% to 100%',
      'Competitors ranked with thin city pages — we built 14 detailed service areas with original photos',
      'Every review platform showed mixed data — we implemented a review generation tool that captured 95% new reviews on Google',
      'Site had no local schema — after adding LocalBusiness + roof type schema, impressions rose 170% in 30 days',
      'Backlink profile was non‑existent — we secured links from local construction suppliers and home builder associations',
    ],
  },

  services: {
    local: {
      title: 'Local SEO & Google Maps',
      icon: <MapPin size={22} />,
      duration: 'Month 1–4',
      strategy: 'We took ownership of the entire local ecosystem: claimed and verified the correct GMB, suppressed duplicates, optimized categories, attributes, services, and added 400+ photos. We then built localized content that told Google exactly where Summit serves.',
      phases: [
        {
          title: 'GMB / GBP Overhaul',
          duration: 'Month 1–2',
          tasks: [
            { l: 'Merge Duplicate Listings', d: 'Three unverified listings with old phone numbers. Google support case opened; merged into a single verified profile within 21 days. NAP now 100% consistent across web.' },
            { l: 'Category & Service Optimization', d: 'Primary category “roofing contractor”, added 12 additional services (siding, gutters, storm damage). Added service area cities with radius 75 miles.' },
            { l: 'Photo & Video Epidemic', d: 'Uploaded 450+ professional photos of completed roofs, teams in action, and walkthrough videos. Photo views increased 6x, leading to more map engagement.' },
            { l: 'Q&A Spam Removal', d: 'Removed 22 fake questions about bad workmanship. Added 30 FAQ with answers that pre‑sell Summit’s quality.' },
          ],
        },
        {
          title: 'Local Pack Ranking',
          duration: 'Month 3–4',
          tasks: [
            { l: 'Proximity + Relevance Signals', d: 'Added city names to homepage H1, footer, and created city specific “roofing in [city]” pages. Google started associating Summit with 14 towns.' },
            { l: 'Local Spam Link Cleanup', d: 'Disavowed 34 toxic directory links. Built 8 local citations on home services super directories (HomeAdvisor, Angi, Nextdoor).' },
            { l: 'GMB Posts & Offers', d: 'Weekly posts: seasonal maintenance, insurance claim tips, before/after photos. Engagement rate 11%, best in category.' },
          ],
        },
      ],
      results: [
        { metric: 'Local Pack Rank', before: 'Not ranked', after: '#1 (9 cities)' },
        { metric: 'GMB Views', before: '150/mo', after: '8,400/mo' },
        { metric: 'Direction Requests', before: '2/mo', after: '184/mo' },
        { metric: 'Phone Calls (GMB)', before: '0 tracked', after: '48/mo' },
      ],
    },
    content: {
      title: 'Hyper‑Local Content',
      icon: <FileText size={22} />,
      duration: 'Month 2–7',
      strategy: 'We stopped writing generic roofing blogs. Instead we created detailed city landing pages with local landmarks, specific roof types (asphalt, metal, slate), and neighbourhood photos. Every page answered “why Summit is the best roofer in [city]”.',
      phases: [
        {
          title: 'City & Service Pages',
          duration: 'Month 2–4',
          tasks: [
            { l: '14 City Landing Pages', d: 'Each with unique 1,200+ word content: city history, common roof problems (snow, ice dams), local permits, and 10+ photos of Summit trucks at work in that city.' },
            { l: 'Roof Type Guides', d: 'Asphalt, metal, slate, TPO/flat — each with pros/cons, Summit’s installation process, financing options. These pages rank for “metal roofing columbus” etc.' },
            { l: 'Insurance & Storm Content', d: 'Created “Storm Damage Checklist” and “How to file a roof insurance claim” — high value content that gets shared by local insurance agents.' },
          ],
        },
        {
          title: 'Blog & Community',
          duration: 'Month 4–7',
          tasks: [
            { l: 'Local Project Case Studies', d: 'Feature story format: “We replaced a 1920s slate roof in Bexley” — with timeline, photos, testimonial. These build E‑A‑T.' },
            { l: 'Hyperlocal Weather Updates', d: 'After hail storms, we published storm reports with drone footage of damaged roofs — captured immediate search demand.' },
          ],
        },
      ],
      results: [
        { metric: 'Organic Traffic', before: '240/mo', after: '3,820/mo' },
        { metric: 'City Page Rankings', before: '0', after: 'Top 3 for 11 cities' },
        { metric: 'Avg. Time on Page', before: '1:12', after: '4:20' },
        { metric: 'Bounce Rate', before: '78%', after: '41%' },
      ],
    },
    citations: {
      title: 'Citation Building & NAP',
      icon: <Layers size={22} />,
      duration: 'Month 1–3',
      strategy: 'Summit’s name, address, phone number was wrong on 40+ platforms. We cleaned and standardized every mention, then built high‑authority local citations on industry‑specific sites.',
      phases: [
        {
          title: 'Cleanup & Auditing',
          duration: 'Month 1',
          tasks: [
            { l: 'Full Citation Audit', d: 'Used tools to identify 147 inconsistent citations. Fixed 100% manually: same phone format, correct suite number, website URL update.' },
            { l: 'Duplicate Suppression', d: 'Removed 11 duplicate listings on YellowPages, Superpages, etc. Google now sees one consistent entity.' },
          ],
        },
        {
          title: 'New Authority Citations',
          duration: 'Month 2–3',
          tasks: [
            { l: 'Industry Platforms', d: 'Created/claimed listings on Roofing.com, HomeAdvisor, Angi, Networx, and 7 local chamber directories.' },
            { l: 'Local Business Associations', d: 'Secured citations from 3 local hardware store websites and “Preferred Contractor” badges linking back.' },
          ],
        },
      ],
      results: [
        { metric: 'NAP Consistency', before: '58%', after: '100%' },
        { metric: 'Citation Flow', before: '12', after: '38' },
        { metric: 'Local 3‑Pack Visibility', before: '0%', after: '74%' },
      ],
    },
    reputation: {
      title: 'Reviews & Reputation',
      icon: <Star size={22} />,
      duration: 'Month 2–9',
      strategy: 'Stop ignoring reviews. We implemented a review generation platform that sent SMS/email requests to every customer 24h after job completion. We responded to every single review (good or bad) with personalized, human replies.',
      phases: [
        {
          title: 'Review Generation',
          duration: 'Month 2–4',
          tasks: [
            { l: 'Review Automation Setup', d: 'Integrated with Jobber → auto invites. 4.9★ average from 187 new reviews within 5 months.' },
            { l: 'Review Response Template', d: 'Trained office manager to respond within 24h. All reviews show active management.' },
          ],
        },
        {
          title: 'Negative Review Recovery',
          duration: 'Month 3–6',
          tasks: [
            { l: 'Old Review Dilution', d: '80% of old 1‑star reviews were from a different company — we flagged 9 to Google and they were removed.' },
            { l: 'Rating Jump', d: 'Overall Google rating moved from 2.8 → 4.7. Conversion rate from profile to call tripled.' },
          ],
        },
      ],
      results: [
        { metric: 'Google Rating', before: '2.8', after: '4.7' },
        { metric: 'Review Count', before: '23', after: '210' },
        { metric: 'Response Rate', before: '4%', after: '100%' },
      ],
    },
  },

  finalResults: [
    { v: '#1 Pack', l: 'Local Rank', sub: '9 service cities', icon: <Award size={20} /> },
    { v: '4.7★', l: 'Rating', sub: '210 reviews', icon: <Star size={20} /> },
    { v: '3,820/mo', l: 'Organic Traffic', sub: 'Up 1,490%', icon: <TrendingUp size={20} /> },
    { v: '74/mo', l: 'Phone Leads', sub: 'From 18/mo', icon: <Phone size={20} /> },
    { v: '84%', l: 'Mobile Speed', sub: '34 → 84', icon: <Zap size={20} /> },
    { v: '$2.8M', l: 'Revenue', sub: '12‑month attributed', icon: <DollarSign size={20} /> },
  ],

  testimonial: {
    quote: "I’ve been roofing 25 years. I thought digital was just a website. These guys proved me wrong — our phone rings off the hook, and every caller says they found us on Google Maps. We’re turning down work now.",
    name: 'Bill Haskins',
    role: 'Owner',
    company: 'Summit Roofing & Exteriors',
  },
};

// ─── MINI BAR CHART ──────────────────────────────────────────────────────────

function MiniChart() {
  const data = [18, 32, 41, 55, 63, 70, 74, 74, 78, 74]; // calls per month
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
              {v}
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

export default function LocalBusinessCaseStudy() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const [activeService, setActiveService] = useState('local');
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
    <div className="min-h-screen py-12 bg-gradient-primary text-white overflow-x-hidden font-sans">

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
            <span className="bg-gradient-to-r from-white via-red-200 to-red-500 bg-clip-text text-transparent block">{CASE.headline.split(' ').slice(0, 2).join(' ')}</span>
            <span className="bg-gradient-to-r from-red-500 via-red-300 to-white bg-clip-text text-transparent block">{CASE.headline.split(' ').slice(2).join(' ')}</span>
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
          <span className="text-gray-600 text-xs tracking-widest uppercase">Local Case Study ↓</span>
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
          <SectionHeader num="02" icon={<Search size={22} />} title="Local Audit" />

          <p className="text-gray-400 text-lg max-w-3xl mb-10 leading-relaxed">
            Before touching anything, we audited every local signal: GMB, citations, reviews, on‑page, backlinks.
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
          <SectionHeader num="03" icon={<Layers size={22} />} title="Local Stack Execution" />

          <p className="text-gray-400 text-lg max-w-3xl mb-10 leading-relaxed">
            Four integrated local tracks. Every tactical move fed into map rankings and calls.
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
            After 10 months of integrated local execution, Summit Roofing dominates their service area.
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
              <h3 className="text-red-400 text-xs font-black uppercase tracking-widest mb-4">Calls / month (last 10 months)</h3>
              <MiniChart />
            </div>
            <div className="bg-gradient-primary rounded-2xl p-8 border border-red-800/40 hover:border-red-600/30 transition-all duration-400">
              <h3 className="text-red-400 text-xs font-black uppercase tracking-widest mb-5">Local Milestones</h3>
              <ul className="space-y-3">
                {[
                  { mo: 'Mo. 2', w: 'GMB merged & verified. Citations cleaned.' },
                  { mo: 'Mo. 3', w: 'First city pages indexed — calls up 40%.' },
                  { mo: 'Mo. 5', w: 'Rank in local pack for 5 cities.' },
                  { mo: 'Mo. 7', w: 'Review count 150+, rating 4.6★.' },
                  { mo: 'Mo. 9', w: 'Top 3 in all 9 cities; 74 calls/mo.' },
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
          <SectionHeader num="05" icon={<Award size={22} />} title="Key Local Lessons" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: '01', t: 'Consistency = Trust', d: 'Google needs to see the same NAP everywhere. One typo can drop you out of the pack.' },
              { n: '02', t: 'City Pages Win', d: 'Unique content per city with local landmarks beat thin aggregator pages every time.' },
              { n: '03', t: 'Reviews drive rank', d: 'Velocity, diversity, and responses directly correlate with local pack position.' },
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
                DOMINATE YOUR LOCAL MARKET
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Get a free local SEO audit: citations, GMB, rankings, and revenue opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="group relative px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full text-lg font-black transition-all duration-300 transform hover:scale-105 hover:-rotate-1 cursor-pointer overflow-hidden shadow-xl shadow-red-600/30"
                >
                  <span className="relative z-10">Book Free Local Audit</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="absolute top-0 -left-full w-full h-full bg-white/20 transform skew-x-12 group-hover:left-full transition-all duration-700" />
                </button>
                <button
                  onClick={() => window.location.href = '/services'}
                  className="group relative px-10 py-4 border-2 border-red-600 hover:bg-red-600 rounded-full text-lg font-black transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden"
                >
                  <span className="relative z-10">View All Local Services</span>
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