import fm from 'front-matter';

interface PostAttributes {
    title?: string;
    date?: string;
    description?: string;
}

const modules = import.meta.glob('../posts/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
});

export const posts = Object.entries(modules).map(([path, raw]) => {
    const { attributes, body } = fm<PostAttributes>(raw as string);

    return {
        slug: path.split('/').pop()?.replace('.md', '') ?? '',
        meta: attributes,
        content: body,
    };
});