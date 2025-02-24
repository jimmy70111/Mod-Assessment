"use client";

import { useEffect, useState } from "react";
import { getPost } from "./api";



// allows for fetching data from the api given id 
export function fetching(id) {
    const [post, setPost] = useState(null);

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
