export default async function Page({ params }: { params: { slug: string[] } }) {
    const path = params.slug.join("/");
    const {
        default: Component
    } = await import(`../${path}/page.mdx`);
    return <Component />
}