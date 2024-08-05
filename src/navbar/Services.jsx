import React from 'react';

export default function OurServices() {
    return (
        <section className="bg-gray-900 text-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Our Services</h1>
                    <p className="text-lg md:text-xl">
                        At Suncat Catering Supplies, we are dedicated to providing a service to our clients ranging from bulk deliveries, events catering and general food supplies to the hospitality sector.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Delivery Services */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Delivery Services</h2>
                        <p className="text-gray-400">
                            We provide reliable delivery services to ensure that your goods reach you timeously. Our efficient logistics team handles both small and large scale jobs with strategic planning.
                        </p>
                    </div>

                    {/* Bulk Monthly Orders */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Bulk Monthly Orders</h2>
                        <p className="text-gray-400">
                            Take advantage of our bulk ordering service to streamline your procurement process. We offer tailored pricing and flexible scheduling for monthly bulk orders.
                        </p>
                    </div>

                    {/* Event and Hotel Supplies */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Event and Hotel Supplies</h2>
                        <p className="text-gray-400">
                            From large-scale events to hotel supplies, we provide top-quality products tailored to your requirements. Our team works closely with you to ensure that every detail is covered, providing reliable and efficient solutions for your business.
                        </p>
                    </div>

                    {/* Community Catering */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Community Catering</h2>
                        <p className="text-gray-400">
                            We take pride in supporting our community through catering services for local events and gatherings. Our commitment to quality and customer satisfaction ensures that your event will be a success, with delicious food and excellent service.
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                    <p className="text-lg text-gray-400">
                        Our dedication to excellence and efficiency sets us apart. We prioritize your needs and work diligently to provide exceptional service, ensuring that every order, event, and delivery exceeds your expectations.
                    </p>
                </div>
            </div>
        </section>
    );
}
