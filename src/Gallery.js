import React from 'react';
import { useState } from 'react';
import './gallery.css';
import CloseIcon from '@mui/icons-material/Close';

import Img1 from './images/1.JPG';
import Img2 from './images/2.JPG';
import Img3 from './images/3.JPG';
import Img4 from './images/4.JPG';
import Img5 from './images/5.JPG';
import Img6 from './images/6.JPG';
import Img7 from './images/7.JPG';
import Img8 from './images/8.JPG';
import Img9 from './images/9.JPG';
import Img10 from './images/10.JPG';

const Gallery = () => {
    const data = [
        {
            id: 1,
            imgSrc: Img1
        },
        {
            id: 2,
            imgSrc: Img2
        },
        {
            id: 3,
            imgSrc: Img3
        },
        {
            id: 4,
            imgSrc: Img4
        },
        {
            id: 5,
            imgSrc: Img5
        },
        {
            id: 6,
            imgSrc: Img6
        },
        {
            id: 7,
            imgSrc: Img7
        },
        {
            id: 8,
            imgSrc: Img8
        },
        {
            id: 9,
            imgSrc: Img9
        },
        {
            id: 10,
            imgSrc: Img10
        },
    ]
    const [model, setModel] = useState(false);
    const [tempSrc, setTempSrc] = useState('');

    const openImage = (imgSrc) => {
        setTempSrc(imgSrc);
        setModel(true)
    }
    return (
        <>
            <div className={model ? 'model open' : 'model'}>
                <img src={tempSrc} />
                <CloseIcon onClick={() => setModel(false)} />
            </div>
            <div className='gallery'>
                {data.map((item, index) => {
                    return (
                        <div className='images' key={index} onClick={() => openImage(item.imgSrc)}>
                            <img src={item.imgSrc} style={{ width: '100%' }} />
                        </div>
                    )
                })}

            </div>
        </>

    )
}

export default Gallery;