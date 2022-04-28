import { Form } from '@remix-run/react';
import { redirect } from "@remix-run/node";
import { createPost } from "~/models/post.server";

const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;

export const action = async ({ request }) => {
  const formData = await request.formData();

  const title = formData.get("title");
  const slug = formData.get("slug");
  const content = formData.get("content");

  await createPost({ title, slug, content });
  return redirect("/posts");
};

export default function NewPost() {
  return (
    <Form method='post' className='mt-4 mr-2 ml-2'>
      <p>
        <label>
          Post Title:{' '}
          <input type='text' name='title' className={inputClassName} required />
        </label>
      </p>
      <p>
        <label>
          Post Slug:{' '}
          <input type='text' name='slug' className={inputClassName} />
        </label>
      </p>
      <p>
        <label>
          Content:{' '}
          <input type='text' name='content' className={inputClassName} />
        </label>
      </p>
      <p className='mt-2'>
        <button
          type='submit'
          className='rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300'
        >
          Create
        </button>
      </p>
    </Form>
  );
}