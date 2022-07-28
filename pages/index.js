import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Helo World</h1>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </>
  );
}

export default Home;
