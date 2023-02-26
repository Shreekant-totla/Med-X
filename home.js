let imgTag = document.getElementById("imgtag");
  let slidediv = document.getElementById("slideshow");
  slidediv.append(imgtag);
let currentIndex = 0;

var slideImages = [
    "https://onemg.gumlet.io/346f28fa-1c58-480f-af5b-9568ba2d0dae_1670317321.jpg?w=981&h=250&format=auto",
    "https://onemg.gumlet.io/a_ignore,w_981,h_250,c_fit,q_auto,f_auto/69fafdfb-41ab-400d-8707-454a8e976205.png",
    "https://onemg.gumlet.io/a_ignore,w_981,h_250,c_fit,q_auto,f_auto/56d71eb8-f343-417c-b3ea-7a9717e7303f.png",
    "https://onemg.gumlet.io/a_ignore,w_981,h_250,c_fit,q_auto,f_auto/290b5970-99ed-4022-b29e-095ad9b40199.png",
    "https://onemg.gumlet.io/a_ignore,w_981,h_250,c_fit,q_auto,f_auto/49a3b635-a507-45a4-a54b-0b791e19e536.png",
    
]
slideshowFun(slideImages);

function slideshowFun(images){
  imgTag.setAttribute("src",images[currentIndex]);
  if(currentIndex==images.length-1){
    currentIndex = 0;
  }else{
    currentIndex++;
  }
}
window.addEventListener("load", function () {
    setInterval(slideshowFun,2000,slideImages);
  
  });

  
  
 // signup///////////////////////////////////////////

 let nameup = document.getElementById("nameup");
 let phoneup=document.getElementById("mobileup")
 let emailup = document.getElementById("emailup");
 let passwordup = document.getElementById("passwordup");
 
 let personData = JSON.parse(localStorage.getItem("account-data"))||[];
 document.getElementById("up").addEventListener("submit", (e) => {
   e.preventDefault();
   let obj = {
     Name: nameup.value,
     Email: emailup.value,
     Password: passwordup.value,
     MobileNo:phoneup.value
   }
   personData.push(obj);
   localStorage.setItem("account-data", JSON.stringify(personData));
   window.location.href ="./index.html"
 })

// sign in////////////////////////
 let emailin=document.getElementById("emailin")

 let passwordin=document.getElementById("passwordin");

 let storeddata=JSON.parse(localStorage.getItem("account-data"))||[];
 document.getElementById("in").addEventListener("submit",(e)=>{
   e.preventDefault();
   
    storeddata.forEach((el)=>{
     if(emailin.value===el.Email  && passwordin.value ===el.Password){
       
       alert("Login Sucessfull")
      
       document.getElementById("login").innerText=`Hello Mr. ${el.Name}`;
       $('.signup, .signin, #pop').hide();
       
     }
     else{
     
       alert("Wrong Credentials")

     }
    })
   }

 )
