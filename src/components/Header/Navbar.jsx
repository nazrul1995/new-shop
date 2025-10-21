import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <NavLink className={'mr-2.5'} to={"/home"}>Home</NavLink>
        <NavLink className={'mr-2.5'} to={"/about"}>About</NavLink>
        <NavLink className={'mr-2.5'} to={"/contact"}>Contact</NavLink>
    </>
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar w-11/12 mx-auto py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="text-xl">Pabel shop</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {links}
                </div>
                <div className="navbar-end gap-x-2.5">
                    <label className="input w-[240px]">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>
                    <CiHeart size={30}/>
                    <IoCartOutline size={30} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;