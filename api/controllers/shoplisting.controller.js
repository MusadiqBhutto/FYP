import Shoplisting from "../models/shoplisting.model.js";
import { errorHandler } from "../utils/error.js";

export const createshopListing = async (req, res, next) => {
  try {
    const shopListing = await Shoplisting.create(req.body);
    return res.status(201).json(shopListing);
  } catch (error) {
    next(error);
  }
};

export const deleteshopListing = async (req, res, next) => {
  const shopListing = await Shoplisting.findById(req.params.id);
  if (!shopListing) return next(errorHandler(404, "Shop listing not found"));

  if (req.user.id !== shopListing.userRef) {
    return next(errorHandler(403, "You can only delete your own shop listings"));
  }

  try {
    await Shoplisting.findByIdAndDelete(req.params.id);
    res.status(200).json("Shop listing has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const updateshopListing = async (req, res, next) => {
  const shopListing = await Shoplisting.findById(req.params.id);
  if (!shopListing) return next(errorHandler(404, "Shop listing not found"));

  if (req.user.id !== shopListing.userRef) {
    return next(errorHandler(403, "You can only update your own shop listings"));
  }

  try {
    const updatedShopListing = await Shoplisting.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedShopListing);
  } catch (error) {
    next(error);
  }
};

export const getshopListing = async (req, res, next) => {
  try {
    const shopListing = await Shoplisting.findById(req.params.id);
    console.log(shopListing);

    if (!shopListing) return next(errorHandler(404, "Shop listing not found!"));
    console.log(shopListing);
    res.status(200).json(shopListing);
  } catch (error) {
    next(error);
  }
};

// export const getshopListings = async (req, res, next) => {
//   try {
//     const limit = parseInt(req.query.limit) || 9;
//     const startIndex = parseInt(req.query.startIndex) || 0;

//     // Optionally, you can include other filtering, sorting, and pagination logic specific to shop listings here.

//     const shopListings = await Shoplisting.find()
//       .limit(limit)
//       .skip(startIndex);

//     return res.status(200).json(shopListings);
//   } catch (error) {
//     next(error);
//   }
// };
export const getshopListings = async (req, res, next) => {
  try {
    // Extract query parameters from the request
    const { limit = 9, startIndex = 0, category, location, sortBy = 'createdAt', sortOrder = 'desc' } = req.query;

    // Construct the filter object based on optional query parameters
    const filter = {};
    if (category) {
      filter.category = category; // Assuming category is a property of the shop listing
    }
    if (location) {
      filter.location = location; // Assuming location is a property of the shop listing
    }

    // Query the database based on the filter
    const shopListings = await Shoplisting.find(filter)
      .sort({ [sortBy]: sortOrder }) // Sort based on the sortBy and sortOrder parameters
      .limit(parseInt(limit)) // Limit the number of results
      .skip(parseInt(startIndex)); // Skip the specified number of documents for pagination

    // Return the shop listings as a JSON response
    return res.status(200).json(shopListings);
  } catch (error) {
    next(error);
  }
};
