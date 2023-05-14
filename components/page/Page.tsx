import React, { ReactNode } from 'react';
import { Header } from '../header/Header';
import { Accordion, AccordionElement } from '../accordion';

export const Page = ({ children } : { children: ReactNode }) => {
  return (
    <article>
      <Header
        pageName={"CP Solutions"}
      />
      <main style={{display: 'flex'}}>
        <Accordion style={{flex: 1}}
          content={
            {
              'button 1': <>content 1</>,
              'button 2': <>content 2</>,
              'button 3': {
                'nested': <>content 3</>
              }
            }
          }
        />
        <section style={{flex: '5'}}>
          { children }
        </section>
        </main>
    </article>
  );
};