import { Outlet } from '@remix-run/react';

export default function Article() {

  return (
    <div className='prose'>
      <h1>Welcome to the articles page:</h1>
      <Outlet />
    </div>
  );
}