
import React from 'react';
import { Phone, MapPin, MessageCircle, Clock, ChevronRight, Map as MapIcon, Navigation, ArrowBigDown, Smartphone, PhoneCall } from 'lucide-react';
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
          <p className="text-base md:text-2xl text-gray-300 break-keep font-medium">변호사와 행정사가 함께 당신의 문제를 해결합니다.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-12 md:mt-20 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="space-y-8 md:space-y-10">
            <h2 className="text-2xl md:text-4xl font-black font-serif mb-8 md:mb-12 break-keep tracking-tighter">빠른 문의 방법</h2>
            
            <a href={`tel:${CONTACT.phone.replace(/-/g, '')}`} className="flex items-center gap-4 md:gap-8 p-6 md:p-10 bg-white rounded-3xl shadow-xl border border-gray-100 hover:border-[#F5A623] transition-all group overflow-hidden">
              <div className="bg-[#F5A623]/10 p-4 md:p-6 rounded-3xl text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-white transition-colors shrink-0">
                <Smartphone className="w-6 h-6 md:w-10 md:h-10" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">휴대폰 직통 상담</p>
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
          </div>

          <div className="space-y-8 md:space-y-10">
            <h2 className="text-2xl md:text-4xl font-black font-serif mb-8 md:mb-12 break-keep tracking-tighter">찾아오시는 길</h2>
            <div className="bg-gray-100 w-full h-[350px] md:h-[450px] rounded-[40px] overflow-hidden shadow-2xl relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.174154817478!2d127.0061324!3d37.4920257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca169f9113e61%3A0xc665b6328a6f4e66!2z7ISc7Jq47Yq567OE7IucIOyEnOyogOq1rCDshJzstIjrjIDroZwgMjU0!5e0!3m2!1sko!2skr!4v1715800000000!5m2!1sko!2skr" 
                className="w-full h-full border-0" 
                allowFullScreen={true} 
                loading="lazy" 
                title="행정 114 위치"
              ></iframe>
            </div>
            <p className="font-bold text-gray-700">{address} (오퓨런스빌딩 7층)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
