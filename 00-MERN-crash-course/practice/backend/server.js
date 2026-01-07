import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import { mongo } from "mongoose";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error in fetching products:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

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

app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongo.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid Product Id" });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error("Error in updating product:", error.message);
    res.status(404).json({ success: false, message: "Server Error" });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  
  try {
    await Product.findByIdAndDelete(id); 
    res.status(200).json({ success: true, message:"Product Deleted" });
  } catch (error) {
    console.error("Error in deleting product:", error.message);
    res.status(404).json({ success: false, message: "Product Not Found" });
  }
})

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});