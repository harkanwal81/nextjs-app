import Link from 'next/link'
 
export default function Nav() {
  return (
        <nav className="flex p-10 justify-center align-middle">
          {/* Prefetched when the link is hovered or enters the viewport */}
          <Link href="/" className='p-2.5'>Home</Link>
          <Link href="/about" className='p-2.5'>About us</Link>
          <Link href="/service" className='p-2.5'>Services</Link>
          <Link href="/contact" className='p-2.5'>Contact us</Link>
        </nav>
  )
}