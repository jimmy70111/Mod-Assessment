// Limited the post amount to 10


export async function fetchPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const posts = await res.json();

    return posts;
  }