import Link from "next/link";
export default function Posts() {
  return (
    <div>
      <h1>Articles page</h1>
      <Link href="/posts">
        <button
          className="primary"
          style={{
            height: "40px",
            padding: "0 16px",
            fontSize: "14px",
            fontWeight: "500",
            borderRadius: "10px",
          }}
        >
          Posts page
        </button>
      </Link>
    </div>
  );
}
