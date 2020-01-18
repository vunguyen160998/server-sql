
exports.getAllData=function(input,cb){
    let query="select * from vidu";
    sql.connect(`Data Source=DESKTOP-D77U80T\\SQLEXPRESS;Initial Catalog=viduDB;User ID=admin;Password=123qwert`)
    .then(err=>{
        const request = new sql.Request()
        request.query(query, (err, result) => {
            cb(null,result.recordset)
        })
    })
}