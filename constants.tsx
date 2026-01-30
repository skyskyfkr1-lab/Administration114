
import React from 'react';
import { 
  ShieldAlert, 
  FileCheck, 
  Gavel, 
  MessageSquare, 
  AlertCircle,
  Ban,
  UserCheck,
  Map,
  HeartPulse,
  TrendingUp,
  Scale
} from 'lucide-react';
import { ServiceItem, NavItem } from './types';

export const COLORS = {
  primary: "#002C5F",
  secondary: "#F5A623",
  background: "#F8F9FA",
  textDark: "#333333",
  textLight: "#666666",
};

export const CONTACT = {
  phone: "010-5381-2718",
  office: "02-6250-3007",
  email: "contact@admin114.kr",
  address: "서울 서초구 서초대로 254 오퓨런스빌딩 7층",
  hours: "연중무휴 오전 9시 ~ 오후 9시"
};

export const BRAND = {
  parent: "법무법인 태광 부설",
  main: "행정문제연구소 행정114"
};

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1556740758-90eb3af13d2e?q=80&w=1600&auto=format&fit=crop", 
  painPoint: "https://images.pexels.com/photos/7821476/pexels-photo-7821476.jpeg?auto=compress&cs=tinysrgb&w=1600",
  expertise: "https://image.pollinations.ai/prompt/A_professional_consultant_standing_in_front_of_a_glass_wall_with_a_complex_city_map_or_blueprint,_pointing_at_a_specific_point,_view_from_behind,_modern_office_setting,_warm_sunlight_coming_through,_symbolizing_clear_direction_and_planning,_professional_attire,_trustworthy,_4k,_realistic?width=1024&height=1024&nologo=true", 
  handshake: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop", 
  documents: "https://images.pexels.com/photos/7731348/pexels-photo-7731348.jpeg?auto=compress&cs=tinysrgb&w=1600",
  // Google Drive images require the thumbnail or uc API to render directly in <img> tags.
  representative: "https://drive.google.com/thumbnail?id=19ceS8J1v93DgE5P-oP2iMB7ILvlqrEQw&sz=w1200", 
};

export const NAV_ITEMS: NavItem[] = [
  { label: "투 트랙 철학", path: "/philosophy" },
  { label: "전문 서비스", path: "/services" },
  { label: "연구소 전문가", path: "/experts" },
  { label: "상담/오시는길", path: "/contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "suspension",
    title: "영업정지/기업제재 구제",
    description: "영업정지, 부정당업자 지정, 입찰참가자격 제한 등 기업의 생존권이 걸린 처분에 대해 사실오인과 재량권 일탈·남용을 정밀 타격합니다.",
    icon: <ShieldAlert className="w-8 h-8" />
  },
  {
    id: "licensing",
    title: "기피/특수 인허가",
    description: "폐기물 처리, 태양광 발전, 수목장 등 지역사회 반발이 심하거나 법리가 복잡한 특수 인허가를 전략적으로 성사시킵니다.",
    icon: <FileCheck className="w-8 h-8" />
  },
  {
    id: "subsidy",
    title: "보조금/부정수급 방어",
    description: "보조금 환수 처분 및 제재 부가금에 대해 고의성 없음과 절차적 하자를 입증하여 경제적 이익을 보호합니다.",
    icon: <AlertCircle className="w-8 h-8" />
  },
  {
    id: "land",
    title: "토지보상/재산권 보호",
    description: "토지수용 보상금 증액, 국공유지 무상 양도, 하천 미불용지 보상 등 행정법적 전문성이 필요한 재산권 분쟁을 해결합니다.",
    icon: <Map className="w-8 h-8" />
  },
  {
    id: "police",
    title: "특별사법경찰/조사 대응",
    description: "강제 수사의 경계에서 영장 없는 수사를 차단하고, 수사 초기 단계부터 유리한 진술 시나리오를 설계합니다.",
    icon: <UserCheck className="w-8 h-8" />
  },
  {
    id: "planning",
    title: "도시계획/특수 기획",
    description: "도시계획 변경, 환매권 행사, 용도지역 변경 등 고도의 행정 실무 경험이 필요한 특수 프로젝트를 수행합니다.",
    icon: <TrendingUp className="w-8 h-8" />
  },
  {
    id: "legal",
    title: "산재·음주·학폭",
    description: "산업재해 승인, 음주운전 면허 구제, 학교폭력 징계 대응 등 개인의 일상을 되찾기 위한 강력한 행정 구제를 제공합니다.",
    icon: <HeartPulse className="w-8 h-8" />
  }
];
