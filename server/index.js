const express=require('express')
//const bodyparser=require('body-parser')
const mysql=require('mysql')

const app=express()
const cors=require('cors')

app.use(express.json())//?
app.use(cors())//?

app.listen(5000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('server running in port 5000')
    }
})


const con=require('./routes/connectionfile')


con.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('connected successfully')
        var sql1='create table if not exists IG_PRISONS (ig_id varchar(10) primary key , name varchar(20) not null, ph_no varchar(15) not null,email varchar(20) not null, password varchar(20) not null)'
        var sql2='create table if not exists SUPERINTENDENT (s_id varchar(10) primary key , name varchar(20) not null, ph_no varchar(15) not null,email varchar(20) not null, doj date not null, password varchar(20) not null)'
        var sql3='create table if not exists SPRND_LOGIN (s_id varchar(10),sdate date,login_time time,logout_time time,primary key(sdate,login_time),foreign key(s_id) references SUPERINTENDENT(s_id))'
       
        var sql4='create table if not exists PRISONER(p_id varchar(10) primary key,name varchar(20) not null,gender varchar(10),age int not null,dob date,date_in date,date_out date,house varchar(10),street varchar(10),city varchar(10),state varchar(15),country varchar(15),education varchar(10),offense varchar(15),sentance varchar(10))'

        var sql5='create table if not exists MEDICAL_OFFICER(m_id varchar(10) primary key,name varchar(20) not null,gender varchar(10),age int not null,ph_no varchar(15),email varchar(20),state varchar(15),doj date,password varchar(20) not null)'
        var sql6='create table if not exists JAILOR(j_id varchar(10) primary key,name varchar(20) not null,gender varchar(10),ph_no varchar(15),email varchar(20),state varchar(10),doj date,password varchar(20) not null)'
        
        var sql7='create table if not exists SALES_SERVICES(pd_id varchar(10),p_name varchar(20) not null,description varchar(20),p_rate decimal(5,2),qty_produced int,unit_name varchar(15),ssdate date,primary key(pd_id,ssdate))'
        var sql8='create table if not exists HEALTH_STATUS(h_id int primary key auto_increment,p_id varchar(10) unique,m_health varchar(15),mmedication_sts varchar(10),disease varchar(20),p_health varchar(15),pmedication_sts varchar(10),description varchar(15),hdate date,foreign key(p_id) references PRISONER(p_id))'
        var sql9='create table if not exists MALPRACTICES(mal_id varchar(10) primary key,p_id varchar(10),type varchar(15),description varchar(20),m_date date,punishment varchar(15),foreign key(p_id) references PRISONER(p_id))'
        var sql10='create table if not exists VISITORS(v_id varchar(10) primary key,p_id varchar(10),name varchar(20),gender varchar(10),ph_no varchar(15),vdate date,time_in time,relationship varchar(15),foreign key(p_id) references PRISONER(p_id))'
        con.query(sql1,(err,result)=>{
            if(err){
                console.log(err)
            }else{
                console.log(result)
            }
        })
        con.query(sql2,(err,result)=>{
            if(err){
                console.log(err)
            }else{
                console.log(result)
            }
        })
        con.query(sql3,(err,result)=>{
            if(err){
                console.log(err)
            }else{
                console.log(result)
            }
        })
        con.query(sql4,(err,result)=>{
            if(err){
                console.log(err)
            }else{
                console.log(result)
            }
        })
        con.query(sql5,(err,result)=>{
            if(err){
                console.log(err)
            }else{
                console.log(result)
            }
        })
        con.query(sql6,(err,result)=>{
            if(err){
                console.log(err)
            }else{
                console.log(result)
            }
        })
        con.query(sql7,(err,result)=>{
            if(err){
                console.log(err)
            }else{
                console.log(result)
            }
        })
        con.query(sql8,(err,result)=>{
            if(err){
                console.log(err)
            }else{
                console.log(result)
            }
        })
        con.query(sql9,(err,result)=>{
            if(err){
                console.log(err)
            }else{
                console.log(result)
            }
        })
        con.query(sql10,(err,result)=>{
            if(err){
                console.log(err)
            }else{
                console.log(result)
            }
        })
    }
})

const registerig=require('./routes/registerig')
app.use("/registerig",registerig)

const registersprnd=require('./routes/registersprnd')
app.use("/registersprnd",registersprnd)

const sprnd=require('./routes/sprnd')
app.use("/sprnd",sprnd)

const prisoner=require('./routes/prisoner')
app.use("/prisoner",prisoner)

const prisonerbyid=require('./routes/prisonerbyid')
app.use("/prisonerbyid",prisonerbyid)

const jailor=require('./routes/jailor')
app.use("/jailor",jailor)

const medicalofficer=require('./routes/medicalofficer')
app.use("/medicalofficer",medicalofficer)

const sales_services=require('./routes/sales_services')
app.use("/sales_services",sales_services)

const visitors=require('./routes/visitor')
app.use("/visitor",visitors)

const malpractices=require('./routes/malpractice')
app.use("/malpractice",malpractices)

const healthdetails=require('./routes/healthdetails')
app.use("/healthdetails",healthdetails)

app.post('/login-ig',(req,res)=>{
    console.log('helo')
   

    const sentUserid=req.body.Igid
    
    const sentPassword=req.body.Password
    var sql='select * from IG_PRISONS where ig_id=? && password=?'
    const Values=[sentUserid,sentPassword]
    con.query(sql,Values,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            if(result.length>0)
                res.send({token:'1234'})
            else
                res.send({message:'credentials dont match'})
                
            }    
        }
    )
   
})

app.post('/login-sprnd',(req,res)=>{
    console.log('helo')
   

    const sentUserid=req.body.Igid
    
    const sentPassword=req.body.Password
    var sql='select * from SUPERINTENDENT where S_id=? && password=?'
    var sql1='insert into SPRND_LOGIN (s_id,sdate,login_time) values(?,?,?)'
    const Values=[sentUserid,sentPassword]
    var date_time=new Date()
    let hours=date_time.getHours()
    let minutes=date_time.getMinutes()
    const time=hours+":"+minutes
    console.log(time)
    const loginValue=[sentUserid,date_time,time]

    con.query(sql,Values,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            if(result.length>0){
                con.query(sql1,loginValue,(err,result)=>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log('successfull')
                        }    
                    }
                )
                res.send({token:date_time+time})
             }
            else
                res.send({message:'credentials dont match'})
                
            }    
        }
    )

   
})

app.post('/jailorlogin',(req,res)=>{
    console.log('helo')
   

    const sentUserid=req.body.Jid
    
    const sentPassword=req.body.Password
    var sql='select * from JAILOR where j_id=? && password=?'
    const Values=[sentUserid,sentPassword]
    con.query(sql,Values,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            if(result.length>0)
                res.send({token:'1234'})
            else
                res.send({message:'credentials dont match'})
                
            }    
        }
    )
   
})

app.post('/login-mo',(req,res)=>{
    console.log('helo')
   
    const sentUserid=req.body.Moid
    
    const sentPassword=req.body.Password
    var sql='select * from MEDICAL_OFFICER where m_id=? && password=?'
    const Values=[sentUserid,sentPassword]
    con.query(sql,Values,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            if(result.length>0)
                res.send({token:'1234'})
            else
                res.send({message:'credentials dont match'})
                
            }    
        }
    )
  
})

