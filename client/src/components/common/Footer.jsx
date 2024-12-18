import React from "react";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import gmtLogo from "../../assets/gmt-white-logo.png"


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Logo Section */}
                <div className="flex justify-center lg:justify-start mb-6 lg:mb-0">
                    <img
            src={gmtLogo}
            alt="logo"
            className="h-auto"
          />
                    {/* E Commerce */}
                </div>

                {/* Shopping Guide Links */}
                <div>
                    <h5 className="font-semibold mb-4">Shopping Guide</h5>
                    <ul>
                        <li>
                            <a href="/shipping-methods" className="hover:underline text-sm text-gray-400">
                                Shipping Methods
                            </a>
                        </li>
                        <li>
                            <a href="/privacy-policy" className="hover:underline text-sm text-gray-400">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/terms-conditions" className="hover:underline text-sm text-gray-400">
                                Terms & Conditions
                            </a>
                        </li>
                        <li>
                            <a href="/account/dashboard" className="hover:underline text-sm text-gray-400">
                                Where is my order?
                            </a>
                        </li>
                        <li>
                            <a href="/our-return-policy" className="hover:underline text-sm text-gray-400">
                                Return Policy
                            </a>
                        </li>
                    </ul>
                </div>

                {/* My Account Links */}
                <div>
                    <h5 className="font-semibold mb-4">My Account</h5>
                    <ul>
                        <li>
                            <a href="/coming-soon" className="hover:underline text-sm text-gray-400">
                                Support
                            </a>
                        </li>
                        <li>
                            <a href="/store" className="hover:underline text-sm text-gray-400">
                                Account Details
                            </a>
                        </li>
                        <li>
                            <a href="/store" className="hover:underline text-sm text-gray-400">
                                Addresses
                            </a>
                        </li>
                        <li>
                            <a href="/account/dashboard" className="hover:underline text-sm text-gray-400">
                                Order History
                            </a>
                        </li>
                        <li>
                            <a href="/coming-soon" className="hover:underline text-sm text-gray-400">
                                Order Tracking
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Information Links */}
                <div>
                    <h5 className="font-semibold mb-4">Information</h5>
                    <ul>
                        <li>
                            <a href="/coming-soon" className="hover:underline text-sm text-gray-400">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/contact-us" className="hover:underline text-sm text-gray-400">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="/returns-warranty" className="hover:underline text-sm text-gray-400">
                                Warranty
                            </a>
                        </li>
                        <li>
                            <a href="/support-page" className="hover:underline text-sm text-gray-400">
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a href="/coming-soon" className="hover:underline text-sm text-gray-400">
                                Site Map
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="mt-8 lg:mt-0">
                    <h5 className="font-semibold mb-4">Contact Us</h5>
                    <p className="mb-2 border-b text-gray-400 pb-2">
                        5659 Buford Hwy Ste# 108-111,
                        <br />
                        Doraville, GA 30340, United States
                    </p>
                    <p className="mb-2 border-b text-sm text-gray-400 py-2">
                        <a href="tel:(770)-355-4781" className="hover:underline">
                            (770)-355-4781 | (678)-404-5669 | (470)-375-3949
                        </a>
                    </p>
                    <p className="mb-2 border-b text-gray-400 py-2">
                        <a href="mailto:sales@neocellularparts.com" className="hover:underline">
                            sales@neocellularparts.com
                        </a>
                    </p>
                    <div className="border-b text-gray-400 py-2">
                        <p>Monday to Friday 9:30am to 6:00pm</p>
                        <p>Saturday 10:00am to 4:00pm</p>
                        <p>Sunday Off</p>
                    </div>
                </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex justify-center space-x-4">
                <a href="https://www.facebook.com/people/Neo-Cellular-Parts/100088413156139/?mibextid=LQQJ4d">
                    <svg className="w-6 h-6 fill-current hover:text-gray-400">
                        {/* Facebook SVG path */}
                    </svg>
                </a>
                <a href="https://www.instagram.com/neocellular_parts/?hl=en/">
                    <svg className="w-6 h-6 fill-current hover:text-gray-400">
                        {/* Instagram SVG path */}
                    </svg>
                </a>
                {/* Add other social links if needed */}
            </div>

            <div className="mt-4 text-center text-sm text-gray-400">
                © 2024. All rights reserved.
            </div>

            {/* Payment Methods */}
            <div className="mt-4 flex justify-center space-x-2">
                <p>
                    <FaFacebook className="text-3xl" />
                </p>
                <p>
                    <FaInstagramSquare className="text-3xl" />
                </p>
                <p>
                    <FaXTwitter className="text-3xl" />
                </p>
                <p>
                    <FaYoutube className="text-3xl" />
                </p>
            </div>
        </footer>
    );
};

export default Footer;
