
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

export const IMAGES = {
  hero: "https://loremflickr.com/1600/900/compass,map",
  painPoint: "https://loremflickr.com/1600/900/frustrated,business",
  expertise: "https://loremflickr.com/1600/900/lawyer,office",
  handshake: "https://loremflickr.com/1600/900/handshake,trust",
  documents: "https://loremflickr.com/1600/900/contract,stamp",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "브랜드 철학", path: "/philosophy" },
  { label: "주요 서비스", path: "/services" },
  { label: "전문가 소개", path: "/experts" },
  { label: "상담 신청", path: "/contact" },
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
    title: "행정심판/소송",
    description: "행정사와 변호사의 협업 시스템을 통해 가장 현실적이고 강력한 법률 대응을 제공합니다.",
    icon: <Gavel className="w-8 h-8" />
  }
];
