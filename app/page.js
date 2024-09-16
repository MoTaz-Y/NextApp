import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Geist</h1>
      <p>
        Geist is a new design system for building user interfaces. It is based
        on [Next.js](https://nextjs.org) and [Tailwind
        CSS](https://tailwindcss.com).
      </p>
      <p>
        <a
          className="primary"
          href="https://github.com/geist-org/geist"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </p>
      <p>
        <a
          className="secondary"
          href="https://github.com/geist-org/geist"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </p>
    </div>
  );
}
