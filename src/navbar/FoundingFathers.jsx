import React from 'react';

export default function FoundingFathers() {
    return (
        <section className="bg-gray-900 text-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 animate-bounce ">Founding Fathers</h1>
                    <p className="text-lg md:text-xl">
                        Not far from the Industrial Park in a garage, we began our operations with a simple vision to provide quality food and cleaning materials within the Hospitality and Food Services Industry. Our books grew to include entities like The Oysterbox Hotel, Moses Mabhida Stadium, ICC, The Coastlands Group, Radisson Blu Hotel, and various smaller businesses within the Food Catering Sector for Old Age Homes and Canteens.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-nature hover:bg-black">
                        <h2 className="text-2xl font-semibold mb-4">Loven Subramoney</h2>
                        <p className="text-lg">
                            <strong>Current Directorship</strong><br />
                            An ex-shareholder of a family-owned textile company, Loven had a new vision for his life and family. He and his lifelong friend would align to form a company of their own. Having started in a garage, the duo utilized preexisting corporate experience under the employment of LM Harris and Chipkins to carve their own respective destinies as allies for life. With the tragic passing of Alan in 2017, Loven was forced to continue alone and pave the way for his future with the continuation of everything that had been built for the families. Today, Loven is a well-respected, knowledgeable, and accomplished businessman.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-sky hover:bg-black">
                        <h2 className="text-2xl font-semibold mb-4">Alan Govender</h2>
                        <p className="text-lg">
                            <strong>Ex Directorship (… to 2017)</strong><br />
                            Alan was an integral part of the company until 2017. His contributions and leadership were vital in shaping the early success of the business. His vision and dedication played a crucial role in establishing the foundation for the company’s growth and reputation.
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
                    <p className="text-lg">
                        Have questions or need more information? Feel free to reach out to us at <a href="mailto:contact@suncatdistribution.com" className="text-teal-400 hover:underline">info@suncat.co.za</a> or visit our warehouse at Phoenix Industrial Park, Kwazulu Natal. We look forward to serving you and being a part of your community.
                    </p>
                </div>
            </div>
        </section>
    );
}
