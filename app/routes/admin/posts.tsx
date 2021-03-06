import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
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
      <nav className="col-span-4 md:col-span-1">
        <ul className='ml-2'>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                to={`${post.slug}`}
                className="text-blue-600 underline"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="col-span-4 md:col-span-3">
        <Outlet />
      </main>
    </div>
  );
}