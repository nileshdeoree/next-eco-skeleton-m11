import connectDb from '../../middleware/mongoose'
import Product from '../../models/Product'

const handler = async(req, res) => {
    
    if(req.method == 'POST'){
        try {
            for (let i = 0; i < req.body.length; i++) {
                let p  = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i])
            }
            
            res.json({message: "Deleted Successfully"})
        } catch (error) {
            res.json({message: "inside catch"})
        }
    }
    else{
        res.json({message: "This method is not allowed"})
    }
}

export default connectDb(handler)