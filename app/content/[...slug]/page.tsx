import Link from "next/link";

export default async function Page({ params }: { params: { slug: string[] } }) {
    const path = params.slug.join("/");
    const {
        default: Component,
        meta
    } = await import(`../${path}.mdx`);
    return (
        <>
            <h1>{meta.title}</h1>
            {
                ("problem" in meta) ? 
                <Link href={meta.problem} target="_blank">
                    <strong>Problem Statement</strong>
                </Link> :
                <></>
            }
            <Component />
        </>
    );
}