const TestService = async (Request, DataModel ) => {
    try{
        let PostBody = Request.body;
        // Create Service 
        // let data = await DataModel.create(PostBody)


let data = await DataModel.aggregate(
    [        
        {
            $lookup: {
            from: "testmodels",
            localField: "PersonID",
            foreignField: "_id",
            as: "Person_Details",
          }
        },
        {
            $project:{
                _id:0,
                PersonID:1,
                ProductName:1,
                Details:1,
                Price:{$toDouble:"$Price"},
                CreateDate:1,
                Link_Person_Name:{$first:"$Person_Details.Name"},
                Link_Person_Address:{$first:"$Person_Details.Address"},
                Link_Person_Phone:{$first:"$Person_Details.Phone"},
                Link_Person_Email:{$first:"$Person_Details.Email"},
                Link_Person_City:{$first:"$Person_Details.city"},
                Link_Person_Salary:{$first:"$Person_Details.salary"},
            }
        }
    ]
)



















    
        return {status:"Success", data:data}
    }catch(error){
        let PostBody = Request.body;
        PostBody.UserEmail = Request.headers['email']

        return {status:"fail catch block", data: error.toString(), request: PostBody}
    }
}
module.exports= TestService