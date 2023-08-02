const SelesModel = require("../../models/Sales/SalesModel")

const SelesSummaryService = async (Request)=>{
    let UserEmail = Request.headers['email'];

    try{
        let data = await SelesModel.aggregate([
            {$match: {UserEmail:UserEmail}},
            {
                $facet:{
                    Total:[{
                        $group:{
                            _id:0,
                            TotalAmount:{$sum:"$Amount"}
                        }
                    }],
                    Last30Days:[{
                        $group:{
                            _id:{ $dateToString: {format: "%Y-%m-%d", date:"$CreateDate"}},
                            TotalAmount:{$sum:"$Amount"}
                        }},
                        {$sort:{_id: -1}},
                        {$limit:30}
                    ]
                }
            }
        ])

        return {status:"Success", data:data}

    }catch(error){

        return {status: "faild", data: error.toString()}

    }

}

module.exports = SelesSummaryService