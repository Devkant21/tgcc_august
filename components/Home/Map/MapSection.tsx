"use client"

import './Map.css'

import React, { useState } from 'react';
import MapSVG from './MapSVG';
import Image from 'next/image';

interface LocData {
    wineType: string;
    loc: string;
    description: string;
    x: number;
    y: number;
}

const MapSection: React.FC = () => {
    const [hoveredLocation, setHoveredLocation] = useState<LocData | null>(null);

    const handleHover = (location: LocData | null) => {
        setHoveredLocation(location);
    };

    return (
        <section className="mapSection flex items-center justify-center py-20 md:px-[84px]">
            <div className='flex flex-col lg:flex-row justify-evenly gap-2 p-4 md:p-0'>
                <div className='flex flex-col justify-center space-y-4'>
                    <div className='H4 text-5xl font-medium lg:w-[450px]'>Home to <br /> Conscious Spirits</div>
                    <div className='w-full md:max-w-[400px] mapDesc'>Unfold the story of diversity within India. Through the lens of crafted spirits.</div>
                    <div className='text-sm flex items-center gap-2'>
                        Hover on the map to discover rare Indian spirits
                        <span><Image src='/svg/arrowRmap.svg' alt='Arrow Right' width={0} height={0} className='w-[20px] h-[20px]' /></span>
                    </div>
                </div>
                <div className='flex w-auto'>
                    <MapSVG onHover={handleHover} />
                </div>
                <div className='flex flex-col w-full lg:w-[400px] justify-center space-y-4'>
                    {hoveredLocation ? (
                        <div className='fade-in'>
                            <h5>{hoveredLocation.loc}</h5>
                            <div className='mapDesc'>{hoveredLocation.description}</div>
                        </div>
                    ) : (
                        <>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default MapSection;