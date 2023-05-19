import React, { ReactNode } from 'react';
import { Header } from '../header/Header';
import { Accordion, AccordionElement } from '../accordion';
import { Dirent, readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
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
    if (item.name == "page.mdx" && path != "app/") {
      console.log(path, path.split("/"));
      const frontmatter = matter(readFileSync(path + item.name));
      return <Link href={path}>{frontmatter.data.title}</Link>;
    }
    else if (item.isDirectory()) 
      res.push(renderDir(path + item.name + '/'));
  }
  const accordion = <Accordion className={path == "app/" ? "flex-1" : ""}>{res}</Accordion>;
  if (path == "app/") return accordion;
  else return <AccordionElement label={path.split("/").at(-2)}>{accordion}</AccordionElement>
}