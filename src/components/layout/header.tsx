import Link from 'next/link'
import { Button } from "../ui/button"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          BP
        </Link>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-4 mr-4">
            <Link href="/pricing" className="hover:text-gray-600">Pricing</Link>
            <Link href="/solutions" className="hover:text-gray-600">Solutions</Link>
            <Link href="/community" className="hover:text-gray-600">Community</Link>
            <Link href="/resources" className="hover:text-gray-600">Resources</Link>
            <Link href="/pricing" className="hover:text-gray-600">Pricing</Link>
            <Link href="/contact" className="hover:text-gray-600">Contact</Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" style={{



              backgroundColor: '#F5F5F5',
              color: 'black',
            }}>Sign In</Button>
            <Button variant="default"
            style={{
              backgroundColor: '#2C2C2C',
              color: 'white',
            }}>Register</Button>
          </div>
        </div>
      </div>
    </header>
  )
}