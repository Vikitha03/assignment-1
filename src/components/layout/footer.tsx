import Image from 'next/image'
import Link from 'next/link'
import { Twitter, Instagram, Youtube, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-9">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold">
              BP
            </Link>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter"><Twitter className="w-5 h-5" /></Link>
              <Link href="#" aria-label="Instagram"><Instagram className="w-5 h-5" /></Link>
              <Link href="#" aria-label="YouTube"><Youtube className="w-5 h-5" /></Link>
              <Link href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Use cases</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">UI design</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">UX design</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Wireframing</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Diagramming</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Brainstorming</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Online whiteboard</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Team collaboration</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Design</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Prototyping</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Development features</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Design systems</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Collaboration features</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Design process</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">FigJam</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Best practices</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Colors</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Color wheel</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Support</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Developers</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Resource library</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </footer>
  )
}