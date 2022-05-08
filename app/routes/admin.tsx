import { Link, Outlet } from '@remix-run/react';
import type { LinksFunction } from '@remix-run/server-runtime';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'icon',
      href: '/Jonatandb_favicon.ico',
      type: 'x-image/ico'
    },
    {
      rel: 'stylesheet',
      href: '/Jonatandb.css'
    }
  ];
};

export default function AdminAdmin() {
  return (
    <div className='mx-auto max-w-4xl'>
      <h1 className='my-6 mb-2 border-b-2 text-center text-3xl jonatandb-red'>
        My super cool admin
      </h1>
      <header className='border-b-2 mb-2 p-2'>
        <ul className='flex gap-3'>
          <li>
            <Link to={'/'} className='text-blue-600 underline'>
              Home
            </Link>
          </li>
          <li>
            <Link to={'/admin'} className='text-blue-600 underline'>
              Admin
            </Link>
          </li>
          <li>
            <Link to={'posts'} className='text-blue-600 underline'>
              Posts
            </Link>
          </li>
        </ul>
      </header>
      <main className='p-4'>
        <Outlet />
      </main>
    </div>
  );
}