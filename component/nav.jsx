import Link from 'next/link'
 
export default function Nav() {
  return (
        <nav className="flex gap-5 p-10">
          {/* Prefetched when the link is hovered or enters the viewport */}
          <Link href="/">Home</Link>
          <Link href="/about">About us</Link>
          <Link href="/service">Services</Link>
          <Link href="/contact">Contact us</Link>
        </nav>
  )
}