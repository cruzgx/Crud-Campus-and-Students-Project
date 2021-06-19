const { response } = require('express');
let express = require('express');
let app = express();
let {Pool} = require('pg');


// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"campusDatabase",
    password:"Lessie",
    port:"5432",
});


app.post('/campusEdit', (req,res) => {
    const cName = req.body.campusName;
    const loca = req.body.campusLocation;
    const img = req.body.campusImg;
    const describe = req.body.campusDescript;
     pool.query(
         "INSERT INTO campus (\"campusName\", \"campusLocation\", \"campusUrl\", \"campusDescription\") VALUES ($1,$2,$3,$4)",
         [cName, loca, img, describe],
         (err,result) =>{
             if(err){
                 console.log(err);
             }else{
                 res.send("Values Inserted")
             }
         }
     );
    
    
    // console.log(req);
    // console.log("We are getting info from front end");
    // response.send("The campus has been sent.")
});


app.post('/addStudents', (req,res)=>{
    const fname = req.body.studentFirstName;
    const lname = req.body.studentLastName;
    const email = req.body.studentEmail;
    const url = req.body.studentImgURL;
    const gpa = req.body.studentGPA;

    pool.query(
        "INSERT INTO student (firstname, lastname, email, image, gpa) VALUES ($1,$2,$3,$4,$5)",
        [fname,lname,email,url,gpa],
        (err,result) =>{
            if(err){
                console.log(err);
            }
            else{
                res.send("Values Inserted")
            }
        }
    )
})



app.listen(5000, function(){
    console.log("App is listening on port 5000");
})