import Link from "next/link"
import { Linkedin, Settings2, Hand, Zap } from "lucide-react"
import Image from "next/image"
import { url } from "inspector"

const achievements = [
  {
    title: "SE Leaderboard & KPI Dashboard",
    description: "What gets measured gets improved, creating a player's scorboard motivates a team to accomplish org goals",
    image: "/assets/se_dashboard.webp",
    url: "",
  },
  {
    title: "Voice Of The Prospect Program",
    description: "Aligning the product to what prospects are demanding, creating a feedback loop between pre-sales and product to unlock new revenue",
    image: "/assets/vop.webp",
    url: "",
  },
  {
    title: "Gobbler Open Championship",
    description: "I co-founded the Gobbler Open, a golf tournement amoungst friends. See more on our offical website",
    image: "/assets/gobbler.png",
    url: "https://www.gobbleropen.golf/",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen sineva-bg text-white">
      {/* Video Background */}
      <div className="video-background">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover z-[-1]"
        >
          <source src="/assets/star_background_1.mp4" type="video/mp4" />
          Fallback for browsers that don't support video
          Your browser does not support the video tag.
        </video> 
      </div>
        <div className="container mx-auto p-4 content-wrapper">
          {/* Top Section - Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Left Column - Profile (without background) */}
            <div className="backdrop-blur-sm  p-8">
              {/* Headshot and Name side by side */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                {/* Headshot with updated gradient overlay */}
                <div className="headshot relative ">
                  <Image
                    src="/assets/levi_quinn_transparent.png"
                    alt="Levi picture"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Updated gradient overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(180deg, transparent, #000000e3 99%)",
                    }}
                  ></div>
                </div>

                {/* Name and title */}
                <div className="flex flex-col justify-center">
                  <h1 className="text-6xl font-bold mb-4" style={{ fontSize: "3.75rem" }}>
                    Hello!
                    <br />
                    I&apos;m Levi
                  </h1>
                  <p className="text-gray-300">Sales Engineer Manager with 10+ years of pre-sales experience. I believe happiness is derived from the pursuit of a worthy goal.</p>
                    <div className="linked_container flex justify-start">
                      <Link
                      href="https://www.linkedin.com/in/levikoskan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 inner-element linkedIn_tag rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2"
                    >
                      <Linkedin className="w-6 h-6" />
                      <span>Levi Koskan</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-2 mb-8 ">
                {["Pre-Sale SE", "Demo2Win", "Solution Selling", "eCommerce", "Composable", "System Architecture"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full inner-element skills_tag text-sm ">
                    {tag}
                  </span>
                ))}
              </div>

              
            </div>

            {/* Right Column - Achievements */}
            <div className="space-y-8 section-gradient backdrop-blur-sm rounded-3xl p-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Highlighted Accomplishments</h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 inner-element rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image
                          src={achievement.image || "/placeholder.svg"}
                          alt={achievement.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        
                        <h4 className="text-lg font-semibold text-white">
                          {achievement.url ? (
                            <Link 
                              href={achievement.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-blue-400 transition-colors flex items-center gap-1"
                            >
                              {achievement.title}
                              <span className="text-xs">↗</span>
                            </Link>
                          ) : (
                            achievement.title
                          )}
                      </h4>
                        <p className="text-gray-400 text-sm">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Manifesto Section */}
          <div className="max-w-4xl mx-auto text-center mb-20 section-gradient backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-8">Be a Kos-Kan not a Kos-Kan&apos;t</h2>
            <p className="text-lg text-gray-300">
              I&apos;m <span className="text-blue-400">driven</span> to help solve problems. I believe that technology has
              limitless potential to change the human condition and improve quality of life for everyone. I look for{" "}
              <span className="text-blue-400">opportunities</span> to educate, coach, engineer, or advocate tech
              solutions. My passion is <span className="text-blue-400">helping</span> people & companies see past features, past the tech, and discover the ways these tools will positively impact their lives.
            </p>
          </div>

          {/* Core Principles Section */}
          <div className="max-w-6xl mx-auto section-gradient backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-center mb-12">Core Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Work */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full inner-element flex items-center justify-center">
                  <Settings2 className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Work</h3>
                <p className="text-gray-300">
                  Hard work always pays off. It takes zero talent to give effort. No problem can withstand the assault of sustained thinking & effort. Do more than the job description.
                </p>
              </div>

              {/* Attitude */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full inner-element flex items-center justify-center">
                  <Hand className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Attitude</h3>
                <p className="text-gray-300">
                  Do unto others, as you would have them do unto you. Whether you think you can or think you can&apos;t,
                  you&apos;re right. Being happy is a choice.
                </p>
              </div>

              {/* Self-improvement */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full inner-element flex items-center justify-center">
                  <Zap className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Self-improvement</h3>
                <p className="text-gray-300">
                  Each day, be a little bit better than the day before. What is measured is what gets improved. A goal
                  that&apos;s not written down is a wish.
                </p>
              </div>
            </div>
          </div>
        </div>
      
    </main>
  )
}

