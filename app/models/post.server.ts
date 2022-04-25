type Post = {
  slug: string,
  title: string,
};


export async function getPosts(): Promise<Array<Post>> {
  return [
    {
      slug: 'post-1',
      title: 'My First Post',
    },
    {
      slug: 'post-2',
      title: 'The second post I ever made',
    },
  ];
}