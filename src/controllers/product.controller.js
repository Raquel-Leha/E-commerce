
import Product from '../models/Product'



export const getProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products)
}
export const createProduct = async (req, res) => {
    const { name, price, description } = req.body;
    const newProduct = new Product({name, price, description})

    await newProduct.save()
    res.json(newProduct)
}
export const getProduct = (req, res) => {
    res.json('getting product')
}
export const updateProduct = (req, res) => {
    res.json('updating product')
}
export const deleteProduct = (req, res) => {
    res.json('deleting product')
}