const displayToogle = document.getElementById("display")

displayToogle.addEventListener("click", () => {

    let text;

    const sectionTwo = document.getElementById("section-second")

    if(sectionTwo.style.display === "grid"){
        sectionTwo.style.display = "none"
        text = "Voir section 2"
        console.log("none")

    } else {
        sectionTwo.style.display = "grid"
        text = "Cacher section 2"
    }

    displayToogle.innerHTML = text
})







const formName =  document.getElementById("form-name")
const formEmail =  document.getElementById("form-email")
const formPassword =  document.getElementById("form-password")
const formSubmit =  document.getElementById("form-submit")

/* formName.addEventListener("keyup", () => {
    console.log(formName.value)
})

formEmail.addEventListener("keypress", () => {
    console.log(formEmail.value)
}) */

formSubmit.addEventListener("click", () => {
    formName.style.border = "1px solid black"
    formEmail.style.border = "1px solid black"
    formPassword.style.border = "1px solid black"

    if(formName.value === "" || formEmail.value === "" || formPassword.value === ""){
        let text = "Please fill out the form: ";
        if(formName.value === ""){
            formName.style.border = "1px solid red"
            text += "name is empty "
        } else {
            text += "name is not empty "
            formName.style.border = "1px solid green"   
        }
        if(formEmail.value === ""){
            formEmail.style.border = "1px solid red"
            text += "email is empty "
        } else {
            text += "email is not empty "
            formEmail.style.border = "1px solid green"
        }
        if(formPassword.value === ""){
            formPassword.style.border = "1px solid red"
            text += "password is empty"
        } else {
            text += "password is not empty"
            formPassword.style.border = "1px solid green"
        }
        //alert(text)
        return
    }
    if(!formEmail.value.includes("@")){
        alert("Please enter a valid email")
        return
    }
    alert( `submitted ${formName.value}, ${formEmail.value}, ${formPassword.value}`)
})