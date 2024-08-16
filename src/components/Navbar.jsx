import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";
import Modal from './Modal';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navItems = [
        {path: "/", link: "Home"},
        {path: "/Blogs", link: "Blogs"},
        {path: "/About", link: "About"},
        {path: "/Contact", link: "Contact"},
    ]

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }
  return (
    <header className='bg-black'>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
            <a href="/"className='text-xl font-bold text-white'>Blogwarts<span className='text-blue-500'>BLOG.</span></a>
            <ul className='md:flex gap-12 text-lg hidden'>
                {
                    navItems.map(({path, link}) => <li className='text-white' key={path}>
                        <NavLink className={({ isActive, isPending, isTransitioning }) =>
                        [
                            isPending ? "pending" : "",
                            isActive ? "active" : "",
                            isTransitioning ? "transitioning" : "",
                          ].join(" ")
                        }
                            to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>

            <Modal isOpen={isModalOpen} onClose={closeModal}/>

            <div className='text-white lg:flex items-center space-x-5 hidden'>
                <a href='/' className='hover:text-blue-500'><FaXTwitter/></a>
                <button onClick={openModal}className='bg-blue-500 px-6 py-2 font-medium rounded align- hover:bg-white hover:text-blue-500 transition-all duration-150 ease-in'>Log in</button> 
                <button className='bg-blue-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-blue-500 transition-all duration-150 ease-in'>Sign Up</button>
            </div>
        </nav>

    </header>
  )
}

export default Navbar;