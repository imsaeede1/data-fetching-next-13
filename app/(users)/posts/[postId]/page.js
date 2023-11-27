import NotFound from "./not-found";
export const dynamicParams = true;
async function fetchPost(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    // { cache: "force-cache" }
    { next: { revalidate: 60 } }
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

export async function generateStaticParams() {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (res) => res.json()
  );

  return posts.slice(0, 4).map((post) => ({
    postId: post.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const product = await fetchPost(params.id);

  return { title: product.title, description: product.body };
}
