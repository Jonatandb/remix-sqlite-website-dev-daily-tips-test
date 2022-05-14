import * as firstArticle from './my-first-article.md';
import * as secondArticle from './mdx-sample.mdx';
import { Link, useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/server-runtime';
console.log('index.tsx');

function postFromModule(mod) {
  console.log({ mod });
  return {
    slug: mod.filename.replace(/\.mdx?$/, ''),
    mod,
    ...mod.attributes.meta,
    title: mod.attributes?.meta?.title || mod.attributes?.title,
    description: mod.attributes?.meta?.description || mod.attributes?.description
  };
}

export async function loader() {
  return json([postFromModule(firstArticle), postFromModule(secondArticle)]);
}


export default function Index() {
  const posts = useLoaderData();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={post.slug}>{post.title}</Link>
          {post.description ? <p>{post.description}</p> : null}
        </li>
      ))}
    </ul>
  );
}