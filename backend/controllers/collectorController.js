const {v4 : uuidv4}=require("uuid")
const Restaurant =require("../schema/restRegistation")
const FoodCollector=require("../schema/collector")
const OrderHistory=require("../schema/restHistory")
exports.register=async (req,res)=>{
    console.log("helo world")
    const {name,phone,email,password,area,restaurants_under}=req.body;
    const collector_id=await uuidv4();
     await FoodCollector.find({
        email
      }).then(documents => {
        if(documents.length!=0){
            res.status(409).json({message:"user already exist ",status:200})
        }
      }).catch(error => {
        return error
      });
      const documentData = {
        collector_id,
        name,email,phone,password,area,restaurants_under
      };
      const user  = await FoodCollector.create(documentData)
    // console.log(resturantID)
    res.status(200).json({
        user,message:"successful"
        ,status:200
    })
}
exports.login=async (req,res)=>{
    const {email,password}=req.body
    // console.log(email)
    FoodCollector.findOne({email}).then((data)=>{
       if(!data){
        // console.log(data,"34")
           return res.status(401).send({auth:false, message:"No User Found!"});
       }else{ 
        if(data.password!=password){
            res.status(401).json({message:"Wrong email or passowrd",status:401})
        } 
        else{
            // console.log(data,"41")
            res.status(200).json({
                data,message:"successful",status:200
            })
        }
       }
})}

exports.getAllRest=async(req,res)=>{
    const {id}=req.params;
    const data = await Restaurant.find({"collector_id":id})
    res.status(200).json({
        data,
        status:200,message:"List of all resurants"
    })
}


exports.history=async(req,res)=>{
    const {id}=req.params
    const history=await  OrderHistory.find({"collector_id":id})
    if(history.length==0){
        res.status(401).json({status:401,message:' No data exist'})
    }
    else{

        res.status(200).json({history,status:200,message:'History fethced'})
    }}



exports.currentOrder=async(req,res)=>{
    const {id}=req.params
    const currentOrder=await OrderHistory.find({"collector_id":id,status:{$ne:"delivered"}})
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

exports.updateStatus=async(req,res)=>{
    const updateStatus=req.body;
    console.log(updateStatus)
    // const update=await OrderHistory.updateOne({order_id:order_id},{$set:{status:status}})
    const update=await OrderHistory.updateOne(
        { "order_id": updateStatus[0].order_id }, // Replace with actual ObjectId
        { $set: { "status": updateStatus[0].status } } // Replace with desired status value
      );
      
      console.log(update)
    res.status(200).json({
        update,status:200,
        message:`The Status has been updated to `
    })
}


