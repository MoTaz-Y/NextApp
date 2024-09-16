export default async function PostDetails({ postID }) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postID}`
  );
  const post = await response.json();

  return (
    <div
      style={{
        padding: "16px",
        textAlign: "left",
        width: "80%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "16px",
        backgroundColor: "#142345",
        borderRadius: "8px",
      }}
    >
      <h1>Post {postID}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
