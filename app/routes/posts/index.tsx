import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { getPosts } from '~/models/post.server';

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPosts>>,
};

export const loader = async () => {
  return json<LoaderData>({
    posts: await getPosts(),
  })

};

export default function Posts() {
  const { posts } = useLoaderData() as LoaderData;
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">All my posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className='text-blue-600 underline'>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}