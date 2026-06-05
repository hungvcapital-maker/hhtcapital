/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = "vi" | "en" | "zh" | "ja";

export const translations = {
  vi: {
    nav: {
      home: "Trang Chủ",
      about: "Về HHT Capital",
      services: "Dịch Vụ Chiến Lược",
      databank: "HHT DataBank",
      insights: "Tin Tức & ESG",
      contact: "Liên Hệ & Intake"
    },
    hero: {
      tagline: "Định chế tài chính bán buôn / Wholesale Investment Router",
      title1: "HHT CAPITAL",
      title2: "THE MASTER ROUTER OF CAPITAL",
      subtitle: "Chúng tôi kiến tạo giải pháp cấu trúc tài sản toàn diện, đóng vai trò là \"bộ não điều phối\" dòng vốn khép kín giữa Chủ dự án lớn và hệ thống Ngân hàng, Khối Chứng khoán, Quỹ đầu tư quốc tế và giới tinh hoa tại Việt Nam.",
      ctaSubmit: "Nộp Hồ Sơ Dự Án (KYC)",
      ctaDataBank: "Cổng Tài Liệu Bảo Mật (DataBank)",
      corePrincipleTitle: "Nguyên tắc cốt lõi:",
      corePrincipleDesc: '"Chúng tôi không trực tiếp giữ tiền hay cấp tín dụng. HHT Capital đóng vai trò cấu trúc tài chính và điều hướng, khớp khẩu vị đầu tư chuyên nghiệp thông qua kiểm soát tài liệu 3 lớp chặt chẽ."',
      stat1Val: "15+",
      stat1Label: "Ngân hàng liên kết",
      stat2Val: "10+",
      stat2Label: "Khối CTCK & Quỹ PE",
      stat3Val: "$1.2B+",
      stat3Label: "Tổng CAPEX Cấu trúc",
      stat4Val: "ESG",
      stat4Label: "Đóng Gói Đạt Chuẩn A"
    },
    about: {
      title: "Giá trị & Cam kết",
      heading: "VỀ CHÚNG TÔI (ABOUT US)",
      subtitle: "HHT Capital ra đời với mục tiêu giải quyết những bài toán cấu trúc vốn phức tạp bậc nhất, tạo điều kiện thuận lợi cho các dòng vốn đỉnh cao cập cảng an toàn.",
      roadmapTitle: "Lộ Trình Phát Triển Chiến Lược (3-Phase Timeline)",
      phases: [
        {
          phase: "Chuẩn Hóa",
          time: "", // Removed "2024 - Q1/2025" as requested
          title: "Chuẩn Hóa Hồ Sơ & Thẩm Định 3 Lớp",
          status: "COMPLETED",
          description: "Hệ thống hóa quy trình đánh giá Legal, Financial & Technical DD cho tất cả dự án hạ tầng lớn. Đơn giản hóa định giá theo luật Việt Nam và tiệm cận IFRS."
        },
        {
          phase: "Mở Rộng",
          time: "", // Removed "Q2/2025 - Q4/2026" as requested
          title: "Hệ Sinh Thế Hub Network & Kết Nối Vốn",
          status: "IN_PROGRESS",
          description: "Thực thi cấu trúc vốn bắc cầu (Bridge Financing), liên kết chặt chẽ với trên 15 đối tác ngân hàng lớn, 10 công ty chứng khoán và các quỹ ngoại để phân tầng rủi ro dòng tiền."
        },
        {
          phase: "Số Hóa",
          time: "", // Removed "2026 - 2027" as requested
          title: "Nền Tảng HHT DataBank & Kiểm Toán Thời Gian Thực",
          status: "LAUNCHING",
          description: "Ra mắt cổng Virtual Data Room áp dụng mã hóa OTP động, dấu mờ tự động (Watermark) bảo vệ tài liệu thô, cung cấp báo cáo mô hình tài chính động (Financial Model) phục vụ đối tác ngoại."
        }
      ],
      strengthsTitle: "Lợi Thế Cạnh Tranh Hạt Nhân",
      strengths: [
        {
          title: "Chuyên Môn Chuẩn Mực Doanh Nghiệp",
          desc: "Đội ngũ am hiểu sâu sắc hệ thống pháp luật Việt Nam, VAS và các quy định kế toán mới như Thông tư 99/2025/TT-BTC. Khả năng thiết kế, đóng gói hồ sơ dự án theo tiêu chuẩn IFRS, mở cửa đón tiếp các quỹ ngoại khó tính nhất."
        },
        {
          title: "Hệ Sinh Thái Hub Network Rộng Lớn",
          desc: "Đối tác tin cậy hàng đầu của hơn 15 Tổ chức Tín dụng trong nước, 10 Khối Định giá của CTCK hàng đầu Việt Nam và các Quỹ phát triển xanh quốc tế."
        }
      ],
      chineseWallTitle: "Tuyên Bố Bảo Mật (Chinese Wall Protocol)",
      chineseWallQuote: '"Hệ thống kiểm soát nội bộ nghiêm ngặt của HHT thiết lập bức tường thông tin biệt lập tuyệt đối giữa nhánh phát triển dự án đầu vào (Inbound Legal Analysis) và nhánh quan hệ định chế tài chính đầu ra (Outbound Distribution). Danh tính và dữ liệu thương mại thô chỉ được giải mật khi NDA 3 bên được kích hoạt thành công."',
      chineseWallDesc: "Quy tắc này ngăn chặn triệt để rủi ro rò rỉ cơ hội thương vụ (deal leak) và xung đột lợi ích nội bộ trước khi xác thực đầy đủ tư cách pháp lý của đối tác định chế."
    },
    services: {
      title: "Services Portfolio",
      heading: "PHÂN HỆ DỊCH VỤ CHIẾN LƯỢC",
      subtitle: "HHT Capital thay thế mô hình cấp tín dụng truyền thống bằng dịch vụ tư vấn cấu trúc thông minh. Chúng tôi đảm bảo mọi giải pháp đều hướng tới lợi ích ròng bền vững của doanh nghiệp.",
      list: [
        {
          idx: "01",
          title: "Xúc Tiến Đầu Tư & M&A",
          tagline: "Primary Core Solution",
          description: "Đại diện chủ doanh nghiệp thẩm định pháp lý, đóng gói hồ sơ dự án dưới dạng bản chào bảo mật ẩn danh (Blind Teaser) và điều phối tiếp cận mạng lưới định chế tài chính bán buôn.",
          solutions: [
            "Khớp lệnh chuyển nhượng, thoái vốn khu công nghiệp / kho vận",
            "Sắp xếp cấu trúc đàm phán mua bán sáp nhập bảo mật tối đa",
            "Thẩm định danh tính 3 bên (Double NDA) trước khi giải mã dữ liệu"
          ]
        },
        {
          idx: "02",
          title: "Tư Vấn Cấu Trúc Tài Chính Doanh Nghiệp",
          tagline: "Corporate Finance Advisory",
          description: "Tối ưu hóa chi phí vốn trung bình trọng số (WACC), xử lý các điểm nghẽn dòng tiền phức tạp, thặng dư vốn, dọn dẹp bảng cân đối kế toán trước giao dịch lớn.",
          solutions: [
            "Thiết kế cấu trúc Đòn bẩy tối ưu (Vốn tự có / Vốn vay thương mại)",
            "Thu xếp nguồn vốn thô và vốn bắc cầu ngắn hạn (Bridge Financing)",
            "Chuẩn hóa khoản tài sản đóng băng, đặt cọc cũ tuân thủ Thông tư 99/2025"
          ]
        },
        {
          idx: "03",
          title: "Phân Bổ & Điều Hướng Giải Pháp Tài Sản",
          tagline: "HNWI & Asset Routing",
          description: "May đo, cấu trúc hóa danh mục đầu tư tài sản của giới chủ doanh nghiệp lớn và gia tộc (HNWIs) vào các công cụ tài chính cấp cao, cấp phép an toàn bởi cơ quan quản lý.",
          solutions: [
            "Điều hướng sản phẩm phái sinh nội khối được bảo chứng",
            "Cấu trúc tài sản thừa kế và phân tầng tín thác thanh khoản",
            "Tối ưu thuế suất trong hoạt động thặng dư chuyển nhượng xuyên biên giới"
          ]
        }
      ],
      anonymizerTitle: "Interactive Anonymizer Tool",
      anonymizerHeading: "Trình Đóng Gói Ẩn Danh (Blind Teaser Sim)",
      anonymizerDesc: "Nhập thông số dự án của bạn để mô phỏng quy trình bảo mật thâm nhập dòng vốn. Công cụ sẽ tự động biến đổi, dán watermark mẫu trước khi phân phối trong các phòng dữ liệu thô ảo.",
      labelRawName: "Tên Dự Án Nguyên Bản (Sẽ bị ẩn)",
      labelLocation: "Tỉnh / Thành Phố",
      labelCapex: "Quy Mô (CAPEX - M$)",
      labelSector: "Lĩnh Vực Trọng Điểm",
      labelDebt: "Yêu Cầu Nợ (% LTV)",
      labelEsg: "Thông số ESG nổi bật",
      btnEncrypt: "Mã Hóa & Đóng Gói Bản Chào Blind Teaser",
      previewTitle: "Mô phỏng tài liệu xuất ra",
      previewDraft: "BẢN THẢO",
      previewEncrypted: "CONFIDENTIAL TEASER",
      previewRecordCode: "Mã Bản Ghi",
      previewUnencrypted: "CHƯA MÃ HÓA",
      previewProtocol: "CHỨNG CHỈ BẢO MẬT: CHINESE WALL PHASE 1",
      previewSection1: "1. Tên dự án giải mật thương mại (Commercial Anonymized Project)",
      previewSectorAc: "[ĐA REDACTED] Dự án Phát triển vị trí chiến lược",
      previewSection2: "2. Quy mô CAPEX ước định",
      previewSection3: "3. Vị trí hành chính",
      previewSection4: "4. Thống kê ESG & Đáp ứng chỉ tiêu giảm thải tài trợ",
      previewSection5: "5. Đơn vị điều phối cấu trúc rủi ro",
      previewAdvisorNote: "Lưu ý: Hồ sơ chi tiết (Legal Due Diligence, Financial Valuation Model xlsm và Feasibility Study) được kiểm soát nghiêm ngặt và chỉ gửi qua mã OTP được cá nhân hóa cho các định chế đã gửi KYC & kích hoạt NDA 3 bên.",
      successWatermark: "Đã hoàn tất dán nhãn dập dấu Watermark vết toán tử thành công!",
      btnDownload: "Tải mẫu Teaser (PDF Sim)",
      downloadSuccessMsg: "✓ Đã khởi chạy mô phỏng tải bản tóm tắt bảo mật!"
    },
    databank: {
      title: "HHT Data Room Gateway",
      heading: "CỔNG TÀI LIỆU BẢO MẬT (DATABANK)",
      subtitle: "HHT DataBank là cổng lưu trữ ảo (Virtual Data Room - VDR) được mã hóa động. Chỉ các đối tác định chế được cấp quyền và khách hàng HNWI đã hoàn tất thủ tục KYC mới có thể truy cập tài nguyên bảo mật.",
      authTitle: "XÁC THỰC TRUY CẬP VDR BẢO MẬT KÉP",
      authDesc: "Vui lòng nhập Mã Định Danh Đối Tác (Institutional Partner ID) hoặc mã OTP do HHT Capital cung cấp để mở kho lưu trữ.",
      partnerIdLabel: "Mã Đối Tác / OTP",
      partnerIdPlaceholder: "Nhập HHT-INST-999 hoặc OTP-XXXXXX",
      btnUnlock: "Giải Mã & Mở Kho Tài Liệu",
      accessGranted: "QUYỀN TRUY CẬP ĐÃ GIẢI PHÓNG - KẾT NỐI AN TOÀN",
      partnerVerified: "Đối tác định chế được phê duyệt: LEVEL 3 AUTHORIZED",
      activeSecureChannel: "Kênh dữ liệu bảo mật hoạt động (No-leak Dynamic Sandbox)",
      searchDocsPlaceholder: "Tìm kiếm tài liệu đã giải mật...",
      docIndex: "Danh mục lưu trữ bảo mật (VDR Files)",
      noDocs: "Không tìm thấy tài liệu phù hợp",
      btnViewSecureDoc: "Mở Bản Xem Thử",
      auditTrailTitle: "Nhật ký kiểm toán thời gian thực (Audit Trail Log)",
      indexLabel: "Số hiệu chỉ mục",
      sectorLabel: "Lĩnh vực phân phối",
      legalStatusLabel: "Pháp lý",
      docSizeLabel: "Kích thước tệp",
      docTypeLabel: "Phân loại tài liệu",
      statusLabel: "Trạng thái lưu trữ",
      documentTypes: {
        legal: "Thẩm định Pháp lý",
        financial: "Mô hình tài chính động",
        esg: "Hồ sơ Carbon & ESG",
        summary: "Báo cáo phân bổ vốn"
      }
    },
    insights: {
      title: "Thought Leadership & Regulatory",
      heading: "TIN TỨC & PHÁT TRIỂN BỀN VỮNG (ESG)",
      subtitle: "HHT Capital đồng hành cùng các định chế lớn giải mật Thông tư 99/2025/TT-BTC, tháo gỡ bất đồng tài sản và tối ưu hóa hồ sơ đón nhận dòng tài chính xanh ròng quốc tế.",
      executeTitle: "ESG THỰC THI CHUẨN MỰC",
      executeHeading: "Sẵn Sàng Hành Lang Xanh Thu Hút Dòng Vốn Ngoại",
      executeDesc: "Các thiết kế đại diện dòng vốn ngoại (từ EU, IFC, và các tổ chức tài chính phát triển quốc tế) ưu tiên những dự án hạ tầng lớn có bảo chứng carbon và cam kết an sinh xã hội địa phương chặt chẽ. HHT Capital hỗ trợ dán nhãn chuẩn hóa ngay từ bước ý tưởng.",
      analysisTitle: "Phân Tích Chuyên Sâu Của HHT",
      diagnosticTitle: "ESG Capital Ready Diagnostics",
      diagnosticDesc: "Kiểm tra nhanh xem hồ sơ dự án của bạn có đạt các chỉ tiêu căn bản để thu hút các Quỹ đầu tư Xanh hay chưa bằng cách tích chọn tiêu chuẩn dưới đây:",
      diagnostics: [
        {
          title: "Dự phòng theo dõi Carbon & Tiết giảm năng lượng",
          desc: "Dự án có định lượng rõ tỷ trọng tấn CO2 giảm phát thải mỗi năm."
        },
        {
          title: "Hạ tầng tuần hoàn chất thải & Tài nguyên nước",
          desc: "Đạt chuẩn tuần hoàn nước thải công nghệ cao, xử lý rác không chôn lấp."
        },
        {
          title: "Cam kết an sinh xã hội địa phương",
          desc: "Tuyển dụng người lao động địa phương, bồi thường tái định cư minh bạch đúng pháp luật."
        },
        {
          title: "Tuân thủ ranh giới Chinese Wall bảo mật kép",
          desc: "Thông tin dự án đã được thiết lập Blind Teaser danh tính chuẩn HHT."
        },
        {
          title: "Chuẩn bị Báo cáo Tài chính tiệm cận IFRS",
          desc: "Tuân chuẩn mực Thông tư 99/2025/TT-BTC, chuẩn hóa các khoản nợ cũ."
        }
      ],
      scoreLabel: "Chỉ số Khả năng Sẵn sàng Hút Vốn Xanh:",
      authorLabel: "Tác giả:",
      score100: "Chúc mừng! Hồ sơ đạt tiêu chuẩn Gold-Ready. Đủ điều kiện khởi động đàm phán NDA 3 bên với các quỹ PE năng lượng xanh toàn cầu.",
      score60: "Hồ sơ tiệm cận chuẩn. Khuyến nghị chuẩn bị thêm báo cáo đánh giá tác động môi trường hoặc dọn dẹp các khoản thặng dư vốn theo Thông tư 99.",
      score0: "Chưa đạt chuẩn thu hút dòng vốn phát triển bền vững quốc tế. Vui lòng gửi yêu cầu liên hệ để HHT Capital hỗ trợ tái cấu trúc hồ sơ thô của bạn."
    },
    contact: {
      title: "CONNECT & INTAKE GATEWAY",
      heading: "LIÊN HỆ & BỘ LỌC KYC SƠ BỘ",
      subtitle: "Mọi hồ sơ hoặc yêu cầu kết nối đều đi trực tiếp vào văn phòng tư vấn cấu trúc thông qua khóa bức mật kép Chinese Wall.",
      officeTitle: "Văn Phòng Tiếp Nhận Thẩm Định",
      hqTitle: "Trụ sở điều vận:",
      hqDesc: "Tầng 38, Keangnam Landmark 72, Phạm Hùng, Nam Từ Liêm, Hà Nội, Việt Nam",
      emailTitle: "Email bảo mật luân chuyển:",
      complianceTitle: "Bảo Hiểm Thông Tin Kép",
      complianceDesc: "HHT Capital áp dụng nghiêm ngặt giao thức bảo điều khiển, tuyệt đối không rao bán rác thông tin, không cung cấp danh tính chủ dự án thô cho bên thứ 3 trừ phi NDA 3 bên được phê chuẩn bởi hội đồng đại diện pháp lý.",
      sec1Title: "Mục 1: Tôi là...",
      partnerTypes: {
        owner: { title: "Chủ Dự Án", desc: "Cần cấu trúc vốn" },
        institution: { title: "Quỹ / Định Chế", desc: "Tìm kiếm dòng deal" },
        hnwi: { title: "Khách HNWI", desc: "Cố vấn gia tộc" }
      },
      labelFullName: "Họ tên đại diện",
      labelCompany: "Tên Tổ Chức Doanh nghiệp",
      labelEmail: "Thư điện tử (Email)",
      labelPhone: "Số điện thoại bảo mật",
      sec2Title: "Mục 2: Thông Tin Dự Án Sơ Bộ (Chủ dự án)",
      labelSectorType: "Lĩnh Vực Trọng Điểm",
      labelCapexScope: "Quy Mô Tổng Doanh Số (CAPEX M-USD)",
      labelLegalStatus: "Tình Trạng Pháp Lý Hiện Tại",
      labelMessage: "Nội dung đề xuất hợp tác / Khẩu vị đầu tư chi tiết",
      privacyTitle: "Cam kết bảo mật:",
      privacyDesc: "Bằng việc nhấn gửi thông tin đề xuất, quý đối tác đồng ý rằng HHT Capital sẽ tiếp nhận dữ liệu sơ đồ dưới sự bảo mật tuyệt đối của quy tắc Chinese Wall nội bộ.",
      btnSubmit: "Gửi Hồ Sơ Xác Thực Bước Lọc KYC",
      successHeading: "ĐỀ XUẤT ĐÃ ĐƯỢC MÃ HÓA & TRÌNH LUÂN CHUYỂN",
      successDesc: "Hệ thống HHT Core Router đã tạo vết thẩm định KYC sơ bộ thành công cho tệp và gửi phản hồi đến đơn vị cấu trúc.",
      ticketLabel: "MÃ SỐ THEO DÕI:",
      successPartner: "Đối tác đại diện:",
      successCompany: "Đơn vị:",
      successKyc: "Tư cách KYC:",
      successSector: "Lĩnh vực khai báo:",
      successCapex: "Quy mô Capex cấu trúc:",
      successLegal: "Pháp lý hiện thời:",
      successNote: "*Thư xác nhận hướng dẫn cấu trúc sẽ được gửi trực tiếp từ hòm thư của anh Bùi Khắc Huy (Trưởng Bộ phận Cấu trúc) đến {email} sau khi kiểm duyệt chi tiết.",
      btnNewSubmit: "Gửi đề xuất mới"
    },
    footer: {
      copyright: "Bản quyền © 2026 HHT Capital. Đăng ký thông tin độc quyền. Bảo lưu mọi quyền lợi.",
      disclosure: "Tuyên bố miễn trừ trách nhiệm: HHT Capital không phán quyết dòng tiền ủy thác trực tiếp, không hoạt động tín dụng thương mại sai mục đích. Các kết quả tư vấn cấu trúc dựa trên giao thức NDA và thẩm định 3 lớp khép kín.",
      hq: "Trụ sở: Tầng 38, Keangnam Landmark 72, Phạm Hùng, Hà Nội, Việt Nam"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About HHT",
      services: "Strategic Services",
      databank: "HHT DataBank",
      insights: "News & ESG",
      contact: "Contact & Intake"
    },
    hero: {
      tagline: "Wholesale Investment Router",
      title1: "HHT CAPITAL",
      title2: "THE MASTER ROUTER OF CAPITAL",
      subtitle: "We architect comprehensive asset structuring solutions, acting as the dynamic regulatory router and orchestrator of private capital between institutional developers, tier-1 commercial banks, securities houses, private equity firms, and high-net-worth families.",
      ctaSubmit: "Submit Project Profile (KYC)",
      ctaDataBank: "Virtual Dynamic DataBank",
      corePrincipleTitle: "Core Principle:",
      corePrincipleDesc: '"We do not directly manage assets under custody or issue corporate commercial lending. HHT Capital functions exclusively as a master financial architect and deployment filter via strict 3-tier due diligence processes."',
      stat1Val: "15+",
      stat1Label: "Affiliated Banks",
      stat2Val: "10+",
      stat2Label: "Top Securities & PE Funds",
      stat3Val: "$1.2B+",
      stat3Label: "Total Structured Capex",
      stat4Val: "ESG",
      stat4Label: "Compliance AAA Standard"
    },
    about: {
      title: "Value & Commitments",
      heading: "ABOUT US",
      subtitle: "HHT Capital was established to solve highly sophisticated capital structure dilemmas, paving pathways for international green finance to dock safely into Vietnam.",
      roadmapTitle: "Strategic Expansion Roadmap (3-Phase Timeline)",
      phases: [
        {
          phase: "Standardization",
          time: "", // Removed as requested
          title: "Due Diligence & 3-Tier Audit Standardization",
          status: "COMPLETED",
          description: "Institutionalized rigorous Legal, Financial, and Technical DD frameworks for massive infrastructure projects. Streamlined complex valuations matching IFRS standards."
        },
        {
          phase: "Network Scaling",
          time: "", // Removed as requested
          title: "Bridge Financing & Network Hub Launch",
          status: "IN_PROGRESS",
          description: "Implementing short-term bridge financing structures. Broadened deep inter-bank credit coordination with 15+ banks, 10 securities blocks, and sovereign wealth firms to buffer cashflow risks."
        },
        {
          phase: "Digital Transition",
          time: "", // Removed as requested
          title: "HHT DataBank & Real-Time Security Audit",
          status: "LAUNCHING",
          description: "Deploying high-frequency Virtual Data Room platforms with automated text watermarking, dynamic OTP authorizations, and visual model workspaces for international GPs."
        }
      ],
      strengthsTitle: "Core Core Strengths",
      strengths: [
        {
          title: "Rigorous Accounting & IFRS Expertise",
          desc: "Expertise in local Vietnamese regulatory architectures, VAS, and modern circulars (e.g., Circular 99/2025/TT-BTC). We translate, pack, and package local legacy liabilities to pass strict international sovereign audits."
        },
        {
          title: "Unrivaled Hub Network Architecture",
          desc: "Deep wholesale pipeline access into 15+ Vietnamese state and private banks, 10 major securities transaction rooms, and foreign ecological capital syndicates."
        }
      ],
      chineseWallTitle: "Chinese Wall Security Protocol Statement",
      chineseWallQuote: '"HHT\'s strict internal governance establishes an absolute, impenetrable information barrier between the inbound asset-origination cell (Inbound Legal Analysis) and the outbound capital-distribution network (Outbound Distribution). Raw data and real ownership structures are never released prior to mutual NDA execution."',
      chineseWallDesc: "This completely eliminates any systemic risk of project disclosure leakages, information arbitrage, or internal conflict of interest. Your safety remains our primary directive."
    },
    services: {
      title: "Services Portfolio",
      heading: "STRATEGIC SERVICES PORTFOLIO",
      subtitle: "HHT Capital replaces traditional commercial bank debt models with advanced proprietary structural advice. We ensure each capital design delivers optimum net value.",
      list: [
        {
          idx: "01",
          title: "Investment Promotion & M&A",
          tagline: "Primary Core Solution",
          description: "Guiding institutional asset developers through meticulous verification, packing data assets into highly secure, anonymized 'Blind Teasers' for sovereign distributions.",
          solutions: [
            "Coordinating industrial park, dry port, and warehousing sell-offs",
            "Designing maximum-security M&A structures to prevent hostile takeovers",
            "Executing dual-tier NDAs prior to any technical document decryption"
          ]
        },
        {
          idx: "02",
          title: "Corporate Balance Sheet Structuring",
          tagline: "Corporate Finance Advisory",
          description: "Optimizing overall Weighted Average Cost of Capital (WACC), clearing historical balance sheet lockups, working capital friction, and pre-M&A structured cleanups.",
          solutions: [
            "Custom leverage ratio structures (Equity paired with Commercial Debt)",
            "Arranging mezzanine capital and short-term bridge financing structures",
            "Standardizing old deposits and frozen assets under Vietnamese Circular 99/2025"
          ]
        },
        {
          idx: "03",
          title: "Family Office & Wealth Routing",
          tagline: "HNWI & Asset Routing",
          description: "Tailoring wealth allocation paths for founders and ultra-high-net-worth families (HNWIs) into secure, licensed, premium financial instruments.",
          solutions: [
            "Routing structural, asset-backed derivatives across shielded channels",
            "Managing complex inheritance trust architecture and liquidity cascading",
            "Optimizing tax margins for multi-jurisdiction cross-border asset structures"
          ]
        }
      ],
      anonymizerTitle: "Interactive Anonymizer Tool",
      anonymizerHeading: "Anonymized Packager Simulator (Blind Teaser Sim)",
      anonymizerDesc: "Simulate how your private asset profile gets transformed by our security protocol. Enter actual stats to witness immediate masking, automatic file logging, and dummy watermark output.",
      labelRawName: "Original Project Name (Will be masked)",
      labelLocation: "Province / City State",
      labelCapex: "Capex Scale (M$ USD)",
      labelSector: "Core Investment Sector",
      labelDebt: "Leverage Ratio Target (% LTV)",
      labelEsg: "Prime ESG Compliance Metric",
      btnEncrypt: "De-identify & Generate Confidential Teaser",
      previewTitle: "Exported Document Simulation Workspace",
      previewDraft: "DRAFT ONLY",
      previewEncrypted: "CONFIDENTIAL TEASER",
      previewRecordCode: "Audit Record Id",
      previewUnencrypted: "UNENCRYPTED MANUAL DATA",
      previewProtocol: "REGULATORY COMPLIANCE: CHINESE WALL PHASE 1",
      previewSection1: "1. Commercial Anonymized Project Name",
      previewSectorAc: "[DE-IDENTIFIED] Strategic Asset Development Project in Southern Vietnam",
      previewSection2: "2. Estimated CAPEX Baseline",
      previewSection3: "3. Administrative Location",
      previewSection4: "4. Carbon Reduction & ESG Metrics",
      previewSection5: "5. Financial Risk Advisor",
      previewAdvisorNote: "Notice: Highly restricted data (Legal Due Diligence, Financial Valuation Model xlsm, and Feasibility Studies) are strictly decoupled and only dispatched via biometric OTP to authenticated firms.",
      successWatermark: "Anonymization finished! Security Watermark stamped on dynamic buffer.",
      btnDownload: "Download Teaser (PDF Sim)",
      downloadSuccessMsg: "✓ Sample security dossier download simulation initiated!"
    },
    databank: {
      title: "HHT Data Room Gateway",
      heading: "SECURE DATABANK (VDR)",
      subtitle: "HHT DataBank is our encrypted Virtual Data Room (VDR). Accessible exclusively by validated investors, sovereign funds, and institutional partners who have completed full KYC intake.",
      authTitle: "VDR ENCRYPTED AUTHENTICATION GATEWAY",
      authDesc: "Please input your Institutional Partner ID or valid OTP dispatch token below to grant sandbox decryptions.",
      partnerIdLabel: "Partner ID / OTP Token",
      partnerIdPlaceholder: "Enter HHT-INST-999 or OTP-XXXXXX",
      btnUnlock: "Decrypt & Mount Secure Sandbox",
      accessGranted: "VDR DECRYPTION COMPLETED - ENCRYPTED CHANNEL SECURED",
      partnerVerified: "Verified Institutional Profile: LEVEL 3 AUTHORIZED",
      activeSecureChannel: "Secure Sandbox Tunnel Active (Automatic Leak Auditing)",
      searchDocsPlaceholder: "Search de-identified indices...",
      docIndex: "De-identified Dossier Registry (VDR Repository)",
      noDocs: "No matching documents found in repository",
      btnViewSecureDoc: "Launch Document Decryptor",
      auditTrailTitle: "Real-time Access & Compliance Audit Trail Log",
      indexLabel: "Index Number",
      sectorLabel: "Allocation Sector",
      legalStatusLabel: "Status",
      docSizeLabel: "FileSize",
      docTypeLabel: "Asset Class Type",
      statusLabel: "Storage Protection",
      documentTypes: {
        legal: "Legal Verification Review",
        financial: "Dynamic Financial Model",
        esg: "Carbon Cert & ESG Assessment",
        summary: "Capital Placement Synopsis"
      }
    },
    insights: {
      title: "Thought Leadership & Regulatory",
      heading: "REGULATORY PORTAL & SUSTAINABILITY (ESG)",
      subtitle: "Navigating international capital frameworks, clarifying Vietnamese Circular 99/2025/TT-BTC, and restructuring legacy debt portfolios to capture premium global green financing.",
      executeTitle: "ESG IMPLEMENTATION EXCELLENCE",
      executeHeading: "Standardizing Local Corridors for International GPs",
      executeDesc: "Global DFIs (such as IFC, DEG, and European green funds) mandate that massive infrastructure allocations demonstrate absolute carbon reduction tracks. We help developers weave ESG parameters into their raw financial architecture.",
      analysisTitle: "HHT Proprietary Insights",
      diagnosticTitle: "ESG Master Capital-Ready Diagnostics",
      diagnosticDesc: "Evaluate whether your project satisfies structural parameters required to unlock green PE capital. Check the points below to compute your placement ready index:",
      diagnostics: [
        {
          title: "Carbon Emission Tracking & Power Optimization",
          desc: "Project has transparent metrics documenting expected metric tons of CO2 offset annually."
        },
        {
          title: "Closed-loop Waste Recycle & Eco Water Solutions",
          desc: "High-tech circular waste processing, water recovery pipelines, zero-landfill structures."
        },
        {
          title: "Social Development & Welfare Accords",
          desc: "Documented local employment covenants, structured transparent relocation compensation."
        },
        {
          title: "Double-tier Chinese Wall Asset Shielding",
          desc: "Sensitive assets packed according to HHT 'Blind Teaser' anonymity specifications."
        },
        {
          title: "IFRS-Convergence Accounting Alignment",
          desc: "Full pre-deal cleanup compliant under Circular 99, translating legacy local debts."
        }
      ],
      scoreLabel: "Green Financing Attractiveness Index:",
      authorLabel: "Senior Reviewer:",
      score100: "Congratulations! Project profile meets our AAA Gold-Ready standard. Fit to initiate sovereign fund placement NDAs.",
      score60: "Borderline compliant. Recommend supplementing independent ESG audits or restructuring legacy balance sheets via Circular 99.",
      score0: "Standard unmet. Project structure requires deep corporate financial refitting. Map an advisory schedule to initiate deep restructuring."
    },
    contact: {
      title: "CONNECT & INTAKE GATEWAY",
      heading: "SECURE INTAKE & KYC GATEWAY",
      subtitle: "All project disclosures are routed directly to our structural group under multi-layered information security umbrellas.",
      officeTitle: "Regional Intake & Underwriting Office",
      hqTitle: "Executive Headquarters:",
      hqDesc: "Level 38, Keangnam Landmark 72, Ring Road 3, Nam Tu Liem, Hanoi, Vietnam",
      emailTitle: "Encrypted Intake Inboxes:",
      complianceTitle: "Double-NDA Integrity Compliance",
      complianceDesc: "HHT Capital maintains zero tolerance for commercial information brokers. No partner identities, physical addresses, or proprietary files are ever traded. Client identity is strictly shielded behind our security router.",
      sec1Title: "Part 1: Institutional Persona",
      partnerTypes: {
        owner: { title: "Asset Owner", desc: "Need structural capital" },
        institution: { title: "Capital Provider", desc: "Exploring prime deals" },
        hnwi: { title: "HNWI Class", desc: "Family wealth design" }
      },
      labelFullName: "Representative Name",
      labelCompany: "Institution Name",
      labelEmail: "Email (Corporate domain preferred)",
      labelPhone: "Secure Phone / Mobile",
      sec2Title: "Part 2: Preliminary Asset Metric (For Asset Developers)",
      labelSectorType: "Sector Cluster Target",
      labelCapexScope: "Total Capital Scope (CAPEX M-USD)",
      labelLegalStatus: "Current Legal Status Baseline",
      labelMessage: "Detailed Joint Venture Proposal & Cashflow Challenges",
      privacyTitle: "Shield Agreement:",
      privacyDesc: "By dispatching this form, you authorize HHT Capital to securely record state and index this inquiry under the strict oversight of our internal Chinese Wall governance protocols.",
      btnSubmit: "Dispatch Preliminary Intake & KYC Profile",
      successHeading: "INTAKE DOSSIER ENCRYPTED & SUBMITTED",
      successDesc: "The automated HHT Core Router has generated a secured tracking log. Our restructuring committee will proceed with verification.",
      ticketLabel: "TRACKING REGISTRY ID:",
      successPartner: "Declaring Executive:",
      successCompany: "Corporate Entity:",
      successKyc: "Assumed Persona:",
      successSector: "Declared Asset Class:",
      successCapex: "Total CAPEX Scope:",
      successLegal: "Current Documentation:",
      successNote: "*Structural response instructions will be dispatched securely from the desk of Mr. Bui Khac Huy (Head of Structuring) to {email} following thorough screening.",
      btnNewSubmit: "Initiate Secondary Intake"
    },
    footer: {
      copyright: "Copyright © 2026 HHT Capital. Strictly confidential. All corporate rights reserved.",
      disclosure: "Regulatory Disclosure: HHT Capital is a wholesale capital structuring consultancy. We are not a retail commercial bank, deposit-taking institution, or direct underwriter of retail securities.",
      hq: "Hanoi Representative Office: L38, Keangnam Landmark 72, Pham Hung, Hanoi, Vietnam"
    }
  },
  zh: {
    nav: {
      home: "首页",
      about: "关于HHT资本",
      services: "战略核心服务",
      databank: "HHT保密数据库",
      insights: "监管动态与ESG",
      contact: "业务对接与KYC"
    },
    hero: {
      tagline: "大宗投资与资产结构配置路由器 / Wholesale Capital Router",
      title1: "HHT CAPITAL",
      title2: "THE MASTER ROUTER OF CAPITAL",
      subtitle: "大宗资产定制化结构解决方案提供商。我们充当大项目方、银行机构、头部券商、国际私募股权基金及家族办公室之间的桥梁与资本调度核心中枢。",
      ctaSubmit: "提交项目意向书 (KYC)",
      ctaDataBank: "虚拟安全数据库 (DataBank)",
      corePrincipleTitle: "核心原则：",
      corePrincipleDesc: "“本机构不直接代管托付资金，不进行零售商业贷款。HHT资本专注于投行级资产架构设计及大宗匹配，执行顶格‘三层审计’安全控制。”",
      stat1Val: "15+",
      stat1Label: "战略联名合作银行",
      stat2Val: "10+",
      stat2Label: "主流券商及PE基金",
      stat3Val: "$1.2B+",
      stat3Label: "累计配置大宗CAPEX",
      stat4Val: "ESG",
      stat4Label: "碳指标及绿色资质AAA"
    },
    about: {
      title: "价值与承诺",
      heading: "关于我们",
      subtitle: "HHT资本致力于攻克极复杂的资本重组及跨境资产通道难题，协助国际绿色资本安全登录东南亚最具潜力的经济走廊。",
      roadmapTitle: "战略发展路线图 (3-Phase Timeline)",
      phases: [
        {
          phase: "标准化规范",
          time: "", // Removed as requested
          title: "大宗项目尽调及三层审计架构建立",
          status: "COMPLETED",
          description: "规范基础设施及物流大宗项目法律、财务和法务合规性审计，使之无缝对齐IFRS国际财务准则标准。"
        },
        {
          phase: "网络扩张",
          time: "", // Removed as requested
          title: "桥梁融资架构及金融协同平台",
          status: "IN_PROGRESS",
          description: "推广桥梁资金（Bridge Financing）配置，深度联动15家主流商业银行并建立国际买方战略财团，分散长期资本风险。"
        },
        {
          phase: "数字化演进",
          time: "", // Removed as requested
          title: "数字化VDR云数据库及实时追溯机制",
          status: "LAUNCHING",
          description: "升级虚拟数据视窗系统，采用动态指纹去痕、实时安全水纹拦截，全自主保障大宗底稿不外流。"
        }
      ],
      strengthsTitle: "核心价值定位",
      strengths: [
        {
          title: "跨境财税与IFRS深度合规",
          desc: "精确解构VAS及复杂地方性财税通告（如越南财政部第99/2025/TT-BTC号通告），将庞杂的本地资产账面债务剥离重整，直达国际主权基金与绿色PE投资审计大关。"
        },
        {
          title: "独一无二的主流机构网络中枢",
          desc: "拥有越南境内15家一流商业银行总部、10家大型券商投行大宗和国际主权信托基金的直接白名单接入管道。"
        }
      ],
      chineseWallTitle: "防火墙独立性隔离声明 (Chinese Wall Protocol)",
      chineseWallQuote: "“HHT资本执行极端严苛的内控隔离：项目开发分支（Inbound Legal Analysis）与资本分配分支（Outbound Distribution）之间设立物理且信息单向屏蔽的‘防火墙’。原始资料与项目主体隐私唯有在签署多边NDA并获合规会签后释放。”",
      chineseWallDesc: "该法则彻底消除了交易披露泄露、内幕交易利益冲突及第三方非授权窥探。保护您的项目绝对安全是我们的第一要义。"
    },
    services: {
      title: "Services Portfolio",
      heading: "战略核心服务板块",
      subtitle: "HHT资本以创新的高端顾问工具取替传统零售信贷，为高增长基础设施与工业地产提供无缝配置，实现最大化资本净收益值。",
      list: [
        {
          idx: "01",
          title: "投资促进与高管M&A服务",
          tagline: "Primary Core Solution",
          description: "代表大型资产持有者进行深度尽调、合规账目包装，转换成具有高保密隐匿属性的脱敏商业计划书（Blind Teaser）并安排战略财团认购。",
          solutions: [
            "协调中越、外资产业园区、港口、大型物流基地的控股转让与退股",
            "设计对抗恶意收购的反向控股及多层交叉防御性架构",
            "在非公开机密图纸对齐前，强制落实双侧NDA审查程序"
          ]
        },
        {
          idx: "02",
          title: "企业财务重整与资产负债表拆解",
          tagline: "Corporate Finance Advisory",
          description: "优化加权平均资本成本（WACC），清理不良历史负债挂账、复杂资本公积锁死，为上市或大宗并购交易做好表内净底净化。",
          solutions: [
            "定制级杠杆比率匹配（主权质押、商业授信组合）",
            "安排夹层信托、短期过渡桥梁融资及项目开发贷资金垫付",
            "依据第99/2025/TT-BTC号通告重构大宗土地冻结押金等老旧资产"
          ]
        },
        {
          idx: "03",
          title: "HNWI高端资产引流配置",
          tagline: "HNWI & Asset Routing",
          description: "为大型创始人及高净值家族办公室（HNWI）一对一量身定制合规合法的信托保护伞、高流动性定向资管与平级资产平滑通道。",
          solutions: [
            "利用内封保本及衍生证券等合规高阶工具，打通资本平滑路由",
            "设计代际继承信托、流动性风险隔离及多级阶梯式套保策略",
            "优化跨多法域大宗资产转让套利中的边际税收损耗"
          ]
        }
      ],
      anonymizerTitle: "Interactive Anonymizer Tool",
      anonymizerHeading: "商业隐私包装模拟系统 (Blind Teaser Sim)",
      anonymizerDesc: "模拟资产原始信息如何被转化、脱敏并附加防盗指纹。输入您的项目基础数据，即可实时预览脱敏格式及其附带的专用安全追踪序列号。",
      labelRawName: "原始项目名称 (将由系统屏蔽)",
      labelLocation: "省份 / 重点城市",
      labelCapex: "投资规模 CAPEX (百万$) ",
      labelSector: "所属大宗资产板块",
      labelDebt: "预期负债比 target LTV (%)",
      labelEsg: "亮点ESG控制参数",
      btnEncrypt: "加密、脱敏并生成机密大宗简报 (Teaser)",
      previewTitle: "导出文件预览终端",
      previewDraft: "未授权草稿",
      previewEncrypted: "CONFIDENTIAL TEASER",
      previewRecordCode: "安全追溯编号",
      previewUnencrypted: "未脱敏原始草纸数据",
      previewProtocol: "内控审查：CHINESE WALL 防火墙第一阶段合规",
      previewSection1: "1. 商业脱敏后大宗项目名称",
      previewSectorAc: "[已隐藏主体] 位于越南南部的战略产业基础设施开发项目",
      previewSection2: "2. 预期评估 CAPEX 基准",
      previewSection3: "3. 行政省份归属",
      previewSection4: "4. 碳减排与亮点 ESG 准入度",
      previewSection5: "5. 财务风险总编排顾问",
      previewAdvisorNote: "提醒：更高级保密及图纸、Financial Model xlsm 财务分析估值框架和开发报告均保存在独立沙盒中，仅通过一次性OTP动态验证码定向派送给有双向NDA准入的已认证大中型定向买方机构。",
      successWatermark: "包装完成！安全定位标记及只读水纹序列已写入后台动态页面。",
      btnDownload: "下载 Teaser 模拟PDF",
      downloadSuccessMsg: "✓ 虚拟保密大宗文书模拟下载中..."
    },
    databank: {
      title: "HHT Data Room Gateway",
      heading: "安全保密数据库 (VDR平台)",
      subtitle: "HHT DataBank虚拟数据专线为符合最高资信、已完成全面KYC注册并签署三方NDA的主权基金、顶级券商及长期战略LP客户提供一站式沙盒专线接入。",
      authTitle: "VDR 防火墙双因子安全验证终端",
      authDesc: "请输入您的专属机构或特定OTP数字指纹密钥，登录后可进行全解密脱敏大宗图纸离线审查。",
      partnerIdLabel: "机构标识符 ID / OTP 动态令牌",
      partnerIdPlaceholder: "请输入 HHT-INST-999 或 OTP-XXXXXX",
      btnUnlock: "安全解密并挂载动态沙盒",
      accessGranted: "VDR 解密完成 - 加密安全隔离专线已建立",
      partnerVerified: "已认证机构级别：LEVEL 3 AUTHORIZED （特许大宗）",
      activeSecureChannel: "安全视窗防漏防火墙隧道运行中 (违规提取自毁机制启动)",
      searchDocsPlaceholder: "搜索脱敏后的大宗档案指标...",
      docIndex: "已脱敏资产档案一览（VDR 机密仓库）",
      noDocs: "没有在机密仓库中检索到相关记录",
      btnViewSecureDoc: "启动底稿解密查看器",
      auditTrailTitle: "实时访问审计合规日志（Audit Trail Log）",
      indexLabel: "档案检索号",
      sectorLabel: "分配大宗板块",
      legalStatusLabel: "状态评估",
      docSizeLabel: "数据量",
      docTypeLabel: "资产大类细分",
      statusLabel: "存储权限控制",
      documentTypes: {
        legal: "法务合规尽职调查底卡",
        financial: "动态Financial Model底稿",
        esg: "碳减排认证及ESG审查报告",
        summary: "资产分配综合简纲"
      }
    },
    insights: {
      title: "Thought Leadership & Regulatory",
      heading: "绿色走廊及碳中和法规 (ESG)",
      subtitle: "紧扣国际绿色资本回流通道，权威破译第99/2025/TT-BTC号通告，指导在越重资产进行跨法域重整以畅通国际绿色PE大流拨付。",
      executeTitle: "ESG 高效落实典范",
      executeHeading: "为国际大型投资机构筑建绿色合规通路",
      executeDesc: "跨国巨头（如IFC世界银行分支、DEG及德法欧洲绿色基金）要求所有千万元级重大土建基建项目必须提供定量测算的减碳足迹。HHT资本在项设方案初期提供深度标签矫正支持。",
      analysisTitle: "HHT 独席合规研判",
      diagnosticTitle: "绿色融资契合值自测平台 (ESG Ready Diagnostics)",
      diagnosticDesc: "核验您的项目是否足以打通低成本国际碳金融。激活下列控制变量以获得评估评分：",
      diagnostics: [
        {
          title: "全寿命周期碳足迹追踪及能耗削减措施",
          desc: "项目应能清晰核算出每年预计可替代煤电或减少的吨级二氧化碳排放量。"
        },
        {
          title: "水资源超纯水回收、循环无害化废水系统",
          desc: "高效零排放水网建设，工业废料不落地、绿色物流集中转运中心建设。"
        },
        {
          title: "社区生态修复及地方社会兜底保障协议",
          desc: "提供雇佣地方劳动力的就业比例蓝图，明确、全额的被占土地补偿策略。"
        },
        {
          title: "项目双向防信息内耗及隐匿敏感隔离措施",
          desc: "关键机密均根据HHT ‘Blind Teaser’ 技术协议进行了物理级别信息隐藏。"
        },
        {
          title: "符合 IFRS 国际财务标准的财务并表升级",
          desc: "历史坏账已基于第 99 号文进行大盘清理，不拖累前交易期财报外观。"
        }
      ],
      scoreLabel: "国际绿色PE资金契合指数：",
      authorLabel: "金牌撰稿人：",
      score100: "极好！您的自测指标已登顶 AAA 黄金级。完全有资历就地启动三方保密NDA，引入欧洲低成本长期资本。",
      score60: "中度契合。强烈建议针对历年来尚未履行的环评和第 99 号通告要求的账上老旧往来账进行全净洗重整。",
      score0: "不达标。该资产极易因法务和过往关联借贷账面混乱被一票否决。烦请与 HHT 的大宗财务重整顾问团队排期定制重构。"
    },
    contact: {
      title: "CONNECT & INTAKE GATEWAY",
      heading: "预审、合规对接服务入口 (KYC)",
      subtitle: "所有递交的项目意图、财务摘要、借贷卷宗都由专属合规代表直接调阅审议，受高级商业信息防火墙中国墙保障。",
      officeTitle: "大宗业务项目接收与承销办公室",
      hqTitle: "越南总控制塔：",
      hqDesc: "河内南慈廉郡范雄路 Keangnam Landmark 72大厦 38楼",
      emailTitle: "高度加密自毁邮箱：",
      complianceTitle: "保密合规及物理脱敏规章",
      complianceDesc: "HHT资本拒绝接收、倒卖垃圾金融线索及非合规买方数据。所有买方及项目方必须经由专人认证资质、激活三方NDA保护屏障，不留灰色追溯链条。",
      sec1Title: "第一部分：机构角色界定",
      partnerTypes: {
        owner: { title: "大项目方", desc: "需结构资金配置" },
        institution: { title: "战略买方 / LP", desc: "寻找优质Deal流" },
        hnwi: { title: "HNWI 高净值家族", desc: "定制架构、安全防火墙" }
      },
      labelFullName: "代理执行官姓名",
      labelCompany: "机构全称 / 母公司全称",
      labelEmail: "企业邮箱域名 (拒收免费公开注册邮箱)",
      labelPhone: "安全加密手机号码 / 卫星短端",
      sec2Title: "第二部分：项目指标初始自评 (仅本国项目方填写)",
      labelSectorType: "资产所属板块群组",
      labelCapexScope: "预估总 CAPEX 指数 (百万USD)",
      labelLegalStatus: "现行最新国家证照级别",
      labelMessage: "财务瓶颈详述、并购要约草案或外汇需求详情",
      privacyTitle: "严格信息锁条：",
      privacyDesc: "通过递交在线审核报卡，您即完全认可HHT资本的大宗受理指引流程，数据存储完全隶属于行内‘防火墙’高危脱敏规程管理。",
      btnSubmit: "递交初始注册报表及 KYC 尽调申请",
      successHeading: " intake 报件已安全加密上报",
      successDesc: "HHT Core 自动分线系统已成功抓取会话日志，并派单，重组委将快速审阅。",
      ticketLabel: "追踪批次号：",
      successPartner: "预审执行官：",
      successCompany: "挂账单位：",
      successKyc: "认证Persona角色：",
      successSector: "资产大类选择：",
      successCapex: "大宗CAPEX核准：",
      successLegal: "牌照完备：",
      successNote: "*正式批签反馈及具体法案指导将由 Bùi Khắc Huy（资产重整委员会主审）的特定加密邮箱安全派送到 {email}，请查收审阅。",
      btnNewSubmit: "录入次级项目备份"
    },
    footer: {
      copyright: "版权所有 © 2026 HHT Capital. 专属版权. 保留所有商业追偿权力及诉讼权利.",
      disclosure: "豁免条款：HHT资本是一家大宗金融咨询公司。不充当零售银行业务，不属于公募或零售有价证券直接承销人，所有推断均受大宗NDA及三方审计框架限止。",
      hq: "河内办公总部: L38, Keangnam Landmark 72, Pham Hung, Hanoi, Vietnam"
    }
  },
  ja: {
    nav: {
      home: "ホーム",
      about: "HHTについて",
      services: "戦略的サービス",
      databank: "保密データーサーバー",
      insights: "規制動向 & ESG",
      contact: "お問い合わせ & KYC"
    },
    hero: {
      tagline: "大口投資・資産構造ルーター / Wholesale Capital Router",
      title1: "HHT CAPITAL",
      title2: "THE MASTER ROUTER OF CAPITAL",
      subtitle: "私たちは大規模プロジェクト事業者、銀行グループ、大手証券会社、海外プライベートエクイティ、そして超富裕層ファミリー間で独自のプライベートアセットを仲介する「ファイナンシャル・アーキテクト」です。",
      ctaSubmit: "プロジェクト調書 (KYC) 提出",
      ctaDataBank: "Virtual DataBank ログイン",
      corePrincipleTitle: "中核原則:",
      corePrincipleDesc: "「当機関は、直接お金をお預かりする銀行や、小売の商業ローン会社ではありません。高度な資産構造モデリングと、３重の厳密な監査管理による大口マッチングに特化しています」",
      stat1Val: "15+",
      stat1Label: "提携メガバンク・地方銀行",
      stat2Val: "10+",
      stat2Label: "大手証券会社 / PE機関",
      stat3Val: "$1.2B+",
      stat3Label: "累積 CAPEX 配置",
      stat4Val: "ESG",
      stat4Label: "AAA級カーボン合意獲得"
    },
    about: {
      title: "価値と誓約",
      heading: "私たちについて",
      subtitle: "HHTキャピタルは、ベトナムのインフラ、グリーンエネルギー、先端物流拠点をターゲットに、非常に複雑な事業再生や資産設計、外資安全移転のパズルを解くために設立されました。",
      roadmapTitle: "戦略的な拡張ロードマップ (3-Phase Timeline)",
      phases: [
        {
          phase: "標準化・インテグリティ",
          time: "", // Removed as requested
          title: "法的・財務的3重大規模監査体制の標準化",
          status: "COMPLETED",
          description: "大規模プロジェクトの法的・財務的適合基準。各種ローカル取引データを、国際財務報告基準（IFRS）へとシームレスに最適化。"
        },
        {
          phase: "ネットワークの拡張",
          time: "", // Removed as requested
          title: "ブリッジ・ファイナンス構想 & 共同投資シンジケート",
          status: "IN_PROGRESS",
          description: "短期のブリッジ資金融通モデルを強化。ベトナム商業銀行15行、大手証券会社10社等と連携し資金フローリスクを分散。"
        },
        {
          phase: "デジタル・トランスフォーメーション",
          time: "", // Removed as requested
          title: "VDR仮想セキュアルーム & リアルタイム証跡ロギング",
          status: "LAUNCHING",
          description: "最先端の仮想データルーム（Virtual Data Room）をローンチ。改ざん防止ウォーターマークの自動埋込、認証OTP技術で情報を保護。"
        }
      ],
      strengthsTitle: "コアコンピタンス",
      strengths: [
        {
          title: "IFRS等国際基準に厳格に準拠",
          desc: "ベトナムのローカル会計規則、VAS、および最新の財務省通達、通達99/2025/TT-BTCを熟知。複雑な旧負債データを国際PEや主権信託の求めるIFRS準拠フォーマットへ再構築。"
        },
        {
          title: "比類のない卸売金融ネットワーク",
          desc: "ベトナムの商業銀行トップ15行、機関投資家特化の主要な証券取引室10室、グローバルなシンジケートへの一元的アクセスパイプラインを確立。"
        }
      ],
      chineseWallTitle: "情報の壁（チャイニーズウォール規則）ステートメント",
      chineseWallQuote: "「HHTは、案件開発側（Inbound Legal Analysis）と金融資本募集側（Outbound Distribution）の間に、完全に隔離された『チャイニーズウォール』を設置しています。すべての重要データや個人、企業の身元情報は、多者間NDAが有効化されるまで一切解禁されません」",
      chineseWallDesc: "これにより案件漏洩、インサイダー摩擦、不当な覗き見を一掃します。クライアントのプライバシーと安全は、当社の最優先使命です。"
    },
    services: {
      title: "Services Portfolio",
      heading: "戦略的サービス領域",
      subtitle: "HHTキャピタルは一般の貸付窓口モデルではなく、ハイエンドのアドバイザリーを提供することで、お客様のアセットに最高純度の資本収益性をお約束します。",
      list: [
        {
          idx: "01",
          title: "投資ファシリテーション & M&A諮問",
          tagline: "Primary Core Solution",
          description: "プロジェクト保有者を代理してデューデリジェンスを精査。極めて機密性の高い匿名の案件概要（Blind Teaser）へとリパッケージし、シンジケートへ配分します。",
          solutions: [
            "日系、外資、中資が保有する工業団地、物流センター、港湾等の経営権譲渡・撤退の調整",
            "敵対的買収からの防衛策、多重クロス防衛スキーム設計",
            "詳細図面の突き合わせ開始前に、双方向NDAの必須確認手続きを実施"
          ]
        },
        {
          idx: "02",
          title: "企業の財務再編成・バランスシート整備",
          tagline: "Corporate Finance Advisory",
          description: "加權平均資本コスト（WACC）の適正化、古いフリーズ勘定や内部留保膠着の解消。大規模なIPOやM&A合併前の帳簿クリーンアップを実行。",
          solutions: [
            "最適レバレッジ設計（主権借入や外資商業与信のベストミックス）",
            "メザニン債の引き受け、ブリッジ融資、短期開発ローンの迅速調達",
            "通達99/2025に基づくフリーズ状態の地権預託金のリビルド"
          ]
        },
        {
          idx: "03",
          title: "HNWI向けの資産戦略・配分ルート",
          tagline: "HNWI & Asset Routing",
          description: "大手創業者およびウルトラ高純度ファミリーオフィス（HNWI）に向け、強固な信託保護、極めて高い安全性と流動性を担保したクローズド運用ルートをご用意。",
          solutions: [
            "元本確保型証券や合規性の高い金融派生ツールから、堅牢なキャピタル移転パスを構築",
            "資産承継・信託のカスタマイズ、複数の管轄区をまたぐ流動性の分離",
            "境界を越えた大規模アセットオフショア移転時の各種税務摩擦の最少化"
          ]
        }
      ],
      anonymizerTitle: "Interactive Anonymizer Tool",
      anonymizerHeading: "機密マスキング変換システム (Blind Teaser Sim)",
      anonymizerDesc: "元のプロジェクト情報がどのように変換され、ウォーターマークが埋め込まれ、セキュリティタグが発行されるかをテストします。実際のスペックを入力して試せます。",
      labelRawName: "プロジェクト名 (システムが自動マスキングします)",
      labelLocation: "省 / 重点エリア",
      labelCapex: "事業規模 CAPEX (百万米ドル)",
      labelSector: "投資される資産クラス",
      labelDebt: "想定LTVターゲット (%)",
      labelEsg: "アピール可能なESG削減パラメーター",
      btnEncrypt: "機密保護マスキング＆商業Teaser出力",
      previewTitle: "書き出しドキュメント・シミュレーター",
      previewDraft: "仮ドラフト",
      previewEncrypted: "CONFIDENTIAL TEASER",
      previewRecordCode: "監査セキュリティ番号",
      previewUnencrypted: "未加工・未暗号化の草稿データ",
      previewProtocol: "内部統制：CHINESE WALL 防火壁フェーズ１クリア",
      previewSection1: "1. 商業マスキング後案件名称",
      previewSectorAc: "[非表示処理済] ベトナム南部インフラ大規模開発プロジェクト",
      previewSection2: "2. 想定 CAPEX 基本値",
      previewSection3: "3. 行政所属",
      previewSection4: "4. 二酸化炭素削減＆亮点ESG評価",
      previewSection5: "5. 主管ファイナンシャル・アドバイザー",
      previewAdvisorNote: "注：より重要度の高い図面、Financial Model xlsm 財務分析、案件報告書は別個の安全なデータプールに保管され、双方向NDAを締結し承認された認定パートナー企業に、 biometric OTP で直接送信されます。",
      successWatermark: "パッケージ成功！セキュリティ位置タグと専用ウォーターマークがバッファ画面に書き出されました。",
      btnDownload: "Teaser サンプルPDFのシミュレートダウンロード",
      downloadSuccessMsg: "✓ 機密サンプルファイルの疑似ダウンロードを進行中..."
    },
    databank: {
      title: "HHT Data Room Gateway",
      heading: "安全保密データベース (VDRシステム)",
      subtitle: "HHT DataBank仮想データ专線は、最高格付の認定やKYC審査、多者間NDAをパスした戦略LP、大手証券会社、主権信託の為に用意された高度な仮想セキュア環境です。",
      authTitle: "VDR ２要素防火壁認証ゲートウェイ",
      authDesc: "貴機関に個別送付されたOTPもしくは機関識別子（Partner ID）を入力の上、案件のデータダクトを展開してください。",
      partnerIdLabel: "機関 ID / OTP 宛先トークン",
      partnerIdPlaceholder: "HHT-INST-999 または OTP-XXXXXX",
      btnUnlock: "セキュアハブの展開＆解読",
      accessGranted: "VDR ハブ展開成功 - 暗号化されたサンドボックス通路を確立しました",
      partnerVerified: "認定確認レベル：LEVEL 3 AUTHORIZED （大口認可）",
      activeSecureChannel: "情報流出防止サンドボックス稼働中（不審な引き抜きは自動でアクセス遮断されます）",
      searchDocsPlaceholder: "マスキング済み書類データの検索...",
      docIndex: "匿名案件ファイル一覧（VDR 書類庫）",
      noDocs: "該当する記録は書類庫に見つかりませんでした",
      btnViewSecureDoc: "底稿検証ビューアの起動",
      auditTrailTitle: "リアルタイムセキュリティアクセス監査トレール（Audit Trail Log）",
      indexLabel: "インデックス番号",
      sectorLabel: "アセット細部",
      legalStatusLabel: "法的状態",
      docSizeLabel: "ファイルサイズ",
      docTypeLabel: "アセット細部分類",
      statusLabel: "アクセスレベル制御",
      documentTypes: {
        legal: "合規審査報告書",
        financial: "精緻 Financial Model xlsm",
        esg: "ESG・カーボンオフセット認証",
        summary: "全体資金分配シナプシス"
      }
    },
    insights: {
      title: "Thought Leadership & Regulatory",
      heading: "規制要綱 & カーボンニュートラル(ESG)",
      subtitle: "ベトナム財務省の最新財務省通達 通達99/2025/TT-BTCを解明し、バランスシート上に滞留している歴史残高を整理。海外グリーン投資家の受け入れ条件を極限まで引き上げます。",
      executeTitle: "ESG 完遂モデル",
      executeHeading: "海外機関投資家誘致の実践グリーンロード",
      executeDesc: "世界銀行IFC、ドイツDEG、欧州の環境PEなどの外国機関は、億ドル規模の大規模建設プロジェクトに対し、精査された二酸化炭素削減スコアの開示を求めています。HHTキャピタルは立案初期からタグ標準化を主導します。",
      analysisTitle: "HHT 専門研究",
      diagnosticTitle: "グリーン投資親和度適合適格診断 (ESG Capital-Ready diagnostics)",
      diagnosticDesc: "お持ちのプロジェクトが国際グリーン融資（低金利など）を獲得できるかセルフチェックします。コントロールボックスを切り替えて適合スコアを算出して下さい：",
      diagnostics: [
        {
          title: "全寿命周期カーボンフットプリント予測・省エネルギー対策",
          desc: "毎年何トンの石炭火力発電量が削減され、二酸化炭素排出が抑制されるかが科学的に定量化されている。"
        },
        {
          title: "クローズド廃棄物リサイクル、無害化超純水回収システム",
          desc: "産業廃棄物が環境に不法投棄されないリサイクル循環、高度な無害化処理排水設備を有する。"
        },
        {
          title: "地域社会のエコシステム修復、地方自治とのセーフガード合意",
          desc: "地元の雇用促進プログラムを明確化し、立退き移転等に対する完全補償プロセスが確立されている。"
        },
        {
          title: "２層の対外情報防衛・Blind Teaser 技術に沿った de-identify 処理",
          desc: "機密データや地名が、HHTのセキュリティ仕様（Blind Teaser）に沿ってシステム解読可能に物理的隠蔽処理をされている。"
        },
        {
          title: "IFRS（国際財務報告基準）に即した財務会計のアップグレード",
          desc: "財務省通達99号に即し、簿外債務や地権預り金といった不透明な残高がクリーン化され、相手方への心証に耐える状態である。"
        }
      ],
      scoreLabel: "国際PE適合指数 (Green Ready Metric):",
      authorLabel: "監修:",
      score100: "極めて優秀！適合スコアは最高の AAA に達しています。即座に三方NDAへの移行、欧州優良キャピタルの呼び込みが可能な体制です。",
      score60: "当落線上。早急に、未執行の環境評価書を整備し、第99号通達に準拠した古い貸借の全洗処分を行う事をお勧めします。",
      score0: "失格。該当アセットは過往の経理混乱や各種法令不足により見送られる公算が大きいです。HHT戦略財務再構築チームにご連絡下さい。"
    },
    contact: {
      title: "CONNECT & INTAKE GATEWAY",
      heading: " preliminary KYC お問い合わせ窓口",
      subtitle: "送信された案件構想や財務データのすべては、チャイニーズウォール（強力な内部分断プロトコル）の下で当社の担当者のみに安全配分され、非公開に厳戒審議します。",
      officeTitle: "大口プロジェクト審査・引受デスク",
      hqTitle: "ハノイ総コントロールセンター：",
      hqDesc: "ハノイ市ナムトゥリエム区ファムフン路 ケangnam Landmark 72タワー 38階",
      emailTitle: "安全暗号化メールアドレス：",
      complianceTitle: "データ integrity 厳守＆脱敏規則",
      complianceDesc: "HHTキャピタルは情報仲介業者による非正規データや、スパムめいた買い手のログを一切排除します。全取引参加者は身元と資信審査を通過し、３者間NDAを有効化する必要があります。",
      sec1Title: "第1部：機関・個人のロール分類",
      partnerTypes: {
        owner: { title: "事業主・アセット保有者", desc: "戦略的な資金調達・構造化相談" },
        institution: { title: "買方機関 / LP・投資家", desc: "優良大口 Deal フローの発掘" },
        hnwi: { title: "HNWI ウルトラ富裕層", desc: "資産承継・信託等安全設計" }
      },
      labelFullName: "代理幹部 氏名",
      labelCompany: "機関名 / 親会社正式名称",
      labelEmail: "企業ドメインの公式メールアドレス (無料ドメイン不可)",
      labelPhone: "暗号化番号 / 直通モバイル",
      sec2Title: "第２部：アセット指標の初期自学診断 (アセット保有者のみ記入)",
      labelSectorType: "アセットが属する主要産業群",
      labelCapexScope: "推定総CAPEX（百万米ドル換算）",
      labelLegalStatus: "現行保有している最高級許認可・ドキュメント",
      labelMessage: "財務制約事項の詳述、J/V計画の草案、または外貨構造化等の具体要求",
      privacyTitle: "利用特記事項：",
      privacyDesc: "送信を完了する事でHHTキャピタルの受付指針に準じたデータ格納を承諾したとみなされ、お送り頂いたデータファイルは完全に『チャイニーズウォール』内で物理処理されます。",
      btnSubmit: " preliminary KYC 調書の送信",
      successHeading: " intake 調書は暗号化し提出されました",
      successDesc: "HHT Core ルーターがシームレスに調書をログへ保存し、重整審査委員会へ引き渡しました。",
      ticketLabel: "追跡シリアル：",
      successPartner: "预審審査官：",
      successCompany: "所属チーム：",
      successKyc: "認証 Persona：",
      successSector: "アセット大クラス：",
      successCapex: "大宗 CAPEX スコア：",
      successLegal: "ドキュメント保有度：",
      successNote: "*正式なお引き受け判断、および今後のガイダンスは、 Bùi Khắc Huy（資産再生委員長）が率いるデスクより {email} へ電子送付されます。ご確認下さい。",
      btnNewSubmit: "セカンダリアセット登録"
    },
    footer: {
      copyright: "Copyright © 2026 HHT Capital. 厳格管理。当組織の全ての商業利益および法的損害賠償権を留保します。",
      disclosure: "免責事項：HHT Capitalは大口専門の金融再構築のアドバイザリー機関です。預金受け入れなどの商業銀行サービス、一般向けの株式販売取扱いは一切行っておりません。",
      hq: "ハノイ本社： L38, Keangnam Landmark 72, Pham Hung, Hanoi, Vietnam"
    }
  }
};
