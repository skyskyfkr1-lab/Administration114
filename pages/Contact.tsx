
import React from 'react';
import { Phone, MapPin, MessageCircle, Clock, ChevronRight, Map as MapIcon, Navigation, ArrowBigDown } from 'lucide-react';
import { CONTACT } from '../constants';

const Contact: React.FC = () => {
  const address = CONTACT.address;
  
  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    alert("주소가 복사되었습니다.");
  };

  return (
    <div className="pb-24">
      <section className="bg-[#0F4C81] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 break-keep">상담 안내</h1>
          <p className="text-lg md:text-xl text-gray-300 break-keep">당신의 고민을 들려주세요. 직접 전화를 주시면 가장 빠릅니다.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Methods */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-8 break-keep">빠른 문의 방법</h2>
            
            <a href={`tel:${CONTACT.phone.replace(/-/g, '')}`} className="flex items-center gap-3 md:gap-6 p-4 md:p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-[#F5A623] transition-all group overflow-hidden">
              <div className="bg-[#F5A623]/10 p-3 md:p-5 rounded-full text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-white transition-colors shrink-0">
                <Phone className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">전화 상담</p>
                <p className="font-bold text-[16px] sm:text-xl md:text-2xl text-[#0F4C81] whitespace-nowrap overflow-visible">
                  {CONTACT.phone}
                </p>
              </div>
              <ChevronRight className="text-gray-300 group-hover:text-[#F5A623] transition-colors shrink-0" />
            </a>

            <a 
              href="https://open.kakao.com/o/gsUcgBbi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 md:gap-6 p-4 md:p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-[#FAE100] transition-all group cursor-pointer"
            >
              <div className="bg-[#FAE100]/20 p-3 md:p-5 rounded-full text-[#3C1E1E] group-hover:bg-[#FAE100] transition-colors shrink-0">
                <MessageCircle className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <div className="flex-grow">
                <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">카카오톡 문의</p>
                <p className="font-bold text-lg sm:text-xl md:text-2xl text-[#3C1E1E]">상담하기</p>
              </div>
              <ChevronRight className="text-gray-300 group-hover:text-[#FAE100] transition-colors shrink-0" />
            </a>

            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="text-[#0F4C81] w-5 h-5" />
                <h3 className="font-bold">상담 가능 시간</h3>
              </div>
              <p className="text-gray-600 leading-relaxed break-keep text-sm md:text-base">
                행정 114는 소상공인분들의 <span className="text-[#0F4C81] font-bold underline decoration-[#F5A623]">상황을 고려한 상담체계를 유지</span>하고 있습니다. 언제든 편하게 연락 주십시오.
              </p>
            </div>
          </div>

          {/* Location & Info */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-8 break-keep">찾아오시는 길</h2>
            <div className="relative">
              <div className="bg-gray-100 w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl relative border-2 border-[#0F4C81]/10">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.664414163467!2d127.0844783!3d37.532292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca50438692797%3A0x7057b3260c74148!2z7ISc7Jq47Yq567OE7IucIOq0keyngOq1rCDrkarshKzroZwgNzQy!5e0!3m2!1sko!2skr!4v1715800000000!5m2!1sko!2skr" 
                  className="w-full h-full border-0" 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="행정 114 사무실 위치"
                ></iframe>
                
                <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center">
                  <div className="mb-14 flex flex-col items-center">
                    <div className="bg-[#0F4C81] text-white px-3 py-1 rounded-lg text-[10px] md:text-xs font-bold shadow-2xl border-2 border-white mb-1">
                      광성빌딩 605호 (행정 114)
                    </div>
                    <ArrowBigDown className="text-[#F5A623] fill-[#F5A623] w-8 h-8 md:w-10 md:h-10 animate-bounce drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]" />
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <button 
                  onClick={() => window.open(`https://map.naver.com/v5/search/${encodeURIComponent(address)}`)}
                  className="flex-1 bg-[#03C75A] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-sm text-xs md:text-sm"
                >
                  <MapIcon className="w-4 h-4" /> 네이버 지도
                </button>
                <button 
                  onClick={() => window.open(`https://map.kakao.com/link/search/${encodeURIComponent(address)}`)}
                  className="flex-1 bg-[#FAE100] text-[#3C1E1E] py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-sm text-xs md:text-sm"
                >
                  <Navigation className="w-4 h-4" /> 카카오맵
                </button>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#0F4C81] w-6 h-6 mt-1 shrink-0" />
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <p className="font-bold text-base md:text-lg break-keep">{address}</p>
                    <button onClick={copyAddress} className="text-[10px] bg-gray-100 text-gray-500 px-2 py-1 rounded hover:bg-gray-200 transition-colors border border-gray-200">주소복사</button>
                  </div>
                  <p className="text-gray-500 text-xs md:text-sm break-keep">2호선 구의역 1번 출구 도보 10분 / 광성빌딩 6층</p>
                </div>
              </div>
              
              <div className="bg-[#0F4C81]/5 p-6 rounded-xl border border-[#0F4C81]/10">
                <h4 className="font-bold mb-2 text-[#0F4C81] flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F5A623] rounded-full"></span> 주차 안내
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed font-bold break-keep">
                  건물 내 주차장 이용이 가능합니다.
                </p>
                <p className="text-xs text-gray-500 mt-1 break-keep">방문 전 연락 주시면 주차 자리를 미리 확인해 드립니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
