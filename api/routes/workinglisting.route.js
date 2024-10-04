import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createworkingListing, deleteworkingListing, updateworkingListing, getworkingListing, getworkingListings } from "../controllers/workinglisting.controller.js";


const router = express.Router();

router.post("/create", verifyToken, createworkingListing);
router.delete("/delete/:id", verifyToken, deleteworkingListing);
router.post("/update/:id", verifyToken, updateworkingListing);
router.get("/get/:id", getworkingListing);
router.get("/get", getworkingListings);



export default router;