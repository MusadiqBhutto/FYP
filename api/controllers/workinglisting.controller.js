import WorkingListingSchema from "../models/workinglisting.model.js";
import { errorHandler } from "../utils/error.js";

export const createworkingListing = async (req, res, next) => {
  try {
    const workingListing = await WorkingListingSchema.create(req.body);
    return res.status(201).json(workingListing);
  } catch (error) {
    next(error);
  }
};

export const deleteworkingListing = async (req, res, next) => {
  try {
    const workingListing = await WorkingListingSchema.findById(req.params.id);
    if (!workingListing) {
      return next(errorHandler(404, "Working listing not found"));
    }

    if (req.user.id !== workingListing.userRef) {
      return next(errorHandler(403, "You can only delete your own listings"));
    }

    await WorkingListingSchema.findByIdAndDelete(req.params.id);
    res.status(200).json("Working listing has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const updateworkingListing = async (req, res, next) => {
  try {
    const workingListing = await WorkingListingSchema.findById(req.params.id);
    if (!workingListing) {
      return next(errorHandler(404, "Working listing not found"));
    }

    if (req.user.id !== workingListing.userRef) {
      return next(errorHandler(403, "You can only update your own listings"));
    }

    const updatedWorkingListing = await WorkingListingSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedWorkingListing);
  } catch (error) {
    next(error);
  }
};

export const getworkingListing = async (req, res, next) => {
  try {
    const workingListing = await WorkingListingSchema.findById(req.params.id);

    console.log(req.params.id);

    if (!workingListing) {
      return next(errorHandler(404, "Working listing not found"));
    }
    res.status(200).json(workingListing);
  } catch (error) {
    next(error);
  }
};

export const getworkingListings = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 9;
    const startIndex = parseInt(req.query.startIndex) || 0;
    const searchTerm = req.query.searchTerm || "";
    const sort = req.query.sort || "createdAt";
    const order = req.query.order || "desc";

    const workingListings = await WorkingListingSchema.find({
      name: { $regex: searchTerm, $options: "i" },
    })
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex);

    return res.status(200).json(workingListings);
  } catch (error) {
    next(error);
  }
};
