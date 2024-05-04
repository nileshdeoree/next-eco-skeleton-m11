import connectDb from '../../../middleware/mongoose'
import Product from '../../../models/Product'

const handler = async (req, res) => {
    const { slug } = req.query;

    if (req.method === 'GET') {
        try {

            const product = await Product.findOne({slug: slug});

            if (product) {
                res.json(product);
            } else {
                res.status(404).json({ message: "Product not found" });
            }
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}

export default connectDb(handler);
