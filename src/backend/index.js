//const { response } = require('express');
let express = require('express');
let app = express();
const cors = require('cors');
let {Pool} = require('pg');
let bodyParser = require('body-parser');
let cors = require('cors');



app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const pool = new Pool({
    user:"cruzgonzalez",
    host:"localhost",
    database:"student_data",
    password:"Password",
    port:"5432",
});


app.post('/addCampus', (req,res) => {
    
    const cName = req.body.campusName;
    const loca = req.body.campusLocation;
    const img = req.body.campusImg;
    const describe = req.body.campusDescript;
     pool.query(
         "INSERT INTO campus (campusname, campuslocation, campusurl, campusdescription) VALUES ($1,$2,$3,$4)",
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



//this part of the code gets information from the database
app.get('/getStudents', (req, res) => {
    pool.query("SELECT * FROM student", (err, result) => {
        if(err){
            console.log(err)
            console.log('this is our error')
        } else {
            res.send(result);
            console.log('our results have been sent')
        }
    })
})


//EditStudent.js
//this piece of code will update the information of students in the DB

app.put('/updateStudentInfo', (req, res) => {
    
    //get items from front end.
    const firstname = req.body.firstName
    const lastname = req.body.lastName
    const email = req.body.email
    const url = req.body.url
    const gpa = req.body.gpa 
    const id = req.body.id //this field would have to be added to our inputs in front-end

    let text =  'UPDATE student SET firstname = $1, lastname = $2, email = $3, image = $4, gpa = $5 WHERE id = $6'
   
    
    const values = [firstname, lastname, email, url, gpa, id]

    pool.query(text, values, (err, result) => {
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
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
//     const name = req.body.campusName;
//     const loca = req.body.campusLocation;
//     const img = req.body.campusImg;
//     const describe= req.body.campusDescript;
//     pool.query(
//         "UPDATE SET campus campusName= $1, campusLocation= $2, campusUrl=$3, campusDescription=$4 WHERE id= $5"),
//         [name,loca,img,describe,id],
//         (err,result)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 res.send(result);
//             }
//         }
// })

app.put('/updateCampus', (req, res) => {
    const id = req.body.id;
    const name = req.body.campusName;
     const loca = req.body.campusLocation;
    const img = req.body.campusImg;
   const describe= req.body.campusDescript;
    //get items from front end.
    // const firstname = req.body.firstName
    // const lastname = req.body.lastName
    // const email = req.body.email
    // const url = req.body.url
    // const gpa = req.body.gpa 
    // const id = req.body.id //this field would have to be added to our inputs in front-end

    // let text =  'UPDATE student SET firstname = $1, lastname = $2, email = $3, image = $4, gpa = $5 WHERE id = $6'
     let text= "UPDATE SET campus campusname= $1, campuslocation= $2, campusurl=$3, campusdescription=$4 WHERE id= $5"
    
    const values = [name, loca, img, describe, id]

    pool.query(text, values, (err, result) => {
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})





app.listen(5000, function(){
    console.log("App is listening on port 5000");
})