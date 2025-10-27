import Link from 'next/link'
 
export default function Nav() {
  return (
        <nav className="flex gap-5 p-10">
          {/* Prefetched when the link is hovered or enters the viewport */}
          <Link href="/">Home</Link>
          {/* No prefetching */}
          <a href="/about">About us</a>
        </nav>
  )
}