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
        <Nav>{renderDir()}</Nav>
        <section className="flex-[5_5_0%]">
          { children }
        </section>
        </main>
    </article>
  );
};

function renderDir(path="app/content/") : ReactNode {
  const dir = readdirSync(path, {withFileTypes: true});
  const res : ReactNode[] = [];
  for (const item of dir) {
    if (item.name == "page.mdx") {
      const folder_name = path.split("/").at(-2);
      const true_name = folder_name.split("_").map((str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }).join(" ");
      // const frontmatter = matter(readFileSync(path + item.name));
      return (
        <div className="ml-3 text-lg">
          <Link href={path.slice(4)}>
            { /* frontmatter.data.title */ }
            {true_name}
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
    const true_name = folder_name.split("_").map((str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }).join(" ");
    return <AccordionElement label={true_name}>{accordion}</AccordionElement>
  }
}