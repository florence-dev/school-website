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



}
.header{
    width:1400px;
    height: 250px;
    
  
}
.nav{
    width: 1400px;
      background-color: white;
    margin: 0;
    overflow: auto;
   
}
ul{
    margin: 0;
    padding: 0;
    list-style: none;
    
}
li{
    float: left;
   
}
.nav a{
  color: #111e27;
    width: 200%;
    text-decoration: none;
    display: block;
    text-align: center;
    padding: 15px;
    text-transform: uppercase;
    font-size:17px ;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-left: 150px;
     

}

.nav a{
    color: black;
}
.nav a:hover {
  color: white;
  background-color: black;
}
 #hero{
    width: 104%;
    height: 100vh;
    background:linear-gradient(rgba(0, 0, 0, 0.247),rgba(0, 0, 0, 0.26)) ,url("images/14.jpg") no-repeat center/cover;

 }
 .container {
   width: 98%; 
   height: 100%;
   max-width: 1000px;
   margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: right;
color: white;
 }
 .container  .info h1{
    font-size: 3rem;
    margin-bottom: 1rem;
    color: rgba(255, 255, 0, 0.774);
 }
 .container  .info h2{
    font-size: 1.5rem;
    margin-bottom: 2rem;
 }
 .container  .info p{
    font-size: 1.2rem;
    max-width: 68%;
    margin: 0 auto;
    margin-right: 0;
 }
 .container  .info a{
    text-decoration: none;
    display: inline-block;
    background-color: white;
    border-radius: 4px;
    font-size: 20px;
    padding: 0.5em 2em;
    margin-top: 2rem;
    color: black;
 }
 .container .info a:hover{
    color: white;
    background-color: black;
 }
footer{
    background-color: #111;
    width: 104%;
    
}
.footerContainer{
    width: 80%;
    padding: 70px 30px 20px;
}
.socialIcons{
    display: flex;
    justify-content: center;
 

}
 .fa-brands {
    text-decoration: none;
    padding: 10px;
    background-color: white;
    margin: 10px;
    border-radius: 50%;
     
}
.socialIcons a i{
    font-size: 2em;
    color: black;
    opacity: 0.9;
    
}


 .socialIcons a:hover i{
    color: white;
    transition: 0,5s;
      background-color: #111;
 }
 .footerNav{
    margin: 30px 0;
 }
 .footerNav ul{
display: flex;
justify-content: center;
 }
 .footerNav ul li a{
    color: white;
    margin: 20px;
    text-decoration: none;
    font-size: 1.1em;
    opacity: 0.7;
    transition: 05s;
    
 }
 .footerNav ul li a:hover{
    opacity: 1;
 }
 .footerBottom{
    background-color: #000;
    padding: 20px;
    text-align: center;
   
 }
 .footerBottom p{
    color: white;
     width: 80%;
 }
 @media all and (max-width: 480px) {
   .header{
    width: 100px;
    height: 300p;
    object-fit: cover;
    object-position: bottom;
  
}
   

}
});