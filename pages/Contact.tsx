
import React from 'react';
import { Smartphone, Phone, ChevronRight, Copy, ExternalLink } from 'lucide-react';
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
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-2xl md:text-6xl font-black font-serif mb-4 break-keep tracking-tight">상담 안내 / 오시는 길</h1>
          <p className="text-sm md:text-2xl text-gray-300 break-keep font-medium leading-relaxed">변호사와 행정사가 함께 당신의 문제를 해결합니다.</p>
        </div>
      </section>

      <div className="container mx-auto px-6 mt-10 md:mt-20 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Quick Contact Buttons */}
          <div className="space-y-6 md:space-y-10">
            <h2 className="text-xl md:text-4xl font-black font-serif mb-6 md:mb-12 break-keep tracking-tighter">빠른 문의 방법</h2>
            
            <a href={`tel:${CONTACT.phone.replace(/-/g, '')}`} className="flex items-center gap-4 md:gap-8 p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-50 active:scale-[0.98] transition-all group overflow-hidden">
              <div className="bg-[#F5A623] p-4 md:p-6 rounded-2xl text-white shadow-lg shadow-[#F5A623]/20 shrink-0">
                <Smartphone className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">휴대폰 직통 상담</p>
                <p className="font-black text-lg md:text-3xl text-[#002C5F] tabular-nums truncate">
                  {CONTACT.phone}
                </p>
              </div>
              <ChevronRight className="text-gray-300 shrink-0 w-5 h-5" />
            </a>

            <a href={`tel:${CONTACT.office.replace(/[()-]/g, '')}`} className="flex items-center gap-4 md:gap-8 p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-50 active:scale-[0.98] transition-all group overflow-hidden">
              <div className="bg-[#002C5F] p-4 md:p-6 rounded-2xl text-white shadow-lg shadow-[#002C5F]/20 shrink-0">
                <Phone className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">사무실 대표 번호</p>
                <p className="font-black text-lg md:text-3xl text-[#002C5F] tabular-nums truncate">
                  {CONTACT.office}
                </p>
              </div>
              <ChevronRight className="text-gray-300 shrink-0 w-5 h-5" />
            </a>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <p className="text-xs font-bold text-[#002C5F] mb-2">운영 시간</p>
              <p className="text-sm md:text-base font-medium text-gray-600 leading-relaxed">
                전화상담 오전 9시 ~ 오후 9시 (365일 연중무휴)
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-6 md:space-y-10">
            <h2 className="text-xl md:text-4xl font-black font-serif mb-6 md:mb-12 break-keep tracking-tighter">찾아오시는 길</h2>
            <div className="bg-gray-100 w-full h-[300px] md:h-[400px] rounded-[32px] overflow-hidden shadow-xl relative border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.174154817478!2d127.0061324!3d37.4920257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca169f9113e61%3A0xc665b6328a6f4e66!2z7ISc7Jq47Yq567OE7IucIOyEnOyogOq1rCDshJzstIjrjIDroZwgMjU0!5e0!3m2!1sko!2skr!4v1715800000000!5m2!1sko!2skr" 
                className="w-full h-full border-0" 
                allowFullScreen={true} 
                loading="lazy" 
                title="행정 114 위치"
              ></iframe>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p className="font-bold text-[#002C5F] text-sm md:text-lg mb-4 break-keep leading-snug">
                {address} <br />
                <span className="text-gray-400 font-medium text-xs md:text-base">(교대역 9번 출구 인근, 오퓨런스빌딩 7층)</span>
              </p>
              <div className="flex gap-2">
                <button 
                  onClick={copyAddress}
                  className="flex-1 py-3 px-4 bg-gray-50 text-[#002C5F] rounded-xl font-bold text-xs md:text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  <Copy className="w-4 h-4" /> 주소 복사
                </button>
                <a 
                  href="https://map.kakao.com/?q=%EC%84%9C%EC%B4%88%EB%8C%80%EB%A1%9C+254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-[#002C5F] text-white rounded-xl font-bold text-xs md:text-sm flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                  <ExternalLink className="w-4 h-4" /> 지도 앱 열기
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
