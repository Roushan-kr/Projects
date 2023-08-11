// console.log("check")
let login = document.querySelector(".login")
let create = document.querySelector(".create")
let container = document.querySelector(".container")
let passRes = document.querySelector(".passRes")
let cAccount = document.querySelector("input[value='Create Account']")

// adding slide shifiting 
login.onclick =function () {
    container.classList.add("signinform")
}
create.onclick =function () {
    container.classList.remove("signinform")
}

function strongPass(pass){
    if (pass.lenght<8){
        alert("week Passwd less then 8 char ")
    }
    // TODO: Add some more function to check this 

}
// adding passwd conformation 
cAccount.onclick =()=> {
    let password = document.getElementById("pass").value;
    let confirmPassword = document.getElementById("cnfPass").value;
   
    if (password == "") {
        passRes.innerText="Error: The password field is Empty.";
    } else if (password === confirmPassword) {
        strongPass(confirmPassword)
        passRes.innerText="Logged In";
    } else {
        passRes.innerText="Please make sure your passwords match."
    }

    
    setTimeout(() => {
        passRes.innerText=""
    }, 3000);
}

