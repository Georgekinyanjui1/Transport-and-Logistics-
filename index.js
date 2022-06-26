const myName = document.getElementById("name");
const contact = document.getElementById("number");
const email = document.getElementById("email");
const place = document.getElementById("place");
const button = document.getElementById("button");
const form = document.getElementById("form")
const error = document.getElementById("error")
form.addEventListener("submit", (e) => {

    if (myName.value === '' || myName.value == null) {
        alert("Name is required")
    } else {
        if (contact.value.length === 10) {
            alert("please confirm your number")
        } else {
            if (email.value === "" || email.value == null) {
                alert("check your email to confirm")
            } else {
                if (place.value === "" || place.value == null) {
                    alert("invalid")
                }
            }

        }


    }
})

let comp = document.getElementById("comp-info");
let close = false

comp.addEventListener("click", (e) => {
    e.preventDefault
    fetch("http://localhost:3000/Transport")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            let info2 = document.createElement("li")
            info2.innerText = data[1].company
            comp.appendChild(info2)
            let info = document.createElement("li")
            info.innerText = data[0].company
            comp.appendChild(info)


        })
})

let service = document.getElementById("ser");
service.addEventListener("click", (e) => {
    e.preventDefault
    fetch("http://localhost:3000/Transport")
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            let satisfied = document.createElement("li")
            satisfied.innerText = data[0].services
            service.appendChild(satisfied)

        })
})
let formation = document.getElementById("infor");
formation.addEventListener("click", (e) => {
    e.preventDefault
    fetch("http://localhost:3000/Transport")
        .then((resp) => resp.json())
        .then((data) => {
            let known = document.createElement("li")
            known.innerText = data[0].information
            formation.appendChild(known)
        })
})