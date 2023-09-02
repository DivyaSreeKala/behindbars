const express=require('express')
const router=express.Router()
router.post('/',(req,res)=>{
   
    console.log(req.body)
    //res.write('<h1>helooo world!</h1>')
  

    const con=require('./connectionfile')

    const sentPid=req.body.Pid
    const sentMentalhealth=req.body.Mentalhealth
    const sentMedication_m=req.body.Medication_m
    const sentDiseases=req.body.Diseases
    const sentPhysicalhealth=req.body.Physicalhealth
    const sentMedication_p=req.body.Medication_p
    const sentDescription=req.body.Description
    
    var sql='insert into HEALTH_STATUS (p_id,m_health,mmedication_sts,disease,p_health,pmedication_sts,description) values(?,?,?,?,?,?,?)'
    const Values=[sentPid,sentMentalhealth,sentMedication_m,sentDiseases,sentPhysicalhealth,sentMedication_p,sentDescription]
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
    //res.write('<h1>helooo world!</h1>')
  

    const con=require('./connectionfile')
    var sql='select * from HEALTH_STATUS '
    //var sql2='select * from SUPERINENDENT where s_id=?'
   
   
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

router.delete('/:id',(req,res)=>{
   
    console.log(req.body)
    //res.write('<h1>helooo world!</h1>')
    const sentId=req.params.id
    console.log(req.params.id)
    const con=require('./connectionfile')
    var sql='delete from HEALTH_STATUS where p_id=?'
    //var sql2='select * from SUPERINENDENT where s_id=?'
   
   
    con.query(sql,sentId,(err,result)=>{
        if(err){
            console.log(err)
            res.send(err)
        }else{
            console.log('entry deleted')
            res.send("entry deleted")
        }
    })
    
   
    
})

module.exports=router