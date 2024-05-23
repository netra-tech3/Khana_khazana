import userModel from "../models/userModel.js"


// add items to user cart

const addToCart=  async(req,res) =>{
    // iske liye pehle authorization klarna padega us user ke liye jo data add karna c
    // chata hai cart me so humne uska token leke id decode kar li auth.js me
    // ab hame logic likhna padega
    try {
        let userData= await userModel.findOne({
            _id:req.body.userId
        });
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId])
            {
                cartData[req.body.itemId]= 1
            }

            else{
                cartData[req.body.itemId]+=1;

            }

            await userModel.findByIdAndUpdate(req.body.userId,{cartData});
            res.json({success:true, message:"Add to cart"});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"error"})
    }

}


// remove items from usert cart

const removeFromCart= async(req,res) =>{
 try {
    let userData = await userModel.findById(req.body.userId);
    let cartData= await userData.cartData;
    if(cartData[req.body.itemId]>0){
        cartData[req.body.itemId]-=1;

    }

    await userModel.findByIdAndUpdate(req.body.userId, {cartData});
    res.json({success:true, message:"Removed from cart"})
 } catch (error) {
    console.log(error);
    res.json({success:false, message:"error"})
 }
}


//fetch user cart data

const getCart = async (req,res) =>{
 try {
    let userData= await userModel.findById(req.body.userId);
    let cartData= await userData.cartData;
    res.json({success:true,cartData})

 } catch (error) {
    console.log(error);
    res.json({success:false,message:"error"})
 }
}


export {addToCart, removeFromCart, getCart};
