/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProjectData, InsightArticle } from "./types";

export const SAMPLE_PROJECTS: ProjectData[] = [
  {
    id: "proj-1",
    code: "HHT-LOG-041",
    title: "Dự Án Logistics Thông Minh & Cực Trung Chuyển Tây Nam",
    sector: "Infrastructure & Logistics",
    capex: "$45.0M USD",
    waccRequired: 8.2,
    location: "Bà Rịa - Vũng Tàu, Việt Nam",
    statusLegal: "Approved Investment", // Chủ trương đầu tư approved
    statusPdf: "NDA_HHT_LOG_041_teaser_en.pdf",
    complianceESG: {
      carbonSaving: "18,400 tấn CO2 / năm (Hệ thống Solar áp mái & Container Điện)",
      wasteReduction: "Tái chế 92% bao bì & Xử lý nước thải khép kín chuẩn ISO 14001",
      socialScore: "Đạt chuẩn công trình xanh LEED Gold (Dự kiến hoàn tất Q4/2026)"
    },
    auditTrail: [
      { timestamp: "2026-06-05 10:15:30", action: "Đã ký kết hợp đồng NDA 3 bên", role: "Quỹ PE Hàn Quốc" },
      { timestamp: "2026-06-04 14:22:10", action: "Đăng tải Báo cáo Tài chính Độc lập (Deloitte)", role: "HHT Audit Team" },
      { timestamp: "2026-06-01 09:00:00", action: "Thông qua vòng lọc Pháp lý 3 lớp HHT Core", role: "HHT Counsel" }
    ]
  },
  {
    id: "proj-2",
    code: "HHT-RENE-089",
    title: "Trang Trại Điện Gió Trên Bờ & Hạ Tầng Truyền Tải Khuyên Điểm",
    sector: "Renewable Energy",
    capex: "$85.0M USD",
    waccRequired: 7.8,
    location: "Bình Thuận, Việt Nam",
    statusLegal: "1/500 Planning Completed",
    statusPdf: "NDA_HHT_RENE_089_model.xlsm",
    complianceESG: {
      carbonSaving: "125,000 tấn CO2 / năm",
      wasteReduction: "Sử dụng 100% vật liệu cánh quạt thân thiện môi sinh thế hệ mới",
      socialScore: "Hỗ trợ an sinh xã hội địa phương & tạo 450 việc làm xanh bền vững"
    },
    auditTrail: [
      { timestamp: "2026-06-05 11:40:22", action: "Yêu cầu cung cấp Thẩm định Kỹ thuật (Technical DD)", role: "Định chế Tài chính Quốc tế" },
      { timestamp: "2026-06-03 16:11:05", action: "Hoàn tất bàn giao Hồ sơ Quy hoạch Chi tiết 1/500", role: "Chủ dự án" },
      { timestamp: "2026-05-28 08:30:11", action: "Cấp chứng nhận Hàng lang Dự án Sạch lớp 1", role: "HHT Investment Lead" }
    ]
  },
  {
    id: "proj-3",
    code: "HHT-MNA-112",
    title: "Tái Cấu Trúc Nợ & Sáp Nhập Tập Đoàn Thép Công Nghệ Cao",
    sector: "Corporate Restructuring & Recapitalization",
    capex: "$32.5M USD",
    waccRequired: 9.5,
    location: "Đồng Nai, Việt Nam",
    statusLegal: "Certificate of Land Use Rights", // Đã có sổ đỏ
    statusPdf: "NDA_HHT_MNA_112_clean_teaser.pdf",
    complianceESG: {
      carbonSaving: "Giảm 35% lượng điện năng vận hành nhờ lò hồ quang EAF",
      wasteReduction: "Tập trung tái tạo phế liệu thành phẩm tuần hoàn",
      socialScore: "Tuân thủ nghiêm ngặt ESG Lao động & Chuẩn an toàn tuyệt đối"
    },
    auditTrail: [
      { timestamp: "2026-06-05 08:02:11", action: "Cập nhật Nghị quyết tăng Vốn điều lệ & Xóa nợ bắc cầu", role: "HHT Corporate Advisor" },
      { timestamp: "2026-06-02 13:45:00", action: "Ký kết Thỏa thuận ủy thác tìm kiếm Đối tác Bán lẻ", role: "Đại lý Ủy thác" },
      { timestamp: "2026-05-25 10:20:00", action: "Đơn giản hóa định giá theo chuẩn IFRS", role: "HHT Valuation Lead" }
    ]
  }
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    id: "art-1",
    title: "Giải Mã Thông Tư 99/2025/TT-BTC: Kế Toán Tài Sản Tài Chính & Thách Thức Chuyển Đổi Thực Tế",
    category: "Regulatory",
    publishDate: "2026-05-28",
    regulatoryReferences: ["Thông tư 99/2025/TT-BTC", "VAS 21", "IFRS 9"],
    summary: "Hướng dẫn thực thi chuẩn mực báo cáo tài sản mới, thúc đẩy sự minh bạch hóa thông tin dòng tiền và việc kết xuất thặng dư vốn điều lệ của các doanh nghiệp lớn.",
    content: `Thông tư 99/2025/TT-BTC đánh dấu bước tiến vượt bậc của Bộ Tài chính Việt Nam trong việc đưa kế toán định chế tiệm cận gần hơn với chuẩn mực quốc tế IFRS. 

    Nội dung chính xoay quanh các lưu ý kiểm soát:
    - Định giá công cụ nợ theo giá trị hợp lý thông qua Báo cáo kết quả hoạt động kinh doanh (FVTPL) hoặc Thu nhập toàn diện khác (FVOCI).
    - Giải quyết bài toán 'đóng băng hóa' thặng dư nợ đặt cọc của các đại lý bất động sản và các dự án hợp tác hạ tầng cũ.
    - Chuyển tiếp an toàn từ chế toán cũ sang mới, đảm bảo cơ chế Chinese Wall trong kiểm soát xung đột lợi ích giữa đơn vị bảo lãnh cấu trúc và đơn vị định giá tài sản độc lập.`,
    author: "Bùi Khắc Huy - Trưởng Bộ phận Cấu trúc Tài chính HHT"
  },
  {
    id: "art-2",
    title: "Xu Thế Tài Chính Xanh: Tận Dụng Nguồn Vốn Ròng Giá Rẻ Từ Các Quỹ Đầu Tư ESG Quốc Tế",
    category: "ESG & Green Finance",
    publishDate: "2026-06-02",
    regulatoryReferences: ["Net Zero 2050", "Chỉ thị ESG Châu Âu (CSRD)", "Lộ trình Tài chính Xanh Việt Nam 2026"],
    summary: "Các doanh nghiệp hạ tầng lớn muốn tiếp cận vốn nước ngoài bắt buộc phải đóng gói hồ sơ theo ESG tiêu chuẩn. HHT Capital định hướng cấu trúc xanh hóa tài sản ngay từ vòng sơ tuyển.",
    content: `Không chỉ đơn giản là gắn nhãn sinh thái, việc huy động vốn từ các định chế tài chính bán buôn (Wholesale) tại EU và Hàn Quốc đòi hỏi minh chứng thực tế về chỉ số CO2 tiết giảm, bảo vệ đa dạng sinh học và sự tuân thủ tuyệt đối đối với an sinh xã hội địa phương.

    HHT Capital đóng vai trò cấu trúc hóa:
    1. Thiết kế dòng vốn bắc cầu (Bridge Financing) đáp ứng chỉ tiêu tỷ số Đòn bẩy Xanh.
    2. Thiết lập cơ cấu theo dõi chỉ số carbon tuần hoàn và giám sát rủi ro kỹ thuật (Technical DD).
    3. Hỗ trợ phát hành Tín chỉ Xanh nội bộ, nâng cao xếp hạng tín dụng doanh nghiệp giúp giảm chi phí vốn trung bình (WACC) lên tới 1.5 - 2%.`,
    author: "Nguyễn Minh Thư - Chuyên gia Hoạch định ESG HHT"
  },
  {
    id: "art-3",
    title: "Quy Trình Chinese Wall: Khóa Bảo Mật Vàng Giữa Nhánh Gom Dự Án Và Nhánh Chợ Định Chế",
    category: "M&A Corporate Advisory",
    publishDate: "2026-06-04",
    regulatoryReferences: ["Luật Doanh nghiệp 2020", "Luật Chứng khoán 2019", "Tiêu chuẩn Bảo mật Bán buôn HHT"],
    summary: "Bảo mật tuyệt đối thông tin thô đầu vào của chủ dự án (Blind Teaser) cho tới khi hoàn thiện thủ tục KYC 3 bên.",
    content: `HHT Capital bảo vệ tối đa lợi ích của giới chủ thông qua cơ chế 'Chinese Wall' (Bức tường an ninh cô lập). Chúng tôi xây dựng mô hình rào cản thông tin kép:
    - Nhánh Tiếp nhận & Khảo sát kỹ thuật (Inbound Project Delivery) tuyệt đối không có quyền truyền tải hồ sơ thô cho Nhánh Quan hệ Định chế và Kênh Phân bổ Tài sản (Outbound Wealth & Router Channel).
    - Hệ thống Data Room được mã hóa phân quyền cấp độ 1, sử dụng OTP động kết hợp dấu watermark bảo mật cá nhân hóa, chống rò rỉ cơ hội kinh doanh trước khi Ký NDA chính thức.`,
    author: "Tô Hoàng Long - Giám đốc Trung tâm Bảo Mật Thông Tin HHT"
  }
];
