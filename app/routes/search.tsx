/*
  Remix forms a deeper look                     https://daily-dev-tips.com/posts/remix-forms-a-deeper-look/
*/

import { Form, useLoaderData, useSearchParams } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";

export let loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  const query = new URLSearchParams(url.search);
  return json({ query: query.get('query') });
};

export default function Search() {
  const data = useLoaderData();
  console.log(data);
  const [params] = useSearchParams()

  return (
    <main>
      <h1>Search page</h1>
      <Form method="get">
        <input type="text" name="query" placeholder="Search for something..." defaultValue={params.get("query")} />
      </Form>
    </main>
  )
}