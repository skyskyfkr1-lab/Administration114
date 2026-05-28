
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Smartphone, Phone, Search, Scale, ArrowRight } from 'lucide-react';
import { CONTACT, IMAGES } from '../constants';

const Home: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(IMAGES.representative);
  const [retryCount, setRetryCount] = useState(0);

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
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[65vh] md:min-h-[75vh] flex items-center bg-gradient-to-br from-[#F4F7FA] to-white py-12 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-20 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="inline-block bg-[#002C5F] text-white px-3.5 py-1.5 rounded-full text-[10px] md:text-sm font-extrabold mb-4 md:mb-6 shadow-sm tracking-tight">
                행정 114의 핵심 철학
              </span>
              <h1 className="text-3xl md:text-6xl xl:text-7xl font-black text-[#002C5F] leading-tight mb-4 md:mb-8 break-keep">
                절망에서 <span className="text-[#F5A623]">확신으로</span>
              </h1>
              <p className="text-lg md:text-2xl xl:text-3xl text-gray-700 font-bold mb-3 md:mb-5 break-keep leading-relaxed tracking-tight">
                <span className="text-[#F5A623]">'진실 규명'과 '법의 허점 파악'</span>을 통해<br className="hidden md:inline lg:hidden" /> 역전가능성을 증명합니다.
              </p>
              <p className="text-xs md:text-lg xl:text-xl text-gray-500 font-medium break-keep leading-relaxed mb-8 md:mb-12 opacity-90 max-w-2xl">
                막연한 감정 호소가 아닌, 전문가 협업 시스템의 승소 전략을 만나보십시오.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto justify-center lg:justify-start">
                <Link to="/philosophy" className="bg-[#002C5F] text-white px-6 md:px-10 py-3.5 md:py-4.5 rounded-2xl font-bold text-sm md:text-lg flex items-center justify-center hover:bg-[#001a3a] transition-all shadow-lg active:scale-95">
                  투 트랙 솔루션 확인 <ChevronRight className="ml-1 w-4 h-4 md:w-5 md:h-5 animate-pulse" />
                </Link>
                <Link to="/contact" className="bg-[#F5A623] text-white px-6 md:px-10 py-3.5 md:py-4.5 rounded-2xl font-bold text-sm md:text-lg text-center hover:bg-[#e09512] transition-all shadow-lg active:scale-95">
                  전략 상담 시작
                </Link>
              </div>
            </div>

            {/* Right Content: Premium Large Experts Card */}
            <div className="lg:col-span-5 w-full max-w-xl mx-auto lg:max-w-none">
              <div className="bg-white p-6 md:p-8 xl:p-10 rounded-[32px] shadow-2xl border border-gray-100 flex flex-col gap-5 md:gap-6">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F5A623] animate-pulse"></span>
                    <span className="text-sm md:text-base xl:text-lg font-black text-[#002C5F]">분야별 핵심 책임 전문가</span>
                  </div>
                  <Link to="/experts" className="text-xs md:text-sm text-gray-400 font-bold hover:text-[#002C5F] transition-colors flex items-center gap-0.5">
                    전체 프로필 <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Team Lead 1: 이경석 변호사 */}
                <div className="flex items-center gap-4 md:gap-6 bg-[#F8F9FA] p-4 md:p-5 rounded-[24px] border border-gray-50 hover:border-gray-200 transition-all hover:shadow-md">
                  <div className="w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 shrink-0 bg-gray-200 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                    <img src={IMAGES.leeKyungSeok} alt="이경석 변호사" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-black text-base md:text-xl xl:text-2xl text-[#002C5F] truncate">이경석</span>
                      <span className="text-[10px] md:text-xs bg-[#002C5F]/10 text-[#002C5F] px-2 py-0.5 rounded-md font-black">변호사</span>
                    </div>
                    <p className="text-xs md:text-sm xl:text-base text-gray-500 font-bold truncate leading-tight">행정·형사 소송 전략 설계</p>
                    <div className="mt-2 md:mt-3">
                      <span className="text-[9px] md:text-[11px] xl:text-xs text-[#F5A623] font-black leading-none bg-[#F5A623]/10 px-2.5 py-1 rounded-full inline-block">법리·전략 설계 / 행정형사센터장</span>
                    </div>
                  </div>
                </div>

                {/* Team Lead 2: 김도현 소장 / 행정사 */}
                <div className="flex items-center gap-4 md:gap-6 bg-[#F8F9FA] p-4 md:p-5 rounded-[24px] border border-gray-50 hover:border-gray-200 transition-all hover:shadow-md">
                  <div className="w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 shrink-0 bg-gray-200 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                    <img src={imgSrc} alt="김도현 소장" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" onError={handleImageError} referrerPolicy="no-referrer" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-black text-base md:text-xl xl:text-2xl text-[#002C5F] truncate">김도현</span>
                      <span className="text-[10px] md:text-xs bg-[#F5A623]/10 text-[#F5A623] px-2 py-0.5 rounded-md font-black">소장 / 행정사</span>
                    </div>
                    <p className="text-xs md:text-sm xl:text-base text-gray-500 font-bold truncate leading-tight">공직 30년 현장 행정 실무</p>
                    <div className="mt-2 md:mt-3">
                      <span className="text-[9px] md:text-[11px] xl:text-xs text-gray-600 font-black leading-none bg-gray-200/60 px-2.5 py-1 rounded-full inline-block">행정 실전 해법 전문가</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Model Section */}
      <section className="py-12 md:py-28 bg-[#002C5F] text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-xl md:text-4xl font-bold mb-3 md:mb-4 break-keep">
              변호사와 행정사의 협업시스템
            </h2>
            <div className="w-10 md:w-12 h-1 bg-[#F5A623] mx-auto mb-4 md:mb-6"></div>
            <p className="text-[#F5A623] text-sm md:text-xl font-black tracking-tight break-keep">
              가장 가성비 있고 빠르게 해결되는<br className="md:hidden" /> 루트를 설계합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 px-2 md:px-0">
            <div className="bg-white/5 p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-white/10">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="bg-[#F5A623] text-white px-2.5 py-1 rounded-full text-[9px] md:text-[10px] font-black tracking-widest">TRACK 01</div>
                <Search className="w-4 h-4 md:w-5 md:h-5 text-[#F5A623]" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 break-keep text-white">치밀한 사실조사 및 증거확보</h3>
              <p className="text-gray-300 leading-relaxed font-medium break-keep text-xs md:text-base opacity-80">
                행정청의 내부 프로세스를 꿰뚫는 시각으로 현장의 증거를 수집하고, AI가 읽지 못하는 '행정의 맥락'을 짚어내어 승소의 기초를 다집니다.
              </p>
            </div>

            <div className="bg-white/5 p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-white/10">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="bg-[#F5A623] text-white px-2.5 py-1 rounded-full text-[9px] md:text-[10px] font-black tracking-widest">TRACK 02</div>
                <Scale className="w-4 h-4 md:w-5 md:h-5 text-[#F5A623]" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 break-keep text-white">완벽한 법리 구축 및 소송 대응</h3>
              <p className="text-gray-300 leading-relaxed font-medium break-keep text-xs md:text-base opacity-80">
                확보된 사실관계를 바탕으로 승소 가능성을 치밀하게 계산하고, 법원에서 인정받는 강력한 법률적 논거를 통해 최종 구제를 완성합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-32 bg-white text-[#002C5F]">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <div className="mb-10 md:mb-16">
            <div className="inline-flex flex-col items-center md:items-start text-center md:text-left px-4">
              <h2 className="text-xl md:text-4xl font-black mb-2 break-keep leading-tight tracking-tight">
                변호사와 행정사의 협업시스템으로
              </h2>
              <h2 className="text-xl md:text-4xl font-black mb-4 md:mb-6 break-keep leading-tight tracking-tight text-[#F5A623]">
                당신의 정당한 권리를 되찾으십시오.
              </h2>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-stretch md:items-center gap-4 md:gap-20 mb-12 md:mb-16 px-4">
            <a href={`tel:${CONTACT.phone.replace(/-/g, '')}`} className="flex flex-col items-center gap-3 md:gap-4 p-6 md:p-8 bg-[#F5A623]/5 rounded-2xl md:rounded-3xl border border-transparent active:border-[#F5A623] transition-all">
              <div className="bg-[#F5A623] p-4 md:p-5 rounded-xl md:rounded-2xl shadow-lg shadow-[#F5A623]/20">
                <Smartphone className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <div className="text-xl md:text-4xl font-black tracking-tighter tabular-nums text-[#002C5F] mb-1">{CONTACT.phone}</div>
                <span className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">휴대폰 직통 상담</span>
              </div>
            </a>
            
            <a href={`tel:${CONTACT.office.replace(/[()-]/g, '')}`} className="flex flex-col items-center gap-3 md:gap-4 p-6 md:p-8 bg-[#002C5F]/5 rounded-2xl md:rounded-3xl border border-transparent active:border-[#002C5F] transition-all">
              <div className="bg-[#002C5F] p-4 md:p-5 rounded-xl md:rounded-2xl shadow-lg shadow-[#002C5F]/20">
                <Phone className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <div className="text-xl md:text-4xl font-black tracking-tighter tabular-nums text-[#002C5F] mb-1">{CONTACT.office}</div>
                <span className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">사무실 대표 번호</span>
              </div>
            </a>
          </div>

          <div className="px-4">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#002C5F] text-white w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 rounded-2xl text-base md:text-xl font-bold hover:bg-[#001a3a] transition-all shadow-xl active:scale-95">
              지금 바로 전략 상담 시작 <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;