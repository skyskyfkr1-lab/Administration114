
import React from 'react';
import { Phone, Mail, MapPin, Smartphone } from 'lucide-react';
import { CONTACT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold font-serif mb-4">행정 114</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              행정사와 변호사의 긴밀한 협업을 통해<br />
              소상공인의 권익을 보호하고 최고의 행정 솔루션을 제공합니다.
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://open.kakao.com/o/gsUcgBbi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 p-2 rounded hover:bg-[#F5A623] transition-colors cursor-pointer"
              >
                <span className="text-xs font-bold px-1">KAKAOTALK</span>
              </a>
              <div className="bg-gray-800 p-2 rounded hover:bg-[#F5A623] transition-colors cursor-pointer">
                <span className="text-xs font-bold px-1">BLOG</span>
              </div>
              <div className="bg-gray-800 p-2 rounded hover:bg-[#F5A623] transition-colors cursor-pointer">
                <span className="text-xs font-bold px-1">CAFE</span>
              </div>
              <div className="bg-gray-800 p-2 rounded hover:bg-[#FF0000] transition-colors cursor-pointer">
                <span className="text-xs font-bold px-1">YOUTUBE</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">상담 문의</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <Smartphone className="w-4 h-4 text-[#F5A623]" />
                <span>{CONTACT.phone} (휴대폰)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F5A623]" />
                <span>{CONTACT.office} (일반전화)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F5A623]" />
                <span>{CONTACT.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F5A623] mt-1 shrink-0" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">운영 정책</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>{CONTACT.hours}</li>
              <li>개인정보처리방침</li>
              <li>서비스이용약관</li>
              <li>면책고지</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} 행정 114. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
