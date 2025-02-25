"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { fetching } from "./fetching"; 

function Display() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get("id"); 
    const content = fetching(id); 

    if (!content) return (
        <p className="text-center  text-gray-600">Loading...</p>
    );

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
            <div className="max-w-lg bg-white p-6 rounded-lg shadow-1g">
                <h1 className="text-2xl font-bold text-gray-800">{content.title}</h1>
                <p className="mt-7 text-gray-700">{content.body}</p>
                
                <button  
                    className="mt-10 px-6 py-2 bg-black text-white font-bold rounded-full shadow-md transition"
                    onClick={() => router.push("/")}
                >
                     Back
                </button>
            </div>
        </div>
    );
}

export default Display;
