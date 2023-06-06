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
import Img11 from './images/11.JPG';
import Img12 from './images/12.JPG';
import Img13 from './images/13.JPG';
import Img14 from './images/14.JPG';
import Img15 from './images/15.JPG';
import Img16 from './images/16.JPG';
import Img17 from './images/17.JPG';
import Img18 from './images/18.JPG';
import Img19 from './images/19.JPG';
import Img20 from './images/20.JPG';

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
        {
            id: 11,
            imgSrc: Img11
        },
        {
            id: 12,
            imgSrc: Img12
        },
        {
            id: 13,
            imgSrc: Img13
        },
        {
            id: 14,
            imgSrc: Img14
        },
        {
            id: 15,
            imgSrc: Img15
        },
        {
            id: 16,
            imgSrc: Img16
        },
        {
            id: 17,
            imgSrc: Img17
        },
        {
            id: 18,
            imgSrc: Img18
        },
        {
            id: 19,
            imgSrc: Img19
        },
        {
            id: 20,
            imgSrc: Img20
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