import React, { ReactNode } from 'react';
import { Header } from '../header/Header';
import { Accordion, AccordionElement } from '../accordion';
import { readdirSync } from 'fs';
export const Page = ({ children } : { children: ReactNode }) => {
  return (
    <article>
      <Header
        pageName={"CP Solutions"}
      />
      <main className="flex">
        {renderDir("app/")}
        <section className="flex-[5_5_0%]">
          { children }
        </section>
        </main>
    </article>
  );
};

function renderDir(path: string) : ReactNode {
  const dir = readdirSync(path, {withFileTypes: true});
  const res : ReactNode[] = [];
  for (const item of dir) {
    if (item.isDirectory()) 
      res.push(
        <AccordionElement label={item.name}>
          {renderDir(path + item.name + '/')}
        </AccordionElement>
      );
  }
  return <Accordion className={path == "app/" ? "flex-1" : ""}>{res}</Accordion>;
}