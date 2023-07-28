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
      <ul className="absolute bg-red-600 z-10">
      <li className="p-2">
        <li className="p-2">
          <Link href="/news">News</Link>
        </li>
        <li className="p-2">
          <Link href="/quiz">Quiz</Link>
        </li>
        <li className="p-2">
          <Link href="/ipsum">Ipsum</Link>
        </li>
        </li>
      </ul>
    </div>
  );
};


