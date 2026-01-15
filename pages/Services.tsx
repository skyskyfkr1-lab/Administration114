
import React from 'react';
import { SERVICES, IMAGES } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="bg-[#0F4C81] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">해결 가능 서비스</h1>
          <p className="text-xl text-gray-300">어떤 행정 문제든 전문가와 상의하십시오.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row border border-gray-100 hover:border-[#F5A623] transition-colors">
              <div className="md:w-1/3 bg-gray-50 flex items-center justify-center p-8">
                <div className="text-[#0F4C81] scale-150">{service.icon}</div>
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                  자세한 상담을 통해 의뢰인의 특수한 상황에 맞는 맞춤형 전략을 수립해 드립니다.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-sm text-[#0F4C81] font-medium">
                    <CheckCircle2 className="w-4 h-4" /> 실시간 초기 진단
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#0F4C81] font-medium">
                    <CheckCircle2 className="w-4 h-4" /> 맞춤형 소명서 작성
                  </li>
                </ul>
                <Link to="/contact" className="text-sm font-bold flex items-center hover:translate-x-2 transition-transform">
                  상담 안내 보기 <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 해결 프로세스 - 중앙 정렬 및 폰트 개선 */}
        <div className="mt-24 bg-[#F8F9FA] rounded-3xl p-12 border border-gray-100">
          <h2 className="text-3xl font-bold font-serif text-center mb-16 tracking-tight">해결 프로세스</h2>
          <div className="flex flex-col md:flex-row justify-center items-start gap-12 relative max-w-6xl mx-auto">
            {[
              { step: "01", title: "기초 상담", desc: "현재 처분 상황 파악 및 구제 가능성 진단" },
              { step: "02", title: "전략 수립", desc: "행정사+변호사 협업을 통한 맞춤 논리 구성" },
              { step: "03", title: "서류 대응", desc: "의견제출, 집행정지 신청, 행정심판 청구" },
              { step: "04", title: "사후 관리", desc: "처분 결과에 따른 행정소송 등 추가 지원" },
            ].map((p, idx) => (
              <div key={p.step} className="flex-1 flex flex-col items-center text-center relative z-10 group">
                <div className="w-16 h-16 bg-[#0F4C81] text-white rounded-full flex items-center justify-center font-bold text-2xl mb-6 shadow-xl group-hover:bg-[#F5A623] transition-colors duration-300">
                  {p.step}
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif text-[#1a1a1a] tracking-tight">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">{p.desc}</p>
                
                {/* 연결선 재배치 */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-[#0F4C81]/30 to-transparent -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold font-serif mb-8">관련 자료 확보의 중요성</h2>
          <div className="relative rounded-3xl overflow-hidden max-w-5xl mx-auto shadow-2xl group">
            <img 
              src={IMAGES.documents} 
              alt="Professional Administrative Documents" 
              className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center p-12">
              <div className="max-w-3xl">
                <p className="text-white text-2xl md:text-3xl font-bold font-serif leading-snug drop-shadow-lg mb-6">
                  "행정 처분은 정교한 증거 싸움입니다."
                </p>
                <p className="text-gray-200 text-lg leading-relaxed md:px-12">
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
