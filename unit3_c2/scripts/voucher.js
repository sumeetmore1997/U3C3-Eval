
//apikey = https://masai-vouchers-api.herokuapp.com/api/vouchers

var cartData=JSON.parse(localStorage.getItem("purchase")) || []

const Voucher = document.getElementById("voucher_list")

const url = "https://masai-vouchers-api.herokuapp.com/api/vouchers"

fetch(url)
.then (function(res){
    return res.json()
})
.then(function(res){
    // console.log(res)
    appendData(res)

})
    .catch(function(err){
        console.log("err:",err);
    })

    function appendData(res){
        res[0].vouchers.forEach(function(ele){
            let div=document.createElement("div")
            div.setAttribute("class", "voucher")
            console.log(ele)
            let image = document.createElement("img")
            image.src=ele.image;

            let name = document.createElement("p")
            name.innerText=ele.name;

            let price = document.createElement("p")
            price.innerText=ele.price;

            let btn = document.createElement("button")
            btn.setAttribute("class","buy_voucher")
            btn.innerHTML="Buy"
            btn.addEventListener("click", function(){
                addToCart(ele)
            })

            div.append(image,name,price,btn)

            Voucher.append(div)


        })

    }
function addToCart(ele){
    console.log(ele);
    cartData.push(ele)

    localStorage.setItem("purches",JSON.stringify(cartData))
}