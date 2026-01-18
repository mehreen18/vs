// let box=document.querySelector(".box");
let btn=document.querySelectorAll("button");
let msg=document.querySelector(".msg");

let player0=true;
let values=[[0,1,2],[3,4,5],[6,7,8],[2,4,6],
            [0,4,8],[0,3,6],[1,4,7],[2,5,8]];
     
        const    show = ()=>{
            for(let position of values){
                let position1=btn[position[0]].innerText;
                let position2=btn[position[1]].innerText;
                let position3=btn[position[2]].innerText;
                if(position1 !="" && position1===position2 && position2===position3)
                {
                    msg.innerText=`player ${position1} is winner🥳🥳 `;
                    msg.classList.remove("hid");
                     btn.forEach(b => b.disabled = true); // STOP game
            return; 
                }
              

            }
            
        }
btn.forEach((button)=>{
button.addEventListener("click",function(){
            if(player0){
              button.innerText="0";
                player0=false;
            }
            else{
               button.innerText="x";
                player0=true;
            }
            button.disabled=true;
            show();
            });
            });