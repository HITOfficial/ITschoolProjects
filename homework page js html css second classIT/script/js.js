var all = document.getElementsByClassName('all');
var chair = document.getElementsByClassName('chair');
var tables = document.getElementsByClassName('tables');
var sets = document.getElementsByClassName('sets');
var photos = document.getElementsByClassName('div_single_photo');
const images = document.getElementsByClassName('img_single_photo');
const select = document.getElementsByClassName('selected');
chair_array = [2, 3, 5, 6, 8, 9, 10, 11, 12, 2, 15 ];
tables_array = [0, 1, 4, 5, 6, 7, 8, 12, 13, 15, 16];
sets_array = [0, 1, 3, 5, 10, 11, 12, 13];
all_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
pyrk = [0, 3, 13, 23];
del_border = [0, 1, 2, 3];
all[0].addEventListener('click', function(){
    del_all ();
    add_all ();
    // select[0].classList.add('bordered');
});
chair[0].addEventListener('click', function(){
    del_all ();
    add_chair ();
    for (let i = 0; i < del_border.length; i++){
        select[i].classList.remove('bordered');
    }
});
tables[0].addEventListener('click', function(){
    del_all ();
    add_tables ();
});
sets[0].addEventListener('click', function(){
    del_all ();
    add_sets ();
});

function add_all () {
    for (let i = 0; i < all_array.length; i++){
        let x = all_array[i] += 1;
        images[i].src = "images/icon/" + x +".jpg"
        if (images[x].src == NaN){ // tu NaN bo lipa, pozostawały klocki puste a zarazem widoczne, więc 3ba było jakoś je wykluczyć
            images[x].src = "";
        };
    };
};

function del_all () {
    for(var i = 0; i < images.length; i++) {
        // photos[i].classList.remove("div_single_photo", "div_photo_position");
        images[i].src="";
        // images[i].classList.remove('img_single_photo', /*'img_single_photo:hover'*/);
    }};

function add_chair (){
    // var photos = document.getElementsByClassName('div_single_photo');
    for(var i = 0; i < chair_array.length; i++){
        let x = chair_array[i] += 1;
        // console.log (x); // to było dla obczajki jak działa
        images[i].src = "images/icon/" + x +".jpg"
        if (images[x].src == NaN){
            images[i].src = "";
        };
        // } else if (images[11].src == NaN){
        //     images[i].src = "";
        // }
    };
    // photos[i].innerHTML = "\"<img class=\"img_single_photo\" src=\"images/icon/"+ [i] +".jpg\">";
};    

function add_tables () {
    for (let i = 0; i < tables_array.length; i++){
        let x = tables_array[i] += 1;
        images[i].src = "images/icon/" + x +".jpg"
        if (images[x].src == NaN){ 
            images[x].src = "";
        };
    };
};

// function fun_del_border () {
//     for (let i = 0; i < del_border; i++){
//         select[i].classList.remove('bordered'); 
//     };
// };

function add_sets () {
    for (let i = 0; i < sets_array.length; i++){
        let x = sets_array[i] += 1;
        images[i].src = "images/icon/" + x +".jpg"
        if (images[x].src == NaN){ 
            images[x].src = "";
        };
    };
};

// function tryit() {
//     images[2].src= "images/icon/1.jpg";
// }
// function pyrkx () {
//     for(var i = 0; i <=pyrk.length; i++){
//         console.log(pyrk[i]+=1); tutaj sprawdzałem działania a zostawiłem na pamiatke
//     }};

// for (let i = 0; i< select.length; i++){
//     select[i].classList.remove('selected');
// }