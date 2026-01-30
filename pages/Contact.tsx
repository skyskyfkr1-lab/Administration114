
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
      <section className="bg-[#002C5F] py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-6xl font-black font-serif mb-6 break-keep tracking-tight">상담 안내 / 오시는 길</h1>
          <p className="text-base md:text-2xl text-gray-300 break-keep font-medium">당신의 고민을 들려주세요. 직접 전화를 주시면 가장 빠릅니다.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-12 md:mt-20 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Contact Methods */}
          <div className="space-y-8 md:space-y-10">
            <h2 className="text-2xl md:text-4xl font-black font-serif mb-8 md:mb-12 break-keep tracking-tighter">빠른 문의 방법</h2>
            
            <a href={`tel:${CONTACT.phone.replace(/-/g, '')}`} className="flex items-center gap-4 md:gap-8 p-6 md:p-10 bg-white rounded-3xl shadow-xl border border-gray-100 hover:border-[#F5A623] transition-all group overflow-hidden">
              <div className="bg-[#F5A623]/10 p-4 md:p-6 rounded-3xl text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-white transition-colors shrink-0">
                <Smartphone className="w-6 h-6 md:w-10 md:h-10" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">휴대폰 다이렉트 상담</p>
                <p className="font-black text-xl md:text-3xl text-[#002C5F] whitespace-nowrap">
                  {CONTACT.phone}
                </p>
              </div>
              <ChevronRight className="text-gray-300 group-hover:text-[#F5A623] transition-colors shrink-0 w-6 h-6" />
            </a>

            <a href={`tel:${CONTACT.office.replace(/[()-]/g, '')}`} className="flex items-center gap-4 md:gap-8 p-6 md:p-10 bg-white rounded-3xl shadow-xl border border-gray-100 hover:border-[#002C5F] transition-all group overflow-hidden">
              <div className="bg-[#002C5F]/10 p-4 md:p-6 rounded-3xl text-[#002C5F] group-hover:bg-[#002C5F] group-hover:text-white transition-colors shrink-0">
                <Phone className="w-6 h-6 md:w-10 md:h-10" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">사무실 대표 번호</p>
                <p className="font-black text-xl md:text-3xl text-[#002C5F] whitespace-nowrap">
                  {CONTACT.office}
                </p>
              </div>
              <ChevronRight className="text-gray-300 group-hover:text-[#002C5F] transition-colors shrink-0 w-6 h-6" />
            </a>

            <div className="p-8 md:p-10 bg-gray-50 rounded-3xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-4 mb-5">
                <Clock className="text-[#002C5F] w-5 h-5 md:w-7 md:h-7" />
                <h3 className="font-black text-lg md:text-2xl">상담 가능 시간</h3>
              </div>
              <div className="text-gray-600 leading-relaxed break-keep text-sm md:text-lg font-medium">
                <p className="font-black text-[#002C5F] mb-3 text-xl">{CONTACT.hours}</p>
                <p>행정 114는 <span className="font-black text-[#002C5F] underline underline-offset-4 decoration-[#F5A623]">고객분들의 상황을 고려한</span> 상담체계를 유지하고 있습니다. <br className="hidden md:block" />급박한 행정 처분에도 당황하지 마시고 언제든 연락 주십시오.</p>
              </div>
            </div>
          </div>

          {/* Location & Info */}
          <div className="space-y-8 md:space-y-10">
            <h2 className="text-2xl md:text-4xl font-black font-serif mb-8 md:mb-12 break-keep tracking-tighter">찾아오시는 길</h2>
            <div className="relative">
              <div className="bg-gray-100 w-full h-[350px] md:h-[500px] rounded-[40px] overflow-hidden shadow-2xl relative border-4 border-[#002C5F]/5">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.174154817478!2d127.0061324!3d37.4920257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca169f9113e61%3A0xc665b6328a6f4e66!2z7ISc7Jq47Yq567OE7IucIOyEnOyogOq1rCDshJzstIjrjIDroZwgMjU0!5e0!3m2!1sko!2skr!4v1715800000000!5m2!1sko!2skr" 
                  className="w-full h-full border-0" 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="행정 114 사무실 위치"
                ></iframe>
                
                <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center">
                  <div className="mb-20 flex flex-col items-center">
                    <div className="bg-[#002C5F] text-white px-4 py-2 rounded-xl text-xs md:text-sm font-black shadow-2xl border-2 border-white mb-2">
                      오퓨런스빌딩 7층 (행정 114)
                    </div>
                    <ArrowBigDown className="text-[#F5A623] fill-[#F5A623] w-10 h-10 md:w-16 md:h-16 animate-bounce" />
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-6">
                <button 
                  onClick={() => window.open(`https://map.naver.com/v5/search/${encodeURIComponent(address)}`)}
                  className="flex-1 bg-[#03C75A] text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 text-sm md:text-lg hover:opacity-90 transition-opacity"
                >
                  <MapIcon className="w-5 h-5" /> 네이버 지도
                </button>
                <button 
                  onClick={() => window.open(`https://map.kakao.com/link/search/${encodeURIComponent(address)}`)}
                  className="flex-1 bg-[#FAE100] text-[#3C1E1E] py-4 rounded-2xl font-black flex items-center justify-center gap-3 text-sm md:text-lg hover:opacity-90 transition-opacity"
                >
                  <Navigation className="w-5 h-5" /> 카카오맵
                </button>
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-5">
                <MapPin className="text-[#002C5F] w-8 h-8 mt-1 shrink-0" />
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <p className="font-black text-xl md:text-2xl break-keep">{address}</p>
                    <button onClick={copyAddress} className="text-xs font-bold bg-gray-100 text-gray-500 px-3 py-1 rounded-lg border border-gray-200 hover:bg-gray-200 transition-colors">주소복사</button>
                  </div>
                  <p className="text-gray-500 text-sm md:text-lg font-medium break-keep">2호선 서초역 1번 출구 도보 1분 / 오퓨런스빌딩 7층</p>
                </div>
              </div>
              
              <div className="bg-[#002C5F]/5 p-8 rounded-3xl border-2 border-[#002C5F]/10">
                <h4 className="font-black mb-3 text-[#002C5F] text-lg md:text-xl flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F5A623] rounded-full"></span> 주차 안내
                </h4>
                <p className="text-sm md:text-lg text-gray-700 leading-relaxed font-bold break-keep">
                  오퓨런스빌딩 내 대형 주차장 이용이 가능합니다.
                </p>
                <p className="text-xs md:text-sm text-gray-500 mt-2 break-keep">방문 전 상담 전화 시 차량번호를 알려주시면 주차 지원을 도와드립니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
