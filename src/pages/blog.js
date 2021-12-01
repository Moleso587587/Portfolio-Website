import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from '../components/slider';

export default React.memo(function Blog({ setShift }) {
    const navigation = useNavigate();
    const [navText, setNavText] = useState();
    const [pos, setPos] = useState(0);
    const posts = ['1', '2', '3', '4'];
    useEffect(() => {
        if (window.location.pathname === '/') {
            setNavText('Blog');
        } else {
            setNavText('Home');
        }
    });
    function switchPost() {
        var point = Math.round(pos);
        return posts[Math.floor(point / 100 * posts.length)] || posts[posts.length - 1];
    }
    return (
        <div className='blog web-page'>
            <h1 className='navSquare' onClick={() => {
                if (window.location.pathname === '/') {
                    setShift(' shift1F');
                    setTimeout(() => {
                        navigation('/blog');
                    }, 500);
                }
                else {
                    setShift(' shift1B');
                    setTimeout(() => {
                        navigation('/');
                    }, 500);
                }
            }}>{navText}</h1>
            <Slider pos={pos} setPos={setPos} />
            {switchPost()}
        </div >
    )
});