import React from 'react';
import Card from './Card';

const URLList = ({ selectedGenre, urls}) => {
    const filteredURLs =
    selectedGenre === 'Home' ? 
    urls : 
    urls.filter(url => url.genre === selectedGenre);

    const urlsArray = filteredURLs.map((url) => {
        return(
            <Card
            img={url.content_img} 
            url={url.url} 
            content={url.content} 
            />
        );
    });

    return (
        <div>
            <div>
                {urlsArray}
            </div>
        </div>
    );
};

export default URLList;