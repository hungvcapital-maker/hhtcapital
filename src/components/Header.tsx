/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Shield, Sparkles, Network, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "databank", label: t.nav.databank },
    { id: "insights", label: t.nav.insights },
    { id: "contact", label: t.nav.contact }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold/30 bg-bg-dark/95 backdrop-blur-md shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveTab("home")}
          className="flex cursor-pointer items-center space-x-3"
          id="nav-logo"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-card-dark to-gold p-[1px] shadow-inner">
            <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-bg-dark text-gold">
              <span className="font-mono text-lg font-bold tracking-widest">HHT</span>
            </div>
          </div>
          <div className="flex flex-col animate-fade-in">
            <h1 className="font-sans text-lg font-bold tracking-wider text-gold">
              HHT <span className="text-cream font-light text-sm tracking-widest pl-1 uppercase opacity-90">CAPITAL</span>
            </h1>
            <span className="font-mono text-[9px] tracking-[0.25em] text-gold/60 uppercase">
              The Master Router of Capital
            </span>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-1" id="nav-desktop">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-tab-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                  isActive 
                    ? "text-gold bg-card-dark/60 border-b border-gold" 
                    : "text-cream/80 hover:text-gold hover:bg-card-dark/40"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Dynamic Trust Flag & Language Selector */}
        <div className="flex items-center space-x-3" id="nav-badge-wall">
          {/* Aesthetic 4-Language Switcher */}
          <div className="flex items-center space-x-1.5 border border-gold/20 bg-card-dark/60 rounded px-2 py-1" id="header-lang-selector">
            <Globe className="h-3 w-3 text-gold/80" />
            <div className="flex items-center divide-x divide-gold/25" id="header-lang-toggles">
              {[
                { code: "vi", label: "VI" },
                { code: "en", label: "EN" },
                { code: "zh", label: "ZH" },
                { code: "ja", label: "JA" }
              ].map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as any)}
                  className={`px-1.5 text-[10px] font-mono font-extrabold cursor-pointer transition ${
                    language === lang.code 
                      ? "text-gold" 
                      : "text-cream/60 hover:text-gold"
                  }`}
                  title={lang.code === "vi" ? "Tiếng Việt" : lang.code === "en" ? "English" : lang.code === "zh" ? "中文" : "日本語"}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-1.5 rounded bg-card-dark px-3 py-1 text-[10px] text-cream border border-gold/30">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold"></span>
            </span>
            <Shield className="h-3 w-3 text-gold" />
            <span className="font-mono uppercase tracking-wider text-[9px]">Chinese Wall Protocol Active</span>
          </div>

          <div className="flex lg:hidden items-center space-x-1.5 rounded bg-gold/10 px-2.5 py-1 text-[10px] text-gold border border-gold/20">
            <Shield className="h-3 w-3" />
            <span className="font-mono uppercase text-[8px]">SECURE</span>
          </div>
        </div>
      </div>

      {/* Navigation - Mobile Scroller */}
      <div className="md:hidden flex overflow-x-auto border-t border-card-dark bg-card-dark/20 p-2 scrollbar-none" id="nav-mobile-scroll">
        <div className="flex space-x-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-mob-tab-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`whitespace-nowrap px-3 py-1.5 rounded text-[11px] font-medium transition-all ${
                  isActive 
                    ? "bg-gold text-bg-dark font-bold" 
                    : "text-cream hover:bg-card-dark"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}

