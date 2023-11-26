import PostList from "./PostList";

const PostLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-4">
      <div className="grid-cols-1 grid-col-1 px-4 py-2 overflow-y-auto max-h-screen h-[calc(100vh-3rem)] bg-slate-400">
        <PostList />
      </div>
      <div className="grid-cols-3">{children}</div>
    </div>
  );
};

export default PostLayout;
