
import React from 'react';
import { 
  ShieldAlert, 
  FileCheck, 
  Gavel, 
  MessageSquare, 
  Navigation,
  Scale,
  AlertCircle,
  Ban,
  UserCheck,
  Map,
  HeartPulse
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
};

export const NAV_ITEMS: NavItem[] = [
  { label: "브랜드 철학", path: "/philosophy" },
  { label: "주요 서비스", path: "/services" },
  { label: "전문가 소개", path: "/experts" },
  { label: "상담 안내", path: "/contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "suspension",
    title: "영업정지 구제",
    description: "청소년 주류 제공, 위생 위반 등 억울한 영업정지 처분에 대한 집행정지 및 행정심판을 지원합니다.",
    icon: <ShieldAlert className="w-8 h-8" />
  },
  {
    id: "licensing",
    title: "인허가",
    description: "복잡한 인허가 절차 및 거부 처분에 대한 법률적 대응을 전문가가 대행해 드립니다.",
    icon: <FileCheck className="w-8 h-8" />
  },
  {
    id: "subsidy",
    title: "보조금 사기",
    description: "보조금 부정수급 관련 조사 대응 및 환수 처분, 제재 부가금에 대한 방어 전략을 수립합니다.",
    icon: <AlertCircle className="w-8 h-8" />
  },
  {
    id: "bidding",
    title: "입찰참가자격 제한",
    description: "부정당업자 제재 등 공공입찰 참가 자격 제한 처분에 대한 효력 정지 및 취소 청구를 진행합니다.",
    icon: <Ban className="w-8 h-8" />
  },
  {
    id: "police",
    title: "특별사법경찰 대응",
    description: "식품위생, 환경, 노동 등 특별사법경찰관의 수사 단계에서부터 법률적 조력을 제공합니다.",
    icon: <UserCheck className="w-8 h-8" />
  },
  {
    id: "land",
    title: "토지수용",
    description: "공익사업에 따른 토지 수용 시 정당한 보상금 산정 및 이의 신청 절차를 대행합니다.",
    icon: <Map className="w-8 h-8" />
  },
  {
    id: "legal",
    title: "산재·음주·학폭",
    description: "산업재해 승인, 음주운전 면허 구제, 학교폭력 징계 대응 등 권익 보호를 위한 행정 구제를 지원합니다.",
    icon: <HeartPulse className="w-8 h-8" />
  }
];
