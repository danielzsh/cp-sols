import React, { ReactNode } from 'react';
import PropTypes from 'prop-types'
import { Header } from '../header/Header';
import { Accordion, AccordionElement } from '../accordion';
import styles from './page.module.css';

export const Page = ({ children } : { children: ReactNode }) => {
  return (
    <article>
      <Header
        pageName={"CP Solutions"}
      />
      <main style={{display: 'flex'}}>
        <Accordion style={{flex: '1'}}>
          <AccordionElement label='button 1'>
              content 1
          </AccordionElement>
          <AccordionElement label='button 2'>
              content 2
          </AccordionElement>
          <AccordionElement label='button 3'>
              <AccordionElement label='nested'>
                  content 4
              </AccordionElement>
          </AccordionElement>
        </Accordion>
        <section style={{flex: '5'}}>
          { children }
        </section>
        </main>
    </article>
  );
};