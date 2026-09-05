
import React from 'react';
import { Smartphone, Phone, ChevronRight, Copy, ExternalLink, MessageSquare } from 'lucide-react';
import { CONTACT } from '../constants';

const Contact: React.FC = () => {
  const address = CONTACT.address;
  
  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    alert("주소가 복사되었습니다.");
  };

  return (
    <div className="pb-16 md:pb-24">
      <section className="bg-[#002C5F] py-12 md:py-24 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-2xl md:text-6xl font-black mb-3 md:mb-4 break-keep tracking-tight">상담 안내 / 오시는 길</h1>
          <p className="text-xs md:text-2xl text-gray-300 break-keep font-medium leading-relaxed">변호사와 행정사가 함께 당신의 문제를 해결합니다.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 mt-10 md:mt-20 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Quick Contact Buttons */}
          <div className="space-y-6 md:space-y-8 px-2 md:px-0">
            <h2 className="text-lg md:text-4xl font-black mb-6 md:mb-10 break-keep tracking-tighter text-[#002C5F]">빠른 문의 방법</h2>
            
            <a href={`tel:${CONTACT.phone.replace(/-/g, '')}`} className="flex items-center gap-4 md:gap-6 p-5 md:p-7 bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-50 active:scale-[0.98] transition-all group overflow-hidden">
              <div className="bg-[#F5A623] p-3 md:p-5 rounded-xl md:rounded-2xl text-white shadow-lg shadow-[#F5A623]/20 shrink-0">
                <Smartphone className="w-5 h-5 md:w-7 md:h-7" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-[9px] md:text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5 md:mb-1">상담전화 (직통)</p>
                <p className="font-black text-base md:text-[1.75rem] text-[#002C5F] tabular-nums leading-none tracking-tight">
                  {CONTACT.phone}
                </p>
              </div>
              <ChevronRight className="text-gray-300 shrink-0 w-4 h-4 md:w-5 md:h-5 group-hover:text-[#F5A623] transition-colors" />
            </a>

            <a href={`tel:${CONTACT.office.replace(/[()-]/g, '')}`} className="flex items-center gap-4 md:gap-6 p-5 md:p-7 bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-50 active:scale-[0.98] transition-all group overflow-hidden">
              <div className="bg-[#002C5F] p-3 md:p-5 rounded-xl md:rounded-2xl text-white shadow-lg shadow-[#002C5F]/20 shrink-0">
                <Phone className="w-5 h-5 md:w-7 md:h-7" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-[9px] md:text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5 md:mb-1">사무실 대표 번호</p>
                <p className="font-black text-base md:text-[1.75rem] text-[#002C5F] tabular-nums leading-none tracking-tight">
                  {CONTACT.office}
                </p>
              </div>
              <ChevronRight className="text-gray-300 shrink-0 w-4 h-4 md:w-5 md:h-5 group-hover:text-[#002C5F] transition-colors" />
            </a>

            <a href={CONTACT.kakao} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-6 p-5 md:p-7 bg-[#FEE500] hover:bg-[#ebd300] rounded-2xl md:rounded-3xl shadow-lg border border-yellow-200 active:scale-[0.98] transition-all group overflow-hidden">
              <div className="bg-[#3C1E1E] p-3 md:p-5 rounded-xl md:rounded-2xl text-white shadow-md shrink-0">
                <MessageSquare className="w-5 h-5 md:w-7 md:h-7" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-[9px] md:text-[10px] text-[#3C1E1E]/70 font-bold uppercase tracking-widest mb-0.5 md:mb-1">실시간 1:1 채팅</p>
                <p className="font-black text-base md:text-[1.75rem] text-[#3C1E1E] tracking-tight">
                  카카오톡 오픈채팅 상담
                </p>
              </div>
              <ExternalLink className="text-[#3C1E1E]/50 shrink-0 w-4 h-4 md:w-5 md:h-5 group-hover:text-[#3C1E1E] transition-colors" />
            </a>

            <div className="bg-gray-50 p-5 md:p-7 rounded-xl md:rounded-2xl border border-gray-100">
              <p className="text-[10px] md:text-[11px] font-bold text-[#002C5F] mb-1.5 md:mb-2 uppercase tracking-wide">운영 시간</p>
              <p className="text-xs md:text-base font-semibold text-gray-600 leading-relaxed break-keep">
                전화상담 오전 9시 ~ 오후 9시 (365일 연중무휴)
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-6 md:space-y-8 px-2 md:px-0">
            <h2 className="text-lg md:text-4xl font-black mb-6 md:mb-10 break-keep tracking-tighter text-[#002C5F]">찾아오시는 길</h2>
            <div className="bg-gray-100 w-full h-[260px] md:h-[400px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl relative border-2 md:border-4 border-white">
              <iframe 
                src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%ED%85%8C%ED%97%A4%EB%9E%80%EB%A1%9C82%EA%B8%B8%2014&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-full border-0" 
                allowFullScreen={true} 
                loading="lazy" 
                title="법무법인 액시스 행정문제연구소 위치"
              ></iframe>
            </div>
            
            <div className="bg-white p-5 md:p-7 rounded-2xl shadow-sm border border-gray-100">
              <p className="font-bold text-[#002C5F] text-sm md:text-lg mb-4 break-keep leading-snug">
                {address} <br />
                <span className="text-gray-400 font-medium text-[11px] md:text-base">(삼성역 4번 출구 / 포스코사거리 인근, 청풍빌딩 4층 AXIS Law)</span>
              </p>
              <div className="flex gap-2">
                <button 
                  onClick={copyAddress}
                  className="flex-1 py-3 px-3 bg-gray-50 text-[#002C5F] rounded-xl font-bold text-xs md:text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" /> 주소 복사
                </button>
                <a 
                  href="https://map.kakao.com/?q=%EC%84%9C%EC%9A%B8+%EA%B0%95%EB%82%A8%EA%B5%AC+%ED%85%8C%ED%97%A4%EB%9E%80%EB%A1%9C82%EA%B8%B8+14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-3 bg-[#002C5F] text-white rounded-xl font-bold text-xs md:text-sm flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> 지도 앱 열기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
