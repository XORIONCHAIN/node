import React from 'react';
import FooterContent from './Home/Footer'
export default function Footer() {
  return (
    <div
      className="relative h-[600px] bg-transparent"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+600px)] -top-[100vh]">
        <div className="h-[600px] sticky top-[calc(100vh-600px)]">
          <FooterContent />
        </div>
      </div>
    </div>
  );
}