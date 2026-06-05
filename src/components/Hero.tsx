/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowUpRight, ShieldAlert, Award, TrendingUp, Cpu } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface HeroProps {
  setActiveTab: (tab: string) => void;
}

export default function Hero({ setActiveTab }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-bg-dark pb-16 pt-20 text-cream sm:pb-24 sm:pt-28 border-b border-gold/10" id="hero-section">
      {/* Background Glows & Network Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src="/src/assets/images/hht_networks_1780634687636.png"
          alt="HHT Capital Router Network"
          className="h-full w-full object-cover mix-blend-screen"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/60 to-bg-dark/95"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Tagline Badge */}
          <div className="mx-auto mb-6 inline-flex items-center space-x-2 rounded bg-card-dark px-4 py-1.5 text-xs text-gold border border-gold/30 uppercase tracking-[0.2em] font-mono">
            <Cpu className="h-3.5 w-3.5 animate-pulse text-gold" />
            <span>{t.hero.tagline}</span>
          </div>

          {/* Slogan Title */}
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl" id="hero-title">
            <span className="block text-cream font-serif">{t.hero.title1}</span>
            <span className="mt-2 block bg-gradient-to-r from-gold via-cream to-gold/70 bg-clip-text text-transparent font-sans tracking-widest uppercase text-xl sm:text-2xl lg:text-4xl">
              {t.hero.title2}
            </span>
          </h2>

          {/* Sub head */}
          <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-base text-cream/80 leading-relaxed font-sans" id="hero-subtitle">
            {t.hero.subtitle}
          </p>

          {/* Call to Actions */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row" id="hero-cta">
            <button
              onClick={() => setActiveTab("contact")}
              className="group inline-flex items-center justify-center rounded-sm bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-bg-dark shadow-md transition-all hover:bg-cream hover:text-bg-dark focus:outline-none cursor-pointer"
              id="cta-submit-project"
            >
              {t.hero.ctaSubmit}
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <button
              onClick={() => setActiveTab("databank")}
              className="inline-flex items-center justify-center rounded-sm border border-gold/50 bg-card-dark px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-bg-dark focus:outline-none cursor-pointer"
              id="cta-connect-institution"
            >
              {t.hero.ctaDataBank}
            </button>
          </div>
        </div>

        {/* Brand Positioning Callout */}
        <div className="mx-auto mt-16 max-w-4xl rounded border border-gold/20 bg-card-dark/40 p-6 text-center backdrop-blur-sm" id="brand-positioning">
          <p className="font-sans text-xs sm:text-sm text-cream/95 leading-relaxed">
            <span className="font-bold text-gold uppercase tracking-wider block sm:inline mr-2">{t.hero.corePrincipleTitle}</span> {t.hero.corePrincipleDesc}
          </p>
        </div>

        {/* Simple Institutional Stats */}
        <div className="mt-16 sm:mt-20 border-t border-gold/20 pt-10" id="hero-stats">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="border border-gold/10 p-4 rounded bg-card-dark/20 text-center">
              <span className="block font-serif text-2xl sm:text-4xl font-extrabold text-gold">{t.hero.stat1Val}</span>
              <span className="mt-1 block font-mono text-[10px] sm:text-xs text-cream/60 uppercase tracking-wider">{t.hero.stat1Label}</span>
            </div>
            <div className="border border-gold/10 p-4 rounded bg-card-dark/20 text-center">
              <span className="block font-serif text-2xl sm:text-4xl font-extrabold text-gold">{t.hero.stat2Val}</span>
              <span className="mt-1 block font-mono text-[10px] sm:text-xs text-cream/60 uppercase tracking-wider">{t.hero.stat2Label}</span>
            </div>
            <div className="border border-gold/10 p-4 rounded bg-card-dark/20 text-center">
              <span className="block font-serif text-2xl sm:text-4xl font-extrabold text-gold">{t.hero.stat3Val}</span>
              <span className="mt-1 block font-mono text-[10px] sm:text-xs text-cream/60 uppercase tracking-wider">{t.hero.stat3Label}</span>
            </div>
            <div className="border border-gold/10 p-4 rounded bg-card-dark/20 text-center">
              <span className="block font-serif text-2xl sm:text-4xl font-extrabold text-gold">{t.hero.stat4Val}</span>
              <span className="mt-1 block font-mono text-[10px] sm:text-xs text-cream/60 uppercase tracking-wider">{t.hero.stat4Label}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

