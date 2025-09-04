import React from 'react'
import { assets, footerLinks } from '../assets/assets.js';
const Footer = () => {
    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 mb-100 lg:mb-0">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div>
                    <img className="w-34 md:w-32" src={assets.logo} alt="logo" />
                    <p className="max-w-[410px] mt-6 text-sm">Experience the power of AI with QuickAi. <br /> Transform your content creation with our suite of premium of AI tools.Write articles,generate images,and enhance your workflow.</p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[65%] gap-5">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-sm text-primary md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url} className="hover:underline transition">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div>
                        <h3 className="font-semibold text-primary md:mb-5 mb-2 text-sm">Subscribe to our newsletter</h3>
                        <p className="text-sm">The latest news,articles,and resources,sent to your inbox weekly.</p>
                        <form className="flex items-center justify-between  w-90 gap-5 md:h-13 h-12">
                            <input
                                className="border border-gray-300 rounded-md h-8  outline-none w-100 rounded-r-none px-3 text-gray-500"
                                type="text"
                                placeholder="Enter your email id"
                                required
                            />
                            <button type="submit" className="h-8 text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer rounded-md rounded-l-none px-2 text-sm">
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                Copyright {new Date().getFullYear()} © Quickai.dev All Right Reserved.
            </p>
        </div>
    );
};

export default Footer;