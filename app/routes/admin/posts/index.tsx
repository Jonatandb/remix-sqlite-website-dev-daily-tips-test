import { Link } from '@remix-run/react';

export default function PostIndex() {
  return (
    <>
      <p className='mt-4'>
        <Link to='new' className='rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300'>
          Create a New Post
        </Link>
      </p>
      <p className='mt-4'>
        <Link to='error' className='rounded bg-red-500 py-2 px-4 text-white hover:bg-red-600 focus:bg-red-400 disabled:bg-blue-300'>
          ✋🏻 Don't click me! ⚠
        </Link>
      </p>
    </>
  );
}