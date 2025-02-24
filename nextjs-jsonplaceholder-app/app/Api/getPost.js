// Limited the post amount to 10


export async function getPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
}
