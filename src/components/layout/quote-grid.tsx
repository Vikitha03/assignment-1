import Image from 'next/image'

interface QuoteCardProps {
  quote: string
  avatarSrc: string
  title: string
  description: string
}

function QuoteCard({ quote, avatarSrc, title, description }: QuoteCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md ">
      <p className="text-lg font-semibold mb-4 text-left">"{quote}"</p>
      <div className="flex items-center">
        <Image
          src={avatarSrc}
          alt={title}
          width={40}
          height={40}
          className="rounded-full mr-3"
        />
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function QuoteGrid() {
  const quotes = [
    {
      quote: "Quote",
      avatarSrc: "/placeholder.svg?height=40&width=40",
      title: "Title",
      description: "Description"
    },
    {
      quote: "Quote",
      avatarSrc: "/placeholder.svg?height=40&width=40",
      title: "Title",
      description: "Description"
    },
    {
      quote: "Quote",
      avatarSrc: "/placeholder.svg?height=40&width=40",
      title: "Title",
      description: "Description"
    },
    {
      quote: "Quote",
      avatarSrc: "/placeholder.svg?height=40&width=40",
      title: "Title",
      description: "Description"
    },
    {
      quote: "Quote",
      avatarSrc: "/placeholder.svg?height=40&width=40",
      title: "Title",
      description: "Description"
    },
    {
      quote: "Quote",
      avatarSrc: "/placeholder.svg?height=40&width=40",
      title: "Title",
      description: "Description"
    }
  ]

  return (
    <div className="container mx-0 px-4 pb-20">
      <div className="text-left mb-10"> 
        <h1 className="text-3xl font-bold mb-2">Heading</h1>
        <p className="text-xl text-gray-600">Subheading</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {quotes.map((quote, index) => (
          <QuoteCard key={index} {...quote} />
        ))}
      </div>
    </div>
  )
}