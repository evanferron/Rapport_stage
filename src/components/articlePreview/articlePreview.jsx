import React from 'react';

const ArticlePreview = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        // at the last image it redirect to the first
        setCurrentIndex((index) =>
            index != data.images.length - 1 ? index + 1 : 0,
        );
    };
    const prevSlide = () => {
        // at the first image it redirect to the last
        setCurrentIndex((index) =>
            index != 0 ? index + 1 : data.images.length - 1,
        );
    };
    return (
        <article>
            <div className='carroussel'>
                <button className="buttonnPrev" onClick={prevSlide}>
                </button>
                <img src={data.images[currentIndex]} alt={`Slide ${currentIndex}`} />
                <button className="buttonNext" onClick={nextSlide}>
                </button>
            </div>
            <div id='middle-container'></div>
            <div id='right-cotnainer'></div>
        </article>
    );
};

export default ArticlePreview;