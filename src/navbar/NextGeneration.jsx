import React from 'react';

export default function NextGeneration() {
    return (
        <section className="bg-gray-900 text-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 animate-bounce">Next Generation</h1>
                    <p className="text-lg md:text-xl">
                        As we move forward into the future, our focus remains on harnessing innovation and technology to elevate our services and expand our reach. Our commitment to excellence in food distribution and product handling drives us to continually adapt and refine our processes, ensuring we meet the evolving needs of our clients and the industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-neon">
                        <h2 className="text-2xl font-semibold mb-4">Vision for the Future</h2>
                        <p className="text-lg">
                            Our vision is to be at the forefront of the distribution industry by integrating cutting-edge technology and sustainable practices. We aim to enhance our warehouse capabilities, streamline our supply chain, and offer innovative solutions to meet the demands of a global market. By fostering a culture of continuous improvement, we strive to set new standards in quality and efficiency.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-sky">
                        <h2 className="text-2xl font-semibold mb-4">Sustainable Practices</h2>
                        <p className="text-lg">
                            In alignment with our commitment to sustainability, we are implementing eco-friendly initiatives within our operations. From reducing waste to optimizing energy usage, our goal is to minimize our environmental footprint while maintaining the highest standards of service. We believe that responsible business practices not only benefit the planet but also contribute to the long-term success of our company and our clients.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-teal">
                        <h2 className="text-2xl font-semibold mb-4">Innovative Solutions</h2>
                        <p className="text-lg">
                            Embracing technological advancements is key to our strategy. We are investing in state-of-the-art warehouse management systems, automated inventory control, and real-time tracking solutions to ensure seamless operations. These innovations will allow us to offer more efficient and reliable services, ultimately enhancing our clients' experience and satisfaction.
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
                    <p className="text-lg">
                        Have questions or need more information about our next-generation initiatives? Reach out to us at <a href="mailto:contact@suncatdistribution.com" className="text-teal-400 hover:underline">contact@suncatdistribution.com</a> or visit our warehouse at Phoenix Industrial Park, Kwazulu Natal. We look forward to sharing our vision and working together towards a brighter future.
                    </p>
                </div>
            </div>
        </section>
    );
}
