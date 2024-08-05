import React from 'react';

const brands = [
    { name: 'Brand 1', imageUrl: 'https://www.nestle.com/sites/default/files/styles/brand_category_grid_297_167/public/2023-08/chocolate-category.jpg.webp?itok=RtsWEbi-' },
    { name: 'Brand 2', imageUrl: 'https://www.nestle.com/sites/default/files/styles/brand_category_grid_297_167/public/2023-08/dairy-category_0.jpg.webp?itok=doWlA69n' },
    { name: 'Brand 3', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Brand 4', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Brand 5', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Brand 6', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Brand 7', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Brand 8', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Brand 9', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Brand 10', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Brand 11', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Brand 12', imageUrl: 'https://via.placeholder.com/150' },
];

export default function Brands() {
    return (
        <div className=" mx-auto px-4 py-8 bg-gray-900">
            <h2 className=" font-semibold text-center text-white text-3xl mb-8 zoom">Some of our Brands</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {brands.map((brand, index) => (
                    <div key={index} className="flex flex-col items-center bg-white rounded-lg p-4">
                        <img
                            src={brand.imageUrl}
                            alt={brand.name}
                            className="w-full h-32 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-medium">{brand.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
