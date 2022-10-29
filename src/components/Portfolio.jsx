import React from 'react'

import dashboard from '../assets/portfolio/Dashboard.png'
import socialMedia from '../assets/portfolio/Social-Media.png'
import eternals from '../assets/portfolio/Eternals.png'
import nftPreview from '../assets/portfolio/NFT-Preview.png'
import orderSummary from '../assets/portfolio/Order-Summary.png'
import calculator from '../assets/portfolio/Calculator.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: dashboard,
            host: 'https://dashboard-plum.vercel.app/',
            repo: 'https://github.com/FeDaBa/Dashboard'
        },
        {
            id: 2,
            src: socialMedia,
            host: 'https://social-media-noko.vercel.app/',
            repo: 'https://github.com/FeDaBa/Social-Media'
        },
        {
            id: 3,
            src: eternals,
            host: 'https://eternals-webpage.vercel.app/',
            repo: 'https://github.com/FeDaBa/Eternals-Webpage'
        },
        {
            id: 4,
            src: nftPreview,
            host: 'https://frontend-mentor-challenge-1-five.vercel.app/',
            repo: 'https://github.com/FeDaBa/NFT-preview-card'
        },
        {
            id: 5,
            src: orderSummary,
            host: 'https://frontend-mentor-challenge-2.vercel.app/',
            repo: 'https://github.com/FeDaBa/Order-summary'
        },
        {
            id: 6,
            src: calculator,
            host: 'http://react-calculator-fedaba.vercel.app/',
            repo: 'https://github.com/FeDaBa/React-Calculator'
        },

    ]

  return (

    <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white lg:h-screen"
    >

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

            <div className="pb-8 ">

                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    Portfolio
                </p>

                <p className="py-6 ">
                    Algunos de mis proyectos
                </p>


                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

                    {
                        portfolios.map(({ id, src, host, repo }) => (

                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">

                            <img
                                src={src}
                                alt="project preview"
                                className="rounded-md duration-200 hover:scale-105"
                            />

                            <div className="flex items-center justify-center">

                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    <a href={host} target="_blank" rel='noreferrer'>Demo</a>
                                </button>

                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    <a href={repo} target="_blank" rel='noreferrer'>Código</a>
                                </button>

                            </div>

                        </div>

                        ))
                    }

                </div>

            </div>

        </div>

    </div>

  )

}

export default Portfolio
