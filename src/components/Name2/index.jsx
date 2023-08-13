import Link from "next/link";
import { useRouter } from "next/router";
import { Skranji } from "@next/font/google";

const skranji = Skranji({
  subset: ["cursive"],
  preload: false,
  weight: "400",
});

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
          <Link href="/articles">Articles</Link>
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
