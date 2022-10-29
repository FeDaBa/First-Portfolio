import React from 'react'

const About = () => {
  
  return (
    
    <div name="about" className="w-full h-full lg:h-screen bg-gradient-to-b from-gray-800 to-black text-white">

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

            <div className="pb-8">

                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    Sobre mi
                </p>

            </div>

            <p className="text-xl leading-8 tracking-wide font">

                Empecé a cursar la carrera de <em>Analista de Sistemas</em> en la <a href="https://www.uarg.unpa.edu.ar/" className="text-cyan-400" target={'_blank'} rel="noreferrer"><em>Universidad Nacional de la Patagonia Austral</em></a> (UNPA),
                en la cual he aprendido una gran cantidad de conceptos y fundamentos sobre Programación e Ingeniería de Software. Algunos meses despues comencé a cursar el plan 
                <em>Argentina Programa</em>, el cual es un curso extenso sobre Desarrollo Web Full Stack certificado por el 
                <a href="https://cessi.org.ar/" className="text-cyan-400" target={'_blank'} rel="noreferrer"><em>Instituto Nacional de Tecnología Industrial</em></a> (INTI)
                y la <a href="https://cessi.org.ar/" className="text-cyan-400" target={'_blank'} rel="noreferrer"><em>Cámara de la Industria Argentina del Software</em></a> (CESSI)

            </p>

            <br />

            <p className="text-xl leading-8 tracking-wide">

                En la actualidad, he realizado proyectos con más de 8 lenguajes de programación, librerías y frameworks.
                Si biuen me especializo en el Front End, también me encuentro aprendiendo sobre desarollo Back End, para entender mejor el completo funcionamiento del software basado en la web.
                Estoy constantemente en busca de nuevos desafíos para superarme en el día a día.

            </p>

        </div>

    </div>

  )
  
}

export default About
