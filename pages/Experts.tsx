
import React, { useState } from 'react';
import { CheckCircle, UserCheck } from 'lucide-react';
import { IMAGES } from '../constants';

const Experts: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(IMAGES.representative);
  const [retryCount, setRetryCount] = useState(0);

  const teamMembers = [
    { name: "김화영", role: "수석행정사", detail: "중앙부처 인허가 전략" },
    { name: "윤덕섭", role: "수석행정사", detail: "교육청 / 보건위생" },
    { name: "정숙화", role: "수석행정사", detail: "토지 분석 / 수용 보상" },
    { name: "최성민", role: "행정사", detail: "사실조사 / 특사경 대응" },
    { name: "진영학", role: "수석행정사", detail: "학교폭력 / 청소년 구제" },
    { name: "김종환", role: "고문변호사", detail: "행정 / 기업, 부동산 소송" },
    { name: "강소진", role: "고문변호사", detail: "행정 / 기업, 행정구제" },
    { name: "김채린", role: "자문변호사", detail: "행정 / 기업, 행정구제" },
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
      <section className="bg-gray-100 py-10 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-2xl md:text-5xl font-black text-[#002C5F] mb-3 md:mb-4 break-keep">연구소 전문가</h1>
          <p className="text-xs md:text-xl text-gray-600 break-keep font-medium leading-relaxed">
            변호사와 행정사의 유기적 결합,<br className="md:hidden" /> 최강의 원팀(One-Team) 솔루션
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 mt-10 md:mt-24 max-w-6xl">
        {/* 1. 이경석 변호사 */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-12 items-center mb-12 md:mb-24 bg-white p-6 md:p-14 rounded-[24px] md:rounded-[48px] shadow-xl border border-gray-50 overflow-hidden">
          <div className="w-full lg:w-1/3 shrink-0 px-4 md:px-0">
            <div className="aspect-[4/5] bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-inner border-2 md:border-4 border-white">
              <img src={IMAGES.leeKyungSeok} alt="이경석 변호사" className="w-full h-full object-cover object-top" />
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <span className="text-[#F5A623] font-black text-[9px] md:text-xs uppercase tracking-[0.2em] block mb-2 px-1">Legal Strategy Center Head</span>
            <h2 className="text-xl md:text-5xl font-black text-[#002C5F] mb-2 tracking-tight">이경석 <span className="text-sm md:text-xl font-bold text-gray-400">변호사</span></h2>
            <p className="text-[#002C5F] font-bold text-sm md:text-xl mb-6 md:mb-8">‘법리·전략 설계’ / 행정형사센터장</p>
            <div className="space-y-3 md:space-y-5 mb-8 md:mb-10">
              <div className="flex items-start gap-2.5 md:gap-3 font-bold text-gray-700 text-xs md:text-lg">
                <CheckCircle className="text-[#F5A623] w-4 h-4 md:w-5 md:h-5 shrink-0 mt-0.5" /> 
                <span className="break-keep">소송 전략 중심 사고 및 정교한 법리 구조 설계</span>
              </div>
              <div className="flex items-start gap-2.5 md:gap-3 font-bold text-gray-700 text-xs md:text-lg">
                <CheckCircle className="text-[#F5A623] w-4 h-4 md:w-5 md:h-5 shrink-0 mt-0.5" /> 
                <span className="break-keep">승소 가능성을 치밀하게 계산하는 냉철한 전략가</span>
              </div>
            </div>
            <div className="bg-[#002C5F]/5 p-5 md:p-8 rounded-xl md:rounded-3xl border-l-4 md:border-l-8 border-[#002C5F]">
              <p className="text-[#002C5F] italic font-bold text-xs md:text-xl leading-relaxed break-keep">
                "행정은 처음이 중요합니다. 시작이 잘못되면 끝도 꼬입니다. 저는 승소라는 목적지에 도달하기 위한 가장 완벽한 설계도를 그립니다."
              </p>
            </div>
          </div>
        </div>

        {/* 2. 김도현 소장 */}
        <div className="flex flex-col lg:flex-row-reverse gap-6 md:gap-12 items-center mb-12 md:mb-24 bg-white p-6 md:p-14 rounded-[24px] md:rounded-[48px] shadow-xl border border-gray-100 overflow-hidden">
          <div className="w-full lg:w-1/3 shrink-0 px-4 md:px-0">
            <div className="aspect-[4/5] bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-inner border-2 md:border-4 border-white">
              <img src={imgSrc} alt="김도현 소장" className="w-full h-full object-cover object-top" onError={handleImageError} referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <span className="text-[#F5A623] font-black text-[9px] md:text-xs uppercase tracking-[0.2em] block mb-2 px-1">Administrative Research Director</span>
            <h2 className="text-xl md:text-5xl font-black text-[#002C5F] mb-2 tracking-tight">김도현 <span className="text-sm md:text-xl font-bold text-gray-400">소장 / 행정사</span></h2>
            <p className="text-[#002C5F] font-bold text-sm md:text-xl mb-6 md:mb-8">공직 30년 / 행정 실전 해법 전문가</p>
            
            <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed break-keep mb-8 md:mb-10 text-xs md:text-lg">
              <p className="font-medium">
                30년간 행정공무원으로 현장을 지켜온 김도현 소장은 행정의 모든 과정을 직접 경험하고 체득한 전문가입니다. 
              </p>
              <div className="flex items-start gap-2 md:gap-3">
                <UserCheck className="text-[#F5A623] w-5 h-5 md:w-6 md:h-6 shrink-0 mt-1" />
                <div>
                  <p className="font-black text-[#002C5F] mb-1">경험이 다르면 결과가 다릅니다.</p>
                  <p className="text-[10px] md:text-base font-medium text-gray-600 leading-normal">
                    공무원 생활 30년은 단순한 경력이 아닙니다. 민원 현장에서 사장님들이 겪는 어려움을 누구보다 잘 알고, 해결해 본 실전 지혜입니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5A623]/5 p-5 md:p-8 rounded-xl md:rounded-3xl border-l-4 md:border-l-8 border-[#F5A623]">
              <p className="text-gray-800 italic font-bold text-xs md:text-xl leading-relaxed break-keep">
                "사장님의 문제를 내 일처럼 명쾌하게 풀어드리는 것, 그것이 제 사명입니다."
              </p>
            </div>
          </div>
        </div>

        {/* Core Summary */}
        <div className="text-center mb-16 md:mb-24 bg-gradient-to-r from-[#002C5F] to-[#00428d] text-white p-6 md:p-14 rounded-[24px] md:rounded-[48px] shadow-2xl mx-1">
          <h3 className="text-lg md:text-4xl font-black mb-6 md:mb-8 break-keep leading-tight tracking-tight px-2">두 전문성의 결합 = “법(논리) + 행정(현장)”</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 md:gap-8 text-xs md:text-xl font-bold px-2">
            <div className="bg-white/10 p-4 md:p-6 rounded-xl">✔ 사장님 입장에서 덜 힘들고</div>
            <div className="bg-white/10 p-4 md:p-6 rounded-xl">✔ 가성비 있는 비용 설계</div>
            <div className="bg-white/10 p-4 md:p-6 rounded-xl">✔ 가장 빠르게 해결되는 루트</div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-4xl font-black mb-8 md:mb-12 text-[#002C5F] text-center break-keep px-4">행정114 전문가 그룹</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 px-2 md:px-0">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-5 md:p-8 rounded-[20px] md:rounded-[32px] active:border-[#F5A623] transition-all flex flex-col items-center sm:items-start text-center sm:text-left">
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