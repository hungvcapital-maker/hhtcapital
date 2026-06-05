/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { FolderGit, Briefcase, FileSignature, Sparkles, Wand2, ShieldCheck, Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  // States for Blind Teaser Sim
  const [inRawProjectName, setInRawProjectName] = useState("Khu Công Nghiệp Sạch Cẩm Mỹ 250ha");
  const [inRawLocation, setInRawLocation] = useState("Đồng Nai, Việt Nam");
  const [inRawCAPEX, setInRawCAPEX] = useState("55"); // Mil USD
  const [inRawDebtRatio, setInRawDebtRatio] = useState("65"); // %
  const [inPrimarySector, setInPrimarySector] = useState("Hạ tầng & Bất động sản Công nghiệp");
  const [inESGAccents, setInESGAccents] = useState("Có hệ thống lọc nước sạch tuần hoàn & pin trời tự sản");

  // Output generated values
  const [redactedCode, setRedactedCode] = useState("HHT-IND-739");
  const [isAnonymized, setIsAnonymized] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleGenerateTeaser = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate generation
    const randomSuffix = Math.floor(100 + Math.random() * 900);
    const sectorCode = inPrimarySector.includes("Hạ tầng") || inPrimarySector.includes("Infrastructure") ? "LOG" : inPrimarySector.includes("Năng lượng") || inPrimarySector.includes("Energy") ? "RENE" : "CORP";
    setRedactedCode(`HHT-${sectorCode}-${randomSuffix}`);
    setIsAnonymized(true);
    setDownloadSuccess(false);
  };

  return (
    <section className="bg-bg-dark py-16 sm:py-24 text-cream border-b border-gold/10" id="services-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-gold">{t.services.title}</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-cream font-serif">
            {t.services.heading}
          </p>
          <div className="mx-auto mt-4 h-0.5 w-20 bg-gold"></div>
          <p className="mx-auto mt-6 max-w-2xl text-xs sm:text-sm text-cream/70">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Cards grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3" id="services-grid">
          {t.services.list.map((service) => (
            <div 
              key={service.idx} 
              className="flex flex-col justify-between rounded border border-gold/10 bg-card-dark/40 p-6 md:p-8 hover:border-gold/40 transition-all duration-300 relative overflow-hidden group"
              id={`service-card-${service.idx}`}
            >
              {/* Corner Watermark */}
              <div className="absolute right-4 top-4 font-mono text-3xl font-extrabold text-gold/15 select-none group-hover:text-gold/25">
                {service.idx}
              </div>

              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold font-bold block mb-1">
                  {service.tagline}
                </span>
                <h3 className="font-serif text-base font-bold text-cream tracking-wider uppercase mb-4">
                  {service.title}
                </h3>
                <p className="text-xs text-cream/80 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Checkmarks list */}
              <ul className="space-y-3.5 border-t border-gold/10 pt-6">
                {service.solutions.map((sol, index) => (
                  <li key={index} className="flex items-start text-xs text-cream/90">
                    <span className="mr-2.5 h-1.5 w-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0"></span>
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Interactive Tool - Blind Teaser Packager */}
        <div className="mt-16 rounded border border-gold/20 bg-card-dark/20 p-6 md:p-10 backdrop-blur-sm" id="services-teaser-packager">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            
            {/* Left Column: Form Intake */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="inline-flex items-center space-x-1 rounded bg-gold/10 px-2 py-1 text-[10px] text-gold font-mono border border-gold/20">
                  <Wand2 className="h-3 w-3" />
                  <span>{t.services.anonymizerTitle}</span>
                </span>
                <h3 className="font-serif text-lg font-bold text-cream uppercase tracking-wide">
                  {t.services.anonymizerHeading}
                </h3>
                <p className="text-xs text-cream/70 leading-relaxed">
                  {t.services.anonymizerDesc}
                </p>
              </div>

              <form onSubmit={handleGenerateTeaser} className="space-y-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase text-gold/80 font-semibold mb-1">{t.services.labelRawName}</label>
                  <input 
                    type="text" 
                    value={inRawProjectName} 
                    onChange={(e) => setInRawProjectName(e.target.value)}
                    className="w-full rounded bg-bg-dark border border-gold/20 p-2.5 text-xs text-cream focus:border-gold focus:outline-none"
                    placeholder="e.g. Cảng cạn Logistics Tây Ninh 40ha"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[10px] uppercase text-gold/80 font-semibold mb-1">{t.services.labelLocation}</label>
                    <input 
                      type="text" 
                      value={inRawLocation} 
                      onChange={(e) => setInRawLocation(e.target.value)}
                      className="w-full rounded bg-bg-dark border border-gold/20 p-2.5 text-xs text-cream focus:border-gold focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase text-gold/80 font-semibold mb-1">{t.services.labelCapex}</label>
                    <input 
                      type="number" 
                      value={inRawCAPEX} 
                      onChange={(e) => setInRawCAPEX(e.target.value)}
                      className="w-full rounded bg-bg-dark border border-gold/20 p-2.5 text-xs text-cream focus:border-gold focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[10px] uppercase text-gold/80 font-semibold mb-1">{t.services.labelSector}</label>
                    <select 
                      value={inPrimarySector}
                      onChange={(e) => setInPrimarySector(e.target.value)}
                      className="w-full rounded bg-bg-dark border border-gold/20 p-2.5 text-xs text-cream focus:border-gold focus:outline-none"
                    >
                      <option>Hạ tầng & Bất động sản Công nghiệp</option>
                      <option>Năng lượng tái tạo & Dự án Xanh</option>
                      <option>Tái cấu trúc & Sáp nhập Doanh nghiệp</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase text-gold/80 font-semibold mb-1">{t.services.labelDebt}</label>
                    <input 
                      type="number" 
                      max="90" 
                      min="10"
                      value={inRawDebtRatio} 
                      onChange={(e) => setInRawDebtRatio(e.target.value)}
                      className="w-full rounded bg-bg-dark border border-gold/20 p-2.5 text-xs text-cream focus:border-gold focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase text-gold/80 font-semibold mb-1">{t.services.labelEsg}</label>
                  <input 
                    type="text" 
                    value={inESGAccents} 
                    onChange={(e) => setInESGAccents(e.target.value)}
                    className="w-full rounded bg-bg-dark border border-gold/20 p-2.5 text-xs text-cream focus:border-gold focus:outline-none"
                    placeholder="Ví dụ: Giảm 20% phát thải, LEED Gold, sử dụng năng lượng tự phát"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded bg-gold py-3 text-xs font-bold uppercase tracking-wider text-bg-dark hover:bg-cream cursor-pointer"
                >
                  <Wand2 className="mr-2 h-3.5 w-3.5" />
                  {t.services.btnEncrypt}
                </button>
              </form>
            </div>

            {/* Right Column: Teaser Document Output Preview */}
            <div className="lg:col-span-7">
              <div className="relative rounded border border-gold/20 bg-bg-dark p-6 md:p-8 space-y-6 shadow-2xl">
                {/* Watermark simulated overlay */}
                <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-5">
                  <div className="rotate-45 font-mono text-3xl font-extrabold text-gold uppercase tracking-[1em] select-none whitespace-nowrap">
                    HHT PRIVATE DATA ROOM WATERMARK
                  </div>
                </div>

                <div className="relative z-10 border-b border-gold/10 pb-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-mono text-xs text-gold uppercase font-bold">
                      {isAnonymized ? `${t.services.previewRecordCode}: ${redactedCode}` : `${t.services.previewRecordCode}: ${t.services.previewUnencrypted}`}
                    </h4>
                    <span className="text-[10px] text-cream/60 block font-mono">{t.services.previewProtocol}</span>
                  </div>
                  <div>
                    <span className="rounded bg-gold/10 border border-gold/30 px-2.5 py-1 text-[9px] text-gold uppercase tracking-widest font-mono font-bold">
                      {isAnonymized ? t.services.previewEncrypted : t.services.previewDraft}
                    </span>
                  </div>
                </div>

                {/* Simulated Document details */}
                <div className="relative z-10 space-y-4" id="simulated-teaser-content">
                  <div>
                    <span className="font-mono text-[9px] uppercase text-gold">{t.services.previewSection1}</span>
                    <p className="text-xs font-bold font-sans mt-0.5 text-cream">
                      {isAnonymized ? t.services.previewSectorAc : inRawProjectName}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-gold/10 pt-3">
                    <div>
                      <span className="font-mono text-[9px] text-gold">{t.services.previewSection2}</span>
                      <p className="text-xs font-bold text-cream mt-0.5">
                        ${inRawCAPEX}.00M USD ({t.services.labelDebt}: {inRawDebtRatio}%)
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-gold">{t.services.previewSection3}</span>
                      <p className="text-xs font-bold text-cream mt-0.5">
                        {isAnonymized ? "Strategic Corridor, SE Asia" : inRawLocation}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gold/10 pt-3" id="simulated-teaser-esg">
                    <span className="font-mono text-[9px] text-gold">{t.services.previewSection4}</span>
                    <p className="text-xs text-cream/95 leading-relaxed mt-1 italic bg-card-dark/40 p-2.5 rounded border border-gold/15">
                      &quot;{inESGAccents || "Chưa khai báo dữ liệu ESG / None declared"}&quot;
                    </p>
                  </div>

                  <div className="border-t border-gold/10 pt-3" id="simulated-teaser-advisor">
                    <span className="font-mono text-[9px] text-gold">{t.services.previewSection5}</span>
                    <p className="text-[11px] text-cream mt-1">
                      HHT Capital Advisory Hub Network (Bộ lọc bảo mật kép).
                    </p>
                    <p className="text-[10px] text-cream/60 mt-1.5 leading-relaxed">
                      {t.services.previewAdvisorNote}
                    </p>
                  </div>
                </div>

                {isAnonymized && (
                  <div className="border-t border-gold/10 pt-4 flex flex-col sm:flex-row gap-3 relative z-10" id="anonymized-success-ctas">
                    <div className="flex-1 flex items-center space-x-2 text-cream/80 text-[11px]">
                      <ShieldCheck className="h-4 w-4 text-gold flex-shrink-0" />
                      <span>{t.services.successWatermark}</span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <button 
                        type="button"
                        onClick={() => setDownloadSuccess(true)}
                        className="inline-flex items-center justify-center rounded bg-card-dark border border-gold/30 hover:bg-gold/10 px-4 py-2 text-xs text-gold font-bold transition-all cursor-pointer"
                      >
                        <Download className="mr-1.5 h-3 w-3" />
                        {t.services.btnDownload}
                      </button>
                      {downloadSuccess && (
                        <p className="text-[10px] text-gold mt-1 animate-pulse font-mono font-semibold">
                          {t.services.downloadSuccessMsg}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}


