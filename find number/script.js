var tylko_raz, random, tab, lives, lives_tab, current,live_count, remove, rem, hp, restart;
var hearts_place = document.querySelector('.hearts');

lives = () => {
    if (lives.done){
        return;
    }
    var h = '<img src=h.png>';
    lives_tab = [h,h,h,h,h];
    current = hearts_place.innerHTML;
    for(i = 0; i < lives_tab.length; i++) {
        current += lives_tab[i]; // zabrałem dodatkową zmienną żeby nadpisywała aktualne serca i dodawała kolejne
        hearts_place.innerHTML = current;
    }
    live_count = document.querySelectorAll('img');
    hp = live_count.length
    lives.done = true;
    
}

remove = () => rem = document.querySelector('img').remove();

lives ();



tylko_raz = () => {
    if ( tylko_raz.done) {
        return; // podpatrzone z internetu a zamysł był taki że ta funkcja ma się tylko raz wywołać, żeby ustawić randoma 
    }
    const min = document.querySelector('.min').value;
    const max = document.querySelector('.max').value;
    random = Math.round(Math.random()*(max-min)+min); // musiałem deklarować wcześniej bo inaczej nie będzie widziała ich druga funkcja
    tylko_raz.done = true;
    console.log(random);
    tab = ['Szukana Liczba jest większa', 'Szukana liczba jest mniejsza','udało Ci się zgadnąć liczbę! a była to: ', 'Trafiłeś!'];
}

const wyszukaj = () => {
    console.log(random);
    let usernumber = document.querySelector('.liczba-wpisywana').value;
    let x = document.querySelector('.tekst');
    console.log(random);
    if (usernumber == random) {
        alert( tab[2] + random);
        x.innerHTML = tab[3];
        window.location.reload(); // musi być window. bo inaczej samo location.reload nie refreshuje zmiennych
    }
    if(usernumber < random){
        console.log(tab[0]);
        x.innerHTML = tab[0];
        hp--
        if(hp == 0){
            alert('Przegrałeś, spróbuj ponownie')
            window.location.reload();
        }
        remove();
        
    } else if (usernumber > random){
        console.log(tab[1]);
        x.innerHTML = tab[1];
        hp--
        if(hp == 0){
            alert('Przegrałeś, spróbuj ponownie')
            window.location.reload();
        }
        remove();
    }
}




