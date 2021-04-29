let form1 = document.querySelector(".form1")
let form2 = document.querySelector(".form2")
let form3 = document.querySelector(".form3")

let nxt1 = document.querySelector("#nBtn1")
let nxt2 = document.querySelector("#nBtn2")

let pre1 = document.querySelector("#pBtn1")
let pre2 = document.querySelector("#pBtn2")



{
    nxt1.addEventListener("click", () => {
        form1.classList.add("displayHidden")
        form2.classList.add("displayShow")
    })
    
    nxt2.addEventListener("click", () => {
        form1.classList.add("displayHidden")
        form2.classList.remove("displayShow")
        form3.classList.add("displayShow")
    })
    
    
    pre1.addEventListener("click", () => {
        form1.classList.remove("displayHidden")
        form2.classList.remove("displayShow")
    })
    
    pre2.addEventListener("click", () => {
        form3.classList.remove("displayShow")
        form2.classList.add("displayShow")
    })
}





// btn disable//

// function myfun(){

//     if(document.querySelector("#input").value !==""){
//         nxt1.addEventListener("click", () => {
//             form1.classList.add("displayHidden")
//             form2.classList.add("displayShow")
//         })
//     }
    
// }
// myfun();

  
    













// auto btn hide//



// let inupt = document.querySelector("#input")

// function myfun(){
//     if(inupt.value===""){
//         nxt1.classList.add("displayHidden")
//     }else if(inupt.value !=""){
//         nxt1.classList.add("displayShow")
//     }
// }

// myfun();

// inupt.addEventListener("keyup",myfun());