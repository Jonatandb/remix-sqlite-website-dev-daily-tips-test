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


export async function getPost(slug: string | undefined): Promise<Post> {
  const posts = await getPosts();
  return posts.filter((post) => post.slug === slug)[0];
}