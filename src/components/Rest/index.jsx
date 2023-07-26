
import Link from 'next/link';
import { useRouter } from 'next/router';

const Rest = () => {
  const router = useRouter();

  // Function to handle dropdown item click
  const handleItemClick = (url) => {
    router.push(url);
  };

  return (
    <div >
      <ul className="absolute bg-red-600 z-10">
      <li className="p-2">
          <Link href="/quiz">Quiz</Link>
        </li>
        <li className="p-2">
          <Link href="/news">News</Link>
        </li>
        <li className="p-2">
          <Link href="/quotes">Quotes</Link>
        </li>
        <li className="p-2">
          <Link href="/ipsum">Ipsum</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Rest;
