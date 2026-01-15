
import React from 'react';
import { 
  ShieldAlert, 
  FileCheck, 
  Gavel, 
  MessageSquare, 
  Navigation,
  Scale
} from 'lucide-react';
import { ServiceItem, NavItem } from './types';

export const COLORS = {
  primary: "#0F4C81",
  secondary: "#F5A623",
  background: "#F8F9FA",
  textDark: "#333333",
  textLight: "#666666",
};

export const CONTACT = {
  phone: "010-3694-2718",
  email: "contact@admin114.kr",
  address: "서울 광진구 뚝섬로 742 광성빌딩 6층 605호"
};

export const IMAGES = {
  // 메인 히어로: 웃고 있는 한국인 소상공인 사진
  hero: "https://images.unsplash.com/photo-1556740758-90eb3af13d2e?q=80&w=1600&auto=format&fit=crop", 
  // 기존 통증 포인트 이미지
  painPoint: "https://images.pexels.com/photos/7821476/pexels-photo-7821476.jpeg?auto=compress&cs=tinysrgb&w=1600",
  // '시작할 때 끝을 생각하자' - 요청하신 상세 프롬프트 기반 이미지
  expertise: "https://image.pollinations.ai/prompt/A_professional_consultant_standing_in_front_of_a_glass_wall_with_a_complex_city_map_or_blueprint,_pointing_at_a_specific_point,_view_from_behind,_modern_office_setting,_warm_sunlight_coming_through,_symbolizing_clear_direction_and_planning,_professional_attire,_trustworthy,_4k,_realistic?width=1024&height=1024&nologo=true", 
  // '소상공인이 웃을 수 있는 그날까지' - 요청하신 블랙 슈트 전문가 스타일 (얼굴이 보이지 않는 전문적인 뒷모습/어깨 샷)
  handshake: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop", 
  // 관련 자료 확보 이미지
  documents: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop", 
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
    title: "인허가 컨설팅",
    description: "복잡한 인허가 절차를 전문가가 대행하여 사업 시작의 문턱을 낮춰드립니다.",
    icon: <FileCheck className="w-8 h-8" />
  },
  {
    id: "hearing",
    title: "청문 및 의견제출",
    description: "처분 전 단계에서 유리한 증거와 논리를 구성하여 처분 수위를 낮추는 초기 대응의 핵심입니다.",
    icon: <MessageSquare className="w-8 h-8" />
  },
  {
    id: "judgment",
    title: "행정구제",
    description: "행정사와 변호사의 협업 시스템을 통해 가장 현실적이고 강력한 법률 대응을 제공합니다.",
    icon: <Gavel className="w-8 h-8" />
  }
];
