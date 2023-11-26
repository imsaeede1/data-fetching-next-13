import NotFound from "./not-found";

async function fetchPost(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await res.json();
  return post;
}
const Post = async ({ params }) => {
  const postDetail = await fetchPost(params.postId);
  if (!postDetail.id) return NotFound();

  return (
    <div>
      <h2 className="font-bold">{postDetail.title}</h2>
      <p>{postDetail.body}</p>
    </div>
  );
};

export default Post;
