/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { BookOpen, HelpCircle, FileCheck, CheckCircle2, Star, ChevronRight, Award } from "lucide-react";
import { INSIGHT_ARTICLES } from "../data";

export default function InsightsESG() {
  const [selectedArticleId, setSelectedArticleId] = useState<string>("art-1");
  const activeArticle = INSIGHT_ARTICLES.find(a => a.id === selectedArticleId) || INSIGHT_ARTICLES[0];

  // ESG Score Card States
  const [hasCarbonPlan, setHasCarbonPlan] = useState(false);
  const [hasWasteRecycle, setHasWasteRecycle] = useState(false);
  const [hasSocialAnSinh, setHasSocialAnSinh] = useState(false);
  const [hasDoubleNDA, setHasDoubleNDA] = useState(false);
  const [hasAuditIFRS, setHasAuditIFRS] = useState(false);

  // Score computation
  const computeESGConfidence = () => {
    let pts = 0;
    if (hasCarbonPlan) pts += 20;
    if (hasWasteRecycle) pts += 20;
    if (hasSocialAnSinh) pts += 20;
    if (hasDoubleNDA) pts += 20;
    if (hasAuditIFRS) pts += 20;
    return pts;
  };

  const confidenceScore = computeESGConfidence();

  return (
    <section className="bg-bg-dark py-16 sm:py-24 text-cream border-b border-gold/10" id="insights-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gold font-mono">Thought Leadership & Regulatory</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-cream sm:text-4xl font-serif">
            TIN TỨC & PHÁT TRIỂN BỀN VỮNG (ESG)
          </p>
          <div className="mx-auto mt-4 h-0.5 w-20 bg-gold"></div>
          <p className="mx-auto mt-6 max-w-3xl text-xs sm:text-sm text-cream/80">
            HHT Capital đồng hành cùng các định chế lớn giải mật Thông tư 99/2025/TT-BTC, tháo gỡ bất đồng tài sản và tối ưu hóa hồ sơ đón nhận dòng tài chính xanh ròng quốc tế.
          </p>
        </div>

        {/* ESG Architectural Banner Layout */}
        <div className="mt-12 overflow-hidden rounded border border-gold/25 bg-card-dark text-cream shadow-xl relative min-h-[300px] flex items-center shadow-gold/5" id="insights-esg-banner">
          {/* Back image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/src/assets/images/hht_esg_building_1780634703697.png" 
              alt="HHT Green ESG Architecture" 
              className="h-full w-full object-cover opacity-20 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/80 to-transparent"></div>
          </div>

          <div className="relative z-10 p-6 md:p-12 max-w-2xl space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold block">ESG THỰC THI CHUẨN MỰC</span>
            <h3 className="font-serif text-xl md:text-3xl font-bold leading-tight text-cream uppercase">
              Sẵn Sàng Hành Lang Xanh Thu Hút Dòng Vốn Ngoại
            </h3>
            <p className="text-xs md:text-sm text-cream/80 leading-relaxed">
              Các thiết kế đại diện dòng vốn ngoại (từ EU, IFC, và các tổ chức tài chính phát triển quốc tế) ưu tiên những dự án hạ tầng lớn có bảo chứng carbon và cam kết an sinh xã hội địa phương chặt chẽ. HHT Capital hỗ trợ dán nhãn chuẩn hóa ngay từ bước ý tưởng.
            </p>
          </div>
        </div>

        {/* Blog / Articles Row split with interactive test bench */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12 items-start" id="insights-content-deck">
          
          {/* Left Area: Article Details (Vietnamese Circulars text) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex border-b border-gold/10 pb-3 justify-between items-center">
              <h4 className="font-serif font-bold text-lg text-cream">Phân Tích Chuyên Sâu Của HHT</h4>
              <span className="text-[11px] font-mono text-gold bg-gold/10 px-2.5 py-1 rounded border border-gold/20">THÔNG TƯ 99/2025/TT-BTC & IFRS</span>
            </div>

            {/* Selector Buttons */}
            <div className="flex flex-wrap gap-2" id="insights-articles-tabs">
              {INSIGHT_ARTICLES.map((art) => (
                <button
                  key={art.id}
                  onClick={() => setSelectedArticleId(art.id)}
                  className={`px-3 py-1.5 rounded text-xs font-semibold font-sans border transition-all cursor-pointer ${
                    selectedArticleId === art.id 
                      ? "bg-gold text-bg-dark border-gold" 
                      : "bg-card-dark text-cream/80 border-gold/10 hover:bg-gold/10"
                  }`}
                >
                  {art.category}
                </button>
              ))}
            </div>

            {/* Active Article Details */}
            <div className="rounded border border-gold/15 bg-card-dark/20 p-6 space-y-4" id="active-article-view">
              <span className="font-mono text-[10px] uppercase tracking-wider text-gold block">{activeArticle.category} — {activeArticle.publishDate}</span>
              <h3 className="font-serif text-base md:text-xl font-bold text-cream leading-tight uppercase tracking-wide">
                {activeArticle.title}
              </h3>
              
              {/* Dynamic References */}
              <div className="flex flex-wrap gap-1.5" id="article-regulatory-badges">
                {activeArticle.regulatoryReferences.map((ref, idx) => (
                  <span key={idx} className="rounded bg-gold/10 border border-gold/20 px-2 py-0.5 font-mono text-[9px] font-bold text-gold">
                    {ref}
                  </span>
                ))}
              </div>

              <div className="text-xs text-cream/90 leading-relaxed font-sans space-y-4 whitespace-pre-line text-justify">
                {activeArticle.content}
              </div>

              <div className="pt-4 border-t border-gold/10 flex justify-between items-center text-[11px] text-cream/60">
                <span>Tác giả: <strong className="text-gold">{activeArticle.author}</strong></span>
                <span className="font-mono text-gold/80">Security Verified</span>
              </div>
            </div>
          </div>

          {/* Right Area: Interactive Green Capital Attraction Calculator */}
          <div className="lg:col-span-5 rounded border border-gold/15 bg-card-dark/30 p-5 md:p-6 space-y-5 shadow-sm" id="insights-esg-checklist">
            <div className="flex items-center space-x-2 text-gold border-b border-gold/10 pb-3">
              <BookOpen className="h-4.5 w-4.5 text-gold" />
              <h4 className="font-serif text-xs font-bold uppercase tracking-widest">ESG Capital Ready Diagnostics</h4>
            </div>

            <p className="text-[11px] text-cream/80 leading-relaxed">
              Kiểm tra nhanh xem hồ sơ dự án của bạn có đạt các chỉ tiêu căn bản để thu hút các Quỹ đầu tư Xanh hay chưa bằng cách tích chọn tiêu chuẩn dưới đây:
            </p>

            <div className="space-y-4">
              {/* Point 1 */}
              <label className="flex items-start space-x-3 cursor-pointer p-2.5 rounded hover:bg-bg-dark/50 transition-colors">
                <input 
                  type="checkbox" 
                  checked={hasCarbonPlan} 
                  onChange={(e) => setHasCarbonPlan(e.target.checked)}
                  className="mt-1 h-3.5 w-3.5 accent-gold cursor-pointer"
                />
                <div>
                  <span className="text-xs font-bold text-cream block">Dự phòng theo dõi Carbon & Tiết giảm năng lượng</span>
                  <span className="text-[10px] text-cream/60 block mt-0.5 leading-relaxed">Dự án có định lượng rõ tỷ trọng tấn CO2 giảm phát thải mỗi năm.</span>
                </div>
              </label>

              {/* Point 2 */}
              <label className="flex items-start space-x-3 cursor-pointer p-2.5 rounded hover:bg-bg-dark/50 transition-colors">
                <input 
                  type="checkbox" 
                  checked={hasWasteRecycle} 
                  onChange={(e) => setHasWasteRecycle(e.target.checked)}
                  className="mt-1 h-3.5 w-3.5 accent-gold cursor-pointer"
                />
                <div>
                  <span className="text-xs font-bold text-cream block">Hạ tầng tuần hoàn chất thải & Tài nguyên nước</span>
                  <span className="text-[10px] text-cream/60 block mt-0.5 leading-relaxed">Đạt chuẩn tuần hoàn nước thải công nghệ cao, xử lý rác không chôn lấp.</span>
                </div>
              </label>

              {/* Point 3 */}
              <label className="flex items-start space-x-3 cursor-pointer p-2.5 rounded hover:bg-bg-dark/50 transition-colors">
                <input 
                  type="checkbox" 
                  checked={hasSocialAnSinh} 
                  onChange={(e) => setHasSocialAnSinh(e.target.checked)}
                  className="mt-1 h-3.5 w-3.5 accent-gold cursor-pointer"
                />
                <div>
                  <span className="text-xs font-bold text-cream block">Cam kết an sinh xã hội địa phương</span>
                  <span className="text-[10px] text-cream/60 block mt-0.5 leading-relaxed">Tuyển dụng người lao động địa phương, bồi thường tái định cư minh bạch đúng pháp luật.</span>
                </div>
              </label>

              {/* Point 4 */}
              <label className="flex items-start space-x-3 cursor-pointer p-2.5 rounded hover:bg-bg-dark/50 transition-colors">
                <input 
                  type="checkbox" 
                  checked={hasDoubleNDA} 
                  onChange={(e) => setHasDoubleNDA(e.target.checked)}
                  className="mt-1 h-3.5 w-3.5 accent-gold cursor-pointer"
                />
                <div>
                  <span className="text-xs font-bold text-cream block">Tuân thủ ranh giới Chinese Wall bảo mật kép</span>
                  <span className="text-[10px] text-cream/60 block mt-0.5 leading-relaxed">Thông tin dự án đã được thiết lập Blind Teaser danh tính chuẩn HHT.</span>
                </div>
              </label>

              {/* Point 5 */}
              <label className="flex items-start space-x-3 cursor-pointer p-2.5 rounded hover:bg-bg-dark/50 transition-colors">
                <input 
                  type="checkbox" 
                  checked={hasAuditIFRS} 
                  onChange={(e) => setHasAuditIFRS(e.target.checked)}
                  className="mt-1 h-3.5 w-3.5 accent-gold cursor-pointer"
                />
                <div>
                  <span className="text-xs font-bold text-cream block">Chuần bị Báo cáo Tài chính tiệm cận IFRS</span>
                  <span className="text-[10px] text-cream/60 block mt-0.5 leading-relaxed">Tuân chuẩn mực Thông tư 99/2025/TT-BTC, chuẩn hóa các khoản nợ cũ.</span>
                </div>
              </label>
            </div>

            {/* Calculator Diagnostics Results */}
            <div className="border-t border-gold/10 pt-4" id="esg-score-outputs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-cream">Chỉ số Khả năng Sẵn sàng Hút Vốn Xanh:</span>
                <span className="font-mono text-xs font-bold text-bg-dark bg-gold px-2.5 py-0.5 rounded">
                  {confidenceScore}%
                </span>
              </div>

              {/* Visual indicator bar */}
              <div className="w-full h-1.5 bg-gold/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gold transition-all duration-500"
                  style={{ width: `${confidenceScore}%` }}
                ></div>
              </div>

              <div className="mt-3 text-[10px] text-cream/80 leading-relaxed bg-bg-dark/50 p-3 rounded border border-gold/10">
                {confidenceScore === 100 ? (
                  <p className="font-bold text-gold flex items-center">
                    <Award className="h-4.5 w-4.5 text-gold mr-1.5 flex-shrink-0" />
                    Chúc mừng! Hồ sơ đạt tiêu chuẩn Gold-Ready. Đủ điều kiện khởi động đàm phán NDA 3 bên với các quỹ PE năng lượng xanh toàn cầu.
                  </p>
                ) : confidenceScore >= 60 ? (
                  <p className="text-gold/90 font-medium whitespace-pre-line">
                    Hồ sơ tiệm cận chuẩn. Khuyến nghị chuẩn bị thêm báo cáo đánh giá tác động môi trường hoặc dọn dẹp các khoản thặng dư vốn theo Thông tư 99.
                  </p>
                ) : (
                  <p className="text-cream/70 font-medium whitespace-pre-line">
                    Chưa đạt chuẩn thu hút dòng vốn phát triển bền vững quốc tế. Vui lòng gửi yêu cầu liên hệ để HHT Capital hỗ trợ tái cấu trúc hồ sơ thô của bạn.
                  </p>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
