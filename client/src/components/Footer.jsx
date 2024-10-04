import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
const Footer = () => {
  return (
    <footer className="bg-black text-yellow-500 py-8 rounded-t-lg">
      <div className="w-10/12 mx-auto my-2 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo section */}
        <div className="flex flex-col space-y-4">
          <div>
            <Link to="/">
              <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                <span className="text-blue-50">Build</span>
                <span className="text-Neutral-950">Crafter's</span>
              </h1>
            </Link>
            <h1 className="text-white">Interior Design & Architecture.</h1>
          </div>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your Mail"
              className="p-2 bg-gray-800 text-white border-none focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={3}
              className="p-2 bg-gray-800 text-white border-none focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />

            <button className="bg-yellow-500 text-black p-2">Submit</button>
          </div>
        </div>

        {/* Pages Blog section */}
        <div className="space-y-6">
          <h3 className="text-white font-semibold">PAGES LINKS</h3>
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Interior & Exterior Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Listing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shop
              </a>
            </li>
          </ul>
        </div>

        {/* Other Pages section */}
        <div className="space-y-2">
          <h3 className="text-white font-semibold mb-6">WEBSITE LINKS</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="flex gap-3">
                <img
                  src="/logo/twitter.png"
                  alt="Smart House"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                  Twitter
                </h1>
              </Link>
            </li>
            <li>
              <Link to="/" className="flex gap-3">
                <img
                  src="/logo/Facebook.png"
                  alt="Smart House"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                  Facebook
                </h1>
              </Link>
            </li>
            <li>
              <Link to="/" className="flex gap-3">
                <img
                  src="/logo/instagram.avif"
                  alt="Smart House"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                  Instagram
                </h1>
              </Link>
            </li>
            <li>
              <Link to="/" className="flex gap-3">
                <img
                  src="/logo/LinkedIn.png"
                  alt="Smart House"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                  LinkedIn
                </h1>
              </Link>
            </li>
            <li>
              <Link to="/" className="flex gap-3">
                <img
                  src="/logo/github.png"
                  alt="Smart House"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                  Github
                </h1>
              </Link>
            </li>
            <li>
              <Link to="/" className="flex gap-3">
                <img
                  src="/logo/youtube.png"
                  alt="Smart House"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                  Youtube
                </h1>
              </Link>
            </li>
          </ul>
        </div>

        {/* Recent Posts section */}
        <div className="space-y-2">
          <h3 className="text-white font-semibold">RECENT POSTS</h3>
          <ul className="space-y-1">
            <li>
              <a
                href="#"
                className="hover:underline flex items-center space-x-2"
              >
                <img
                  src="/protfolio/sidemenu2.jpg"
                  alt="House Of Your Dreams"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span>
                  House Of Your Dreams
                  <br />
                  <small className="text-gray-400">19.02.20</small>
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline flex items-center space-x-2"
              >
                <img
                  src="/protfolio/sidemenu3.jpg"
                  alt="Smart House"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span>
                  Smart House
                  <br />
                  <small className="text-gray-400">19.02.20</small>
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline flex items-center space-x-2"
              >
                <img
                  src="/protfolio/sidemenu2.jpg"
                  alt="House Of Your Dreams"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span>
                  House Of Your Dreams
                  <br />
                  <small className="text-gray-400">19.02.20</small>
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline flex items-center space-x-2"
              >
                <img
                  src="/protfolio/sidemenu3.jpg"
                  alt="Smart House"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span>
                  Smart House
                  <br />
                  <small className="text-gray-400">19.02.20</small>
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline flex items-center space-x-2"
              >
                <img
                  src="/protfolio/sidemenu3.jpg"
                  alt="Smart House"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span>
                  Smart House
                  <br />
                  <small className="text-gray-400">19.02.20</small>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center mt-8 md:flex justify-between mx-12">
        ©2020 Astroon. All Rights Reserved.
        <div className="flex gap-5">
          <img
            src="/logo/twitter.png"
            alt="Smart House"
            className="w-8 h-8 rounded-full object-cover"
          />

          <img
            src="/logo/Facebook.png"
            alt="Smart House"
            className="w-8 h-8 rounded-full object-cover"
          />

          <img
            src="/logo/LinkedIn.png"
            alt="Smart House"
            className="w-8 h-8 rounded-full object-cover"
          />

          <img
            src="/logo/instagram.avif"
            alt="Smart House"
            className="w-8 h-8 rounded-full object-cover"
          />

          <img
            src="/logo/github.png"
            alt="Smart House"
            className="w-8 h-8 rounded-full object-cover text-white"
          />

          <img
            src="/logo/youtube.png"
            alt="Smart House"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
