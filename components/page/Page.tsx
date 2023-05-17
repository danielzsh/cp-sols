import React, { ReactNode } from 'react';
import { Header } from '../header/Header';
import { Accordion } from '../accordion';

export const Page = ({ children } : { children: ReactNode }) => {
  return (
    <article>
      <Header
        pageName={"CP Solutions"}
      />
      <main className="flex">
        <Accordion className="flex-1"
          content={
            {
              'button 1': <>content 1</>,
              'button 2': <>content 2</>,
              'button 3': {
                'nested 1': <>content 3</>,
                'nested 2': <>content 4</>
              }
            }
          }
        />
        <section className="flex-[5_5_0%]">
          { children }
        </section>
        </main>
    </article>
  );
};