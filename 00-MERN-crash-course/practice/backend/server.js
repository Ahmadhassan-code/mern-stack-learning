import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

app.use(express.json());

app.post("/api/products", async (req, res) => {
  const { name, price, image } = req.body;

  if (!name || !price || !image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields." });
  }

  try {
    const newProduct = new Product({ name, price, image });
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in creating product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});