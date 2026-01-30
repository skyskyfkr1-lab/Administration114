
import React from 'react';
import { Award, CheckCircle, Star, Quote, Search, Shield } from 'lucide-react';
import { IMAGES } from '../constants';

const Experts: React.FC = () => {
  const teamMembers = [
    { name: "이경석", role: "변호사", detail: "사건의 본질을 관통하는 승소 논리 구축" },
    { name: "김화영", role: "수석행정사", detail: "주요분야: 중앙부처 인허가 전략" },
    { name: "진영학", role: "수석행정사", detail: "주요분야: 교육청/학폭 구제" },
    { name: "정숙화", role: "수석행정사", detail: "주요분야: 토지분석 및 수용 보상" },
    { name: "최성민", role: "행정사", detail: "주요분야: 사실조사/특별사법경찰 대응" },
    { name: "김종환", role: "고문변호사", detail: "주요분야: 의료/기업 행정 소송" },
    { name: "강소진", role: "고문변호사", detail: "주요분야: 조세/환수처분 대응" },
  ];

  return (
    <div className="pb-24">
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black font-serif text-[#002C5F] mb-6 break-keep">연구소 전문가</h1>
          <p className="text-lg md:text-xl text-gray-600 break-keep font-medium">각 분야 베테랑들이 '원팀(One-Team)'으로 당신의 사건을 집도합니다.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 md:mt-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start max-w-7xl mx-auto">
          {/* Representative Section - Fixed for max compatibility */}
          <div className="lg:w-[320px] w-full max-w-[320px] mx-auto shrink-0">
            <div className="lg:sticky lg:top-32">
              <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 transition-all">
                {/* Standard img tag structure for standard display */}
                <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden">
                  <img 
                    src={IMAGES.representative} 
                    alt="김도현 소장" 
                    className="w-full h-full object-cover object-top block"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-[#F5A623] font-black text-[11px] uppercase tracking-[0.2em] block mb-2">Research Director</span>
                    <h3 className="text-2xl md:text-3xl font-black mb-1 text-[#002C5F]">김도현</h3>
                    <p className="text-[#666666] font-bold text-sm md:text-base">연구소장 / 행정사</p>
                  </div>
                  
                  <div className="relative mt-6 pt-6 border-t border-gray-100">
                    <Quote className="absolute -top-3 left-0 w-6 h-6 text-gray-100 -z-10" />
                    <p className="text-gray-700 leading-relaxed italic text-sm md:text-lg break-keep font-medium">
                      "행정청의 내부 프로세스를 아는 자만이 행정청의 논리를 무너뜨릴 수 있습니다."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-grow w-full">
            <h2 className="text-2xl md:text-3xl font-black font-serif mb-8 border-b-4 border-[#F5A623] pb-4 inline-block break-keep">핵심 역량 및 경력</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all hover:border-[#002C5F]/20">
                  <div className="bg-[#002C5F] p-2 rounded-lg text-white shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-black mb-1 break-keep text-lg">공직 30년 내부자적 관점</h4>
                    <p className="text-gray-600 text-sm md:text-base break-keep font-medium">전 서울시 구청 과장 역임 (행정 실무 마스터)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all hover:border-[#002C5F]/20">
                  <div className="bg-[#002C5F] p-2 rounded-lg text-white shrink-0">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-black mb-1 break-keep text-lg">사실관계 전환 전문가</h4>
                    <p className="text-gray-600 text-sm md:text-base break-keep font-medium">Raw Data를 법적 증거로 전환하는 고도의 분석 능력</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all hover:border-[#002C5F]/20">
                  <div className="bg-[#002C5F] p-2 rounded-lg text-white shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-black mb-1 break-keep text-lg">행정 구제 리더</h4>
                    <p className="text-gray-600 text-sm md:text-base break-keep font-medium">중앙행심위 협력 및 수많은 감경/취소 성공 사례 보유</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-black font-serif mb-8 border-b-4 border-[#F5A623] pb-4 inline-block break-keep">자격사간 협업 시스템</h2>
            <p className="text-gray-600 mb-10 leading-relaxed break-keep text-base md:text-xl font-medium">
              행정 114는 김도현 소장의 사실 조사 역량과 이경석 변호사의 법리 구축 역량이 결합된 '투 트랙' 시스템으로 운영됩니다. 각 분야의 전문가들이 협업하여 단 한 줄의 서류도 전략적 무기로 만들어냅니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-50 p-6 rounded-2xl hover:border-[#F5A623] hover:shadow-xl transition-all group">
                  <h4 className="font-black text-xl mb-1 text-[#002C5F] group-hover:text-[#F5A623] transition-colors">{member.name}</h4>
                  <p className="text-[#999999] text-xs font-black mb-4 uppercase tracking-[0.1em]">{member.role}</p>
                  <p className="text-gray-600 text-sm md:text-base leading-tight break-keep font-medium">{member.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
