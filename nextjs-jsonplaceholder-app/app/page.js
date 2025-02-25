import Link from "next/link";
import { fetchPosts } from "./Api/fetchPosts";

const HomePage = async () => {

    // fetch posts from api fucntion to get the firs 10 posts
   const posts = await fetchPosts();




  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-3g bg-white p-5 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 text-center">10 Posts</h1>
        {/* Pass post ID as a link to the Post_Details */}
        <ul className="mt-4 text-xl text-blue-600 list-disc list-inside marker:text-black underline">
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/Post_Details?id=${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
