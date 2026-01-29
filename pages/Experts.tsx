
import React from 'react';
import { Award, CheckCircle, Star, Quote } from 'lucide-react';
import { IMAGES } from '../constants';

const Experts: React.FC = () => {
  const teamMembers = [
    { name: "김화영", role: "수석행정사", detail: "주요분야: 중앙부처" },
    { name: "진영학", role: "수석행정사", detail: "주요분야: 교육청" },
    { name: "정숙화", role: "수석행정사", detail: "주요분야: 토지분석 및 조상땅 찾기" },
    { name: "최성민", role: "행정사", detail: "주요분야: 사실조사/권리구제" },
    { name: "김종환", role: "고문변호사", detail: "주요분야: 행정, 의료, 기업" },
    { name: "강소진", role: "고문변호사", detail: "주요분야: 행정, 의료, 기업" },
    { name: "김채린", role: "고문변호사", detail: "주요분야: 행정, 민사, 형사, 기업일반" },
  ];

  return (
    <div className="pb-24">
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-[#002C5F] mb-6 break-keep">전문가 소개</h1>
          <p className="text-lg md:text-xl text-gray-600 break-keep">행정 현장을 누구보다 잘 아는 베테랑들이 함께합니다.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Representative Section */}
          <div className="lg:w-1/3 w-full">
            <div className="lg:sticky lg:top-32">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-8 border-[#F5A623]">
                <div className="mb-6">
                  <span className="text-[#002C5F] font-bold text-sm uppercase tracking-widest block mb-2">Director</span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">김도현</h3>
                  <p className="text-[#002C5F] font-bold text-lg">소장 / 행정사</p>
                </div>
                
                <div className="relative mt-8">
                  <Quote className="absolute -top-4 -left-4 w-8 h-8 text-gray-100 -z-10" />
                  <p className="text-gray-600 leading-relaxed italic text-base md:text-lg break-keep">
                    "공무원의 시각으로 사건을 보고,<br />
                    의뢰인의 마음으로 해결책을 씁니다."
                  </p>
                </div>
                
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <p className="text-sm text-gray-400 break-keep leading-relaxed">
                    행정 114는 실질적인 권리 구제를 위해 모든 사건을 김도현 소장이 직접 검토합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-8 border-b-2 border-[#F5A623] pb-4 inline-block break-keep">주요 약력 및 경력</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#002C5F]/10 p-2 rounded-lg text-[#002C5F] shrink-0">
                    <Award />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 break-keep">공직 경력 30년</h4>
                    <p className="text-gray-600 text-sm break-keep">전 서울시 구청 과장</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#002C5F]/10 p-2 rounded-lg text-[#002C5F] shrink-0">
                    <Award />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 break-keep">행정 전문가</h4>
                    <p className="text-gray-600 text-sm break-keep">중앙행정심판위원회 협력 행정사</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#002C5F]/10 p-2 rounded-lg text-[#002C5F] shrink-0">
                    <Award />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 break-keep">저서 및 활동</h4>
                    <p className="text-gray-600 text-sm break-keep">「소상공인 행정처분 대응 가이드」 책임 집필</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-8 border-b-2 border-[#F5A623] pb-4 inline-block break-keep">행정의 달인 팀</h2>
            <p className="text-gray-600 mb-10 leading-relaxed break-keep text-sm md:text-base">
              행정 114는 김도현 소장을 필두로 각 분야의 수석 행정사와 고문변호사 자문단이 협업합니다. 현장 실무를 꿰뚫는 행정 전문가들이 당신의 사건을 다각도로 분석하여 최상의 솔루션을 도출합니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="bg-white border p-6 rounded-xl hover:shadow-md transition-all">
                  <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                  <p className="text-[#002C5F] text-xs font-bold mb-3 uppercase tracking-wider">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-tight break-keep">{member.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 bg-[#002C5F] p-6 md:p-10 rounded-2xl text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-8 flex items-center gap-2 break-keep">
                <Star className="text-[#F5A623] fill-[#F5A623] w-5 h-5 md:w-6 md:h-6 shrink-0" /> 
                <span>고객이 증명하는 전문성</span>
              </h3>
              <div className="space-y-6">
                {[
                  "억울한 영업정지 2개월을 '집행정지'와 '기각'으로 끌어낸 사례",
                  "까다로운 관광 숙박업 인허가를 1달 만에 성공시킨 사례",
                  "과징금 5,000만원을 80% 감경시킨 청문 대응 사례"
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <CheckCircle className="text-[#F5A623] w-5 h-5 shrink-0 mt-0.5" />
                    <p className="text-gray-200 text-sm md:text-base leading-snug break-keep">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
