let globalArr = []
    let total = document.querySelector("#total")
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    let containerEl = document.querySelector(".Container")
    let totalItems = document.querySelector("#item-in-the-cart")


    Display(cart)
    function Display(data) {
        containerEl.innerHTML = ""
        cart.forEach((element, index) => {
            let cards = document.createElement("div")
            cards.className = "cards"

            let image = document.createElement("img")
            image.src = element.img
            image.className = "imgClass"

            let name = document.createElement("h3")
            name.innerText = element.brand

            let desc = document.createElement("p")
            desc.innerText = element.details

            let price = document.createElement("h2")
            price.innerText = `₹${element.price}`
            price.className = "price"

            let category = document.createElement("p")
            category.innerText = element.category

            let quantity = document.createElement("span")
            quantity.textContent = element.quantity


            // remove
            let remove = document.createElement("button")
            remove.textContent = "X"
            remove.className = "removeBTN"
            remove.addEventListener("click", () => {
                cart = cart.filter((ele, i) => {
                    return i !== index
                })
                localStorage.setItem("cart", JSON.stringify(cart))
                Display()
            })

            // decrement
            let decrement = document.createElement("button")
            decrement.textContent = "-"
            decrement.className = "decBTN"
            decrement.addEventListener("click", () => {
                if (element.quantity > 1) {
                    element.quantity--
                }
                localStorage.setItem("cart", JSON.stringify(cart))
                Display()

            })



            // Increment
            let increment = document.createElement("button")
            increment.textContent = "+"
            increment.className = "incBTN"
            increment.addEventListener("click", () => {
                element.quantity++
                localStorage.setItem("cart", JSON.stringify(cart))
                Display()

            })
            cards.append(image, name, price, decrement, quantity, increment, remove)
            containerEl.append(cards)
        })


        // functaionality for sum+
        let sum = 0
        for (let i = 0; i < cart.length; i++) {
            sum += cart[i].price * cart[i].quantity
        }
        total.textContent = `₹${sum}`

        // total items in the cart
        let count = 0;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id == cart[i].id) {
                count++
            }
        }
        totalItems.textContent = count





        let btnEl = document.querySelector(".coup")
        btnEl.addEventListener("click", () => {
            let voucherEl = document.querySelector(".voucherIn").value
            let discount = 50;
            if (voucherEl == "Shree35") {
                total.textContent = `₹${Math.floor(sum - (sum * 0.10))}`
            }
        })
    }



    // checkout form linkage with order place button

    let checkout = () => {
        window.location.assign("popup.html")
        window.locationa
    }
    function image()
    {
      window.location.assign("index.html")
    }