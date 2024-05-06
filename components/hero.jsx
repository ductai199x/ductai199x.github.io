"use client"
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Button } from './ui/button';

const TypingAnimation = () => {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'a scientist',
                'an engineer',
                'a developer',
                'a researcher in AI and multimedia forensics'
            ],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1000,
            startDelay: 300,
            loop: true,
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        };
    }, []);

    return (
        <div className="text-lg font-bold">
            <span className="text-gray-900">I am </span>
            <span ref={el}></span>
        </div>
    );
};


export default function Hero() {


    return (
        <div className="text-center">
            <TypingAnimation />
            <p className="mt-4 text-gray-600">
                Welcome to my professional portfolio. Explore my work in AI and multimedia forensics.
            </p>
            <Button className="mt-4">Learn More</Button>
        </div>
    );
}