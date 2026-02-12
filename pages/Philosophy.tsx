
import React from 'react';
import { ShieldCheck, ClipboardCheck, Scale } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <div className="pb-16 md:pb-24">
      <section className="bg-[#002C5F] py-12 md:py-24 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-2xl md:text-5xl font-black mb-3 md:mb-6 break-keep tracking-tight">투 트랙(Two-Track) 솔루션</h1>
          <p className="text-xs md:text-xl text-gray-300 break-keep font-medium leading-relaxed">변호사와 행정사의 긴밀한 협업으로<br className="md:hidden" /> 완벽한 구제 전략을 구축합니다.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 mt-10 md:mt-24 max-w-5xl">
        {/* Strategy Points Section */}
        <div className="mb-16 md:mb-32 space-y-10 md:space-y-16">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-lg md:text-3xl font-black text-[#002C5F] mb-3 break-keep px-2">전략의 설계자: 행정 114의 독보적 가치</h2>
            <div className="w-10 md:w-12 h-1 bg-[#F5A623] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-14 items-stretch">
            {/* Strategy Items */}
            {[
              {
                id: 1,
                title: "AI가 읽지 못하는 '법의 맥락' 해석",
                sub: "(Deep Interpretation)",
                desc: "AI는 법령 텍스트 검색에는 능하지만 이면의 의미 파악에는 한계가 있습니다. 행정114는 부칙, 입법 취지, 법령의 연역적 변화를 심층 분석하여 승소의 핵심이 되는 법적 논거를 만들어냅니다."
              },
              {
                id: 2,
                title: "AI가 접근 불가능한 '현장 데이터' 장악",
                sub: "(Deep Fact-finding)",
                desc: "AI는 온라인상의 데이터만 다룰 수 있지만, 행정114는 물리적 실체에 접근합니다. 정보공개청구 및 서류 열람권을 통해 행정기관 내부 정보를 선제적으로 확보하며, 현장 증거를 직접 수집합니다."
              },
              {
                id: 3,
                title: "고비용 구조를 타파한 '가성비 협업'",
                sub: "(Cost-Efficiency)",
                desc: "기존 로펌에서는 변호사의 높은 인건비로 인해 심도 있는 사실조사가 어려웠습니다. 행정114는 전문 행정사가 이를 밀착 수행함으로써, 고객 부담은 낮추고 증거의 질은 높였습니다."
              },
              {
                id: 4,
                title: "단절 없는 승소 전략: '연계협력시스템'",
                sub: "(Cross-Link System)",
                desc: "행정심판 단계의 증거와 전략이 소송 단계에서 단절되지 않고 변호사의 강력한 무기로 전환됩니다. 초기부터 최종 판결까지 일관되고 강력한 대응이 가능합니다."
              }
            ].map((item) => (
              <div key={item.id} className="p-6 md:p-10 bg-white rounded-[24px] md:rounded-3xl border border-gray-100 shadow-sm flex flex-col">
                <h3 className="text-sm md:text-xl font-black mb-3 md:mb-4 text-[#002C5F] leading-tight break-keep">
                  {item.id}. {item.title}<br />
                  <span className="text-[9px] md:text-xs text-gray-400 font-bold mt-1 block uppercase tracking-wider">{item.sub}</span>
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs md:text-base break-keep font-medium flex-grow">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-6 md:p-12 rounded-[24px] md:rounded-[40px] text-center border border-gray-100 mx-2">
            <p className="text-[#002C5F] font-bold text-base md:text-2xl break-keep leading-relaxed max-w-4xl mx-auto">
              AI가 할 수 없는 <span className="text-[#F5A623]">'법의 허점 파악'과 '진실 규명'</span>을 수행하는<br className="hidden md:block" /> 전략의 설계자라는 점에서 단순 법률 서비스 제공자와 명확히 구분됩니다.
            </p>
          </div>
        </div>

        {/* Fact Finding Section */}
        <div className="mb-16 md:mb-32">
          <h2 className="text-lg md:text-4xl font-black mb-10 md:mb-16 text-center break-keep leading-tight text-[#002C5F] px-4">
            치밀한 사실 조사가<br className="md:hidden" /> 완벽한 법리 구축을 만듭니다.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-stretch px-2">
            <div className="bg-white p-6 md:p-12 rounded-[24px] md:rounded-3xl shadow-lg border-t-[6px] md:border-t-[12px] border-[#002C5F] flex flex-col">
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="bg-[#002C5F]/10 p-2.5 md:p-3 rounded-xl md:rounded-2xl shrink-0">
                  <ClipboardCheck className="text-[#002C5F] w-5 h-5 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-2xl font-black">Track 1 행정사</h3>
              </div>
              <div className="text-[#002C5F] font-black mb-3 md:mb-6 text-[9px] md:text-sm uppercase tracking-tighter">사실 조사 및 요건 분석</div>
              <ul className="space-y-3 md:space-y-4 text-gray-600 flex-grow">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#002C5F] rounded-full mt-2 shrink-0"></div>
                  <span className="break-keep font-medium text-xs md:text-lg leading-tight">현장 사실 조사 및 증거 전환</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#002C5F] rounded-full mt-2 shrink-0"></div>
                  <span className="break-keep font-medium text-xs md:text-lg leading-tight">공무원 출신 내부자 관점으로 처분 하자 타격</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 md:p-12 rounded-[24px] md:rounded-3xl shadow-lg border-t-[6px] md:border-t-[12px] border-[#F5A623] flex flex-col">
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="bg-[#F5A623]/10 p-2.5 md:p-3 rounded-xl md:rounded-2xl shrink-0">
                  <Scale className="text-[#F5A623] w-5 h-5 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-2xl font-black">Track 2 변호사</h3>
              </div>
              <div className="text-[#F5A623] font-black mb-3 md:mb-6 text-[9px] md:text-sm uppercase tracking-tighter">법리 구축 및 구제 집행</div>
              <ul className="space-y-3 md:space-y-4 text-gray-600 flex-grow">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#F5A623] rounded-full mt-2 shrink-0"></div>
                  <span className="break-keep font-medium text-xs md:text-lg leading-tight">사실관계에 입각한 고도의 법리적 논리 구성</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#F5A623] rounded-full mt-2 shrink-0"></div>
                  <span className="break-keep font-medium text-xs md:text-lg leading-tight">행정심판 및 행정소송 본안 수행 및 변론</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3 Core Strategies Section */}
        <section className="bg-[#002C5F] text-white p-6 md:p-24 rounded-[24px] md:rounded-[48px] shadow-2xl relative overflow-hidden mx-1 md:mx-0">
          <div className="absolute top-0 right-0 p-4 md:p-8 opacity-5">
            <ShieldCheck className="w-32 h-32 md:w-64 md:h-64" />
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="mb-10 md:mb-20 text-center">
              <h2 className="text-xl md:text-5xl font-black mb-3 md:mb-4 break-keep tracking-tight px-2">행정114만의 3대 승소 전략</h2>
              <p className="text-[#F5A623] font-bold text-sm md:text-2xl break-keep px-4">불가능을 가능으로 바꾸는<br className="md:hidden" /> 연구소의 핵심 철학</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-stretch">
              {[
                { 
                  title: "치밀한 사실관계 재구성", 
                  desc: "단순한 정황 나열이 아닌 사건의 본질을 꿰뚫는 분석으로, 행정청의 처분 근거를 뒤흔들 승소 중심의 사실관계 고리를 만듭니다." 
                },
                { 
                  title: "행정법령의 입체적 분석", 
                  desc: "경직된 해석을 넘어 입법 취지와 최신 판례를 입체적으로 분석합니다. 처분의 위법성과 부당성을 입증할 정교한 논리로 구제의 실마리를 찾습니다." 
                },
                { 
                  title: "최적의 구제 경로 설계", 
                  desc: "불필요한 절차와 비용을 최소화합니다. 의뢰인의 조속한 일상 회복을 최우선으로 하여, 가장 경제적이고 확실한 구제 루트를 전략적으로 설계합니다." 
                }
              ].map((strat, i) => (
                <div key={i} className="flex flex-col h-full bg-white/5 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none">
                  <h4 className="text-base md:text-2xl font-black mb-4 md:mb-6 text-[#F5A623] border-b border-white/20 pb-3 md:pb-4 inline-block w-full min-h-[auto] md:min-h-[5.5rem] flex items-end break-keep">
                    {strat.title}
                  </h4>
                  <p className="text-gray-200 text-xs md:text-lg leading-relaxed break-keep font-medium flex-grow opacity-90">
                    {strat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Philosophy;