export function loader() {
  throw new Error("I am a failure!");
}

export function ErrorBoundary({ error }) {
  return (
    <div className='bg-red-100 border border-red-300 p-4'>
      <h1 className='text-2xl'>Something went wrong!</h1>
      <p>{error.message}</p>
    </div>
  );
}

export default function ErrorIndex() {
  return <h1>🙈</h1>;
}