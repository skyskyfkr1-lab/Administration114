
import React, { useState } from 'react';
import { Send, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Real submission logic would go here
  };

  return (
    <div className="pb-24">
      <section className="bg-[#0F4C81] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">상담 신청</h1>
          <p className="text-xl text-gray-300">당신의 고민을 들려주세요. 함께 길을 찾겠습니다.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/5 space-y-10">
            <div>
              <h2 className="text-2xl font-bold font-serif mb-6">활용 가이드</h2>
              <div className="space-y-6">
                {[
                  { step: "1. 자료 확인", text: "본 홈페이지의 주요 성공 사례와 서비스를 확인하세요." },
                  { step: "2. 초기 진단 신청", text: "아래 폼에 처분 상황을 간략히 적어 제출하세요." },
                  { step: "3. 전문가 분석", text: "담당 행정사가 1시간 이내에 전화를 드려 1차 진단을 실시합니다." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#0F4C81]">
                    <h4 className="font-bold mb-2">{item.step}</h4>
                    <p className="text-sm text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4">빠른 문의처</h3>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="bg-[#F5A623]/10 p-3 rounded-full text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-white transition-colors">
                  <Phone />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">전화 상담</p>
                  <p className="font-bold text-lg">02-1234-5678</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="bg-[#FAE100]/20 p-3 rounded-full text-[#3C1E1E] group-hover:bg-[#FAE100] transition-colors">
                  <MessageCircle />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">카카오톡 문의</p>
                  <p className="font-bold text-lg">@행정114_상담</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-blue-600">
                  <Clock />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">상담 가능 시간</p>
                  <p className="font-bold text-lg">24시간 연중무휴</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            {!submitted ? (
              <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 border border-gray-100">
                <h2 className="text-2xl font-bold mb-8">무료 초기 진단 신청</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">성함 / 상호</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0F4C81] outline-none" placeholder="홍길동" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">연락처</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0F4C81] outline-none" placeholder="010-0000-0000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">업종 및 사건 유형</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0F4C81] outline-none">
                      <option>영업정지 (주류제공 등)</option>
                      <option>인허가 문제</option>
                      <option>토지보상 / 행정처분</option>
                      <option>기타 행정 상담</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">상담 내용 요약</label>
                    <textarea rows={5} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#0F4C81] outline-none" placeholder="구체적인 상황을 적어주시면 더 정확한 진단이 가능합니다."></textarea>
                  </div>
                  <div className="flex items-center gap-2">
                    <input required type="checkbox" id="privacy" />
                    <label htmlFor="privacy" className="text-xs text-gray-500">개인정보 수집 및 이용에 동의합니다. (상담용)</label>
                  </div>
                  <button type="submit" className="w-full bg-[#0F4C81] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#0c3c66] transition-all flex items-center justify-center gap-2">
                    신청하기 <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-white shadow-2xl rounded-2xl p-12 text-center border border-gray-100 animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold mb-4">신청이 완료되었습니다!</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  담당 행정사가 내용을 검토 후 신속하게 연락드리겠습니다.<br />
                  급하신 경우 대표번호(02-1234-5678)로 지금 바로 전화 주세요.
                </p>
                <button onClick={() => setSubmitted(false)} className="text-[#0F4C81] font-bold hover:underline">다른 문의 작성하기</button>
              </div>
            )}

            <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="text-[#0F4C81]" /> 오시는 길
              </h3>
              <div className="bg-gray-300 w-full h-64 rounded-xl flex items-center justify-center overflow-hidden">
                <img src="https://picsum.photos/seed/map/1000/600" alt="Map Placeholder" className="w-full h-full object-cover" />
              </div>
              <p className="mt-4 text-sm text-gray-600">서울특별시 중구 서소문로 123, 행정빌딩 11층 (2호선 시청역 9번 출구 인근)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// CheckCircle for success state
const CheckCircle = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

export default Contact;
