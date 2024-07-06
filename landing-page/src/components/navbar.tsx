import { useState } from 'react';
import { BiX, BiMenu } from 'react-icons/bi';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    return (
        <>
        <div className="flex justify-between px-5 border-b-2 border-gray-200 py-4 items-center">
            <div className="flex items-center">
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4376 7.43794L14.2658 0.932617L8.0941 7.43794L0 11.2974L4.09935 18.8451L22.1355 11L4.95855 24.3383L5.44907 28.0679L14.2658 26.4326L23.0826 28.0679L24.2519 19.1773L28.5317 11.2974L20.4376 7.43794Z" fill="black"/>
                </svg>
            <p className="ml-1 text-[25px] font-bold">Creativo.</p>
            </div>
            <div className="hidden w-1/3 text-center sm:flex gap-12">
                <p>Home</p>
                <p>About Us</p>
                <p>Portfolio</p>
                <button>Get In Touch</button>
            </div>

            <button
                className="menu-toggle sm:hidden"
                onClick={() => setShowNav(!showNav)}
            >
                {showNav ? (
                    <BiX className="text-xl" />
                ) : (
                    <BiMenu className="text-xl" />
                )}
            </button>
        </div>
            {showNav && (
                <div className="sm:hidden flex flex-col w-[100%] border-b-2 border-gray-300 text-center py-6 justify-center">
                    <p className="py-2 w-[100%] hover:font-bold">Home</p>
                    <p className="py-2 w-[100%] hover:font-bold">
                        About Us
                    </p>
                    <p className="py-2 w-[100%] hover:font-bold">
                        Portfolio
                    </p>
                    <button className="py-2 w-[100%] hover:font-bold">
                        Get In Touch
                    </button>
                </div>
            )}
        </>
        )
}
export default Navbar;
