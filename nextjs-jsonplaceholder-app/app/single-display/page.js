"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

async function getPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
}

function Display() {

 
}

export default Display;
