const express=require('express')
const router=express.Router()
router.post('/',(req,res)=>{
    console.log('helloooolllmmkjj')
    console.log(req.body)
   
    const con=require('./connectionfile')

    const sentIgid=req.body.Ig_id
    const sentUsername=req.body.Username
    const sentEmail=req.body.Email
    const sentPhno=parseInt(req.body.Ph_no)
    const sentPassword=req.body.Password
    var sql='insert into IG_PRISONS (ig_id,name,ph_no,email,password) values(?,?,?,?,?)'
    const Values=[sentIgid,sentUsername,sentPhno,sentEmail,sentPassword]
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