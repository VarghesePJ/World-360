import React from 'react'
import logo from '../assets/img/logo.svg'

const Navbar = () => {
    return (
        <>
            <header class="my-5">
                <div class="relative flex max-w-4xl flex-col px-4 py-4 border-2 border-white rounded-4xl navbar-shadow bg-radial from-zinc-800 from-20% to-zinc-900 md:mx-auto md:flex-row md:items-center">
                    <a href="#" class="flex items-center text-2xl font-black">
                        <span class="mr-2">
                            <img src={logo} alt="logo" className="w-40" />
                        </span>
                    </a>
                    <input type="checkbox" class="peer hidden" id="navbar-open" />
                    <label class="absolute top-8 right-7 cursor-pointer md:hidden" for="navbar-open">
                        <span class="sr-only">Toggle Navigation</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white border-2 p-2 rounded-2xl" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <nav aria-label="Header Navigation" class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-center overflow-hidden md:ml-24 md:max-h-full md:flex-row md:items-center">
                        <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
                            <li class="text-white text-xl md:mr-12 navlink-shadow"><a href="#">Home</a></li>
                            <li class="text-white text-xl md:mr-12 navlink-shadow"><a href="#">About</a></li>
                            <li class="text-white text-xl md:mr-12 navlink-shadow"><a href="#">Explore</a></li>
                            <li class="text-white text-xl md:mr-12 navlink-shadow"><a href="#">Map</a></li>
                            <li class="text-white text-xl md:mr-12 navlink-shadow"><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar