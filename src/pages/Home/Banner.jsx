import React from 'react';

const Banner = () => {
    const bannerCards = [
        {
            id: 1,
            title: "Nutritious Food Management",
            image: "https://i.ibb.co/ZpXqWKKJ/nutrition-food-dietery.jpg",
            description: "Track and manage your nutritious food inventory efficiently.",
        },
        {
            id: 2,
            title: "Smart Food Storage",
            image: "https://i.ibb.co/3yXV4PxN/food.jpg",
            description: "Organize your food storage with intelligent tracking system.",
        },
        {
            id: 3,
            title: "Expiry Date Tracking",
            image: "https://i.ibb.co/HTFTTKPs/flat-lay-charts-organicjpg.jpg",
            description: "Never miss expiry dates with our smart notification system.",
        }
    ];

    return (
        <div className="carousel w-full mt-16">
            {bannerCards.map((card) => (
                <div key={card.id} id={`slide${card.id}`} className="carousel-item relative w-full">
                    <div className="relative w-full">
                        <img
                            src={card.image}
                            className="w-full h-[750px] object-cover brightness-50"
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] px-8">
                            <div className="bg-base-100 bg-opacity-60 backdrop-blur-sm p-8 rounded-lg shadow-2xl border border-white border-opacity-20 text-center">
                                <h2 className="text-[32px] font-bold mb-4 text-base-content">{card.title}</h2>
                                <p className="text-lg mb-6 text-base-content-200">{card.description}</p>
                                <button className="btn btn-primary hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                                    See More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href={`#slide${card.id === 1 ? 3 : card.id - 1}`} className="btn btn-circle">❮</a>
                        <a href={`#slide${card.id === 3 ? 1 : card.id + 1}`} className="btn btn-circle">❯</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Banner;