import Image from 'next/image'
import { Button } from "../ui/button"

interface AboutSectionProps {
  title: string
  content: string
}

function AboutSection({ title, content }: AboutSectionProps) {
  return (
    <div className="flex flex-col md:flex-row items-start py-6 border-t border-gray-200">
      <div className="w-full md:w-1/6 mb-4 md:mb-0 mr-4">
        <Image
          src="/placeholder.svg?height=100&width=100"
          alt="Placeholder"
          width={100}
          height={100}
          className="bg-gray-200"
        />
      </div>
      <div className="w-full md:w-5/6">
        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-3">{title}</h2>
          <p className="text-gray-600 mb-5">{content}</p>
          <Button variant="outline">Button</Button>
        </div>
      </div>
    </div>
  )
}

export default function About() {
  const sections = [
    {
      title: "Title",
      content: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
    },
    {
      title: "Title",
      content: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
    },
    {
      title: "Title",
      content: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      <div className='text-left mb-10'>
        <h1 className="text-4xl font-bold mb-3">Heading</h1>
        <p className="text-2xl text-gray-600">Subheading</p>
      </div>
      {sections.map((section, index) => (
        <AboutSection key={index} {...section} />
      ))}
    </div>
  )
}