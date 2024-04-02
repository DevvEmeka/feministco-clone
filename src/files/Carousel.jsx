import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 2 : prevIndex - 2
        );
    };

    const goToNextSlide = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 2 ? 0 : prevIndex + 2
        );
    };

    return (
        <section>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start relative">
                <div className="flex justify-center items-center mb-4">
                    <button
                        className="bg-gray-800 text-white px-4 py-2 mr-2 rounded"
                        onClick={goToPreviousSlide}
                    >
                        Previous
                    </button>
                    <button
                        className="bg-gray-800 text-white px-4 py-2 rounded"
                        onClick={goToNextSlide}
                    >
                        Next
                    </button>
                </div>
                <div className="md:ml-8">
                    <div className="flex flex-wrap">
                        {images.map((image, index) => (
                            <div key={index} className={`w-full md:w-1/2 ${index >= currentImageIndex && index <= currentImageIndex + 1 ? 'block' : 'hidden'}`}>
                                <img
                                    src={image}
                                    alt={`slide-${index}`}
                                    className="w-full"
                                />
                                <div className="text-center mt-2">{`Image ${index + 1}`}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Carousel;
