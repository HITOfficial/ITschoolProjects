var box = document.getElementsByClassName("square");
for (var i=0 ; i<box.length ; i++){
    if(i % 2 ==1){
        box[i].addEventListener("click", function(){
            alert("kliknołeś");
        });
    }   
};


// for( var i = 0 ; i<box.length ; i++){
//     box[i].addEventListener("click", function(){
//     alert("hi");
//     })}; 
// box.addEventListener(click, function()
//     {
//         box.immerHTML
//     }
// );
// var clicked = document.getElementsByClassName("clicked");
// for(i=0 ; i<clicked.length; i++)
// clicked[i].addEventListener("click", function(){
//     alert("clicked");
// }) // na przykładnie prawidłowe działanie klikacza

// var h = document.querySelector("h1");
// h.addEventListener("click", function(){
//     alert("clicked h1!");
// });
