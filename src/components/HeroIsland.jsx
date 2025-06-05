import { useState } from 'react'
import './HeroIsland.css'

export default function HeroIsland() {
  const [showAbout, setShowAbout] = useState(false)

  return (
    <section className="island hero-island">
      <div className="tagline">
        <p className="line l1">I'm Nic.</p>
        <p className="line l2">I animate.</p>
        <p className="line l3">I teach.</p>
        <p className="line l4">I don't sleep.</p>
      </div>
      <div
        className="coconut"
        onMouseEnter={() => setShowAbout(true)}
        onMouseLeave={() => setShowAbout(false)}
        onClick={() => setShowAbout(!showAbout)}
      >
        {showAbout && (
          <div className="about-popup">
            <p>About Nic</p>
            <p>
              I'm an animator and teacher. Hover over the islands to learn
              more!
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
