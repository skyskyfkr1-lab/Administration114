
import React from 'react';
import { IMAGES } from '../constants';
import { Quote, Microscope, Scale, ShieldCheck, ClipboardCheck, Zap } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold font-serif text-[#002C5F] mb-6">투 트랙(Two-Track) 솔루션</h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium">단순한 위로가 아닌, 회복을 위한 실질적인 법률적 대안</p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-5xl">
        <div className="mb-24">
          <h2 className="text-2xl md:text-4xl font-black font-serif mb-12 text-center break-keep leading-tight">
            전문 자격사간 유기적 협업 체계:<br />
            <span className="text-[#F5A623]">치밀한 사실 조사가 완벽한 법리 구축을 만듭니다.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border-t-[12px] border-[#002C5F] flex flex-col hover:-translate-y-2 transition-transform">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#002C5F]/10 p-3 rounded-2xl">
                  <ClipboardCheck className="text-[#002C5F] w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black">Track 1: 행정사</h3>
              </div>
              <div className="text-[#002C5F] font-bold mb-4 text-sm uppercase tracking-tighter">역할: 사실 조사 및 요건 분석</div>
              <ul className="space-y-5 text-gray-600 text-base md:text-lg mb-10 flex-grow">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#002C5F] rounded-full mt-2.5 shrink-0"></div>
                  <span className="break-keep">현장 사실 조사 및 증거 전환 (Raw Data to Evidence)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#002C5F] rounded-full mt-2.5 shrink-0"></div>
                  <span className="break-keep">공무원 출신 내부자 관점으로 행정청의 처분 하자(Defect) 타격</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#002C5F] rounded-full mt-2.5 shrink-0"></div>
                  <span className="break-keep">청문 및 의견제출 단계에서의 절차적 방어권 확보</span>
                </li>
              </ul>
              <div className="pt-6 border-t border-gray-100 text-gray-400 text-sm font-medium italic">
                "정확한 기초 데이터가 확보되어야 승소의 논리가 완성됩니다."
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border-t-[12px] border-[#F5A623] flex flex-col hover:-translate-y-2 transition-transform">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#F5A623]/10 p-3 rounded-2xl">
                  <Scale className="text-[#F5A623] w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black">Track 2: 변호사</h3>
              </div>
              <div className="text-[#F5A623] font-bold mb-4 text-sm uppercase tracking-tighter">역할: 법리 구축 및 구제 집행</div>
              <ul className="space-y-5 text-gray-600 text-base md:text-lg mb-10 flex-grow">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#F5A623] rounded-full mt-2.5 shrink-0"></div>
                  <span className="break-keep">사실관계에 입각한 고도의 법리적 논리 구성</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#F5A623] rounded-full mt-2.5 shrink-0"></div>
                  <span className="break-keep">행정심판 및 행정소송 본안 수행 (Remedy Execution)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#F5A623] rounded-full mt-2.5 shrink-0"></div>
                  <span className="break-keep">처분 취소를 위한 법리적 처방 및 강력한 변론</span>
                </li>
              </ul>
              <div className="pt-6 border-t border-gray-100 text-gray-400 text-sm font-medium italic">
                "검증된 사실(Fact) 위에 최상의 승소 논리를 집도합니다."
              </div>
            </div>
          </div>
        </div>

        {/* Strategies */}
        <div className="bg-[#002C5F] p-8 md:p-16 rounded-[40px] relative overflow-hidden mb-24 text-white">
          <Zap className="absolute top-10 right-10 w-24 h-24 text-white/5" />
          <h3 className="text-2xl md:text-4xl font-black font-serif mb-12 relative z-10 break-keep">행정 114만의 3대 승소 전략</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {[
              { num: "01", title: "경계선 방어", desc: "행정조사와 형사수사의 모호한 경계에서 영장 없는 강제수사를 식별하고 차단합니다." },
              { num: "02", title: "증거 전환", desc: "장부, CCTV 등 현장의 날것의 정보를 법적 증거로 전환하여 재량권 남용을 입증합니다." },
              { num: "03", title: "위법성 패키지", desc: "공무원 내부 프로세스와 변호사의 법리적 처방이 결합된 원스톱 위닝 패키지를 제공합니다." }
            ].map((item) => (
              <div key={item.num} className="group">
                <span className="text-5xl font-black text-white/10 group-hover:text-[#F5A623]/40 transition-colors">{item.num}</span>
                <h4 className="text-xl font-bold mt-4 mb-4 break-keep">{item.title}</h4>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed break-keep">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl md:text-3xl font-black font-serif mb-8 break-keep">고객의 실패는 당신의 잘못이 아닙니다.</h3>
          <p className="text-gray-600 text-base md:text-xl max-w-3xl mx-auto mb-12 break-keep font-medium leading-relaxed">
            지금껏 실패를 경험하셨다면 그것은 '정보의 비대칭성'과 '잘못된 접근 방식' 때문입니다. <br className="hidden md:block" />
            행정 114는 고객의 <span className="text-[#002C5F] font-black underline decoration-[#F5A623] underline-offset-4">잃어버린 일상과 경제적 이익</span>을 되찾아드리는 가치 창출 기업입니다.
          </p>
          <img src={IMAGES.handshake} alt="Handshake" className="rounded-3xl shadow-2xl mx-auto max-w-4xl w-full object-cover h-[300px] md:h-[450px]" />
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
