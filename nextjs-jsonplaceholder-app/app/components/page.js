"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";



function Display() {
    

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

export default Display;
