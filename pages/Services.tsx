
import React from 'react';
import { SERVICES, IMAGES } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="bg-[#002C5F] py-16 md:py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-black font-serif mb-4 md:mb-6 break-keep">해결 가능 서비스</h1>
          <p className="text-base md:text-xl text-gray-300 break-keep font-medium">변호사와 행정사의 협업으로 가장 효율적인 루트를 설계합니다.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-10 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col border border-gray-100 hover:border-[#F5A623] transition-all hover:-translate-y-1">
              <div className="bg-gray-50 flex items-center justify-center p-8">
                <div className="text-[#002C5F] scale-125">{service.icon}</div>
              </div>
              <div className="p-6 md:p-8 flex-grow">
                <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 break-keep text-[#002C5F]">{service.title}</h3>
                <div className="text-gray-600 mb-6 leading-relaxed break-keep text-sm md:text-base font-medium">
                  {service.description}
                </div>
                <div className="mt-auto">
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-xs md:text-sm text-[#002C5F] font-black">
                      <CheckCircle2 className="w-4 h-4" /> 행정사·변호사 협업 전략
                    </li>
                    <li className="flex items-center gap-2 text-xs md:text-sm text-[#002C5F] font-black">
                      <CheckCircle2 className="w-4 h-4" /> 증거 분석 및 법리 대응
                    </li>
                  </ul>
                  <Link to="/contact" className="text-xs md:text-sm font-black flex items-center hover:translate-x-2 transition-transform text-[#F5A623]">
                    상담 안내 보기 <ArrowRight className="ml-1 w-4 h-4" />
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
