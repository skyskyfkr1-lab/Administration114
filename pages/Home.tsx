
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, AlertTriangle, ShieldCheck, Zap, Smartphone, Search, FileText, Camera } from 'lucide-react';
import { IMAGES, SERVICES, CONTACT } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center bg-gradient-to-br from-[#F4F7FA] to-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block bg-[#002C5F] text-white px-4 py-1.5 rounded-full text-[10px] md:text-sm font-bold mb-6 md:mb-8 shadow-sm">
              행정 구제의 패러다임 시프트
            </span>
            <h1 style={{ 
              fontSize: '52px', 
              lineHeight: '1.2', 
              fontWeight: '900', 
              color: '#002C5F' 
            }} className="font-serif leading-tight mb-4 md:mb-8 break-keep">
              절망에서 <span className="text-[#F5A623]">확신으로</span>
            </h1>
            <div style={{ 
              fontSize: '22px', 
              lineHeight: '1.5', 
              color: '#4A5568' 
            }} className="mb-8 md:mb-12 font-medium break-keep">
              우리는 99% 패소할 사건에서 <span className="font-bold text-[#002C5F]">1%의 역전 가능성</span>을 증명합니다.
              <br className="hidden md:block" /> 막연한 감정 호소가 아닌, 전문가 협업 시스템의 승소 전략을 만나보십시오.
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
              <Link to="/contact" className="bg-[#F5A623] text-white px-8 md:px-12 py-4 rounded-lg font-bold text-base md:text-lg flex items-center justify-center hover:bg-[#e09512] transition-all shadow-lg hover:-translate-y-1">
                전략 상담 시작 <ChevronRight className="ml-1 md:ml-2 w-5 h-5" />
              </Link>
              <Link to="/philosophy" className="bg-white border-2 border-[#002C5F]/20 text-[#002C5F] px-8 md:px-12 py-4 rounded-lg font-bold text-base md:text-lg text-center hover:bg-gray-50 transition-all hover:-translate-y-1">
                투 트랙 솔루션 확인
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-[-10%] bottom-0 opacity-5 pointer-events-none hidden lg:block">
           <svg width="800" height="800" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
             <circle cx="300" cy="300" r="300" fill="#002C5F" />
           </svg>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-14 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <img 
                src={IMAGES.painPoint} 
                alt="고민에 빠진 사장님" 
                className="rounded-xl shadow-xl w-full h-[300px] md:h-[500px] object-cover" 
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-4xl font-bold font-serif mb-8 md:mb-12 break-keep leading-tight text-[#002C5F]">
                당신의 잘못이 아닙니다.<br />
                <span className="text-red-600">내비게이션(경로)이 잘못되었을 뿐입니다.</span>
              </h2>
              {/* Mobile and Desktop aligned List */}
              <div className="space-y-6 md:space-y-8">
                {[
                  { key: "좌절", text: "행정청의 우월적 지위에 대한 압박감으로 포기하고 싶으신가요?" },
                  { key: "정보 비대칭", text: "잘못된 접근 방식과 정보 부족이 실패의 원인입니다." },
                  { key: "타이밍", text: "가만히 있으면 운명이 되지만, 행동하면 역사가 됩니다." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="flex-none bg-red-50 text-red-600 w-[85px] md:w-[110px] py-2 md:py-2.5 rounded-xl text-[11px] md:text-base font-black border border-red-100 flex items-center justify-center text-center tracking-tighter shadow-sm">
                      {item.key}
                    </div>
                    <p className="flex-grow text-[14px] md:text-[20px] text-[#444444] font-medium break-keep leading-[1.6] pt-1">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-6 md:p-10 bg-gray-50 rounded-3xl border-l-8 border-[#002C5F] shadow-sm">
                 <p className="text-sm md:text-lg text-gray-700 leading-relaxed break-keep font-medium">
                   "많은 이들이 막막함에 중도 포기하지만, <span className="font-bold text-[#002C5F]">행정 114</span>는 정확한 데이터(Fact)와 법리적 처방(Law)으로 다시 일어설 수 있는 경로를 재탐색합니다."
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Model Section */}
      <section className="py-14 md:py-24 bg-[#002C5F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-4xl font-bold font-serif mb-4 md:mb-6 break-keep">
            행정사와 변호사의 협업 시스템
          </h2>
          <div className="text-[#F5A623] text-sm md:text-xl font-bold mb-10 md:mb-16 tracking-widest uppercase">
            투 트랙(Two-Track) 행정 구제 솔루션
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-left hover:bg-white/10 transition-colors">
              <div className="text-[#F5A623] font-bold text-sm mb-4">Track 1 행정사</div>
              <h3 className="text-xl font-bold mb-4">현장 사실 조사 및 데이터 분석</h3>
              <p className="text-sm text-gray-400 leading-relaxed">내부자적 관점(Insider Perspective)으로 행정청의 흠결을 정밀 타격하고, 날것의 정보(Raw Data)를 법적 증거로 전환합니다.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-left hover:bg-white/10 transition-colors">
              <div className="text-[#F5A623] font-bold text-sm mb-4">Track 2 변호사</div>
              <h3 className="text-xl font-bold mb-4">법리 구축 및 소송 전략 수립</h3>
              <p className="text-sm text-gray-400 leading-relaxed">사건의 본질을 관통하는 승소 논리를 구축하고, 행정심판을 넘어 소송 단계까지 완벽한 '법률적 처방'을 집도합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* First Action Protocol */}
      <section className="py-14 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-3xl font-bold font-serif text-center mb-12 tracking-tight">승소를 위한 첫걸음 (First Action Protocol)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <FileText />, title: "증거 확보", desc: "행정처분 통지서, 거래 장부, 내부 보고서 원본 확보" },
                { icon: <Camera />, title: "현장 보존", desc: "사건 당시의 CCTV 영상(최소 3일치) 및 현장 사진" },
                { icon: <Search />, title: "절차 선택", desc: "이의신청보다 '집행정지 신청'을 최우선으로 검토" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-md transition-all">
                  <div className="text-[#002C5F] mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-xs text-gray-500 break-keep">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 p-4 bg-red-50 text-red-700 rounded-lg text-xs md:text-sm text-center font-bold">
              ※ 주의: 조사관에게 고의성 여부를 성급히 언급하지 마십시오. 사실관계만 인정하되 상세 진술은 전문가와 상의해야 합니다.
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#002C5F] to-[#0a1a3a] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block mb-10">
            <h2 className="text-2xl md:text-5xl font-extrabold font-serif mb-6 break-keep">
              가만히 있으면 운명이 되지만,
            </h2>
            <div className="h-6 md:h-14"></div>
            <h2 className="text-2xl md:text-5xl font-extrabold font-serif break-keep text-[#F5A623]">
              행동하면 역사가 됩니다.
            </h2>
          </div>
          <p className="text-sm md:text-xl text-gray-300 mb-12 md:mb-16 break-keep max-w-3xl mx-auto font-medium leading-relaxed">
            우리는 단순히 법률 절차를 파는 <span className="text-white font-black underline decoration-[#F5A623] underline-offset-4">행정 구제 파트너</span>가 아닙니다.<br />
            고객의 '잃어버린 일상'과 '경제적 이익'을 되찾아드리는 실질적인 가치를 창출합니다.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-3 text-xl sm:text-3xl font-black text-white">
                <Smartphone className="w-6 h-6 md:w-10 md:h-10 text-[#F5A623] shrink-0" /> 
                <span>{CONTACT.phone}</span>
              </div>
              <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">휴대폰 직통 상담</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-3 text-xl sm:text-3xl font-black text-white">
                <PhoneIcon className="w-6 h-6 md:w-10 md:h-10 text-[#F5A623] shrink-0" /> 
                <span>{CONTACT.office}</span>
              </div>
              <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">사무실 대표 번호</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

export default Home;
