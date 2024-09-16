import Todo from "../components/todo";
import Link from "next/link";
// static side generation vs server side generation vs incremental static regeneration
export default async function Posts() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
  //   next: { revalidate: 10 }, // 10 seconds revalidation Incremental Static Regeneration everhy 10 seconds
  //   cache: "no-store", //force-store statice side generation no-store server side generation
  // });
  // const todo = await response.json();
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  console.log(posts);

  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "16px" }}>Posts page</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            margin: "auto",
            marginTop: "16px",
            padding: "16px",
            backgroundColor: "#142345",
            borderRadius: "8px",
            textAlign: "left",
            width: "80%",
          }}
        >
          <Link href={`/posts/${post.id}`}>
            <h2 style={{ marginBottom: "8px" }}>{post.title}</h2>
            <p>{post.body}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
