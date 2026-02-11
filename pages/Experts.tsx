
import React, { useState } from 'react';
import { Award, CheckCircle, Quote, UserCheck } from 'lucide-react';
import { IMAGES } from '../constants';

const Experts: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(IMAGES.representative);
  const [retryCount, setRetryCount] = useState(0);

  const teamMembers = [
    { name: "김화영", role: "수석행정사", detail: "주요분야: 중앙부처 인허가 전략" },
    { name: "윤덕석", role: "수석행정사", detail: "주요분야: 교육청 / 학교보건" },
    { name: "정숙화", role: "수석행정사", detail: "주요분야: 토지 분석 및 수용 보상" },
    { name: "최성민", role: "행정사", detail: "주요분야: 사실조사 / 특별사법경찰 대응" },
    { name: "진영학", role: "수석행정사", detail: "주요분야: 학교폭력 / 청소년보호 구제" },
    { name: "김종환", role: "고문변호사", detail: "주요분야: 의료 / 기업 행정 소송" },
    { name: "강소진", role: "행정사", detail: "주요분야: 행정 / 환수처분대응" },
    { name: "김채린", role: "행정사", detail: "주요분야: 행정 / 의료기업소송" },
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
    <div className="pb-24">
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black font-serif text-[#002C5F] mb-6 break-keep">연구소 전문가</h1>
          <p className="text-lg md:text-xl text-gray-600 break-keep font-medium">변호사와 행정사의 유기적 결합, 최강의 원팀(One-Team) 솔루션</p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 md:mt-24 max-w-6xl">
        {/* 1. 이경석 변호사 */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24 bg-white p-8 md:p-14 rounded-[48px] shadow-2xl border border-gray-50 overflow-hidden">
          <div className="lg:w-1/3 w-full shrink-0">
            <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden shadow-inner border-4 border-white">
              <img src={IMAGES.leeKyungSeok} alt="이경석 변호사" className="w-full h-full object-cover object-top" />
            </div>
          </div>
          <div className="lg:w-2/3 w-full">
            <span className="text-[#F5A623] font-black text-xs uppercase tracking-[0.2em] block mb-3">Legal Strategy Center Head</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#002C5F] mb-3 font-serif">이경석 <span className="text-xl font-bold text-gray-400 font-sans">변호사</span></h2>
            <p className="text-[#002C5F] font-bold text-xl mb-8">‘법리·전략 설계’ / 행정형사센터장</p>
            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4 font-bold text-gray-700 text-lg text-left">
                <CheckCircle className="text-[#F5A623] w-6 h-6 shrink-0 mt-0.5" /> 
                <span>소송 전략 중심 사고 및 정교한 법리 구조 설계</span>
              </div>
              <div className="flex items-start gap-4 font-bold text-gray-700 text-lg text-left">
                <CheckCircle className="text-[#F5A623] w-6 h-6 shrink-0 mt-0.5" /> 
                <span>승소 가능성을 치밀하게 계산하는 냉철한 전략가</span>
              </div>
            </div>
            <div className="bg-[#002C5F]/5 p-8 rounded-3xl border-l-8 border-[#002C5F]">
              <p className="text-[#002C5F] italic font-bold text-xl leading-relaxed break-keep text-left">
                "행정은 처음이 중요합니다. 시작이 잘못되면 끝도 꼬입니다. 저는 승소라는 목적지에 도달하기 위한 가장 완벽한 설계도를 그립니다."
              </p>
            </div>
          </div>
        </div>

        {/* 2. 김도현 소장 */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center mb-24 bg-white p-8 md:p-14 rounded-[48px] shadow-2xl border border-gray-50 overflow-hidden text-left">
          <div className="lg:w-1/3 w-full shrink-0">
            <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden shadow-inner border-4 border-white">
              <img src={imgSrc} alt="김도현 소장" className="w-full h-full object-cover object-top" onError={handleImageError} referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="lg:w-2/3 w-full">
            <span className="text-[#F5A623] font-black text-xs uppercase tracking-[0.2em] block mb-3">Administrative Research Director</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#002C5F] mb-3 font-serif">김도현 <span className="text-xl font-bold text-gray-400 font-sans">소장 / 행정사</span></h2>
            <p className="text-[#002C5F] font-bold text-xl mb-8">공직 30년 / 행정 실전 해법 전문가</p>
            
            <div className="space-y-6 text-gray-700 leading-relaxed break-keep mb-10">
              <p className="font-medium text-base md:text-lg">
                30년간 행정공무원으로 현장을 지켜온 김도현 소장은 행정의 모든 과정을 직접 경험하고 체득한 전문가입니다. 
              </p>
              <div className="flex items-start gap-4">
                <UserCheck className="text-[#F5A623] w-6 h-6 shrink-0 mt-1" />
                <div>
                  <p className="font-black text-lg text-[#002C5F] mb-1">경험이 다르면 결과가 다릅니다.</p>
                  <p className="text-sm md:text-base font-medium text-gray-600">
                    공무원 생활 30년은 단순한 경력이 아닙니다. 민원 현장에서 시민들이 겪는 어려움을 누구보다 잘 알고, 복잡한 행정절차의 해법을 가장 정확하게 제시할 수 있는 실전 경험입니다. 법규와 절차를 달달 외우는 것을 넘어, 실제로 어떻게 해결해야 하는지 아는 것 - 바로 그것이 김도현 소장의 강점입니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <UserCheck className="text-[#F5A623] w-6 h-6 shrink-0 mt-1" />
                <div>
                  <p className="font-black text-lg text-[#002C5F] mb-1">시작할 때 끝을 생각합니다.</p>
                  <p className="text-sm md:text-base font-medium text-gray-600">
                    행정문제는 처음 접근 방향이 결과를 좌우합니다. 김도현 소장은 의뢰 시작 단계부터 최종 승인까지의 전체 그림을 그리며, 시행착오 없이 최단 경로로 문제를 해결합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5A623]/5 p-8 rounded-3xl border-l-8 border-[#F5A623] mb-8">
              <p className="text-gray-800 italic font-bold text-lg md:text-xl leading-relaxed break-keep">
                "행정문제로 어려움을 겪는 분들께 실질적인 해결책을 드리는 것, 그것이 제가 가장 잘 할 수 있고, 또 가장 하고 싶은 일입니다."
              </p>
            </div>
            
            <p className="font-bold text-gray-500 text-sm md:text-base px-2">
              까다로운 인허가, 복잡한 민원, 막막한 행정절차 앞에서 길을 잃으셨나요? 30년 실무 경험으로 여러분의 문제를 명쾌하게 풀어드립니다.
            </p>
          </div>
        </div>

        {/* Core Summary */}
        <div className="text-center mb-24 bg-gradient-to-r from-[#002C5F] to-[#00428d] text-white p-14 rounded-[48px] shadow-2xl">
          <h3 className="text-2xl md:text-4xl font-black font-serif mb-10">두 전문성의 결합 = “법(논리) + 행정(현장)”</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg md:text-xl font-bold">
            <div className="bg-white/10 p-6 rounded-2xl">✔ 사장님 입장에서 가장 덜 힘들고</div>
            <div className="bg-white/10 p-6 rounded-2xl">✔ 가장 가성비 있는 비용 설계</div>
            <div className="bg-white/10 p-6 rounded-2xl">✔ 가장 빠르게 해결되는 루트 제시</div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-4xl font-black font-serif mb-12 text-[#002C5F] text-center">자격사간 협업 시스템</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-50 p-8 rounded-[32px] hover:border-[#F5A623] hover:shadow-2xl transition-all group">
                <h4 className="font-black text-2xl mb-1 text-[#002C5F] group-hover:text-[#F5A623] transition-colors">{member.name}</h4>
                <p className="text-[#F5A623] text-xs font-black mb-6 uppercase tracking-widest">{member.role}</p>
                <div className="text-gray-600 text-sm md:text-base leading-snug break-keep font-medium">
                  {member.detail.includes(':') ? (
                    <>
                      <span className="block text-[#002C5F] text-xs font-black mb-1 opacity-60">주요분야</span>
                      <span className="block mt-0.5">{member.detail.split(':')[1].trim()}</span>
                    </>
                  ) : member.detail}
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
