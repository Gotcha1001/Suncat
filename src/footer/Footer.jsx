import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { auth, db } from '../firebaseconfig/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth'; // Import this
import '../CustomCSS/footer.css';

const Footer = () => {
    const [user, setUser] = useState(null);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                try {
                    const usersRef = collection(db, 'users');
                    const q = query(usersRef, where('uid', '==', currentUser.uid));
                    const querySnapshot = await getDocs(q);
                    if (!querySnapshot.empty) {
                        const userDoc = querySnapshot.docs[0].data();
                        setUserDetails(userDoc);
                    } else {
                        setUserDetails(null);
                    }
                } catch (error) {
                    console.error("Error fetching user details:", error);
                    setUserDetails(null);
                }
            } else {
                setUser(null);
                setUserDetails(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const playClickSound = () => {
        const clickSound = new Audio("/Put.mp3");
        clickSound.play();
    };

    const getFooterStyle = () => {
        if (!user) {
            return "footer footer-default"; // Default style for logged-out users
        }
        if (userDetails?.gender === 'female') {
            return "footer footer-female"; // Female users
        }
        return "footer footer-male"; // Male users
    };

    return (
        <footer className={getFooterStyle()}>
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
                <ul className="footer-links flex flex-wrap sm:flex-row sm:justify-center">
                    <li className="mb-4 sm:mb-0">
                        <NavLink
                            to="/data-protection"
                            onClick={playClickSound}
                            className={({ isActive }) =>
                                isActive ? "active-footer-link text-gray-900 block" : "text-gray-700 hover:text-gray-900 block"
                            }
                        >
                            Data Protection
                        </NavLink>
                    </li>
                    {/* Add more links here as needed */}
                </ul>

                {/* Company Logo */}
                <div className="mt-4 sm:mt-0 sm:ml-auto flex items-center">
                    <img
                        src="/NavbarImage.png"
                        alt="Suncate Logo"
                        className="h-12 rounded-full m-3 wobble1"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
