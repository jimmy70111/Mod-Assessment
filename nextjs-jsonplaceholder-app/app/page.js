import Link from "next/link";


// Limited the post amount to 10
async function fetch10posts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const posts = await res.json();

    return posts;
  }


  const HomePage = async () => {
    const posts = await fetch10posts();

    return (
      <div>
        <h1>Home Page</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/post/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

    export default HomePage;