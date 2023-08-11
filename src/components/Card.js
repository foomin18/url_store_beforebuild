import React from 'react';

const Card = ({img, url, content}) => {
    const img_str = '../images/' + img;

    return (
        <div className='contain dib br3 pa2 ma2 bw2 shadow-4'width="300" height="300">
            <img alt='img' src={img_str} className='image-container' />      
            <div>
                <a className='urltxt' href={url}><h6>{content}</h6></a>
            </div>
        </div>
    );
}

export default Card;