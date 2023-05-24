export default async function Page({ params }: { params: { slug: string[] } }) {
    const path = params.slug.join("/");
    const {
        default: Component,
        meta
    } = await import(`../${path}.mdx`);
    return (
        <>
            <h1>{meta.title}</h1>
            <Component />
        </>
    );
}