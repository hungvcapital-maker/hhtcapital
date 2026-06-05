/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Award, ShieldAlert, CheckCircle, Network, TrendingUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <section className="bg-bg-dark py-16 sm:py-24 border-b border-gold/10" id="about-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gold font-mono">{t.about.title}</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-cream sm:text-4xl font-serif">
            {t.about.heading}
          </p>
          <div className="mx-auto mt-4 h-0.5 w-20 bg-gold"></div>
          <p className="mx-auto mt-6 max-w-2xl text-sm text-cream/80">
            {t.about.subtitle}
          </p>
        </div>

        {/* 3-Phase Roadmap Timeline Layout in Bento Design */}
        <div className="mt-16" id="about-timeline">
          <h3 className="text-center font-mono text-xs uppercase tracking-widest text-gold font-bold mb-10">
            {t.about.roadmapTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {t.about.phases.map((step, idx) => (
              <div 
                key={idx} 
                className="relative p-6 rounded border border-gold/20 bg-card-dark/40 hover:border-gold/50 transition-all cursor-pointer" 
                id={`timeline-step-${idx}`}
              >
                {/* Node indicator badge styled */}
                <span className="absolute right-4 top-4 font-mono text-xs text-gold/30 font-bold">
                  0{idx + 1}
                </span>

                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] font-bold text-gold uppercase tracking-widest">
                    {step.phase}
                  </span>
                  {step.time && (
                    <span className="rounded bg-gold/10 px-2.5 py-0.5 font-mono text-[9px] font-bold text-gold border border-gold/30">
                      {step.time}
                    </span>
                  )}
                </div>

                <h4 className="text-sm font-bold text-cream font-sans tracking-tight uppercase">
                  {step.title}
                </h4>
                <p className="mt-2 text-xs text-cream/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Advantages & Firewall Column with Bento grid pattern */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2 items-stretch animate-fade-in" id="about-advantages">
          {/* Column 1: Core strengths styled in beautiful card wrapper */}
          <div className="border border-gold/15 p-6 rounded bg-card-dark/20 space-y-6">
            <h3 className="font-serif text-lg font-bold text-gold uppercase tracking-wider">
              {t.about.strengthsTitle}
            </h3>
            
            {t.about.strengths.map((strength, sIdx) => (
              <div key={sIdx} className="flex items-start space-x-3">
                <div className="mt-1 rounded bg-gold/10 p-1.5 text-gold border border-gold/20">
                  {sIdx === 0 ? <CheckCircle className="h-4 w-4" /> : <Network className="h-4 w-4" />}
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-cream">{strength.title}</h4>
                  <p className="mt-1 text-xs text-cream/75 leading-relaxed">
                    {strength.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2: Chinese Wall Security Protocol Banner conforming to Bento Style */}
          <div className="rounded border-2 border-dashed border-gold/30 bg-card-dark p-6 md:p-8 space-y-4 flex flex-col justify-center" id="chinese-wall-card">
            <div className="flex items-center space-x-2 text-gold">
              <ShieldAlert className="h-5 w-5 text-gold" />
              <h3 className="font-serif text-sm font-bold uppercase tracking-widest">
                {t.about.chineseWallTitle}
              </h3>
            </div>
            
            <blockquote className="border-l-2 border-gold pl-4 text-xs italic text-cream/90 leading-relaxed">
              {t.about.chineseWallQuote}
            </blockquote>

            <p className="text-[11px] text-cream/60 leading-relaxed">
              {t.about.chineseWallDesc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}


