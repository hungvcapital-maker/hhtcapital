/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProjectData {
  id: string;
  code: string; // Anonymous ID e.g., HHT-LOG-041, HHT-RE-089
  title: string; // Redacted name e.g., "Industrial Park Complex Near Cai Mep"
  sector: "Infrastructure & Logistics" | "Renewable Energy" | "Corporate Restructuring & Recapitalization";
  capex: string; // e.g. "$45M USD"
  waccRequired: number; // Required return e.g. 8.5%
  location: string; // Brand location, e.g. "Ba Ria - Vung Tau, Vietnam"
  statusPdf: string;
  statusLegal: "Approved Investment" | "1/500 Planning Completed" | "Certificate of Land Use Rights" | "Feasibility Study";
  complianceESG: {
    carbonSaving: string; // e.g. "45,000 tons CO2/year"
    wasteReduction: string; // e.g. "95% recycled"
    socialScore: string; // e.g. "LEED Gold Target"
  };
  auditTrail: {
    timestamp: string;
    action: string;
    role: string;
  }[];
}

export interface FinancialModelParams {
  equityPercentage: number; // e.g. 30%
  debtPercentage: number;   // e.g. 70%
  costOfEquity: number;     // e.g. 12%
  costOfDebt: number;       // e.g. 6%
  taxRate: number;          // e.g. 20%
  capexAmount: number;      // in million USD
  annualRevenue: number;    // estimated annual operational cash inflows
}

export interface InsightArticle {
  id: string;
  title: string;
  category: "Regulatory" | "ESG & Green Finance" | "M&A Corporate Advisory";
  publishDate: string;
  regulatoryReferences: string[]; // e.g. ["Thông tư 99/2025/TT-BTC", "IFRS 16"]
  summary: string;
  content: string;
  author: string;
}
