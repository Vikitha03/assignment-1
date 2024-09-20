import Image from 'next/image'

interface FeatureCardProps {
  title: string
  description: string
}

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex flex-col items-start">
        <div className="mb-4">
          <Image
            src="/placeholder.svg?height=150&width=150"
            alt="Placeholder"
            width={150}
            height={150}
            className="bg-gray-200"
          />
        </div>
        <div className="w-full text-left">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function FeatureGrid() {
  const features = [
    {
      title: "Title",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story."
    },
    {
      title: "Title",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story."
    },
    {
      title: "Title",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story."
    },
    {
      title: "Title",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story."
    },
    {
      title: "Title",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story."
    },
    {
      title: "Title",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
        <div className="text-left mb-10">

       
      <h1 className="text-3xl font-bold mb-2">Heading</h1>
      <p className="text-xl text-gray-600 mb-8">Subheading</p>
       </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  )
}