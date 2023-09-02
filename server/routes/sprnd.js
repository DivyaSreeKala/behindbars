const express=require('express')
const router=express.Router()
router.get('/',(req,res)=>{
   
    console.log(req.body)
    
    const con=require('./connectionfile')
    var sql='select sl.s_id,s.name,sl.sdate,sl.login_time,s.email,s.doj from SPRND_LOGIN as sl,SUPERINTENDENT as s where sl.s_id=s.s_id'
    
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

//doesn't wrk
router.post('/',(req,res)=>{
    console.log('helo')
    
   
    var sql1='insert into SPRND_LOGIN (s_id,sdate,login_time) values(?,?,?)'
   
    var date_time=new Date()
    let hours=date_time.getHours()
    let minutes=date_time.getMinutes()
    const time=hours+":"+minutes
    console.log(time)
    const loginValue=[date_time,time]

    
                con.query(sql1,loginValue,(err,result)=>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log('successfull')
                        }    
                    }
                )
               
    

   // res.send('hai')
})

module.exports=router