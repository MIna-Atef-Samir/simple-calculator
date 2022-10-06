let first = document.querySelector(".fr");
let op = document.querySelector(".op");
let last = document.querySelector(".la");
let re = document.querySelector(".re");
let btns = document.querySelectorAll("button");


btns.forEach(b=>{
b.addEventListener("click", e=>{
    let value = e.target.value;
    
    let operator = op.textContent;
    let operartors = ["+", "-", "x", "/"];

    function calculation(b){
        if (value == "+" || value == "x" || value == "-" || value == "/"){
            op.textContent += b;
            console.log(b);
        }else if(operator != "" && value != "="){
            last.textContent += b;
            console.log(b);
        }else if(value != "="){
            first.textContent += b;
            console.log(b);
        }
        if(value == "=" && last.textContent != ""){
            re.style.zIndex = "22"
            if(operator == "+"){
                let result = Number( first.textContent) + Number (last.textContent)
                console.log(result);
                re.innerText = String (result);
            }else if(operator == "-"){
                let result = Number( first.textContent) - Number (last.textContent)
                re.textContent = result;
            }else if( operator == "x"){
                let result = Number( first.textContent) * Number (last.textContent)
                re.textContent = result;
            }else if(operator == "/"){
                let result = Number( first.textContent) / Number (last.textContent)
                re.textContent = result;
            }
        }
            if(value == "C"){
                window.location.reload();
            }

    }
    console.log(value);
    calculation(value);

})
});


// let x = 5
// let y = 2

// console.log(x * y);
