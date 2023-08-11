// console.log("check")
let login = document.querySelector(".login")
let create = document.querySelector(".create")
let container = document.querySelector(".container")


login.onclick =function () {
    container.classList.add("signinform")
}
create.onclick =function () {
    container.classList.remove("signinform")
}

