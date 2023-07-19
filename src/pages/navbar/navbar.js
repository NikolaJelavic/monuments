import Link from 'next/link'

export default function Navbar() {
  return (
    <ul className="bg-red-600 flex flex-wrap justify-around p-2 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono" >
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/monuments">Monuments</Link>
      </li>
      <li>
        <Link href="/quotes">Quotes</Link>
      </li>
      <li>
        <Link href="/quiz">Quiz</Link>
      </li>
      <li>
        <Link href="/news">News</Link>
      </li>
      <li>
        <Link href="/rest">Rest</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
  </ul>
  );
}