import React from 'react';

export default function New() {
    return (
        <section className="bg-gray-900 text-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 animate-bounce">New Developments</h1>
                    <p className="text-lg md:text-xl">
                        Stay updated with our latest warehouse plans and exclusive specials. We are continuously evolving to serve you better and offer exciting opportunities to benefit from our growing capabilities and promotions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-neon">
                        <h2 className="text-2xl font-semibold mb-4">Upcoming Warehouse Expansions</h2>
                        <p className="text-lg">
                            We are excited to announce our upcoming warehouse expansions, designed to enhance our storage capacity and improve operational efficiency. These expansions will enable us to handle a larger volume of products and provide faster turnaround times. Stay tuned for more details on our new facilities and how they will benefit your business.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-sky">
                        <h2 className="text-2xl font-semibold mb-4">Special Offers and Promotions</h2>
                        <p className="text-lg">
                            Take advantage of our limited-time specials and promotions on select products. We are offering exclusive discounts and deals to help you save on your next order. Be sure to check our website regularly for updates on current offers and upcoming sales events. Don’t miss out on the opportunity to get high-quality products at unbeatable prices.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-teal">
                        <h2 className="text-2xl font-semibold mb-4">New Product Lines</h2>
                        <p className="text-lg">
                            We are thrilled to introduce new product lines to our inventory, including innovative food items and essential cleaning materials. These additions are aimed at providing a wider range of high-quality products to meet the diverse needs of our clients. Explore our new offerings and discover how they can enhance your operations.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-teal">
                        <h2 className="text-2xl font-semibold mb-4">Enhanced Service Features</h2>
                        <p className="text-lg">
                            Our commitment to exceptional service continues with enhanced features designed to improve your experience. From upgraded order tracking systems to personalized support, we are focused on delivering top-notch service to ensure your satisfaction. Learn more about the new features we are rolling out and how they can benefit your business.
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
                    <p className="text-lg">
                        For more information about our new developments, special offers, or product lines, feel free to reach out to us at <a href="mailto:contact@suncatdistribution.com" className="text-teal-400 hover:underline">info@suncat.co.za</a> or visit our warehouse at Phoenix Industrial Park, Kwazulu Natal. We are here to assist you and look forward to serving your needs.
                    </p>
                </div>
            </div>
        </section>
    );
}
