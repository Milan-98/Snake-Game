const snack = document.querySelector(".a171");
const main=document.querySelectorAll(".main div");

var i=170;


window.addEventListener("keydown",(event)=>
{ 
     if(event.keyCode===40)//keydown
    {
        
        main[i].style.backgroundColor= "cadetblue"
            i=i+20;
            if(i<=399)
           {
            main[i].style.backgroundColor= "pink";
            main[i+1].style.backgroundcolor = "pink"

           }
           else{
                alert("Welcome To Club,Try again");
            location.reload();

           }
     }
     
})
window.addEventListener("keydown",(event)=>
{ 
    if(event.keyCode==38)//upkey
    {
        main[i].style.backgroundColor= "cadetblue"
        i=i-20;
        if(i>=0)
        {
         main[i].style.backgroundColor= "pink";
        }
        else  
        {
            alert("Well; Tryed");
            location.reload();
        }
        

        
    }
});
window.addEventListener("keydown",(event)=>
{ 
     if(event.keyCode==37)//leftkey
    { 
        main[i].style.backgroundColor= "cadetblue"
        i=i-1;
        if((i-19)%20!=0)
        {
         main[i].style.backgroundColor= "pink";
        }
        else {
            alert("Game Over");
            location.reload();

        }
    }
});
window.addEventListener("keydown",(event)=>
{ 
     if(event.keyCode==39)//rightkey
    {
        main[i].style.backgroundColor= "cadetblue"
        i=i+1;
        if(i%20!=0)
        {
         main[i].style.backgroundColor= "pink";
        }
        else {
            alert("Welcome To club, Play again");
            location.reload();

        }
    }
});


    document.querySelector("button").addEventListener("click",(e)=>
    {
        document.querySelector(".mila").style.display="none";
        setInterval(()=>
        {
    let syam=Math.floor(Math.random()*400);
    main[syam].style.backgroundColor="#FF0000";
},3000)
})



