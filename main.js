let count=0;

// var incriment=document.querySelector("#incri");
// var dicriment=document.querySelector("#dicri");
// var reset= document.querySelector("#reset");
// var result= document.querySelector("#result");



function incrim(){
    count=count+1;
    result.innerHTML=count;
    if(count>0){
        result.style.color='green'
    }
    if(count==0){
        result.style.color='black'
    }

} 

function dicrim(){
    count=count-1;
    result.innerHTML=count;
    if(count<0){
        result.style.color='red'
    }
    if(count==0){
        result.style.color='black'
    }
   
} 
function resetvalue(){
    count=0;
    result.innerHTML=count;
    result.style.color='black'
} 