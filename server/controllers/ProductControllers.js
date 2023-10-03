import Product from "../models/Productmodel.js";
const getProducts = async (req, res) => {
  let query;
  let words = req.query.words
    ? {
        Name: {
          $regex: req.query.words,
          $options: "i",
        },
      }
    : {};
  const reqQuery = { ...req.query, ...words };
  const removFields = ["sort"];
  removFields.forEach((val) => delete reqQuery[val]);
  let queryStr = JSON.stringify(reqQuery);
  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );
  query = Product.find(JSON.parse(queryStr));

  const data = await query;

  res.json(data);
};
const getProduct = async (req, res) => {
  const data = await Product.findById(req.params.id);
  res.json(data);
};

const updatedproduct = (req, res) => {
  Product.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        res.json(data);
        console.log("Product updated successfully !");
      }
    }
  );
};

const deleteproduct = async (req, res) => {
  const data = await Product.findById(req.params.id);
  if (data) {
    await data.remove();
    res.status(200).json("product removed");
  } else {
    res.status(404).json("product not found");
    throw new Error("product not found");
  }
};
const newproduct = async (req, res) => {
  const product = new Product({
    Name: "Sample Name",
    Price: 0,
    user: req.user._id,
    Img: "/Images/img5.png",
    Brand: "Smple Brand",
    Category: "sample category",
    CountInStock: 0,
    NumReviews: 0,
    Description: "sample desc",
  });

  const newproduct = await product.save();
  res.status(200).json(product);
};
const createproduct = async (req, res) => {
  const newproduct = new Product({
    Name: req.body.Name,
    Price: req.body.Price,
    user: req.user._id,
    Img: req.body.Img,
    Brand: req.body.Brand,
    Category: req.body.Category,
    CountInStock: req.body.CountInStock,
    Description: req.body.Description,
  });
  const data = newproduct.save();
  res.status(200).json(newproduct);
};
const updatetheproduct = async (req, res) => {
  const { Name, Price, Description, Img, Brand, Category, CountInStock } =
    req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    product.Name = Name;
    product.Category = Category;
    product.Price = Price;
    product.Description = Description;
    product.Img = Img;
    product.Brand = Brand;
    product.CountInStock = CountInStock;

    const updateproduct = await product.save();
    res.status(200).json(updateproduct);
  } else {
    res.status(404).json("product not found");
    throw new Error("Product now found");
  }
};
export {
  getProducts,
  getProduct,
  updatedproduct,
  newproduct,
  updatetheproduct,
  deleteproduct,
  createproduct,
};
