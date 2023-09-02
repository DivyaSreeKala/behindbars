const express=require('express')
const router=express.Router()
router.get('/:id',(req,res)=>{
   
    console.log(req.params.id)
    console.log(req.body)
    console.log('helllo')
    
  

    const con=require('./connectionfile')
    console.log(req.params.id)
    const id=req.params.id

    var sql='select * from PRISONER where p_id=?'
    
    con.query(sql,id,(err,result)=>{
        if(err){
            console.log(err)
            res.send(err)
        }else{
            console.log(result)
            res.send(result[0])
        }
    })
    
    
})

router.put('/:id',(req,res)=>{
   
    console.log(req.params.id)
    

    const con=require('./connectionfile')
    
    const id=req.params.id
    console.log(id)

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

    var sql='update PRISONER set name=?,gender=?,age=?,dob=?,date_in=?,date_out=?,house=?,street=?,city=?,state=?,country=?,education=?,offense=?,sentance=? where p_id=?'
    const setValues=[sentName,sentGender,sentAge,sentDob,sentDate_in,sentDate_out,sentHouse,
        sentStreet,sentCity,sentState,sentCountry,sentEducation,sentOffense,sentSentance,id]
    con.query(sql,setValues,(err,result)=>{
        if(err){
            console.log(err)
            res.send(err)
        }else{
            console.log(result)
            res.send(result[0])
        }
    })
    
    
})


module.exports=router