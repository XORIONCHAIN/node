import React from 'react';
import { FaTwitter, FaGithub, FaDiscord, FaEnvelope } from 'react-icons/fa';

export default function FooterContent() {
  return (
    <div className="bg-black font-geist text-white py-10 px-12 h-full w-full flex flex-col justify-between rounded-t-3xl shadow-2xl">
      <FooterNav />
      <FooterBottom />
    </div>
  );
}

const FooterNav = () => (
  <div className="flex flex-wrap gap-20 mb-8">
    <div className="flex flex-col gap-2 min-w-[120px]">
      <h3 className="mb-2 uppercase text-[#ffffff80] text-xs">About</h3>
      <p className="hover:text-[#00e676] cursor-pointer">Home</p>
      <p className="hover:text-[#00e676] cursor-pointer">Projects</p>
      <p className="hover:text-[#00e676] cursor-pointer">Our Mission</p>
      <p className="hover:text-[#00e676] cursor-pointer">Contact Us</p>
    </div>
    <div className="flex flex-col gap-2 min-w-[120px]">
      <h3 className="mb-2 uppercase text-[#ffffff80] text-xs">Education</h3>
      <p className="hover:text-[#00e676] cursor-pointer">News</p>
      <p className="hover:text-[#00e676] cursor-pointer">Learn</p>
      <p className="hover:text-[#00e676] cursor-pointer">Certification</p>
      <p className="hover:text-[#00e676] cursor-pointer">Publications</p>
    </div>
    <div className="flex flex-col gap-2 min-w-[120px]">
      <h3 className="mb-2 uppercase text-[#ffffff80] text-xs">Community</h3>
      <p className="hover:text-[#00e676] cursor-pointer">Forum</p>
      <p className="hover:text-[#00e676] cursor-pointer">Events</p>
      <p className="hover:text-[#00e676] cursor-pointer">Ambassadors</p>
      <p className="hover:text-[#00e676] cursor-pointer">Blog</p>
    </div>
    <div className="flex flex-col gap-2 min-w-[120px]">
      <h3 className="mb-2 uppercase text-[#ffffff80] text-xs">Connect</h3>
      <div className="flex gap-4 mt-1">
        <a href="#" className="hover:text-[#00e676]"><FaTwitter size={20} /></a>
        <a href="#" className="hover:text-[#00e676]"><FaGithub size={20} /></a>
        <a href="#" className="hover:text-[#00e676]"><FaDiscord size={20} /></a>
        <a href="#" className="hover:text-[#00e676]"><FaEnvelope size={20} /></a>
      </div>
    </div>
  </div>
);

const FooterBottom = () => (
  <div className="flex justify-between items-end">
    <h1 className="text-[10vw] md:text-[7vw] font-extrabold leading-[0.8] mt-10 text-white drop-shadow-lg">
      XORION
    </h1>
    <p className="text-white/70 text-sm">© {new Date().getFullYear()} Your Company</p>
  </div>
);