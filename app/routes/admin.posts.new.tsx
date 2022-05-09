import { Form, useActionData } from '@remix-run/react';
import { redirect, json } from "@remix-run/node";
import { createPost } from "~/models/post.server";

const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;

export const action = async ({ request }) => {
  const formData = await request.formData();

  const title = formData.get("title");
  const slug = formData.get("slug");
  const content = formData.get("content");

  const errors = {
    title: !title,
    slug: !slug,
    content: !content,
  };

  if (Object.values(errors).some(Boolean)) {
    const values = Object.fromEntries(formData);
    return json({ errors, values });
  }

  await createPost({ title, slug, content });
  return redirect("/admin/posts");
};

export default function PostNew() {
  const actionData = useActionData();

  return (
    <Form method='post' className='mt-4 mr-2 ml-2'>
      <p>
        <label>
          Post Title:{' '}
          <input type='text' name='title' className={inputClassName} required defaultValue={actionData?.values.title} />
        </label>
      </p>
      {actionData?.errors?.title && (
        <p className='text-red-400'>
          A title must be provided
        </p>
      )}
      <p>
        <label>
          Post Slug:{' '}
          <input type='text' name='slug' className={inputClassName} required defaultValue={actionData?.values.slug} />
        </label>
      </p>
      {actionData?.errors?.slug && (
        <p className='text-red-400'>
          A slug must be provided
        </p>
      )}
      <p>
        <label>
          Content:{' '}
          <input type='text' name='content' className={inputClassName} required defaultValue={actionData?.values.content} />
        </label>
      </p>
      {actionData?.errors?.content && (
        <p className='text-red-400'>
          A content must be provided
        </p>
      )}
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