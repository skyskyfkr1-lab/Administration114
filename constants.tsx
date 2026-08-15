
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
  Scale,
  Activity,
  UserPlus,
  ShieldHalf,
  Building2,
  Leaf,
  Factory,
  Utensils,
  Coins
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
  email: "longlearn50@gmail.com",
  kakao: "https://open.kakao.com/o/sUQSXVIi",
  address: "서울 서초구 서초대로 254 오퓨런스빌딩 7층",
  hours: "전화상담 오전 9시 ~ 오후 9시 (365일 연중무휴)"
};

export const BRAND = {
  parent: "법무법인 태광 부설",
  main: "행정문제연구소 행정114"
};

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1556740758-90eb3af13d2e?q=80&w=1600&auto=format&fit=crop", 
  heroBadge: "https://lh3.googleusercontent.com/d/1S5J7cn0-qRTZLFFZQAORlqD1kCUNwV0O",
  painPoint: "https://images.pexels.com/photos/7821476/pexels-photo-7821476.jpeg?auto=compress&cs=tinysrgb&w=1600",
  expertise: "https://image.pollinations.ai/prompt/A_professional_consultant_standing_in_front_of_a_glass_wall_with_a_complex_city_map_or_blueprint,_pointing_at_a_specific_point,_view_from_behind,_modern_office_setting,_warm_sunlight_coming_through,_symbolizing_clear_direction_and_planning,_professional_attire,_trustworthy,_4k,_realistic?width=1024&height=1024&nologo=true", 
  handshake: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop", 
  documents: "https://images.pexels.com/photos/7731348/pexels-photo-7731348.jpeg?auto=compress&cs=tinysrgb&w=1600",
  representative: "https://lh3.googleusercontent.com/d/19ceS8J1v93DgE5P-oP2iMB7ILvlqrEQw",
  leeKyungSeok: "https://lh3.googleusercontent.com/d/1F5hGG4w1unCTeFQAf-3Pb60jrwZ5Kg8k", 
  representativeBackup: "https://drive.google.com/thumbnail?id=19ceS8J1v93DgE5P-oP2iMB7ILvlqrEQw&sz=w1000",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "투 트랙 철학", path: "/philosophy" },
  { label: "전문 서비스", path: "/services" },
  { label: "연구소 전문가", path: "/experts" },
  { label: "상담/오시는길", path: "/contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "food-sanitation",
    title: "1. 식품 · 위생",
    tags: ["음식점", "식품제조", "공중위생", "영업정지", "과징금"],
    description: "일반음식점, 휴게음식점, 식품제조·가공업 및 숙박·목욕 등 공중위생영업소의 식품위생법 위반 영업정지, 품목제조정지, 폐쇄명령 및 과징금 전환 처분에 대해 위법·부당성 및 재량권 일탈·남용을 법리적으로 파고듭니다.",
    icon: <Utensils className="w-8 h-8" />
  },
  {
    id: "subsidy",
    title: "2. 보조금 부정수급",
    tags: ["사회복지시설", "장기요양", "보조금 환수", "지정취소", "제재부가금"],
    description: "사회복지시설, 노인장기요양기관, 어린이집, R&D 기업 등의 보조금 부정수급 현장조사 및 감사 대응, 보조금 환수 처분, 장기요양기관 지정취소·업무정지 통지에 대해 고의성 부인 및 절차적 하자를 입증하여 방어합니다.",
    icon: <AlertCircle className="w-8 h-8" />
  },
  {
    id: "police",
    title: "3. 특사경 (조사대응)",
    tags: ["특사경 조사", "강제수사 대응", "초기 진술 설계", "형사 연계 방어"],
    description: "식약처·지자체·환경부·노동부 등 특별사법경찰의 영장 없는 강제 수사나 고압적인 현장조사에 선제 대응합니다. 조사 초기 진술 설계부터 변호사 동석까지 형사처벌 위험을 원천 차단합니다.",
    icon: <UserCheck className="w-8 h-8" />
  },
  {
    id: "licensing",
    title: "4. 인허가",
    tags: ["복합 인허가", "거부·반려 구제", "조건부 인허가", "기피시설 인허가"],
    description: "인허가 거부, 반려, 부당한 보완 요구 등 복잡한 인허가 또는 지역사회 반발이 심한 기피시설 인허가를 행정 실무 노하우와 행정법리적 대응으로 돌파하여 사업 승인을 성사시킵니다.",
    icon: <FileCheck className="w-8 h-8" />
  },
  {
    id: "disposition-defense",
    title: "5. 행정처분 대응",
    tags: ["골든타임", "사전통지 의견제출", "영업 지속", "과징금 감경", "청문 대응"],
    description: "처분서가 나오기 전 사전통지 및 청문 절차는 영업을 지속할 수 있는 가장 중요한 골든타임입니다. 영업을 계속 유지하고 싶은 경우의 전략 수립, 과징금 감경 및 효력 정지 방어를 신속하게 진행합니다.",
    icon: <ShieldAlert className="w-8 h-8" />
  },
  {
    id: "administrative-litigation",
    title: "6. 행정쟁송",
    tags: ["행정심판", "행정소송", "90일 기한", "재량권 일탈·남용", "위법성 조사"],
    description: "이미 행정처분을 받은 경우, 처분이 있음을 안 날부터 90일 이내에 행정심판 및 행정소송을 청구해야 합니다. 처분의 절차적 하자, 사실오인, 비례·평등의 원칙 위배 및 재량권 일탈·남용 여부를 철저히 조사하여 행정사와 변호사가 원스톱으로 직접 수행합니다.",
    icon: <Scale className="w-8 h-8" />
  },
  {
    id: "redevelopment",
    title: "7. 재개발 · 재건축",
    tags: ["정비사업", "조합", "사업시행", "관리처분", "기반시설"],
    description: "도시정비사업 추진 과정의 조합 설립 및 총회 결의 분쟁, 사업시행인가, 관리처분계획 수립 및 인가 취소, 기반시설 기부채납·부담금 분쟁 등 복잡한 재개발·재건축 행정·법률 이슈를 전방위로 해결합니다.",
    icon: <Building2 className="w-8 h-8" />
  },
  {
    id: "industry",
    title: "8. 산업 · 기업행정",
    tags: ["산업단지", "공장등록", "입주계약", "기업인허가"],
    description: "국가 및 일반 산업단지 입주계약 체결 및 해지 분쟁 대응, 공장설립 승인 및 공장등록 취소 구제, 기업 복합 인허가 반려·거부 처분 등 기업 경영을 가로막는 행정적 규제를 신속하게 타파합니다.",
    icon: <Factory className="w-8 h-8" />
  },
  {
    id: "land",
    title: "9. 국공유지 · 토지보상",
    tags: ["국공유지", "토지수용", "보상금 증액", "환매권", "하천 미불용지"],
    description: "국공유지 무상양도 및 대부계약 분쟁, 공익사업 토지수용 보상금 증액 청구, 수용재결·이의재결 및 행정소송, 환매권 행사, 하천 미불용지 보상 등 고도의 행정법적 전문성이 필요한 재산권 분쟁을 명쾌하게 해결합니다.",
    icon: <Map className="w-8 h-8" />
  },
  {
    id: "environment",
    title: "10. 환경",
    tags: ["폐기물", "대기", "수질", "환경 인허가", "행정처분"],
    description: "폐기물 재활용 및 수집·운반업 허가, 대기·수질 배출시설 설치 허가·신고 및 조업정지, 허가취소, 사용중지 명령 등 엄격한 환경 규제와 행정처분에 대해 행정청 내부 기준 분석과 환경법률 대응으로 해결합니다.",
    icon: <Leaf className="w-8 h-8" />
  }
];
