import React, { useContext } from 'react'
import SBDContext from '../context/SideByDarknessContext'

const AboutUs = () => {
  const { theme } = useContext(SBDContext);

  const teamMembers = [
    {
      name: "MoltiFolti",
      role: "Játék fejlesztő",
      email: "matekristof@taszi.hu",
      image: "https://avatars.githubusercontent.com/u/134051404?v=4",
      description: "A játék magját és mechanikáit építette Godot Engine-ben. 5+ évnyi hentai gooning lock in tapasztalattal rendelkezik. Felelős a baby oil generációért és a harcrendszerért.",
      alignment: "left"
    },
    {
      name: "The Hat Crab",
      role: "Backend Mester",
      email: "gilcsrobert@taszi.hu",
      image: "https://avatars.githubusercontent.com/u/92539699?v=4",
      description: "A sötét labirintusok mögötti varázslatot teremtette. Készítette a szerver architektúrát, API-kat és az adatbázis-rendszert. Szakértő a Node.js és Python világában.",
      alignment: "right"
    },
    {
      name: "norBMW",
      role: "Frontend Varázsló",
      email: "makulamilankevin-30331@taszi.hu",
      image: "https://avatars.githubusercontent.com/u/78484157?s=400&u=3d2a0d24039bf220efb79f9d2a7055a626abb94d&v=4",
      description: "A játék misztikus atmoszféráját formálta React-tal és Tailwind-del. Felelős a felhasználói élményért, animációkért és a reszponzív designért.",
      alignment: "left"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-purple-500 rounded-full animate-float"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3
            }}
          ></div>
        ))}
      </div>

      {teamMembers.map((member, index) => (
        <div key={index} className={`hero min-h-screen ${index !== 0 ? 'mt-20' : ''}`}>
          <div className={`hero-content flex-col gap-12 ${member.alignment === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            <div className="relative group max-w-sm">
              <img
                src={member.image}
                className="rounded-2xl shadow-2xl border-4 border-purple-900/50 transform transition-transform group-hover:scale-105"
                alt={member.name}
              />
              <div className="absolute inset-0 bg-purple-900/20 rounded-2xl mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
            </div>

            <div className="max-w-2xl space-y-6">
              <h1 className="text-5xl font-bold font-['Bebas_Neue'] text-purple-300">
                {member.name}
                <span className="block text-2xl text-red-400 mt-2">{member.role}</span>
              </h1>

              <p className="text-lg text-purple-100 leading-relaxed">
                {member.description}
              </p>

              <div className="space-y-2">
                <a
                  href={`mailto:${member.email}`}
                  className="inline-block text-purple-400 hover:text-purple-300 transition-colors"
                >
                  ✉️ {member.email}
                </a>
              </div>


            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AboutUs