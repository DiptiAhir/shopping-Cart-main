import React, { useEffect, useState } from 'react'
import { Product } from '../component/Product';
import { Spinner } from '../component/Spinner';

export const Home = () => {
 
const API_URL= "https://fakestoreapi.com/products";

const [loading, setLoding]= useState(false)
const[posts,setPosts]= useState([]);
async function fetchProductData() {
  setLoding(true);
  try {
    const res = await fetch(API_URL);
    const result = await res.json();
    setPosts(result)
    console.log(result);
  } catch (error) {
    console.log("error...");
    setPosts([]); 
  }
  setLoding(false)
}

useEffect(() => {
    fetchProductData();
},[])
  return (
    <div>
      {
        loading? <Spinner/> : 
        posts.length > 1 ?
        (<div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-7xl p-2 mx-auto space-y-10 space-x-5 min-[80vh]:'>
          {
          posts.map((post) =>(
            <Product key={post.id} post={post}/>
          ))
          }
        </div>
        ) :
      (  <div className='flex justify-center items-center'>
        No dataFound
        </div>)
      }
    </div>
  )
}


