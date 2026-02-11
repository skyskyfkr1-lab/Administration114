
import React from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pb-16 md:pb-24">
      <section className="bg-[#002C5F] py-12 md:py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-2xl md:text-5xl font-black font-serif mb-4 break-keep">해결 가능 서비스</h1>
          <p className="text-sm md:text-xl text-gray-300 break-keep font-medium">변호사와 행정사의 협업으로<br className="md:hidden" /> 가장 효율적인 루트를 설계합니다.</p>
        </div>
      </section>

      <div className="container mx-auto px-6 mt-8 md:mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-[24px] overflow-hidden shadow-sm flex flex-col border border-gray-100 hover:border-[#F5A623] transition-all">
              <div className="bg-gray-50 flex items-center justify-center p-6 md:p-10">
                <div className="text-[#002C5F] scale-110 md:scale-125">{service.icon}</div>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <h3 className="text-lg md:text-2xl font-black mb-3 break-keep text-[#002C5F]">{service.title}</h3>
                <div className="text-gray-600 mb-6 leading-relaxed break-keep text-sm md:text-base font-medium flex-grow">
                  {service.description}
                </div>
                <div className="mt-auto">
                  <div className="space-y-2 mb-6 border-t border-gray-50 pt-4">
                    <div className="flex items-center gap-2 text-[11px] md:text-sm text-[#002C5F] font-bold">
                      <CheckCircle2 className="w-4 h-4 text-[#F5A623]" /> 행정사·변호사 협업 전략
                    </div>
                    <div className="flex items-center gap-2 text-[11px] md:text-sm text-[#002C5F] font-bold">
                      <CheckCircle2 className="w-4 h-4 text-[#F5A623]" /> 증거 분석 및 법리 대응
                    </div>
                  </div>
                  <Link to="/contact" className="text-sm font-black flex items-center justify-between py-3 px-4 bg-gray-50 rounded-xl group hover:bg-[#F5A623] hover:text-white transition-all text-[#F5A623]">
                    상담 안내 보기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
