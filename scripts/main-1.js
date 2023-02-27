// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const userRegisterURL = `${baseServerURL}/register`;
const userLoginURL = `${baseServerURL}/login`;

// register
let registerUserUsername = document.getElementById("register-user-username");
let registerUserFirstname = document.getElementById("register-user-firstname");
let registerUserLastname = document.getElementById("register-user-lastname");
let registerUserEmail = document.getElementById("register-user-email");
let registerUserPassword = document.getElementById("register-user-passowrd");
let registerUserAvatar = document.getElementById("register-user-avatar");
let registerUserLevel = document.getElementById("register-user-level");
let registerUserButton = document.getElementById("register-user");

// login
let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");
let loginUserButton = document.getElementById("login-user");

// getTodo
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");
let edit= document.getElementsByClassName("card__item card__link");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;

// Add employees
let proIdInput = document.getElementById("Product-id");
let proNameInput = document.getElementById("Product-image");
let proDesInput = document.getElementById("Product-des");
let proPriceInput = document.getElementById("Product-price");
let proCatInput = document.getElementById("Product-cat");
let proGenInput = document.getElementById("Product-Gender");
let proAgeInput = document.getElementById("Product-Age");
let proUseInput = document.getElementById("Product-uses");
let proFormInput = document.getElementById("Product-form");
let proImgInput = document.getElementById("Product-image");
let proBtn= document.getElementById("add-Product");
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
// let catsData = [];


// update employees
let updateproIdInput = document.getElementById("update-product-id");
let updateproNameInput = document.getElementById("update-product-name");
let updateproImageInput = document.getElementById("update-product-image");
let updateproCatInput = document.getElementById("update-product-cat");
let updateproPriceInput = document.getElementById("update-product-price");
let updateproUpdateBtn = document.getElementById("update-product");
 
let updateScoreproId = document.getElementById("update-score-product-id");
let updateScoreproSalary = document.getElementById(
  "update-score-product-salary"
);
let updateScoreproSalaryButton = document.getElementById(
  "update-score-product"
);

//filter

let filterlessthanone= document.getElementById("filter-less-than-1L");
let filtermorethanone= document.getElementById("filter-more-than-equal-1L");




let productsData = [];  //employeesdata to productsdata

// ***** Event listeners ***** //

//step-1, Display list of employees on page load
//step-1 at 
window.addEventListener("load", () => {
  fetchAndRenderProduct();    //for step-1
});

function fetchAndRenderProduct(){   //for step-1
  fetch(`${baseServerURL}/employees`)
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data);
    productsData=data;
    renderCardList(data);  // (for step-1)
    
  })
}

//step-5, sort low to high based on salaary
sortAtoZBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let sorteddata= productsData.sort((a,b) => {return a.salary-b.salary});
  renderCardList(sorteddata);
});

sortZtoABtn.addEventListener("click", (e) => {
  e.preventDefault();
  let sorteddata= productsData.sort((a,b) => {return b.salary-a.salary});
  renderCardList(sorteddata);
});

//step-2, Ability to add employee in backend and display to frontend.
proBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let id= proIdInput.value;
  let name= proNameInput.value;
  let img= proImgInput.value;
  let des= proDesInput.value;
  let price= proPriceInput.value;
  let cat= proCatInput.value;
  let gender= proGenInput.value;
  let age= proAgeInput.value;
  let use= proUseInput.value;
  let form= proFormInput.value;
  console.log("2");
  
  addProduct(id,name,img,des,price,cat,gender,age,use,form);
  alert("Product added");
  fetchAndRenderProduct();
});

function addProduct(id,name,img,des,price,cat,gender,age,use,form)
{
  fetch(`${baseServerURL}/employees`,{
    method: 'POST',
  body:JSON.stringify({
    product_Id:id,
    name:name,
    product_description:des,
    price:price,
    category:cat,
    gender:gender,
    age:age,
    uses:use,
    product_form:form,
    image:img
  }),
  headers:{
    "content-type":"application/json" 
  }
  })
}

//step-4, update salary of particular id.
updateScoreEmpSalaryButton.addEventListener("click", function () {
  let id=updateScoreEmpId.value;
  let salary_updated= updateScoreEmpSalary.value;
  updatesalary(id,salary_updated);
  alert("salary updated");
  fetchAndRenderProduct();
});

function updatesalary(id,salary_updated){
  fetch(`${baseServerURL}/employees/${id}`,{
    method: "PATCH",
    body: JSON.stringify({
      salary: salary_updated,
    }),
    headers:{
      "content-type":"application/json" 
    }
  })
}

//step-6, filter
  filterlessthanone.addEventListener("click",(e) =>{
    e.preventDefault();
    let filterdata= productsData.filter((item)=>{
      return item.salary<100000;
    })
    renderCardList(filterdata);
  });

  filtermorethanone.addEventListener("click",(e) =>{
    e.preventDefault();
    let filterdata= productsData.filter((item)=>{
      return item.salary>=100000;
    })
    renderCardList(filterdata);
  })

//step-3; update all fields of employees.
// edit.addEventListener("click",()=>{

// })
updateproUpdateBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let id=updateproIdInput.value;
let name=updateproNameInput.value;
let image= updateproImageInput.value;
let cat= updateproCatInput.value;
let price= updateproPriceInput.value;
  updateproducts(id,name,image,cat,price);
  alert("employee details updated");
  fetchAndRenderProduct(); 
});

function updateproducts(id,name,image,dept,sal) {
  fetch(`${baseServerURL}/employees/${id}`,{
    method: 'PUT',
    body: JSON.stringify({
      
      name:name,
    department:dept,
    salary:sal,
    image:image
    }),
    headers: {
      "content-type":"application/json"
    }
  })
}

//step-8,login user

loginUserButton.addEventListener("click", async function (e) {
  e.preventDefault();
  let username=loginUserUsername.value;
  let passowrd= loginUserPassword.value;
  loginuser(username,passowrd);
  
});

 function loginuser(username,passowrd)
{
  fetch(`${baseServerURL}/login`,{
    method:'POST',
    body: JSON.stringify({
     username: username,
     password: passowrd,
    }),
    headers:{
      'Content-type':'application/json'
    }
  }).then((res)=>res.json())         //to get token
  .then((data)=>{
    localStorage.setItem("localAccessToken",data.accessToken);
    localStorage.setItem("userId",data.user.id);
    alert("login successful");
  });       // storing token in local storage
}
//step-7,register user.
registerUserButton.addEventListener("click", function (e) {
  e.preventDefault();
  let username=registerUserUsername.value;
  let fname= registerUserFirstname.value;
  let lname= registerUserLastname.value;
  let email= registerUserEmail.value;
  let passowrd=registerUserPassword.value;
  let dept= registerUserLevel.value;
  let img= registerUserAvatar.value;

  registeruser(username,fname,lname,email,passowrd,dept,img);
  alert("registration successful")

});

function registeruser(username,fname,lname,email,passowrd,dept,img)
{
  fetch(`${baseServerURL}/register`,{
    method:'POST',
    body: JSON.stringify({
     username: username,
      firstname:fname,
      lastname:lname,
      email:email,
     password: passowrd,
      userlevel:dept,
      avatar:img,
    }),
    headers:{
      'Content-type':'application/json'
    }
  })
}

// ***** Utilities ***** //
// array of objects
// id, title, desc, linkText, linkUrl, imageUrl
function renderCardList(cardData) {
  let cardList = `
    <div class="card-list">
      ${cardData
        .map((item) =>
          getCard(            //(for step-1)
            item.product_Id,
            item.name,
            item.product_description,
            item.price,
            item.image,
            item.category,
            item.gender,
            item.age,
            item.uses,
            item.product_form
          )
        )
        .join("")}
    </div>
  `;

  mainSection.innerHTML = cardList;

  // let editLinks = document.querySelectorAll(".card__link");
  // for (let editLink of editLinks) {
  //   editLink.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     let currentId = e.target.dataset.id;
  //     populateEditForms(currentId);
  //   });
  // }
}

function getCard(id, name, desc, price, img) {    //for step-1
  let card = `
      <div class="card" data-id=${id} >
        <div class="card__img">
        <img src=${img} alt="product image"/>
        </div>
        <div class="card__body">
          <h3 class="card__item card__title">${id}</h3>
          <h3 class="card__item card__title">${name}</h3>
          <h3 class="card__item_dep">${desc}</h3>
          <h3 class="card__item_salary">${price}</h3>
          </div>
          <a href="" data-id=${id} class="card__item card__link">Edit</a>
        </div>
      </div>
  `;
  return card;
}

