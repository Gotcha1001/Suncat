import React from 'react';

export default function ContactUs() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-gray-900 text-white">
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold text-center mb-8 zoom">Contact Us</h1>

                {/* Contact Information */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Our Address</h2>
                    <p className="text-lg mb-8">56 Hunslet Road, Phoenix Industiral Park, Kwazulu-Natal</p>

                    {/* Google Map */}
                    <div className="my-8 rounded-lg overflow-hidden shadow-sky">
                        <iframe
                            className="w-full h-64 md:h-96"
                            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d110872.19850976886!2d30.920706236121443!3d-29.72682048476048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x1ef704644cd7a309%3A0xcda2c91303557547!2sUnit%2009%2C%20Park%2C%2056%20Hunslet%20Rd%2C%20Phoenix%20Industrial%2C%20Durban%2C%204068!3m2!1d-29.726846!2d31.0031076!5e0!3m2!1sen!2sza!4v1721930666329!5m2!1sen!2sza"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Warehouse Location"
                        ></iframe>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                        <a href="mailto:contact@yourwarehouse.com" className="text-blue-400 hover:underline">admin@suncat.co.za</a>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                        <p className="text-lg">(+27) 31 500 9237</p>
                    </div>

                    {/* Contact Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Customer Service */}


                        {/* Sales Department */}
                        <div className="gradient-background2 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105 shadow-teal">
                            <h4 className="font-bold text-lg">Sales Department</h4>
                            <p>Phone Number: (+27) 31 500 9237
                            </p>
                            <p>Email: sales@suncat.co.za</p>
                        </div>

                        {/* Operations Team */}
                        <div className="gradient-background2 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105 shadow-teal">
                            <h4 className="font-bold text-lg">Operations Team</h4>
                            <p>Phone Number: (+27) 31 500 9237</p>
                            <p>Email: admin1@suncat.co.za</p>
                        </div>

                        {/* Accounts Department */}
                        <div className="gradient-background2 p-4 rounded-lg text-center hover:shadow-xl transform hover:scale-105 shadow-teal">
                            <h4 className="font-bold text-lg">Accounts Department</h4>
                            <p>Phone Number: (+27) 31 500 9237</p>
                            <p>Email: accounts@suncat.co.za</p>
                        </div>
                    </div>

                    {/* Banking Details */}
                    <div className="bg-black p-6 rounded-lg text-center mt-12 zoom shadow-teal">
                        <h2 className="text-2xl font-semibold mb-4">Banking Details</h2>
                        <p className="mb-2">Suncat Catering Supplies</p>
                        <p className="mb-2">First National Bank</p>
                        <p className="mb-2">Account Number: 6206 1570 034</p>
                        <p className="mb-2">Branch Code: 22-02-29</p>

                    </div>
                </div>
            </div>
        </div>
    );
}
