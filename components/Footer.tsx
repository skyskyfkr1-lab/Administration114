
import React from 'react';
import { Phone, Mail, MapPin, Smartphone, MessageSquare } from 'lucide-react';
import { CONTACT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          <div>
            <h3 className="text-xl md:text-2xl font-bold font-serif mb-6 text-[#F5A623]">행정 114</h3>
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
            <ul className="space-y-5 text-gray-400 text-sm">
              <li className="flex items-center gap-4">
                <Smartphone className="w-5 h-5 text-[#F5A623]" />
                <span className="font-medium">{CONTACT.phone} (휴대폰)</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[#F5A623]" />
                <span className="font-medium">{CONTACT.office} (일반전화)</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#F5A623]" />
                <span className="font-medium">{CONTACT.email}</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#F5A623] mt-1 shrink-0" />
                <span className="font-medium leading-relaxed">{CONTACT.address}</span>
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
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs font-medium tracking-widest">
          &copy; {new Date().getFullYear()} 행정 114. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
