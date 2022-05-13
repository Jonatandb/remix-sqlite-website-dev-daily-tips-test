import { Outlet } from '@remix-run/react';

export default function Article() {
  return (
    <div className='prose'>
      <h1>Welcome to the article:</h1>
      <Outlet />
    </div>
  );
}