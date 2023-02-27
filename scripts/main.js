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

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;

// cats
let empNameInput = document.getElementById("employee-name");
let empImgInput = document.getElementById("employee-image");
let empDeptInput = document.getElementById("employee-dept");
let empSalaryInput = document.getElementById("employee-salary");
let empCreateBtn = document.getElementById("add-employee");
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let catsData = [];

// employees
let updateEmpIdInput = document.getElementById("update-employee-id");
let updateEmpNameInput = document.getElementById("update-employee-name");
let updateEmpImageInput = document.getElementById("update-employee-image");
let updateEmpDeptInput = document.getElementById("update-employee-dept");
let updateEmpSalaryInput = document.getElementById("update-employee-salary");
let updateEmpUpdateBtn = document.getElementById("update-employee");

let updateScoreEmpId = document.getElementById("update-score-employee-id");
let updateScoreEmpSalary = document.getElementById(
  "update-score-employee-salary"
);
let updateScoreEmpSalaryButton = document.getElementById(
  "update-score-employee"
);

let employeesData = [];

// ***** Event listeners ***** //
window.addEventListener("load", () => {
  fetchAndRenderEmployees();
});

sortAtoZBtn.addEventListener("click", () => {

});

sortZtoABtn.addEventListener("click", () => {

});

empCreateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let name= empNameInput.value;
  let img= empImgInput.value;
  let dep= empDeptInput.value;
  let sal=empSalaryInput.value;
  addEmployee(name,img,dep,sal);
  alert("employee added")
  fetchAndRenderEmployees()
});

async function fetchAndRenderEmployees()
{
  try {
    let res= await fetch(`${baseServerURL}/employees`);
    let data= await res.json();
    employeesData=data;
    console.log(data);
    renderCardList(data);
  } catch (error) {
    console.log(error);
  }
}

//adding employees details in backend server.
 function addEmployee(name,img,dep,sal){
 fetch(`${baseServerURL}/employees`,{
  method: 'POST',
  body:JSON.stringify({
    name:name,
    department:dep,
    salary:sal,
    image:img
  }),
  headers:{
    "content-type":"application/json" 
  }
 })
}

updateScoreEmpSalaryButton.addEventListener("click", function () {

});

updateEmpUpdateBtn.addEventListener("click", function () {

});

loginUserButton.addEventListener("click", async function () {

});

registerUserButton.addEventListener("click", function () {
 
});

// ***** Utilities ***** //
// array of objects
// id, title, desc, linkText, linkUrl, imageUrl
function renderCardList(cardData) {
  let cardList = `
    <div class="card-list">
      ${cardData
        .map((item) =>
          getCard(
            item.id,
            item.name,
            item.department,
            item.salary,
            item.image,
          
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

function getCard(id, name, dep, sal, img) {
  let card = `
      <div class="card" data-id=${id} >
        <div class="card__img">
        <img src=server-files/${img} alt="food" />
        </div>
        <div class="card__body">
          <h3 class="card__item card__title">${name}</h3>
          <h3 class="card__item_dep">${dep}</h3>
          <h3 class="card__item_salary">${sal}</h3>
          </div>
          <a href="" data-id=${id} class="card__item card__link">Edit</a>
        </div>
      </div>
  `;
  return card;
}

