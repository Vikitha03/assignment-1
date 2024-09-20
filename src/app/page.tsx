import { Button } from "../components/ui/button"
import QuoteGrid from '../components/layout/quote-grid'
import About from "../components/layout/about"
import FeatureGrid from "../components/layout/feature-grid"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center pt-20 pb-20">
      <div className="pt-20 pb-20">
        <h1 className="text-6xl font-bold mb-6">Title</h1>
        <p className="text-2xl text-gray-600 mb-6">Subtitle</p>
        <div className="space-x-7 mb-20">
          <Button variant="outline" style={{
              backgroundColor: '#F5F5F5',
              color: 'black',
            }}>Button</Button>
          <Button 
            variant="default"
            style={{
              backgroundColor: '#2C2C2C',
              color: 'white',
            }}
          >
            Button
          </Button>
        </div>
      </div>
      
      <QuoteGrid/>
      <FeatureGrid/>
      <About/>
    </div>
  )
}