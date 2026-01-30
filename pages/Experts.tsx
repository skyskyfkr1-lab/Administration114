
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

      <div className="container mx-auto px-4 mt-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Representative Section - Size Reduced */}
          <div className="lg:w-1/3 w-full max-w-sm mx-auto lg:max-w-none">
            <div className="lg:sticky lg:top-32">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-t-8 border-[#F5A623]">
                {/* Image size adjusted with max-height */}
                <div className="aspect-[4/5] overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img 
                    src={IMAGES.representative} 
                    alt="김도현 소장" 
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="mb-4">
                    <span className="text-[#002C5F] font-bold text-xs uppercase tracking-widest block mb-1">Research Director</span>
                    <h3 className="text-2xl md:text-3xl font-black mb-1">김도현</h3>
                    <p className="text-[#002C5F] font-bold text-base">연구소장 / 행정사</p>
                  </div>
                  
                  <div className="relative mt-6">
                    <Quote className="absolute -top-3 -left-3 w-6 h-6 text-gray-100 -z-10" />
                    <p className="text-gray-600 leading-relaxed italic text-sm md:text-base break-keep">
                      "행정청의 내부 프로세스를 아는 자만이<br />
                      행정청의 논리를 무너뜨릴 수 있습니다."
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-xs text-gray-500 break-keep leading-relaxed font-bold text-[#002C5F]">
                      인사이더 관점(Insider Perspective)으로 행정청의 4대 핵심 흠결을 정밀 타격합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <h2 className="text-2xl md:text-3xl font-black font-serif mb-8 border-b-2 border-[#F5A623] pb-4 inline-block break-keep">핵심 역량 및 경력</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#002C5F]/10 p-2 rounded-lg text-[#002C5F] shrink-0">
                    <Shield />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 break-keep">공직 30년 내부자적 관점</h4>
                    <p className="text-gray-600 text-sm break-keep">전 서울시 구청 과장 역임 (행정 실무 마스터)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#002C5F]/10 p-2 rounded-lg text-[#002C5F] shrink-0">
                    <Search />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 break-keep">사실관계 전환 전문가</h4>
                    <p className="text-gray-600 text-sm break-keep">Raw Data를 법적 증거로 전환하는 고도의 분석 능력</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#002C5F]/10 p-2 rounded-lg text-[#002C5F] shrink-0">
                    <Award />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 break-keep">행정 구제 리더</h4>
                    <p className="text-gray-600 text-sm break-keep">중앙행심위 협력 및 수많은 감경/취소 성공 사례 보유</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-black font-serif mb-8 border-b-2 border-[#F5A623] pb-4 inline-block break-keep">자격사간 협업 시스템</h2>
            <p className="text-gray-600 mb-10 leading-relaxed break-keep text-sm md:text-base font-medium">
              행정 114는 김도현 소장의 사실 조사 역량과 이경석 변호사의 법리 구축 역량이 결합된 '투 트랙' 시스템으로 운영됩니다. 각 분야의 전문가들이 협업하여 단 한 줄의 서류도 전략적 무기로 만들어냅니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="bg-white border p-6 rounded-xl hover:shadow-md transition-all">
                  <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                  <p className="text-[#002C5F] text-xs font-bold mb-3 uppercase tracking-wider">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-tight break-keep font-medium">{member.detail}</p>
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
