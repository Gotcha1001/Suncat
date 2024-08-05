import React from 'react';

export default function Price() {
    return (
        <section className="bg-gray-900 text-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 zoom">Bulk Pricing</h1>
                    <p className="text-lg md:text-xl">
                        Discover our competitive prices on bulk purchases for a variety of products. We offer great deals on food items, toiletries, drinks, and more.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Food Items */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-neon">
                        <h2 className="text-2xl font-semibold mb-4">Food Items</h2>
                        <ul className="space-y-4">
                            <li className="flex justify-between">
                                <span className="font-semibold">Organic Rice (50 lbs)</span>
                                <span>$40.00</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-semibold">Whole Wheat Flour (25 lbs)</span>
                                <span>$25.00</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-semibold">Canned Tomatoes (Case of 12)</span>
                                <span>$18.00</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-semibold">Olive Oil (5 Liters)</span>
                                <span>$55.00</span>
                            </li>
                        </ul>
                    </div>

                    {/* Toiletries */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-teal">
                        <h2 className="text-2xl font-semibold mb-4">Toiletries</h2>
                        <ul className="space-y-4">
                            <li className="flex justify-between">
                                <span className="font-semibold">Toilet Paper (Pack of 48)</span>
                                <span>$22.00</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-semibold">Hand Soap (Case of 12)</span>
                                <span>$30.00</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-semibold">Shampoo (5 Liters)</span>
                                <span>$40.00</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-semibold">Toothpaste (Case of 24)</span>
                                <span>$25.00</span>
                            </li>
                        </ul>
                    </div>

                    {/* Drinks */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-sky">
                        <h2 className="text-2xl font-semibold mb-4">Drinks</h2>
                        <ul className="space-y-4">
                            <li className="flex justify-between">
                                <span className="font-semibold">Spring Water (Case of 24)</span>
                                <span>$15.00</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-semibold">Orange Juice (Pack of 6)</span>
                                <span>$20.00</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-semibold">Coffee Beans (5 lbs)</span>
                                <span>$35.00</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-semibold">Tea Bags (Pack of 100)</span>
                                <span>$18.00</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
