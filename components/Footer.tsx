
import React from 'react';
import { Phone, Mail, MapPin, Smartphone, MessageSquare } from 'lucide-react';
import { CONTACT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          <div>
            <h3 className="text-xl md:text-2xl font-bold font-serif mb-6 text-[#F5A623]">법무법인 액시스 행정문제연구소</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 break-keep">
              변호사와 행정사의 긴밀한 협업을 통해<br />
              소상공인의 권익을 보호하고 최고의 행정 솔루션을 제공합니다.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={CONTACT.kakao} target="_blank" rel="noopener noreferrer" className="bg-[#FEE500] text-[#3C1E1E] font-bold p-2.5 rounded hover:bg-[#ebd300] transition-colors flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span className="text-[11px] font-black px-1">카카오톡 상담</span>
              </a>
              <div className="bg-gray-800 p-2.5 rounded hover:bg-[#F5A623] transition-colors cursor-pointer">
                <span className="text-[10px] font-black px-1">BLOG</span>
              </div>
              <div className="bg-gray-800 p-2.5 rounded hover:bg-[#FF0000] transition-colors cursor-pointer">
                <span className="text-[10px] font-black px-1">YOUTUBE</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800">상담 문의</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0A4D6E] text-blue-400 shrink-0" />
                <span>
                  <a href="tel:07052224226" className="text-white hover:underline font-semibold">070-5222-4226</a>
                  <span className="text-gray-400 text-xs ml-2">(상담전화)</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-blue-400 shrink-0" />
                <span>
                  <a href="tel:01053812718" className="text-white hover:underline font-semibold">010-5381-2718</a>
                  <span className="text-gray-400 text-xs ml-2">(직통)</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">{CONTACT.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                <span className="leading-relaxed">{CONTACT.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800">운영 정책</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-medium">
              <li className="text-white">{CONTACT.hours}</li>
              <li className="hover:text-white cursor-pointer transition-colors">개인정보처리방침</li>
              <li className="hover:text-white cursor-pointer transition-colors">서비스이용약관</li>
              <li className="hover:text-white cursor-pointer transition-colors">면책고지</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400 text-xs">
          <p className="mb-2 text-gray-300 font-medium">
            대표변호사 오승준 · 변호사 김채린 · 전문위원 김도현
          </p>
          <p className="mb-2 text-gray-500">
            광고책임변호사 : 오승준 (법무법인 액시스)
          </p>
          <p className="text-gray-500 tracking-wider">
            &copy; 2026 법무법인 액시스 행정문제연구소. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
