import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Name2 (){
  const router = useRouter();

  // Function to handle dropdown item click
  const handleItemClick = (url) => {
    router.push(url);
  };

  return (
    <div >
      <ul className="absolute bg-red-600 z-10 rounded-b-xl">
      
        <li className="p-2 text-black ">
          <Link href="/monuments">Monuments</Link>
        </li >
        <li className="p-2 text-black"> 
          <Link href="/heroes">Heroes</Link>
        </li>
        <li className="p-2 text-black">
          <Link href="/articles">Articles</Link>
        </li>
       
      </ul>
    </div>
  );
};


