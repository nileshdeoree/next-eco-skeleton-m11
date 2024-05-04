
import Order from '../../models/Order'
import connectDb from '../../middleware/mongoose'

const handler = async(req,res)=>{
    if(req.method == 'POST'){
        try {
            for (let i = 0; i < req.body.length; i++) {
                let p = new Order({
                    name: req.body[i].name,
                    qty : req.body[i].qty, 
                    price: req.body[i].price,
                    size: req.body[i].size,
                    variant: req.body[i].variant,
                })
    
                p.save()
            }
            res.json({success: "success"})
        } catch (error) {
            res.json({message: "inside catch"})
        }
    }
    else{
        res.json({message: "This method is not allowed"})
    }
}

export default connectDb(handler)