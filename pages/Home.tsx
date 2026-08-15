
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Smartphone, Phone, Search, Scale, ArrowRight, CheckCircle2, X, MessageSquare, ExternalLink } from 'lucide-react';
import { CONTACT, IMAGES, SERVICES } from '../constants';

const Home: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(IMAGES.representative);
  const [retryCount, setRetryCount] = useState(0);

  // Consultation Form State
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
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

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
      // Send directly to representative's email via FormSubmit API
      await fetch('https://formsubmit.co/ajax/longlearn50@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[행정114 초기진단 신청] ${formData.nameOrBusiness} (${formData.situation || '상황 미선택'})`,
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
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[65vh] md:min-h-[75vh] flex items-center bg-gradient-to-br from-[#F4F7FA] to-white py-12 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-20 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="inline-block bg-[#002C5F] text-white px-3.5 py-1.5 rounded-full text-[10px] md:text-sm font-extrabold mb-4 md:mb-6 shadow-sm tracking-tight">
                소상공인·자영업자를 위한 행정문제 초기진단
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[50px] font-black text-[#002C5F] mb-6 md:mb-8 break-keep tracking-tight flex flex-col gap-3 sm:gap-4 md:gap-5">
                <span className="block leading-normal">
                  구청에서 연락이 왔다면,
                </span>
                <span className="block leading-normal">
                  처분보다 먼저 확인해야 할<br className="sm:hidden" />
                  <span className="text-[#F5A623]"> 것이 있습니다.</span>
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg xl:text-xl text-gray-600 font-medium break-keep leading-relaxed mb-8 md:mb-10 max-w-2xl">
                단속, 행정조사, 사전통지, 영업정지. 받은 문서와 대응기한부터 확인하고 내 사건에 맞는 전문가를 찾으세요.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto justify-center lg:justify-start">
                <button
                  onClick={() => {
                    const formEl = document.getElementById('consultation-form');
                    formEl?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#002C5F] text-white px-6 md:px-8 py-3.5 md:py-4.5 rounded-2xl font-bold text-sm md:text-lg flex items-center justify-center hover:bg-[#001a3a] transition-all shadow-lg active:scale-95 cursor-pointer"
                >
                  받은 문서 진단받기 <ChevronRight className="ml-1 w-4 h-4 md:w-5 md:h-5 animate-pulse" />
                </button>
                <a 
                  href={`tel:${CONTACT.phone.replace(/-/g, '')}`}
                  className="bg-[#F5A623] text-white px-6 md:px-8 py-3.5 md:py-4.5 rounded-2xl font-bold text-sm md:text-lg text-center hover:bg-[#e09512] transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  전화 상담 {CONTACT.phone}
                </a>
              </div>
            </div>

            {/* Right Content: Premium Large Experts Card */}
            <div className="lg:col-span-5 w-full max-w-xl mx-auto lg:max-w-none">
              <div className="bg-white p-6 md:p-8 xl:p-10 rounded-[32px] shadow-2xl border border-gray-100 flex flex-col gap-5 md:gap-6">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F5A623] animate-pulse"></span>
                    <span className="text-sm md:text-base xl:text-lg font-black text-[#002C5F]">분야별 핵심 책임 전문가</span>
                  </div>
                  <Link to="/experts" className="text-xs md:text-sm text-gray-400 font-bold hover:text-[#002C5F] transition-colors flex items-center gap-0.5">
                    전체 프로필 <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Team Lead 1: 이경석 변호사 */}
                <div className="flex items-center gap-4 md:gap-6 bg-[#F8F9FA] p-4 md:p-5 rounded-[24px] border border-gray-50 hover:border-gray-200 transition-all hover:shadow-md">
                  <div className="w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 shrink-0 bg-gray-200 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                    <img src={IMAGES.leeKyungSeok} alt="이경석 변호사" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-black text-base md:text-xl xl:text-2xl text-[#002C5F] truncate">이경석</span>
                      <span className="text-[10px] md:text-xs bg-[#002C5F]/10 text-[#002C5F] px-2 py-0.5 rounded-md font-black">변호사</span>
                    </div>
                    <p className="text-xs md:text-sm xl:text-base text-gray-500 font-bold truncate leading-tight">행정·형사 소송 전략 설계</p>
                    <div className="mt-2 md:mt-3">
                      <span className="text-[9px] md:text-[11px] xl:text-xs text-[#F5A623] font-black leading-none bg-[#F5A623]/10 px-2.5 py-1 rounded-full inline-block">법리·전략 설계 / 행정형사센터장</span>
                    </div>
                  </div>
                </div>

                {/* Team Lead 2: 김도현 소장 / 행정사 */}
                <div className="flex items-center gap-4 md:gap-6 bg-[#F8F9FA] p-4 md:p-5 rounded-[24px] border border-gray-50 hover:border-gray-200 transition-all hover:shadow-md">
                  <div className="w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 shrink-0 bg-gray-200 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                    <img src={imgSrc} alt="김도현 소장" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" onError={handleImageError} referrerPolicy="no-referrer" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-black text-base md:text-xl xl:text-2xl text-[#002C5F] truncate">김도현</span>
                      <span className="text-[10px] md:text-xs bg-[#F5A623]/10 text-[#F5A623] px-2 py-0.5 rounded-md font-black">소장 / 행정사</span>
                    </div>
                    <p className="text-xs md:text-sm xl:text-base text-gray-500 font-bold truncate leading-tight">공직 30년 현장 행정 실무</p>
                    <div className="mt-2 md:mt-3">
                      <span className="text-[9px] md:text-[11px] xl:text-xs text-gray-600 font-black leading-none bg-gray-200/60 px-2.5 py-1 rounded-full inline-block">행정 실전 해법 전문가</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Incident Diagnosis Section (Requested from Screenshot) */}
      <section className="py-16 md:py-24 bg-[#05182C] text-white relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Title & Subtitle */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <span className="text-[#F5A623] font-bold text-xs md:text-sm tracking-wider uppercase mb-3 md:mb-4 block">
                사건부터 맡기기 전에
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4 md:mb-6 break-keep tracking-tight">
                행정114<br />
                <span className="text-[#F5A623]">5단계</span> 사건진단
              </h2>
              <p className="text-sm md:text-lg text-gray-300 font-normal leading-relaxed break-keep mb-8 max-w-md">
                누구에게 맡길지보다 먼저, 내 사건이 지금 어디에 있는지부터 알아야 합니다.
              </p>
              
              <button
                onClick={() => {
                  const formEl = document.getElementById('consultation-form');
                  formEl?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-sm md:text-base font-bold text-white hover:text-[#F5A623] transition-colors group cursor-pointer"
              >
                <span>내 사건의 현재 위치 확인하기</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

            {/* Right Column: 5 Steps List with borders */}
            <div className="lg:col-span-7 divide-y divide-white/10 border-t border-b border-white/10">
              
              {/* Step 01 */}
              <div className="py-6 sm:py-7 flex items-start gap-5 sm:gap-8 group">
                <span className="font-mono text-sm sm:text-base font-black text-white/80 shrink-0 pt-0.5 tracking-wider">
                  01
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-1.5 group-hover:text-[#F5A623] transition-colors">
                    기관 확인
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-400 font-normal leading-relaxed break-keep">
                    구청·시청·보건소·경찰 등 어느 기관에서 연락했는지 확인합니다.
                  </p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="py-6 sm:py-7 flex items-start gap-5 sm:gap-8 group">
                <span className="font-mono text-sm sm:text-base font-black text-white/80 shrink-0 pt-0.5 tracking-wider">
                  02
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-1.5 group-hover:text-[#F5A623] transition-colors">
                    단계 확인
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-400 font-normal leading-relaxed break-keep">
                    단속·조사·사전통지·청문·처분 중 현재 위치를 구분합니다.
                  </p>
                </div>
              </div>

              {/* Step 03 */}
              <div className="py-6 sm:py-7 flex items-start gap-5 sm:gap-8 group">
                <span className="font-mono text-sm sm:text-base font-black text-white/80 shrink-0 pt-0.5 tracking-wider">
                  03
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-1.5 group-hover:text-[#F5A623] transition-colors">
                    기한 확인
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-400 font-normal leading-relaxed break-keep">
                    언제까지 무엇을 해야 하는지 가장 먼저 체크합니다.
                  </p>
                </div>
              </div>

              {/* Step 04 */}
              <div className="py-6 sm:py-7 flex items-start gap-5 sm:gap-8 group">
                <span className="font-mono text-sm sm:text-base font-black text-white/80 shrink-0 pt-0.5 tracking-wider">
                  04
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-1.5 group-hover:text-[#F5A623] transition-colors">
                    자료 확인
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-400 font-normal leading-relaxed break-keep">
                    통지서·확인서·CCTV·계약서 등 판단에 필요한 자료를 살펴봅니다.
                  </p>
                </div>
              </div>

              {/* Step 05 */}
              <div className="py-6 sm:py-7 flex items-start gap-5 sm:gap-8 group">
                <span className="font-mono text-sm sm:text-base font-black text-white/80 shrink-0 pt-0.5 tracking-wider">
                  05
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-1.5 group-hover:text-[#F5A623] transition-colors">
                    전문가 구분
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-400 font-normal leading-relaxed break-keep">
                    직접 대응, 행정사 업무, 변호사 검토가 필요한 영역을 나눕니다.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Core Services Preview Section */}
      <section className="py-12 md:py-24 bg-white border-t border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-14">
            <div>
              <span className="text-[#F5A623] font-bold text-xs md:text-sm tracking-widest uppercase mb-2 block">
                SPECIALIZED SOLUTIONS
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-[#002C5F] break-keep">
                행정114 핵심 해결 가능 서비스
              </h2>
            </div>
            <Link 
              to="/services" 
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm md:text-base font-bold text-[#002C5F] hover:text-[#F5A623] transition-colors group"
            >
              전체 서비스 10개 분야 보기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
            {SERVICES.map((service) => (
              <Link 
                key={service.id}
                to="/services"
                className="group bg-[#F8F9FA] hover:bg-white p-5 rounded-[22px] border border-gray-100 hover:border-[#F5A623] hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#002C5F] group-hover:text-[#F5A623] group-hover:scale-105 transition-all mb-3">
                    {service.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-black text-[#002C5F] mb-1.5 group-hover:text-[#002C5F] truncate">
                    {service.title}
                  </h3>
                  {service.tags && (
                    <div className="flex flex-wrap gap-1 mb-2.5">
                      {service.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-bold bg-white text-gray-600 px-1.5 py-0.5 rounded border border-gray-100">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-gray-200/60 flex items-center justify-between text-[11px] font-bold text-[#F5A623] group-hover:text-[#002C5F]">
                  <span>솔루션 보기</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Model Section */}
      <section className="py-12 md:py-28 bg-[#002C5F] text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-xl md:text-4xl font-bold mb-3 md:mb-4 break-keep">
              변호사와 행정사의 협업시스템
            </h2>
            <div className="w-10 md:w-12 h-1 bg-[#F5A623] mx-auto mb-4 md:mb-6"></div>
            <p className="text-[#F5A623] text-sm md:text-xl font-black tracking-tight break-keep">
              가장 가성비 있고 빠르게 해결되는<br className="md:hidden" /> 루트를 설계합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 px-2 md:px-0">
            <div className="bg-white/5 p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-white/10">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="bg-[#F5A623] text-white px-2.5 py-1 rounded-full text-[9px] md:text-[10px] font-black tracking-widest">TRACK 01</div>
                <Search className="w-4 h-4 md:w-5 md:h-5 text-[#F5A623]" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 break-keep text-white">치밀한 사실조사 및 증거확보</h3>
              <p className="text-gray-300 leading-relaxed font-medium break-keep text-xs md:text-base opacity-80">
                행정청의 내부 프로세스를 꿰뚫는 시각으로 현장의 증거를 수집하고, AI가 읽지 못하는 '행정의 맥락'을 짚어내어 승소의 기초를 다집니다.
              </p>
            </div>

            <div className="bg-white/5 p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-white/10">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="bg-[#F5A623] text-white px-2.5 py-1 rounded-full text-[9px] md:text-[10px] font-black tracking-widest">TRACK 02</div>
                <Scale className="w-4 h-4 md:w-5 md:h-5 text-[#F5A623]" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 break-keep text-white">완벽한 법리 구축 및 소송 대응</h3>
              <p className="text-gray-300 leading-relaxed font-medium break-keep text-xs md:text-base opacity-80">
                확보된 사실관계를 바탕으로 승소 가능성을 치밀하게 계산하고, 법원에서 인정받는 강력한 법률적 논거를 통해 최종 구제를 완성합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Initial Diagnosis Form Section (지금 가장 먼저 받은 문서를 확인하세요) */}
      <section id="consultation-form" className="py-14 md:py-24 bg-[#071E3D] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Heading & Information */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full pt-2">
              <div>
                <span className="text-[#F5A623] font-bold text-xs md:text-sm tracking-wide mb-3 block">
                  행정문제가 생기면, 가장 먼저 행정114
                </span>
                <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6 break-keep tracking-tight text-white">
                  지금 가장 먼저<br />
                  받은 문서를 확인하세요.
                </h2>
                <p className="text-sm md:text-lg text-gray-300 font-medium leading-relaxed break-keep mb-8 max-w-lg">
                  문서를 받은 날짜와 기관, 가장 궁금한 내용을 남겨주시면 초기 상담을 위한 확인 항목을 정리합니다.
                </p>
              </div>

              {/* Left Contact Card */}
              <div className="bg-[#0e2a4f]/90 border border-white/10 rounded-2xl p-6 md:p-8 mt-4 shadow-lg">
                <div className="text-xs md:text-sm text-gray-300 font-medium mb-1">전화 상담</div>
                <div className="text-2xl md:text-3xl font-black text-[#F5A623] tracking-tight mb-2">
                  {CONTACT.phone}
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  상담시간 {CONTACT.consultationHours}
                </div>
                <div className="mt-4 flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  <a 
                    href={`tel:${CONTACT.phone.replace(/-/g, '')}`} 
                    className="inline-flex items-center gap-2 bg-[#002C5F] hover:bg-[#001f44] text-white px-4 py-2.5 rounded-xl text-xs font-bold border border-white/20 transition-all"
                  >
                    <Smartphone className="w-3.5 h-3.5 text-[#F5A623]" /> 휴대전화 직통
                  </a>
                  <a 
                    href={`tel:${CONTACT.office.replace(/[()-]/g, '')}`} 
                    className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#e09512] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md"
                  >
                    <Phone className="w-3.5 h-3.5" /> 대표전화 연결
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: White Card Form (초기진단 신청) */}
            <div className="lg:col-span-6 w-full">
              <div className="bg-white rounded-[28px] p-6 sm:p-8 md:p-10 text-gray-800 shadow-2xl border border-gray-100">
                
                {isSubmitted ? (
                  <div className="py-8 text-center flex flex-col items-center">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-[#002C5F] mb-2">초기진단 신청이 접수되었습니다</h3>
                    <p className="text-gray-600 text-sm md:text-base break-keep max-w-md mb-6 leading-relaxed">
                      작성해주신 내용이 담당자 메일(<span className="font-semibold text-gray-700">{CONTACT.email}</span>)로 전달되었습니다. 전담 변호사·행정사가 사전 검토 후 신속히 연락드리겠습니다.
                    </p>

                    <div className="w-full max-w-md space-y-3 mb-6">
                      <a
                        href={CONTACT.kakao}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#FEE500] hover:bg-[#ebd300] text-[#3C1E1E] py-3.5 px-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]"
                      >
                        <MessageSquare className="w-4 h-4 fill-current" />
                        <span>카카오톡 1:1 오픈채팅으로 바로 문의하기</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                      </a>

                      <a
                        href={`tel:${CONTACT.phone.replace(/-/g, '')}`}
                        className="w-full bg-[#002C5F] hover:bg-[#001f44] text-white py-3.5 px-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]"
                      >
                        <Smartphone className="w-4 h-4 text-[#F5A623]" />
                        <span>긴급 직통 전화 연결 ({CONTACT.phone})</span>
                      </a>
                    </div>

                    <button
                      onClick={() => {
                        setFormData({
                          nameOrBusiness: '',
                          phone: '',
                          agency: '',
                          situation: '',
                          message: '',
                          agreed: false
                        });
                        setIsSubmitted(false);
                      }}
                      className="text-xs text-gray-500 hover:text-gray-800 underline font-bold transition-colors"
                    >
                      새로운 문의 작성하기
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl font-black text-[#002C5F] tracking-tight">
                        초기진단 신청
                      </h3>
                      <p className="text-xs md:text-sm text-gray-500 mt-1 font-medium">
                        표시된 항목을 작성해 주세요.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* 이름 또는 상호명 */}
                      <div>
                        <label className="block text-xs md:text-sm font-black text-gray-700 mb-1.5">
                          이름 또는 상호명
                        </label>
                        <input
                          type="text"
                          name="nameOrBusiness"
                          required
                          value={formData.nameOrBusiness}
                          onChange={handleFormChange}
                          placeholder="예: 홍길동 / ○○식당"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#002C5F] focus:border-transparent text-sm transition-all"
                        />
                      </div>

                      {/* 연락처 */}
                      <div>
                        <label className="block text-xs md:text-sm font-black text-gray-700 mb-1.5">
                          연락처
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleFormChange}
                          placeholder="010-0000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#002C5F] focus:border-transparent text-sm transition-all"
                        />
                      </div>

                      {/* 연락한 기관 */}
                      <div>
                        <label className="block text-xs md:text-sm font-black text-gray-700 mb-1.5">
                          연락한 기관
                        </label>
                        <select
                          name="agency"
                          required
                          value={formData.agency}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#002C5F] focus:border-transparent text-sm bg-white transition-all text-gray-700"
                        >
                          <option value="">기관을 선택해 주세요</option>
                          <option value="구청 / 시청 / 군청">구청 / 시청 / 군청 (위생과·건축과·환경과 등)</option>
                          <option value="경찰서 / 특별사법경찰(특사경)">경찰서 / 특별사법경찰 (특사경)</option>
                          <option value="식품의약품안전처 (식약처)">식품의약품안전처 (식약처)</option>
                          <option value="국민건강보험공단 / 보건복지부">국민건강보험공단 / 보건복지부 (장기요양·복지시설)</option>
                          <option value="환경부 / 지자체 환경부서">환경부 / 지자체 환경부서</option>
                          <option value="고용노동부 / 근로복지공단">고용노동부 / 근로복지공단</option>
                          <option value="한국산업단지공단 / 지자체 기업과">한국산업단지공단 / 지자체 기업지원과</option>
                          <option value="도시정비조합 / 토지수용위원회">도시정비조합 / 토지수용위원회</option>
                          <option value="기타 행정청 / 공공기관">기타 행정청 / 공공기관</option>
                        </select>
                      </div>

                      {/* 현재 상황 */}
                      <div>
                        <label className="block text-xs md:text-sm font-black text-gray-700 mb-1.5">
                          현재 상황
                        </label>
                        <select
                          name="situation"
                          required
                          value={formData.situation}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#002C5F] focus:border-transparent text-sm bg-white transition-all text-gray-700"
                        >
                          <option value="">상황을 선택해 주세요</option>
                          <option value="사전통지서(의견제출 통지) 수령">사전통지서 (의견제출 통지) 수령 [골든타임]</option>
                          <option value="영업정지 / 등록취소 / 폐쇄명령 처분 통지">영업정지 / 등록취소 / 폐쇄명령 처분 통지</option>
                          <option value="과징금 / 이행강제금 / 제재부가금 부과">과징금 / 이행강제금 / 제재부가금 부과</option>
                          <option value="보조금 환수 / 장기요양기관 지정취소 통지">보조금 환수 / 장기요양기관 지정취소 통지</option>
                          <option value="특사경·경찰 출석요구 및 조사 진행">특사경·경찰 출석요구 및 조사 진행</option>
                          <option value="인허가 반려 / 거부처분 수령">인허가 반려 / 거부처분 수령</option>
                          <option value="재개발·재건축 조합 및 관리처분 분쟁">재개발·재건축 조합 및 관리처분 분쟁</option>
                          <option value="토지수용 보상금 협의 / 수용재결">토지수용 보상금 협의 / 수용재결</option>
                          <option value="기타 행정처분 및 분쟁">기타 행정처분 및 분쟁</option>
                        </select>
                      </div>

                      {/* 간단한 내용 */}
                      <div>
                        <label className="block text-xs md:text-sm font-black text-gray-700 mb-1.5">
                          간단한 내용
                        </label>
                        <textarea
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleFormChange}
                          placeholder="문서 제목, 받은 날짜, 궁금한 내용을 적어주세요."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#002C5F] focus:border-transparent text-sm transition-all resize-none"
                        ></textarea>
                      </div>

                      {/* 개인정보 수집 동의 */}
                      <div className="flex items-center gap-2 pt-1">
                        <input
                          type="checkbox"
                          id="agreed"
                          name="agreed"
                          checked={formData.agreed}
                          onChange={handleFormChange}
                          required
                          className="w-4 h-4 rounded text-[#002C5F] focus:ring-[#002C5F] border-gray-300 cursor-pointer"
                        />
                        <label htmlFor="agreed" className="text-xs text-gray-600 select-none cursor-pointer flex-1">
                          상담 연락을 위한 개인정보 수집·이용에 동의합니다.{' '}
                          <button
                            type="button"
                            onClick={() => setShowPrivacyModal(true)}
                            className="text-gray-500 underline hover:text-[#002C5F] ml-1 font-bold inline-block"
                          >
                            내용 보기
                          </button>
                        </label>
                      </div>

                      {/* 제출 버튼 */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#B8EBD0] hover:bg-[#a3e4be] text-[#002C5F] font-black py-4 rounded-xl text-base transition-all shadow-sm active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer mt-3"
                      >
                        {isSubmitting ? (
                          <span className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-[#002C5F] border-t-transparent"></span>
                        ) : (
                          <span>상담 신청하기</span>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 text-gray-800 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3 mb-4">
              <h4 className="font-bold text-lg text-[#002C5F]">개인정보 수집 및 이용 동의</h4>
              <button 
                onClick={() => setShowPrivacyModal(false)}
                className="text-gray-400 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs md:text-sm text-gray-600 space-y-3 leading-relaxed">
              <p className="font-bold text-gray-700">1. 수집 항목</p>
              <p>이름 또는 상호명, 연락처, 연락한 기관, 현재 상황, 간단한 내용</p>
              
              <p className="font-bold text-gray-700">2. 수집 및 이용 목적</p>
              <p>행정114 초기진단 및 상담 신청에 따른 본인 확인, 사실관계 파악, 상담 일정 안내</p>
              
              <p className="font-bold text-gray-700">3. 보유 및 이용 기간</p>
              <p>상담 완료 및 문의 처리 목적 달성 후 1년간 보관 후 안전하게 파기합니다.</p>
            </div>
            <button
              onClick={() => {
                setFormData(prev => ({ ...prev, agreed: true }));
                setShowPrivacyModal(false);
              }}
              className="w-full bg-[#002C5F] text-white py-3 rounded-xl font-bold mt-6 text-sm hover:bg-[#001f44] transition-all"
            >
              동의하고 닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;