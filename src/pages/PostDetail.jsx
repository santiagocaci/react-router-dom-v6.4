import { redirect, useLoaderData } from "react-router-dom";
import BlogPost from "../components/BlogPost";
import { getPost } from "../util/api";

function PostDetailPage() {
  const postData = useLoaderData();
  return (
    <>
      <BlogPost title={postData.title} text={postData.body} />
    </>
  );
}

export async function loader({ params }) {
  const id = params.id;
  const post = await getPost(id);
  return post;
}

export default PostDetailPage;
