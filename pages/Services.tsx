
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2, ArrowRight, ShieldCheck, Search, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('전체');

  // Extract all unique tags
  const allTags = ['전체', ...Array.from(new Set(SERVICES.flatMap(s => s.tags || [])))];

  const filteredServices = selectedTag === '전체'
    ? SERVICES
    : SERVICES.filter(s => s.tags?.includes(selectedTag));

  return (
    <div className="pb-16 md:pb-24">
      {/* Header Banner */}
      <section className="bg-[#002C5F] py-14 md:py-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <span className="inline-block bg-[#F5A623] text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold mb-4 shadow-sm">
            원스톱 행정 구제 및 자문 솔루션
          </span>
          <h1 className="text-2xl md:text-5xl font-black mb-4 break-keep tracking-tight">해결 가능 서비스</h1>
          <p className="text-sm md:text-xl text-gray-300 break-keep font-medium max-w-2xl mx-auto leading-relaxed">
            공직 실무 30년 행정사와 전문 변호사의 협업으로<br className="md:hidden" /> 가장 신속하고 확실한 승소 루트를 설계합니다.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 mt-8 md:mt-16 max-w-7xl">
        {/* Quick Tag Filter Pill Bar */}
        <div className="mb-8 md:mb-12 overflow-x-auto pb-2 scrollbar-none flex items-center gap-2 flex-wrap justify-center">
          {[
            { label: '전체', id: 'all' },
            { label: '1. 식품·위생', id: 'food-sanitation' },
            { label: '2. 행정처분 대응', id: 'disposition-defense' },
            { label: '3. 특사경', id: 'police' },
            { label: '4. 인허가', id: 'licensing' },
            { label: '5. 보조금 부정수급', id: 'subsidy' },
            { label: '6. 행정쟁송', id: 'administrative-litigation' },
            { label: '7. 국공유지 토지보상', id: 'land' },
            { label: '8. 재개발·재건축', id: 'redevelopment' },
            { label: '9. 산업·기업행정', id: 'industry' },
            { label: '10. 환경', id: 'environment' }
          ].map((cat) => {
            const isSelected = (cat.id === 'all' && selectedTag === '전체') || selectedTag === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedTag(cat.id === 'all' ? '전체' : cat.id);
                }}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs md:text-sm font-black transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-[#002C5F] text-white shadow-md scale-105'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#002C5F] hover:text-[#002C5F]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {(selectedTag === '전체' ? SERVICES : SERVICES.filter(s => s.id === selectedTag)).map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl flex flex-col border border-gray-100 hover:border-[#F5A623] transition-all duration-300 group"
            >
              {/* Header with Icon */}
              <div className="bg-gradient-to-br from-gray-50 to-[#F4F7FA] p-6 md:p-8 flex items-center justify-between border-b border-gray-100 group-hover:bg-gradient-to-br group-hover:from-blue-50/50 group-hover:to-orange-50/30 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#002C5F] group-hover:text-[#F5A623] group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                <span className="text-[10px] md:text-xs font-bold text-gray-400 bg-white px-2.5 py-1 rounded-full border border-gray-100">
                  행정114 전문분야
                </span>
              </div>

              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <h3 className="text-xl md:text-2xl font-black mb-3 break-keep text-[#002C5F] group-hover:text-[#002C5F]">
                  {service.title}
                </h3>

                {/* Keyword Tags */}
                {service.tags && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-[11px] md:text-xs font-bold bg-[#F8F9FA] text-[#002C5F] px-2.5 py-1 rounded-lg border border-gray-100 group-hover:bg-[#002C5F]/5 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="text-gray-600 mb-6 leading-relaxed break-keep text-sm md:text-base font-medium flex-grow">
                  {service.description}
                </div>

                <div className="mt-auto">
                  <div className="space-y-2 mb-6 border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-2 text-xs md:text-sm text-[#002C5F] font-bold">
                      <CheckCircle2 className="w-4 h-4 text-[#F5A623] shrink-0" /> Track 1: 행정사 현장조사 & 실무 대응
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-[#002C5F] font-bold">
                      <CheckCircle2 className="w-4 h-4 text-[#F5A623] shrink-0" /> Track 2: 변호사 법리구축 & 소송 대리
                    </div>
                  </div>
                  <Link 
                    to="/contact" 
                    className="text-sm font-black flex items-center justify-between py-3.5 px-5 bg-gray-50 rounded-2xl group-hover:bg-[#F5A623] group-hover:text-white transition-all text-[#002C5F] shadow-sm"
                  >
                    <span>1:1 전담 전략상담 문의</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#F5A623] group-hover:text-white" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 md:mt-20 bg-gradient-to-r from-[#002C5F] to-[#0A3D78] rounded-[32px] p-8 md:p-12 text-white text-center shadow-xl">
          <h3 className="text-xl md:text-3xl font-black mb-3 break-keep">
            기타 행정처분 및 인허가 문제도 상담 가능합니다
          </h3>
          <p className="text-xs md:text-base text-gray-300 max-w-2xl mx-auto mb-6 break-keep">
            행정법령은 4,000개가 넘고 사안마다 사실관계와 적용 규정이 다릅니다. 복잡하고 막막한 사안일수록 초기 사실조사와 법리 분석이 결과를 좌우합니다.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-[#F5A623] text-white px-8 py-4 rounded-2xl font-black text-sm md:text-base hover:bg-[#e09512] transition-all shadow-lg active:scale-95"
          >
            지금 바로 전문 상담 신청하기 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
