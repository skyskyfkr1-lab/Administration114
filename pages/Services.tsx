
import React from 'react';
import { SERVICES, IMAGES } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="bg-[#0F4C81] py-16 md:py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4 md:mb-6 break-keep">해결 가능 서비스</h1>
          <p className="text-base md:text-xl text-gray-300 break-keep">어떤 행정 문제든 전문가와 상의하십시오.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-10 md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row border border-gray-100 hover:border-[#F5A623] transition-colors">
              <div className="md:w-1/3 bg-gray-50 flex items-center justify-center p-6 md:p-8">
                <div className="text-[#0F4C81] scale-110 md:scale-150">{service.icon}</div>
              </div>
              <div className="md:w-2/3 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 break-keep">{service.title}</h3>
                <div className="text-gray-600 mb-6 leading-relaxed break-keep text-[13px] md:text-base">
                  <p>{service.description}</p>
                  <p className="mt-4 text-[#0F4C81] font-bold">
                    자세한 상담을 통해 <br />
                    주요 분야에 맞춤형 의견서 및 <br className="hidden md:block" />
                    서류작성을 진행해 드립니다.
                  </p>
                </div>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-[11px] md:text-sm text-[#0F4C81] font-medium">
                    <CheckCircle2 className="w-4 h-4" /> 실시간 초기 진단
                  </li>
                  <li className="flex items-center gap-2 text-[11px] md:text-sm text-[#0F4C81] font-medium">
                    <CheckCircle2 className="w-4 h-4" /> 행정 전문 서류 대행
                  </li>
                </ul>
                <Link to="/contact" className="text-xs md:text-sm font-bold flex items-center hover:translate-x-2 transition-transform">
                  상담 안내 보기 <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 해결 프로세스 - 완벽 중앙 정렬 */}
        <div className="mt-20 md:mt-24 bg-[#F8F9FA] rounded-3xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-xl md:text-3xl font-bold font-serif text-center mb-12 md:mb-16 tracking-tight break-keep">해결 프로세스</h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-6 relative max-w-6xl mx-auto">
            {[
              { step: "01", title: "기초 상담", desc: "현재 처분 상황 파악 및 구제 가능성 진단" },
              { step: "02", title: "전략 수립", desc: "행정사+변호사 협업을 통한 맞춤 논리 구성" },
              { step: "03", title: "서류 대응", desc: "의견제출, 집행정지 신청, 행정심판 청구" },
              { step: "04", title: "사후 관리", desc: "처분 결과에 따른 행정소송 등 추가 지원" },
            ].map((p, idx) => (
              <div key={p.step} className="flex-1 flex flex-col items-center text-center relative z-10 group w-full">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#0F4C81] text-white rounded-full flex items-center justify-center font-bold text-lg md:text-2xl mb-4 md:mb-6 shadow-lg group-hover:bg-[#F5A623] transition-colors">
                  {p.step}
                </div>
                <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4 font-serif text-[#1a1a1a] tracking-tight break-keep">{p.title}</h3>
                <p className="text-gray-500 text-[11px] md:text-sm leading-relaxed break-keep max-w-[180px] md:max-w-none">{p.desc}</p>
                
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-[#0F4C81]/30 to-transparent -z-10" />
                )}
                {idx < 3 && (
                  <div className="md:hidden h-10 w-[1px] bg-gray-200 mt-6 -mb-6" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 md:mt-24 text-center">
          <h2 className="text-xl md:text-3xl font-bold font-serif mb-6 md:mb-8 break-keep">관련 자료 확보의 중요성</h2>
          <div className="relative rounded-2xl overflow-hidden max-w-5xl mx-auto shadow-xl group">
            <img 
              src={IMAGES.documents} 
              alt="Professional Administrative Documents" 
              className="w-full h-[250px] md:h-[450px] object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center p-6 md:p-12 text-center">
              <div className="max-w-3xl">
                <p className="text-white text-lg md:text-3xl font-bold font-serif leading-snug mb-4 break-keep">
                  "행정 처분은 정교한 증거 싸움입니다."
                </p>
                <p className="text-gray-300 text-[11px] md:text-lg leading-relaxed break-keep">
                  지금 이 순간에도 당신의 정당한 권리를 증명할 골든타임이 지나가고 있습니다. 전문가와 함께 체계적으로 자료를 수집하고 논리를 구성하십시오.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
