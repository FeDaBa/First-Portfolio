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
            <p className="text-xl mt-20 leading-8 tracking-wide">

                I joined the world of web development in early's 2021 with a course given by <a href="https://conectaempleo-formacion.fundaciontelefonica.com/argentina" className="text-cyan-400 duration-300" target={'_blank'} rel="noreferrer"><em>Telefónica</em></a>,
                then I started experimenting with HTML and CSS to know better how those languages works,
                and also continued taking more web development courses by <a href="https://www.freecodecamp.org/" className="text-cyan-400" target={'_blank'} rel="noreferrer"><em>FreeCodeCamp</em></a>,
                <a href="https://www.udemy.com" className="text-cyan-400" target={'_blank'} rel="noreferrer"><em> Udemy</em></a>,
                <a href="https://www.theodinproject.com/home" className="text-cyan-400" target={'_blank'} rel="noreferrer"><em> The Odin Project</em></a>, etc.

            </p>

            <br />

            <p className="text-xl leading-8 tracking-wide font">

                In March 2022 I started studing the career of <em>Systems Analyst</em> at the <a href="https://www.uarg.unpa.edu.ar/" className="text-cyan-400 duration-300" target={'_blank'} rel="noreferrer"><em>Universidad Nacional de la Patagonia Austral</em></a> (UNPA),
                where I learned a lot about programming and software engineering. Some months after, I joined a new course called <em>Argentina Programa</em>, wich is a national program to learn web development,
                granted by the <a href="https://www.argentina.gob.ar/produccion" className="text-cyan-400 duration-300" target={'_blank'} rel="noreferrer"><em>Ministerio de producción </em></a>
                and certified by the <a href="https://www.argentina.gob.ar/inti" className="text-cyan-400 duration-300" target={'_blank'} rel="noreferrer"><em>Instituto Nacional de Tecnología Industrial</em></a> (INTI)
                and the <a href="https://cessi.org.ar/" className="text-cyan-400 hover:font-normal duration-300" target={'_blank'} rel="noreferrer"><em>Cámara de la Industria Argentina del Software</em></a> (CESSI)

            </p>

            <br />

            <p className="text-xl leading-8 tracking-wide">

                In the present day, I know more than 8 programming languages, frameworks and development platforms.
                My specialty is the Front End, but I'm also learning about Back End to have a better understanding about how the web based software works.
                I'm always looking to discover new horizons and improve myself with new challenges.

            </p>

        </div>

    </div>
  )
}

export default About
