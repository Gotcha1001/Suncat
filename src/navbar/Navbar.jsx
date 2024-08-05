
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebaseconfig/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import '../CustomCSS/nabar.css';

const Navbar = () => {
    const [user, setUser] = useState(null);
    const clickSoundRef = useRef(null);
    const navigate = useNavigate();
    const adminEmail = "admin@example.com";
    const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);
    const adminDropdownRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Burger menu state

    // added state for userName and surname to fetch
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        clickSoundRef.current = new Audio("/Put.mp3");

        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                if (currentUser.providerData[0].providerId === 'google.com') {
                    setUserDetails({
                        firstName: currentUser.displayName,
                        lastName: ''
                    });
                } else {
                    try {
                        const usersRef = collection(db, 'users');
                        const q = query(usersRef, where('uid', '==', currentUser.uid));
                        const querySnapshot = await getDocs(q);
                        if (!querySnapshot.empty) {
                            const userDoc = querySnapshot.docs[0].data();
                            setUserDetails(userDoc);
                        } else {
                            console.log("No such document!");
                            setUserDetails(null);
                        }
                    } catch (error) {
                        console.error("Error fetching user details:", error);
                        setUserDetails(null);
                    }
                }
            } else {
                setUser(null);
                setUserDetails(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const playClickSound = () => {
        clickSoundRef.current.play();
    };

    const logout = async () => {
        try {
            await signOut(auth);
            navigate("/"); // Redirect to the home page after logout
        } catch (error) {
            console.error(error);
        }
    };

    const toggleAdminDropdown = () => {
        setIsAdminDropdownOpen(!isAdminDropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (adminDropdownRef.current && !adminDropdownRef.current.contains(event.target)) {
                setIsAdminDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Conditional styling based on user login and gender
    // const getNavbarStyle = () => {
    //     if (!user) {
    //         return "navbar navbar-default"; // Default style for logged-out users
    //     }
    //     if (userDetails?.gender === 'female') {
    //         return "navbar navbar-female"; // Female users
    //     }
    //     return "navbar navbar-male"; // Male users
    // };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        playClickSound();
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                    <Link to="/" className="text-2xl font-bold zoom " onClick={handleLinkClick}>
                        <img
                            src="/Suncat3.png"
                            alt="Logo"
                            className="navbar-logo"
                        />
                    </Link>
                </div>

                {/* Burger Menu Button */}
                <button
                    className="block md:hidden"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>

                {/* Menu Items */}
                <div className={`flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0 text-center ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                    {user && (
                        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "active-link text-white block px-1 py-1" : "text-white block px-1 py-1 hover:bg-black rounded-md"
                                }
                                onClick={handleLinkClick}
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="about-us"
                                className={({ isActive }) =>
                                    isActive ? "active-link text-white block px-1 py-1" : "text-white block px-1 py-1 hover:bg-black rounded-md"
                                }
                                onClick={handleLinkClick}
                            >
                                About Us
                            </NavLink>
                            <NavLink
                                to="founding-fathers"
                                className={({ isActive }) =>
                                    isActive ? "active-link text-white block px-1 py-1" : "text-white block px-1 py-1 hover:bg-black rounded-md"
                                }
                                onClick={handleLinkClick}
                            >
                                Founding Fathers
                            </NavLink>
                            {/* <NavLink
                                to="our-staff"
                                className={({ isActive }) =>
                                    isActive ? "active-link text-white block px-1 py-1" : "text-white block px-1 py-1 hover:bg-black rounded-md"
                                }
                                onClick={playClickSound}
                            >
                                Founding Fathers2
                            </NavLink> */}
                            {/* <NavLink
                                to="prices"
                                className={({ isActive }) =>
                                    isActive ? "active-link text-white block px-1 py-1" : "text-white block px-1 py-1 hover:bg-black rounded-md"
                                }
                                onClick={playClickSound}
                            >
                                Prices
                            </NavLink> */}
                            {/* <NavLink
                                to="videos"
                                className={({ isActive }) =>
                                    isActive ? "active-link text-white block px-1 py-1" : "text-white block px-1 py-1 hover:bg-black rounded-md"
                                }
                                onClick={playClickSound}
                            >
                                The Next Generation
                            </NavLink> */}
                            {/* <NavLink
                                to="news"
                                className={({ isActive }) =>
                                    isActive ? "active-link text-white block px-1 py-1" : "text-white block px-1 py-1 hover:bg-black rounded-md"
                                }
                                onClick={playClickSound}
                            >
                                News
                            </NavLink> */}
                            {/* <NavLink
                                to="brands"
                                className={({ isActive }) =>
                                    isActive ? "active-link text-white block px-1 py-1" : "text-white block px-1 py-1 hover:bg-black rounded-md"
                                }
                                onClick={playClickSound}
                            >
                                Brands
                            </NavLink> */}

                            {/* <NavLink
                                to="services"
                                className={({ isActive }) =>
                                    isActive ? "active-link text-white block px-1 py-1" : "text-white block px-1 py-1 hover:bg-black rounded-md"
                                }
                                onClick={handleLinkClick}
                            >
                                Services
                            </NavLink> */}

                            <NavLink
                                to="contact-us"
                                className={({ isActive }) =>
                                    isActive ? "active-link text-white block px-1 py-1" : "text-white block px-1 py-1 hover:bg-black rounded-md"
                                }
                                onClick={handleLinkClick}
                            >
                                Contact Us
                            </NavLink>
                            {user.email === adminEmail && (
                                <div className="relative" ref={adminDropdownRef}>
                                    <button onClick={toggleAdminDropdown} className="bg-black rounded-md p-2 hover:text-blue-500 shadow-neon">
                                        Admin Actions
                                    </button>
                                    {isAdminDropdownOpen && (
                                        <ul className="absolute bg-gray-800 text-white rounded mt-2 shadow-lg">
                                            <NavLink
                                                to="video-upload"
                                                className={({ isActive }) =>
                                                    isActive ? "active-link text-white block px-1 py-1" : "text-white block px-1 py-1"
                                                }
                                                onClick={handleLinkClick}
                                            >
                                                Video Upload
                                            </NavLink>
                                            <NavLink
                                                to="video-alter"
                                                className={({ isActive }) =>
                                                    isActive ? "active-link text-white block px-1 py-1" : "text-white block px-1 py-1"
                                                }
                                                onClick={handleLinkClick}
                                            >
                                                Video Alter
                                            </NavLink>
                                            <NavLink
                                                to="next-generation"
                                                className={({ isActive }) =>
                                                    isActive ? "active-link text-white block px-1 py-1" : "text-white block px-1 py-1"
                                                }
                                                onClick={handleLinkClick}
                                            >
                                                Next Generation
                                            </NavLink>
                                        </ul>
                                    )}
                                </div>
                            )}
                            {userDetails && (
                                <div className="welcome-message-container">
                                    {userDetails.firstName ? (
                                        <span className="welcome-message text-white bg-teal-600 rounded-full p-1 md:mb-0 shadow-nature">
                                            Welcome {userDetails.firstName} {userDetails.lastName}
                                        </span>
                                    ) : (
                                        <span className="welcome-message text-white bg-teal-600 rounded-full p-1 md:mb-0">
                                            Welcome {user.email}
                                        </span>
                                    )}
                                </div>
                            )}

                            <button onClick={logout} className="text-white hover:text-blue-500">
                                Logout
                            </button>
                        </div>
                    )}
                    {!user && (
                        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                            <NavLink
                                to="register"
                                onClick={handleLinkClick}
                                className="text-white hover:text-blue-500"
                            >
                                Register
                            </NavLink>
                            <NavLink
                                to="login"
                                onClick={handleLinkClick}
                                className="text-white hover:text-blue-500 "
                            >
                                Login
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
