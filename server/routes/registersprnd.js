const express=require('express')
const router=express.Router()
router.post('/',(req,res)=>{
   
    console.log(req.body)
    

    const con=require('./connectionfile')

    const sentSid=req.body.S_id
    const sentUsername=req.body.Username
    const sentPhno=parseInt(req.body.Ph_no)
    const sentEmail=req.body.Email
    const sentDoj=req.body.Doj
    const sentPassword=req.body.Password
    var sql='insert into SUPERINTENDENT (s_id,name,ph_no,email,doj,password) values(?,?,?,?,?,?)'
    const Values=[sentSid,sentUsername,sentPhno,sentEmail,sentDoj,sentPassword]
    con.query(sql,Values,(err,result)=>{
        if(err){
            console.log(err)
            res.send(err)
        }else{
            console.log(result)
            res.send({message:'success'})
        }
    })
    
    
})
module.exports=router