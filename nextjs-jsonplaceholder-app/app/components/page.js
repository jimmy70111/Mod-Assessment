"use client";

import { useSearchParams } from "next/navigation";
import { fetching } from "./fetching"; 

function Display() {
    //  get info from components
    const searchParams = useSearchParams();
    const id = searchParams.get("id"); 
    const content = fetching(id); 

    // testing content
    if (!content) return <p>Error</p>;


    
    return (
        <div>
            <h1>{content.title}</h1>
            <p>{content.body}</p>
        </div>
    );
}

export default Display;
