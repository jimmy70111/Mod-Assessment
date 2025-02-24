import Link from "next/link";
import { fetchPosts } from "./Api/fetchPosts";


  const HomePage = async () => {
    const posts = await fetchPosts();




    return (
      <div>
        <h1>Home Page</h1>
        <ul>

          {posts.map((post) => (
            <li key={post.id}>

{/* Pass post ID as a link to the Post Details component */}
               <Link href={`/Post_Details?id=${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

    export default HomePage;