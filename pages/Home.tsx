
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';
import { IMAGES, SERVICES, CONTACT } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center bg-[#F4F7FA]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#0F4C81] text-white px-4 py-1 rounded-full text-sm font-bold mb-6">
              소상공인·자영업자 행정 구제 전문
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#0F4C81] font-serif leading-tight mb-6">
              행정 문제, <br />
              <span className="text-[#F5A623]">길을 알려드립니다.</span>
            </h1>
            <p className="text-xl text-[#4A5568] mb-10 leading-relaxed font-medium">
              영업정지, 인허가 취소... 혼자 고민하지 마세요.<br />
              30년 현장 경험의 행정사와 변호사가 당신의 편에서 싸웁니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-[#F5A623] text-white px-10 py-4 rounded-lg font-bold text-lg flex items-center justify-center hover:bg-[#e09512] transition-all shadow-lg hover:shadow-xl">
                상담 신청하기 <ChevronRight className="ml-2" />
              </Link>
              <Link to="/services" className="bg-white border border-[#0F4C81]/20 text-[#0F4C81] px-8 py-4 rounded-lg font-bold text-lg text-center hover:bg-gray-50 transition-all">
                해결 가능 업무 확인
              </Link>
            </div>
          </div>
        </div>
        {/* Subtle Decorative Background Element */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none hidden lg:block">
           <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
             <circle cx="300" cy="300" r="300" fill="#0F4C81" />
           </svg>
        </div>
      </section>

      {/* Problem Agitation */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img 
                src={IMAGES.painPoint} 
                alt="고민에 빠진 소상공인 사장님" 
                className="rounded-2xl shadow-2xl w-full h-[450px] object-cover" 
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8">
                지금 대응하지 않으면<br />
                <span className="text-red-600">상황은 더 불리해집니다.</span>
              </h2>
              <div className="space-y-6">
                {[
                  "갑작스러운 영업정지 통지서에 당황하고 계신가요?",
                  "인허가 신청이 거부되어 사업 계획이 차질을 빚고 있나요?",
                  "청문회나 의견제출 기한이 얼마 남지 않았나요?",
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <AlertTriangle className="text-red-500 w-6 h-6 mt-1 shrink-0" />
                    <p className="text-lg text-[#666666]">{text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-gray-500">
                행정 처분은 '타이밍'이 생명입니다. 초기 대응 단계에서의 작은 실수가 회복 불가능한 결과로 이어질 수 있습니다. 행정 114가 최적의 대응 시나리오를 설계합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-24 bg-[#0F4C81] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
            시작할 때 <span className="text-[#F5A623]">끝을 생각하는</span> 행정 114
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-16">
            우리는 단순히 서류를 대신 써주는 곳이 아닙니다. 처분 취소라는 목표를 위해 처음부터 마지막 행정 소송까지 내다보고 전략을 짭니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "30년 현장 노하우", desc: "공무원 출신 행정사의 내부 프로세스 이해", icon: <Zap className="w-10 h-10 text-[#F5A623]" /> },
              { title: "협업 시너지", desc: "행정사와 변호사의 원스톱 실시간 대응", icon: <ShieldCheck className="w-10 h-10 text-[#F5A623]" /> },
              { title: "높은 인용률", desc: "사례별 맞춤 논리 구성을 통한 실질적 구제", icon: <Zap className="w-10 h-10 text-[#F5A623]" /> },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 p-10 rounded-xl border border-white/10 hover:border-[#F5A623]/50 transition-all group">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-bold font-serif">주요 해결 분야</h2>
              <p className="text-gray-500 mt-2">전문가가 직접 발로 뛰며 해결합니다.</p>
            </div>
            <Link to="/services" className="text-[#0F4C81] font-bold flex items-center hover:underline">
              전체 서비스 보기 <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-[#F5A623]">
                <div className="text-[#0F4C81] mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0F4C81] to-[#1a1a1a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-8">
            혼자 고민하지 마세요.<br />
            <span className="text-[#F5A623]">해결책은 반드시 있습니다.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            지금 전화주시면 바로 답변해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-[#F5A623] text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-lg">
              상담 신청하기
            </Link>
            <div className="flex items-center justify-center gap-4 text-2xl font-bold">
              <PhoneIcon className="w-8 h-8 text-[#F5A623]" /> {CONTACT.phone}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

export default Home;
