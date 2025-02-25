import Link from "next/link";
import { fetchPosts } from "./Api/fetchPosts";

const HomePage = async () => {

    // fetch posts from api fucntion to get the firs 10 posts
   const posts = await fetchPosts();




  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-3g bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-3">10 Posts</h1>
        {/* Pass post ID as a link to the Post_Details */}
        <ul className="space-y-2">
          {posts.map((post) => (
            <li key={post.id} className="border-b border-gray pb-3 ">
              <Link href={`/Post_Details?id=${post.id}`}
              className="block text-lg font-semibold text-blue-600 hover:text-blue-800 "
              >{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
