import React from 'react'

const About = () => {
  
  return (
    
    <div name="info" className="w-full h-full lg:h-screen bg-gradient-to-b from-gray-800 to-black text-white">

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

            <div className="pb-8">

                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    Acerca de mi
                </p>

            </div>
    
            
            <p className="text-xl leading-8 tracking-wide">

                Empecé a incursionar en el mundo del Desarrollo Web a principios del 2021 después de haber estudiado Marketing Digital. Allí conocí las bases y decidí
                aprender más al respecto, por lo que realicé un curso de Diseño Web proporcionado por la <a href="https://conectaempleo-formacion.fundaciontelefonica.com/argentina" className="text-cyan-400" target={'_blank'} rel="noreferrer"><em>Fundación Telefónica Argentina</em></a>.<br />
                Conociendo ya el funcionamiento básico de HTML y CSS, comencé a desarrollar algunos pequeños proyectos para poner en práctica mis conociemientos, 
                a la vez que continué aprendiendo mediante documentación oficial, tutoriales y otros cursos online.
            </p>
    
            <br />

            <p className="text-xl leading-8 tracking-wide">

                En Marzo del 2022 comencé a cursar la carrera <em>Analista de Sistemas</em> en la <a href="https://www.uarg.unpa.edu.ar/" className="text-cyan-400" target={'_blank'} rel="noreferrer"><em>Universidad Nacional de la Patagonia Austral</em></a> (UNPA),
                a traves de la cual he aprendido una gran cantidad de conceptos y fundamentos sobre Programación e Ingeniería de Software. <br />
       
                Algunos meses despues, comencé a cursar el plan <em>Argentina Programa</em>, 
                un extenso curso de 7 meses de duración enfocado en el Desarrollo Web Full Stack, el cual se encuentra certificado por el 
                <a href="https://www.argentina.gob.ar/inti" className="text-cyan-400" target={'_blank'} rel="noreferrer"><em> Instituto Nacional de Tecnología Industrial</em></a> (INTI)
                y la <a href="https://cessi.org.ar/" className="text-cyan-400" target={'_blank'} rel="noreferrer"><em> Cámara de la Industria Argentina del Software</em></a> (CESSI)

            </p>

            <br />

            <p className="text-xl leading-8 tracking-wide">

                En la actualidad, he realizado proyectos con más de 8 lenguajes, librerías y frameworks.
                Y Si bien me especializo en el Front End, también me encuentro aprendiendo sobre desarollo Back End, 
                con el fin de ampliar mis conocimientos y entender mejor el completo funcionamiento del software basado en la web.
                Soy una persona que está constantemente en busca de nuevos desafíos para aprender y mejorar en el día a día.

            </p>

        </div>

    </div>

  )
  
}

export default About
