import React, { ReactNode } from 'react';
import { Header } from '../header/Header';
import { Accordion, AccordionElement } from '../accordion';
import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { Nav } from '../nav';

export const Page = ({ children } : { children: ReactNode }) => {
  const nav = renderDir("app/");
  return (
    <article>
      <Header
        pageName={"CP Solutions"}
      />
      <main className="flex">
        <Nav>{renderDir("app/")}</Nav>
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
      return (
        <div className="ml-3 text-lg">
          <Link href={path}>
            {frontmatter.data.title}
          </Link>
        </div>
      );
    }
    else if (item.isDirectory()) 
      res.push(renderDir(path + item.name + '/'));
  }
  const accordion = <Accordion className={path == "app/" ? "w-72" : ""}>{res}</Accordion>;
  if (path == "app/") return accordion;
  else return <AccordionElement label={path.split("/").at(-2)}>{accordion}</AccordionElement>
}