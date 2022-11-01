import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Footer = () => {

    const links = [
        {
            id:1,
            child:(
                <>
                <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://linkedin.com/in/fedebaha',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/FeDaBa',
        },
        {
            id:3,
            child:(
                <>
                <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:bahamondefederico@gmail.com',
        },
        {
            id:4,
            child:(
                <>
                <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: '/Resume-Federico-Bahamonde.pdf',
            style: 'rounded-tr-md',
            download: true
        },
    ];

  return (

    <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black p-4 md:hidden">

        <div className="flex flex-row justify-evenly">

            {links.map(({ id, child, href, download }) => (

                <div
                    key={id}
                    className={""}>

                    <a
                        href={href}
                        className="flex justify-between items-center w-full text-white"
                        download={download}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {child}
                    </a>

                </div>

            ))}

        </div>

    </div>

  )
}

export default Footer
