
import React from 'react';
import { ShieldCheck, ClipboardCheck, Scale, Target, Lightbulb, TrendingUp } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="bg-[#002C5F] py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-black font-serif mb-6 break-keep tracking-tight">투 트랙(Two-Track) 솔루션</h1>
          <p className="text-base md:text-xl text-gray-300 break-keep font-medium">치밀한 사실조사 위에서만 완벽한 법리 구축이 가능합니다.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 md:mt-24 max-w-5xl">
        {/* Strategy Points Section */}
        <div className="mb-32 space-y-16">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-black font-serif text-[#002C5F] mb-4">전략의 설계자: 행정 114의 독보적 가치</h2>
            <div className="w-16 h-1 bg-[#F5A623] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-stretch">
            {/* Strategy 1 */}
            <div className="p-8 md:p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <h3 className="text-lg md:text-xl font-black mb-6 text-[#002C5F] leading-tight break-keep">
                1. AI가 읽지 못하는 '법의 맥락' 해석<br />
                <span className="text-[10px] md:text-xs text-gray-400 font-bold mt-1 block">(Deep Interpretation)</span>
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base break-keep font-medium flex-grow">
                AI는 법령 텍스트를 검색하는 데는 뛰어나지만, 그 이면의 의미를 파악하는 데는 한계가 있습니다. 행정114는 AI가 기술적으로 분석하기 어려운 부칙(Addenda), 입법 취지, 법령의 연역적 변화를 심층 분석하여 승소의 핵심이 되는 정교한 법적 논거를 만들어냅니다.
              </p>
            </div>

            {/* Strategy 2 */}
            <div className="p-8 md:p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <h3 className="text-lg md:text-xl font-black mb-6 text-[#002C5F] leading-tight break-keep">
                2. AI가 접근 불가능한 '현장 및 내부 데이터' 장악<br />
                <span className="text-[10px] md:text-xs text-gray-400 font-bold mt-1 block">(Deep Fact-finding)</span>
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base break-keep font-medium flex-grow">
                AI는 온라인상의 데이터만 다룰 수 있지만, 행정114는 물리적 실체와 비공개 정보에 접근합니다. 정보공개청구 및 서류 열람권을 통해 행정기관 내부의 핵심 정보를 선제적으로 확보하며, 현장에서만 얻을 수 있는 증거를 직접 수집합니다.
              </p>
            </div>

            {/* Strategy 3 */}
            <div className="p-8 md:p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <h3 className="text-lg md:text-xl font-black mb-6 text-[#002C5F] leading-tight break-keep">
                3. 고비용 구조를 타파한 '가성비 중심의 협업'<br />
                <span className="text-[10px] md:text-xs text-gray-400 font-bold mt-1 block">(Cost-Efficiency)</span>
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base break-keep font-medium flex-grow">
                기존 로펌 시스템에서는 변호사의 높은 인건비로 인해 심도 있는 사실조사를 수행하기 어려웠습니다. 행정114는 이 영역을 전문 행정사가 밀착 수행함으로써, 고객의 비용 부담은 낮추면서도 증거의 질은 비약적으로 높여 결과적으로 승률을 높입니다.
              </p>
            </div>

            {/* Strategy 4 */}
            <div className="p-8 md:p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <h3 className="text-lg md:text-xl font-black mb-6 text-[#002C5F] leading-tight break-keep">
                4. 단절 없는 승소 전략: '연계협력시스템'<br />
                <span className="text-[10px] md:text-xs text-gray-400 font-bold mt-1 block">(Cross-Link System)</span>
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base break-keep font-medium flex-grow">
                행정심판 단계에서 확보된 증거와 전략이 소송 단계에서 단절되지 않고 곧바로 변호사의 강력한 무기로 전환됩니다. 사건 초기부터 대법원 판결까지 일관되고 강력한 대응을 가능하게 합니다.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-10 rounded-[40px] text-center border border-gray-100">
            <p className="text-[#002C5F] font-bold text-lg md:text-2xl break-keep leading-relaxed max-w-3xl mx-auto">
              AI가 할 수 없는 <span className="text-[#F5A623]">'법의 허점 파악'과 '진실 규명'</span>을 수행합니다.
            </p>
          </div>
        </div>

        {/* Fact Finding Section */}
        <div className="mb-32">
          <h2 className="text-2xl md:text-4xl font-black font-serif mb-12 text-center break-keep leading-tight text-[#002C5F]">
            치밀한 사실 조사가 완벽한 법리 구축을 만듭니다.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border-t-[12px] border-[#002C5F] flex flex-col hover:-translate-y-2 transition-transform">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#002C5F]/10 p-3 rounded-2xl">
                  <ClipboardCheck className="text-[#002C5F] w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black">Track 1 행정사</h3>
              </div>
              <div className="text-[#002C5F] font-bold mb-6 text-sm uppercase tracking-tighter">역할 사실 조사 및 요건 분석</div>
              <ul className="space-y-5 text-gray-600 flex-grow">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#002C5F] rounded-full mt-2 shrink-0"></div>
                  <span className="break-keep font-medium text-sm md:text-lg text-left">현장 사실 조사 및 증거 전환</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#002C5F] rounded-full mt-2 shrink-0"></div>
                  <span className="break-keep font-medium text-sm md:text-lg text-left">공무원 출신 내부자 관점으로 행정청의 처분 하자 타격</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border-t-[12px] border-[#F5A623] flex flex-col hover:-translate-y-2 transition-transform">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#F5A623]/10 p-3 rounded-2xl">
                  <Scale className="text-[#F5A623] w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black">Track 2 변호사</h3>
              </div>
              <div className="text-[#F5A623] font-bold mb-6 text-sm uppercase tracking-tighter">역할 법리 구축 및 구제 집행</div>
              <ul className="space-y-5 text-gray-600 flex-grow">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#F5A623] rounded-full mt-2 shrink-0"></div>
                  <span className="break-keep font-medium text-sm md:text-lg text-left">사실관계에 입각한 고도의 법리적 논리 구성</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#F5A623] rounded-full mt-2 shrink-0"></div>
                  <span className="break-keep font-medium text-sm md:text-lg text-left">행정심판 및 행정소송 본안 수행 및 변론</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3 Core Strategies Section */}
        <section className="bg-[#002C5F] text-white p-12 md:p-24 rounded-[48px] shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <ShieldCheck className="w-64 h-64" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="mb-20 text-center">
              <h2 className="text-3xl md:text-5xl font-black font-serif mb-6 break-keep tracking-tight">행정114만의 3대 승소 전략</h2>
              <p className="text-[#F5A623] font-bold text-xl md:text-2xl">불가능을 가능으로 바꾸는 연구소의 핵심 철학</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              <div className="text-left">
                <h4 className="text-xl md:text-2xl font-black mb-6 text-[#F5A623] border-b border-white/20 pb-4 inline-block w-full">사실관계 재구성</h4>
                <p className="text-gray-200 text-base md:text-lg leading-relaxed break-keep font-medium">
                  단순한 나열이 아닌, 사건의 맥락을 승소에 유리하게 재해석하여 행정청이 반박할 수 없는 사실의 고리를 만듭니다.
                </p>
              </div>

              <div className="text-left">
                <h4 className="text-xl md:text-2xl font-black mb-6 text-[#F5A623] border-b border-white/20 pb-4 inline-block w-full">법령의 유연한 해석</h4>
                <p className="text-gray-200 text-base md:text-lg leading-relaxed break-keep font-medium">
                  고정관념에 갇힌 법령 해석을 거부하고, 입법 취지와 예외 조항을 날카롭게 파고들어 구제의 구멍을 찾아냅니다.
                </p>
              </div>

              <div className="text-left">
                <h4 className="text-xl md:text-2xl font-black mb-6 text-[#F5A623] border-b border-white/20 pb-4 inline-block w-full">고효율 구제 솔루션</h4>
                <p className="text-gray-200 text-base md:text-lg leading-relaxed break-keep font-medium">
                  불필요한 절차를 생략하고, 의뢰인이 가장 빠르고 경제적으로 일상을 회복할 수 있는 최적의 구제 루트를 설계합니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Philosophy;
