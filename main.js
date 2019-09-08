let clickVal = 0;

const createDiv = (val) => {
    if(val==1){
        //create body div
        let divi = document.createElement("DIV");
        divi.className  = "overlay";
        document.querySelector(".img_container").appendChild(divi);
    }
    else{
        //remove
        let toremo = document.querySelector(".overlay");
        document.querySelector(".img_container").removeChild(toremo);
    }
}

const searchImg = async () => {
  const url = await fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then((da)=>{return{...da[0]}})
        .then(({url}) => url);
    document.getElementById("catImg").src = url;
}


searchImg();

const cat=document.getElementById("catImg");

cat.addEventListener("click", () => {
    cat.src= ''
    createDiv(1);    
        setTimeout(() => {
            searchImg();                
        }, 5000);    
    let time = 6;
    let timm = setInterval(() => {
        time-=1;
        document.querySelector("#timer").innerHTML = time;
        if(time==0){            
            createDiv(0);
            clearInterval(timm);
        }
    }, 1000);
        
    
    clickVal+=1;
    
    document.querySelector("#counter").innerHTML = clickVal;
})



