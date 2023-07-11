const TestService = async (Request, DataModel ) => {
    try{

        let PostBody = Request.body;



        let pageNo = Number(Request.params.pageNo);
        let perPage = Number(Request.params.perPage);

        let skipRow = (pageNo - 1 ) * perPage;
        

        let Data = await DataModel.aggregate(
            [
                {$group:{_id:"$city", ProtiCityTeTotalSalary:{$sum:"$salary"}}}
            ]
        )



















        

        return {status:"Success", data:Data}

    }catch(error){
        return {status:" faild", data: error.toString()}
    }
}
module.exports= TestService






// let Data = await DataModel.aggregate([]) // এটি কাজ করছে না
