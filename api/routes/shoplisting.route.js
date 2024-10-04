import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createshopListing, deleteshopListing, updateshopListing, getshopListing, getshopListings } from "../controllers/shoplisting.controller.js";


const router = express.Router();

router.post("/create", verifyToken, createshopListing);
router.delete("/delete/:id", verifyToken, deleteshopListing);
router.post("/update/:id", verifyToken, updateshopListing);
router.get("/get/:id", getshopListing);
router.get("/get", getshopListings);



export default router;