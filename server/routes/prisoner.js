const express=require('express')
const router=express.Router()
router.post('/',(req,res)=>{
   
    console.log(req.body)
    

    const con=require('./connectionfile')

    const sentPid=req.body.P_id
    const sentName=req.body.Name
    const sentGender=req.body.Gender
    const sentAge=parseInt(req.body.Age)
    const sentDob=req.body.Dob
    const sentDate_in=req.body.Date_in
    const sentDate_out=req.body.Date_out
    const sentHouse=req.body.House
    const sentStreet=req.body.Street
    const sentCity=req.body.City
    const sentState=req.body.State
    const sentCountry=req.body.Country
    const sentEducation=req.body.Education
    const sentOffense=req.body.Offense
    const sentSentance=req.body.Sentance

    var sql='insert into PRISONER (p_id,name,gender,age,dob,date_in,date_out,house,street,city,state,country,education,offense,sentance) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
    const Values=[sentPid,sentName,sentGender,sentAge,sentDob,sentDate_in,sentDate_out,sentHouse,
                    sentStreet,sentCity,sentState,sentCountry,sentEducation,sentOffense,sentSentance]
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

    var sql='select * from PRISONER '
   
   
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