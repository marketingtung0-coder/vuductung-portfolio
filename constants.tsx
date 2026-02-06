
import React from 'react';
import { Project, Experience, Skill } from './types';
import { BarChart3, Target, PenTool, TrendingUp, Search } from 'lucide-react';

export const SKILLS: Skill[] = [
  {
    name: "Digital Marketing",
    description: "Tối ưu hóa phễu chuyển đổi và quản lý chiến dịch đa kênh trên Google, Facebook, TikTok.",
    icon: "Target"
  },
  {
    name: "Branding",
    description: "Xây dựng bản sắc thương hiệu và định vị giá trị cốt lõi trong tâm trí khách hàng.",
    icon: "PenTool"
  },
  {
    name: "Chiến lược Nội dung",
    description: "Tạo ra câu chuyện thương hiệu hấp dẫn, thúc đẩy tương tác và lòng trung thành của khách hàng.",
    icon: "TrendingUp"
  },
  {
    name: "Performance Marketing",
    description: "Tập trung vào ROI, phân bổ ngân sách thông minh dựa trên dữ liệu thực tế.",
    icon: "BarChart3"
  },
  {
    name: "Dữ liệu & Phân tích",
    description: "Sử dụng GA4, GTM và các công cụ BI để thấu hiểu hành vi khách hàng.",
    icon: "Search"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Tái định vị thương hiệu Mỹ phẩm hữu cơ 'EcoGlow'",
    category: "Branding & Strategy",
    problem: "Thương hiệu gặp khó khăn trong việc tiếp cận phân khúc khách hàng cao cấp dù chất lượng sản phẩm tốt.",
    strategy: "Chuyển đổi từ thông điệp 'giá rẻ' sang 'lối sống bền vững' và 'sự sang trọng thuần khiết'.",
    execution: "Hợp tác với 15 influencers phân khúc lifestyle, tổ chức sự kiện workshop trải nghiệm tại các trung tâm thương mại lớn.",
    results: "Doanh thu tăng 45% trong quý đầu tiên, nhận diện thương hiệu trong phân khúc cao cấp tăng 120%.",
    imageUrl: "https://picsum.photos/seed/marketing1/1200/800"
  },
  {
    id: "2",
    title: "Chiến dịch Omni-channel cho Chuỗi cửa hàng 'HomeDecor'",
    category: "Performance Marketing",
    problem: "Tỷ lệ bỏ giỏ hàng trên website cao và thiếu sự liên kết giữa kênh online với cửa hàng vật lý.",
    strategy: "Triển khai hệ thống CRM tập trung và chiến dịch remarketing cá nhân hóa dựa trên hành vi xem sản phẩm.",
    execution: "Tối ưu hóa SEO local, chạy quảng cáo Dynamic Product Ads và tích hợp QR code tích điểm tại quầy.",
    results: "Tỷ lệ chuyển đổi web tăng 30%, doanh thu tại cửa hàng từ nguồn online đóng góp 25%.",
    imageUrl: "https://picsum.photos/seed/marketing2/1200/800"
  },
  {
    id: "3",
    title: "Phát triển Cộng đồng 'TechSavers'",
    category: "Content Strategy",
    problem: "Tương tác trên fanpage giảm mạnh do nội dung quá thiên về bán hàng, thiếu giá trị cho người dùng.",
    strategy: "Xây dựng series video 'Mẹo công nghệ 60 giây' và các cuộc thi sáng tạo nội dung từ người dùng.",
    execution: "Sản xuất 12 video/tháng, triển khai chatbot tư vấn lỗi kỹ thuật miễn phí.",
    results: "Tương tác tự nhiên tăng 400%, lượng follower tăng thêm 50,000 người trong 6 tháng.",
    imageUrl: "https://picsum.photos/seed/marketing3/1200/800"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    role: "Senior Marketing Manager",
    company: "VinaGrowth Agency",
    period: "2021 - Hiện tại",
    description: [
      "Điều hành đội ngũ 15 nhân sự triển khai các chiến dịch marketing cho các đối tác Fortune 500.",
      "Chịu trách nhiệm trực tiếp về tăng trưởng doanh số 200 tỷ VNĐ/năm thông qua các kênh Digital.",
      "Xây dựng quy trình tối ưu hóa chuyển đổi (CRO) giúp giảm 30% chi phí CPL."
    ]
  },
  {
    id: "2",
    role: "Digital Marketing Specialist",
    company: "MegaCorp Vietnam",
    period: "2018 - 2020",
    description: [
      "Quản lý ngân sách quảng cáo 5 tỷ VNĐ/tháng trên Facebook và Google Ads.",
      "Thực hiện phân tích thị trường và dự báo xu hướng tiêu dùng theo quý.",
      "Phát triển hệ thống email marketing tự động hóa tăng tỷ lệ giữ chân khách hàng lên 20%."
    ]
  }
];
