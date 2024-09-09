"use client"

import React, { useState, useEffect } from 'react';

import './consent.css';

import Image from 'next/image';

const AgeConsent: React.FC = () => {
    const [consentGiven, setConsentGiven] = useState(false);
    const [showNoConsentMessage, setShowNoConsentMessage] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('ageConsent');
        if (consent) {
            setConsentGiven(true);
        }
    }, []);

    const handleConsent = (answer: 'yes' | 'no') => {
        if (answer === 'yes') {
            localStorage.setItem('ageConsent', 'true');
            setConsentGiven(true);
        } else if (answer === 'no') {
            setShowNoConsentMessage(true);
        }
    };

    if (consentGiven) {
        return null;
    }

    return (
        <section className="ageConsentSection">
            <div className='wrapContainer UniformRegular space-y-2 md:space-y-6 p-2 md:p-[50px]'>
                <Image src="/svg/bird.svg" alt="Bird SVG" width={50} height={50} className="birdSVG" />
                <div className="absolute bottom-6 left-6 w-[300px] h-auto md:block hidden ">
                    <Image src="/svg/consentB.svg" alt="ConsentT SVG" width={0} height={0} className='w-[300px] h-auto' />
                </div>
                <div className="absolute top-0 right-4 w-[300px] h-auto md:block hidden ">
                    <Image src="/svg/consentT.svg" alt="ConsentT SVG" width={0} height={0} className='w-[300px] h-auto' />
                </div>
                <div className="content">
                    <Image src='/svg/whitelogo.svg' alt='Logo' width={150} height={150} priority />
                    <p className='pt-4 md:pt-10 ConsentUniformMedium'>Welcome to a journey unlike any other, but before we sail on to discover rare Indian spirits, please if you are 25 or older.</p>
                </div>
                {showNoConsentMessage && (
                    <div>
                        <p className='text-red-400'>Sorry, your age does not permit you to enter at this time. Please close the site.</p>
                    </div>
                )}
                <div className='flex space-x-6 text-[1rem] md:text-[1.55rem] z-10'>
                    <button onClick={() => handleConsent('yes')} className='bg-white text-black p-2 px-6 rounded-md'>YES</button>
                    <button onClick={() => handleConsent('no')} className='bg-white text-black p-2 px-6 rounded-md'>NO</button>
                </div>
                <div className="flex flex-col gap-1 z-10 max-w-[500px]">
                    <div className="z-10">
                        <input
                            aria-label="Remember"
                            type="checkbox"
                        />
                        <span className="ml-2 text-[20px]">Remember me on this device (unless shared)</span>
                    </div>
                    <div className=" z-10">
                        <input
                            aria-label="Remember"
                            type="checkbox"
                        />
                        <span className="ml-2 text-[20px]">I agree to be contacted about alcohol products & related news.</span>
                    </div>
                </div>

                <div className="text-[22px]">
                    <p>This information is part of our commitment to responsible drinking.</p>
                </div>

                <div className="text-[22px]">
                    <p>Conditions of Use</p>
                    <p>India</p>
                </div>
            </div>
        </section>
    );
}

export default AgeConsent;