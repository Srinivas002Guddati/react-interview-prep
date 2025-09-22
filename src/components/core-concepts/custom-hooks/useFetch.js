import React, { useState, useEffect } from "react";


//UseFetch - Custom hook for API Calls

function UseFetch(url){
    const [ data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [ error, setError] = useState(null);

    useEffect(()=>{
        let isMounted = true;
        const fetchData = async ()=>{
            try{
                const response = await fetch(url);
                if(!response.ok) throw new Error("Failed to fetch");
               
                const result = await response.json();
                if(isMounted){
                    setData(result);
                    setError(null);
                }
            }catch(err){
                if(isMounted) setError(err.message);
            }finally{
                if(isMounted){
                    setIsLoading(false)
                }
            }
        }
        fetchData();
        return () =>{
            isMounted = false; 
        }
    }, [url]);

    return [ data, isLoading, error];
}

//using in component 

function PostList(){
    const [ data, isLoading, error ] = UseFetch("https://jsonplaceholder.typicode.com/posts");

    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>

    return(
        <ul>
            {
                data.map(post=>(
                    <li key={post.id}>{post.title}</li>
                ))
            }
        </ul>
    )
};

export default PostList;