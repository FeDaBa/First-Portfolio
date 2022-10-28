import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

            <div className="pb-8">

                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>

            </div>
    
            <p className="text-xl mt-20 leading-8 tracking-wide">
                I joined the web development world in early's 2021 with a course provided by Telefonica Fundation and Movistar, after getting the certificate, I started experimenting with HTML and CSS to know better how these languajes works, and also continued doing more web development courses by FreeCodeCamp, Udemy, The Odin Project, etc.
            </p>

            <br />

            <p className="text-xl leading-8 tracking-wide">
                In March 2022 I started a career as a <em>Systems Analyst</em> at the <em>National University from the Austral Patagonia</em> (UNPA),
                where I learned a lot about programming and software engineering. Some months after, I joined a new course called <em>Argentina Programa</em>, wich is a national program
                granted by the <em>Ministry of Production</em> and certified by the <em>National Instite of Industrial Technology</em> (INTI) and the <em>Chamber of the Argentine Software Industry</em> (CESSI)
            </p>

            <br />

            <p className="text-xl leading-8 tracking-wide">
                In the present day, I know more than 8 programming languages, frameworks and development platforms.
                My main is the Front End, but I'm also learning about Back End to have a better understanding about how the web based software works.
                I'm always looking to discover new horizons and improve myself with new challenges.
            </p>

        </div>

    </div>
  )
}

export default About
