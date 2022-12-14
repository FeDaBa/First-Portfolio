import React from 'react'

const Contact = () => {

  return (

    <div name="contacto" className="w-full h-full lg:h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">

        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">

            <div className="pb-8">

                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    Contacto
                </p>

                <p className="py-6">
                    Si desea contactarme, puede completar el siguiente formulario.
                </p>

            </div>

            <div className="flex justify-center items-center">

                <form
                    action="https://getform.io/f/e35e40c0-3f0b-4d70-a3a5-7a593e19270d"
                    method="POST"
                    className="flex flex-col w-full md:w-1/2">

                    <input
                        type="text"
                        name="name"
                        placeholder="Ingrese su nombre"
                        className="
                            p-2 bg-transparent border-2 rounded-md text-white focus:outline-none
                            focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                            invalid:text-pink-600 duration-300
                        "
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Ingrese su email"
                        className="
                            my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none
                            focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                            invalid:text-pink-600 duration-300
                        "
                        required
                    />

                    <textarea
                        name="message"
                        rows="10"
                        placeholder="Ingrese su mensaje"
                        className="
                            p-2 bg-transparent border-2 rounded-md text-white focus:outline-none
                            focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                            invalid:text-pink-600 duration-300
                        "
                        required
                    ></textarea>

                    <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items center rounded-md hover:scale-110 duration-300">
                        Contactar
                    </button>

                </form>

            </div>

        </div>

    </div>

  )

}

export default Contact
