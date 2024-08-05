import React from 'react';

export default function OurStaff() {
    return (
        <div className="min-h-screen bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-8 zoom">Our Staff</h1>

                {/* Introduction */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-semibold mb-4">How We Started</h2>
                    <p className="text-lg">
                        At [Your Warehouse Name], we began with a simple vision: to provide high-quality food products to our community at affordable prices. Founded in [Year], our warehouse has grown from a small operation to a leading supplier for local businesses, events, and hotels. Our dedicated team is passionate about serving our clients with efficiency and care.
                    </p>
                </div>

                {/* Team Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Owner */}
                    <div className="bg-black p-6 rounded-lg shadow-neon">
                        <img
                            src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Owner"
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <h3 className="text-xl font-semibold mt-4 mb-2">John Doe</h3>
                        <h4 className="text-lg font-medium mb-4">Owner</h4>
                        <p>
                            John founded [Your Warehouse Name] with a mission to provide high-quality food products at competitive prices. With years of experience in the food industry, John’s vision and leadership have been instrumental in our growth. His dedication to customer satisfaction and community support drives our success.
                        </p>
                    </div>

                    {/* Manager 1 */}
                    <div className="bg-black p-6 rounded-lg shadow-teal">
                        <img
                            src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Manager 1"
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <h3 className="text-xl font-semibold mt-4 mb-2">Jane Smith</h3>
                        <h4 className="text-lg font-medium mb-4">Operations Manager</h4>
                        <p>
                            Jane oversees the daily operations of our warehouse, ensuring everything runs smoothly. Her expertise in logistics and her commitment to operational excellence play a crucial role in maintaining our high standards of service.
                        </p>
                    </div>

                    {/* Manager 2 */}
                    <div className="bg-black p-6 rounded-lg shadow-sky">
                        <img
                            src="https://images.pexels.com/photos/7438102/pexels-photo-7438102.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Manager 2"
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <h3 className="text-xl font-semibold mt-4 mb-2">Michael Brown</h3>
                        <h4 className="text-lg font-medium mb-4">Sales Manager</h4>
                        <p>
                            Michael is responsible for building and maintaining relationships with our clients. His strategic approach to sales and his ability to understand customer needs have been key to our success in expanding our client base.
                        </p>
                    </div>

                    {/* Manager 3 */}
                    <div className="bg-black p-6 rounded-lg shadow-nature">
                        <img
                            src="https://images.pexels.com/photos/4342493/pexels-photo-4342493.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Manager 3"
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <h3 className="text-xl font-semibold mt-4 mb-2">Emily Johnson</h3>
                        <h4 className="text-lg font-medium mb-4">Customer Service Manager</h4>
                        <p>
                            Emily leads our customer service team, ensuring that every client receives exceptional support. Her dedication to resolving issues and her friendly approach help us maintain strong and positive relationships with our customers.
                        </p>
                    </div>

                    {/* Manager 4 */}
                    <div className="bg-black p-6 rounded-lg shadow-sunset">
                        <img
                            src="https://images.pexels.com/photos/6004171/pexels-photo-6004171.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Manager 4"
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <h3 className="text-xl font-semibold mt-4 mb-2">Laura Wilson</h3>
                        <h4 className="text-lg font-medium mb-4">Logistics Manager</h4>
                        <p>
                            Laura manages the logistics of our operations, overseeing the transportation and warehousing of goods. Her meticulous planning and problem-solving skills ensure timely and efficient delivery of products.
                        </p>
                    </div>

                    {/* Manager 5 */}
                    <div className="bg-black p-6 rounded-lg shadow-neon">
                        <img
                            src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Manager 5"
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <h3 className="text-xl font-semibold mt-4 mb-2">David Martinez</h3>
                        <h4 className="text-lg font-medium mb-4">Finance Manager</h4>
                        <p>
                            David handles the financial aspects of our business, including budgeting, forecasting, and financial reporting. His expertise ensures that our financial operations are transparent and well-managed.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
