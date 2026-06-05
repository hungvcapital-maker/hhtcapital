/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ShieldCheck, Leaf, Globe } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-950 text-white border-t border-emerald-900/60 pb-12 pt-16 font-sans" id="footer-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Foot top info */}
        <div className="grid gap-8 md:grid-cols-12 pb-10 border-b border-emerald-900">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-mono text-lg font-bold tracking-widest text-amber-400">HHT</span>
              <span className="text-white font-light text-xs tracking-widest uppercase">CAPITAL</span>
            </div>
            <p className="text-xs text-emerald-200/70 leading-relaxed max-w-sm">
              Định vị thương hiệu là "Bộ não điều phối dòng vốn bán buôn" — Master Router of Capital. Chúng tôi kiến tạo cấu trúc tài chính và điều chỉnh dòng tiền khép kín bảo mật cao.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-[10px] uppercase text-amber-400 font-bold tracking-wider">Hệ Sinh Thái Sáng Tạo</h4>
            <div className="flex flex-col space-y-2 text-xs text-emerald-100/80">
              <button onClick={() => setActiveTab("services")} className="text-left hover:text-amber-400 transition-colors">Đóng gói Blind Teaser</button>
              <button onClick={() => setActiveTab("databank")} className="text-left hover:text-amber-400 transition-colors">Tải tệp Virtual Data Room</button>
              <button onClick={() => setActiveTab("insights")} className="text-left hover:text-amber-400 transition-colors">Hướng dẫn Thông tư 99/2025</button>
            </div>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-[10px] uppercase text-amber-400 font-bold tracking-wider">Chứng Thư Bảo Mật & ESG</h4>
            <div className="space-y-2.5">
              <div className="flex items-center space-x-2 text-[11px] text-emerald-200/80">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span className="font-mono">Chinese Wall Information Firewall ISO 27001</span>
              </div>
              <div className="flex items-center space-x-2 text-[11px] text-emerald-200/80">
                <Leaf className="h-4 w-4 text-emerald-400" />
                <span>Green Web Hosting & Solar Offset Compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Foot legal disclaimer (Extremely important for high end finance consultancy) */}
        <div className="mt-8 text-justify text-[10px] text-emerald-250/50 leading-relaxed space-y-3" id="footer-disclaimer">
          <p>
            <strong>Tuyên Bố Miễn Trừ Trách Nhiệm Luật Đầu Tư (Legal Disclaimer):</strong> HHT Capital hoạt động theo mô hình Doanh nghiệp Tư vấn Quản lý, Nghiên cứu Thị trường và Xúc tiến Đầu tư Công nghiệp, Năng lượng chuyên biệt. Chúng tôi KHÔNG phải là Ngân hàng Thương mại, Tổ chức Nhận tiền gửi, Công ty quản lý quỹ chứng khoán đại chúng hay Công ty Tài chính bán lẻ có giấy phép cấp tín dụng trực tiếp theo luật định. Mọi thông tin, phân tích, hay mô phỏng dòng tiền tại DataBank mang tính chất cấu trúc dữ liệu mô hình để hỗ trợ đối tác trung gian có khẩu vị mua sỉ tham khảo. Quyết định đầu tư chính thức phải tuân thủ nghiêm ngặt theo Hợp đồng M&A/Thỏa thuận Cổ đông chi tiết độc lập và quy tắc pháp lý nội khối.
          </p>
          <p>
            Bản quyền ứng dụng © {currentYear} thuộc về HHT Capital Advisory Group. Bảo lưu mọi quyền tự chủ thương hiệu.
          </p>
        </div>

      </div>
    </footer>
  );
}
