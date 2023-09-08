const discountbtn = document.getElementById("discountbtn");
const output = document.getElementById("output");


console.log(discountbtn);
discountbtn.addEventListener("click", () => {
  
     const userinput1 = document.querySelector("#userinput1").value;
     const userinput2 = document.querySelector("#userinput2").value;
    

    if (userinput1 === "" && userinput2 === "") {
        const h1 = document.createElement("h1")
        h1.innerText = "invalid input"
        h1.style.color = "red"
        document.body.appendChild(h1)
    } else {
        const discount = userinput1 - userinput2
        const discountedprice = 100 * (Number(discount / userinput1)).toFixed(2)
       
        output.innerHTML = `congrates you got ${discountedprice}% of discount`;
       
       
        console.log(discountedprice);
        
    }

})