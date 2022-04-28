import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getPost } from '~/models/post.server';

type LoaderData = {
  post: Awaited<ReturnType<typeof getPost>>,
};

export const loader: LoaderFunction = async ({ params }) => {
  return json({
    post: await getPost(params.slug),
  });
};

export default function PostSlug() {
  const { post } = useLoaderData() as LoaderData;
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        <span className='text-blue-500'>{post?.title}</span>
      </h1>
      <p className="mt-6 text-xl text-red-700 ml-4">{post?.content}</p>
    </main>
  );
}