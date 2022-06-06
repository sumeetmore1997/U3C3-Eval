

let arr= JSON.parse(localStorage.getItem("user")) || [];

function data(n, e, a, p){
    this.name=n;
    this.email=e;
    this.address=a;
    this.amount=p;

}
function addData(e){
    e.preventDefault()

    let form = document.getElementById("form")
    let name= form.name.value;
    // console.log(name)
    let email=form.email.value;
    let address= form.address.value;
    let amount= form.amount.value;

    let p1 = new data(name, email, address, amount)

    arr.push(p1)
    // console.log(arr)

    localStorage.setItem("user", JSON.stringify(arr))

}