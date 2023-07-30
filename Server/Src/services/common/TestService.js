const TestService = async (Request, DataModel ) => {
    try{

        let PostBody = Request.body;



        let pageNo = Number(Request.params.pageNo);
        let perPage = Number(Request.params.perPage);

        let skipRow = (pageNo - 1 ) * perPage;










        

let Data = await DataModel.aggregate(
    [
        {$addFields:{"Var":{
                                $not:[
                                    {$eq:["$salary", 2000]}
                                ]
                            }
                    }
        }
    ]
)
















        

        return {status:"Success", data:Data}

    }catch(error){
        return {status:" faild", data: error.toString()}
    }
}
module.exports= TestService






// let Data = await DataModel.aggregate([]) // এটি কাজ করছে না
