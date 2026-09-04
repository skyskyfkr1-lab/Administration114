
import React, { useState } from 'react';
import { CheckCircle, Award, Scale, FileSearch, ShieldAlert, ArrowRight } from 'lucide-react';
import { IMAGES } from '../constants';

const Experts: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(IMAGES.representative);
  const [retryCount, setRetryCount] = useState(0);
  const [lawyerOhImg, setLawyerOhImg] = useState(IMAGES.lawyerOh);
  const [lawyerKimImg, setLawyerKimImg] = useState(IMAGES.lawyerKim);

  const teamMembers = [
    { name: "김화영", role: "수석행정사", detail: "중앙부처 인허가 전략" },
    { name: "윤덕섭", role: "수석행정사", detail: "교육환경(일조권)/보건위생" },
    { name: "정숙화", role: "수석행정사", detail: "토지 분석 / 수용 보상" },
    { name: "최성민", role: "행정사", detail: "사실조사 / 특사경 대응" },
    { name: "진영학", role: "수석행정사", detail: "학교폭력 / 청소년 구제" },
    { name: "김종환", role: "고문변호사", detail: "행정 / 기업, 부동산 소송" },
    { name: "강소진", role: "고문변호사", detail: "행정 / 기업, 행정구제" },
    { name: "이현수", role: "전문위원", detail: "건축·도시계획 인허가" },
  ];

  const handleImageError = () => {
    if (retryCount === 0) {
      setImgSrc((IMAGES as any).representativeBackup);
      setRetryCount(1);
    } else if (retryCount === 1) {
      setImgSrc("https://images.unsplash.com/photo-1557425955-df376b5903c8?q=80&w=800&auto=format&fit=crop");
      setRetryCount(2);
    }
  };

  return (
    <div className="pb-16 md:pb-24">
      {/* Header Banner */}
      <section className="bg-[#002C5F] py-12 md:py-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <span className="text-[#F5A623] text-xs md:text-sm font-bold tracking-widest uppercase mb-2 block">
            AXIS ADMINISTRATIVE RESEARCH INSTITUTE
          </span>
          <h1 className="text-2xl md:text-5xl font-black mb-3 md:mb-4 break-keep">연구소 전문가</h1>
          <p className="text-xs md:text-xl text-gray-300 break-keep font-medium leading-relaxed max-w-2xl mx-auto">
            행정쟁송 변호사 + 청문 경험 변호사 + 30년 공직경험 전문위원의 결합,<br className="hidden md:inline" />
            법무법인 액시스 원팀(One-Team) 통합 솔루션
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 mt-10 md:mt-24 max-w-6xl">

        {/* 1. 오승준 대표변호사 */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-12 items-center mb-12 md:mb-20 bg-white p-6 md:p-14 rounded-[24px] md:rounded-[48px] shadow-xl border border-gray-100 overflow-hidden">
          <div className="w-full lg:w-1/3 shrink-0 px-4 md:px-0">
            <div className="aspect-[4/5] bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-inner border-2 md:border-4 border-white flex items-center justify-center">
              <img 
                src={lawyerOhImg} 
                alt="오승준 대표변호사" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                onError={() => setLawyerOhImg((IMAGES as any).lawyerOhBackup)}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <span className="text-[#F5A623] font-black text-[9px] md:text-xs uppercase tracking-[0.2em] block mb-2 px-1">
              Lead Counsel / Managing Partner
            </span>
            <h2 className="text-2xl md:text-5xl font-black text-[#002C5F] mb-2 tracking-tight">
              오승준 <span className="text-base md:text-2xl font-bold text-gray-400">대표변호사</span>
            </h2>
            <p className="text-[#002C5F] font-bold text-sm md:text-lg mb-6 leading-relaxed break-keep">
              "깊이 있는 시선과 날카로운 판단으로 명확한 법적 결론을 제공합니다."
            </p>

            {/* 핵심 역할 (운영계획 기준) */}
            <div className="mb-6 md:mb-8 bg-[#002C5F]/5 p-4 md:p-6 rounded-2xl border-l-4 border-[#002C5F]">
              <h4 className="text-xs md:text-sm font-black text-[#002C5F] mb-3 uppercase tracking-wider flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-[#002C5F]" /> 연구소 핵심 총괄 역할
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-base font-bold text-gray-800">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0" />
                  <span>행정쟁송 총괄</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0" />
                  <span>사건전략 수립</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0" />
                  <span>중요 법률판단</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0" />
                  <span>행정소송 · 형사사건 총괄</span>
                </div>
              </div>
            </div>

            {/* 주요 경력 */}
            <div>
              <h4 className="text-xs md:text-sm font-black text-gray-400 mb-2.5 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#F5A623]" /> 주요 경력
              </h4>
              <ul className="space-y-1.5 text-xs md:text-base text-gray-600 font-medium break-keep">
                <li className="flex items-start gap-2">
                  <span className="text-[#002C5F] font-black">•</span>
                  <span>사법연수원 36기 (제46회 사법시험 합격)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#002C5F] font-black">•</span>
                  <span>이화여자대학교 법학전문대학원 겸임교수</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#002C5F] font-black">•</span>
                  <span>보건복지부 규제법무심사위원</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#002C5F] font-black">•</span>
                  <span>서울중앙지방법원 민사조정위원 (의료)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#002C5F] font-black">•</span>
                  <span>대한치과의사협회 의료광고심의위원회 위원</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#002C5F] font-black">•</span>
                  <span>한국실업축구연맹 이사</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#002C5F] font-black">•</span>
                  <span>(前) 법무법인 현 / 법무법인 엘케이파트너스</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2. 김채린 변호사 */}
        <div className="flex flex-col lg:flex-row-reverse gap-6 md:gap-12 items-center mb-12 md:mb-20 bg-white p-6 md:p-14 rounded-[24px] md:rounded-[48px] shadow-xl border border-gray-100 overflow-hidden">
          <div className="w-full lg:w-1/3 shrink-0 px-4 md:px-0">
            <div className="aspect-[4/5] bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-inner border-2 md:border-4 border-white flex items-center justify-center">
              <img 
                src={lawyerKimImg} 
                alt="김채린 변호사" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                onError={() => setLawyerKimImg((IMAGES as any).lawyerKimBackup)}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <span className="text-[#F5A623] font-black text-[9px] md:text-xs uppercase tracking-[0.2em] block mb-2 px-1">
              Administrative Hearing & Procedure Counsel
            </span>
            <h2 className="text-2xl md:text-5xl font-black text-[#002C5F] mb-2 tracking-tight">
              김채린 <span className="text-base md:text-2xl font-bold text-gray-400">변호사</span>
            </h2>
            <p className="text-[#002C5F] font-bold text-sm md:text-lg mb-4 leading-relaxed break-keep">
              "청문을 주재했던 경험으로, 행정청의 처분 논리 안쪽을 정밀하게 읽어냅니다."
            </p>

            <div className="bg-gray-50 p-4 md:p-5 rounded-xl md:rounded-2xl border border-gray-100 mb-6 text-xs md:text-sm text-gray-600 leading-relaxed font-medium break-keep">
              "처분이 내려지는 순간, 이미 절차는 시작되어 있습니다. 청문주재 경험을 바탕으로 행정청의 처분 논리와 절차적 허점을 누구보다 정밀하게 읽어냅니다. 의견서 한 장이 결과를 바꾼다는 것을 알기에, 처음 단계부터 끝을 생각하며 씁니다."
            </div>

            {/* 핵심 역할 (운영계획 기준) */}
            <div className="mb-6 md:mb-8 bg-[#002C5F]/5 p-4 md:p-6 rounded-2xl border-l-4 border-[#002C5F]">
              <h4 className="text-xs md:text-sm font-black text-[#002C5F] mb-3 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-[#002C5F]" /> 연구소 핵심 전담 역할
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-base font-bold text-gray-800">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0" />
                  <span>행정절차 · 청문 대응</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0" />
                  <span>행정처분 적법성 검토</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0" />
                  <span>행정심판 · 행정소송</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0" />
                  <span>청문 · 절차적 권리보호</span>
                </div>
              </div>
            </div>

            {/* 주요 경력 */}
            <div>
              <h4 className="text-xs md:text-sm font-black text-gray-400 mb-2.5 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#F5A623]" /> 주요 경력
              </h4>
              <ul className="space-y-1.5 text-xs md:text-base text-gray-600 font-medium break-keep">
                <li className="flex items-start gap-2">
                  <span className="text-[#002C5F] font-black">•</span>
                  <span>(現) 서울특별시 강남구 청문주재 변호사</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#002C5F] font-black">•</span>
                  <span>(現) 서울특별시 강남구 식품진흥기금운용심의회 위원</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#002C5F] font-black">•</span>
                  <span>(現) 서울특별시 송파구 시설관리공단 자문 변호사</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#002C5F] font-black">•</span>
                  <span>(現) 서울특별시 송파구 시설관리공단 인권경영위원회 위원</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#002C5F] font-black">•</span>
                  <span>(現) 서울특별시 송파구 시설관리공단 명예 주민감사관</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#002C5F] font-black">•</span>
                  <span>(現) 대법원 국선변호인</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#002C5F] font-black">•</span>
                  <span>(前) 법무법인 도원</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. 김도현 전문위원 (행정사) */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-12 items-center mb-12 md:mb-20 bg-white p-6 md:p-14 rounded-[24px] md:rounded-[48px] shadow-xl border border-gray-100 overflow-hidden">
          <div className="w-full lg:w-1/3 shrink-0 px-4 md:px-0">
            <div className="aspect-[4/5] bg-[#f0f3f6] rounded-2xl md:rounded-3xl overflow-hidden shadow-inner border-2 md:border-4 border-white flex items-center justify-center p-4">
              <img 
                src={imgSrc} 
                alt="김도현 전문위원" 
                className="w-full h-full object-contain scale-[0.82] object-center hover:scale-[0.87] transition-transform duration-300" 
                onError={handleImageError} 
                referrerPolicy="no-referrer" 
              />
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <span className="text-[#F5A623] font-black text-[9px] md:text-xs uppercase tracking-[0.2em] block mb-2 px-1">
              Administrative Practice Specialist
            </span>
            <h2 className="text-2xl md:text-5xl font-black text-[#002C5F] mb-2 tracking-tight">
              김도현 <span className="text-base md:text-2xl font-bold text-gray-400">전문위원 / 행정사</span>
            </h2>
            <p className="text-[#002C5F] font-bold text-sm md:text-lg mb-4 leading-relaxed break-keep">
              "30년 공직 현장에서 쌓은 눈으로, 사건의 사실과 처분의 허점을 가장 먼저 찾아냅니다."
            </p>

            <div className="bg-gray-50 p-4 md:p-5 rounded-xl md:rounded-2xl border border-gray-100 mb-6 text-xs md:text-sm text-gray-600 leading-relaxed font-medium break-keep">
              "30년간 행정기관 안에서 처분이 어떻게 만들어지는지 지켜봤습니다. 어떤 서류가 결정을 바꾸는지, 어떤 절차가 취약한지, 행정청이 어디서 실수하는지를 압니다. 사건은 법정이 아닌 사실에서 시작됩니다. 그 사실을 가장 먼저 파고드는 사람이 여기 있습니다."
            </div>

            {/* 핵심 역할 (운영계획 기준) */}
            <div className="mb-6 md:mb-8 bg-[#F5A623]/5 p-4 md:p-6 rounded-2xl border-l-4 border-[#F5A623]">
              <h4 className="text-xs md:text-sm font-black text-[#002C5F] mb-3 uppercase tracking-wider flex items-center gap-1.5">
                <FileSearch className="w-4 h-4 text-[#F5A623]" /> 연구소 핵심 실무 역할
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-base font-bold text-gray-800">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0" />
                  <span>30년 공직경험 기반 행정실무 분석</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0" />
                  <span>사실관계 조사</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0" />
                  <span>행정기관 의사결정 구조 분석</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0" />
                  <span>행정처분 경위 분석</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0" />
                  <span>증거 · 자료구조화</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0" />
                  <span>행정심판 실무 지원</span>
                </div>
              </div>
            </div>

            {/* 주요 경력 */}
            <div>
              <h4 className="text-xs md:text-sm font-black text-gray-400 mb-2.5 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#F5A623]" /> 주요 경력
              </h4>
              <ul className="space-y-1.5 text-xs md:text-base text-gray-600 font-medium break-keep">
                <li className="flex items-start gap-2">
                  <span className="text-[#002C5F] font-black">•</span>
                  <span>(前) 서울특별시 구청 과장 (법무, 감사, 복지, 위생, 폐기물, 학원, 기획 업무)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#002C5F] font-black">•</span>
                  <span>(前) 법무법인 현답 행정분야 전문위원</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#002C5F] font-black">•</span>
                  <span>(前) 행정심판과 소송 1,000여건 지휘 및 직접수행</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#002C5F] font-black">•</span>
                  <span>(前) 행정심판, 행정소송, 식품위생, 지방계약, 징계편람 작성 및 교육</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#002C5F] font-black">•</span>
                  <span>(現) 국가공인행정사</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3-Layer Integrated System Summary Banner */}
        <div className="mb-16 md:mb-24 bg-gradient-to-br from-[#002C5F] via-[#051c36] to-[#001b3a] text-white p-6 md:p-14 rounded-[24px] md:rounded-[48px] shadow-2xl mx-1">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="text-[#F5A623] text-xs md:text-sm font-black tracking-widest uppercase mb-2 block">
              ONE CASE · ONE TEAM · ONE STRATEGY
            </span>
            <h3 className="text-xl md:text-4xl font-black mb-4 break-keep leading-tight tracking-tight">
              법무법인 액시스 행정문제연구소 3-Layer 대응 시스템
            </h3>
            <p className="text-gray-300 text-xs md:text-base leading-relaxed break-keep">
              행정청 내부를 꿰뚫는 30년 공직 실무와 청문 경험 변호사의 적법성 검토, 행정쟁송 변호사의 소송 전략이 하나의 팀으로 유기적으로 작동합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Layer 1: 오승준 대표변호사 */}
            <div className="bg-white/10 p-5 md:p-7 rounded-2xl border border-white/10 backdrop-blur-sm">
              <span className="text-[#F5A623] font-mono font-bold text-xs uppercase block mb-1">Layer 1. LITIGATION & STRATEGY</span>
              <h4 className="text-base md:text-xl font-black text-white mb-2">행정쟁송 총괄 · 중요 법률판단</h4>
              <p className="text-xs md:text-sm text-gray-300 font-bold mb-3">오승준 대표변호사</p>
              <ul className="text-xs md:text-sm text-gray-300 space-y-1.5">
                <li>• 행정쟁송 전체 소송전략 설계 및 총괄</li>
                <li>• 행정소송 변론 및 효력정지(집행정지) 전담</li>
                <li>• 특별사법경찰·형사사건 전환 연계 방어</li>
              </ul>
            </div>

            {/* Layer 2: 김채린 변호사 */}
            <div className="bg-white/10 p-5 md:p-7 rounded-2xl border border-white/10 backdrop-blur-sm">
              <span className="text-[#F5A623] font-mono font-bold text-xs uppercase block mb-1">Layer 2. PROCEDURE & HEARING</span>
              <h4 className="text-base md:text-xl font-black text-white mb-2">법률검토 · 행정절차 · 청문대응</h4>
              <p className="text-xs md:text-sm text-gray-300 font-bold mb-3">김채린 변호사</p>
              <ul className="text-xs md:text-sm text-gray-300 space-y-1.5">
                <li>• 행정처분 적법성 및 재량권 일탈·남용 검토</li>
                <li>• 강남구 청문주재 경험 기반 절차적 권리보호</li>
                <li>• 행정심판 청구서 및 정밀 의견제출서 작성</li>
              </ul>
            </div>

            {/* Layer 3: 김도현 전문위원 */}
            <div className="bg-white/10 p-5 md:p-7 rounded-2xl border border-white/10 backdrop-blur-sm">
              <span className="text-[#F5A623] font-mono font-bold text-xs uppercase block mb-1">Layer 3. FACT & PRACTICE</span>
              <h4 className="text-base md:text-xl font-black text-white mb-2">사실조사 · 증거구조화 · 행정실무</h4>
              <p className="text-xs md:text-sm text-gray-300 font-bold mb-3">김도현 전문위원 / 행정사</p>
              <ul className="text-xs md:text-sm text-gray-300 space-y-1.5">
                <li>• 30년 공직경험 기반 행정기관 업무흐름 분석</li>
                <li>• 사실관계 현장조사 및 처분경위 정밀 분석</li>
                <li>• 행정심판 실무 지원 및 핵심 증거자료 체계화</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-4xl font-black mb-8 md:mb-12 text-[#002C5F] text-center break-keep px-4">
            액시스 행정문제연구소 실무 지원 그룹
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 px-2 md:px-0">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-5 md:p-8 rounded-[20px] md:rounded-[32px] active:border-[#F5A623] transition-all flex flex-col items-center sm:items-start text-center sm:text-left shadow-sm">
                <h4 className="font-black text-base md:text-xl mb-0.5 md:mb-1 text-[#002C5F]">{member.name}</h4>
                <p className="text-[#F5A623] text-[8px] md:text-[10px] font-black mb-3 md:mb-4 uppercase tracking-widest">{member.role}</p>
                <div className="text-gray-600 text-[10px] md:text-base leading-snug break-keep font-medium mt-auto">
                  <span className="block text-[#002C5F] text-[8px] md:text-[10px] font-black mb-0.5 md:mb-1 opacity-60 uppercase">Specialty</span>
                  <span className="block leading-tight">{member.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experts;
