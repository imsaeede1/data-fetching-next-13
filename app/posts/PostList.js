import axios from "axios";
import Link from "next/link";

const PostList = async () => {
  const postList = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await postList.json();
  return (
    <>
      <ul>
        {posts.slice(0, 3).map((post) => {
          return (
            <li key={post.id} className="border-b-2 pb-2">
              <article>
                <h2 className="font-bold">{post.title}</h2>
                <p className="font-normal">{post.body}</p>
                <p className="text-blue-600">
                  <Link href={`/posts/${post.id}`}>View detail</Link>
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PostList;
