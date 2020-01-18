let express=require("express");
let bodyParser=require("body-parser")
let router=express.Router();
/*
router.all('/*',
    morgan('dev'),
    middleware.corsFilter,
    middleware.apiResponse,
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json(),
);*/
//router.get("/haha",controller.authen.login)
router.get("/abc",function(req,res){
    res.statusCode=500
})
// router.use(middleware.checkToken)
module.exports=router;