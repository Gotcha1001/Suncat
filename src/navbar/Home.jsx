import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { auth, db } from '../firebaseconfig/firebase';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import Spinner from '../specialsetups/Spinner';

const Home = () => {
    const adminEmail = "admin@example.com";

    const [mainImageUrl, setMainImageUrl] = useState('');
    const [showMainImageDialog, setShowMainImageDialog] = useState(false);
    const [newImageUrl, setNewImageUrl] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [hasProfile, setHasProfile] = useState(false);

    const [isLoading, setIsLoading] = useState(true); // State for loading state

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setCurrentUser(user.email);
                setIsAdmin(user.email === adminEmail);
                checkUserProfile(user.uid); // Check if user has a profile
            } else {
                setCurrentUser(null);
                setIsAdmin(false);
                setHasProfile(false); // Reset profile status when user logs out
            }
        });

        const fetchMainImage = async () => {
            try {
                const docRef = doc(collection(db, 'settings'), 'background');
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setMainImageUrl(data.mainImageUrl || '');
                } else {
                    setMainImageUrl('');
                }
            } catch (error) {
                console.error('Error fetching main image:', error);
            } finally {
                setIsLoading(false); // Set loading to false after fetching
            }
        };

        fetchMainImage();

        return unsubscribe;
    }, []);

    const checkUserProfile = async (uid) => {
        try {
            const profileRef = doc(db, 'profiles', uid);
            const profileSnap = await getDoc(profileRef);
            if (profileSnap.exists()) {
                setHasProfile(true);
            } else {
                setHasProfile(false);
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };

    const handleMainImageUrlSubmit = async () => {
        setMainImageUrl(newImageUrl);
        setShowMainImageDialog(false);
        setNewImageUrl('');

        const docRef = doc(collection(db, 'settings'), 'background');
        await setDoc(docRef, { mainImageUrl: newImageUrl }); // Update only mainImageUrl
    };

    const openProfileDialog = () => {
        setShowProfileDialog(true);
    };

    if (isLoading) {
        return <Spinner />; // Show spinner while loading
    }

    return (
        <div
            className="flex flex-col items-center justify-start min-h-screen p-4 relative bg-gray-900"
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                filter: 'brightness(90%)',  // slightly reduce brightness
            }}
        >
            {currentUser === adminEmail && (
                <>
                    <button
                        className="relative top-3 left-4 md:left-3 bg-teal-600 text-white mb-4 px-4 py-2 rounded-full shadow-lg hover:bg-teal-700 transition-colors duration-300 z-10"
                        onClick={() => setShowMainImageDialog(true)}
                    >
                        Change Main Image
                    </button>
                </>
            )}

            <h1 className="text-3xl md:text-4xl rounded-full shadow-teal p-3 font-bold text-center mb-8 text-white gradient-background1 ">
                Welcome to the Suncat Distribution Network
            </h1>

            <div className='text-sm   rounded-md shadow-teal p-2  text-center mb-8 text-white hover:bg-black'>
                <p>Our reach is ever evolving. Please feel free to join, contact us, or simply explore.</p>

            </div>


            {/* Main Image Changeable */}
            <div className="w-full md:w-3/4 max-w-xl mb-8">
                <img
                    src={mainImageUrl}
                    alt="Main Image"
                    className="mx-auto rounded-lg shadow-lg zoom"
                    style={{ maxWidth: '100%' }}
                />
            </div>

            {/* Background Carousel */}
            <Carousel className="w-full md:w-3/4 mb-8" style={{ maxWidth: '600px' }} interval={1000}>
                <Carousel.Item>
                    <img
                        className="d-block w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/spices.jpeg?raw=true"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                        src="https://images.pexels.com/photos/9898355/pexels-photo-9898355.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/sause%20nice.jpeg?raw=true"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/rice.jpeg?raw=true"
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/jarred%20sauses.jpeg?raw=true"
                        alt="Fifth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/flour2.jpeg?raw=true"
                        alt="Sixth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/flour%20twinkies.jpeg?raw=true"
                        alt="Seventh slide"
                    />
                </Carousel.Item>
            </Carousel>
            {/* Artwork Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 w-full md:w-3/4">
                <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <img className="object-cover w-full h-full" src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/flour%20cakes.jpeg?raw=true" alt="Artwork" />
                </div>
                <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <img className="object-cover w-full h-full" src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/flour%20biscuits.jpeg?raw=true" alt="Artwork" />
                </div>
                <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <img className="object-cover w-full h-full" src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/flour%20bakingpowder.jpeg?raw=true" alt="Artwork" />
                </div>
                <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <img className="object-cover w-full h-full" src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/drinks.jpeg?raw=true" alt="Artwork" />
                </div>
                <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <img className="object-cover w-full h-full" src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/drinks%20brands%202.jpeg?raw=true" alt="Artwork" />
                </div>
                <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <img className="object-cover w-full h-full" src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Artwork" />
                </div>
            </div>

            {/* Main Image Dialog */}
            {showMainImageDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Change Main Image</h2>
                        <input
                            type="text"
                            value={newImageUrl}
                            onChange={(e) => setNewImageUrl(e.target.value)}
                            className="border border-gray-300 p-2 rounded mb-4 w-full"
                            placeholder="Enter new image URL"
                        />
                        <button
                            onClick={handleMainImageUrlSubmit}
                            className="bg-teal-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-teal-700 transition-colors duration-300 mr-2"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setShowMainImageDialog(false)}
                            className="bg-gray-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
