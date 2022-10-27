import React from 'react'

import react from '../assets/react.png'
import angular from '../assets/angular.png'
import javascript from '../assets/javascript.png'
import node from '../assets/node.png'
// import java from '../assets/java.png'
// import ruby from '../assets/ruby.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import css from '../assets/css.png'
import html from '../assets/html.png'
//import babel from '../assets/babel.png'
//import git from '../assets/git.png'
//import github from '../assets/github.png'
// import gitkraken from '../assets/gitkraken.png'
//import netlify from '../assets/netlify.png'

const Experience = () => {

    const techs = [

        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: tailwind,
            title: 'Tailwind CSS',
            style: 'shadow-cyan-600'
        },
        {
            id: 5,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-500'
        },
        {
            id: 6,
            src: react,
            title: 'React',
            style: 'shadow-cyan-500'
        },
        {
            id: 7,
            src: angular,
            title: 'Angular',
            style: 'shadow-red-600'
        },
        {
            id: 8,
            src: node,
            title: 'Node',
            style: 'shadow-green-500'
        },
        // {
        //     id: 9,
        //     src: babel,
        //     title: 'Babel',
        //     style: 'shadow-yellow-300'
        // },
        // {
        //     id: 10,
        //     src: java,
        //     title: 'Java',
        //     style: 'shadow-orange-600'
        // },
        // {
        //     id: 11,
        //     src: ruby,
        //     title: 'Ruby',
        //     style: 'shadow-red-600'
        // },

        // {
        //     id: 10,
        //     src: git,
        //     title: 'Git',
        //     style: 'shadow-red-500'
        // },
        // {
        //     id: 11,
        //     src: github,
        //     title: 'GitHub',
        //     style: 'shadow-white'
        // },
        // {
        //     id: 12,
        //     src: netlify,
        //     title: 'Netlify',
        //     style: 'shadow-cyan-300'
        // },
    ]

  return (

    <div
        name="experience"
        className="bg-gradient-to-b from-gray-800 to-black w-full h-full">

        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-screen text-white">

            <div>

                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                    Experience
                </p>

                <p className="py-6">
                    These are the technologies I've worked with
                </p>

            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                {
                    techs.map(({ id, src, title, style }) => (

                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >

                            <img
                                src={src}
                                alt="language logo"
                                className="w-20 mx-auto"
                            />

                            <p className="mt-4">
                                {title}
                            </p>

                    </div>

                    ))
                }

            </div>

        </div>

    </div>

  )

}

export default Experience
