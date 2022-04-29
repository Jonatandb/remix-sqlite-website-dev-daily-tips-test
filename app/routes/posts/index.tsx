import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";
import type { LoaderFunction } from "@remix-run/node";

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPosts>>;
};

export const loader: LoaderFunction = async () => {
  return json({ posts: await getPosts() });
};

export default function PostAdmin() {
  const { posts } = useLoaderData() as LoaderData;

  return (
    <div className="grid grid-cols-4 gap-6">
      <main className="col-span-4 md:col-span-4">
        <h1 className="my-4 border-b-2 text-center text-3xl">
          <span className='text-blue-500'>Lastest posts</span>
        </h1>
      </main>
      <nav className="col-span-4 md:col-span-4">
        <ul className='ml-2 text-center'>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                to={`/posts/${post.slug}`}
                className="text-blue-600 underline"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

    </div>
  );
}