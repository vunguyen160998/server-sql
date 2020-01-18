let express=require("express");
let app=express()
let init=require("./init")

// Declare global varible
init.global({
    _: require("lodash"),
    async: require("async"),
    sql:require("mssql"),
    dao:require("./database/DAO"),
    config : require('config')
})
// API
app.use("/api",require("./routes"))
// Start Server
app.listen(3000,()=>{
    console.log("listen on 3000....")
})
