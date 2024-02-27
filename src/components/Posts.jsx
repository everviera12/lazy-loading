import fetchPost from "../api/fetchPost";

const Post = () => {
  const { posts } = fetchPost("https://jsonplaceholder.typicode.com/posts");

  return (
    <article className="px-10 w-full bg-zinc-800 font-mono">
      <h1 className="text-lime-700 font-bold text-center text-6xl py-10">
        Titles List
      </h1>
      <article className="flex flex-col gap-20 px-10 pb-5 md:grid md:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col gap-3">
            <h2 className="text-2xl text-lime-500 font-bold">{post.title}</h2>
            <p className="text-white text-base">{post.body}</p>
          </div>
        ))}
      </article>
    </article>
  );
};

export default Post;
