const express=require('express')
const router=express.Router()
router.post('/',(req,res)=>{
   
    console.log(req.body)
    
  

    const con=require('./connectionfile')

    const sentMid=req.body.M_id
    const sentUsername=req.body.Username
    const sentGender=req.body.Gender
    const sentAge=req.body.Age
    const sentPhno=parseInt(req.body.Ph_no)
    const sentEmail=req.body.Email
    const sentState=req.body.State
    const sentDoj=req.body.Doj
    const sentPassword=req.body.Password
    var sql='insert into MEDICAL_OFFICER (m_id,name,gender,age,ph_no,email,state,doj,password) values(?,?,?,?,?,?,?,?,?)'
    const Values=[sentMid,sentUsername,sentGender,sentAge,sentPhno,sentEmail,sentState,sentDoj,sentPassword]
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
   
    console.log(req.body)
    
  

    const con=require('./connectionfile')
    var sql='select * from MEDICAL_OFFICER '
    
   
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