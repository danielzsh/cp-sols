import dynamic from "next/dynamic";
const getDynamicComponent = (c) => dynamic(() => import(`../${c}/page.mdx`), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});
export default function Page({ params }: { params: { slug: string[] } }) {
    const path = params.slug.join("/");
    const Component = getDynamicComponent(path);
    return <Component />
}