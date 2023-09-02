const express=require('express')
const router=express.Router()
router.post('/',(req,res)=>{
   
    console.log(req.body)
   
    const con=require('./connectionfile')

    const sentVid=req.body.Vid
    const sentPid=req.body.Pid
    const sentName=req.body.Name
    const sentGender=req.body.Gender
    const sentPhno=parseInt(req.body.Phno)
    const sentVdate=req.body.Vdate
    const sentTimein=req.body.Timein
    const sentRelationship=req.body.Relationship
    var sql='insert into VISITORS (v_id,p_id,name,gender,ph_no,vdate,time_in,relationship) values(?,?,?,?,?,?,?,?)'
    const Values=[sentVid,sentPid,sentName,sentGender,sentPhno,sentVdate,sentTimein,sentRelationship]
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
    var sql='select * from VISITORS '
    
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