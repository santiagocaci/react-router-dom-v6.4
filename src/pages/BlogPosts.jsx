import { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";

import Posts from "../components/Posts";
import { getPosts, getSlowPosts } from "../util/api";

function BlogPostsPage() {
  const loaderData = useLoaderData();
  return (
    <>
      <h1>Our Blog Posts</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Await
          resolve={loaderData.post}
          errorElement={<p>Error loading blog posts.</p>}
        >
          {(loadedPost) => <Posts blogPosts={loadedPost} />}
        </Await>
      </Suspense>
    </>
  );
}

export async function loader() {
  return defer({ post: getSlowPosts() });
  //* si usa await React esperara hasta que los datos esten
  //* para renderizar toda la pagina
  // return defer({ post: await getSlowPosts() });
}

export default BlogPostsPage;
