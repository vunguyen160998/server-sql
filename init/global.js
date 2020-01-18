/**
 *  purpose: declare global variable
 *  input:{
 *      key:value,
 *      async:require("async")
 *  }
 */
module.exports=function(input,cb){
    Object.keys(input).forEach((key)=>{
        global[key]=input[key]
    })
}