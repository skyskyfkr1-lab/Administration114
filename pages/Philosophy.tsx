
import React from 'react';
import { IMAGES } from '../constants';
import { Quote } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-[#0F4C81] mb-6">브랜드 철학</h1>
          <p className="text-xl text-gray-600">왜 '행정 114'를 선택해야 하는가?</p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold font-serif mb-8 leading-tight">
              "시작할 때<br />
              끝을 생각하자"
            </h2>
            <div className="space-y-6 text-lg text-[#666666] leading-relaxed">
              <p>
                많은 분이 행정 처분을 받으면 단순히 '행정 심판 서류' 하나만 잘 쓰면 된다고 생각합니다. 하지만 저희의 생각은 다릅니다.
              </p>
              <p>
                행정 처분은 법률적인 판단뿐만 아니라 '행정 실무적'인 판단이 함께 작용하는 영역입니다. 공무원이 어떤 포인트에서 처분을 결정하는지, 내부 지침은 무엇인지 정확히 알아야 합니다.
              </p>
              <p className="font-bold text-[#0F4C81]">
                우리는 의뢰인이 처한 현재의 상황에서 시작하여, 행정 심판을 넘어 소송의 결과까지 미리 내다보고 전략을 수립합니다.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={IMAGES.expertise} alt="Expertise" className="rounded-2xl shadow-xl" />
          </div>
        </div>

        <div className="bg-[#F8F9FA] p-12 rounded-3xl relative">
          <Quote className="absolute top-10 right-10 w-16 h-16 text-gray-200" />
          <h3 className="text-2xl font-bold font-serif mb-10">행정 114의 3대 핵심 원칙</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { num: "01", title: "현장 중심", desc: "책상이 아닌 현장에서 답을 찾습니다. 직접 발로 뛰어 증거를 수집하고 정황을 파악합니다." },
              { num: "02", title: "철저한 비밀보장", desc: "의뢰인의 모든 정보와 상담 내용은 법적인 근거 하에 철저하게 비밀로 관리됩니다." },
              { num: "03", title: "결과 책임제", desc: "단순 대행이 아닌, 실질적인 구제 결과로 증명하기 위해 최선의 논리를 개발합니다." }
            ].map((item) => (
              <div key={item.num}>
                <span className="text-4xl font-bold text-[#F5A623]/20">{item.num}</span>
                <h4 className="text-xl font-bold mt-2 mb-4">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold font-serif mb-8">소상공인이 웃을 수 있는 그날까지</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            행정 114는 거창한 법률 용어로 의뢰인을 현혹하지 않습니다. 가장 현실적이고, 가장 빠른 길을 제시하는 실무 중심의 파트너가 되겠습니다.
          </p>
          <img src={IMAGES.handshake} alt="Handshake" className="rounded-2xl shadow-lg mx-auto max-w-3xl w-full" />
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
