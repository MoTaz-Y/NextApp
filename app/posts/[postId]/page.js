import PostDetails from "@/app/components/PostDetails";
import { Suspense } from "react";
import Loading from "../loading";

export default async function Post(props) {
  //   const lodaingJSX = (
  //     <div
  //       style={{
  //         textAlign: "center",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <h1>Loading </h1>
  //     </div>
  //   );
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "16px" }}>Details</h1>
      <Suspense fallback={<Loading />}>
        <PostDetails postID={props.params.postId} />
      </Suspense>
    </div>
  );
}
