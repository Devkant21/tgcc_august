import Image from "next/image";
import React from 'react';
import Link from 'next/link';

import { FaFacebook, FaInstagram } from "react-icons/fa6";

const FootLinks = [
    {
        no: 1,
        title: "Condition of Use",
        urlLink: "#",
    },
    {
        no: 2,
        title: "Diageo Privacy Centre",
        urlLink: "#",
    },
    {
        no: 3,
        title: "UGC Policy",
        urlLink: "#",
    },
    {
        no: 4,
        title: "Accessibility",
        urlLink: "#",
    },
    {
        no: 5,
        title: "Privacy Settings",
        urlLink: "#",
    },
    {
        no: 6,
        title: "Privacy and Cookie Notice",
        urlLink: "#",
    },
    {
        no: 7,
        title: "Drink Responsibly",
        urlLink: "#",
    },
    {
        no: 8,
        title: "DrinkIQ",
        urlLink: "#",
    },
    {
        no: 9,
        title: "TGCC.com",
        urlLink: "#",
    },
    {
        no: 10,
        title: "COPYRIGHT © 2024 DIAGEO.",
        urlLink: "#",
    },
];

const Footer = () => {
    return (
        <section className="md:px-[112px] bg-[#2E4149] py-20 px-4 md:px-0">
            <footer className="flex flex-col items-center justify-center space-y-16">
                <div className="w-full flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 p-4 md:p-0">
                    <div>
                        <Image src='/svg/whitelogo.svg' alt='LOGO' width={0} height={0} className="w-[100px] h-[100px]" />
                    </div>
                    {/* <div className="space-y-3">
                        <h5>BOOK A TOUR</h5>
                        <ul>
                            <li>MONDAY TO SATURDAY</li>
                            <li>+39 123 456 789</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h5>DISTRIBUTION</h5>
                        <ul>
                            <li>FOR ANY INQUIRIES WRITE US AT</li>
                            <li>XYZ@TEST.COM</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h5>ADDRESS</h5>
                        <ul>
                            <li>Lorem ipsum dolor sit amet,</li>
                            <li>Whitefield, Bangalore XXXXXX</li>
                        </ul>
                    </div> */}
                    <div className="flex items-end gap-6">
                        <Link href='https://facebook.com/tgccindia' target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={24} />
                        </Link>
                        <Link href='https://instagram.com/tgccindia' target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <p>*This content is intended for audience above legal drinking age as specified by their state/country of residence. Enjoy & Share Responsibly.</p>
                    <div className="max-w-[900px] ">
                        {FootLinks.map((link, index) => (
                            <React.Fragment key={index}>
                                <Link href={link.urlLink} className="text-white hover:text-gray-900 mb-2">
                                    {link.title}
                                </Link>
                                {index !== FootLinks.length - 1 && ' | '}
                            </React.Fragment>
                        ))}
                    </div>
                    <p className="font-bold">Please do not share with anyone under the legal purchase age for alcohol. Drink Responsibly.</p>
                </div>
            </footer>
        </section>
    );
}

export default Footer;