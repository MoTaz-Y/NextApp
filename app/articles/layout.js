export const metadata = {
  title: "Articles",
};

export default function ArticlesLayout({ children }) {
  return (
    <div>
      <h1>Articles page</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "16px",
          backgroundColor: "var(--gray-alpha-200)",
          borderRadius: "8px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
