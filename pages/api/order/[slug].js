import connectDb from '../../../middleware/mongoose'
import Order from '../../../models/Order'

const handler = async(req, res) => {

    const {slug} = req.query;
    
    if(req.method == 'GET'){
        try {
            let p = await Order.findOne({_id: slug})

            res.json(p)
        } catch (error) {
            res.json({message: "inside catch"})
        }
    }
    else{
        res.json({message: "This method is not allowed"})
    }
}

export default connectDb(handler)