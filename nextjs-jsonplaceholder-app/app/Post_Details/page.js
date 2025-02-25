"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { fetching } from "./fetching"; 

function Display() {
    const router = useRouter(); // using router to navigate back to the homepage
    const searchParams = useSearchParams();
    const id = searchParams.get("id"); 
    const content = fetching(id); 

    if (!content) return <p> Loading...</p>;

    return (
        <div>
            <h1>{content.title}</h1>
            <p>{content.body}</p>
            <button  onClick={() => router.push("/")} >
                Go Back to Homepage
            </button>
        </div>
    );
}

export default Display;
