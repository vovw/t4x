import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <main className="flex flex-col md:flex-row justify-between p-6 bg-gray-800 text-white">
      <aside className="w-full md:w-1/3 mb-6 md:mb-0 pr-0 md:pr-6">
        <h2 className="text-2xl font-bold mb-4">AI-Generated Music</h2>
        <p className="text-gray-400 mb-6">Select a genre and instrument to generate a new piece of music.</p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Genres</h3>
          <div className="flex flex-wrap gap-2">
            <Button className="bg-gray-700 text-white">Jazz</Button>
            <Button className="bg-gray-700 text-white">Rock</Button>
            <Button className="bg-gray-700 text-white">Classical</Button>
            <Button className="bg-gray-700 text-white">Pop</Button>
            <Button className="bg-gray-700 text-white">Reggae</Button>
            <Button className="bg-gray-700 text-white">Hip Hop</Button>
            <Button className="bg-gray-700 text-white">Country</Button>
            <Button className="bg-gray-700 text-white">Blues</Button>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Instruments</h3>
          <div className="flex flex-wrap gap-2">
            <Button className="bg-gray-700 text-white">Piano</Button>
            <Button className="bg-gray-700 text-white">Guitar</Button>
            <Button className="bg-gray-700 text-white">Violin</Button>
            <Button className="bg-gray-700 text-white">Drums</Button>
            <Button className="bg-gray-700 text-white">Flute</Button>
            <Button className="bg-gray-700 text-white">Saxophone</Button>
            <Button className="bg-gray-700 text-white">Cello</Button>
            <Button className="bg-gray-700 text-white">Trumpet</Button>
          </div>
        </div>
        <Button className="w-full mt-4 bg-gray-700 text-white border-white" variant="outline">
          Generate Music
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </aside>
      <section className="w-full md:w-2/3 pl-0 md:pl-6">
        <Card className="p-6 bg-gray-900 text-white">
          <CardHeader>
            <CardTitle>Input Your Prompt</CardTitle>
          </CardHeader>
          <CardContent>
            <input
              aria-label="Input your prompt here"
              className="w-full p-2 text-black bg-white rounded-lg mb-4"
              placeholder="Input your prompt here"
              type="text"
            />
            <h3 className="text-lg font-semibold mb-2">Our Suggestions</h3>
            <ul className="list-disc list-inside text-gray-500">
              <li>Soothing Piano with Jazz influence</li>
              <li>Rock and Roll with Guitar lead</li>
              <li>Classical Violin solo</li>
              <li>Pop music with Flute melody</li>
              <li>Reggae beats with Drums</li>
              <li>Hip Hop with Saxophone</li>
              <li>Country music with Cello</li>
              <li>Blues with Trumpet</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

