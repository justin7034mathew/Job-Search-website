const express = require("express")

const route = express.Router()

const jobData = [
    { id: 1, position: 'Web Developer',company : 'Google',Description : '5 years experience', location : 'Bengluru'},
    { id: 2, position: 'Web Developer',company : 'Microsoft',Description : '2 years experience',location : 'Hyderabad'},
    { id: 3, position: 'Web Developer',company : 'facebook',Description : '4 years experience', location : 'canada'},
    { id: 4, position: 'Android Developer', company : 'infopark',Description : '5 years experience', location : 'kochi'},
    { id: 5, position: 'Android Developer', company : 'Google',Description : '0-1 years experience',location : 'Hyderabad'},
    { id: 6, position: 'Flutter Developer', company : 'infopark',Description : '1-2 years experience', location : 'Trivandrum'},
    { id: 7, position: 'Fullstack Developer', company : 'facebook',Description : '3 years experience', location : 'Dubai'},
    { id: 8, position: 'Fullstack Developer', company : 'IBM',Description : '3 years experience', location : 'Bengluru'},
    { id: 9, position: 'Fullstack Developer', company : 'Google',Description : '2 years experience', location : 'Trivandrum'},
]

const filterdArr = []

route.post("/job",(req, res) => {
    console.log(req.body);
    const { name , location} = (req.body)
    console.log("hello worl",name, location);

    // let variable = location.forEach(element => {
    //     console.log("elemen", element);
    //     console.log(variable);
    // });
    // console.log("vari", variable);

   const results = jobData.filter(data => data.position === name && data.location === location)

    if (results) {
        return res.json({
            data: results
        })
    }

    return res.json({
        message: "no result found" 
    })
}) 



route.get("/displayJob", (req, res) => {
    res.json(filterdArr)
})

module.exports = route