import React from 'react';

export const Header = ({ pageName } : { pageName : string }) => (
  <header>
    <div className="border-b border-gray-200 px-4 py-5 flex items-center">
      <img width="32" height="32" src="/invert_santa.png" className="rounded-full" />
      <h1>{ pageName }</h1>
    </div>
  </header>
);