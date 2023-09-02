const express=require('express')
const router=express.Router()
router.post('/',(req,res)=>{
   
    console.log(req.body)
    

    const con=require('./connectionfile')
 
    const sentPpid=req.body.Pd_id
    const sentProductname=req.body.Productname
    const sentDescription=req.body.Description
    const sentRate=req.body.Rate
    const sentQuantity=parseInt(req.body.Quantity)
    const sentUnit=req.body.Unit
    var date_time=new Date()
    console.log(date_time)
    var sql='insert into SALES_SERVICES (pd_id,p_name,description,p_rate,qty_produced,unit_name,ssdate) values(?,?,?,?,?,?,?)'
    const Values=[sentPpid,sentProductname,sentDescription,sentRate,sentQuantity,sentUnit,date_time]
    con.query(sql,Values,(err,result)=>{
        if(err){
            console.log(err)
            res.send(err)
        }else{
            console.log(result)
            res.send('<h1>user created</h1>')
        }
    })
    
    
})


router.get('/',(req,res)=>{
   
    const con=require('./connectionfile')
    console.log(req.body)
   

    var sql='select * from SALES_SERVICES '
   
   
    con.query(sql,(err,result)=>{
        if(err){
            console.log(err)
            res.send(err)
        }else{
            console.log(result)
            res.send(result)
        }
    })
    
   
    
})

module.exports=router