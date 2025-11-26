
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => (
  <svg 
    viewBox="0 0 200 65" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    aria-label="Granat Logo"
  >
    {/* Icon Group - Shifted for horizontal header layout */}
    <g transform="translate(15, 5) scale(0.65)">
      {/* Leaves/Ears */}
      <path d="M35 10 C 35 -10, 50 -15, 48 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M48 5 C 55 -15, 70 -5, 60 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Main Hair Circle */}
      <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="2" />
      
      {/* Face Outline - Chin */}
      <path d="M32 55 Q 50 85 68 55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Eyes (Closed/Serene) */}
      <path d="M38 52 Q 42 55 46 52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M54 52 Q 58 55 62 52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Lips */}
      <path d="M48 68 Q 50 70 52 68" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Hair Swirls/Seeds details */}
      <g opacity="0.6">
          <path d="M25 35 Q 30 25 35 30" stroke="currentColor" strokeWidth="1" />
          <path d="M65 35 Q 70 25 75 30" stroke="currentColor" strokeWidth="1" />
          <path d="M40 20 Q 50 25 60 20" stroke="currentColor" strokeWidth="1" />
          <path d="M20 50 Q 25 55 20 60" stroke="currentColor" strokeWidth="1" />
          <path d="M80 50 Q 75 55 80 60" stroke="currentColor" strokeWidth="1" />
          <circle cx="35" cy="40" r="2" fill="currentColor" />
          <circle cx="65" cy="40" r="2" fill="currentColor" />
          <circle cx="50" cy="30" r="2" fill="currentColor" />
      </g>
    </g>

    {/* Text Group */}
    <text x="75" y="38" fontFamily='"Cinzel", serif' fontSize="28" fontWeight="600" fill="currentColor" letterSpacing="0.15em">GRANAT</text>
    <text x="77" y="52" fontFamily='"Manrope", sans-serif' fontSize="7.5" fill="currentColor" letterSpacing="0.3em" opacity="0.8">СТУДИЯ КРАСОТЫ</text>
  </svg>
);

export default Logo;
