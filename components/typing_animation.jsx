"use client";
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export const TypingAnimation = ({prefix, postfixes, anim_options}) => {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: postfixes,
            typeSpeed: anim_options?.typeSpeed || 40,
            backSpeed: anim_options?.backSpeed || 40,
            backDelay: anim_options?.backDelay || 1000,
            startDelay: anim_options?.startDelay || 50,
            loop: true,
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        };
    }, []);

    return (
        <div className="text-2xl font-bold">
            <span className="font-black">{prefix}&nbsp;&nbsp;</span>
            <span ref={el}></span>
        </div>
    );
};
