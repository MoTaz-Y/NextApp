export default function Posts(props) {
  console.log(props);
  return (
    <div>
      <h1>Post title {props.params.title} page</h1>
    </div>
  );
}
