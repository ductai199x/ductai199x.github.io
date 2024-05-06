"use client"
import { Button } from './ui/button';
import { TypingAnimation } from './typing_animation';

const i_am_postfixes = [
    "a scientist",
    "a researcher",
    "an engineer",
    "a developer",
    "Tai D. Nguyen",
]

export default function Hero() {


    return (
        <div className="text-center background">
            <div className="background-image">
            
            </div>
            <TypingAnimation prefix="I am" postfixes={i_am_postfixes}/>
            <p className="mt-4 text-gray-600">
                Welcome to my professional portfolio. Explore my work in AI and multimedia forensics.
            </p>
            <Button className="mt-4">Learn More</Button>
        </div>
    );
}