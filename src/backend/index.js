const { response } = require('express');
let express = require('express');
let app = express();
let {Pool} = require('pg');
let bodyParser = require('body-parser');
let cors = require('cors');



app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.urlencoded({ extended: true }));
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
         "INSERT INTO campus (\"campusName\", \"campusLocation\", \"campusUrl\", \"campusDescription\") VALUES ($1,$2,$3,$4,)",
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
    console.log("We are getting info from front end");
    // response.send("The campus has been sent.")
});

app.get("/getCampus", (req,res) =>{
    const all = "SELECT * FROM campus";
    pool.query(all, (err, result) =>{
        res.send(result);
    })
})



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
});

app.delete('/deleteCampus/:id', (req,res)=>{
    const id = req.params.id;
    console.log(id);
    pool.query(
        "DELETE FROM campus WHERE \"id\" = $1",
        [id] ,  
        (err , result)=>{
            if(err){
                console.log(err.message)
                console.log("this is our error message");
            }else{
                res.send(result);
                console.log("data deleted")
            }

        }
    )
})

// app.put('/updateCampus', (req,res) =>{
//     const id = req.body.id;
//     pool.query(
//         "UPDATE SET campus  ")
// })



app.listen(5000, function(){
    console.log("App is listening on port 5000");
})