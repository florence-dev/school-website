const form =document.querySelector('form')

const fullName =document.getElementById("name")
const email =document.getElementById("email")
const phone =document.getElementById("phone")
const subject =document.getElementById("subject")
const mess =document.getElementById("message")

function sendEmail(){
const bodyMessage = 'Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}';


    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "mesoflorence31@gmail.com",
    Password : "361233CA4369DD3C01F15AEBC35083BED132",
    To : 'mesoflorence31@gmail.com',
    From : "mesoflorence31@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
}).then(
  message => {
    if (message == "OK") {
        Swal.fire({
  title: "Success!",
  text: "Message sent successfully!",
  icon: "success"
});
    }
  }
);
}

form.addEventListener("submit",(e) =>{
    e.preventDefault();

   sendEmail();
});