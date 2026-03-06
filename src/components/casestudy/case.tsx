'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Search, BarChart2, Settings, TrendingUp, AlertCircle, CheckCircle,
  Target, Zap, Globe, DollarSign, Clock, ArrowRight,
  Eye, Link, FileText, Cpu, Award, ChevronRight
} from 'lucide-react';

const TIMELINE = [
  { month: 'Month 1', traffic: 12000, keywords: 145, backlinks: 890 },
  { month: 'Month 2', traffic: 18500, keywords: 380, backlinks: 970 },
  { month: 'Month 3', traffic: 28000, keywords: 720, backlinks: 1120 },
  { month: 'Month 4', traffic: 38000, keywords: 1100, backlinks: 1380 },
  { month: 'Month 5', traffic: 52000, keywords: 1450, backlinks: 1740 },
  { month: 'Month 6', traffic: 66000, keywords: 1890, backlinks: 2210 },
];

const PHASES = [
  {
    num: '01',
    icon: <Cpu size={22} />,
    title: 'Technical SEO Overhaul',
    duration: 'Month 1 — Weeks 1–4',
    tasks: [
      { label: 'Full Site Crawl & Audit', detail: 'Crawled all 2,847 pages using Screaming Frog + custom Python scripts. Identified 312 critical and moderate issues including broken links, redirect chains, orphan pages, and missing meta tags.' },
      { label: 'Core Web Vitals Fix', detail: 'LCP reduced from 8.2s → 1.9s by compressing images, deferring JavaScript, and implementing lazy loading. FID improved by removing render-blocking resources. CLS fixed by adding explicit size attributes to all images and embeds.' },
      { label: 'Indexation Repair', detail: 'Resolved crawl budget waste by noindexing 340 thin parameter URLs. Fixed robots.txt that was accidentally blocking 4 critical JS files. Submitted clean sitemap — indexed pages jumped from 1,720 to 2,810 in 6 weeks.' },
      { label: 'Schema Markup Implementation', detail: 'Deployed Product, BreadcrumbList, FAQPage, and Organization schema across all relevant pages. Within 3 weeks, 127 products gained rich snippets in SERPs, improving CTR by 34%.' },
      { label: 'Canonicalization & Duplicate Fix', detail: 'Audited 890 pages with duplicate or missing meta descriptions. Implemented self-referencing canonical tags site-wide. Resolved 63 instances of content cannibalization via 301 redirects and page consolidation.' },
      { label: 'Mobile Optimization', detail: 'Rebuilt mobile viewport configuration. Fixed tap target sizes, font scaling, and horizontal scroll issues across 200+ pages. Mobile usability errors dropped from 187 to 0.' },
    ],
  },
  {
    num: '02',
    icon: <FileText size={22} />,
    title: 'Content Strategy & Optimization',
    duration: 'Month 2–4 — Weeks 5–16',
    tasks: [
      { label: 'Keyword Mapping & Cluster Architecture', detail: 'Built 12 topical authority clusters covering every stage of the buyer journey. Mapped 1,200+ keywords to specific pages. Identified 47 featured snippet opportunities for informational queries.' },
      { label: 'Product Description Rewrite (450 pages)', detail: 'Every product page rewritten with 400–800 words of SEO-optimized content. Included primary keyword in H1, LSI terms throughout, unique selling points, and spec tables. Bounce rate dropped 28% on rewritten pages.' },
      { label: '30 In-Depth Buying Guides', detail: 'Created comprehensive 2,000–4,000 word guides targeting high-intent informational keywords. Each guide included comparison tables, pros/cons sections, and FAQ blocks targeting voice search.' },
      { label: 'Category Page Optimization', detail: 'Rewrote all 68 category pages with 500–1,000 words of targeted copy. Added filter-based internal linking, breadcrumbs, and curated product highlights. Category pages now account for 38% of all organic entries.' },
      { label: 'FAQ & Featured Snippet Strategy', detail: 'Implemented FAQPage schema on 87 pages. Structured content in Q&A format to target position zero. Captured 31 featured snippets within 90 days — driving an additional 4,200 zero-click visibility impressions daily.' },
      { label: 'Internal Linking Architecture', detail: 'Built a full internal link map across 2,800 pages using a hub-and-spoke model. Added contextual links from high-authority pages to underperforming ones. Average crawl depth reduced from 6.2 to 2.8 clicks from homepage.' },
    ],
  },
  {
    num: '03',
    icon: <Link size={22} />,
    title: 'Off-Page Authority Building',
    duration: 'Month 4–6 — Weeks 17–24',
    tasks: [
      { label: 'Digital PR Campaign', detail: 'Produced 2 original industry data studies. Pitched to 140 journalists. Secured coverage in TechCrunch, Wired, The Verge, and 9 other publications — generating 34 editorial backlinks with avg DA 72.' },
      { label: 'High-Authority Guest Posting', detail: 'Published 18 expert guest posts on industry blogs with DA 45–80. Each post included 2 contextual links back to target pages. Topics were carefully selected to align with keyword clusters for maximum relevance.' },
      { label: 'Brand Mention Reclamation', detail: 'Used Ahrefs alerts to find 67 unlinked brand mentions across the web. Reached out with personalized emails — converted 41 of 67 mentions into followed backlinks. Zero cost, high return.' },
      { label: 'Skyscraper Link Building', detail: 'Identified 5 competitor resources with 50+ backlinks each. Created definitively superior versions with original data, better design, and more depth. Emailed all linking sites — recaptured 28% of competitor links.' },
      { label: 'Competitor Backlink Replication', detail: 'Scraped complete backlink profiles of top 5 competitors. Identified 340 high-value linking opportunities not yet pointing to our client. Outreach campaign secured 52 new links from relevant niche sites within 8 weeks.' },
      { label: 'Local & Niche Directory Submissions', detail: 'Submitted to 85 industry-specific directories for NAP consistency and topical relevance signals. Prioritized directories with real traffic. Built 3 links from .edu domains via resource page outreach.' },
    ],
  },
  {
    num: '04',
    icon: <BarChart2 size={22} />,
    title: 'Analytics, Reporting & Refinement',
    duration: 'Month 1–6 — Ongoing',
    tasks: [
      { label: 'Custom GA4 + Search Console Dashboard', detail: 'Built a real-time Looker Studio dashboard tracking 40+ KPIs: organic sessions, avg. position, CTR by category, new vs. returning users, revenue attribution, and page-level performance. Client had full visibility 24/7.' },
      { label: 'Weekly Rank Tracking', detail: 'Monitored 1,200 target keywords weekly using SEMrush. Set automated alerts for ranking drops >3 positions. Responded to any algorithm fluctuations within 48 hours with page-level adjustments.' },
      { label: 'Monthly Performance Reviews', detail: 'Delivered detailed monthly reports with YoY and MoM comparisons, keyword movement tables, backlink acquisition summary, and next-month action plan. All data verified against GA4, GSC, and Ahrefs simultaneously.' },
      { label: 'A/B Testing Title Tags & Meta Descriptions', detail: 'Ran 6 rounds of title tag A/B tests using Search Console CTR data. Best-performing variants increased average CTR from 2.1% to 4.8% on tested pages — a direct traffic gain without ranking improvement.' },
      { label: 'Conversion Rate Optimization (CRO)', detail: 'Analyzed user behavior with Hotjar heatmaps. Identified that 62% of mobile users were abandoning product pages at the image carousel. Rebuilt carousel UI — mobile conversion rate increased 41% within 2 weeks.' },
      { label: 'Algorithm Update Response', detail: 'Google released a core update in Month 4. Our E-E-A-T-focused content strategy meant zero ranking drops. Competitors lost 15–40% of traffic. We gained 8% from absorbing their lost positions during the update window.' },
    ],
  },
];

const BEFORE_AFTER = [
  { metric: 'Monthly Organic Traffic', before: '12,000', after: '66,000', icon: <TrendingUp size={16} /> },
  { metric: 'Keyword Rankings', before: '145', after: '1,890', icon: <Target size={16} /> },
  { metric: 'Domain Authority', before: '18', after: '41', icon: <Award size={16} /> },
  { metric: 'Indexed Pages', before: '1,720', after: '2,810', icon: <Globe size={16} /> },
  { metric: 'Page Speed (Mobile)', before: '8.2s', after: '1.9s', icon: <Zap size={16} /> },
  { metric: 'Backlink Profile', before: '890', after: '2,210', icon: <Link size={16} /> },
  { metric: 'Conversion Rate', before: '1.2%', after: '3.1%', icon: <DollarSign size={16} /> },
  { metric: 'Crawl Errors', before: '312', after: '4', icon: <Settings size={16} /> },
];

function TrafficChart({ data }) {
  const max = Math.max(...data.map(d => d.traffic));
  return (
    <div className="flex items-end gap-2 h-48 px-1 pt-8 relative">
      {data.map((d, i) => {
        const h = (d.traffic / max) * 140;
        return (
          <div key={i} className="flex-1 flex flex-col items-center gap-1.5 group">
            <div className="w-full flex flex-col items-center relative">
              <span className="absolute -top-6 text-xs text-red-400 font-black opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {(d.traffic / 1000).toFixed(0)}k
              </span>
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-red-800 to-red-400 group-hover:from-red-600 group-hover:to-red-200 transition-all duration-300 relative overflow-hidden"
                style={{ height: `${h}px` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-x-0 top-0 h-0.5 bg-red-300/60 rounded-t-md" />
              </div>
            </div>
            <span className="text-xs text-gray-600 group-hover:text-gray-300 transition-colors duration-200 text-center leading-tight">
              {d.month.replace('Month ', 'Mo.')}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function SEOCaseStudy() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activePhase, setActivePhase] = useState(null);
  const [activeTask, setActiveTask] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
    const mm = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', mm);
    return () => window.removeEventListener('mousemove', mm);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-primary pt-10 text-white overflow-x-hidden">

      {/* Mouse follower */}
      <div className="fixed w-4 h-4 bg-red-500/30 rounded-full pointer-events-none z-50 transition-all duration-150" style={{ left: mousePos.x - 8, top: mousePos.y - 8 }} />
      <div className="fixed w-8 h-8 border border-red-500/20 rounded-full pointer-events-none z-50 transition-all duration-300" style={{ left: mousePos.x - 16, top: mousePos.y - 16 }} />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(239,68,68,0.12),transparent_60%)] animate-pulse" />
        <div className="absolute top-16 left-16 w-20 h-20 border-2 border-red-600/20 rotate-45" style={{ animation: 'spinSlow 12s linear infinite' }} />
        <div className="absolute bottom-24 right-24 w-14 h-14 bg-red-500/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-40 w-2 h-2 bg-red-500/50 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />

        <div className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-300 text-sm font-semibold mb-8 backdrop-blur-sm">
            <BarChart2 size={14} />
            <span>Full Case Study — E-commerce SEO Transformation</span>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-900 rounded-2xl flex items-center justify-center text-2xl font-black shadow-xl shadow-red-600/30">RC</div>
            <div className="text-left">
              <div className="text-gray-500 text-sm">Client</div>
              <div className="text-2xl font-black text-white">RetailCorp</div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-none mb-6">
            <span className="bg-gradient-to-r from-white via-white-200 to-white bg-clip-text text-transparent block">FROM PAGE 4 TO POSITION 1</span>
         
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            How we took a stagnant e-commerce store from 12,000 to 66,000 monthly organic visitors — a complete, step-by-step account of every tactic, every decision, and every result.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { v: '450%', l: 'Traffic Growth' },
              { v: '6 Mo.', l: 'Timeline' },
              { v: '+1,745', l: 'New Keywords' },
              { v: '$2.1M', l: 'Revenue Added' },
            ].map((s, i) => (
              <div key={i} className="bg-gradient-primary backdrop-blur-sm border border-red-800/40 rounded-2xl p-4 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-black text-red-400">{s.v}</div>
                <div className="text-gray-500 text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/4 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/4 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-600 text-xs tracking-widest uppercase">Read the Full Story</span>
          <ChevronRight size={16} className="text-red-600 rotate-90" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">

        {/* ── SECTION 01: THE PROBLEM ──────────────────────── */}
        <section className="py-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-red-600/20 rounded-2xl flex items-center justify-center text-red-400 flex-shrink-0"><AlertCircle size={22} /></div>
            <div>
              <span className="text-red-500 text-xs font-black tracking-widest uppercase">Section 01</span>
              <h2 className="text-4xl font-black text-white">The Problem</h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-red-600/40 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-gradient-primary rounded-3xl p-8 border border-red-800/50 hover:border-red-500/60 transition-all duration-500">
              <h3 className="text-xl font-black text-white mb-4">Background</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                RetailCorp is a mid-sized e-commerce retailer selling consumer electronics — laptops, smartphones, accessories — with a catalog of over 2,800 SKUs. They had been operating for 7 years with a loyal customer base built primarily through paid advertising.
              </p>
              <p className="text-gray-400 leading-relaxed">
                By early 2024, rising CPCs on Google Ads and Meta had squeezed their margins severely. Their paid ROAS had dropped from 4.8x to 2.1x in 18 months. They needed organic search to carry the load — but their SEO was essentially nonexistent.
              </p>
            </div>
            <div className="bg-gradient-primary rounded-3xl p-8 border border-red-900/30 hover:border-red-600/40 transition-all duration-500">
              <h3 className="text-xl font-black text-red-300 mb-5">Pain Points When We Arrived</h3>
              <ul className="space-y-3">
                {[
                  'Ranking pages 4–6 for all primary product keywords',
                  '40% of product pages not indexed by Google',
                  'Mobile page speed score of 18/100',
                  'Zero backlinks from DA 40+ domains',
                  'Duplicate meta descriptions across 890 pages',
                  'Content cannibalization on 63 keyword pairs',
                  'No structured data or schema markup anywhere',
                  'Blog with 80 posts generating only 200 monthly visits',
                ].map((p, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <div className="w-5 h-5 bg-red-700/40 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-600/70 transition-colors duration-300">
                      <div className="w-2 h-2 bg-red-400 rounded-full group-hover:animate-pulse" />
                    </div>
                    <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-primary rounded-3xl p-8 border border-red-800/40">
            <h3 className="text-gray-500 text-xs font-black tracking-widest uppercase mb-6">Baseline Metrics — Day 1</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { l: 'Monthly Organic Visits', v: '12,000' },
                { l: 'Keyword Rankings', v: '145' },
                { l: 'Domain Authority', v: '18 / 100' },
                { l: 'Mobile Page Speed', v: '18 / 100' },
              ].map((m, i) => (
                <div key={i} className="text-center group cursor-default">
                  <div className="text-3xl font-black text-gray-500 group-hover:text-red-500 transition-colors duration-300">{m.v}</div>
                  <div className="text-gray-600 text-xs mt-1 group-hover:text-gray-400 transition-colors duration-300">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 02: DISCOVERY ──────────────────────────── */}
        <section className="py-20 border-t border-red-900/60">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-red-600/20 rounded-2xl flex items-center justify-center text-red-400 flex-shrink-0"><Search size={22} /></div>
            <div>
              <span className="text-red-500 text-xs font-black tracking-widest uppercase">Section 02</span>
              <h2 className="text-4xl font-black text-white">Discovery & Deep Research</h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-red-600/40 to-transparent" />
          </div>

          <p className="text-gray-400 text-lg mb-10 max-w-3xl leading-relaxed">
            Before writing a single word of content or building a single link, we spent 3 full weeks in deep research mode. Every decision in this campaign was backed by data, not assumptions.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {[
              { metric: 'Pages Crawled', value: '2,847', sub: 'Full site audit' },
              { metric: 'Critical Issues', value: '312', sub: 'Resolved 308' },
              { metric: 'Keyword Gaps', value: '1,200+', sub: 'Untapped opportunities' },
              { metric: 'Competitors Analyzed', value: '8', sub: 'Full backlink dissection' },
              { metric: 'Content Issues', value: '63', sub: 'Cannibalization cases' },
              { metric: 'Backlink Prospects', value: '340', sub: 'Outreach pipeline built' },
            ].map((d, i) => (
              <div key={i} className="group bg-gradient-primary rounded-2xl p-6 border border-red-800/50 hover:border-red-500/70 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600/15 transition-all duration-400 cursor-default text-center">
                <div className="text-3xl font-black text-red-400 group-hover:text-red-300 group-hover:animate-pulse transition-all duration-300">{d.value}</div>
                <div className="text-white font-bold text-sm mt-1">{d.metric}</div>
                <div className="text-gray-600 text-xs mt-0.5">{d.sub}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-primary rounded-2xl p-8 border border-red-800/50 hover:border-red-500/60 transition-all duration-400">
              <h3 className="text-red-400 text-sm font-black uppercase tracking-widest mb-5">What We Analyzed</h3>
              {[
                { icon: <Cpu size={16} />, t: 'Technical Infrastructure', d: 'Full crawl, server response codes, redirect chains, JS rendering, Core Web Vitals, mobile usability, security headers' },
                { icon: <FileText size={16} />, t: 'Content Quality', d: 'Thin content, duplicate issues, cannibalization, topical coverage gaps, E-E-A-T signals, readability scores' },
                { icon: <Link size={16} />, t: 'Backlink Profile', d: 'Toxic link audit, anchor text distribution, referring domain quality, competitor gap analysis, link velocity' },
                { icon: <Eye size={16} />, t: 'SERP Landscape', d: 'Featured snippet opportunities, People Also Ask clusters, video carousels, shopping intent, local pack presence' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 mb-5 last:mb-0 group p-3 rounded-xl hover:bg-red-600/5 transition-all duration-300">
                  <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center text-red-400 flex-shrink-0 group-hover:bg-red-600/40 transition-colors duration-300">{item.icon}</div>
                  <div>
                    <div className="text-white font-bold text-sm group-hover:text-red-300 transition-colors duration-300">{item.t}</div>
                    <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-primary rounded-2xl p-8 border border-red-800/50 hover:border-red-500/60 transition-all duration-400">
              <h3 className="text-red-400 text-sm font-black uppercase tracking-widest mb-5">Critical Insights Found</h3>
              {[
                'Google was devaluing the site due to 890 pages with duplicate meta descriptions — a silent penalty many miss',
                'Competitors averaging DA 38 outranked them because they had 10x more topical depth on target keywords',
                'Crawl budget was being wasted on 340 thin parameter URLs, causing important product pages to be crawled only every 14 days',
                'A single redirect chain was passing PageRank through 6 hops — effectively losing 80% of link equity',
                '47 high-value informational queries had featured snippet opportunities with zero current competition',
                'The blog existed but had no internal links — Google couldn\'t discover 60 of the 80 posts via crawling',
              ].map((ins, i) => (
                <div key={i} className="flex items-start gap-3 mb-4 last:mb-0 group p-2 rounded-lg hover:bg-red-600/5 transition-all duration-300">
                  <CheckCircle size={14} className="text-red-500 flex-shrink-0 mt-0.5 group-hover:text-red-300 transition-colors duration-300" />
                  <span className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{ins}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 03: STRATEGY ──────────────────────────── */}
        <section className="py-20 border-t border-red-900/60">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-red-600/20 rounded-2xl flex items-center justify-center text-red-400 flex-shrink-0"><Target size={22} /></div>
            <div>
              <span className="text-red-500 text-xs font-black tracking-widest uppercase">Section 03</span>
              <h2 className="text-4xl font-black text-white">The Strategy</h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-red-600/40 to-transparent" />
          </div>

          <p className="text-gray-400 text-lg mb-10 max-w-3xl leading-relaxed">
            Our approach was built on three pillars executed in precise order. Skipping the foundation to jump straight to links — a common mistake — wastes every dollar. We went in sequence: fix the house, furnish it, then invite the guests.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { n: '1', t: 'Fix the Foundation', d: 'Technical SEO — no traffic strategy works on a broken site. We made Google able to fully crawl, understand, and trust every page.', icon: <Cpu size={20} /> },
              { n: '2', t: 'Build the Content', d: 'Comprehensive content strategy — filling topical authority gaps, upgrading thin pages, and creating content that searchers and algorithms both reward.', icon: <FileText size={20} /> },
              { n: '3', t: 'Earn the Authority', d: 'Off-page signals — quality backlinks, brand mentions, and digital PR to tell Google this site deserves to rank at the top.', icon: <Award size={20} /> },
            ].map((p, i) => (
              <div key={i} className="group relative bg-gradient-primary rounded-2xl p-8 border border-red-800/50 hover:border-red-500/70 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-red-600/20 cursor-default overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute top-0 left-0 w-0 h-0 border-l-4 border-t-4 border-transparent group-hover:border-red-500/50 rounded-tl-2xl transition-all duration-500 group-hover:w-10 group-hover:h-10" />
                <div className="relative z-10">
                  <div className="text-6xl font-black text-gray-800 group-hover:text-red-900/40 transition-colors duration-500 absolute top-3 right-5 leading-none select-none">{p.n}</div>
                  <div className="w-10 h-10 bg-red-600/20 rounded-xl flex items-center justify-center text-red-400 mb-4 group-hover:scale-110 group-hover:bg-red-600/40 transition-all duration-300">{p.icon}</div>
                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-red-300 transition-colors duration-300">{p.t}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{p.d}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline bar */}
          <div className="bg-gradient-primary rounded-2xl p-8 border border-red-800/40">
            <h3 className="text-gray-500 text-xs font-black tracking-widest uppercase mb-6">6-Month Execution Timeline</h3>
            <div className="space-y-4">
              {[
                { label: 'Technical SEO', months: [1, 2], color: 'bg-red-700' },
                { label: 'Content Strategy', months: [2, 3, 4], color: 'bg-red-600' },
                { label: 'Link Building', months: [4, 5, 6], color: 'bg-red-500' },
                { label: 'Analytics & CRO', months: [1, 2, 3, 4, 5, 6], color: 'bg-red-950' },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <span className="text-gray-400 text-sm w-36 flex-shrink-0 group-hover:text-white transition-colors duration-300">{row.label}</span>
                  <div className="flex-1 grid grid-cols-6 gap-1">
                    {[1, 2, 3, 4, 5, 6].map(m => (
                      <div key={m} className={`h-7 rounded-md transition-all duration-300 ${row.months.includes(m) ? `${row.color} opacity-90 group-hover:opacity-100` : 'bg-gradient-primary'}`} />
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-4 pt-2 border-t border-red-800/40">
                <span className="w-36 flex-shrink-0" />
                <div className="flex-1 grid grid-cols-6 gap-1">
                  {['Mo. 1', 'Mo. 2', 'Mo. 3', 'Mo. 4', 'Mo. 5', 'Mo. 6'].map(m => (
                    <span key={m} className="text-xs text-gray-700 text-center">{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 04: IMPLEMENTATION ────────────────────── */}
        <section className="py-20 border-t border-red-900/60">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-red-600/20 rounded-2xl flex items-center justify-center text-red-400 flex-shrink-0"><Zap size={22} /></div>
            <div>
              <span className="text-red-500 text-xs font-black tracking-widest uppercase">Section 04</span>
              <h2 className="text-4xl font-black text-white">Full Implementation</h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-red-600/40 to-transparent" />
          </div>

          <p className="text-gray-400 text-lg mb-12 max-w-3xl leading-relaxed">
            Every tactic documented. Every decision explained. This is the complete, unfiltered implementation record — what we did, how we did it, and why it worked.
          </p>

          <div className="space-y-6">
            {PHASES.map((phase, pi) => (
              <div key={pi} className="group relative bg-gradient-primary rounded-3xl border border-red-900/30 hover:border-red-600/40 transition-all duration-500 overflow-hidden">
                <button
                  onClick={() => setActivePhase(activePhase === pi ? null : pi)}
                  className="w-full flex items-center gap-5 p-8 text-left"
                >
                  <div className="w-14 h-14 bg-red-600/20 rounded-2xl flex items-center justify-center text-red-400 group-hover:scale-105 group-hover:bg-red-600/40 transition-all duration-300 flex-shrink-0">
                    {phase.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-red-600 text-xs font-black tracking-widest uppercase">Phase {phase.num}</span>
                      <span className="text-gray-600 text-xs">{phase.duration}</span>
                    </div>
                    <h3 className="text-2xl font-black text-white group-hover:text-red-300 transition-colors duration-300">{phase.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-red-500 text-sm font-semibold flex-shrink-0">
                    <span className="hidden md:block">{phase.tasks.length} Tactics</span>
                    <ChevronRight size={20} className={`transition-transform duration-300 ${activePhase === pi ? 'rotate-90' : ''}`} />
                  </div>
                </button>

                {/* Preview tags when collapsed */}
                {activePhase !== pi && (
                  <div className="px-8 pb-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {phase.tasks.slice(0, 4).map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-red-600/10 text-red-400 border border-red-600/20 rounded-full text-xs font-semibold">{t.label}</span>
                      ))}
                      {phase.tasks.length > 4 && (
                        <span className="px-3 py-1 bg-gradient-primary text-gray-500 rounded-full text-xs">+{phase.tasks.length - 4} more</span>
                      )}
                    </div>
                    <button onClick={() => setActivePhase(pi)} className="text-red-500 text-sm font-semibold hover:text-red-300 transition-colors duration-300 flex items-center gap-1">
                      Expand full implementation <ChevronRight size={14} />
                    </button>
                  </div>
                )}

                {/* Expanded tasks */}
                {activePhase === pi && (
                  <div className="px-8 pb-8 space-y-3">
                    {phase.tasks.map((task, ti) => (
                      <div
                        key={ti}
                        onClick={() => setActiveTask(activeTask === `${pi}-${ti}` ? null : `${pi}-${ti}`)}
                        className="cursor-pointer bg-gradient-primary hover:bg-gradient-primary rounded-2xl p-6 border border-red-800/50 hover:border-red-500/60 transition-all duration-300 group/task"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-7 h-7 bg-red-600/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/task:bg-red-600/60 transition-colors duration-300">
                            <CheckCircle size={14} className="text-red-400" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between gap-4">
                              <h4 className="text-white font-bold group-hover/task:text-red-300 transition-colors duration-300">{task.label}</h4>
                              <ArrowRight size={14} className={`text-red-600 flex-shrink-0 transition-transform duration-300 ${activeTask === `${pi}-${ti}` ? 'rotate-90' : ''}`} />
                            </div>
                            {activeTask === `${pi}-${ti}` && (
                              <p className="text-gray-400 text-sm mt-3 leading-relaxed">{task.detail}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 05: BEFORE vs AFTER ───────────────────── */}
        <section className="py-20 border-t border-red-900/60">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-red-600/20 rounded-2xl flex items-center justify-center text-red-400 flex-shrink-0"><TrendingUp size={22} /></div>
            <div>
              <span className="text-red-500 text-xs font-black tracking-widest uppercase">Section 05</span>
              <h2 className="text-4xl font-black text-white">Before vs. After</h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-red-600/40 to-transparent" />
          </div>

          <div className="rounded-3xl border border-red-800/40 overflow-hidden">
            <div className="grid grid-cols-3 text-xs font-black text-red-300/70 uppercase tracking-widest px-8 py-5 border-b border-red-800/40 bg-gradient-primary">
              <span>Metric</span>
              <span className="text-center">Before</span>
              <span className="text-center">After 6 Months</span>
            </div>
            {BEFORE_AFTER.map((row, i) => (
              <div key={i} className="group grid grid-cols-3 px-8 py-5 border-b border-red-900/50 last:border-0 hover:bg-red-600/5 transition-all duration-300 items-center">
                <div className="flex items-center gap-2">
                  <div className="text-red-700 group-hover:text-red-400 transition-colors duration-300">{row.icon}</div>
                  <span className="text-gray-300 font-semibold text-sm group-hover:text-white transition-colors duration-300">{row.metric}</span>
                </div>
                <div className="text-center text-red-500/70 font-mono font-bold group-hover:text-red-400 transition-colors duration-300">{row.before}</div>
                <div className="text-center text-green-400 font-mono font-black text-lg group-hover:text-green-300 group-hover:animate-pulse transition-all duration-300">{row.after}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 06: RESULTS ────────────────────────────── */}
        <section className="py-20 border-t border-red-900/60">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-red-600/20 rounded-2xl flex items-center justify-center text-red-400 flex-shrink-0"><BarChart2 size={22} /></div>
            <div>
              <span className="text-red-500 text-xs font-black tracking-widest uppercase">Section 06</span>
              <h2 className="text-4xl font-black text-white">The Results</h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-red-600/40 to-transparent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { v: '450%', l: 'Organic Traffic Growth', sub: '12K → 66K/mo' },
              { v: '1,745+', l: 'New Keywords Ranking', sub: '145 → 1,890' },
              { v: '23', l: '#1 Rankings Achieved', sub: 'High-value terms' },
              { v: '$2.1M', l: 'Annual Revenue Added', sub: 'Organic search only' },
            ].map((s, i) => (
              <div key={i} className="group bg-gradient-primary rounded-2xl p-6 border border-red-800/50 hover:border-red-500/70 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600/20 transition-all duration-400 text-center cursor-default">
                <div className="text-4xl font-black text-red-400 group-hover:text-red-300 group-hover:animate-pulse transition-all duration-300">{s.v}</div>
                <div className="text-white font-bold text-sm mt-1">{s.l}</div>
                <div className="text-gray-600 text-xs mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-gradient-primary rounded-2xl p-8 border border-red-800/50 hover:border-red-500/60 transition-all duration-400">
              <h3 className="text-red-400 text-sm font-black uppercase tracking-widest mb-4">Monthly Organic Traffic Growth</h3>
              <TrafficChart data={TIMELINE} />
            </div>
            <div className="bg-gradient-primary rounded-2xl p-8 border border-red-800/50 hover:border-red-500/60 transition-all duration-400">
              <h3 className="text-red-400 text-sm font-black uppercase tracking-widest mb-5">Month-by-Month Milestones</h3>
              <ul className="space-y-4">
                {[
                  { mo: 'Month 1', win: 'Technical fixes complete. Indexation up 63%. First ranking movements visible.' },
                  { mo: 'Month 2', win: 'Product page rewrites live. Traffic +54%. 380 keywords now tracking.' },
                  { mo: 'Month 3', win: 'Buying guides indexed. First #1 positions achieved. Featured snippets appearing.' },
                  { mo: 'Month 4', win: 'Link building producing results. DA climbed to 31. 1,100 keywords in top 100.' },
                  { mo: 'Month 5', win: 'Digital PR coverage in major publications. 23 #1 positions held.' },
                  { mo: 'Month 6', win: '66K monthly visitors. 1,890 ranking keywords. $2.1M annual revenue uplift.' },
                ].map((m, i) => (
                  <li key={i} className="flex items-start gap-3 group p-2 rounded-xl hover:bg-red-600/5 transition-all duration-300">
                    <span className="text-red-500 font-black text-xs w-16 flex-shrink-0 mt-0.5 group-hover:text-red-300 transition-colors duration-300">{m.mo}</span>
                    <span className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{m.win}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-primary rounded-2xl p-8 border border-red-800/40">
            <h3 className="text-red-400 text-sm font-black uppercase tracking-widest mb-6">Headline Achievements</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Ranked #1 for 23 high-value commercial product keywords',
                '31 featured snippets captured for informational queries',
                'Domain Authority grew from 18 to 41 in 6 months',
                '2,210 quality backlinks built — zero toxic links',
                'Mobile conversion rate increased 41% via CRO work',
                'Organic traffic now accounts for 44% of total revenue',
                'Paid advertising spend reduced by $34,000/month',
                'Core Web Vitals all green — zero Search Console errors',
              ].map((a, i) => (
                <div key={i} className="flex items-start gap-3 group p-3 rounded-xl hover:bg-red-600/5 transition-all duration-300">
                  <div className="w-6 h-6 bg-red-600/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/60 transition-colors duration-300">
                    <CheckCircle size={12} className="text-red-400" />
                  </div>
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ────────────────────────────────────── */}
        <section className="py-10 border-t border-red-900/60">
          <div className="relative bg-gradient-primary rounded-3xl p-12 border border-red-900/40 hover:border-red-600/50 transition-all duration-500 overflow-hidden">
            <div className="absolute top-6 left-8 text-9xl text-red-500/10 font-black leading-none select-none pointer-events-none">"</div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-900 via-red-500 to-red-900" />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <span key={i} className="text-red-500 text-2xl">★</span>)}
              </div>
              <p className="text-2xl text-gray-100 leading-relaxed italic mb-8">
                "Our organic traffic increased by 450% in just 6 months. The SEO strategy was perfectly tailored to our business goals. We went from being invisible in search to dominating page 1 for every major keyword in our category. The team documented everything transparently — we knew exactly what was happening and why. Best investment we have ever made."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-900 rounded-full flex items-center justify-center text-xl font-black shadow-xl shadow-red-600/30">JT</div>
                <div className="text-left">
                  <div className="font-black text-white text-lg">Jessica Taylor</div>
                  <div className="text-gray-400 text-sm">Marketing Director — RetailCorp</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 07: KEY LESSONS ────────────────────────── */}
        <section className="py-20 border-t border-red-900/60">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-red-600/20 rounded-2xl flex items-center justify-center text-red-400 flex-shrink-0"><Award size={22} /></div>
            <div>
              <span className="text-red-500 text-xs font-black tracking-widest uppercase">Section 07</span>
              <h2 className="text-4xl font-black text-white">Key Lessons</h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-red-600/40 to-transparent" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: '01', t: 'Technical First, Always', d: 'The biggest mistake is investing in content and links while the site has crawl issues. You are pouring water into a leaking bucket. Fix the foundation before anything else.' },
              { n: '02', t: 'Topical Depth Beats Breadth', d: "Covering 5 topics deeply outperforms covering 50 topics shallowly. Google's Helpful Content system rewards sites that genuinely serve specific audiences comprehensively." },
              { n: '03', t: 'Data PR Earns the Best Links', d: 'Publishing original research is the single highest-ROI link building tactic. Journalists cite data. The 2 reports we produced generated 34 editorial backlinks from DA 50+ publications.' },
            ].map((l, i) => (
              <div key={i} className="group relative bg-gradient-primary rounded-2xl p-8 border border-red-800/50 hover:border-red-500/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600/20 cursor-default overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-600/0 to-transparent group-hover:via-red-500/60 transition-all duration-500 rounded-b-2xl" />
                <div className="text-6xl font-black text-gray-800 group-hover:text-red-900/30 transition-colors duration-500 mb-4 leading-none select-none">{l.n}</div>
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-red-300 transition-colors duration-300">{l.t}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{l.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────── */}
        <section className="py-20">
          <div className="relative bg-gradient-primary rounded-3xl p-14 border border-red-900/30 overflow-hidden text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(239,68,68,0.10),transparent_70%)] animate-pulse" />
            <div className="absolute top-6 left-6 w-12 h-12 border-2 border-red-600/20 rotate-45" style={{ animation: 'spinSlow 10s linear infinite' }} />
            <div className="absolute bottom-6 right-6 w-8 h-8 bg-red-500/10 rounded-full animate-bounce" style={{ animationDelay: '0.7s' }} />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent">
                WANT THESE RESULTS?
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Get a free, detailed SEO audit of your website. We will show you exactly what is holding you back and build a custom roadmap to fix it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="group relative px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full text-lg font-black transition-all duration-300 transform hover:scale-105 hover:-rotate-1 cursor-pointer overflow-hidden shadow-xl shadow-red-600/30"
                >
                  <span className="relative z-10">Get My Free SEO Audit</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="absolute top-0 -left-full w-full h-full bg-white/20 transform skew-x-12 group-hover:left-full transition-all duration-700" />
                </button>
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="group relative px-10 py-4 border-2 border-red-600 hover:bg-red-600 rounded-full text-lg font-black transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden"
                >
                  <span className="relative z-10">Talk to Our Team</span>
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