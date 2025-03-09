import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Youtube, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr,1fr] gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <div className="text-sm text-gray-400 mb-2">@yourusername</div>
              <h1 className="text-6xl font-bold mb-4">
                Hello!
                <br />
                I&apos;m Your Name
              </h1>
              <p className="text-gray-400">
                Product Designer with experience in creating design solutions for mobile, websites, and services.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["UX/UI", "Web 3D", "Development", "Design"].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full bg-gray-800 text-sm">
                  {tag}
                </span>
              ))}
            </div>

            <div className="rounded-lg overflow-hidden">
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-lg mb-2">Your Location</p>
                <p className="text-sm text-gray-400">Local time</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="w-full">
                Contact me
              </Button>
              <Button variant="secondary" size="lg">
                CV
              </Button>
            </div>
          </div>

          {/* Center Column */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-full aspect-square bg-gray-800 rounded-lg flex items-center justify-center mb-4">
              <p className="text-xl text-gray-400">3D Object Placeholder</p>
            </div>
            <h2 className="text-2xl font-bold mb-2">Project Title</h2>
            <p className="text-gray-400 mb-4">Project description goes here</p>
            <Button variant="outline" size="lg">
              Learn more
            </Button>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <Link href="#" className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Youtube className="w-6 h-6" />
              </Link>
              <Link href="#" className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Latest projects</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((project) => (
                  <Card key={project} className="bg-gray-800 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white">Project {project}</CardTitle>
                      <CardDescription className="text-gray-400">Project description goes here</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

