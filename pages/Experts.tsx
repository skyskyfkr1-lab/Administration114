
import React from 'react';
import { Award, CheckCircle, Star } from 'lucide-react';
import { IMAGES } from '../constants';

const Experts: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-[#0F4C81] mb-6">전문가 소개</h1>
          <p className="text-xl text-gray-600">행정 현장을 누구보다 잘 아는 베테랑들이 함께합니다.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <img 
                src="https://picsum.photos/seed/expert1/800/1000" 
                alt="Representative Expert" 
                className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" 
              />
              <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#F5A623]">
                <h3 className="text-2xl font-bold mb-1">김도현</h3>
                <p className="text-[#0F4C81] font-bold mb-4">대표 행정사 / 공학박사</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  "공무원의 시각으로 사건을 보고, 의뢰인의 마음으로 해결책을 씁니다."
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold font-serif mb-8 border-b-2 border-[#F5A623] pb-4 inline-block">주요 약력 및 경력</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#0F4C81]/10 p-2 rounded-lg text-[#0F4C81]">
                    <Award />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">공직 경력 30년</h4>
                    <p className="text-gray-600 text-sm">전 서울특별시 OO구청 과장, 법무계장 역임</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#0F4C81]/10 p-2 rounded-lg text-[#0F4C81]">
                    <Award />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">행정 전문가</h4>
                    <p className="text-gray-600 text-sm">중앙행정심판위원회 협력 행정사</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#0F4C81]/10 p-2 rounded-lg text-[#0F4C81]">
                    <Award />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">저서 및 활동</h4>
                    <p className="text-gray-600 text-sm">「소상공인 행정처분 대응 가이드」 책임 집필</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#0F4C81]/10 p-2 rounded-lg text-[#0F4C81]">
                    <Award />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">학술 활동</h4>
                    <p className="text-gray-600 text-sm">지방행정 및 공공정책 전공 박사</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold font-serif mb-8 border-b-2 border-[#F5A623] pb-4 inline-block">행정의 달인 팀</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              행정 114는 김도현 대표 행정사를 필두로 각 분야의 전문가들이 팀 단위로 협업합니다. 
              고문변호사 자문단이 당신의 사건을 법률적, 행정적으로 다각도 분석하여 최상의 솔루션을 도출합니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "김종환", role: "고문변호사", detail: "주요분야: 행정, 의료, 기업" },
                { name: "강소진", role: "고문변호사", detail: "주요분야: 행정, 의료, 기업" },
                { name: "김채린", role: "고문변호사", detail: "주요분야: 행정, 민사, 형사, 기업일반" },
              ].map((member, idx) => (
                <div key={idx} className="bg-white border p-6 rounded-xl hover:shadow-md transition-all">
                  <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                  <p className="text-[#0F4C81] text-xs font-bold mb-3 uppercase tracking-wider">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-tight">{member.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 bg-[#0F4C81] p-10 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Star className="text-[#F5A623] fill-[#F5A623]" /> 고객이 증명하는 전문성
              </h3>
              <div className="space-y-6">
                {[
                  "억울한 영업정지 2개월을 '집행정지'와 '기각'으로 끌어낸 사례",
                  "까다로운 관광 숙박업 인허가를 1달 만에 성공시킨 사례",
                  "과징금 5,000만원을 80% 감경시킨 청문 대응 사례"
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="text-[#F5A623] w-5 h-5 shrink-0" />
                    <p className="text-gray-200">{text}</p>
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
