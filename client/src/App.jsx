import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'remixicon/fonts/remixicon.css';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Designservice from "./pages/Designservice";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import CreateShopListing from "./pages/CreateShopListing";
import CreateWorkingListing from "./pages/CreateWorkingListing";
import UpdateListing from "./pages/UpdateListing";
import UpdateShop from "./pages/UpdateShop";
import UpdateWorking from "./pages/UpdateWorking";
import Listing from "./pages/Listing";
import Search from "./pages/Search";
import ShopSearch from "./pages/ShopSearch";
import WorkSearch from "./pages/WorkSearch";
import WorkingListing from "./pages/WorkingListing";
import ShopListing from "./pages/ShopListing";

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/designservice" element={<Designservice />} />
      <Route path="/listing/:listingId" element={<Listing />} />
      <Route path="/workinglisting/:workinglistingId" element={<WorkingListing/>} />
      <Route path="/shoplisting/:listingId" element={<ShopListing />} />
      <Route path="/search" element={<Search />} />
      <Route path="/shopsearch" element={<ShopSearch />} />
      <Route path="/worksearch" element={<WorkSearch />} />
      <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/create-shoplisting" element={<CreateShopListing />} />
        <Route path="/create-workinglisting" element={<CreateWorkingListing />} />
        <Route path="/update-listing/:listingId" element={<UpdateListing />} />
        <Route path="/update-shoplisting/:shopListingId" element={<UpdateShop />} />
        <Route path="/update-workinglisting/:workingListingId" element={<UpdateWorking />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
