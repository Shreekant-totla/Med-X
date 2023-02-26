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
     else if(emailin.value==="xyz@admin.com" && passwordin.value==="admin@1234"){
      alert("Redirecting to Admin Page")
      window.location.href= "home.html"
     }
     else{
     
       alert("Wrong Credentials")

     }
    })
   }

 )
//////////////////////////////////////////////////////////////////
// sliding section 4 parts 
//  sliding js   
// common
let left=1;
    let right=4;
    let left1=1;
    let right1=4;
    let left2=1;
    let right2=4;
    let left3=1;
    let right3=4;
    
    function show(){
    for (let i=left;i<=right;i++)
      {
        document.getElementById("c"+i).style.display="inline-block";
      }
    for (let i=left1;i<=right1;i++)
      {
        document.getElementById("d"+i).style.display="inline-block";
        
      }
      for (let i=left2;i<=right2;i++)
      {
        document.getElementById("e"+i).style.display="inline-block";
        
      }
      for (let i=left3;i<=right3;i++)
      {
        document.getElementById("f"+i).style.display="inline-block";
        
      }
      
    }

// cccccccccccccccccccccccccccccccccccccccccccccccccccccc
    // unique Selection
    // c
        function moveRight(){
      if(left<=4 && right<=7)
      {
        document.getElementById("c"+left).style.display="none";
        left+=1;
        right+=1;
        for (let i=left;i<=right;i++)
        {
          document.getElementById("c"+i).style.display="inline-block";
        }
      }
      else{
        return;
      }
      
    }

    function moveLeft()
    {
      if(left>=2 && right>=5)
      {
        document.getElementById("c"+right).style.display="none";
        left-=1;
        right-=1;
        for (let i=left;i<=right;i++)
        {
          document.getElementById("c"+i).style.display="inline-block";
        }
      }
      else{
        return;
      }
      
    }
    // ddddddddddddddddddddddddddddddddddddddddddddddddddddd
    // d
    function moveRight1()
    {
      if(left1<=4 && right1<=7)
      {
        document.getElementById("d"+left1).style.display="none";
        left1+=1;
        right1+=1;
        for (let i=left1;i<=right1;i++)
        {
          document.getElementById("d"+i).style.display="inline-block";
        }
      }
      else{
        return;
      }
      
    }

    function moveLeft1()
    {
      if(left1>=2 && right1>=5)
      {
        document.getElementById("d"+right1).style.display="none";
        left1-=1;
        right1-=1;
        for (let i=left1;i<=right1;i++)
        {
          document.getElementById("d"+i).style.display="inline-block";
        }
      }
      else{
        return;
      }
      
    }
// eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
// e
    function moveRight2()
    {
      if(left2<=4 && right2<=7)
      {
        document.getElementById("e"+left2).style.display="none";
        left2+=1;
        right2+=1;
        for (let i=left2;i<=right2;i++)
        {
          document.getElementById("e"+i).style.display="inline-block";
        }
      }
      else{
        return;
      }
      
    }

    function moveLeft2()
    {
      if(left2>=2 && right2>=5)
      {
        document.getElementById("e"+right2).style.display="none";
        left2-=1;
        right2-=1;
        for (let i=left2;i<=right2;i++)
        {
          document.getElementById("e"+i).style.display="inline-block";
        }
      }
      else{
        return;
      }
      
    }
    // ffffffffffffffffffffffffffffffffffffffffffffffffffff
    // f
    function moveRight3()
    {
      if(left3<=4 && right3<=7)
      {
        document.getElementById("f"+left3).style.display="none";
        left3+=1;
        right3+=1;
        for (let i=left3;i<=right3;i++)
        {
          document.getElementById("f"+i).style.display="inline-block";
        }
      }
      else{
        return;
      }
      
    }

    function moveLeft3()
    {
      if(left3>=2 && right3>=5)
      {
        document.getElementById("f"+right3).style.display="none";
        left3-=1;
        right3-=1;
        for (let i=left3;i<=right3;i++)
        {
          document.getElementById("f"+i).style.display="inline-block";
        }
      }
      else{
        return;
      }
      
    }
    /////////////////////////////////////////////////////////