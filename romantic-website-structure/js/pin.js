const PIN = "150224";

const inputs = document.querySelectorAll(".pin-box input");

const message = document.getElementById("pin-message");

const card = document.querySelector(".pin-card");

inputs.forEach((input,index)=>{

    input.addEventListener("input",()=>{

        input.value=input.value.replace(/[^0-9]/g,'');

        if(input.value && index<5){

            inputs[index+1].focus();

        }

        checkPIN();

    });

    input.addEventListener("keydown",(e)=>{

        if(e.key==="Backspace" && input.value===""){

            if(index>0){

                inputs[index-1].focus();

            }

        }

    });

});

function checkPIN(){

    let value="";

    inputs.forEach(i=>{

        value+=i.value;

    });

    if(value.length===6){

        if(value===PIN){

    message.style.color="#4CAF50";

    message.innerHTML="❤️ Selamat Datang";

    setTimeout(()=>{

        showPage("envelope-page");

    },1000);

        }

        else{

            message.innerHTML="PIN Salah";

            card.classList.add("shake");

            setTimeout(()=>{

                card.classList.remove("shake");

            },400);

            inputs.forEach(i=>i.value="");

            inputs[0].focus();

        }

    }

}