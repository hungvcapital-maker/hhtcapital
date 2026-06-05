/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ShieldAlert, LogIn, Lock, Mail, CheckCircle2, RefreshCw, Layers, Calculator, FileText, Activity } from "lucide-react";
import { SAMPLE_PROJECTS } from "../data";
import { ProjectData, FinancialModelParams } from "../types";
import { useLanguage } from "../context/LanguageContext";

export default function DataBank() {
  const { t } = useLanguage();

  // Authentication Simulate State
  const [partnerEmail, setPartnerEmail] = useState("institutional-partner@fund.com");
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [otpInput, setOtpInput] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [authError, setAuthError] = useState("");

  // Grid / Project Selection States
  const [selectedProjectId, setSelectedProjectId] = useState<string>("proj-1");
  const currentProject = SAMPLE_PROJECTS.find(p => p.id === selectedProjectId) || SAMPLE_PROJECTS[0];

  // Financial Model Input parameter states
  const [finParams, setFinParams] = useState<FinancialModelParams>({
    equityPercentage: 35,
    debtPercentage: 65,
    costOfEquity: 13.5,
    costOfDebt: 7.2,
    taxRate: 20,
    capexAmount: 45, // Million USD
    annualRevenue: 9.8 // Annual operational EBITDA Cash Flow
  });

  // Access audit log simulator - state
  const [auditLogs, setAuditLogs] = useState<any[]>([]);

  // Calculate WACC & Financial Indicators
  const calcWacc = () => {
    const we = finParams.equityPercentage / 100;
    const wd = finParams.debtPercentage / 100;
    const ke = finParams.costOfEquity / 100;
    const kd = finParams.costOfDebt / 100;
    const tVal = finParams.taxRate / 100;

    // Formula: WACC = We*Ke + Wd*Kd*(1-tVal)
    const waccValue = (we * ke) + (wd * kd * (1 - tVal));
    return waccValue; 
  };

  const waccResult = calcWacc();
  const waccPercentStr = (waccResult * 100).toFixed(2);

  const calculateNPV = () => {
    // Basic NPV calculation for 10 operational years
    let npvSum = -finParams.capexAmount;
    for (let yr = 1; yr <= 10; yr++) {
      npvSum += finParams.annualRevenue / Math.pow(1 + waccResult, yr);
    }
    return npvSum;
  };

  const calculateIRR = () => {
    let low = 0.0;
    let high = 1.0;
    let irr = 0.0;
    
    for (let iter = 0; iter < 100; iter++) {
      irr = (low + high) / 2;
      let npvSum = -finParams.capexAmount;
      for (let yr = 1; yr <= 10; yr++) {
        npvSum += finParams.annualRevenue / Math.pow(1 + irr, yr);
      }
      
      if (Math.abs(npvSum) < 0.0001) break;
      if (npvSum > 0) {
        low = irr;
      } else {
        high = irr;
      }
    }
    return irr * 100;
  };

  const calculatePayback = () => {
    if (finParams.annualRevenue <= 0) return "N/A";
    const pb = finParams.capexAmount / finParams.annualRevenue;
    return `${pb.toFixed(1)} yrs`;
  };

  // Helper function to send simulated OTP key
  const handleTriggerOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerEmail.includes("@") || partnerEmail.length < 5) {
      setAuthError("Vui lòng cung cấp đúng cú pháp email định chế. / Invalid corporate email syntax.");
      return;
    }
    setAuthError("");
    setOtpSent(true);
    // Generate simulated dynamic security key
    const generatedKey = `HHT-${Math.floor(1000 + Math.random() * 9000)}`;
    setOtpCode(generatedKey);
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpInput.trim() === otpCode) {
      setIsUnlocked(true);
      setAuthError("");
      
      // Seed audit log footprints
      const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
      setAuditLogs([
        { timestamp, action: "Xác thực mã bảo bảo mật OTP thành công. / Secured OTP Key Verified.", role: partnerEmail },
        { timestamp, action: "Truy cập tệp dữ liệu mô hình tài sinh động. / Dynamic financial model workspace unlocked.", role: "AUDIT STAMP" }
      ]);
    } else {
      setAuthError("Mã bảo mật OTP không chính xác. / Incorrect secure OTP key. Please verify sample box.");
    }
  };

  // Update specific parameters based on project change
  useEffect(() => {
    if (selectedProjectId === "proj-1") {
      setFinParams({
        equityPercentage: 35,
        debtPercentage: 65,
        costOfEquity: 13.0,
        costOfDebt: 7.2,
        taxRate: 20,
        capexAmount: 45.0,
        annualRevenue: 9.8
      });
    } else if (selectedProjectId === "proj-2") {
      setFinParams({
        equityPercentage: 40,
        debtPercentage: 60,
        costOfEquity: 12.0,
        costOfDebt: 6.8,
        taxRate: 20,
        capexAmount: 85.0,
        annualRevenue: 16.5
      });
    } else {
      setFinParams({
        equityPercentage: 30,
        debtPercentage: 70,
        costOfEquity: 14.5,
        costOfDebt: 8.0,
        taxRate: 20,
        capexAmount: 32.5,
        annualRevenue: 8.5
      });
    }
  }, [selectedProjectId]);

  // Handle parameters update to log action
  const handleParamChange = (field: keyof FinancialModelParams, value: number) => {
    setFinParams(prev => ({
      ...prev,
      [field]: value
    }));

    // Append standard audit trail dynamically
    const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
    setAuditLogs(prev => [
      { timestamp, action: `Cập nhật tham số mô phỏng [${field}] thành: ${value} / Mod parameter [${field}] to: ${value}`, role: partnerEmail },
      ...prev.slice(0, 8)
    ]);
  };

  return (
    <section className="bg-bg-dark py-16 sm:py-24 text-cream border-b border-gold/10" id="databank-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gold font-mono">{t.databank.title}</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-cream sm:text-4xl font-serif">
            {t.databank.heading}
          </p>
          <div className="mx-auto mt-4 h-0.5 w-20 bg-gold"></div>
          <p className="mx-auto mt-6 max-w-3xl text-xs sm:text-sm text-cream/80">
            {t.databank.subtitle}
          </p>
        </div>

        {/* Lock overlay if not authenticated */}
        {!isUnlocked ? (
          <div className="mx-auto mt-12 max-w-lg rounded border border-gold/30 bg-card-dark p-6 md:p-8 shadow-xl" id="databank-auth-box">
            <div className="text-center space-y-3">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-bg-dark text-gold border border-gold/30">
                <Lock className="h-6 w-6" id="lock-icon" />
              </div>
              <h3 className="text-sm font-extrabold text-gold uppercase tracking-widest font-sans">
                {t.databank.authTitle}
              </h3>
              <p className="text-xs text-cream/80 leading-relaxed">
                {t.databank.authDesc}
              </p>
            </div>

            {authError && (
              <div className="mt-4 rounded bg-red-950/80 border border-red-500/30 p-2.5 text-xs text-red-200 font-medium text-center">
                {authError}
              </div>
            )}

            {!otpSent ? (
              <form onSubmit={handleTriggerOTP} className="mt-6 space-y-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-gold font-semibold mb-1">{t.databank.partnerIdLabel}</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gold/60" />
                    <input 
                      type="email" 
                      value={partnerEmail}
                      onChange={(e) => setPartnerEmail(e.target.value)}
                      className="w-full rounded border border-gold/20 bg-bg-dark py-2.5 pl-10 pr-4 text-xs text-cream focus:border-gold focus:outline-none"
                      placeholder={t.databank.partnerIdPlaceholder}
                      required
                    />
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="w-full inline-flex items-center justify-center rounded bg-gold py-2.5 text-xs font-bold uppercase tracking-wider text-bg-dark hover:bg-cream cursor-pointer"
                >
                  {t.databank.btnUnlock}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOTP} className="mt-6 space-y-4">
                {/* Simulated mailbox notification */}
                <div className="rounded border border-gold/30 bg-gold/10 p-3 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-gold font-mono block">SMS / Email Sandbox Simulator:</span>
                  <p className="text-[11px] text-cream leading-relaxed">
                    OTP key for <span className="font-semibold text-gold">{partnerEmail}</span> is: <span className="font-mono font-extrabold text-xs text-bg-dark bg-gold px-2.5 py-0.5 rounded">{otpCode}</span>
                  </p>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-gold font-semibold mb-1">OTP CODE</label>
                  <input 
                    type="text" 
                    value={otpInput}
                    onChange={(e) => setOtpInput(e.target.value)}
                    className="w-full rounded border border-gold/30 bg-bg-dark py-2 px-3 text-xs focus:border-gold focus:outline-none text-center font-mono font-bold tracking-widest text-cream uppercase"
                    placeholder="HHT-XXXX"
                    required
                  />
                </div>
                <div className="flex space-x-2">
                  <button 
                    type="button" 
                    onClick={() => setOtpSent(false)}
                    className="flex-1 rounded border border-gold/30 text-gold text-xs py-2 hover:bg-card-dark cursor-pointer animate-fade-in"
                  >
                    Back
                  </button>
                  <button 
                    type="submit" 
                    className="flex-1 rounded bg-gold text-bg-dark text-xs py-2 font-bold uppercase tracking-wider hover:bg-cream cursor-pointer"
                  >
                    Confirm & Decrypt
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Unlocked Workspace */
          <div className="mt-12 grid gap-8 lg:grid-cols-12 items-start" id="databank-unlocked-workspace">
            
            {/* Left Rail: List of Clean Anonymous Corridors */}
            <div className="lg:col-span-4 space-y-4 animate-fade-in">
              <div className="rounded border border-gold/15 bg-card-dark/30 p-4">
                <div className="flex items-center space-x-2 opacity-90 text-gold mb-3">
                  <Layers className="h-4 w-4 text-gold" />
                  <h3 className="font-serif text-xs font-extrabold uppercase tracking-widest">{t.databank.docIndex}</h3>
                </div>
                <p className="text-[10.5px] text-cream/80 mb-4 leading-relaxed">
                  {t.databank.accessGranted}
                </p>

                <div className="space-y-2.5" id="databank-project-selector-rail">
                  {SAMPLE_PROJECTS.map((proj) => {
                    const isSelected = proj.id === selectedProjectId;
                    return (
                      <button
                        key={proj.id}
                        id={`btn-select-${proj.id}`}
                        onClick={() => setSelectedProjectId(proj.id)}
                        className={`w-full text-left p-3 rounded border transition-all cursor-pointer ${
                          isSelected 
                            ? "bg-gradient-to-r from-card-dark to-bg-dark text-cream border-gold" 
                            : "bg-bg-dark text-cream/70 border-gold/10 hover:border-gold/40"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-mono text-[9px] font-bold tracking-wider rounded px-1.5 py-0.5 bg-gold/10 text-gold border border-gold/20">
                            {proj.code}
                          </span>
                          <span className="text-[9px] font-semibold text-gold/80 italic">
                            {proj.location.split(",")[0]}
                          </span>
                        </div>
                        <h4 className="text-xs font-semibold leading-normal font-serif tracking-wider uppercase text-cream">
                          {proj.title}
                        </h4>
                        <div className="mt-2 text-[10px] flex items-center justify-between font-mono opacity-85">
                          <span>Capex: {proj.capex}</span>
                          <span className="text-gold">WACC: {proj.waccRequired}%</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Secure Log Auditing Trail Display */}
              <div className="rounded border border-gold/15 bg-card-dark/30 p-4 space-y-3" id="real-time-audit-trail-card">
                <div className="flex items-center space-x-2 text-gold border-b border-gold/10 pb-2">
                  <Activity className="h-4 w-4 text-gold animate-pulse" />
                  <h4 className="font-serif text-xs font-bold uppercase tracking-widest">{t.databank.auditTrailTitle}</h4>
                </div>
                
                <div className="space-y-2 h-40 overflow-y-auto scrollbar-none" id="audit-trail-logs-scroller">
                  {auditLogs.map((log, lidx) => (
                    <div key={lidx} className="text-[10px] leading-tight space-y-0.5">
                      <div className="flex justify-between items-center text-gold/80">
                        <span className="font-mono text-[8.5px]">{log.timestamp}</span>
                        <span className="font-mono text-[8px] bg-gold/15 px-1.5 rounded truncate max-w-[120px]" title={log.role}>
                          {log.role}
                        </span>
                      </div>
                      <p className="text-cream/90 font-mono text-[9.5px] italic pl-2 border-l border-gold">
                        {log.action}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Display Area: Financial Model & Project DD Watermarked Room */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Active Project Header Info */}
              <div className="rounded border border-gold/20 bg-card-dark p-6 text-cream relative overflow-hidden shadow-md">
                {/* Document leakage watermark overlay */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] select-none flex items-center justify-center">
                  <div className="rotate-[-25deg] font-mono text-xl md:text-2xl font-black text-gold uppercase tracking-widest whitespace-nowrap">
                    CONFIDENTIAL DATA ROOM ACCESS • AUDITOR: {partnerEmail}
                  </div>
                </div>

                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="rounded bg-gold/10 border border-gold/25 font-mono text-xs px-2.5 py-1 text-gold font-bold">
                      HỒ SƠ SẠCH: {currentProject.code}
                    </span>
                    <span className="text-[11px] font-mono text-gold/80">
                      LEVEL 3 AUTHENTICATED SANDBOX
                    </span>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-cream tracking-wide font-serif uppercase">
                    {currentProject.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-sans opacity-95 border-t border-gold/10 pt-3">
                    <div>
                      <span className="text-gold font-mono text-[9px] uppercase tracking-wider block">{t.databank.sectorLabel}</span>
                      <span className="font-bold text-cream">{currentProject.sector}</span>
                    </div>
                    <div>
                      <span className="text-gold font-mono text-[9px] uppercase tracking-wider block">Admin boundary</span>
                      <span className="font-bold text-cream">{currentProject.location}</span>
                    </div>
                    <div>
                      <span className="text-gold font-mono text-[9px] uppercase tracking-wider block">{t.databank.legalStatusLabel}</span>
                      <span className="font-bold bg-gold/10 text-gold border border-gold/20 px-1.5 rounded inline-block mt-0.5">{currentProject.statusLegal}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Interactive Financial Model Simulation Box */}
              <div className="rounded border border-gold/15 bg-card-dark/20 p-5 md:p-6 space-y-6 shadow-sm" id="interactive-financial-model-card">
                <div className="flex items-center space-x-2 text-gold border-b border-gold/10 pb-3">
                  <Calculator className="h-4.5 w-4.5 text-gold" />
                  <h4 className="font-serif text-sm font-bold uppercase tracking-widest">Financial Solver Workspace</h4>
                </div>

                <p className="text-[11px] text-cream/80 leading-relaxed">
                  {t.services.anonymizerDesc}
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Model input modifiers */}
                  <div className="space-y-4 bg-bg-dark/60 p-4 rounded border border-gold/10">
                    <h5 className="font-mono text-[10px] uppercase font-bold text-gold tracking-widest">{t.databank.documentTypes.financial}</h5>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] text-cream">
                        <span>Equity: <span className="font-bold text-gold">{finParams.equityPercentage}%</span></span>
                        <span>Debt: <span className="font-bold text-gold">{finParams.debtPercentage}%</span></span>
                      </div>
                      <input 
                        type="range" 
                        min="10" 
                        max="90" 
                        step="5"
                        value={finParams.equityPercentage} 
                        onChange={(e) => {
                          const eq = Number(e.target.value);
                          handleParamChange("equityPercentage", eq);
                          handleParamChange("debtPercentage", 100 - eq);
                        }}
                        className="w-full accent-gold cursor-pointer"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div>
                        <label className="block text-[9.5px] font-mono uppercase text-gold mb-1">Ke (%)</label>
                        <input 
                          type="number" 
                          step="0.1"
                          value={finParams.costOfEquity} 
                          onChange={(e) => handleParamChange("costOfEquity", Number(e.target.value))}
                          className="w-full rounded border border-gold/20 bg-bg-dark p-1.5 text-xs text-cream font-mono font-bold focus:outline-none focus:border-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-[9.5px] font-mono uppercase text-gold mb-1">Kd (%)</label>
                        <input 
                          type="number" 
                          step="0.1"
                          value={finParams.costOfDebt} 
                          onChange={(e) => handleParamChange("costOfDebt", Number(e.target.value))}
                          className="w-full rounded border border-gold/20 bg-bg-dark p-1.5 text-xs text-cream font-mono font-bold focus:outline-none focus:border-gold"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div>
                        <label className="block text-[9.5px] font-mono uppercase text-gold mb-1">CIT (%)</label>
                        <input 
                          type="number" 
                          value={finParams.taxRate} 
                          onChange={(e) => handleParamChange("taxRate", Number(e.target.value))}
                          className="w-full rounded border border-gold/20 bg-bg-dark p-1.5 text-xs text-cream font-mono font-bold focus:outline-none focus:border-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-[9.5px] font-mono uppercase text-gold mb-1">Cashflow ($M)</label>
                        <input 
                          type="number" 
                          step="0.1"
                          value={finParams.annualRevenue} 
                          onChange={(e) => handleParamChange("annualRevenue", Number(e.target.value))}
                          className="w-full rounded border border-gold/20 bg-bg-dark p-1.5 text-xs text-cream font-mono font-bold focus:outline-none focus:border-gold"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Solver results outputs */}
                  <div className="space-y-4 bg-card-dark border border-gold/20 text-cream p-4 rounded flex flex-col justify-between" id="financial-outputs-box">
                    <div>
                      <h5 className="font-mono text-[10px] uppercase font-bold text-gold tracking-widest">HHT Solver outputs</h5>
                      
                      <div className="mt-3 grid grid-cols-1 gap-4 border-b border-gold/10 pb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] text-cream/70 font-mono">WACC:</span>
                          <span className="text-lg font-bold text-gold font-mono">{waccPercentStr}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] text-cream/70 font-mono">NPV:</span>
                          <span className={`text-lg font-bold font-mono ${calculateNPV() >= 0 ? 'text-gold' : 'text-red-400'}`}>
                            ${calculateNPV().toFixed(1)}M USD
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-[10px] text-cream/70 block font-mono">IRR:</span>
                          <span className="text-sm font-bold font-mono text-gold">{calculateIRR().toFixed(1)}%</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-cream/70 block font-mono">Payback:</span>
                          <span className="text-sm font-bold font-mono text-gold">{calculatePayback()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gold/10 pt-3 text-[10px] text-cream/80 leading-relaxed">
                      <span className="font-mono text-gold uppercase tracking-widest block mb-1">Recommendation:</span>
                      {calculateNPV() >= 0 ? (
                        <p className="border-l border-gold pl-2 italic">
                          Dự án đạt chỉ tiêu thặng dư ròng dương / Positive project NPV baseline: {calculateNPV().toFixed(2)}M USD.
                        </p>
                      ) : (
                        <p className="border-l border-red-400 pl-2 text-red-300 italic">
                          Khuyến nghị giảm tỉ suất Ke/Kd hoặc đối lưu nợ / Optimize leverage coefficients.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* ESG Compliance Standards Highlight */}
              <div className="rounded border border-gold/15 bg-card-dark/10 p-5 md:p-6 space-y-4">
                <div className="flex items-center space-x-2 text-gold">
                  <CheckCircle2 className="h-5 w-5 text-gold" />
                  <h4 className="font-serif text-sm font-bold uppercase tracking-widest">{t.insights.diagnosticTitle}</h4>
                </div>

                <div className="grid gap-4 md:grid-cols-3 text-xs leading-relaxed font-sans text-cream">
                  <div className="bg-bg-dark/50 p-3.5 rounded border border-gold/10 shadow-sm space-y-1">
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-gold">Carbon Offsite:</span>
                    <p className="font-semibold text-cream">{currentProject.complianceESG.carbonSaving}</p>
                  </div>
                  <div className="bg-bg-dark/50 p-3.5 rounded border border-gold/10 shadow-sm space-y-1">
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-gold">Waste Recycle:</span>
                    <p className="font-semibold text-cream">{currentProject.complianceESG.wasteReduction}</p>
                  </div>
                  <div className="bg-bg-dark/50 p-3.5 rounded border border-gold/10 shadow-sm space-y-1">
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-gold">Social Standard Metrics:</span>
                    <p className="font-semibold text-cream">{currentProject.complianceESG.socialScore}</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}

