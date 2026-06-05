/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, ShieldCheck, MapPin, Send, MessageSquare, CheckCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  // Form states
  const [partnerType, setPartnerType] = useState("owner"); // owner, institution, hnwi
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  // Project specific states (for owner)
  const [sectorType, setSectorType] = useState("Hạ tầng & Bất động sản Công nghiệp");
  const [capexVal, setCapexVal] = useState("");
  const [legalStatus, setLegalStatus] = useState("Đã có Chủ trương đầu tư");
  
  // Custom message
  const [message, setMessage] = useState("");
  
  // Interactive submission tracking state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate creation of a physical tracking record & ticket
    const randId = `HHT-KYC-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketNumber(randId);
    setIsSubmitted(true);
  };

  return (
    <section className="bg-bg-dark py-16 sm:py-24 text-cream border-b border-gold/10" id="contact-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-gold">{t.contact.title}</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-cream font-serif">
            {t.contact.heading}
          </p>
          <div className="mx-auto mt-4 h-0.5 w-20 bg-gold"></div>
          <p className="mx-auto mt-6 max-w-2xl text-xs sm:text-sm text-cream/80">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Outer Split layout */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 items-start" id="contact-split-layout">
          
          {/* Left Column: Office coordinates and policy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded border border-gold/15 bg-card-dark/20 p-6 md:p-8 space-y-4">
              <h3 className="font-serif text-lg font-bold text-cream uppercase tracking-wide">
                {t.contact.officeTitle}
              </h3>
              
              <div className="space-y-4 text-xs text-cream/90">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gold font-mono uppercase tracking-widest">{t.contact.hqTitle}</h4>
                    <p className="mt-0.5 text-cream/80">{t.contact.hqDesc}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gold font-mono uppercase tracking-widest">{t.contact.emailTitle}</h4>
                    <p className="mt-0.5 text-gold">hungvcapital@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shield and compliance callout */}
            <div className="rounded border border-gold/15 bg-card-dark/40 p-6 space-y-4">
              <div className="flex items-center space-x-2 text-gold">
                <ShieldCheck className="h-5 w-5 text-gold" />
                <h4 className="font-serif font-bold text-xs uppercase tracking-widest">{t.contact.complianceTitle}</h4>
              </div>
              <p className="text-xs text-cream/80 leading-relaxed">
                {t.contact.complianceDesc}
              </p>
            </div>
          </div>

          {/* Right Column: Intelligent preliminary filter Form */}
          <div className="lg:col-span-7 rounded border border-gold/20 bg-card-dark p-6 md:p-10 shadow-2xl">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* KYC Filter Point 1 */}
                <div className="space-y-2">
                  <label className="block text-[11px] font-mono uppercase text-gold font-semibold mb-1">{t.contact.sec1Title}</label>
                  <div className="grid grid-cols-3 gap-2" id="contact-partner-type">
                    {[
                      { id: "owner", title: t.contact.partnerTypes.owner.title, desc: t.contact.partnerTypes.owner.desc },
                      { id: "institution", title: t.contact.partnerTypes.institution.title, desc: t.contact.partnerTypes.institution.desc },
                      { id: "hnwi", title: t.contact.partnerTypes.hnwi.title, desc: t.contact.partnerTypes.hnwi.desc }
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        type="button"
                        onClick={() => {
                          setPartnerType(btn.id);
                        }}
                        className={`p-3 rounded border text-center transition-all flex flex-col items-center justify-center cursor-pointer ${
                          partnerType === btn.id 
                            ? "bg-gold text-bg-dark border-gold font-bold" 
                            : "bg-bg-dark text-cream border-gold/15 hover:bg-gold/10"
                        }`}
                      >
                        <span className="text-xs font-serif uppercase tracking-wider">{btn.title}</span>
                        <span className="text-[9px] font-normal leading-tight opacity-80 mt-1">{btn.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Shared inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-gold font-semibold mb-1">{t.contact.labelFullName}</label>
                    <input 
                      type="text" 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full rounded bg-bg-dark border border-gold/20 p-2.5 text-xs text-cream focus:border-gold focus:outline-none"
                      placeholder="e.g. Nguyen Admin"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-gold font-semibold mb-1">{t.contact.labelCompany}</label>
                    <input 
                      type="text" 
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full rounded bg-bg-dark border border-gold/20 p-2.5 text-xs text-cream focus:border-gold focus:outline-none"
                      placeholder="e.g. HHT Capital Partners"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-gold font-semibold mb-1">{t.contact.labelEmail}</label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded bg-bg-dark border border-gold/20 p-2.5 text-xs text-cream focus:border-gold focus:outline-none"
                      placeholder="e.g. partner@hhtcapital.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-gold font-semibold mb-1">{t.contact.labelPhone}</label>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded bg-bg-dark border border-gold/20 p-2.5 text-xs text-cream focus:border-gold focus:outline-none"
                      placeholder="e.g. 090xxxxxxx"
                      required
                    />
                  </div>
                </div>

                {/* Conditional Inputs if Owner (Thông tin dự án sơ bộ) */}
                {partnerType === "owner" && (
                  <div className="bg-bg-dark/40 p-4 rounded border border-gold/15 space-y-4 shadow-inner" id="owner-preliminary-kyc">
                    <h4 className="font-mono text-[10px] uppercase text-gold tracking-widest font-bold">{t.contact.sec2Title}</h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[9.5px] font-mono uppercase text-gold mb-1">{t.contact.labelSectorType}</label>
                        <select 
                          value={sectorType}
                          onChange={(e) => setSectorType(e.target.value)}
                          className="w-full rounded bg-bg-dark border border-gold/25 p-2.5 text-xs text-cream focus:border-gold focus:outline-none"
                        >
                          <option>Hạ tầng & Bất động sản Công nghiệp</option>
                          <option>Năng lượng tái tạo & Dự án Xanh</option>
                          <option>Tái cấu trúc & Sáp nhập Doanh nghiệp</option>
                          <option>Khác</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[9.5px] font-mono uppercase text-gold mb-1">{t.contact.labelCapexScope}</label>
                        <input 
                          type="number" 
                          value={capexVal}
                          onChange={(e) => setCapexVal(e.target.value)}
                          className="w-full rounded bg-bg-dark border border-gold/25 p-2.5 text-xs text-cream focus:border-gold focus:outline-none"
                          placeholder="e.g. 45"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[9.5px] font-mono uppercase text-gold mb-1">{t.contact.labelLegalStatus}</label>
                      <select 
                        value={legalStatus}
                        onChange={(e) => setLegalStatus(e.target.value)}
                        className="w-full rounded bg-bg-dark border border-gold/25 p-2.5 text-xs text-cream focus:border-gold focus:outline-none"
                      >
                        <option>Đã có Chủ trương đầu tư</option>
                        <option>Đã có Quy hoạch chi tiết 1/500</option>
                        <option>Đã có Sổ đỏ vĩnh viễn</option>
                        <option>Khác</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Message text */}
                <div>
                  <label className="block text-[10px] font-mono uppercase text-gold font-semibold mb-1">{t.contact.labelMessage}</label>
                  <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full rounded bg-bg-dark border border-gold/20 p-2.5 text-xs text-cream focus:border-gold focus:outline-none block"
                    placeholder="Quy cách chi tiết dự án, khó khăn về dòng tiền hoặc khẩu vị thặng dư thu xếp..."
                  ></textarea>
                </div>

                {/* Privacy Safeguard notice and checkbox */}
                <div className="border-t border-gold/10 pt-4 text-[11px] text-cream/70 leading-relaxed font-sans" id="privacy-safeguard">
                  <p className="flex items-start">
                    <span className="mr-2.5 h-1.5 w-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0"></span>
                    <span>
                      <strong>{t.contact.privacyTitle}</strong> {t.contact.privacyDesc}
                    </span>
                  </p>
                </div>

                <button 
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded bg-gold py-3 text-xs font-bold uppercase tracking-wider text-bg-dark hover:bg-cream cursor-pointer"
                >
                  <Send className="mr-2 h-3.5 w-3.5" />
                  {t.contact.btnSubmit}
                </button>
              </form>
            ) : (
              /* Submission Successful Simulation Card */
              <div className="space-y-6 text-center py-6 animate-fade-in" id="contact-success-box">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold border border-gold/30">
                  <CheckCircle className="h-7 w-7" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-cream uppercase tracking-wider font-serif">{t.contact.successHeading}</h3>
                  <p className="text-xs text-cream/70 leading-relaxed">
                    {t.contact.successDesc}
                  </p>
                </div>

                <div className="max-w-md mx-auto rounded border border-gold/25 bg-bg-dark/50 p-5 text-left space-y-3 font-mono text-[11px]">
                  <div className="flex justify-between text-gold border-b border-gold/10 pb-2">
                    <span>{t.contact.ticketLabel}</span>
                    <span className="font-extrabold">{ticketNumber}</span>
                  </div>
                  <div className="space-y-1 text-cream/90">
                    <p>{t.contact.successPartner} <strong className="text-cream">{fullName || "Nguyễn Văn A"}</strong></p>
                    <p>{t.contact.successCompany} <strong className="text-cream">{companyName || "Đại diện M&A"}</strong></p>
                    <p>{t.contact.successKyc} <strong className="text-gold uppercase">{partnerType === "owner" ? t.contact.partnerTypes.owner.title : partnerType === "institution" ? t.contact.partnerTypes.institution.title : t.contact.partnerTypes.hnwi.title}</strong></p>
                    
                    {partnerType === "owner" && (
                      <div className="mt-2 border-t border-gold/10 pt-2 space-y-1 text-gold/90 animate-fade-in">
                        <p>{t.contact.successSector} {sectorType}</p>
                        <p>{t.contact.successCapex} ${capexVal || "45"}M USD</p>
                        <p>{t.contact.successLegal} {legalStatus}</p>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-[11px] text-cream/80 italic max-w-sm mx-auto leading-relaxed">
                  {t.contact.successNote.replace("{email}", email)}
                </p>

                <button 
                  type="button" 
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded bg-bg-dark hover:bg-gold/10 border border-gold/20 text-xs text-cream transition cursor-pointer"
                >
                  {t.contact.btnNewSubmit}
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
