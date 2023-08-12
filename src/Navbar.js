import React from "react";
import "./Navbar.css";
import logo from "../public/images/logo.png";
import about from "../public/images/About.jpeg";
import img1 from "../public/images/HealthMix.jpg";
import img2 from "../public/images/Rawa.JPG";
import img3 from "../public/images/shikakai.png";

// import { FaHome, FaInfo, FaUser } from "react-icons/fa";
// import {IoBag} from "react-icons/io5";

const Navbar = () => {
  return (
    <>
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"/>
    <img alt="content" className="w-35 h-20 text-white p-2"  src={logo}/>
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      {/* <span className="ml-3 text-xl">Tailblocks</span> */}
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Home</a>
      <a className="mr-5 hover:text-gray-900">About Us</a>
      <a className="mr-5 hover:text-gray-900">Products</a>
      <a className="mr-5 hover:text-gray-900">Contact Us</a>
    </nav>
  </div>
</header>
    {/* <nav className="navbar">
      <div className="navbar-logo">
        <span>Logo</span>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home">
            <FaHome /> Home
          </a>
        </li>
        <li>
          <a href="#about">
            <FaInfo /> About
          </a>
        </li>
        <li>
          <a href="#products">
            <IoBag /> Products
          </a>
        </li>
        <li>
          <a href="#profile">
            <FaUser /> Profile
          </a>
        </li>
      </ul>
    </nav> */}
    <div>
<section className="text-gray-600 body-font" data-aos="zoom-in" data-aos-delay="400">
  <div className="container px-5 py-24 mx-auto flex flex-col" >
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1539902743451-20dfa0a92ffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"/>
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-4/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">Welcome to Asha's Organics - Your Source for Premium Organic Products!</p>
          <p>
            At Asha's Organics, we believe in the power of nature to provide us with the finest ingredients for a healthy and vibrant life. Our commitment to organic farming and sustainable practices drives us to bring you a curated selection of the highest quality organic products. Whether you're seeking nourishing foods, rejuvenating skincare, or eco-friendly household essentials, we have something for everyone who values a natural lifestyle.
          </p>
          </div>
      </div>
    </div>
  </div>
</section>
    <section className="body-font overflow-hidden text-gray-600" data-aos="zoom-in" data-aos-delay="400">
  <div className="container mx-auto px-5 py-24">
    <div className="mx-auto flex flex-wrap lg:w-4/5">
      <img alt="ecommerce" className="h-64 w-full rounded object-cover object-center lg:h-auto lg:w-1/2" src={about} />
      <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
      <h1 className="title-font mb-1 text-3xl font-medium text-gray-900">About Asha's Organics</h1>
        <p className="leading-relaxed">At Asha's Organics, we're more than just a brand - we're a philosophy, a way of life that celebrates the harmony between humans and nature. Our story began with a deep-rooted passion for organically grown produce and a desire to share the incredible benefits of these gifts from the earth.</p>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font" data-aos="zoom-in" data-aos-delay="400">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={img1} alt="blog"/>
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Health Mix Powder</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={img2} alt="blog"/>
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Rawa Idly/Dosa Powder</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={img3} alt="blog"/>
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shikakai Powder</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font relative" data-aos="zoom-in" data-aos-delay="400">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-indigo-500">example@email.com</a>
          <p className="leading-normal my-5">49 Smith St.
          </p>
          <span className="inline-flex">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
<footer>
  <div className="bg-gray-100">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">Tailblocks</span> */}
         <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"/>
    <img alt="content" className="w-35 h-20 text-white p-2"  src={logo}/>
      </a>
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© Asha's Organics —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@think_zuber</a>
      </p>
    </div>
  </div>
</footer>
    </div>
    </>
  );
};

export default Navbar;
