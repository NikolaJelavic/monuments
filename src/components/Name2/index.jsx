import Link from "next/link";
import { useRouter } from "next/router";

export default function Name2() {
  const router = useRouter();

  // Function to handle dropdown item click
  const handleItemClick = (url) => {
    router.push(url);
  };

  return (
    <div>
      <ul className="absolute bg-red-600 rounded-b-xl z-10">
        <li className="p-2 text-black">
          <Link href="/news">News</Link>
        </li>
        <li className="p-2 text-black">
          <Link href="/quiz">Quiz</Link>
        </li>
        <li className="p-2 text-black">
          <Link href="/ipsum">Ipsum</Link>
        </li>
      </ul>
    </div>
  );
}
