// function sendMail(){
//     let parms = {
//         name : document.getElementById("name").value,
//         email : document.getElementById("email").value,
//         subject : document.getElementById("subject").value,
//         message : document.getElementById("message").value,
//     }

//     emailjs.send("service_4ihfx6f","template_5ikna64" , parms).then(alert("Email Sent !!!"))
// }



function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_4ihfx6f", "template_5ikna64", parms)
    .then(function(response) {
        alert("Email Sent !!!");
    })
    .catch(function(error) {
        alert("Failed to send email. Please try again.");
    });
}
