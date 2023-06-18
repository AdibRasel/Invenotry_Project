// Transaction Session
// ট্রানজেকশান সেশান ।। ডাটা বেসে অনেক ডাটা মডেলে এক সাথে সেভ করতে গেলে অনেক সমস্যা হতে পারে
// যেমন, একটি ডাটা মডেলে সেভ হলো কিন্তু আরেকটি সেভ হয় নি ।
// এমন সমস্যার জন্য ট্রানজেকশান রোল ব্যাক বা ট্রানজেকশান সেশান ব্যবহার করা হয়।
// নিম্নে ট্রানজেকশান ছাড়া এবং ট্রানজেকশান সহ কোড করা হলো।

const  mongoose = require("mongoose")

// const CreateParentChildsService = async (Request, ParentModel, ChildsModel, JoinPropertyName) => {
//     try{

//         //Parent Creation
//         let Parent = Request.body['Parent'];
//         Parent.UserEmail= Request.headers['email'];
//         let ParentCreation = await ParentModel.create(Parent);

//         // Child Creation
//         if(ParentCreation['_id']){
//             try{
//                 let Childs = Request.body['Childs'];
//                 await Childs.forEach((element)=>{
//                     element[JoinPropertyName] = ParentCreation['_id'];
//                     element['UserEmail']=Request.headers['email']
//                 });
//                 let ChildsCreation = await ChildsModel.insertMany(Childs);
//                 return {status:"Sucess", Parent: ParentCreation, Childs: ChildsCreation}
//             }catch (e){
//                 await ParentModel.remove({_id:ParentCreation['_id']})
//                 return {status: "fail", data: "Child Creation Failed"}
//             }
//         }else{
//             return {status:"Fail", data: "Parent Creation Failed"}
//         }
//     }
//     catch(error){
//         return {status:"fail", data: error.toString()}
//     }
// }
// module.exports = CreateParentChildsService





// With Transaction Session
const CreateParentChildsService = async (Request, ParentModel, ChildsModel, JoinPropertyName) => {

    // Create Transaction Session
    const session = await mongoose.startSession();

    try{
        
        //Begin Transaction
        await session.startTransaction()

        // First Database Process
        let Parent = Request.body['Parent'];
        Parent.UserEmail=Request.headers['email'];
        let ParentCreation = await ParentModel.create([Parent],{session});

        //Second Database Process
        let Childs = Request.body['Childs'];
        await Childs.forEach((element)=>{
            element[JoinPropertyName]= ParentCreation[0]['_id'];

            element['UserEmail']=Request.headers['email'];
        })
        let ChildsCreation = await ChildsModel.insertMany(Childs, {session});


        // if Transaction Success 
        await session.commitTransaction();
        session.endSession;


        return {status: "Success", Parent: ParentCreation, Childs: ChildsCreation}
    }
    catch(error){
        // if Transaction Fail || Roll Back Transaction if Fail
        await session.abortTransaction();
        session.endSession();
        return {status: "fail", data:error}
    }

}
module.exports = CreateParentChildsService