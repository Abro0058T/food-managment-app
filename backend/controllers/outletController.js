const {v4 : uuidv4}=require("uuid")
const Restaurant =require("../schema/restRegistation")
const Menu=require("../schema/restMenu")
const OrderHistory=require("../schema/restHistory")
exports.register=async (req,res)=>{
    const {name,email,country,state,city,address,zipcode,phone,password}=req.body;
    const restaurant_id=await uuidv4();
     await Restaurant.find({
        email
      }).then(documents => {
        if(documents.length!=0){
            res.status(409).json({message:"user already exist ",status:200})
        }
      }).catch(error => {
        return error
      });
      const documentData = {
        restaurant_id,
        name,email,country,state,city,address,zipcode,phone,password
      };
      const user  = await Restaurant.create(documentData)
    // console.log(resturantID)
    res.status(200).json({
        user,message:"successful"
        ,status:200
    })
}
exports.login=async (req,res)=>{
    const {email,password}=req.body
    Restaurant.findOne({email}).then((data)=>{
       if(!data){
           return res.status(401).send({auth:false, message:"No User Found!"});
       }else{ 
        if(data.password!=password){
            res.status(401).json({message:"Wrong email or passowrd",status:401})
        } 
        else{

            res.status(200).json({
                data,message:"successful",status:200
            })
        }
       }
})}


exports.registerMenu=async(req,res)=>{
    const{restaurant_id,time_of_serive,days_of_service,lunch,dinner,breakfast}=req.body;
    var menuData={
        restaurant_id,time_of_serive,days_of_service,lunch,dinner,breakfast
    }
    const menu= await Menu.create(menuData);
    res.status(200).json({
        menu,status:200,message:"Menu Created"
    })
}


exports.getRestData=async(req,res)=>{
    const {id}=req.params;
    const data = await Restaurant.find({"restaurant_id":id})
    const menu=await Menu.find({"restaurant_id":id})
    res.status(200).json({
        data,
        menu
    })
}


exports.createOrder=async (req,res)=>{
    const {id}=req.params;
    const {type,dishes,collectior_id,total_quantity}=req.body
    const order_id=await uuidv4()
    const newOrder={
        order_id,
        restaurant_id:id,
        collectior_id,
        type,
        dishes,
        total_quantity,
        status:'packing',
    } 
    const orderAdded= await OrderHistory.create()
    res.status(200).json({
        orderAdded,
        status:200,
        message:"Request generated"
    })
}

exports.history=async(req,res)=>{
    const {id}=req.params
    const history=await  OrderHistory.find({"restaurant_id":id})
    if(history.length==0){
        res.status(401).json({status:401,message:' No data exist'})
   
    }
    else{

        res.status(200).json({history,status:200,message:'History fethced'})
    }}



exports.currentOrder=async(req,res)=>{
    const {id}=req.params
    const currentOrder=await OrderHistory.find({"restaurant_id":id,status:{$ne:"delivered"}})
    if(currentOrder.length==0){
        res.status(401).json({
            status:401,
            message:"NO current orders"
        })
    }
    else{
res.status(200).json({
    currentOrder,status:200,message:"Curret order fethced"
})
    }
}
// exports.history=async(req,res)=>{
// }
