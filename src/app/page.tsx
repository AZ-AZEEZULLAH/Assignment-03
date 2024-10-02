import Image from "next/image";
import Link from "next/link";
import Footer from "./components/footer";
export default function Home() {
  return (
   <div>
    <h1></h1>
    <ul className="flex gap-10 bg-blue-600">
      <li> <Link href="/">Home</Link></li>
      <li> <Link href="/about">About</Link></li>
      <li> <Link href="contact-us">contact us</Link></li>
      <li><Link href="/jobs">jobs</Link></li>
    </ul>
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNKZ-323BQRAz7sRWfZwJkDL7SplQ8XxBww&s" 
   alt="loading" width={1000} height={350}  />
   <Footer/>
   </div>
  );
} 