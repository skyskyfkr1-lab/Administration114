
import React from 'react';
import { Phone, MapPin, MessageCircle, Clock, ChevronRight, Map as MapIcon, Navigation, ArrowBigDown, Smartphone } from 'lucide-react';
import { CONTACT } from '../constants';

const Contact: React.FC = () => {
  const address = CONTACT.address;
  
  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    alert("주소가 복사되었습니다.");
  };

  return (
    <div className="pb-24">
      <section className="bg-[#002C5F] py-16 md:py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4 break-keep">상담 안내</h1>
          <p className="text-base md:text-xl text-gray-300 break-keep">당신의 고민을 들려주세요. 직접 전화를 주시면 가장 빠릅니다.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-12 md:mt-16 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* Contact Methods */}
          <div className="space-y-6 md:y-8">
            <h2 className="text-xl md:text-3xl font-bold font-serif mb-6 md:mb-8 break-keep">빠른 문의 방법</h2>
            
            <a href={`tel:${CONTACT.phone.replace(/-/g, '')}`} className="flex items-center gap-3 md:gap-6 p-4 md:p-8 bg-white rounded-xl shadow-md border border-gray-100 hover:border-[#F5A623] transition-all group overflow-hidden">
              <div className="bg-[#F5A623]/10 p-3 md:p-5 rounded-full text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-white transition-colors shrink-0">
                <Smartphone className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-[9px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">휴대폰 상담</p>
                <p className="font-bold text-[15px] sm:text-xl md:text-2xl text-[#002C5F] whitespace-nowrap overflow-visible">
                  {CONTACT.phone}
                </p>
              </div>
              <ChevronRight className="text-gray-300 group-hover:text-[#F5A623] transition-colors shrink-0 w-4 h-4 md:w-6 md:h-6" />
            </a>

            <a href={`tel:${CONTACT.office.replace(/[()-]/g, '')}`} className="flex items-center gap-3 md:gap-6 p-4 md:p-8 bg-white rounded-xl shadow-md border border-gray-100 hover:border-[#002C5F] transition-all group overflow-hidden">
              <div className="bg-[#002C5F]/10 p-3 md:p-5 rounded-full text-[#002C5F] group-hover:bg-[#002C5F] group-hover:text-white transition-colors shrink-0">
                <Phone className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-[9px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">일반 전화</p>
                <p className="font-bold text-[15px] sm:text-xl md:text-2xl text-[#002C5F] whitespace-nowrap overflow-visible">
                  {CONTACT.office}
                </p>
              </div>
              <ChevronRight className="text-gray-300 group-hover:text-[#002C5F] transition-colors shrink-0 w-4 h-4 md:w-6 md:h-6" />
            </a>

            <div className="p-6 md:p-8 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <Clock className="text-[#002C5F] w-4 h-4 md:w-5 md:h-5" />
                <h3 className="font-bold text-sm md:text-base">상담 가능 시간</h3>
              </div>
              <div className="text-gray-600 leading-relaxed break-keep text-[11px] md:text-base">
                <p className="font-bold text-[#002C5F] mb-1">{CONTACT.hours}</p>
                <p>행정 114는 소상공인분들의 <span className="font-bold underline decoration-[#F5A623]">상황을 고려한 상담체계를 유지</span>하고 있습니다. 언제든 편하게 연락 주십시오.</p>
              </div>
            </div>
          </div>

          {/* Location & Info */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-xl md:text-3xl font-bold font-serif mb-6 md:mb-8 break-keep">찾아오시는 길</h2>
            <div className="relative">
              <div className="bg-gray-100 w-full h-56 md:h-80 rounded-xl overflow-hidden shadow-lg relative border-2 border-[#002C5F]/10">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.174154817478!2d127.0061324!3d37.4920257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca169f9113e61%3A0xc665b6328a6f4e66!2z7ISc7Jq47Yq567OE7IucIOyEnOyogOq1rCDshJzstIjrjIDroZwgMjU0!5e0!3m2!1sko!2skr!4v1715800000000!5m2!1sko!2skr" 
                  className="w-full h-full border-0" 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="행정 114 사무실 위치"
                ></iframe>
                
                <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center">
                  <div className="mb-14 flex flex-col items-center">
                    <div className="bg-[#002C5F] text-white px-2 py-1 rounded-md text-[9px] md:text-xs font-bold shadow-2xl border border-white mb-1">
                      오퓨런스빌딩 7층 (행정 114)
                    </div>
                    <ArrowBigDown className="text-[#F5A623] fill-[#F5A623] w-6 h-6 md:w-10 md:h-10 animate-bounce" />
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <button 
                  onClick={() => window.open(`https://map.naver.com/v5/search/${encodeURIComponent(address)}`)}
                  className="flex-1 bg-[#03C75A] text-white py-2 md:py-3 rounded-lg font-bold flex items-center justify-center gap-1 md:gap-2 text-[10px] md:text-sm"
                >
                  <MapIcon className="w-3 h-3 md:w-4 md:h-4" /> 네이버 지도
                </button>
                <button 
                  onClick={() => window.open(`https://map.kakao.com/link/search/${encodeURIComponent(address)}`)}
                  className="flex-1 bg-[#FAE100] text-[#3C1E1E] py-2 md:py-3 rounded-lg font-bold flex items-center justify-center gap-1 md:gap-2 text-[10px] md:text-sm"
                >
                  <Navigation className="w-3 h-3 md:w-4 md:h-4" /> 카카오맵
                </button>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 md:gap-4">
                <MapPin className="text-[#002C5F] w-5 h-5 md:w-6 md:h-6 mt-1 shrink-0" />
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <p className="font-bold text-sm md:text-lg break-keep">{address}</p>
                    <button onClick={copyAddress} className="text-[9px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded border border-gray-200">주소복사</button>
                  </div>
                  <p className="text-gray-500 text-[11px] md:text-sm break-keep">2호선 서초역 1번 출구 도보 1분 / 오퓨런스빌딩 7층</p>
                </div>
              </div>
              
              <div className="bg-[#002C5F]/5 p-5 md:p-6 rounded-xl border border-[#002C5F]/10">
                <h4 className="font-bold mb-1 md:mb-2 text-[#002C5F] text-sm md:text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#F5A623] rounded-full"></span> 주차 안내
                </h4>
                <p className="text-[11px] md:text-sm text-gray-700 leading-relaxed font-bold break-keep">
                  오퓨런스빌딩 내 주차장 이용이 가능합니다.
                </p>
                <p className="text-[10px] text-gray-500 mt-1 break-keep">방문 전 연락 주시면 주차 편의를 도와드립니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
