const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    //використовуючи властивість elements:
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }

    // console.log(`Login: ${email.value}, Password: ${password.value}`);
    console.log({email: email.value, password: password.value});
    event.currentTarget.reset();
}
//іншим методом
//     const formData = new FormData(event.currentTarget);
    
//     formData.forEach((email, password) => {
//         if (email === "" || password === "") {
//             return alert("Please fill in all the fields!");
//         }

//         console.log(`Login: ${email}, Password: ${password}`);
//         event.currentTarget.reset();
//     });
// }