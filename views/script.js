const input = document.querySelector("input")
const button = document.querySelector("button")
const sectionContainer = document.querySelector(".section")
const optionContainer = document.querySelectorAll("option")

const searchForm = document.getElementById("searchForm")
const personName = document.querySelector("#name")

const locations = document.getElementById("locations")

console.log(locations.options);

// console.log(optionContainer);

searchForm.onsubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3002/job", {
        
        method : "POST",
        headers: {
            "Content-Type" : "application/json"
        }, 
        
        body : JSON.stringify({
            name : input.value,
            location : locations.options[locations.selectedIndex].value
        })
    })
    .then(res => res.json())
    .then(data => {
        input.value = ""
        // locationData = ""
        // console.log("hello",data.data)

        sectionContainer.innerHTML = ""

        if (data) {
            data?.data.forEach((data) => {
                let { position, company, location, Description } = data
                sectionContainer.innerHTML += 
                `<section>
                    <h3> Position: ${position} </h3>
                     <h4>Company: ${company}</h4> 
                      <h5>Description: ${Description}</h5>
                    <h5>Location: ${location}</h5>
                    <img src="../accets/location-pin.png" alt="">
                    <button>Apply</button>
                </section>`
            })
        }else {
            console.log("no data found");
        }
    })
}

// function displayJob() {
//     section = ""
//     fetch("http://localhost:3002/displayJob")
//         .then(res => res.json())
//         .then(data => {
//             console.log( "displaydata",data.name)
//             data.forEach(element => {
//                 section += `<section>${element}</section>`
//             });
//             sectionContainer.insertAdjacentHTML("beforeend", section)

//         })
// }

