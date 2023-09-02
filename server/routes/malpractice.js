const express=require('express')
const router=express.Router()
router.post('/',(req,res)=>{
   
    console.log(req.body)
    
  

    const con=require('./connectionfile')

    const sentMalid=req.body.Malid
    const sentPid=req.body.Pid
    const sentType=req.body.Type
    const sentDescription=req.body.Description
    const sentMdate=req.body.Mdate
    const sentPunishment=req.body.Punishment
   
    var sql='insert into MALPRACTICES (mal_id,p_id,type,description,m_date,punishment) values(?,?,?,?,?,?)'
    const Values=[sentMalid,sentPid,sentType,sentDescription,sentMdate,sentPunishment]
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
    var sql='select * from MALPRACTICES '
   
   
   
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