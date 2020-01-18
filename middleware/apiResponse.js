

module.exports=function(req,res,next){
    res.error=function(code,err){
        let error={
            code:code || 400,
            status:err
        }
        res.statusCode=code || 400
        res.json(error)
    }
    res.success= function(data){
        res.json({
            code:200,
            result:data
        })
    }
    next()
}