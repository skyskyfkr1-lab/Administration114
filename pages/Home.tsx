import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, CheckCircle2, Phone, Smartphone, MessageSquare, Mail, Calendar, ArrowRight } from 'lucide-react';
import { CONTACT, IMAGES } from '../constants';

const Home: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(IMAGES.representative);
  const [retryCount, setRetryCount] = useState(0);
  const [lawyerOhImg, setLawyerOhImg] = useState(IMAGES.lawyerOh);
  const [lawyerKimImg, setLawyerKimImg] = useState(IMAGES.lawyerKim);

  // Consultation Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nameOrBusiness: '',
    phone: '',
    agency: '',
    situation: '',
    message: '',
    agreed: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert('개인정보 수집 및 이용에 동의해 주세요.');
      return;
    }
    setIsSubmitting(true);

    try {
      await fetch('https://formsubmit.co/ajax/longlearn50@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[AXIS 사건진단 신청] ${formData.nameOrBusiness} (${formData.situation || '상황 미선택'})`,
          이름_또는_상호명: formData.nameOrBusiness,
          연락처: formData.phone,
          연락한_기관: formData.agency,
          현재_상황: formData.situation,
          간단한_내용: formData.message || '(내용 없음)',
          신청일시: new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
        })
      });
    } catch (err) {
      console.error('Email submission error:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleImageError = () => {
    if (retryCount === 0) {
      setImgSrc((IMAGES as any).representativeBackup);
      setRetryCount(1);
    } else if (retryCount === 1) {
      setImgSrc("https://images.unsplash.com/photo-1557425955-df376b5903c8?q=80&w=800&auto=format&fit=crop");
      setRetryCount(2);
    }
  };

  return (
    <div className="bg-white text-[#1A1A18] font-sans antialiased leading-relaxed" id="main">
      <style>{`
        :root {
          --blue-dark:#0A4D6E;--blue-mid:#185FA5;--blue-pale:#E6F1FB;
          --teal-dark:#085041;--teal-pale:#E1F5EE;
          --purple-dark:#3C3489;--purple-pale:#EEEDFE;
          --ink:#1A1A18;--ink-soft:#3A3A38;--muted:#888780;
          --border:#E0DFD8;--border-strong:#C8C7C0;
          --bg-light:#F7F7F5;--white:#FFFFFF;
        }
        .wrap { max-width: 900px; margin: 0 auto; padding: 0 24px; }
      `}</style>

      <div className="wrap">
        {/* HERO */}
        <section className="py-12 md:py-16 border-b border-[#E0DFD8]">
          <div className="text-[11.5px] font-bold tracking-[0.1em] text-[#0A4D6E] uppercase mb-4">
            AXIS ADMIN 360 · Administrative Dispute &amp; Investigation Practice
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6 text-[#1A1A18]">
            행정사건은<br />
            <em className="not-italic text-[#0A4D6E] border-b-2 md:border-b-[3px] border-[#85B7EB] pb-1">
              법만으로 해결되지 않습니다.
            </em>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[#3A3A38] max-w-2xl mb-8 break-keep">
            행정청이 어떤 법령과 처분기준, 어떤 절차를 거쳐 처분에 이르는지를 아는 것이 대응의 출발점입니다.
            <br /><br />
            행정 실무를 이해하는 전문위원이 사실관계와 처분 경위를 정리하고, 행정절차·행정쟁송을 수행하는 변호사가 법률 판단과 대리를 맡습니다.
            <br /><br />
            사실관계 조사와 증거분석부터 행정심판, 행정조사·특별사법경찰 대응, 행정소송 및 관련 형사사건까지 — 사건이 다음 단계로 넘어가도 처음부터 축적된 사실과 증거, 법률전략은 그대로 이어집니다.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#0A4D6E] text-[#E6F1FB] hover:opacity-90 rounded-lg px-7 py-3.5 text-[15px] font-semibold transition-opacity shadow-sm cursor-pointer"
            >
              사건 진단 신청
            </button>
            <a
              href="tel:07052224226"
              className="bg-transparent text-[#0A4D6E] hover:bg-[#E6F1FB] border border-[#0A4D6E] rounded-lg px-6 py-3.5 text-[15px] font-semibold transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>070-5222-4226 연결</span>
            </a>
            <a
              href="#team"
              className="bg-transparent text-[#1A1A18] hover:bg-[#F7F7F5] border border-[#C8C7C0] rounded-lg px-6 py-3.5 text-[15px] font-medium transition-colors cursor-pointer"
            >
              구성원 소개 보기
            </a>
          </div>

          <div className="inline-flex items-center gap-3 bg-[#F7F7F5] border border-[#E0DFD8] rounded-lg p-3.5 sm:px-5 flex-wrap">
            <span className="text-sm font-bold text-[#0A4D6E] tracking-wider">ONE CASE</span>
            <span className="text-[#C8C7C0]">·</span>
            <span className="text-sm font-bold text-[#0A4D6E] tracking-wider">ONE TEAM</span>
            <span className="text-[#C8C7C0]">·</span>
            <span className="text-sm font-bold text-[#0A4D6E] tracking-wider">ONE STRATEGY</span>
            <span className="text-[#C8C7C0] hidden sm:inline"> | </span>
            <span className="text-xs sm:text-[13px] text-[#888780] italic">
              사실조사부터 행정소송까지, 하나의 사건파일로
            </span>
          </div>
        </section>

        {/* WHY AXIS */}
        <section className="py-14 border-b border-[#E0DFD8]">
          <div className="text-[11px] font-bold tracking-[0.1em] text-[#0A4D6E] uppercase mb-3">
            Why Axis
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug tracking-tight mb-3 text-[#1A1A18] break-keep">
            행정 실무를 아는 구성,<br />행정절차를 아는 구성, 쟁송을 아는 구성
          </h2>
          <p className="text-sm sm:text-[15px] text-[#3A3A38] leading-relaxed mb-8 max-w-xl break-keep">
            행정사건은 사실관계 정리와 법률 판단이 함께 가야 합니다. 액시스 행정문제연구소는 행정실무 분석과 법률 대리를 한 사건 안에서 연결하는 업무 구조를 갖추고 있습니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#F7F7F5] border border-[#E0DFD8] rounded-xl p-5 sm:p-6">
              <div className="text-xs font-bold text-[#0A4D6E] tracking-wider mb-3">01 · 행정 실무의 이해</div>
              <div className="text-[15px] font-bold mb-2.5 text-[#1A1A18]">처분 경위부터 정리합니다</div>
              <div className="text-sm text-[#3A3A38] leading-relaxed break-keep">
                행정기관이 어떤 법령과 처분기준을 적용했는지, 어떤 절차를 거쳤는지, 사실인정에 빠진 부분은 없는지를 실무 관점에서 먼저 정리합니다.
              </div>
            </div>

            <div className="bg-[#F7F7F5] border border-[#E0DFD8] rounded-xl p-5 sm:p-6">
              <div className="text-xs font-bold text-[#0A4D6E] tracking-wider mb-3">02 · 행정절차의 이해</div>
              <div className="text-[15px] font-bold mb-2.5 text-[#1A1A18]">처분 단계부터 함께합니다</div>
              <div className="text-sm text-[#3A3A38] leading-relaxed break-keep">
                청문·의견제출 등 행정절차 실무를 경험한 김채린 변호사가 사전통지 단계에서부터 절차적 적법성과 방어 논리를 검토합니다.
              </div>
            </div>

            <div className="bg-[#F7F7F5] border border-[#E0DFD8] rounded-xl p-5 sm:p-6">
              <div className="text-xs font-bold text-[#0A4D6E] tracking-wider mb-3">03 · 쟁송의 이해</div>
              <div className="text-[15px] font-bold mb-2.5 text-[#1A1A18]">최종 전략을 총괄합니다</div>
              <div className="text-sm text-[#3A3A38] leading-relaxed break-keep">
                오승준 대표변호사가 사건의 법률전략을 총괄하고, 행정심판·행정소송 및 관련 형사사건의 대리·변론을 수행합니다.
              </div>
            </div>
          </div>
        </section>

        {/* 3-LAYER SYSTEM */}
        <section className="py-14 border-b border-[#E0DFD8]">
          <div className="text-[11px] font-bold tracking-[0.1em] text-[#0A4D6E] uppercase mb-3">
            3-Layer System
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug tracking-tight mb-3 text-[#1A1A18] break-keep">
            사실 → 법률 → 쟁송<br />하나의 시스템으로 연결됩니다
          </h2>
          <p className="text-sm sm:text-[15px] text-[#3A3A38] leading-relaxed mb-8 max-w-xl break-keep">
            각 단계에서 축적된 정보와 전략이 다음 단계로 그대로 이어져, 사건 초기부터 소송까지 일관된 대응이 가능합니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-[#E0DFD8] rounded-xl overflow-hidden bg-white">
            {/* Layer 1 */}
            <div className="p-6 md:border-r border-b md:border-b-0 border-[#E0DFD8]">
              <span className="inline-block text-[11px] font-bold tracking-wider px-3 py-1 rounded-full mb-3.5 bg-[#E6F1FB] text-[#0A4D6E]">
                Layer 1 · FACT
              </span>
              <div className="text-base font-bold mb-1 text-[#1A1A18]">사실조사·행정실무</div>
              <div className="text-xs text-[#888780] mb-4">김도현 전문위원 담당</div>
              <ul className="space-y-2 text-sm text-[#3A3A38]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#185FA5] mt-2 shrink-0" />
                  <span>사실관계 조사 및 정리</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#185FA5] mt-2 shrink-0" />
                  <span>행정자료·처분경위 분석</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#185FA5] mt-2 shrink-0" />
                  <span>적용 처분기준 대조·검토</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#185FA5] mt-2 shrink-0" />
                  <span>증거 정리 및 Evidence Map</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#185FA5] mt-2 shrink-0" />
                  <span>사건 타임라인 구성</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#185FA5] mt-2 shrink-0" />
                  <span>서면 작성 실무 지원</span>
                </li>
              </ul>
            </div>

            {/* Layer 2 */}
            <div className="p-6 md:border-r border-b md:border-b-0 border-[#E0DFD8]">
              <span className="inline-block text-[11px] font-bold tracking-wider px-3 py-1 rounded-full mb-3.5 bg-[#E1F5EE] text-[#085041]">
                Layer 2 · LAW
              </span>
              <div className="text-base font-bold mb-1 text-[#1A1A18]">법률검토·행정절차·심판</div>
              <div className="text-xs text-[#888780] mb-4">오승준·김채린 변호사 담당</div>
              <ul className="space-y-2 text-sm text-[#3A3A38]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F6E56] mt-2 shrink-0" />
                  <span>적용법령 및 처분기준 검토</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F6E56] mt-2 shrink-0" />
                  <span>절차 위법·청문 하자 분석</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F6E56] mt-2 shrink-0" />
                  <span>비례원칙·재량권 일탈남용</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F6E56] mt-2 shrink-0" />
                  <span>행정심판 청구 및 집행정지</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F6E56] mt-2 shrink-0" />
                  <span>변호사 의견서 작성</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F6E56] mt-2 shrink-0" />
                  <span>청문·이의신청 대리</span>
                </li>
              </ul>
            </div>

            {/* Layer 3 */}
            <div className="p-6">
              <span className="inline-block text-[11px] font-bold tracking-wider px-3 py-1 rounded-full mb-3.5 bg-[#EEEDFE] text-[#3C3489]">
                Layer 3 · LITIGATION
              </span>
              <div className="text-base font-bold mb-1 text-[#1A1A18]">수사·형사·행정소송</div>
              <div className="text-xs text-[#888780] mb-4">변호사가 직접 수행</div>
              <ul className="space-y-2 text-sm text-[#3A3A38]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#534AB7] mt-2 shrink-0" />
                  <span>특별사법경찰 수사 대응</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#534AB7] mt-2 shrink-0" />
                  <span>경찰·검찰 형사수사 대응</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#534AB7] mt-2 shrink-0" />
                  <span>집행정지 신청·유지</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#534AB7] mt-2 shrink-0" />
                  <span>행정소송 (취소·무효확인)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#534AB7] mt-2 shrink-0" />
                  <span>형사변론 및 공판 대응</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#534AB7] mt-2 shrink-0" />
                  <span>보조금 환수·제재부가금</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* TEAM (Your Case Team) - 완벽한 세로 간격 및 높이 일치 레이아웃 */}
        <section id="team" className="py-14 border-b border-[#E0DFD8] scroll-mt-20">
          <div className="text-[11px] font-bold tracking-[0.1em] text-[#0A4D6E] uppercase mb-3">
            Your Case Team
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug tracking-tight mb-3 text-[#1A1A18]">
            내 사건을 함께 보는 세 사람
          </h2>
          <p className="text-sm sm:text-[15px] text-[#3A3A38] leading-relaxed mb-8 max-w-xl">
            한 명이 아닌 세 명이 사건 초기부터 같은 사건파일을 봅니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {/* 1. 오승준 대표변호사 */}
            <div className="bg-white border border-[#E0DFD8] rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow h-full">
              {/* 상단 프로필 헤더 (모든 요소의 높이를 정확하게 통일) */}
              <div className="p-6 border-b border-[#E0DFD8] flex flex-col">
                {/* 1) 뱃지 행: 높이 h-7로 3명 모두 완벽 일치 */}
                <div className="h-7 flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold tracking-wider px-3 py-1 rounded-full bg-[#E6F1FB] text-[#0A4D6E]">
                    Lead Counsel
                  </span>
                  <span className="text-xs text-[#888780] font-semibold">사법연수원 36기</span>
                </div>

                {/* 2) 사진 영역: h-64 sm:h-72로 3명 모두 동일한 크기와 여백 부여 */}
                <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 mb-4 flex items-center justify-center relative">
                  <img
                    src={lawyerOhImg}
                    alt="오승준 대표변호사"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    onError={() => setLawyerOhImg((IMAGES as any).lawyerOhBackup)}
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* 3) 이름 & 직책 행: 높이 h-14로 3명 모두 베이스라인 완벽 일치 */}
                <div className="h-14 flex flex-col justify-center mb-3">
                  <div className="text-xl font-bold text-[#1A1A18] leading-tight">오승준</div>
                  <div className="text-xs text-[#888780] font-medium leading-tight mt-1">대표변호사 · 행정쟁송 총괄</div>
                </div>

                {/* 4) 한줄 철학 인용 박스: h-20으로 3명 모두 박스 크기 및 상하선 완벽 일치 */}
                <div className="h-20 flex items-center text-xs sm:text-[13px] leading-relaxed italic p-3.5 bg-[#E6F1FB] text-[#0A4D6E] rounded-lg border-l-[3px] border-[#185FA5]">
                  "사건의 구조를 먼저 보고, 근거에 기반한 명확한 법적 결론을 제시합니다."
                </div>
              </div>

              {/* 하단 경력 영역 */}
              <div className="p-6 flex-1 flex flex-col bg-white">
                <div className="h-6 flex items-center text-[11px] font-bold tracking-wider text-[#888780] uppercase mb-3">
                  주요 경력
                </div>
                <ul className="space-y-2.5 text-[12.5px] sm:text-[13px] text-[#2C2C2A]">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-[19px] rounded text-[10.5px] font-bold flex items-center justify-center bg-[#F2F1ED] text-[#75746E] border border-[#DDDCD5] shrink-0 mt-[1px] leading-none">
                      전
                    </span>
                    <span className="flex-1 min-w-0 leading-[21px]">
                      법무법인 현 / 법무법인 엘케이파트너스
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-[19px] rounded text-[10.5px] font-bold flex items-center justify-center bg-[#F2F1ED] text-[#75746E] border border-[#DDDCD5] shrink-0 mt-[1px] leading-none">
                      전
                    </span>
                    <span className="flex-1 min-w-0 leading-[21px]">
                      이화여자대학교 법학전문대학원 겸임교수
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-[19px] rounded text-[10.5px] font-bold flex items-center justify-center bg-[#F2F1ED] text-[#75746E] border border-[#DDDCD5] shrink-0 mt-[1px] leading-none">
                      전
                    </span>
                    <span className="flex-1 min-w-0 leading-[21px]">
                      보건복지부 규제법무심사위원
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-[19px] rounded text-[10.5px] font-bold flex items-center justify-center bg-[#F2F1ED] text-[#75746E] border border-[#DDDCD5] shrink-0 mt-[1px] leading-none">
                      전
                    </span>
                    <span className="flex-1 min-w-0 leading-[21px]">
                      서울중앙지방법원 민사조정위원 (의료)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-[19px] rounded text-[10.5px] font-bold flex items-center justify-center bg-[#F2F1ED] text-[#75746E] border border-[#DDDCD5] shrink-0 mt-[1px] leading-none">
                      전
                    </span>
                    <span className="flex-1 min-w-0 leading-[21px]">
                      대한치과의사협회 의료광고심의위원회 위원
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-[19px] rounded text-[10.5px] font-bold flex items-center justify-center bg-[#F2F1ED] text-[#75746E] border border-[#DDDCD5] shrink-0 mt-[1px] leading-none">
                      전
                    </span>
                    <span className="flex-1 min-w-0 leading-[21px]">
                      한국실업축구연맹 이사
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-[19px] flex items-center justify-center text-[#9E9D96] font-bold text-sm shrink-0 mt-[1px] leading-none">
                      ·
                    </span>
                    <span className="flex-1 min-w-0 leading-[21px]">
                      사법연수원 36기 (제46회 사법시험 합격)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. 김채린 변호사 */}
            <div className="bg-white border border-[#E0DFD8] rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow h-full">
              {/* 상단 프로필 헤더 */}
              <div className="p-6 border-b border-[#E0DFD8] flex flex-col">
                {/* 1) 뱃지 행: 높이 h-7 */}
                <div className="h-7 flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold tracking-wider px-3 py-1 rounded-full bg-[#E1F5EE] text-[#085041]">
                    Administrative Counsel
                  </span>
                  <span className="text-xs text-[#888780] font-semibold">청문주재 변호사</span>
                </div>

                {/* 2) 사진 영역: h-64 sm:h-72 */}
                <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 mb-4 flex items-center justify-center relative">
                  <img
                    src={lawyerKimImg}
                    alt="김채린 변호사"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    onError={() => setLawyerKimImg((IMAGES as any).lawyerKimBackup)}
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* 3) 이름 & 직책 행: 높이 h-14 */}
                <div className="h-14 flex flex-col justify-center mb-3">
                  <div className="text-xl font-bold text-[#1A1A18] leading-tight">김채린</div>
                  <div className="text-xs text-[#888780] font-medium leading-tight mt-1">변호사 · 행정절차·청문 담당</div>
                </div>

                {/* 4) 한줄 철학 인용 박스: h-20 */}
                <div className="h-20 flex items-center text-xs sm:text-[13px] leading-relaxed italic p-3.5 bg-[#E1F5EE] text-[#085041] rounded-lg border-l-[3px] border-[#0F6E56]">
                  "청문 절차를 직접 경험한 시각에서, 처분에 이르는 절차의 적법성을 살펴봅니다."
                </div>
              </div>

              {/* 하단 경력 영역 */}
              <div className="p-6 flex-1 flex flex-col bg-white">
                <div className="h-6 flex items-center text-[11px] font-bold tracking-wider text-[#888780] uppercase mb-3">
                  주요 경력
                </div>
                <ul className="space-y-2.5 text-[12.5px] sm:text-[13px] text-[#2C2C2A]">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-[19px] rounded text-[10.5px] font-bold flex items-center justify-center bg-[#E6F1FB] text-[#0A4D6E] shrink-0 mt-[1px] leading-none">
                      현
                    </span>
                    <span className="flex-1 min-w-0 leading-[21px]">
                      서울특별시 강남구 청문주재 변호사
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-[19px] rounded text-[10.5px] font-bold flex items-center justify-center bg-[#E6F1FB] text-[#0A4D6E] shrink-0 mt-[1px] leading-none">
                      현
                    </span>
                    <span className="flex-1 min-w-0 leading-[21px]">
                      서울특별시 강남구 식품진흥기금운용심의회 위원
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-[19px] rounded text-[10.5px] font-bold flex items-center justify-center bg-[#E6F1FB] text-[#0A4D6E] shrink-0 mt-[1px] leading-none">
                      현
                    </span>
                    <span className="flex-1 min-w-0 leading-[21px]">
                      서울특별시 송파구 시설관리공단 자문 변호사
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-[19px] rounded text-[10.5px] font-bold flex items-center justify-center bg-[#E6F1FB] text-[#0A4D6E] shrink-0 mt-[1px] leading-none">
                      현
                    </span>
                    <span className="flex-1 min-w-0 leading-[21px]">
                      송파구 시설관리공단 인권경영위원회 위원
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-[19px] rounded text-[10.5px] font-bold flex items-center justify-center bg-[#E6F1FB] text-[#0A4D6E] shrink-0 mt-[1px] leading-none">
                      현
                    </span>
                    <span className="flex-1 min-w-0 leading-[21px]">
                      송파구 시설관리공단 명예 주민감사관
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-[19px] rounded text-[10.5px] font-bold flex items-center justify-center bg-[#E6F1FB] text-[#0A4D6E] shrink-0 mt-[1px] leading-none">
                      현
                    </span>
                    <span className="flex-1 min-w-0 leading-[21px]">
                      대법원 국선변호인
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-[19px] rounded text-[10.5px] font-bold flex items-center justify-center bg-[#F2F1ED] text-[#75746E] border border-[#DDDCD5] shrink-0 mt-[1px] leading-none">
                      전
                    </span>
                    <span className="flex-1 min-w-0 leading-[21px]">
                      법무법인 도원
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-[19px] flex items-center justify-center text-[#9E9D96] font-bold text-sm shrink-0 mt-[1px] leading-none">
                      ·
                    </span>
                    <span className="flex-1 min-w-0 leading-[21px]">
                      제11회 변호사시험 합격
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. 김도현 전문위원 */}
            <div className="bg-white border border-[#E0DFD8] rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow h-full">
              {/* 상단 프로필 헤더 */}
              <div className="p-6 border-b border-[#E0DFD8] flex flex-col">
                {/* 1) 뱃지 행: 높이 h-7 */}
                <div className="h-7 flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold tracking-wider px-3 py-1 rounded-full bg-[#EEEDFE] text-[#3C3489]">
                    Admin Practice Specialist
                  </span>
                  <span className="text-xs text-[#888780] font-semibold">공직 30년</span>
                </div>

                {/* 2) 사진 영역: h-64 sm:h-72 (오승준/김채린 변호사와 정확히 동일한 높이와 비율) */}
                <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden bg-[#f0f3f6] border border-gray-200 mb-4 flex items-center justify-center relative">
                  <img
                    src={imgSrc}
                    alt="김도현 전문위원"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    onError={handleImageError}
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* 3) 이름 & 직책 행: 높이 h-14 */}
                <div className="h-14 flex flex-col justify-center mb-3">
                  <div className="text-xl font-bold text-[#1A1A18] leading-tight">김도현</div>
                  <div className="text-xs text-[#888780] font-medium leading-tight mt-1">전문위원 · 행정실무·사실조사 담당</div>
                </div>

                {/* 4) 한줄 철학 인용 박스: h-20 */}
                <div className="h-20 flex items-center text-xs sm:text-[13px] leading-relaxed italic p-3.5 bg-[#EEEDFE] text-[#3C3489] rounded-lg border-l-[3px] border-[#534AB7]">
                  "행정 실무 경험을 바탕으로 사실관계와 처분 경위를 가장 먼저 정리합니다."
                </div>
              </div>

              {/* 하단 경력 영역 */}
              <div className="p-6 flex-1 flex flex-col bg-white">
                <div className="h-6 flex items-center text-[11px] font-bold tracking-wider text-[#888780] uppercase mb-3">
                  주요 경력
                </div>
                <ul className="space-y-2.5 text-[12.5px] sm:text-[13px] text-[#2C2C2A]">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-[19px] rounded text-[10.5px] font-bold flex items-center justify-center bg-[#E6F1FB] text-[#0A4D6E] shrink-0 mt-[1px] leading-none">
                      현
                    </span>
                    <span className="flex-1 min-w-0 leading-[21px]">
                      국가공인 행정사
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-[19px] rounded text-[10.5px] font-bold flex items-center justify-center bg-[#F2F1ED] text-[#75746E] border border-[#DDDCD5] shrink-0 mt-[1px] leading-none">
                      전
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="leading-[21px]">서울특별시 자치구 과장</div>
                      <div className="text-[11.5px] text-[#787770] leading-snug mt-0.5">
                        법무·감사·복지·위생·폐기물·학원·기획 업무
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-[19px] rounded text-[10.5px] font-bold flex items-center justify-center bg-[#F2F1ED] text-[#75746E] border border-[#DDDCD5] shrink-0 mt-[1px] leading-none">
                      전
                    </span>
                    <span className="flex-1 min-w-0 leading-[21px]">
                      법무법인 현답 행정분야 전문위원
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-[19px] rounded text-[10.5px] font-bold flex items-center justify-center bg-[#F2F1ED] text-[#75746E] border border-[#DDDCD5] shrink-0 mt-[1px] leading-none">
                      전
                    </span>
                    <span className="flex-1 min-w-0 leading-[21px]">
                      공직 재직 중 행정심판·소송 대응 1,000여 건 검토·처리
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-[19px] flex items-center justify-center text-[#9E9D96] font-bold text-sm shrink-0 mt-[1px] leading-none">
                      ·
                    </span>
                    <span className="flex-1 min-w-0 leading-[21px]">
                      행정심판·행정소송·식품위생·지방계약·징계 편람 작성 및 교육
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CASE FLOW */}
        <section className="py-14 border-b border-[#E0DFD8]">
          <div className="text-[11px] font-bold tracking-[0.1em] text-[#0A4D6E] uppercase mb-3">
            Case Process
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug tracking-tight mb-8 text-[#1A1A18] break-keep">
            사건 접수부터 종결까지<br />하나의 전략으로 이어집니다
          </h2>

          <div className="border border-[#E0DFD8] rounded-xl overflow-hidden bg-white">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:px-6 border-b border-[#E0DFD8]">
              <div className="w-8 h-8 rounded-full bg-[#E6F1FB] text-[#0A4D6E] font-bold text-xs flex items-center justify-center shrink-0">
                01
              </div>
              <div className="flex-1">
                <div className="text-[15px] font-bold text-[#1A1A18]">사건 접수 및 1차 진단</div>
                <div className="text-xs sm:text-[13px] text-[#3A3A38]">
                  처분서·사전통지서 수령 즉시, 불복기간 산정 및 긴급 대응 여부 판단
                </div>
              </div>
              <span className="text-xs text-[#3A3A38] px-3 py-1 border border-[#E0DFD8] rounded-full self-start sm:self-auto">
                구성원 전원
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:px-6 border-b border-[#E0DFD8]">
              <div className="w-8 h-8 rounded-full bg-[#E6F1FB] text-[#0A4D6E] font-bold text-xs flex items-center justify-center shrink-0">
                02
              </div>
              <div className="flex-1">
                <div className="text-[15px] font-bold text-[#1A1A18]">사실관계 조사 및 Evidence Map 작성</div>
                <div className="text-xs sm:text-[13px] text-[#3A3A38]">
                  처분 경위 정리, 적용 처분기준 대조, 증거 구조화
                </div>
              </div>
              <span className="text-xs text-[#3A3A38] px-3 py-1 border border-[#E0DFD8] rounded-full self-start sm:self-auto">
                김도현 전문위원
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:px-6 border-b border-[#E0DFD8]">
              <div className="w-8 h-8 rounded-full bg-[#E1F5EE] text-[#085041] font-bold text-xs flex items-center justify-center shrink-0">
                03
              </div>
              <div className="flex-1">
                <div className="text-[15px] font-bold text-[#1A1A18]">AXIS ADMIN Case Conference</div>
                <div className="text-xs sm:text-[13px] text-[#3A3A38]">
                  법률쟁점·절차위법·형사전환 위험·쟁송전략을 3인이 함께 검토
                </div>
              </div>
              <span className="text-xs text-[#3A3A38] px-3 py-1 border border-[#E0DFD8] rounded-full self-start sm:self-auto">
                전원 참여
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:px-6 border-b border-[#E0DFD8]">
              <div className="w-8 h-8 rounded-full bg-[#E1F5EE] text-[#085041] font-bold text-xs flex items-center justify-center shrink-0">
                04
              </div>
              <div className="flex-1">
                <div className="text-[15px] font-bold text-[#1A1A18]">행정절차·청문·행정심판 대응</div>
                <div className="text-xs sm:text-[13px] text-[#3A3A38]">
                  의견제출서·청문의견서·이의신청서·행정심판 청구서 작성 및 집행정지
                </div>
              </div>
              <span className="text-xs text-[#3A3A38] px-3 py-1 border border-[#E0DFD8] rounded-full self-start sm:self-auto">
                오·김 변호사
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:px-6 border-b border-[#E0DFD8]">
              <div className="w-8 h-8 rounded-full bg-[#EEEDFE] text-[#3C3489] font-bold text-xs flex items-center justify-center shrink-0">
                05
              </div>
              <div className="flex-1">
                <div className="text-[15px] font-bold text-[#1A1A18]">행정조사·특별사법경찰 대응 (해당 시)</div>
                <div className="text-xs sm:text-[13px] text-[#3A3A38]">
                  조사 초기 단계부터 변호사 중심 체계로 전환, 진술거부권 등 절차적 권리 보호
                </div>
              </div>
              <span className="text-xs text-[#3A3A38] px-3 py-1 border border-[#E0DFD8] rounded-full self-start sm:self-auto">
                변호사 담당
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:px-6">
              <div className="w-8 h-8 rounded-full bg-[#EEEDFE] text-[#3C3489] font-bold text-xs flex items-center justify-center shrink-0">
                06
              </div>
              <div className="flex-1">
                <div className="text-[15px] font-bold text-[#1A1A18]">행정소송·형사변론 수행</div>
                <div className="text-xs sm:text-[13px] text-[#3A3A38]">
                  Layer 1~2에서 축적된 사실·증거·전략을 소송에 그대로 연결 적용
                </div>
              </div>
              <span className="text-xs text-[#3A3A38] px-3 py-1 border border-[#E0DFD8] rounded-full self-start sm:self-auto">
                오승준 대표변호사
              </span>
            </div>
          </div>
          <p className="mt-4 text-[13.5px] text-[#888780] italic text-center">
            단계가 바뀌어도 사건파일과 전략은 처음부터 하나로 이어집니다.
          </p>
        </section>

        {/* PRACTICE AREAS */}
        <section className="py-14 border-b border-[#E0DFD8]">
          <div className="text-[11px] font-bold tracking-[0.1em] text-[#0A4D6E] uppercase mb-3">
            주요 취급 업무
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug tracking-tight mb-8 text-[#1A1A18] break-keep">
            행정처분과 형사수사가 연결되는 영역,<br />그것이 액시스가 집중하는 영역입니다
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            <div className="border border-[#85B7EB] bg-[#E6F1FB] rounded-xl p-5 transition-all">
              <span className="text-2xl mb-2.5 block text-[#0A4D6E]">⚖️</span>
              <div className="text-[15px] font-bold mb-1.5 text-[#0A4D6E]">영업정지·과징금</div>
              <div className="text-xs sm:text-[13px] text-[#185FA5] leading-relaxed break-keep">
                처분 직후 신속 대응. 청문→심판→소송 전 과정 통합 관리
              </div>
            </div>

            <div className="border border-[#85B7EB] bg-[#E6F1FB] rounded-xl p-5 transition-all">
              <span className="text-2xl mb-2.5 block text-[#0A4D6E]">📋</span>
              <div className="text-[15px] font-bold mb-1.5 text-[#0A4D6E]">인허가·등록·면허취소</div>
              <div className="text-xs sm:text-[13px] text-[#185FA5] leading-relaxed break-keep">
                기속·재량 판단 오류, 절차 위법 집중 검토. 재신청 전략 병행
              </div>
            </div>

            <div className="border border-[#85B7EB] bg-[#E6F1FB] rounded-xl p-5 transition-all">
              <span className="text-2xl mb-2.5 block text-[#0A4D6E]">🔍</span>
              <div className="text-[15px] font-bold mb-1.5 text-[#0A4D6E]">특별사법경찰 수사 대응</div>
              <div className="text-xs sm:text-[13px] text-[#185FA5] leading-relaxed break-keep">
                수사 범위 일탈·진술거부권 미고지 등 절차 위법 여부 즉시 검토
              </div>
            </div>

            <div className="border border-[#E0DFD8] rounded-xl p-5 hover:border-[#85B7EB] transition-colors bg-white">
              <span className="text-2xl mb-2.5 block text-[#888780]">💰</span>
              <div className="text-[15px] font-bold mb-1.5 text-[#1A1A18]">보조금 환수·제재부가금</div>
              <div className="text-xs sm:text-[13px] text-[#3A3A38] leading-relaxed break-keep">
                조사→환수→특사경→형사→소송으로 이어지는 전 단계 대응
              </div>
            </div>

            <div className="border border-[#E0DFD8] rounded-xl p-5 hover:border-[#85B7EB] transition-colors bg-white">
              <span className="text-2xl mb-2.5 block text-[#888780]">📄</span>
              <div className="text-[15px] font-bold mb-1.5 text-[#1A1A18]">행정조사 대응</div>
              <div className="text-xs sm:text-[13px] text-[#3A3A38] leading-relaxed break-keep">
                조사 범위·방법의 위법 여부 즉시 검토. 확인서 서명 전 상담 권장
              </div>
            </div>

            <div className="border border-[#E0DFD8] rounded-xl p-5 hover:border-[#85B7EB] transition-colors bg-white">
              <span className="text-2xl mb-2.5 block text-[#888780]">🛡️</span>
              <div className="text-[15px] font-bold mb-1.5 text-[#1A1A18]">공무원 징계·불이익처분</div>
              <div className="text-xs sm:text-[13px] text-[#3A3A38] leading-relaxed break-keep">
                징계위원회 대응, 소청심사, 행정소송
              </div>
            </div>
          </div>
        </section>

        {/* DIFFERENTIATOR */}
        <div className="my-14 bg-[#F7F7F5] border border-[#E0DFD8] rounded-xl p-8 sm:p-10 border-l-4 border-l-[#0A4D6E]">
          <div className="text-[11px] font-bold tracking-[0.1em] text-[#0A4D6E] uppercase mb-3.5">
            핵심 메시지
          </div>
          <blockquote className="text-lg sm:text-xl leading-relaxed text-[#1A1A18] italic mb-4.5 break-keep font-serif">
            "처분을 받은 분의 입장만 보는 것이 아니라, 행정청이 어떤 기준과 절차를 거쳐 그 처분에 이르렀는지까지 함께 분석합니다. 행정 실무와 행정절차를 모두 이해할 때, 비로소 정확한 반박이 가능합니다."
          </blockquote>
          <div className="text-xs sm:text-[13px] text-[#888780]">
            법무법인 액시스 행정문제연구소 · AXIS ADMIN 360
          </div>
        </div>

        {/* CTA FINAL (연락처 및 상세 주소 반영) */}
        <section className="py-14 text-center border-t border-[#E0DFD8]">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 text-[#1A1A18]">
            지금 사건 진단을 신청하세요
          </h2>
          <p className="text-sm sm:text-base text-[#3A3A38] mb-8 leading-relaxed max-w-lg mx-auto break-keep">
            처분서를 받은 날부터 불복 기간이 흐릅니다.<br />
            첫 상담에서 사실관계·불복 가능성·대응 경로를 함께 검토합니다.
          </p>

          <div className="flex justify-center gap-3 flex-wrap mb-5">
            <a
              href="tel:07052224226"
              className="flex items-center gap-2 px-5 py-3 border border-[#0A4D6E] rounded-lg text-sm text-[#E6F1FB] bg-[#0A4D6E] hover:opacity-90 transition-opacity shadow-sm"
              aria-label="일반전화 070-5222-4226으로 상담 전화 걸기"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">상담전화 070-5222-4226</span>
            </a>
            <a
              href="tel:01053812718"
              className="flex items-center gap-2 px-5 py-3 border border-[#C8C7C0] rounded-lg text-sm text-[#1A1A18] bg-white hover:border-[#185FA5] transition-colors shadow-sm"
              aria-label="직통전화 010-5381-2718로 전화 걸기"
            >
              <Smartphone className="w-4 h-4 text-[#0A4D6E]" />
              <span className="font-semibold">직통 010-5381-2718</span>
            </a>
            <a
              href={CONTACT.kakao}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 border border-[#C8C7C0] rounded-lg text-sm text-[#1A1A18] bg-white hover:border-[#185FA5] transition-colors shadow-sm"
              aria-label="카카오톡 오픈채팅 상담 (새 창)"
            >
              <MessageSquare className="w-4 h-4 text-[#0A4D6E]" />
              <span className="font-semibold">카카오톡 상담</span>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 px-5 py-3 border border-[#C8C7C0] rounded-lg text-sm text-[#1A1A18] bg-white hover:border-[#185FA5] transition-colors shadow-sm"
              aria-label="이메일로 문의하기"
            >
              <Mail className="w-4 h-4 text-[#0A4D6E]" />
              <span className="font-semibold">이메일 문의</span>
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-5 py-3 border border-[#85B7EB] bg-[#E6F1FB] text-[#0A4D6E] rounded-lg text-sm font-semibold hover:bg-[#d6e9f8] transition-colors shadow-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#0A4D6E]" />
              <span>온라인 사건 진단서 접수</span>
            </button>
          </div>

          <p className="text-xs sm:text-[13.5px] text-[#3A3A38] mb-6">
            방문 상담은 전화로 예약해 주시기 바랍니다.<br />
            <span className="font-medium text-[#1A1A18]">서울 강남구 테헤란로82길 14, 청풍빌딩 4층 AXIS Law</span>
          </p>

          <div className="text-xs leading-relaxed text-[#888780] max-w-3xl mx-auto pt-5 border-t border-[#E0DFD8] break-keep text-center space-y-1.5">
            <p>
              <span className="inline-block">법무법인 액시스 행정문제연구소는 변호사법에 따라 설립·등록된</span>{' '}
              <span className="inline-block">법무법인 액시스의 행정분야 실무 조직입니다.</span>
            </p>
            <p>
              <span className="inline-block">사실관계 조사 및 행정실무 분석은 김도현 전문위원이 수행하고,</span>{' '}
              <span className="inline-block">법률 자문·대리 및 사건 수임은 소속 변호사가 담당합니다.</span>
            </p>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#1A1A18] text-[#888780] py-10 px-6 text-xs sm:text-sm text-center border-t border-[#33322E]">
        <p className="font-bold text-white text-sm sm:text-base">법무법인 액시스 행정문제연구소</p>
        <p className="mt-2 text-[#C8C7C0]">
          대표변호사 오승준 · 변호사 김채린 · 전문위원 김도현
        </p>
        <p className="mt-1.5 leading-relaxed">
          상담전화 <a href="tel:07052224226" className="text-[#B9B8B2] hover:text-white font-medium">070-5222-4226</a> · 직통 <a href="tel:01053812718" className="text-[#B9B8B2] hover:text-white font-medium">010-5381-2718</a><br />
          이메일 <a href="mailto:longlearn50@gmail.com" className="text-[#B9B8B2] hover:text-white">longlearn50@gmail.com</a><br />
          서울 강남구 테헤란로82길 14, 청풍빌딩 4층 AXIS Law
        </p>
        <p className="mt-3 text-xs text-[#A9A8A2] border-t border-[#33322E] pt-3 inline-block">
          광고책임변호사 : 오승준 (법무법인 액시스)
        </p>
        <div className="mt-3 text-[11.5px] text-[#5F5E5A] leading-relaxed max-w-3xl mx-auto break-keep space-y-1">
          <p>© 2026 법무법인 액시스 행정문제연구소. All rights reserved.</p>
          <p>
            <span className="inline-block">본 사이트의 내용은 일반적인 정보 제공을 목적으로 하며</span>{' '}
            <span className="inline-block">개별 사건에 대한 법률 자문을 대체하지 않습니다.</span>
          </p>
          <p>구체적인 사안은 반드시 변호사와 상담하시기 바랍니다.</p>
        </div>
      </footer>

      {/* 사건 진단 신청 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-gray-100">
            <button
              onClick={() => {
                setIsModalOpen(false);
                setIsSubmitted(false);
              }}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="py-8 text-center">
                <div className="w-16 h-16 bg-[#E6F1FB] text-[#0A4D6E] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A18] mb-2">사건 진단 신청이 접수되었습니다</h3>
                <p className="text-sm text-[#3A3A38] leading-relaxed mb-6 break-keep">
                  신청해주신 내용을 바탕으로 담당 변호사 및 전문위원이 신속히 처분 시효 및 초기 대응 방안을 검토하여 연락드리겠습니다.
                </p>
                <div className="bg-[#F7F7F5] p-4 rounded-xl text-xs text-[#888780] mb-6 text-left space-y-1.5">
                  <p>• 긴급 상담전화: <a href="tel:07052224226" className="text-[#0A4D6E] font-bold underline">070-5222-4226</a></p>
                  <p>• 모바일 직통: <a href="tel:01053812718" className="text-[#0A4D6E] font-bold underline">010-5381-2718</a></p>
                  <p>• 처분서·사전통지서 수령일을 확인해 두시면 더 빠른 기한 산정이 가능합니다.</p>
                </div>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setIsSubmitted(false);
                  }}
                  className="w-full py-3 bg-[#0A4D6E] text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity cursor-pointer"
                >
                  확인
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-[11px] font-bold text-[#0A4D6E] uppercase tracking-wider bg-[#E6F1FB] px-2.5 py-1 rounded-full">
                    AXIS ADMIN 360
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A18] mt-2">
                    사건 진단 신청
                  </h3>
                  <p className="text-xs sm:text-sm text-[#888780] mt-1">
                    처분서 내용과 기한을 확인하고 적법성 및 불복 가능성을 신속히 분석해 드립니다.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#3A3A38] mb-1.5">
                      이름 또는 상호명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nameOrBusiness"
                      required
                      value={formData.nameOrBusiness}
                      onChange={handleFormChange}
                      placeholder="예: 홍길동 또는 00식당"
                      className="w-full px-3.5 py-2.5 border border-[#C8C7C0] rounded-xl text-sm focus:outline-none focus:border-[#0A4D6E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3A3A38] mb-1.5">
                      연락처 (휴대전화) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="예: 010-1234-5678"
                      className="w-full px-3.5 py-2.5 border border-[#C8C7C0] rounded-xl text-sm focus:outline-none focus:border-[#0A4D6E]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#3A3A38] mb-1.5">
                        연락 온 행정기관
                      </label>
                      <input
                        type="text"
                        name="agency"
                        value={formData.agency}
                        onChange={handleFormChange}
                        placeholder="예: 강남구청, 경찰서"
                        className="w-full px-3.5 py-2.5 border border-[#C8C7C0] rounded-xl text-sm focus:outline-none focus:border-[#0A4D6E]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#3A3A38] mb-1.5">
                        현재 진행 상황
                      </label>
                      <select
                        name="situation"
                        value={formData.situation}
                        onChange={handleFormChange}
                        className="w-full px-3.5 py-2.5 border border-[#C8C7C0] rounded-xl text-sm focus:outline-none focus:border-[#0A4D6E] bg-white"
                      >
                        <option value="">선택해주세요</option>
                        <option value="사전통지서 수령 (의견제출/청문)">사전통지서 수령 (의견제출/청문)</option>
                        <option value="영업정지/과징금 처분 통보">영업정지/과징금 처분 통보</option>
                        <option value="인허가·등록·면허취소 통보">인허가·등록·면허취소 통보</option>
                        <option value="행정조사·특별사법경찰 출석요구">행정조사·특별사법경찰 출석요구</option>
                        <option value="보조금 환수/제재부가금 통지">보조금 환수/제재부가금 통지</option>
                        <option value="공무원 징계·불이익처분">공무원 징계·불이익처분</option>
                        <option value="기타 행정처분">기타 행정처분</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3A3A38] mb-1.5">
                      사건 요약 및 문의 사항
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="처분 사유나 기한, 궁금하신 점을 간략히 적어주시면 더 정확한 상담이 가능합니다."
                      className="w-full px-3.5 py-2.5 border border-[#C8C7C0] rounded-xl text-sm focus:outline-none focus:border-[#0A4D6E] resize-none"
                    />
                  </div>

                  <div className="pt-1">
                    <label className="flex items-start gap-2 cursor-pointer text-xs text-[#3A3A38]">
                      <input
                        type="checkbox"
                        name="agreed"
                        required
                        checked={formData.agreed}
                        onChange={handleFormChange}
                        className="mt-0.5 rounded border-gray-300 text-[#0A4D6E] focus:ring-[#0A4D6E]"
                      />
                      <span>[필수] 상담 안내를 위한 개인정보(이름, 연락처) 수집 및 이용에 동의합니다.</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#0A4D6E] text-[#E6F1FB] font-bold rounded-xl text-sm hover:opacity-90 transition-opacity shadow-md disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? '진단 접수 중...' : '사건 진단 신청 완료하기'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
