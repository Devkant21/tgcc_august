import Image from "next/image";
import React from 'react';
import Link from 'next/link';

import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { MdPhoneIphone, MdMailOutline } from "react-icons/md";

const FootLinks = [
    {
        no: 1,
        title: "Condition of Use",
        urlLink: "https://footer.diageohorizon.com/dfs/assets/in.thebar.com/TnC_eni.html?locale=eni-in",
    },
    {
        no: 2,
        title: "Diageo Privacy Centre",
        urlLink: "https://www.diageoprivacycentre.com/en-in?pp=https%3A%2F%2Ffooter.diageohorizon.com%2Fdfs%2Fassets%2Fin.thebar.com%2FPrivacyPolicy_eni.html%3Flocale%3Deni-in",
    },
    {
        no: 3,
        title: "UGC Policy",
        urlLink: "https://footer.diageohorizon.com/dfs/assets/in.thebar.com/UGC_eni.html?locale=eni-in",
    },
    {
        no: 4,
        title: "Accessibility",
        urlLink: "https://footer.diageohorizon.com/dfs/assets/in.thebar.com/in.thebar.com_eni-in_final_accessibility.html",
    },
    {
        no: 5,
        title: "Privacy Settings",
        urlLink: "#",
    },
    {
        no: 6,
        title: "Privacy and Cookie Notice",
        urlLink: "https://footer.diageohorizon.com/dfs/assets/in.thebar.com/PrivacyPolicy_eni.html?locale=eni-in",
    },
    {
        no: 7,
        title: "Drink Responsibly",
        urlLink: "http://www.responsibledrinking.org/",
    },
    {
        no: 8,
        title: "DrinkIQ",
        urlLink: "https://www.drinkiq.com/en-in",
    },
    // {
    //     no: 9,
    //     title: "TGCC.com",
    //     urlLink: "#",
    // },
    {
        no: 10,
        title: "COPYRIGHT © 2024 DIAGEO.",
        urlLink: "#",
    },
];

const Footer = () => {
    return (
        <section className="md:px-[60px] bg-[#2E4149] py-12 px-4">
            <footer className="flex flex-col items-center justify-center space-y-16">
                <div className="w-full flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0 p-4 md:p-0">
                    <div className='block md:hidden'>
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
                    {/* <div className="flex flex-col md:flex-row md:items-end md:gap-6">
                        <p className="flex gap-1 items-center"><b>Contact Us:</b> <MdPhoneIphone size={16} /> +91 9876543210</p>
                        <p className="flex gap-1 items-center"><b>Email: </b> <MdMailOutline size={16} /> xyz@tgccinfo.com</p>
                    </div> */}
                    {/* <div className="flex items-end gap-6">
                        <Link href='https://facebook.com/tgccindia' target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={24} />
                        </Link>
                        <Link href='https://instagram.com/tgccindia' target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} />
                        </Link>
                    </div> */}
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <p className="font-semibold">*This content is intended for audience above legal drinking age as specified by their state/country of residence. Enjoy & Share Responsibly.</p>
                    <div className="max-w-[1100px] mt-10">
                        {FootLinks.map((link, index) => (
                            <React.Fragment key={index}>
                                <Link href={link.urlLink} className="text-white hover:text-gray-900 mb-2">
                                    {link.title}
                                </Link>
                                {index !== FootLinks.length - 1 && ' | '}
                            </React.Fragment>
                        ))}
                    </div>
                    <p className="">Please do not share with anyone under the legal purchase age for alcohol. Drink Responsibly.</p>
                </div>
                <div className='hidden md:block absolute bottom-0 right-0 p-10'>
                    <Image src='/svg/whitelogo.svg' alt='LOGO' width={0} height={0} className="w-[100px] h-[100px]" />
                </div>
            </footer>
        </section>
    );
}

export default Footer;
