import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import ShopListingItem from "../components/ShopListingItem";
import WorkingListingItem from "../components/WorkingListingItem";
import Footer from "../components/Footer";
import HeroSection from "../components/Design/HeroSection";
import MissionSection from "../components/Design/MissionSection";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [workingListing, setWorkingListing] = useState([]);
  const [shopListing, setShopListing] = useState([]);



  SwiperCore.use([Navigation]); 

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchWorkingList = async () => {
      try {
        const res = await fetch("/api/workinglisting/get?type=sale^limit=4");
        const data = await res.json();
        setWorkingListing(data);
      } catch (e) {
        console.log(e);
      }
    };

    
    const fetchShopList = async () => {
      try {
        const res = await fetch("/api/shoplisting/get?type=sale^limit=4");
        const data = await res.json();
        setShopListing(data);
      } catch (e) {
        console.log(e);
      }
    };


    fetchOfferListings();
    fetchWorkingList();
    fetchShopList()
  }, []);
  
  return (
    <div>
      {/* top */}
  <div className="flex flex-col gap-6 p-20 px-3  max-w-6xl mx-auto items-center lg:items-start lg:flex-row">
  
    <div className="flex flex-col gap-6 p-20 px-3 max-w-6xl mx-auto">
          <h1 className="text-Indigo-300 font-bold text-3xl lg:text-6xl">
            Find your next <span className="text-slate-500">perfect</span>
            <br />
            place & design with ease
          </h1>
          <div className="text-Neutral-500 text-xs sm:text-sm">
          Build Crafters is the best place to find your next perfect place to
            live.
            <br />
            We have a wide range of properties for you to choose from.
          </div>
          <Link
            to={"/search"}
            className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
          >
            Let's get started...
          </Link>
        </div>
    {/* <!-- Image Container --> */}
    <div className="lg:w-1/3 lg:mr-6 flex-row border border-gray-400 shadow-md">
      <img src="./assets/BG.png" alt="Your Image" className="w-95 h-auto" />
    </div>
    
  </div>

   {/* swiper */}
   <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
             <div className="bg-[#1e3a8a] py-3 px-8 rounded-full w-60 h-30">
             <h2 className="text-2xl font-semibold text-white">
                Recent offers
              </h2>
             </div>
              <Link
                className="text-sm text-blue-900 font-semibold hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-12">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
            <div className="bg-[#1e3a8a] py-3 px-8 rounded-full w-80 h-30">
              <h2 className="text-2xl font-semibold text-white">
                Recent places for rent
              </h2>
              </div>
              <Link
                className="text-sm text-blue-900 font-semibold hover:underline"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-12">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
            <div className="bg-[#1e3a8a] py-3 px-8 rounded-full w-80 h-30">
              <h2 className="text-2xl font-semibold text-white">
                Recent places for sale
              </h2>
              </div>
              <Link
                className="text-sm text-blue-900 font-semibold hover:underline"
                to={"/search?type=sale"}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-12">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {workingListing && workingListing.length > 0 && (
          <div className="">
            <div className="my-3">
            <div className="bg-[#1e3a8a] py-3 px-8 rounded-full w-80 h-30">
              <h2 className="text-2xl font-semibold text-white">
                Recent Service's Listing
              </h2>
              </div>
              <Link
                className="text-sm text-blue-900 font-semibold hover:underline"
                to={"/worksearch?type=sale"}
              >
                Show more places for profile's
              </Link>
            </div>
            <div className="flex flex-wrap gap-12">
              {workingListing.map((item) => (
                <WorkingListingItem workingListing={item} key={item._id} />
              ))}
            </div>
          </div>
        )}

        {shopListing && shopListing.length > 0 && (
          <div className="">
            <div className="my-3">
            <div className="bg-[#1e3a8a] py-3 px-8 rounded-full w-60 h-30">
              <h2 className="text-2xl font-semibold text-white">
                Recent shop list
              </h2>
              </div>
              <Link
                className="text-sm text-blue-900 font-semibold hover:underline"
                to={"/shopsearch?type=all"}
              >
              Show more places for shop's
              </Link>
            </div>
            <div className="flex flex-wrap gap-12">
              {shopListing.map((item) => (
                <ShopListingItem shopListing={item} key={item._id} />
              ))}
            </div>
          </div>
        )}
      </div>
        <div>
          <HeroSection/>
          <MissionSection />
        </div>
      {/* Footer */}
    <Footer />


    </div>
  );
}
