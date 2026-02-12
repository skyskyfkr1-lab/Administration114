
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Smartphone, Phone, Search, Scale, ArrowRight } from 'lucide-react';
import { CONTACT } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-[#F4F7FA] to-white py-16 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <span className="inline-block bg-[#002C5F] text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-6 shadow-sm tracking-tight">
              행정 114의 핵심 철학
            </span>
            <h1 className="text-4xl md:text-7xl font-black font-serif text-[#002C5F] leading-tight mb-8 break-keep">
              절망에서 <span className="text-[#F5A623]">확신으로</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 font-bold mb-4 break-keep leading-relaxed tracking-tight">
              <span className="text-[#F5A623]">'진실 규명'과 '법의 허점 파악'</span>을 통해<br className="md:hidden" /> 역전가능성을 증명합니다.
            </p>
            <p className="text-sm md:text-xl text-gray-500 font-medium break-keep leading-relaxed mb-10 opacity-90 max-w-2xl">
              막연한 감정 호소가 아닌, 전문가 협업 시스템의 승소 전략을 만나보십시오.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <Link to="/philosophy" className="bg-[#002C5F] text-white px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center hover:bg-[#001a3a] transition-all shadow-lg active:scale-95">
                투 트랙 솔루션 확인 <ChevronRight className="ml-1 w-5 h-5" />
              </Link>
              <Link to="/contact" className="bg-[#F5A623] text-white px-8 py-5 rounded-2xl font-bold text-lg text-center hover:bg-[#e09512] transition-all shadow-lg active:scale-95">
                전략 상담 시작
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Model Section */}
      <section className="py-16 md:py-28 bg-[#002C5F] text-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold font-serif mb-4 break-keep">
              변호사와 행정사의 협업시스템
            </h2>
            <div className="w-12 h-1 bg-[#F5A623] mx-auto mb-6"></div>
            <p className="text-[#F5A623] text-base md:text-xl font-black tracking-tight break-keep">
              가장 가성비 있고 빠르게 해결되는<br className="md:hidden" /> 루트를 설계합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="bg-white/5 p-8 rounded-[32px] border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#F5A623] text-white px-3 py-1 rounded-full text-[10px] font-black tracking-widest">TRACK 01</div>
                <Search className="w-5 h-5 text-[#F5A623]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 font-serif break-keep text-white">치밀한 사실조사 및 증거확보</h3>
              <p className="text-gray-300 leading-relaxed font-medium break-keep text-sm md:text-base opacity-80">
                행정청의 내부 프로세스를 꿰뚫는 시각으로 현장의 증거를 수집하고, AI가 읽지 못하는 '행정의 맥락'을 짚어내어 승소의 기초를 다집니다.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-[32px] border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#F5A623] text-white px-3 py-1 rounded-full text-[10px] font-black tracking-widest">TRACK 02</div>
                <Scale className="w-5 h-5 text-[#F5A623]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 font-serif break-keep text-white">완벽한 법리 구축 및 소송 대응</h3>
              <p className="text-gray-300 leading-relaxed font-medium break-keep text-sm md:text-base opacity-80">
                확보된 사실관계를 바탕으로 승소 가능성을 치밀하게 계산하고, 법원에서 인정받는 강력한 법률적 논거를 통해 최종 구제를 완성합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white text-[#002C5F]">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="mb-12 md:mb-16">
            <div className="inline-flex flex-col items-start text-left">
              <h2 className="text-2xl md:text-4xl font-black font-serif mb-2 break-keep leading-tight tracking-tight">
                변호사와 행정사의 협업시스템으로
              </h2>
              <h2 className="text-2xl md:text-4xl font-black font-serif mb-6 break-keep leading-tight tracking-tight text-[#F5A623]">
                당신의 정당한 권리를 되찾으십시오.
              </h2>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-stretch md:items-center gap-6 md:gap-20 mb-16">
            <a href={`tel:${CONTACT.phone.replace(/-/g, '')}`} className="flex flex-col items-center gap-4 p-8 bg-[#F5A623]/5 rounded-3xl border border-transparent active:border-[#F5A623] transition-all">
              <div className="bg-[#F5A623] p-5 rounded-2xl shadow-lg shadow-[#F5A623]/20">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-black tracking-tighter tabular-nums text-[#002C5F] mb-1">{CONTACT.phone}</div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">휴대폰 직통 상담</span>
              </div>
            </a>
            
            <a href={`tel:${CONTACT.office.replace(/[()-]/g, '')}`} className="flex flex-col items-center gap-4 p-8 bg-[#002C5F]/5 rounded-3xl border border-transparent active:border-[#002C5F] transition-all">
              <div className="bg-[#002C5F] p-5 rounded-2xl shadow-lg shadow-[#002C5F]/20">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-black tracking-tighter tabular-nums text-[#002C5F] mb-1">{CONTACT.office}</div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">사무실 대표 번호</span>
              </div>
            </a>
          </div>

          <div>
            <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-[#002C5F] text-white w-full sm:w-auto px-10 py-5 rounded-2xl text-lg md:text-xl font-bold hover:bg-[#001a3a] transition-all shadow-xl active:scale-95">
              지금 바로 전략 상담 시작 <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
