import React, { ReactNode } from 'react';
import { Header } from '../header/Header';
import { Accordion, AccordionElement } from '../accordion';
import { readdirSync } from 'fs';
import Link from 'next/link';
import { Nav } from '../nav';

export const Page = ({ children } : { children: ReactNode }) => {
  return (
    <article>
      <Header
        pageName={"CP Solutions"}
      />
      <main className="flex">
        <Nav>{renderDir()}</Nav>
        <section className="flex-[5_5_0%]">
          { children }
        </section>
        </main>
    </article>
  );
};

async function renderDir(path="app/content/") {
  const dir = readdirSync(path, {withFileTypes: true});
  const res : ReactNode[] = [];
  for (const item of dir) {
    if (item.name.split(".").at(-1) == "mdx") {
      const {
        meta
      } = await import("../../" + path + item.name);
      res.push(
        <div className="ml-3 text-lg">
          <Link href={path.slice(4) + item.name.split(".")[0]}>
            {meta.title}
          </Link>
        </div>
      );
    }
    else if (item.isDirectory() && item.name != "[...slug]") 
      res.push(renderDir(path + item.name + '/'));
  }
  const accordion = <Accordion className={path == "app/content/" ? "w-72" : ""}>{res}</Accordion>;
  if (path == "app/content/") return accordion;
  else {
    const folder_name = path.split("/").at(-2);
    const true_name = folder_name.replaceAll("_", " ");
    return <AccordionElement label={true_name}>{accordion}</AccordionElement>
  }
}