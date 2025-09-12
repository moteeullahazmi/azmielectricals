import Image from "next/image";
"use client"

export default function Home() {
  
   const Homehandle =  () => {
      console.log("Home Page Working")
    }

  return (
    <div>
      <button onClick={Homehandle}>Home</button>
      <button>Products</button>
      <button>About Us</button>
      <button>Contact</button>
    </div>
  );
}
