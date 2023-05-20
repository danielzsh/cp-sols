import React from 'react';
import Link from 'next/link';

export const Header = ({ pageName } : { pageName : string }) => (
  <header>
    <div className="border-b border-gray-200 px-4 py-5 flex items-center">
      <img 
        width="32" 
        height="32" 
        src="/invert_santa.png" 
        className="rounded-full"
      />
      <h1><Link href="/">{ pageName }</Link></h1>
    </div>
  </header>
);