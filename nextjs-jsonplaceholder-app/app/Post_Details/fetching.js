"use client";

import { useEffect, useState } from "react";
import { getPost } from "../Api/getPost";



// allows for fetching data from the api given id 
export function fetching(id) {
    const [post, setPost] = useState(null); // store post data from api 

    // ensures everytime id changes the post data is updated
    useEffect(() => {
        if (!id) return;
        async function fetchData() {
            const data = await getPost(id);
            setPost(data);
        }
        fetchData();
    }, [id]);

    return post;
}
