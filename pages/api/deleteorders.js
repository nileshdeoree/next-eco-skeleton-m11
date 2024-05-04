import Order from '../../models/Order'
import connectDb from '../../middleware/mongoose'


const handler = async(req, res)=> {
    if(req.method == 'DELETE'){
        try {
            for (let i = 0; i < req.body.length; i++) {
                let p = await Order.findByIdAndDelete(req.body[i]._id)
            }

            res.json({message: "Deleted successfully"})
        } catch (error) {
            res.json({message: "inside catch"})
        }
    }
    else{
        res.json({message: "This method is not allowed"})
    }
}

export default connectDb(handler)