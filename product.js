let product=document.getElementById("productsix");
// let productsub = document.getElementById("productsixsubdiv")


let API=("http://localhost:3000/product")
async function FetchData(){
    try{
      let request=await fetch(API);
     let  data= await request.json();
      console.log(data);
       FilterData(data);
      //  Scarchdata(data);
       
    }catch(err){
      console.log(err)
    }
  }

    FetchData()
    let filterBy = document.getElementById("filter");
    filterBy.addEventListener("change",()=>{
      FetchData()
    })
    function FilterData(data){
      let filterValue = filterBy.value;
      if(filterValue===""){
        DisplayProduct(data)
      }else{
        data=data.filter((product)=>{
          return product.category == filterValue;
        })
        DisplayProduct(data)
      }
    }
    async function NFetchData(){
        try{
          let request=await fetch(API);
         let  sdata= await request.json();
          console.log(sdata);
           
            Scarchdata(sdata);
           
        }catch(err){
          console.log(err)
        }
      }
  
      NFetchData()
      let searchForm = document.querySelector("form");
      searchForm.addEventListener("submit",(e)=>{
        NFetchData()
        e.preventDefault();
       
  
       
      })
      function Scarchdata(sdata){
          let searchParams = searchForm.search.value;
        sdata = sdata.filter((element) => {
              if (
                  element.name.toUpperCase().includes(searchParams.toUpperCase()) ===
                  true
              ) {
                  return true;
              } else {
                  return false;
              }
          });
          DisplayProduct(sdata);
      }
      let CartArr = JSON.parse(localStorage.getItem("cart"))||[];
      
    function DisplayProduct(data) {
        product.innerHTML = "";
        data.forEach((element) => {
  
        //   if(element.category==="IB POWER BRAND"){
              
              let indiv = document.createElement("div");
              indiv.setAttribute("class","card1")
        
              let img=document.createElement("img")
              img.setAttribute("src",element.image)
              
            let name = document.createElement("h3")
            name.innerText = element.name;
             
            let div1=document.createElement("div");
            div1.innerText="bottle of 60 capsules"


            let para1 = document.createElement("h4");
            para1.setAttribute("id","detail")
            para1.innerText=element.category

            let para2 = document.createElement("p");
            para2.setAttribute("id","des")
            para2.innerText=element.gender

            let hed3 = document.createElement("h4");
            hed3.innerText=`${element.price}`
              
            let add_to_cart = document.createElement("button");
            add_to_cart.innerText="ADD"

            add_to_cart.addEventListener("click",()=>{
                if(checkDuplicate(product)){
                  alert("Product Already in Cart")
                }else{
                  CartArr.push({...product,quantity:1});
                  localStorage.setItem("cart",JSON.stringify(CartArr));
                  alert("Product Added To Cart")
                  window.location.href = "./product.html"
                }
            })

            
              indiv.append(img,name,div1,para1,para2,hed3,add_to_cart);
            //   div.append(indiv);
            //   product.append(productsub)
            product.append(indiv)
          })
         }

         function checkDuplicate(product){
            for(let i=0; i<CartArr.length;i++){
        
              if(CartArr[i].id===product.id){
                return true;
              
              }
            }
            return false;
            }
            const totalPro = document.getElementById("top") ;
  let Cart= JSON.parse(localStorage.getItem("cart"))||[];
    let count=0;
for(let i=0;i<Cart.length;i++)
{
  count+=Cart[i].quantity;
}

totalPro.textContent=count;

        

// fetchAndRenderUsers()
// function fetchAndRenderUsers() {
//     fetch(`https://reqres.in/api/users`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data.data);
//         product.innerHTML = getCardList(data);
//       });
//   }
  
//   // utilites
//   function getCardList(data) {
//     const cardList = `
//       <div class="card-list">
//         ${ data.data.forEach((item) => getCard(
//         item.id,
//         item.image,
//       )
//      ).join("")}
//       </div>
//     `
//     return cardList;
//   }
  
//   // Imperative -> you step by step tell js how to do things
//   // Declarive -> you just tell javascript what you need
  
//   function getCard(userId, imageUrl) {
//     let cardElement = `
//   <div class="card" data-id="${userId}">
//           <div class="card-image">
//           <img src="${imageUrl}" alt="food">
//           </div>
//         </div>
//     `;
  
//     return cardElement;
//   }